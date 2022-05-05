var MscrmControls;(function(MscrmControls){var KbContentControl;(function(KbContentControl){"use strict";var Constants=function(){function Constants(){}Constants.ContentPaneArticleContentContainerPrefix="ContentPaneArticleContentContainer";Constants.ContentPaneTextResourceName="SearchWidget.AccessibilityText.ContentPaneText";Constants.EnableKMRating="EnableKMRating";Constants.KMRefreshSearchUI="KMRefreshUI";return Constants}();KbContentControl.Constants=Constants})(KbContentControl=MscrmControls.KbContentControl||(MscrmControls.KbContentControl={}))})(MscrmControls||(MscrmControls={}));var MscrmControls;(function(MscrmControls){var KbContentControl;(function(KbContentControl_1){"use strict";var KbContentControl=function(){function KbContentControl(){this.contentKey=""}KbContentControl.prototype.init=function(context,notifyOutputChanged,state,container){this._context=context};KbContentControl.prototype.updateView=function(context){this._context=context;return this.render(false)};KbContentControl.prototype.updateIframe=function(end){var articleContentContainerKey=KbContentControl_1.Constants.ContentPaneArticleContentContainerPrefix+(this.isHostedInQuickform?this.contentKey:this._context.parameters.record.knowledgeArticleId),iFrameContainer=document.getElementById(this._context.accessibility.getUniqueId(articleContentContainerKey));if(!iFrameContainer||!this._context.parameters.record)return;var iFrameNode=iFrameContainer.firstChild;iFrameNode.style.display="block";iFrameNode.style.flexGrow="1";var frameDoc=iFrameNode.contentWindow.document,preparedArticleContent=this.isHostedInQuickform?this._context.parameters.quickview.raw:this._context.parameters.record.content||"";frameDoc.write(preparedArticleContent);if(frameDoc.body){frameDoc.body.className=" articleText";frameDoc.body.style.margin="0px";frameDoc.body.style.wordBreak="break-word";if(this._context.client.isRTL)frameDoc.body.style.direction="rtl"}var iFrameElement=document.getElementById("articleContent");if(iFrameElement){iFrameElement.style.height="";iFrameElement.style.height="auto"}this.setAnchorTagBindings(true,iFrameNode);end()};KbContentControl.prototype.setAnchorTagBindings=function(setHandlers,iFrame){var _this=this,MESSAGE_HTML_ANCHOR_TAG_PROTOCOLS=["http:","https:"];if(iFrame)try{var anchors=$(iFrame.contentWindow.document.body).find("A").each(function(index,element){var anchorElement=element,anchorBaseURIWithHash=anchorElement.baseURI+anchorElement.hash;if(anchorBaseURIWithHash!=anchorElement.href)for(var i=0;i<MESSAGE_HTML_ANCHOR_TAG_PROTOCOLS.length;i++)try{if(anchorElement.protocol==MESSAGE_HTML_ANCHOR_TAG_PROTOCOLS[i])if(setHandlers)anchorElement.addEventListener("click",_this.anchorClicked.bind(_this));else anchorElement.removeEventListener("click",_this.anchorClicked.bind(_this))}catch(e){}})}catch(e2){}};KbContentControl.prototype.anchorClicked=function(evt){var targetNode=evt.target;while(targetNode.nodeName!="A")if(targetNode.parentNode&&targetNode.parentNode.nodeName!="BODY")targetNode=targetNode.parentNode;else return;var url=targetNode.href;if(url){this._context.utils.openInBrowser(url);evt.stopPropagation();evt.preventDefault()}};KbContentControl.prototype.renderArticleContent=function(){this.isHostedInQuickform=!MscrmCommon.ControlUtils.Object.isNullOrUndefined(this._context.parameters.quickview);if(this.isHostedInQuickform){var knowledgeIdField=this._context.parameters.record;this.contentKey=knowledgeIdField.raw.toString()}var selectedArticle=this.contentKey;if(!this.isHostedInQuickform)selectedArticle=this._context.parameters.record.knowledgeArticleId;var controlBlock=[];if(this.isHostedInQuickform&&!MscrmCommon.ControlUtils.Object.isNullOrUndefined(this._context.parameters.quickview.raw)||!this.isHostedInQuickform&&!MscrmCommon.ControlUtils.Object.isNullOrUndefined(this._context.parameters.record.content)){var WATERMARK_ACTION_OPEN_ARTICLE_TO_READ="Open_Article_To_Read",end=this._context.performance.createPerformanceStopwatch(WATERMARK_ACTION_OPEN_ARTICLE_TO_READ),articleContentPrefix="articleContent",articleContentKey=articleContentPrefix+selectedArticle,articleContent=this._context.factory.createElement("IFRAME",{id:articleContentKey,key:articleContentKey,tabIndex:0,accessibilityLabel:this._context.resources.getString(KbContentControl_1.Constants.ContentPaneTextResourceName),style:{width:"100%",height:"100%",minHeight:"calc(100% - "+this._context.utils.isFeatureEnabled(KbContentControl_1.Constants.EnableKMRating)?this._context.theming.measures.measure700:this._context.theming.measures.measure250+")",display:"none",marginTop:this._context.theming.measures.measure150,marginBottom:this._context.theming.measures.measure100},src:this._context.client.userAgent.isBrowserIE?"about:blank":"/nga/blank.htm",onLoad:this.updateIframe.bind(this,end)});controlBlock.push(articleContent)}var ratingControlProps={parameters:{record:{Usage:3,Static:true,Type:"SingleLine.Text",Value:selectedArticle,Attributes:{DisplayName:null,LogicalName:"CC_Rating_ArticleId",Type:"string",IsSecured:false,RequiredLevel:0,MaxLength:2147483647,EntityLogicalName:"",Format:"text",ImeMode:-1,Behavior:null}}}},ratingControl=this._context.factory.createComponent("MscrmControls.KbRatingControl.KbRatingControl","KbRatingControl_Container",ratingControlProps),ratingContainer=this._context.factory.createElement("Container",{id:"KbRatingControlContainer",key:"KbRatingControlContainer",ref:"KbRatingControlContainer",style:{display:"inline",width:"100%"}},ratingControl);controlBlock.push(ratingContainer);var contentPaneArticleContentContainerKey=KbContentControl_1.Constants.ContentPaneArticleContentContainerPrefix+selectedArticle,contentDiv=this._context.factory.createElement("Container",{id:contentPaneArticleContentContainerKey,key:contentPaneArticleContentContainerKey,ref:"ContentPaneArticleContentContainerDiv",style:{flexGrow:1,overflowY:"auto","-webkit-overflow-scrolling":"touch !important",width:"100%",flexDirection:"column"}},controlBlock);if(KbContentControl_1.KbContentUtil.IsFeatureEnabled(this._context,KbContentControl_1.Constants.KMRefreshSearchUI))contentDiv.getProperties().style.minHeight="340px";return contentDiv};KbContentControl.prototype.render=function(isPopupControl){return this.renderArticleContent()};KbContentControl.prototype.getOutputs=function(){return null};KbContentControl.prototype.destroy=function(){};return KbContentControl}();KbContentControl_1.KbContentControl=KbContentControl})(KbContentControl=MscrmControls.KbContentControl||(MscrmControls.KbContentControl={}))})(MscrmControls||(MscrmControls={}));var MscrmControls;(function(MscrmControls){var KbContentControl;(function(KbContentControl){var KbContentUtil=function(){function KbContentUtil(){}KbContentUtil.isCustomerEnabledForCurrentWave=function(context){if(context.utils.isFeatureEnabled(this.CurrentWave))return true};KbContentUtil.IsFeatureEnabled=function(context,feature){if(context.utils.isFeatureEnabled(feature)&&this.isCustomerEnabledForCurrentWave(context))return true;else return false};KbContentUtil.CurrentWave="October2019Update";return KbContentUtil}();KbContentControl.KbContentUtil=KbContentUtil})(KbContentControl=MscrmControls.KbContentControl||(MscrmControls.KbContentControl={}))})(MscrmControls||(MscrmControls={}))