Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/components/Dialog.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');var _Overlay=require('./Overlay');var _Overlay2=_interopRequireDefault(_Overlay);var _FadeAnimation=require('../animations/FadeAnimation');var _FadeAnimation2=_interopRequireDefault(_FadeAnimation);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var babelPluginFlowReactPropTypes_proptype_DialogType=require('../type').babelPluginFlowReactPropTypes_proptype_DialogType||require('prop-types').any;var BackHandler=_reactNative.BackHandler||_reactNative.BackAndroid;var DIALOG_OPENING='opening';var DIALOG_OPENED='opened';var DIALOG_CLOSING='closing';var DIALOG_CLOSED='closed';var DEFAULT_ANIMATION_DURATION=150;var DEFAULT_WIDTH=_reactNative.Dimensions.get('window').width;var DEFAULT_HEIGHT=300;var DISMISS_ON_TOUCH_OUTSIDE=true;var DISMISS_ON_HARDWARE_BACK_PRESS=true;var HAVE_OVERLAY=true;var HARDWARE_BACK_PRESS_EVENT='hardwareBackPress';var styles=_reactNative.StyleSheet.create({container:{flex:1,position:'absolute',top:0,left:0,justifyContent:'center',alignItems:'center',zIndex:1000},dialog:{borderRadius:8,backgroundColor:'#ffffff'},hidden:{top:-10000,left:0,height:0,width:0}});var Dialog=function(_Component){_inherits(Dialog,_Component);function Dialog(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Dialog);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Dialog.__proto__||Object.getPrototypeOf(Dialog)).call.apply(_ref,[this].concat(args))),_this),_this.state={dialogState:DIALOG_CLOSED},_this.onOverlayPress=function(){var dismissOnTouchOutside=_this.props.dismissOnTouchOutside;if(dismissOnTouchOutside){_this.dismiss();}},_this.show=function(){var callback=arguments.length>0&&arguments[0]!==undefined?arguments[0]:function(){};var onShown=_this.props.onShown;callback();if(![DIALOG_OPENING,DIALOG_OPENED].includes(_this.state.dialogState)){_this.setDialogState(1,onShown);}},_this.dismiss=function(){var callback=arguments.length>0&&arguments[0]!==undefined?arguments[0]:function(){};var onDismissed=_this.props.onDismissed;callback();if(![DIALOG_CLOSING,DIALOG_CLOSED].includes(_this.state.dialogState)){_this.setDialogState(0,onDismissed);}},_this.hardwareBackEventHandler=function(){var dismissOnHardwareBackPress=_this.props.dismissOnHardwareBackPress;var dialogState=_this.state.dialogState;if(dismissOnHardwareBackPress&&dialogState===DIALOG_OPENED){_this.dismiss();return true;}return false;},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Dialog,[{key:'componentDidMount',value:function componentDidMount(){var show=this.props.show;if(show){this.show();}BackHandler.addEventListener(HARDWARE_BACK_PRESS_EVENT,this.hardwareBackEventHandler);}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(nextProps){if(this.props.show!==nextProps.show){if(nextProps.show){this.show();return;}this.dismiss();}}},{key:'componentWillUnmount',value:function componentWillUnmount(){BackHandler.removeEventListener(HARDWARE_BACK_PRESS_EVENT,this.hardwareBackEventHandler);}},{key:'setDialogState',value:function setDialogState(toValue){var _this2=this;var callback=arguments.length>1&&arguments[1]!==undefined?arguments[1]:function(){};var _props=this.props,animationDuration=_props.animationDuration,dialogAnimation=_props.dialogAnimation;var dialogState=toValue?DIALOG_OPENING:DIALOG_CLOSING;if(dialogAnimation&&dialogAnimation.toValue){dialogAnimation.toValue(toValue);}this.setState({dialogState:dialogState});setTimeout(function(){dialogState=dialogState===DIALOG_CLOSING?DIALOG_CLOSED:DIALOG_OPENED;_this2.setState({dialogState:dialogState},function(){callback();});},animationDuration);}},{key:'render',value:function render(){var dialogState=this.state.dialogState;var hidden=dialogState===DIALOG_CLOSED&&styles.hidden;var isShowOverlay=[DIALOG_OPENING,DIALOG_OPENED].includes(dialogState)&&this.props.haveOverlay;var _Dimensions$get=_reactNative.Dimensions.get('window'),width=_Dimensions$get.width,height=_Dimensions$get.height;var containerSize={width:width,height:height};return _react2.default.createElement(_reactNative.View,{style:[styles.container,hidden,containerSize,this.props.containerStyle],__source:{fileName:_jsxFileName,lineNumber:180}},_react2.default.createElement(_Overlay2.default,{pointerEvents:this.pointerEvents,showOverlay:isShowOverlay,onPress:this.onOverlayPress,backgroundColor:this.props.overlayBackgroundColor,opacity:this.props.overlayOpacity,animationDuration:this.props.animationDuration,__source:{fileName:_jsxFileName,lineNumber:181}}),_react2.default.createElement(_reactNative.Animated.View,{style:[styles.dialog,this.dialogSize,this.props.dialogStyle,this.props.dialogAnimation.animations],__source:{fileName:_jsxFileName,lineNumber:189}},this.props.children,this.props.actions));}},{key:'pointerEvents',get:function get(){if(this.props.overlayPointerEvents){return this.props.overlayPointerEvents;}return this.state.dialogState===DIALOG_OPENED?'auto':'none';}},{key:'dialogSize',get:function get(){var _Dimensions$get2=_reactNative.Dimensions.get('window'),screenWidth=_Dimensions$get2.width,screenHeight=_Dimensions$get2.height;var _props2=this.props,width=_props2.width,height=_props2.height;if(width&&width>0.0&&width<=1.0){width*=screenWidth;}if(height&&height>0.0&&height<=1.0){height*=screenHeight;}return{width:width,height:height};}}]);return Dialog;}(_react.Component);Dialog.defaultProps={containerStyle:null,animationDuration:DEFAULT_ANIMATION_DURATION,dialogAnimation:new _FadeAnimation2.default({animationDuration:DEFAULT_ANIMATION_DURATION}),width:DEFAULT_WIDTH,height:DEFAULT_HEIGHT,dismissOnTouchOutside:DISMISS_ON_TOUCH_OUTSIDE,dismissOnHardwareBackPress:DISMISS_ON_HARDWARE_BACK_PRESS,haveOverlay:HAVE_OVERLAY,onShown:function onShown(){},onDismissed:function onDismissed(){},show:false};Dialog.propTypes=babelPluginFlowReactPropTypes_proptype_DialogType===require('prop-types').any?{}:babelPluginFlowReactPropTypes_proptype_DialogType;exports.default=Dialog;