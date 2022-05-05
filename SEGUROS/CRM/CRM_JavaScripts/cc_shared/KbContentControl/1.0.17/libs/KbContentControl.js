var MscrmControls;(function(MscrmControls){var KbContentControl;(function(KbContentControl){"use strict";var Constants=function(){function Constants(){}Constants.ContentPaneArticleContentContainerPrefix="ContentPaneArticleContentContainer";Constants.ContentPaneTextResourceName="SearchWidget.AccessibilityText.ContentPaneText";Constants.EnableKMRating="EnableKMRating";Constants.KMRefreshSearchUI="KMRefreshUI";return Constants}();KbContentControl.Constants=Constants})(KbContentControl=MscrmControls.KbContentControl||(MscrmControls.KbContentControl={}))})(MscrmControls||(MscrmControls={}));var MscrmControls;(function(MscrmControls){var KbContentControl;(function(KbContentControl_1){"use strict";var KbContentControl=function(){function KbContentControl(){this.contentKey=""}KbContentControl.prototype.init=function(context,notifyOutputChanged,state,container){this._context=context;MscrmControls.KbCommonUtils.FCBUtil.SetCustomerEnabledWaves(context)};KbContentControl.prototype.updateView=function(context){this._context=context;return this.render(false)};KbContentControl.prototype.updateIframe=function(end){var articleContentContainerKey=KbContentControl_1.Constants.ContentPaneArticleContentContainerPrefix+(this.isHostedInQuickform?this.contentKey:this._context.parameters.record.knowledgeArticleId),iFrameContainer=document.getElementById(this._context.accessibility.getUniqueId(articleContentContainerKey));if(!iFrameContainer||!this._context.parameters.record)return;var iFrameNode=iFrameContainer.firstChild,octoberWaveEnabled=MscrmControls.KbCommonUtils.FCBUtil.IsCustomerEnabledForOctWave(this._context);if(octoberWaveEnabled){var frameDoc=iFrameNode.contentWindow.document,preparedArticleContent=this.isHostedInQuickform?this._context.parameters.quickview.raw:this._context.parameters.record.content||"",isRTL=this._context.client.isRTL,searchUIEnhancementsEnabled=KbContentControl_1.KbContentUtil.IsFeatureEnabled(this._context,KbContentControl_1.KbContentUtil.SearchUIEnhancements),isHostedInFormContext=KbContentControl_1.KbContentUtil.IsHostedInFormContext(this._context),link=this.getCollapsibleLinkElement(),script=this.getCollapsibleScriptElement();frameDoc.head.innerHTML="";frameDoc.head.appendChild(link);link.onload=function(){frameDoc.body.innerHTML="";var doc=(new DOMParser).parseFromString(preparedArticleContent,"text/html");frameDoc.body=doc.body;iFrameNode.style.display="block";iFrameNode.style.flexGrow="1";frameDoc.head.appendChild(script);if(frameDoc.body){frameDoc.body.className=" articleText";frameDoc.body.style.margin="0px";frameDoc.body.style.wordBreak="break-word";if(isRTL)frameDoc.body.style.direction="rtl"}var iFrameElement=document.getElementById("articleContent");if(iFrameElement){iFrameElement.style.height="";iFrameElement.style.height="auto"}if(searchUIEnhancementsEnabled&&isHostedInFormContext){var body=frameDoc.body,html=frameDoc.documentElement,height=Math.max(body.scrollHeight,body.offsetHeight,html.clientHeight,html.scrollHeight,html.offsetHeight);iFrameNode.style.height=height+"px"}KbContentControl.prototype.setAnchorTagBindings(true,iFrameNode);end()}}else{iFrameNode.style.display="block";iFrameNode.style.flexGrow="1";var frameDoc=iFrameNode.contentWindow.document,preparedArticleContent_1=this.isHostedInQuickform?this._context.parameters.quickview.raw:this._context.parameters.record.content||"";frameDoc.write(preparedArticleContent_1);if(frameDoc.body){frameDoc.body.className=" articleText";frameDoc.body.style.margin="0px";frameDoc.body.style.wordBreak="break-word";if(this._context.client.isRTL)frameDoc.body.style.direction="rtl"}var iFrameElement=document.getElementById("articleContent");if(iFrameElement){iFrameElement.style.height="";iFrameElement.style.height="auto"}if(KbContentControl_1.KbContentUtil.IsFeatureEnabled(this._context,KbContentControl_1.KbContentUtil.SearchUIEnhancements)&&KbContentControl_1.KbContentUtil.IsHostedInFormContext(this._context)){var body=frameDoc.body,html=frameDoc.documentElement,height=Math.max(body.scrollHeight,body.offsetHeight,html.clientHeight,html.scrollHeight,html.offsetHeight);iFrameNode.style.height=height+"px"}this.setAnchorTagBindings(true,iFrameNode);end()}};KbContentControl.prototype.getCollapsibleLinkElement=function(){var webResourcesPath=this.getCkEditorLibsPath()+"/collapsible.css",link=document.createElement("link");link.href=webResourcesPath;link.type="text/css";link.rel="stylesheet";return link};KbContentControl.prototype.getCollapsibleScriptElement=function(){var webResourcesPath=this.getCkEditorLibsPath()+"/collapsible.js",script=document.createElement("script");script.src=webResourcesPath;script.type="text/javascript";return script};KbContentControl.prototype.getCkEditorLibsPath=function(){var clientBaseUrl=this._context.page.getClientUrl(),webResourceHash=this._context.client.orgSettings.webResourceHash,libsPath="WebResources/msdyncrm_/AssistEditControl/KBEditor/libs",ckEditorBasePath="ckeditor",webResourcesPath=clientBaseUrl+"/"+webResourceHash+"/"+libsPath+"/"+ckEditorBasePath;return webResourcesPath};KbContentControl.prototype.setAnchorTagBindings=function(setHandlers,iFrame){var _this=this,MESSAGE_HTML_ANCHOR_TAG_PROTOCOLS=["http:","https:"];if(iFrame)try{var anchors=$(iFrame.contentWindow.document.body).find("A").each(function(index,element){var anchorElement=element,anchorBaseURIWithHash=anchorElement.baseURI+anchorElement.hash;if(anchorBaseURIWithHash!=anchorElement.href)for(var i=0;i<MESSAGE_HTML_ANCHOR_TAG_PROTOCOLS.length;i++)try{if(anchorElement.protocol==MESSAGE_HTML_ANCHOR_TAG_PROTOCOLS[i])if(setHandlers)anchorElement.addEventListener("click",_this.anchorClicked.bind(_this));else anchorElement.removeEventListener("click",_this.anchorClicked.bind(_this))}catch(e){}})}catch(e2){}};KbContentControl.prototype.anchorClicked=function(evt){var targetNode=evt.target;while(targetNode.nodeName!="A")if(targetNode.parentNode&&targetNode.parentNode.nodeName!="BODY")targetNode=targetNode.parentNode;else return;var url=targetNode.href;if(url){this._context.utils.openInBrowser(url);evt.stopPropagation();evt.preventDefault()}};KbContentControl.prototype.renderArticleContent=function(){this.isHostedInQuickform=!MscrmCommon.ControlUtils.Object.isNullOrUndefined(this._context.parameters.quickview);if(this.isHostedInQuickform){var knowledgeIdField=this._context.parameters.record;this.contentKey=knowledgeIdField.raw.toString()}var selectedArticle=this.contentKey;if(!this.isHostedInQuickform)selectedArticle=this._context.parameters.record.knowledgeArticleId;var controlBlock=[];if(this.isHostedInQuickform&&!MscrmCommon.ControlUtils.Object.isNullOrUndefined(this._context.parameters.quickview.raw)||!this.isHostedInQuickform&&!MscrmCommon.ControlUtils.Object.isNullOrUndefined(this._context.parameters.record.content)){var WATERMARK_ACTION_OPEN_ARTICLE_TO_READ="Open_Article_To_Read",end=this._context.performance.createPerformanceStopwatch(WATERMARK_ACTION_OPEN_ARTICLE_TO_READ),articleContentPrefix="articleContent",articleContentKey=articleContentPrefix+selectedArticle,articleContent=this._context.factory.createElement("IFRAME",{id:articleContentKey,key:articleContentKey,tabIndex:0,accessibilityLabel:this._context.resources.getString(KbContentControl_1.Constants.ContentPaneTextResourceName),style:{width:"100%",height:"100%",minHeight:"calc(100% - "+this._context.utils.isFeatureEnabled(KbContentControl_1.Constants.EnableKMRating)?this._context.theming.measures.measure700:this._context.theming.measures.measure250+")",display:"none",marginTop:KbContentControl_1.KbContentUtil.IsFeatureEnabled(this._context,KbContentControl_1.KbContentUtil.SearchUIEnhancements)?this._context.theming.measures.measure125:this._context.theming.measures.measure150,marginBottom:this._context.theming.measures.measure100},src:this._context.client.userAgent.isBrowserIE?"about:blank":"/nga/blank.htm",onLoad:this.updateIframe.bind(this,end)});if(KbContentControl_1.KbContentUtil.IsFeatureEnabled(this._context,KbContentControl_1.KbContentUtil.SearchUIEnhancements)){var articleContentprops=articleContent.getProperties();articleContentprops.style["maxWidth"]="100%";articleContentprops.style["marginLeft"]="auto";articleContentprops.style["marginRight"]="auto";if(KbContentControl_1.KbContentUtil.IsHostedInArticlePage())articleContentprops.style["maxWidth"]=this._context.theming.breakpoints.dimensionm}controlBlock.push(articleContent)}var ratingControlProps={parameters:{record:{Usage:3,Static:true,Type:"SingleLine.Text",Value:selectedArticle,Attributes:{DisplayName:null,LogicalName:"CC_Rating_ArticleId",Type:"string",IsSecured:false,RequiredLevel:0,MaxLength:2147483647,EntityLogicalName:"",Format:"text",ImeMode:-1,Behavior:null}}}},ratingControl=this._context.factory.createComponent("MscrmControls.KbRatingControl.KbRatingControl","KbRatingControl_Container",ratingControlProps),ratingContainer=this._context.factory.createElement("Container",{id:"KbRatingControlContainer",key:"KbRatingControlContainer",ref:"KbRatingControlContainer",style:{display:"inline",width:"100%"}},ratingControl);if(KbContentControl_1.KbContentUtil.IsFeatureEnabled(this._context,KbContentControl_1.KbContentUtil.SearchUIEnhancements)){var ratingContainerprops=ratingContainer.getProperties();ratingContainerprops.style["maxWidth"]="100%";ratingContainerprops.style["marginLeft"]="auto";ratingContainerprops.style["marginRight"]="auto";if(KbContentControl_1.KbContentUtil.IsHostedInArticlePage())ratingContainerprops.style["maxWidth"]=this._context.theming.breakpoints.dimensionm}controlBlock.push(ratingContainer);var contentPaneArticleContentContainerKey=KbContentControl_1.Constants.ContentPaneArticleContentContainerPrefix+selectedArticle,contentDiv=this._context.factory.createElement("Container",{id:contentPaneArticleContentContainerKey,key:contentPaneArticleContentContainerKey,ref:"ContentPaneArticleContentContainerDiv",style:{flexGrow:1,overflowY:"auto","-webkit-overflow-scrolling":"touch !important",width:"100%",flexDirection:"column"}},controlBlock);return contentDiv};KbContentControl.prototype.render=function(isPopupControl){return this.renderArticleContent()};KbContentControl.prototype.getOutputs=function(){return null};KbContentControl.prototype.destroy=function(){};return KbContentControl}();KbContentControl_1.KbContentControl=KbContentControl})(KbContentControl=MscrmControls.KbContentControl||(MscrmControls.KbContentControl={}))})(MscrmControls||(MscrmControls={}));var MscrmControls;(function(MscrmControls){var KbContentControl;(function(KbContentControl){var KbContentUtil=function(){function KbContentUtil(){}KbContentUtil.IsHostedInArticlePage=function(){return window&&window.location&&window.location.href&&window.location.href.toLowerCase().indexOf("kbarticle")>-1};KbContentUtil.IsHostedInFormContext=function(context){return !MscrmCommon.ControlUtils.Object.isNullOrUndefined(context.page.entityTypeName)&&!MscrmCommon.ControlUtils.Object.isNullOrUndefined(context.page.entityId)};KbContentUtil.isCustomerEnabledForCurrentWave=function(context){return context.utils.isFeatureEnabled(this.CurrentWave)};KbContentUtil.IsFeatureEnabled=function(context,feature){return context.utils.isFeatureEnabled(feature)&&this.isCustomerEnabledForCurrentWave(context)};KbContentUtil.CurrentWave="April2020Update";KbContentUtil.SearchUIEnhancements="KMSearchUIEnhancements";return KbContentUtil}();KbContentControl.KbContentUtil=KbContentUtil})(KbContentControl=MscrmControls.KbContentControl||(MscrmControls.KbContentControl={}))})(MscrmControls||(MscrmControls={}))