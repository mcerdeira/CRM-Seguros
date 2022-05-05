var __extends=this&&this.__extends||function(){var extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)b.hasOwnProperty(p)&&(d[p]=b[p])};return function(d,b){function __(){this.constructor=d}extendStatics(d,b),d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}}(),MscrmControls;!function(MscrmControls){var FieldControls;!function(FieldControls){"use strict";var VirtualControl=function(){function VirtualControl(){}return VirtualControl.prototype.init=function(context,notifyOutputChanged,state,container){this.context=context,this.notifyOutputChanged=notifyOutputChanged||function(){}},VirtualControl.prototype.destroy=function(){},VirtualControl.prototype.onPreNavigation=function(){},VirtualControl.prototype.updateView=function(context){return this.context=context,{}},VirtualControl.prototype.getOutputs=function(){return{}},VirtualControl.NO_VALUE_LABEL="---",VirtualControl}();FieldControls.VirtualControl=VirtualControl}(FieldControls=MscrmControls.FieldControls||(MscrmControls.FieldControls={}))}(MscrmControls||(MscrmControls={}));var MscrmControls;!function(MscrmControls){var FieldControls;!function(FieldControls){"use strict";var VirtualOptionSetControl=function(_super){function VirtualOptionSetControl(){var _this=_super.call(this)||this;return _this._pointerEnd=!1,_this._onChange=_this.onChangeHandler.bind(_this),_this._onFocus=_this.onFocusHandler.bind(_this),_this._onBlur=_this.onBlurHandler.bind(_this),_this._onContainerPointerEnter=_this.onContainerPointerEnterHandler.bind(_this),_this._onContainerPointerLeave=_this.onContainerPointerLeaveHandler.bind(_this),_this.modeManager=new FieldControls.ModeTransitionManager,_this.modeManager.resetManager(_this,_this),_this}return __extends(VirtualOptionSetControl,_super),VirtualOptionSetControl.prototype.init=function(context,notifyOutputChanged,state,container){var _this=this;_super.prototype.init.call(this,context,notifyOutputChanged,state,container);var outputChangedCallback=notifyOutputChanged||function(){};this.notifyOutputChanged=function(){_this.waitingForValueSaved=!0,outputChangedCallback()}},VirtualOptionSetControl.prototype.getOutputs=function(){return this.waitingForValueSaved=!1,null},VirtualOptionSetControl.prototype.updateView=function(context){return this.context=context,this.component()},VirtualOptionSetControl.prototype.onChangeHandler=function(value){var candidate=!value||VirtualOptionSetControl.isUnassigned(value)?this.unassignedOptionWithPrompt():value;this.setControlValue(candidate),this.notifyOutputChanged()},VirtualOptionSetControl.prototype.onFocusHandler=function(){var active={id:FieldControls.ModeDescriptorID.ACTIVE};this.modeManager.requestTransitionTo(active)},VirtualOptionSetControl.prototype.onBlurHandler=function(){var rest={id:FieldControls.ModeDescriptorID.REST};this.modeManager.requestTransitionTo(rest)},VirtualOptionSetControl.prototype.onContainerPointerEnterHandler=function(){var hover={id:FieldControls.ModeDescriptorID.HOVER};this.modeManager.requestTransitionTo(hover)},VirtualOptionSetControl.prototype.onContainerPointerLeaveHandler=function(){this._pointerEnd=!0;var rest={id:FieldControls.ModeDescriptorID.REST};this.modeManager.requestTransitionTo(rest)},VirtualOptionSetControl.prototype.idBundle=function(){return{}},VirtualOptionSetControl.prototype.valueForMode=function(mode){return VirtualOptionSetControl.UNASSIGNED_OPTION_VALUE},VirtualOptionSetControl.prototype.setControlValue=function(candidate){this._value!==candidate.Value&&(this._value=candidate.Value)},VirtualOptionSetControl.prototype.isError=function(){return this.context.parameters.value.error},VirtualOptionSetControl.prototype.optionsList=function(){return[]},VirtualOptionSetControl.prototype.arrowStyle=function(){var _a=this.context.theming,solidborderstyle=_a.solidborderstyle,textbox=_a.textbox;return{display:"flex",content:"",transform:"rotate(45deg)",borderStyle:solidborderstyle,borderTopWidth:0,borderLeftWith:0,borderRightWidth:textbox.linethickness,borderBottomWidth:textbox.linethickness,borderColor:this.isError()?textbox.redcolor:textbox.hoverboxcolor,width:VirtualOptionSetControl.OPTION_SET_ARROW_SIZE,height:VirtualOptionSetControl.OPTION_SET_ARROW_SIZE,marginTop:"calc(-1 * "+VirtualOptionSetControl.OPTION_SET_ARROW_SIZE+" * 0.666)"}},VirtualOptionSetControl.prototype.arrowContainerStyle=function(){var _a=this.context.theming,solidborderstyle=_a.solidborderstyle,textbox=_a.textbox,style={paddingLeft:textbox.horizontalpadding,paddingRight:textbox.horizontalpadding,paddingTop:textbox.verticalpadding,paddingBottom:textbox.verticalpadding,position:"relative",marginLeft:"calc(-1 * calc(2 * "+textbox.horizontalpadding+" + "+VirtualOptionSetControl.OPTION_SET_ARROW_SIZE+") - "+textbox.linethickness+")",borderTopWidth:0,borderBottomWidth:0,borderLeftWidth:0,borderRightWidth:0,flexDirection:"column",justifyContent:"center",flex:"0 1 auto",pointerEvents:"none",backgroundColor:"transparent"};return this.modeManager.mode().id===FieldControls.ModeDescriptorID.ACTIVE&&(style.borderStyle=solidborderstyle,style.borderLeftWidth=textbox.linethickness,style.borderColor=this.isError()?textbox.redcolor:textbox.hoverboxcolor),style},VirtualOptionSetControl.prototype.arrowComponent=function(){if(this.modeManager.mode().id===FieldControls.ModeDescriptorID.REST)return null;var arrowProps={id:this.idBundle().arrow,key:this.idBundle().arrow,style:this.arrowStyle()},arrow=this.context.factory.createElement("CONTAINER",arrowProps,null),containerProps={id:this.idBundle().arrowContainer,key:this.idBundle().arrowContainer,style:this.arrowContainerStyle()};return this.context.factory.createElement("CONTAINER",containerProps,arrow)},VirtualOptionSetControl.prototype.selectStyle=function(){var _a=this.context.theming,noneborderstyle=_a.noneborderstyle,textbox=_a.textbox,measure250=_a.measures.measure250,backgroundColor=this.modeManager.mode().id===FieldControls.ModeDescriptorID.ACTIVE?this.isError()?textbox.errorbackgroundcolor:textbox.backgroundcolor:"white",color=this.isError()?textbox.redcolor:textbox.contentcolor,selectStyle={appearance:"none",height:measure250,lineHeight:measure250,width:"100%","::-ms-expand":{display:"none"},paddingLeft:textbox.horizontalpadding,paddingRight:textbox.horizontalpadding,fontSize:this.isError()?textbox.errorfontsize:textbox.fontsize,fontWeight:this.modeManager.mode().id===FieldControls.ModeDescriptorID.REST||this.isError()?textbox.contentfontweight:textbox.fontweight,borderStyle:noneborderstyle,backgroundColor:backgroundColor,color:color},optionStyle={backgroundColor:backgroundColor,color:color};this.isControlDisabled()&&Object.assign(selectStyle,FieldControls.ThemingHelper.getDisableStyle(this.context.theming));var scope=this.context.parameters.scope;return FieldControls.ThemingHelper.isFooterCell(scope)&&Object.assign(selectStyle,FieldControls.ThemingHelper.getFooterStyle(this.context.theming)),FieldControls.ThemingHelper.isHeaderCell(scope)&&Object.assign(selectStyle,FieldControls.ThemingHelper.getHeaderStyle(this.context.theming)),{selectStyle:selectStyle,optionStyle:optionStyle}},VirtualOptionSetControl.prototype.selectComponent=function(){var options=this.optionsList(),plainValue=this.valueForMode(this.modeManager.mode()),value=this.unassignedOptionWithPrompt(!1);value=this.optionWithValue(plainValue,options),this.context.parameters.value.security.readable||(value=this.nonReadableOption(this.modeManager.mode().id!==FieldControls.ModeDescriptorID.REST,value));var disabled=this.isControlDisabled(),style=this.selectStyle();value&&this.setControlValue(value);var describedByElementId="";this.context.parameters&&this.context.parameters.describedByElementId&&(describedByElementId=this.context.parameters.describedByElementId.raw);var selectProps={id:this.idBundle().select,key:this.idBundle().select,describedByElementId:describedByElementId,onChange:this._onChange,onFocus:disabled?null:this._onFocus,onBlur:disabled?null:this._onBlur,error:this.isError(),value:value,disabled:disabled,options:options,title:null!=value&&null!=value.Label?value.Label:null!=this.context.parameters.value.attributes&&null!=this.context.parameters.value.attributes.DisplayName?this.context.parameters.value.attributes.DisplayName:"",accessibilityRequired:1===this.context.parameters.value.attributes.RequiredLevel||2===this.context.parameters.value.attributes.RequiredLevel||null,accessibilityLabel:this.context.parameters.value.attributes.DisplayName,style:style},select=this.context.factory.createElement("SELECT",selectProps,null),containerProps={id:this.idBundle().selectContainer,key:this.idBundle().selectContainer,style:{flex:"1 1 auto",left:"0px",right:"0px",top:"0px",position:"absolute",width:"100%"}};return this.context.factory.createElement("CONTAINER",containerProps,select)},VirtualOptionSetControl.prototype.containerStyle=function(){var _a=this.context.theming,solidborderstyle=_a.solidborderstyle,textbox=(_a.noneborderstyle,_a.textbox),borderColor=this.modeManager.mode().id===FieldControls.ModeDescriptorID.REST?"transparent":this.isError()?textbox.redcolor:textbox.hoverboxcolor;return{width:"100%",overflow:"hidden",background:"transparent",borderWidth:this.isError()?textbox.errorlinethickness:textbox.linethickness,borderStyle:solidborderstyle,borderColor:borderColor,display:"flex",flexDirection:"row",justifyContent:"flex-end",alignItems:"center",position:"relative",height:"32.6px",marginLeft:FieldControls.ThemingHelper.isHeaderCell(this.context.parameters.scope)?"-0.75rem":"0px"}},VirtualOptionSetControl.prototype.component=function(){var select=this.selectComponent(),arrow=this.arrowComponent(),containerProps={id:this.idBundle().container,key:this.idBundle().container,style:this.containerStyle(),onPointerEnter:this.isControlDisabled()?null:this._onContainerPointerEnter,onPointerLeave:this.isControlDisabled()?null:this._onContainerPointerLeave};return this.context.factory.createElement("CONTAINER",containerProps,[select,arrow])},VirtualOptionSetControl.prototype.unassignedOptionWithPrompt=function(prompt){return void 0===prompt&&(prompt=!0),{Label:prompt?VirtualOptionSetControl.UNASSIGNED_OPTION_LABEL_PROMPT:VirtualOptionSetControl.UNASSIGNED_OPTION_LABEL,Value:VirtualOptionSetControl.UNASSIGNED_OPTION_VALUE,Color:null}},VirtualOptionSetControl.prototype.nonReadableOption=function(isActive,value){return void 0===isActive&&(isActive=!0),{Label:isActive?value?value.Label:VirtualOptionSetControl.UNASSIGNED_OPTION_LABEL_PROMPT:VirtualOptionSetControl.NOT_READABLE_VALUE,Value:isActive&&value?value.Value:VirtualOptionSetControl.UNASSIGNED_OPTION_VALUE,Color:null}},VirtualOptionSetControl.prototype.optionWithValue=function(value,options){var candidates=options&&options.filter(function(option){return option.Value===value});return candidates&&candidates.length>0?candidates[0]:this.unassignedOptionWithPrompt(!1)},VirtualOptionSetControl.isUnassigned=function(candidate){return!!candidate&&(!candidate.Value&&0!==candidate.Value||candidate.Value&&!~candidate.Value)},VirtualOptionSetControl.prototype.defaultMode=function(){return{id:FieldControls.ModeDescriptorID.REST}},VirtualOptionSetControl.prototype.isTransitionAllowed=function(from,to){var allowed=!1;switch(from.id){case FieldControls.ModeDescriptorID.REST:case FieldControls.ModeDescriptorID.HOVER:allowed=!0;break;case FieldControls.ModeDescriptorID.ACTIVE:allowed=!(to.id===FieldControls.ModeDescriptorID.REST&&this._pointerEnd||to.id===FieldControls.ModeDescriptorID.HOVER)}return this._pointerEnd=!1,allowed},VirtualOptionSetControl.prototype.transitionWillApply=function(from,to){from.id===FieldControls.ModeDescriptorID.ACTIVE&&to.id===FieldControls.ModeDescriptorID.REST&&this.notifyOutputChanged()},VirtualOptionSetControl.prototype.transitionDidApply=function(from,to){this.context.utils.requestRender()},VirtualOptionSetControl.prototype.isControlDisabled=function(){return this.context.mode.isControlDisabled},VirtualOptionSetControl.UNASSIGNED_OPTION_VALUE=-1,VirtualOptionSetControl.UNASSIGNED_OPTION_LABEL="---",VirtualOptionSetControl.UNASSIGNED_OPTION_LABEL_PROMPT="VirtualOptionSetControl_Unassigned_Option_Label_Prompt",VirtualOptionSetControl.NOT_READABLE_VALUE="******",VirtualOptionSetControl.OPTION_SET_ARROW_SIZE="0.6em",VirtualOptionSetControl}(FieldControls.VirtualControl);FieldControls.VirtualOptionSetControl=VirtualOptionSetControl}(FieldControls=MscrmControls.FieldControls||(MscrmControls.FieldControls={}))}(MscrmControls||(MscrmControls={}));var MscrmControls;!function(MscrmControls){var FieldControls;!function(FieldControls){"use strict";var VirtualNumberControl=function(_super){function VirtualNumberControl(){var _this=_super.call(this)||this;return _this._changeHandler=_this.onChange.bind(_this),_this._focusHandler=_this.onFocus.bind(_this),_this._clickHandler=_this.onClick.bind(_this),_this._blurHandler=_this.onBlur.bind(_this),_this._keyDownHandler=_this.onKeyDown.bind(_this),_this._pointerEnterHandler=_this.onPointerEnter.bind(_this),_this._pointerLeaveHandler=_this.onPointerLeave.bind(_this),_this.modeManager=new FieldControls.ModeTransitionManager,_this.modeManager.resetManager(_this,_this),_this}return __extends(VirtualNumberControl,_super),VirtualNumberControl.prototype.init=function(context,notifyOutputChanged,state,container){var _this=this;_super.prototype.init.call(this,context,notifyOutputChanged,state,container);var outputChangedCallback=notifyOutputChanged||function(){};this.notifyOutputChanged=function(alertSystem){!alertSystem&&(_this.waitingForValueSaved=!0),outputChangedCallback(alertSystem)}},VirtualNumberControl.prototype.getOutputs=function(){return this.waitingForValueSaved=!1,null},VirtualNumberControl.prototype.idBundle=function(){return{}},VirtualNumberControl.prototype.setControlValue=function(candidate){},VirtualNumberControl.prototype.valueForMode=function(mode){return""},VirtualNumberControl.prototype.isError=function(){return this.context.parameters.value.error},VirtualNumberControl.prototype.tryConvertToNumber=function(candidate){return candidate},VirtualNumberControl.prototype.component=function(){return this.context.factory.createElement("TEXTINPUT",this.propsForMode(this.modeManager.mode()))},VirtualNumberControl.prototype.propsForMode=function(mode){var disabled=this.isControlDisabled(),style=this.styleForMode(mode),describedByElementId="";return this.context.parameters&&this.context.parameters.describedByElementId&&(describedByElementId=this.context.parameters.describedByElementId.raw),{id:this.idBundle().input,key:this.idBundle().input,value:this.valueForMode(mode),readOnly:disabled,disabled:disabled,error:this.isError(),describedByElementId:describedByElementId,style:style,selectValueOnFocus:!0,accessibiltyLive:"off",accessibilityRequired:1===this.context.parameters.value.attributes.RequiredLevel||2===this.context.parameters.value.attributes.RequiredLevel||null,onFocus:disabled?null:this._focusHandler,onClick:disabled?null:this._clickHandler,onBlur:disabled?null:this._blurHandler,onKeyDown:disabled?null:this._keyDownHandler,onChange:disabled?null:this._changeHandler,onPointerEnter:disabled?null:this._pointerEnterHandler,onPointerLeave:disabled?null:this._pointerLeaveHandler}},VirtualNumberControl.prototype.styleForMode=function(mode){var theming=this.context.theming,scope=this.context.parameters.scope,deviceSizeMode=this.context.parameters.deviceSizeMode,isRTL=this.context.userSettings.isRTL;switch(mode.id){case FieldControls.ModeDescriptorID.REST:return this.restStyle(theming,deviceSizeMode,scope,isRTL,this.isError());case FieldControls.ModeDescriptorID.HOVER:return this.hoverStyle(theming,deviceSizeMode,scope,isRTL,this.isError());case FieldControls.ModeDescriptorID.ACTIVE:return this.activeStyle(theming,deviceSizeMode,scope,isRTL,this.isError())}return{}},VirtualNumberControl.prototype.restStyle=function(theming,deviceSizeMode,scope,isRTL,error){return FieldControls.ThemingHelper.getReadModeStyle(theming,deviceSizeMode,scope,isRTL,error,this.isControlDisabled())},VirtualNumberControl.prototype.hoverStyle=function(theming,deviceSizeMode,scope,isRTL,error){return this.activeStyle(theming,deviceSizeMode,scope,isRTL,error)},VirtualNumberControl.prototype.activeStyle=function(theming,deviceSizeMode,scope,isRTL,error){return FieldControls.ThemingHelper.getEditModeStyle(theming,deviceSizeMode,scope,isRTL,error)},VirtualNumberControl.prototype.updateView=function(context){return this.context=context,this.component()},VirtualNumberControl.prototype.onFocus=function(){var active={id:FieldControls.ModeDescriptorID.ACTIVE};this.modeManager.requestTransitionTo(active)},VirtualNumberControl.prototype.onClick=function(event){event.currentTarget.select()},VirtualNumberControl.prototype.onBlur=function(){var rest={id:FieldControls.ModeDescriptorID.REST};this.modeManager.requestTransitionTo(rest)},VirtualNumberControl.prototype.onKeyDown=function(event){VirtualNumberControl.Enter_KEY_CODE===event.keyCode&&this.notifyOutputChanged()},VirtualNumberControl.prototype.onChange=function(event){var candidate=event.target.value;this.setControlValue(this.tryConvertToNumber(candidate)),this.notifyOutputChanged(!0)},VirtualNumberControl.prototype.onPointerEnter=function(){var hover={id:FieldControls.ModeDescriptorID.HOVER};this.modeManager.requestTransitionTo(hover)},VirtualNumberControl.prototype.onPointerLeave=function(){this._pointerEnd=!0;var rest={id:FieldControls.ModeDescriptorID.REST};this.modeManager.requestTransitionTo(rest)},VirtualNumberControl.prototype.defaultMode=function(){return{id:FieldControls.ModeDescriptorID.REST}},VirtualNumberControl.prototype.isTransitionAllowed=function(from,to){var allowed=!1;switch(from.id){case FieldControls.ModeDescriptorID.REST:case FieldControls.ModeDescriptorID.HOVER:allowed=!0;break;case FieldControls.ModeDescriptorID.ACTIVE:allowed=!(to.id===FieldControls.ModeDescriptorID.REST&&this._pointerEnd||to.id===FieldControls.ModeDescriptorID.HOVER)}return this._pointerEnd=!1,allowed},VirtualNumberControl.prototype.transitionWillApply=function(from,to){from.id===FieldControls.ModeDescriptorID.ACTIVE&&to.id===FieldControls.ModeDescriptorID.REST&&this.notifyOutputChanged()},VirtualNumberControl.prototype.transitionDidApply=function(from,to){this.context.utils.requestRender()},VirtualNumberControl.prototype.isControlDisabled=function(){return this.context.mode.isControlDisabled},VirtualNumberControl.UPDATE_LABEL_EVENT="getLabelUniqueId",VirtualNumberControl.DEFAULT_VALUE_LABEL="---",VirtualNumberControl.NOT_READABLE_VALUE="******",VirtualNumberControl.Enter_KEY_CODE=13,VirtualNumberControl}(FieldControls.VirtualControl);FieldControls.VirtualNumberControl=VirtualNumberControl}(FieldControls=MscrmControls.FieldControls||(MscrmControls.FieldControls={}))}(MscrmControls||(MscrmControls={}));var MscrmControls;!function(MscrmControls){var FieldControls;!function(FieldControls){"use strict";var VirtualActionControl=function(_super){function VirtualActionControl(){var _this=_super.call(this)||this;return _this._pointerEnd=!1,_this._focusInputHandler=_this.onInputFocus.bind(_this),_this._blurInputHandler=_this.onInputBlur.bind(_this),_this._changeInputHandler=_this.onInputChange.bind(_this),_this._keyDownInputHandler=_this.onInputKeyDown.bind(_this),_this._clickButtonHandler=_this.onActionTrigger.bind(_this),_this._pointerDownButtonHandler=_this.onPointerDownButton.bind(_this),_this._focusButtonHandler=_this.onButtonFocus.bind(_this),_this._blurButtonHandler=_this.onButtonBlur.bind(_this),_this._keyDownButtonHandler=_this.onButtonKeyDown.bind(_this),_this._pointerEnterContainerHandler=_this.onContainerPointerEnter.bind(_this),_this._pointerLeaveContainerHandler=_this.onContainerPointerLeave.bind(_this),_this.modeManager=new FieldControls.ModeTransitionManager,_this.modeManager.resetManager(_this,_this),_this}return __extends(VirtualActionControl,_super),VirtualActionControl.prototype.init=function(context,notifyOutputChanged,state,container){var _this=this;_super.prototype.init.call(this,context,notifyOutputChanged,state,container);var outputChangedCallback=notifyOutputChanged||function(){};this.notifyOutputChanged=function(){_this.waitingForValueSaved=!0,outputChangedCallback()}},VirtualActionControl.prototype.getOutputs=function(){return this.waitingForValueSaved=!1,null},VirtualActionControl.prototype.action=function(){},VirtualActionControl.prototype.idBundle=function(){return{}},VirtualActionControl.prototype.actionIconProps=function(){return{}},VirtualActionControl.prototype.ariaDescription=function(){return""},VirtualActionControl.prototype.placeholder=function(){return""},VirtualActionControl.prototype.setControlValue=function(candidate){},VirtualActionControl.prototype.valueForMode=function(mode){return""},VirtualActionControl.prototype.isError=function(){return this.context.parameters.value.error},VirtualActionControl.prototype.propsForMode=function(mode,ariaDescriptorId){var style=this.styleForMode(mode),describedByElementId=ariaDescriptorId?this.context.accessibility.getUniqueId(ariaDescriptorId):null,disabled=this.isControlDisabled();return this.context.parameters&&this.context.parameters.describedByElementId&&(describedByElementId=describedByElementId?" "+this.context.parameters.describedByElementId.raw:this.context.parameters.describedByElementId.raw),{id:this.idBundle().input,key:this.idBundle().input,value:this.valueForMode(mode),placeholder:this.placeholder(),accessibilityLabel:this.actionIconProps().accessibilityLabel,readOnly:disabled,disabled:disabled,error:this.isError(),describedByElementId:describedByElementId,style:style,selectValueOnFocus:!0,onFocus:disabled?null:this._focusInputHandler,onBlur:disabled?null:this._blurInputHandler,onChange:disabled?null:this._changeInputHandler,onKeyDown:this._keyDownInputHandler,accessibilityRequired:1===this.context.parameters.value.attributes.RequiredLevel||2===this.context.parameters.value.attributes.RequiredLevel||null}},VirtualActionControl.prototype.styleForMode=function(mode){var theming=this.context.theming,scope=this.context.parameters.scope,deviceSizeMode=this.context.parameters.deviceSizeMode;switch(mode.id){case FieldControls.ModeDescriptorID.REST:return this.restStyle(theming,deviceSizeMode,scope,this.isError());case FieldControls.ModeDescriptorID.HOVER:return this.hoverStyle(theming,deviceSizeMode,scope,this.isError());case FieldControls.ModeDescriptorID.ACTIVE:return this.activeStyle(theming,deviceSizeMode,scope,this.isError())}return{}},VirtualActionControl.prototype.isValueSet=function(mode){var value=this.valueForMode({id:mode}),isNullOrEmptyString=null;return isNullOrEmptyString=this.context.utils.isNullOrEmptyString&&"function"==typeof this.context.utils.isNullOrEmptyString?this.context.utils.isNullOrEmptyString(value):null===value||void 0===value||!value.length,!isNullOrEmptyString&&value.toString()!==VirtualActionControl.DEFAULT_VALUE_LABEL},VirtualActionControl.prototype.restStyle=function(theming,deviceSizeMode,scope,error){var isValueSet=this.isValueSet(FieldControls.ModeDescriptorID.REST),isRTL=this.context.userSettings.isRTL;return FieldControls.ThemingHelper.getReadModeStyle(theming,deviceSizeMode,scope,isRTL,error,this.isControlDisabled(),isValueSet)},VirtualActionControl.prototype.hoverStyle=function(theming,deviceSizeMode,scope,error){return this.activeStyle(theming,deviceSizeMode,scope,error)},VirtualActionControl.prototype.activeStyle=function(theming,deviceSizeMode,scope,error){var isValueSet=this.isValueSet(FieldControls.ModeDescriptorID.ACTIVE),isRTL=this.context.userSettings.isRTL,editStyle=FieldControls.ThemingHelper.getEditModeStyle(theming,deviceSizeMode,scope,isRTL,error,isValueSet);return editStyle["border-radius"]="0px",editStyle["-moz-appearance"]="none",editStyle["-webkit-appearance"]="none",editStyle["-appearance"]="none",editStyle.borderStyle="solid",editStyle},VirtualActionControl.prototype.actionButtonStyle=function(theming,isRTL,error,mode){var isRestMode=mode.id===FieldControls.ModeDescriptorID.REST;return FieldControls.ThemingHelper.getActionIconStyle(theming,isRTL,error,isRestMode)},VirtualActionControl.prototype.getLiveContainerProps=function(){return{style:{position:"absolute",clip:"rect(1px, 1px, 1px, 1px)"},role:"alert",accessibilityLive:"assertive",key:"aria-live-container"}},VirtualActionControl.prototype.setLiveContainerNotification=function(message){this._accessibilityNotificationMessage=message,this.context.utils.requestRender()},VirtualActionControl.prototype.actionButtonType=function(){return"MICROSOFTICON"},VirtualActionControl.prototype.inputComponent=function(){return this.context.factory.createElement("TEXTINPUT",this.propsForMode(this.modeManager.mode(),this.idBundle().ariaDescriptor))},VirtualActionControl.prototype.liveRegionComponent=function(){return this.context.factory.createElement("CONTAINER",this.getLiveContainerProps(),this._accessibilityNotificationMessage||"")},VirtualActionControl.prototype.ariaDescriptorComponent=function(){return this.context.factory.createElement("LABEL",{id:this.idBundle().ariaDescriptor,key:this.idBundle().ariaDescriptor,style:{display:"none"}},this.ariaDescription())},VirtualActionControl.prototype.actionButtonComponent=function(){var _a=this.actionIconProps(),accessibilityLabel=_a.accessibilityLabel,type=_a.type,isError=this.context.parameters.value.error;return this.context.factory.createElement(this.actionButtonType(),{id:this.idBundle().icon,key:this.idBundle().icon,role:"button",accessibilityLabel:accessibilityLabel,type:type,tabIndex:0,onClick:isError?null:this._clickButtonHandler,onPointerDown:isError?null:this._pointerDownButtonHandler,onFocus:isError?null:this._focusButtonHandler,onBlur:isError?null:this._blurButtonHandler,onKeyDown:isError?null:this._keyDownButtonHandler,style:this.actionButtonStyle(this.context.theming,this.context.userSettings.isRTL,this.isError(),this.modeManager.mode())})},VirtualActionControl.prototype.component=function(){var disabled=this.isControlDisabled(),actionBtn=this.isValueSet(FieldControls.ModeDescriptorID.ACTIVE)?this.actionButtonComponent():null,ariaDescriptor=this.ariaDescriptorComponent(),liveRegion=this.liveRegionComponent(),input=this.inputComponent();return this.context.factory.createElement("CONTAINER",{id:this.idBundle().container,key:this.idBundle().container,onPointerEnter:disabled?null:this._pointerEnterContainerHandler,onPointerLeave:disabled?null:this._pointerLeaveContainerHandler,style:{position:"relative",display:"flex",alignItems:"center",width:"100%"}},[liveRegion,input,ariaDescriptor,actionBtn])},VirtualActionControl.prototype.updateView=function(context){return this.context=context,this.component()},VirtualActionControl.prototype.onInputFocus=function(){var active={id:FieldControls.ModeDescriptorID.ACTIVE};this.modeManager.requestTransitionTo(active)},VirtualActionControl.prototype.onInputBlur=function(){var rest={id:FieldControls.ModeDescriptorID.REST};this.modeManager.requestTransitionTo(rest,!0)},VirtualActionControl.prototype.onInputChange=function(event){var candidate=event.target.value;this.setControlValue(candidate)},VirtualActionControl.prototype.onInputKeyDown=function(event){if(event)switch(event.keyCode){case 13:event.ctrlKey&&this.action()}},VirtualActionControl.prototype.onContainerPointerEnter=function(){var hover={id:FieldControls.ModeDescriptorID.HOVER};this.modeManager.requestTransitionTo(hover)},VirtualActionControl.prototype.onContainerPointerLeave=function(){this._pointerEnd=!0;var rest={id:FieldControls.ModeDescriptorID.REST};this.modeManager.requestTransitionTo(rest)},VirtualActionControl.prototype.onActionTrigger=function(){this.action()},VirtualActionControl.prototype.onPointerDownButton=function(){},VirtualActionControl.prototype.onButtonFocus=function(){var active={id:FieldControls.ModeDescriptorID.ACTIVE};this.modeManager.requestTransitionTo(active)},VirtualActionControl.prototype.onButtonBlur=function(){var rest={id:FieldControls.ModeDescriptorID.REST};this.modeManager.requestTransitionTo(rest,!0)},VirtualActionControl.prototype.onButtonKeyDown=function(event){if(event)switch(event.keyCode){case 13:this.action()}},VirtualActionControl.prototype.defaultMode=function(){return{id:FieldControls.ModeDescriptorID.REST}},VirtualActionControl.prototype.isTransitionAllowed=function(from,to){var allowed=!1;switch(from.id){case FieldControls.ModeDescriptorID.REST:case FieldControls.ModeDescriptorID.HOVER:allowed=!0;break;case FieldControls.ModeDescriptorID.ACTIVE:allowed=!(to.id===FieldControls.ModeDescriptorID.REST&&this._pointerEnd||to.id===FieldControls.ModeDescriptorID.HOVER)}return this._pointerEnd=!1,allowed},VirtualActionControl.prototype.transitionWillApply=function(from,to){from.id===FieldControls.ModeDescriptorID.ACTIVE&&to.id===FieldControls.ModeDescriptorID.REST&&this.notifyOutputChanged()},VirtualActionControl.prototype.transitionDidApply=function(from,to){this.context.utils.requestRender()},VirtualActionControl.prototype.isControlDisabled=function(){return this.context.mode.isControlDisabled},VirtualActionControl.UPDATE_LABEL_EVENT="getLabelUniqueId",VirtualActionControl.DEFAULT_VALUE_LABEL="---",VirtualActionControl}(FieldControls.VirtualControl);FieldControls.VirtualActionControl=VirtualActionControl}(FieldControls=MscrmControls.FieldControls||(MscrmControls.FieldControls={}))}(MscrmControls||(MscrmControls={}));var MscrmControls;!function(MscrmControls){var FieldControls;!function(FieldControls){"use strict";var ModeDescriptorID;!function(ModeDescriptorID){ModeDescriptorID[ModeDescriptorID.NONE=-1]="NONE",ModeDescriptorID[ModeDescriptorID.REST=1]="REST",ModeDescriptorID[ModeDescriptorID.HOVER=2]="HOVER",ModeDescriptorID[ModeDescriptorID.ACTIVE=3]="ACTIVE"}(ModeDescriptorID=FieldControls.ModeDescriptorID||(FieldControls.ModeDescriptorID={}));var ModeTransitionManager=function(){function ModeTransitionManager(){}return ModeTransitionManager.prototype.mode=function(){return this._mode},ModeTransitionManager.prototype.resetManager=function(dataSource,delegate){this._delegate=delegate,this._mode=ModeTransitionManager._EMPTY_MODE,dataSource&&dataSource.defaultMode&&(this._mode=dataSource.defaultMode()||ModeTransitionManager._EMPTY_MODE),this._transition=ModeTransitionManager._EMPTY_MODE},ModeTransitionManager.prototype.requestTransitionTo=function(to,forceAsync){var _this=this;void 0===forceAsync&&(forceAsync=!1),this._transition=to,forceAsync?setTimeout(function(){_this._flushTransition()},0):this._flushTransition()},ModeTransitionManager._isEmptyMode=function(candidate){return ModeTransitionManager._EMPTY_MODE.id===candidate.id},ModeTransitionManager.prototype._flushTransition=function(){if(!this._transition||ModeTransitionManager._isEmptyMode(this._transition)||this._mode.id===this._transition.id)return void(this._transition=ModeTransitionManager._EMPTY_MODE);var transitionAllowed=!0;if(this._delegate&&this._delegate.isTransitionAllowed&&(transitionAllowed=this._delegate.isTransitionAllowed(this._mode,this._transition)),!transitionAllowed)return void(this._transition=ModeTransitionManager._EMPTY_MODE);this._delegate&&this._delegate.transitionWillApply&&this._delegate.transitionWillApply(this._mode,this._transition);var to=this._transition,from=this._mode;this._mode=this._transition,this._transition=ModeTransitionManager._EMPTY_MODE,this._delegate&&this._delegate.transitionDidApply&&this._delegate.transitionDidApply(from,to)},ModeTransitionManager._EMPTY_MODE={id:ModeDescriptorID.NONE},ModeTransitionManager}();FieldControls.ModeTransitionManager=ModeTransitionManager}(FieldControls=MscrmControls.FieldControls||(MscrmControls.FieldControls={}))}(MscrmControls||(MscrmControls={}));var MscrmControls;!function(MscrmControls){var FieldControls;!function(FieldControls){"use strict";var SizeMode;!function(SizeMode){SizeMode[SizeMode.Fullmode=0]="Fullmode",SizeMode[SizeMode.Sbreakpoint=1]="Sbreakpoint",SizeMode[SizeMode.Mbreakpoint=2]="Mbreakpoint";
}(SizeMode||(SizeMode={}));var CellScope;!function(CellScope){CellScope[CellScope.Header=0]="Header",CellScope[CellScope.EditForm=1]="EditForm",CellScope[CellScope.Footer=2]="Footer"}(CellScope||(CellScope={}));var ThemingHelper=function(){function ThemingHelper(){}return ThemingHelper.isHeaderCell=function(scope){return scope&&scope.raw===CellScope.Header},ThemingHelper.isFooterCell=function(scope){return scope&&scope.raw===CellScope.Footer},ThemingHelper.getCommonStyle=function(theming,deviceSizeMode,scope,isRTL,error,isIconAvailable){var _a=theming.textbox,contentfontweight=_a.contentfontweight,linethickness=_a.linethickness,errorlinethickness=_a.errorlinethickness,solidborderstyle=theming.solidborderstyle,_b=theming.measures,measure050=_b.measure050,measure075=_b.measure075,measure250=_b.measure250,font100=theming.fontsizes.font100,_c=theming.colors.basecolor,red=_c.red,black=_c.black,isHeader=ThemingHelper.isHeaderCell(scope),width="100%",marginLeft="0px",marginRight="0px",paddingLeft=measure050,paddingRight=measure050;if(deviceSizeMode.raw!==SizeMode.Mbreakpoint&&deviceSizeMode.raw!==SizeMode.Sbreakpoint||(marginRight=isRTL?isHeader?"-"+measure075:"-"+measure050:marginRight,marginLeft=isRTL?marginLeft:isHeader?"-"+measure075:"-"+measure050,width="calc("+width+" + "+(isHeader?measure075:measure050)+")"),isIconAvailable){var iconWidth=ThemingHelper.getActionIconWidth(theming);paddingLeft=isRTL?iconWidth:paddingLeft,paddingRight=isRTL?paddingRight:iconWidth}return{boxSizing:"border-box",height:measure250,lineHeight:measure250,width:width,textOverflow:"ellipsis",fontSize:font100,fontWeight:contentfontweight,color:error?red.red3:black,paddingLeft:paddingLeft,paddingRight:paddingRight,paddingTop:"0px",paddingBottom:"0px",marginLeft:marginLeft,marginRight:marginRight,borderStyle:solidborderstyle,borderWidth:error?errorlinethickness:linethickness}},ThemingHelper.getDisableStyle=function(theming){return{borderWidth:theming.textbox.linethickness,borderStyle:theming.solidborderstyle,borderColor:"transparent",color:theming.colors.basecolor.grey.grey7,backgroundColor:theming.textbox.backgroundcolor,opacity:1,"-webkit-text-fill-color":this.getHighContrastEnabled()?"":theming.colors.basecolor.grey.grey7,cursor:"default",fontSize:theming.fontsizes.font100,fontFamily:theming.fontfamilies.regular,textDecoration:"none",":hover":{backgroundColor:theming.colors.basecolor.grey.grey2,borderColor:theming.colors.basecolor.grey.grey2}}},ThemingHelper.getEditModeStyle=function(theming,deviceSizeMode,scope,isRTL,error,isIconAvailable){var commonStyles=ThemingHelper.getCommonStyle(theming,deviceSizeMode,scope,isRTL,error,isIconAvailable),_a=theming.textbox,redcolor=_a.redcolor,hoverboxcolor=_a.hoverboxcolor,errorbackgroundcolor=_a.errorbackgroundcolor,backgroundcolor=_a.backgroundcolor,fontweight=_a.fontweight,contentfontweight=_a.contentfontweight,editModeStyles={fontWeight:error?contentfontweight:fontweight,backgroundColor:error?errorbackgroundcolor:backgroundcolor,borderColor:error?redcolor:hoverboxcolor,":hover":{}},headerStyles=ThemingHelper.isHeaderCell(scope)?ThemingHelper.getHeaderStyle(theming):void 0,footerStyles=ThemingHelper.isFooterCell(scope)?ThemingHelper.getFooterStyle(theming):void 0;return Object.assign({},commonStyles,editModeStyles,headerStyles,footerStyles)},ThemingHelper.getReadModeStyle=function(theming,deviceSizeMode,scope,isRTL,error,isControlDisabled,isIconAvailable){var commonStyles=ThemingHelper.getCommonStyle(theming,deviceSizeMode,scope,isRTL,error,isIconAvailable),disableStyles=isControlDisabled?ThemingHelper.getDisableStyle(theming):void 0,headerStyles=ThemingHelper.isHeaderCell(scope)?ThemingHelper.getHeaderStyle(theming):void 0,footerStyles=ThemingHelper.isFooterCell(scope)?ThemingHelper.getFooterStyle(theming):void 0,readModeStyle={borderColor:"transparent",":hover":isControlDisabled?{}:ThemingHelper.getEditModeStyle(theming,deviceSizeMode,scope,isRTL,error,isIconAvailable)};return Object.assign({},commonStyles,readModeStyle,disableStyles,headerStyles,footerStyles)},ThemingHelper.getHeaderStyle=function(theming){var font125=theming.fontsizes.font125,grey=theming.colors.basecolor.grey,semilight=theming.fontfamilies.semilight,fontweight=theming.textbox.fontweight;return{color:grey.grey7,fontSize:font125,fontFamily:semilight,fontWeight:fontweight}},ThemingHelper.getFooterStyle=function(theming){var font085=theming.fontsizes.font085,grey=theming.colors.basecolor.grey,regular=theming.fontfamilies.regular,fontweight=theming.textbox.fontweight;return{fontWeight:fontweight,color:grey.grey7,fontSize:font085,fontFamily:regular,backgroundColor:grey.grey3,":hover":{backgroundColor:grey.grey3,borderColor:"transparent"}}},ThemingHelper.getActionIconStyle=function(theming,isRTL,error,isRestMode){var _a=theming.textbox,lineheight=_a.lineheight,horizontalpadding=_a.horizontalpadding,verticalpadding=_a.verticalpadding,linethickness=_a.linethickness,errorlinethickness=_a.errorlinethickness,iconSpace=lineheight+" + "+horizontalpadding+" + "+horizontalpadding,borderWidth=error?errorlinethickness:linethickness,right="0px",left="0px",widthDeficit="("+iconSpace+" + "+borderWidth+")";return isRTL?(left=linethickness,right="calc(100% - "+widthDeficit+")"):(left="calc(100% - "+widthDeficit+")",right=linethickness),{position:"absolute",top:linethickness,right:right,left:left,bottom:linethickness,cursor:"pointer",color:isRestMode?"":theming.colors.basecolor.grey.grey7,background:isRestMode?"":theming.colors.basecolor.grey.grey3,lineHeight:lineheight,width:lineheight,textAlign:"center",paddingLeft:horizontalpadding,paddingRight:horizontalpadding,paddingTop:verticalpadding,paddingBottom:verticalpadding}},ThemingHelper.getActionIconWidth=function(theming){var _a=theming.textbox,lineheight=_a.lineheight,horizontalpadding=_a.horizontalpadding;return"calc("+lineheight+" + "+horizontalpadding+" + "+horizontalpadding+")"},ThemingHelper.getOutlineStyle=function(theming){var solidborderstyle=theming.solidborderstyle,_a=theming.textbox,hoverboxcolor=_a.hoverboxcolor,linethickness=_a.linethickness;return{outlineColor:hoverboxcolor,outlineWidth:linethickness,outlineStyle:solidborderstyle}},ThemingHelper.getHighContrastEnabled=function(){var isHighContrastEnabled=!1,highContrastMediaFeatue="(-ms-high-contrast: active)",mediaQuery=window.matchMedia(highContrastMediaFeatue);if(mediaQuery.matches)return!0;var htmlTag=document.getElementsByTagName("html");return isHighContrastEnabled=null!=htmlTag[0].getAttribute("hc")},ThemingHelper}();FieldControls.ThemingHelper=ThemingHelper}(FieldControls=MscrmControls.FieldControls||(MscrmControls.FieldControls={}))}(MscrmControls||(MscrmControls={}));
//# sourceMappingURL=d:\a\1\s\target\Release\amd64\package\Controls\\VirtualControl\VirtualControl.js.map