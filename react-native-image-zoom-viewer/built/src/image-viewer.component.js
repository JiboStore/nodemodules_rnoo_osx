"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const typings = require("./image-viewer.type");
const nt_transmit_transparently_1 = require("nt-transmit-transparently");
const react_native_image_pan_zoom_1 = require("react-native-image-pan-zoom");
const image_viewer_style_1 = require("./image-viewer.style");
let ImageViewer = class ImageViewer extends React.Component {
    constructor() {
        super(...arguments);
        this.state = new typings.State();
        this.fadeAnim = new react_native_1.Animated.Value(0);
        this.standardPositionX = 0;
        this.positionXNumber = 0;
        this.positionX = new react_native_1.Animated.Value(0);
        this.width = 0;
        this.height = 0;
        this.styles = image_viewer_style_1.default(0, 0);
        this.hasLayout = false;
        this.loadedIndex = new Map();
    }
    componentWillMount() {
        this.init(this.props);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.index !== this.state.currentShowIndex) {
            this.setState({
                currentShowIndex: nextProps.index
            }, () => {
                this.loadImage(nextProps.index);
                this.jumpToCurrentImage();
                react_native_1.Animated.timing(this.fadeAnim, {
                    toValue: 1,
                    duration: 200
                }).start();
            });
        }
    }
    init(nextProps) {
        if (nextProps.imageUrls.length === 0) {
            this.fadeAnim.setValue(0);
            return this.setState(new typings.State());
        }
        const imageSizes = [];
        nextProps.imageUrls.forEach(imageUrl => {
            imageSizes.push({
                width: imageUrl.width || 0,
                height: imageUrl.height || 0,
                status: 'loading'
            });
        });
        this.setState({
            currentShowIndex: nextProps.index,
            imageSizes
        }, () => {
            this.loadImage(nextProps.index);
            this.jumpToCurrentImage();
            react_native_1.Animated.timing(this.fadeAnim, {
                toValue: 1,
                duration: 200
            }).start();
        });
    }
    jumpToCurrentImage() {
        this.positionXNumber = -this.width * this.state.currentShowIndex;
        this.standardPositionX = this.positionXNumber;
        this.positionX.setValue(this.positionXNumber);
    }
    loadImage(index) {
        if (this.loadedIndex.has(index)) {
            return;
        }
        this.loadedIndex.set(index, true);
        const image = this.props.imageUrls[index];
        const imageStatus = Object.assign({}, this.state.imageSizes[index]);
        const saveImageSize = () => {
            if (this.state.imageSizes[index] && this.state.imageSizes[index].status !== 'loading') {
                return;
            }
            const imageSizes = this.state.imageSizes.slice();
            imageSizes[index] = imageStatus;
            this.setState({
                imageSizes
            });
        };
        if (this.state.imageSizes[index].status === 'success') {
            return;
        }
        if (this.state.imageSizes[index].width > 0 && this.state.imageSizes[index].height > 0) {
            imageStatus.status = 'success';
            saveImageSize();
            return;
        }
        let sizeLoaded = false;
        let imageLoaded = false;
        if (image.url.startsWith(`file:`)) {
            imageLoaded = true;
        }
        if (react_native_1.Platform.OS !== 'web') {
            const prefetchImagePromise = react_native_1.Image.prefetch(image.url);
            if (image.url.match(/^(http|https):\/\//)) {
                prefetchImagePromise.then(() => {
                    imageLoaded = true;
                    if (sizeLoaded) {
                        imageStatus.status = 'success';
                        saveImageSize();
                    }
                }, () => {
                    imageStatus.status = 'fail';
                    saveImageSize();
                });
            }
            else {
                imageLoaded = true;
                prefetchImagePromise.then(() => { }).catch(() => { });
                if (sizeLoaded) {
                    imageStatus.status = 'success';
                    saveImageSize();
                }
            }
            if (image.width && image.height) {
                sizeLoaded = true;
                imageStatus.width = image.width;
                imageStatus.height = image.height;
                if (imageLoaded) {
                    imageStatus.status = 'success';
                    saveImageSize();
                }
            }
            else {
                react_native_1.Image.getSize(image.url, (width, height) => {
                    sizeLoaded = true;
                    imageStatus.width = width;
                    imageStatus.height = height;
                    if (imageLoaded) {
                        imageStatus.status = 'success';
                        saveImageSize();
                    }
                }, (_error) => {
                    imageStatus.status = 'fail';
                    saveImageSize();
                });
            }
        }
        else {
            const imageFetch = new window.Image();
            imageFetch.src = image.url;
            imageFetch.onload = () => {
                imageStatus.width = imageFetch.width;
                imageStatus.height = imageFetch.height;
                imageStatus.status = 'success';
                saveImageSize();
            };
            imageFetch.onerror = () => {
                imageStatus.status = 'fail';
                saveImageSize();
            };
        }
    }
    handleHorizontalOuterRangeOffset(offsetX) {
        this.positionXNumber = this.standardPositionX + offsetX;
        this.positionX.setValue(this.positionXNumber);
        if (offsetX < 0) {
            if (this.state.currentShowIndex < this.props.imageUrls.length - 1) {
                this.loadImage(this.state.currentShowIndex + 1);
            }
        }
        else if (offsetX > 0) {
            if (this.state.currentShowIndex > 0) {
                this.loadImage(this.state.currentShowIndex - 1);
            }
        }
    }
    handleResponderRelease(vx) {
        if (vx > 0.7) {
            this.goBack.call(this);
            if (this.state.currentShowIndex > 0) {
                this.loadImage(this.state.currentShowIndex - 1);
            }
        }
        else if (vx < -0.7) {
            this.goNext.call(this);
            if (this.state.currentShowIndex < this.props.imageUrls.length - 1) {
                this.loadImage(this.state.currentShowIndex + 1);
            }
        }
        if (this.positionXNumber - this.standardPositionX > this.props.flipThreshold) {
            this.goBack.call(this);
        }
        else if (this.positionXNumber - this.standardPositionX < -this.props.flipThreshold) {
            this.goNext.call(this);
        }
        else {
            this.resetPosition.call(this);
        }
    }
    goBack() {
        if (this.state.currentShowIndex === 0) {
            this.resetPosition.call(this);
            return;
        }
        this.positionXNumber = this.standardPositionX + this.width;
        this.standardPositionX = this.positionXNumber;
        react_native_1.Animated.timing(this.positionX, {
            toValue: this.positionXNumber,
            duration: 100,
        }).start();
        this.setState({
            currentShowIndex: this.state.currentShowIndex - 1
        }, () => {
            this.props.onChange(this.state.currentShowIndex);
        });
    }
    goNext() {
        if (this.state.currentShowIndex === this.props.imageUrls.length - 1) {
            this.resetPosition.call(this);
            return;
        }
        this.positionXNumber = this.standardPositionX - this.width;
        this.standardPositionX = this.positionXNumber;
        react_native_1.Animated.timing(this.positionX, {
            toValue: this.positionXNumber,
            duration: 100,
        }).start();
        this.setState({
            currentShowIndex: this.state.currentShowIndex + 1
        }, () => {
            this.props.onChange(this.state.currentShowIndex);
        });
    }
    resetPosition() {
        this.positionXNumber = this.standardPositionX;
        react_native_1.Animated.timing(this.positionX, {
            toValue: this.standardPositionX,
            duration: 150,
        }).start();
    }
    handleLongPress(_image) {
        if (this.props.saveToLocalByLongPress) {
            this.setState({
                isShowMenu: true
            });
        }
        if (this.props.onLongPress) {
            this.props.onLongPress();
        }
    }
    handleClick() {
        this.props.onClick(this.handleCancel.bind(this));
    }
    handleDoubleClick() {
        this.props.onDoubleClick(this.handleCancel.bind(this));
    }
    handleCancel() {
        this.hasLayout = false;
        this.props.onCancel();
    }
    handleLayout(event) {
        if (this.hasLayout) {
            return;
        }
        this.hasLayout = true;
        this.width = event.nativeEvent.layout.width;
        this.height = event.nativeEvent.layout.height;
        this.styles = image_viewer_style_1.default(this.width, this.height);
        this.forceUpdate();
        this.jumpToCurrentImage();
    }
    getContent() {
        const screenWidth = this.width;
        const screenHeight = this.height;
        const ImageElements = this.props.imageUrls.map((image, index) => {
            let width = this.state.imageSizes[index] && this.state.imageSizes[index].width;
            let height = this.state.imageSizes[index] && this.state.imageSizes[index].height;
            const imageInfo = this.state.imageSizes[index];
            if (width > screenWidth) {
                const widthPixel = screenWidth / width;
                width *= widthPixel;
                height *= widthPixel;
            }
            if (height > screenHeight) {
                const HeightPixel = screenHeight / height;
                width *= HeightPixel;
                height *= HeightPixel;
            }
            if (imageInfo.status === 'success' && this.props.enableImageZoom) {
                return (React.createElement(react_native_image_pan_zoom_1.default, { key: index, style: this.styles.modalContainer, cropWidth: this.width, cropHeight: this.height, imageWidth: width, imageHeight: height, maxOverflow: this.props.maxOverflow, horizontalOuterRangeOffset: this.handleHorizontalOuterRangeOffset.bind(this), responderRelease: this.handleResponderRelease.bind(this), onLongPress: this.handleLongPress.bind(this, image), onClick: this.handleClick.bind(this), onDoubleClick: this.handleDoubleClick.bind(this) },
                    React.createElement(react_native_1.Image, { style: Object.assign(this.styles.imageStyle, { width: width, height: height }), source: { uri: image.url } })));
            }
            else {
                switch (imageInfo.status) {
                    case 'loading':
                        return (React.createElement(react_native_1.TouchableHighlight, { key: index, onPress: this.handleClick.bind(this), style: this.styles.loadingTouchable },
                            React.createElement(react_native_1.View, { style: this.styles.loadingContainer }, this.props.loadingRender())));
                    case 'success':
                        return (React.createElement(react_native_1.Image, { key: index, style: Object.assign({}, this.styles.imageStyle, { width: width, height: height }), source: { uri: image.url } }));
                    case 'fail':
                        return (React.createElement(react_native_image_pan_zoom_1.default, { key: index, style: this.styles.modalContainer, cropWidth: this.width, cropHeight: this.height, imageWidth: width, imageHeight: height, maxOverflow: this.props.maxOverflow, horizontalOuterRangeOffset: this.handleHorizontalOuterRangeOffset.bind(this), responderRelease: this.handleResponderRelease.bind(this), onLongPress: this.handleLongPress.bind(this, image), onClick: this.handleClick.bind(this), onDoubleClick: this.handleDoubleClick.bind(this) },
                            React.createElement(react_native_1.TouchableOpacity, { key: index, style: this.styles.failContainer },
                                React.createElement(react_native_1.Image, { source: this.props.failImageSource, style: this.styles.failImage }))));
                }
            }
        });
        return (React.createElement(react_native_1.Animated.View, { style: Object.assign({}, this.styles.container, { opacity: this.fadeAnim }) },
            this.props.renderHeader(this.state.currentShowIndex),
            React.createElement(react_native_1.View, { style: this.styles.arrowLeftContainer },
                React.createElement(react_native_1.TouchableWithoutFeedback, { onPress: this.goBack.bind(this) },
                    React.createElement(react_native_1.View, null, this.props.renderArrowLeft()))),
            React.createElement(react_native_1.View, { style: this.styles.arrowRightContainer },
                React.createElement(react_native_1.TouchableWithoutFeedback, { onPress: this.goNext.bind(this) },
                    React.createElement(react_native_1.View, null, this.props.renderArrowRight()))),
            React.createElement(react_native_1.Animated.View, { style: Object.assign({}, this.styles.moveBox, { transform: [{ translateX: this.positionX }] }, { width: this.width * this.props.imageUrls.length }) }, ImageElements),
            this.props.imageUrls.length > 1 &&
                this.props.renderIndicator(this.state.currentShowIndex + 1, this.props.imageUrls.length),
            this.props.imageUrls[this.state.currentShowIndex].originSizeKb && this.props.imageUrls[this.state.currentShowIndex].originUrl &&
                React.createElement(react_native_1.View, { style: this.styles.watchOrigin },
                    React.createElement(react_native_1.TouchableOpacity, { style: this.styles.watchOriginTouchable },
                        React.createElement(react_native_1.Text, { style: this.styles.watchOriginText }, "\u67E5\u770B\u539F\u56FE(2M)"))),
            this.props.renderFooter(this.state.currentShowIndex)));
    }
    saveToLocal() {
        if (!this.props.onSave) {
            react_native_1.CameraRoll.saveToCameraRoll(this.props.imageUrls[this.state.currentShowIndex].url);
            this.props.onSaveToCamera(this.state.currentShowIndex);
        }
        else {
            this.props.onSave(this.props.imageUrls[this.state.currentShowIndex].url);
        }
        this.setState({
            isShowMenu: false
        });
    }
    getMenu() {
        if (!this.state.isShowMenu) {
            return null;
        }
        return (React.createElement(react_native_1.View, { style: this.styles.menuContainer },
            React.createElement(react_native_1.View, { style: this.styles.menuShadow }),
            React.createElement(react_native_1.View, { style: this.styles.menuContent },
                React.createElement(react_native_1.TouchableHighlight, { underlayColor: "#F2F2F2", onPress: this.saveToLocal.bind(this), style: this.styles.operateContainer },
                    React.createElement(react_native_1.Text, { style: this.styles.operateText }, this.props.menuContext.saveToLocal)),
                React.createElement(react_native_1.TouchableHighlight, { underlayColor: "#F2F2F2", onPress: this.handleLeaveMenu.bind(this), style: this.styles.operateContainer },
                    React.createElement(react_native_1.Text, { style: this.styles.operateText }, this.props.menuContext.cancel)))));
    }
    handleLeaveMenu() {
        this.setState({
            isShowMenu: false
        });
    }
    render() {
        let childs = null;
        childs = (React.createElement(react_native_1.View, null,
            this.getContent(),
            this.getMenu()));
        return (React.createElement(react_native_1.View, Object.assign({ onLayout: this.handleLayout.bind(this), style: Object.assign({ flex: 1, overflow: 'hidden' }, this.props.style) }, this.props.others), childs));
    }
};
ImageViewer.defaultProps = new typings.Props();
ImageViewer = __decorate([
    nt_transmit_transparently_1.TransmitTransparently('style')
], ImageViewer);
exports.default = ImageViewer;
//# sourceMappingURL=image-viewer.component.js.map