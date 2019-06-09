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

DIR="$(cd "$( dirname "$0")" && pwd)"

RCTFBSDK_ROOT="$(dirname "$DIR")"

FILE_WITH_VERSION_STRING="android/src/main/java/com/facebook/reactnative/androidsdk/FBSDKPackage.java"

# Make sure the version string is set
FILE_WITH_VERSION_STRING="$RCTFBSDK_ROOT/$FILE_WITH_VERSION_STRING"

VERSION_STRING=`grep -o '[0-9]\.[0-9]\+\.[0-9]\+' $FILE_WITH_VERSION_STRING`
if [ -z $VERSION_STRING ]; then
  die "Unable to find properly formatted version string. Aborting. Run the \
set_version_string.sh first and commit it."
fi

ZIP_DIR=`basename $RCTFBSDK_ROOT`
mkdir $ZIP_DIR || die "Failed to create a temp folder."

rsync -avmc --exclude '/internal' --exclude '/ios/BUCK' $RCTFBSDK_ROOT/ $ZIP_DIR

ZIP_NAME="$ZIP_DIR-$VERSION_STRING"
zip -r $ZIP_NAME.zip $ZIP_DIR
rm -rf $ZIP_DIR
