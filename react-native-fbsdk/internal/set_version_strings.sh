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

# This script updates the version number strings

DIR="$(cd "$( dirname "$0")" && pwd)"

RCTFBSDK_ROOT="$(dirname "$DIR")"

declare -a files=(
"iOS/RCTFBSDK/core/RCTFBSDKInitializer.m" \
"Android/src/main/java/com/facebook/reactnative/androidsdk/FBSDKPackage.java" \
"package.json"
)

VERSION=$1

if [ -n "$VERSION" ]; then
  if [[ ! $VERSION =~ ^[0-9]\.[0-9]+\.[0-9]+$ ]]; then
    echo "Versioning string should be in form [0-9]\.[0-9]+\.[0-9]+\nExample: 0.2.0"
    exit 1
  fi
  echo "Updating versioning strings..."
  for FILE in "${files[@]}"; do
    FULL_PATH="$RCTFBSDK_ROOT/$FILE"
    echo "Versiong string updated for $FILE"
    TEMPFILE="$FULL_PATH.tmp"
    sed -e s/VERSION_STRING/$VERSION/g "$FULL_PATH" > "$TEMPFILE"
    if cmp -s $FULL_PATH $TEMPFILE; then
      echo "\n*** ERROR **** unable to update $FULL_PATH\n"
      rm $TEMPFILE
      exit 1
    fi
    mv $TEMPFILE $FULL_PATH
  done
else
  echo "Usage: $0 <version string>"
  exit 1
fi
