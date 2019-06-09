#!/bin/sh
#
# Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
#
# You are hereby granted a non-exclusive, worldwide, royalty-free license to use,
# copy, modify, and distribute this software in source code or binary form for use
# in connection with the web services and APIs provided by Facebook.
#
# As with any software that integrates with the Facebook platform, your use of
# this software is subject to the Facebook Developer Principles and Policies
# [http://developers.facebook.com/policy/]. This copyright notice shall be
# included in all copies or substantial portions of the software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
# FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
# COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
# IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
# CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

# This is our internal script for publishing releases to GitHub, and npm.
# 1. checkout the master branch of the github repo to a new enlistment in local.
# 2. rsync release branch to the github enlistment without the internal folder.
# 3. commit the changes to the local github repo.
# 4. tag the local github repo with the release version.
# 5. push the master branch to github with the tag.

DIR="$(cd "$( dirname "$0")" && pwd)"

RCTFBSDK_ROOT="$(dirname "$DIR")"

FILE_WITH_VERSION_STRING="android/src/main/java/com/facebook/reactnative/androidsdk/FBSDKPackage.java"

GITHUB_URL=git@github.com:facebook/react-native-fbsdk.git

FB_ECHO_BOLD='\x1B[1m'
FB_ECHO_GREEN='\x1B[1;32;40m'
FB_ECHO_RESET='\x1B[0m'

usage() {
  cat <<EOF
Usage: $0 [-n]

Ships the current enlistment state to the github repository and npm.

OPTIONS:
    -n  Dry run mode. Skips tagging; git push -n; skips npm.
EOF
}

# Call this when there is an error.  This does not return.
die() {
  echo ""
  echo "FATAL: $*" >&2
  exit 1
}

while getopts "nh" opts;
do
  case $opts in
    h)
      usage
      exit 0
      ;;
    n)
      echo "${FB_ECHO_BOLD}Running the script in dry-run mode. Skip tagging the release \
branch; skip publish to npm; passes dry-run to git push command.${FB_ECHO_RESET}."
      DRY_RUN="-n"
      ;;
    \?)
      usage
      exit 1
      ;;
  esac
done

# Make sure the version string is set
FILE_WITH_VERSION_STRING="$RCTFBSDK_ROOT/$FILE_WITH_VERSION_STRING"
VERSION_STRING=`grep -o '[0-9]\.[0-9]\+\.[0-9]\+' $FILE_WITH_VERSION_STRING`
if [ -z $VERSION_STRING ]; then
  die "Unable to find properly formatted version string. Aborting. Run the \
set_version_string.sh first and commit it."
fi

# Create a temp local github enlistment
CURRENT_SCRIPT_NAME=`basename $0`
TEMP_OUTPUT_DIR=`mktemp -d -t ${CURRENT_SCRIPT_NAME}` || die "Failed to create a temp folder."
echo "Cloning from github into temp directory ${TEMP_OUTPUT_DIR}."
git clone $GITHUB_URL "$TEMP_OUTPUT_DIR" || die "Failed to clone the git repo \
into the temp folder."
OUTPUT_DIR=$TEMP_OUTPUT_DIR

# Export the source code to $OUTPUT_DIR
cd "$OUTPUT_DIR"
git checkout master || die "git checkout master branch of local github repo failed."
rsync -avmc --exclude '.hgignore' --exclude '/internal' --exclude '/ios/BUCK' --exclude '/ios/ios.xcodeproj' "$RCTFBSDK_ROOT"/ \
"$OUTPUT_DIR"/ || die "Failed to rsync source code from internal repo to local github repo."

# Commit the changes to the local github repo
(
  cd "$OUTPUT_DIR"
  git add --all
  git commit -m "react-native-fbsdk-$VERSION_STRING"
) || die "Failed to commit to the local github enlistment ($OUTPUT_DIR)."

# Tag the commit
if [ -z $DRY_RUN ]; then
  git tag -a $VERSION_STRING -m "react-native-fbsdk-$VERSION_STRING" || die \
"Failed to tag the commit."
fi

# Prompt to ensure that we are ready to push.
read -p "Push SDK version $VERSION_STRING to $GITHUB_URL? (y/n) " SHOULD_PUSH
if [ "$SHOULD_PUSH" == "y" ]; then
  read -p "Are you really sure you are ready to 'npm publish' and 'git push'? (y/n) "\
  SHOULD_PUSH
else
  echo "${FB_ECHO_BOLD}Changes are committed at ${FB_ECHO_GREEN}$OUTPUT_DIR${FB_ECHO_RESET}\
${FB_ECHO_BOLD} when you are ready to push them manually.${FB_ECHO_RESET}"
  # Clear the temp dir so we don't delete it
  TEMP_OUTPUT_DIR=""
  exit 0
fi

# We'll publish to npm first and then push to github.
if [ -z $DRY_RUN ]; then
  npm publish || die "Failed to publish $VERSION_STRING to npm."
fi
git push $DRY_RUN --follow-tags || die "Failed to push the changes to github \
($OUTPUT_DIR)."

# Cleanup the temp folder
if [ -n "$TEMP_OUTPUT_DIR" ]; then
  rm -rf "$TEMP_OUTPUT_DIR"
fi

echo "${FB_ECHO_GREEN}Successfully shipped to npm and $GITHUB_URL${FB_ECHO_RESET}"
