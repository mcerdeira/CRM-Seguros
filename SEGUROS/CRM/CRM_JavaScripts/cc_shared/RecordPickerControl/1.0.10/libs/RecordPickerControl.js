/** @license Copyright (c) Microsoft Corporation. All rights reserved. */
this.MscrmControls=this.MscrmControls||{},function(u,h,r){"use strict";var t;(t=u.ControlState||(u.ControlState={}))[t.SUCCESS=0]="SUCCESS",t[t.LOADING=1]="LOADING",t[t.ERROR=2]="ERROR",t[t.NO_DATA=3]="NO_DATA";var i=(n.Dismissed="Dismissed",n.RecordPicked="RecordPicked",n.AdvanceCommand="AdvanceCommand",n.ComponentMounted="ComponentMounted",n);function n(){}var e,o,l="rp_advanced_button",s="rp_list",d="item0",f="RecordListRecordCell",m="RecordListFirstElement",v="RecordPickerLivePersonaCardHoverTarget",a=((b=window&&window.__extends||(e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])})(t,n)},function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}))(c,o=h.Component),c.prototype.render=function(){return h.createElement("div",{className:"headContainer",role:"banner"},h.createElement("div",{className:"headLabelContainer"},this.props.headerLabelText?h.createElement("div",{className:"headText",role:"alert"},this.props.headerLabelText):this.props.controlState==u.ControlState.LOADING?h.createElement(r.Shimmer,{width:57,height:12}):null),h.createElement("div",{className:"headCommandContainer"},h.createElement(r.FontIcon,{iconName:"SearchData",className:"headCommandIcon"}),h.createElement("button",{className:"headCommand",onClick:this._onClick.bind(this),autoFocus:!1,id:l,onKeyDown:this.onAdvanceButtonKeyDownFn.bind(this)},this.props.headerCommandText)))},c.prototype._onClick=function(t){var n={Data:null,Type:i.AdvanceCommand};this.props.onUserAction(n),t.preventDefault()},c.prototype.onAdvanceButtonKeyDownFn=function(t){var n,i;9!=t.keyCode||!t.shiftKey&&document.getElementById(s)?9!=t.keyCode||!document.getElementById(s)||(n=document.getElementById(d))&&(n.focus(),t.preventDefault()):(i=document.querySelector(this.props.targetQuerySelector))&&(i.focus(),t.preventDefault())},c);function c(t){var n=o.call(this,t)||this;return n.state={},n._onClick=n._onClick.bind(n),n}var w,p,y=((b=window&&window.__extends||(w=function(t,n){return(w=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])})(t,n)},function(t,n){function i(){this.constructor=t}w(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}))(g,p=h.Component),g.prototype.render=function(){return h.createElement("div",{role:"alert",className:"errorMessage"},h.createElement("div",{className:"errorMessageText"},this.props.errorMessage))},g);function g(){return null!==p&&p.apply(this,arguments)||this}var C,N,b=window&&window.__extends||(C=function(t,n){return(C=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])})(t,n)},function(t,n){function i(){this.constructor=t}C(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}),E={childrenGap:28},R=(b(_,N=h.Component),_.prototype.render=function(){return h.createElement("div",{className:"Shimmer"},h.createElement(r.Stack,{tokens:E},h.createElement(r.Shimmer,{customElementsGroup:this._getCustomElements(),width:330}),h.createElement(r.Shimmer,{customElementsGroup:this._getCustomElements(),width:330}),h.createElement(r.Shimmer,{customElementsGroup:this._getCustomElements(),width:330}),h.createElement(r.Shimmer,{customElementsGroup:this._getCustomElements(),width:330}),h.createElement(r.Shimmer,{customElementsGroup:this._getCustomElements(),width:330})))},_);function _(t){var n=N.call(this,t)||this;return n._getCustomElements=function(){return h.createElement("div",{style:{display:"flex"}},h.createElement(r.ShimmerElementsGroup,{shimmerElements:[{type:r.ShimmerElementType.circle,height:n.height},{type:r.ShimmerElementType.gap,height:n.height,width:14.24}]}),h.createElement(r.ShimmerElementsGroup,{flexWrap:!0,shimmerElements:[{type:r.ShimmerElementType.line,width:110,height:10},{type:r.ShimmerElementType.gap,width:180,height:14},{type:r.ShimmerElementType.line,width:290,height:10}]}))},n.height=28,n}var O,A,T,I=((b=window&&window.__extends||(O=function(t,n){return(O=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])})(t,n)},function(t,n){function i(){this.constructor=t}O(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}))(S,A=h.Component),S.prototype.render=function(){return h.createElement("div",{role:"alert",className:"noData"},h.createElement("span",{className:"messageText"},this.props.message))},S);function S(){return null!==A&&A.apply(this,arguments)||this}(T=u.ThumbnailOption||(u.ThumbnailOption={}))[T.IMAGE=0]="IMAGE",T[T.INITIALS=1]="INITIALS",T[T.ICON_SYMBOL=2]="ICON_SYMBOL";var k=(D.ControlState=u.ControlState,D.ThumbnailOption=u.ThumbnailOption,D);function D(){}var x=(P.GetInitials=function(t){var n="";if(t){for(var i=t.split(" "),e=0;e<i.length&&n.length<2;e++)if(0<i[e].length){var r=i[e].charCodeAt(0);if(!(97<=r&&r<=122||65<=r&&r<=90)){n+=i[e].charAt(0);break}n+=i[e].charAt(0)}if(n.length<=1){n="";for(var o=0;o<t.length&&n.length<2;o++){var s=t.charCodeAt(o);if(!(97<=s&&s<=122||65<=s&&s<=90)){n+=t.charAt(o);break}n+=t.charAt(o)}}}return n},P.GetBackGroundColor=function(t){var n=["#005C62","#358717","#725A0D","#A42B1A","#652F4E","#6A1E7A","#315FA2"],i=n[0];if(t){for(var e=0,r=t.length-1;0<=r;r--){var o=t.charCodeAt(r),s=r%8;e^=(o<<s)+(o>>8-s)}i=n[e%n.length]}return i},P);function P(){}var L,j,M=((b=window&&window.__extends||(L=function(t,n){return(L=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])})(t,n)},function(t,n){function i(){this.constructor=t}L(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}))(U,j=h.Component),U.prototype.render=function(){return this._getInnerComponent()},U.prototype._getInnerComponent=function(){switch(this.props.record.thumbnailOption){case u.ThumbnailOption.IMAGE:return h.createElement("div",{className:"UserImageThumbnail","aria-hidden":!0},h.createElement(r.Image,{className:"RecordThumbnailImage",src:this.props.record.imgSrc,width:28,height:28,imageFit:r.ImageFit.cover,alt:x.GetInitials(this.props.record.reference.name.toUpperCase())}));case u.ThumbnailOption.INITIALS:return h.createElement("div",{className:"RecordInitialThumbnail","aria-hidden":!0},h.createElement("div",{className:"RecordInitialThumbnailCircle",style:{background:x.GetBackGroundColor(this.props.record.reference.name)}},x.GetInitials(this.props.record.reference.name).toUpperCase()));case u.ThumbnailOption.ICON_SYMBOL:return h.createElement("div",{className:"CRMEntityThumbnail","aria-hidden":!0},h.createElement("span",{className:this.props.record.iconSymbol}));default:return null}},U);function U(t){var n=j.call(this,t)||this;return n._getInnerComponent=n._getInnerComponent.bind(n),n}var F=(G.ReportFailure=function(t,n,i){var e=new Array;e.push({name:"FunctionName",value:t}),i&&e.concat(i),G.context.reporting.reportFailure(this.controlName,n,"",e)},G.getErrorTelemetryParmas=function(t){var n=new Array;return t&&n.push({name:"Message",value:JSON.stringify(t)}),n},G.controlName="RecordPickerControl",G);function G(){}var H,K,Q=((b=window&&window.__extends||(H=function(t,n){return(H=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])})(t,n)},function(t,n){function i(){this.constructor=t}H(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}))(B,K=h.Component),B.prototype.render=function(){return h.createElement(r.FocusZone,{direction:r.FocusZoneDirection.vertical},h.createElement(r.List,{items:this.props.records,onRenderCell:this._onRenderCell,onKeyDown:this.onRecordPickerKeyDownFn.bind(this),role:"tree",id:s}))},B.prototype._onRenderCell=function(o,s){var a=this,t=new RegExp("^("+this.props.currentSearchString+")[]*","igm"),n=o.reference.name+(o.description?"\n"+o.description:""),c=this._context.factory;return h.createElement("div",{className:0==s?m:f,"data-is-focusable":!0,tabIndex:s,id:"item"+s,role:"treeitem",onClick:function(){a._itemClicked(o)},onKeyDown:this.onRecordPickerKeyDownFn.bind(this)},h.createElement(function(){if(!a.isLPCEnabled()||o.thumbnailOption==u.ThumbnailOption.ICON_SYMBOL)return h.createElement("span",null);var t=h.createRef(),n={Id:o.reference.id,LogicalName:"systemuser",Name:o.reference.name,EntityName:"systemuser"},i={id:"recordpicker-lpc"+s,role:"dialog",tabIndex:-1,displayName:o.reference.name,entityReference:n,personaType:"User",recordId:o.reference.id,onKeyDownContainerId:v+s,registerOpenCardCallback:function(t){this._onKeyDownOpenLivePersonaCardByIndex[s]=t}.bind(a),style:{height:"60px",display:"inline-block",width:"55px",position:"absolute",overflow:"hidden"}},e=a._context.factory.createElement("CONTAINER",{id:v+s}),r=a._context.factory.createElement("LIVEPERSONACARDHOVERTARGET",i,e);return h.useEffect(function(){c.bindDOMComponent(r,t.current),document.getElementById("item"+s).addEventListener("click",function(){a._itemClicked(o)})},[a._context,t.current]),h.createElement("div",{ref:t,tabIndex:-1,style:{position:"relative"}})},null),h.createElement("div",{className:o.thumbnailOption==u.ThumbnailOption.ICON_SYMBOL?"CRMEntityContainer":"SystemUserContainer"},h.createElement(M,{record:o}),h.createElement("div",{className:o.thumbnailOption==u.ThumbnailOption.ICON_SYMBOL?"CRMEntity":"SystemUser"},h.createElement("div",{className:"Truncate",dangerouslySetInnerHTML:{__html:this.props.currentSearchString&&0<this.props.currentSearchString.trim().length?n.replace(t,"<span class='Highlight'>$1</span>"):n}}))))},B.prototype._itemClicked=function(t){var n={Data:t.reference,Type:i.RecordPicked};this.props.onUserAction(n)},B.prototype.onRecordPickerKeyDownFn=function(t){t.preventDefault();var n,i,e,r,o,s,a,c=Number(t.target.id.replace("item",""));t.shiftKey&&9==t.keyCode?(n=document.getElementById(l))&&(n.focus(),this.highlightFirstElementOfList(),t.preventDefault()):9==t.keyCode||38==t.keyCode&&t.target.id==d?(i=document.querySelector(this.props.targetQuerySelector))&&(i.focus(),this.highlightFirstElementOfList(),t.preventDefault()):40==t.keyCode&&-1<t.target.id.indexOf("item")?(0==c&&((e=document.getElementById("item"+c)).classList.remove(f),e.className=f),r=c+1,(o=document.getElementById("item"+r)).focus(),o.className=f):38==t.keyCode&&-1<t.target.id.indexOf("item")?(s=c-1,(a=document.getElementById("item"+s)).focus(),a.className=f):32==t.keyCode?this._onKeyDownOpenLivePersonaCardByIndex[c]&&this._onKeyDownOpenLivePersonaCardByIndex[c]():13==t.keyCode&&this._itemClicked(this.props.records[c])},B.prototype.componentDidMount=function(){var t,n;this.props&&this.props.records&&0<this.props.records.length?(t={Data:this.props.records[0].reference,Type:i.ComponentMounted},this.props.onUserAction(t)):(n={Data:null,Type:i.Dismissed},this.props.onUserAction(n),F.ReportFailure("componentDidMount",Error("RecordList props or props.records is null")))},B.prototype.highlightFirstElementOfList=function(){var t=document.getElementById(d);t&&(t.className=m)},B.prototype.isLPCEnabled=function(){return this._context.utils.isFeatureEnabled("LivePersonaCardUCI")&&this._context.utils.isFeatureEnabled("April2021Update")&&this._context.utils.isFeatureEnabled("RecordPickerLPCEnabled")},B);function B(t){var n=K.call(this,t)||this;return n._context=t.context,n._onRenderCell=n._onRenderCell.bind(n),n._itemClicked=n._itemClicked.bind(n),n._onKeyDownOpenLivePersonaCardByIndex={},n}var J,V,z=((b=window&&window.__extends||(J=function(t,n){return(J=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])})(t,n)},function(t,n){function i(){this.constructor=t}J(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}))(W,V=h.Component),W.prototype.componentDidMount=function(){var t={Data:null,Type:i.ComponentMounted};this.props.onUserAction(t)},W.prototype.componentDidCatch=function(t){F.ReportFailure("componentDidCatch",Error(t.message?t.message:"RecordPickerCallout error occurred"),F.getErrorTelemetryParmas(t)),this.setState({hasError:!0})},W.prototype.render=function(){var n=this;if(this.state.hasError)return h.createElement("p",{style:{color:"#666666",width:this.width,fontSize:"12px"}},"Error loading control");var i=document.querySelector(".RecordPickerCallout"),e=document.getElementById("LivePersonaCardRootElement");return document.body.addEventListener("click",function(t){i.contains(t.target)||e.contains(t.target)||n._onCalloutDismiss()}),h.createElement(r.Callout,{gapSpace:0,target:this.props.targetQuerySelector,onDismiss:this._onCalloutDismiss,isBeakVisible:!1,setInitialFocus:!1,coverTarget:!1,alignTargetEdge:!0,hideOverflow:!0,preventDismissOnResize:!0,preventDismissOnLostFocus:!0,directionalHint:r.DirectionalHint.bottomLeftEdge},h.createElement("div",{className:"RecordPickerCallout",style:{width:this.width}},h.createElement(a,{controlState:this.props.controlState,headerLabelText:this.props.headerLabelText,headerCommandText:this.props.headerCommandText,onUserAction:this.props.onUserAction,targetQuerySelector:this.props.targetQuerySelector}),h.createElement("div",{className:"RecordPicker",tabIndex:-1},this._getInnerComponent())))},W.prototype._getInnerComponent=function(){switch(this.props.controlState){case u.ControlState.LOADING:return h.createElement(R,null);case u.ControlState.NO_DATA:return h.createElement(I,{message:this.props.message});case u.ControlState.ERROR:return h.createElement(y,{errorMessage:this.props.message});case u.ControlState.SUCCESS:return h.createElement(Q,{context:this.props.context,records:this.props.records,onUserAction:this.props.onUserAction,currentSearchString:this.props.currentSearchString,targetQuerySelector:this.props.targetQuerySelector});default:return null}},W.prototype._onCalloutDismiss=function(){var t={Data:null,Type:i.Dismissed};this.props.onUserAction(t)},W.prototype._getWidth=function(){return 350},W);function W(t){var n=V.call(this,t)||this;return n.state={hasError:!1},n._onCalloutDismiss=n._onCalloutDismiss.bind(n),n._getInnerComponent=n._getInnerComponent.bind(n),n.width=n._getWidth(),n}var Y=($.prototype.init=function(t,n,i){F.context=t,this._output=null,this._input=null,this._notifyOutputChanged=n,this._parseInputParam(t)},$.prototype.updateView=function(t){return F.context=t,this._parseInputParam(t),this.renderRecordPickerControl(t)},$.prototype.renderRecordPickerControl=function(t){var n=this,i={context:t,controlState:this._input.Config.controlState,headerLabelText:this._input.Config.headerLabelText,headerCommandText:this._input.Config.headerCommandText,message:this._input.Config.message,targetQuerySelector:this._input.Config.targetQuerySelector,records:this._input.Records,currentSearchString:this._input.Config.currentSearchString,onUserAction:function(t){n._output={Output:t},n._notifyOutputChanged()}},e=h.createElement(z,i,{});return t.factory.createElement("CONTAINER",{recordPickerProps:{id:"RecordPickerControlContainer"}},e)},$.prototype.getOutputs=function(){return this._output},$.prototype.destroy=function(){},$.prototype._parseInputParam=function(t){if(!t.parameters.Config||!t.parameters.Config.raw)throw new Error("Invalid parameters.Config");var n=JSON.parse(t.parameters.Config.raw);if(!n.targetQuerySelector)throw new Error("Invalid configParams.targetQuerySelector");if(null==n.controlState)throw new Error("Invalid configParams.controlState");n.message||(n.message="");var i=JSON.parse(t.parameters.Records.raw)||[];this._input={Records:i,Config:n}},$);function $(){}u.Models=k,u.RecordPickerControl=Y}(this.MscrmControls.RecordPicker=this.MscrmControls.RecordPicker||{},React,Fabric);
