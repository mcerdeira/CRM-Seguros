var MscrmControls;(function(MscrmControls){var KbContentControl;(function(KbContentControl){"use strict";var Constants=function(){function Constants(){}Constants.ContentPaneArticleContentContainerPrefix="ContentPaneArticleContentContainer";Constants.ContentPaneTextResourceName="SearchWidget.AccessibilityText.ContentPaneText";Constants.EnableKMRating="EnableKMRating";return Constants}();KbContentControl.Constants=Constants})(KbContentControl=MscrmControls.KbContentControl||(MscrmControls.KbContentControl={}))})(MscrmControls||(MscrmControls={}));var MscrmControls;(function(MscrmControls){var KbContentControl;(function(KbContentControl_1){"use strict";var KbContentControl=function(){function KbContentControl(){this.contentKey="";this.ratingMultisessionContext=null}KbContentControl.prototype.init=function(context,notifyOutputChanged,state,container){this._context=context;this._state=state;this.initRatingMultisessionContext();MscrmControls.KbCommonUtils.FCBUtil.SetCustomerEnabledWaves(context);if(MscrmControls.KbCommonUtils.FCBUtil.IsStatePersistenceEnabled(this._context)&&state!=null)this.articleScrollPos=state.articleScrollPos};KbContentControl.prototype.updateView=function(context){this._context=context;return this.render()};KbContentControl.prototype.updateIframe=function(end){var articleContentContainerKey=this.getArticleContentContainerKey(),iFrameContainer=document.getElementById(this._context.accessibility.getUniqueId(articleContentContainerKey));if(!iFrameContainer||!this._context.parameters.record)return;var iFrameNode=iFrameContainer.firstChild,scrollPos=0;if(MscrmControls.KbCommonUtils.FCBUtil.IsStatePersistenceEnabled(this._context)){scrollPos=this.articleScrollPos;this.articleScrollPos=0}iFrameNode.style.display="block";iFrameNode.style.flexGrow="1";var frameDoc=iFrameNode.contentWindow.document,preparedArticleContent=this.isHostedInQuickform?this._context.parameters.quickview.raw:this._context.parameters.record.content||"";frameDoc.write(preparedArticleContent);if(MscrmControls.KbCommonUtils.FCBUtil.IsCustomerEnabledForOctWave(this._context)){var link=this.getCollapsibleLinkElement(),script=this.getCollapsibleScriptElement();frameDoc.head.appendChild(link);frameDoc.head.appendChild(script);var paddingValue=this._context.theming.measures.measure100;if(this._context.client.isRTL)iFrameNode.style.paddingRight=paddingValue;else iFrameNode.style.paddingLeft=paddingValue}if(frameDoc.body){frameDoc.body.className=" articleText";frameDoc.body.style.margin="0px";frameDoc.body.style.wordBreak="break-word";if(this._context.client.isRTL)frameDoc.body.style.direction="rtl"}var iFrameElement=document.getElementById("articleContent");if(iFrameElement){iFrameElement.style.height="";iFrameElement.style.height="auto"}if(MscrmControls.KbCommonUtils.CommonUtils.IsReferencePanel(this._context)){var body=frameDoc.body,html=frameDoc.documentElement,height=Math.max(body.scrollHeight,body.offsetHeight,html.clientHeight,html.scrollHeight,html.offsetHeight);iFrameNode.style.height=height+"px"}if(scrollPos!=0&&frameDoc.scrollingElement)frameDoc.scrollingElement.scrollTop=scrollPos;this.setAnchorTagBindings(true,iFrameNode);end()};KbContentControl.prototype.getCollapsibleLinkElement=function(){var webResourcesPath=this.getCkEditorLibsPath()+"/plugins/collapsible/styles/collapsible.css",link=document.createElement("link");link.href=webResourcesPath;link.type="text/css";link.rel="stylesheet";return link};KbContentControl.prototype.getCollapsibleScriptElement=function(){var webResourcesPath=this.getCkEditorLibsPath()+"/plugins/collapsible/collapsible.js",script=document.createElement("script");script.src=webResourcesPath;script.type="text/javascript";return script};KbContentControl.prototype.getCkEditorLibsPath=function(){var clientBaseUrl=this._context.page.getClientUrl(),webResourceHash=this._context.client.orgSettings.webResourceHash,libsPath="WebResources/msdyncrm_/AssistEditControl/KBEditor/libs",ckEditorBasePath="ckeditor",webResourcesPath=clientBaseUrl+"/"+webResourceHash+"/"+libsPath+"/"+ckEditorBasePath;return webResourcesPath};KbContentControl.prototype.setAnchorTagBindings=function(setHandlers,iFrame){var _this=this,MESSAGE_HTML_ANCHOR_TAG_PROTOCOLS=["http:","https:"];if(iFrame)try{var anchors=$(iFrame.contentWindow.document.body).find("A").each(function(index,element){var anchorElement=element,anchorBaseURIWithHash=anchorElement.baseURI+anchorElement.hash;if(anchorBaseURIWithHash!=anchorElement.href)for(var i=0;i<MESSAGE_HTML_ANCHOR_TAG_PROTOCOLS.length;i++)try{if(anchorElement.protocol==MESSAGE_HTML_ANCHOR_TAG_PROTOCOLS[i])if(setHandlers)anchorElement.addEventListener("click",_this.anchorClicked.bind(_this));else anchorElement.removeEventListener("click",_this.anchorClicked.bind(_this))}catch(e){}})}catch(e2){}};KbContentControl.prototype.anchorClicked=function(evt){var targetNode=evt.target;while(targetNode.nodeName!="A")if(targetNode.parentNode&&targetNode.parentNode.nodeName!="BODY")targetNode=targetNode.parentNode;else return;var url=targetNode.href;if(url){this._context.utils.openInBrowser(url);evt.stopPropagation();evt.preventDefault()}};KbContentControl.prototype.renderArticleContent=function(){this.isHostedInQuickform=!MscrmCommon.ControlUtils.Object.isNullOrUndefined(this._context.parameters.quickview);if(this.isHostedInQuickform){var knowledgeIdField=this._context.parameters.record;this.contentKey=knowledgeIdField.raw.toString()}var selectedArticle=this.contentKey;if(!this.isHostedInQuickform)selectedArticle=this._context.parameters.record.knowledgeArticleId;var controlBlock=[],articleUrl=!this.isHostedInQuickform&&!MscrmCommon.ControlUtils.Object.isNullOrUndefined(this._context.parameters.record.isIngestedArticle)?this._context.parameters.record.articleUrl:"";if(this.isHostedInQuickform&&!MscrmCommon.ControlUtils.Object.isNullOrUndefined(this._context.parameters.quickview.raw)||!this.isHostedInQuickform&&!MscrmCommon.ControlUtils.Object.isNullOrUndefined(this._context.parameters.record.content)||!MscrmCommon.ControlUtils.String.isNullUndefinedOrWhitespace(articleUrl)){var WATERMARK_ACTION_OPEN_ARTICLE_TO_READ="Open_Article_To_Read",end=this._context.performance.createPerformanceStopwatch(WATERMARK_ACTION_OPEN_ARTICLE_TO_READ);if(!MscrmCommon.ControlUtils.String.isNullUndefinedOrWhitespace(articleUrl))articleUrl+=""!=(new URL(articleUrl)).search?"&":"?"+MscrmControls.KbCommonUtils.Constants.ExternalArticleUrlIframeViewKey;var articleContentPrefix="articleContent",articleContentKey=articleContentPrefix+selectedArticle,articleContent=this._context.factory.createElement("IFRAME",{id:articleContentKey,key:articleContentKey,tabIndex:0,accessibilityLabel:this._context.resources.getString(KbContentControl_1.Constants.ContentPaneTextResourceName),style:{width:"100%",height:"100%",minHeight:"calc(100% - "+this._context.utils.isFeatureEnabled(KbContentControl_1.Constants.EnableKMRating)?this._context.theming.measures.measure700:this._context.theming.measures.measure250+")",display:!MscrmCommon.ControlUtils.String.isNullUndefinedOrWhitespace(articleUrl)?"block":"none",marginTop:this._context.theming.measures.measure125,marginBottom:this._context.theming.measures.measure100,boxSizing:"border-box"},src:!MscrmCommon.ControlUtils.String.isNullUndefinedOrWhitespace(articleUrl)?articleUrl:this._context.client.userAgent.isBrowserIE?"about:blank":"/nga/blank.htm"}),articleContentprops=articleContent.getProperties();articleContentprops.style["maxWidth"]="100%";articleContentprops.style["marginLeft"]="auto";articleContentprops.style["marginRight"]="auto";if(MscrmCommon.ControlUtils.String.isNullUndefinedOrWhitespace(articleUrl))articleContentprops.onLoad=this.updateIframe.bind(this,end);if(KbContentControl_1.KbContentUtil.IsHostedInArticlePage())articleContentprops.style["maxWidth"]=this._context.theming.breakpoints.dimensionm;controlBlock.push(articleContent)}var shouldFocusOnRatingControl=this._context.shouldSetFocustoRatingControl&&this._context.shouldSetFocustoRatingControl(),ratingControlProps={parameters:{record:{Usage:3,Static:true,Type:"SingleLine.Text",Value:{selectedArticleId:selectedArticle,resourceUri:this._context.parameters.record.resourceUri,systemUserId:this._context.parameters.record.systemUserId?this._context.parameters.record.systemUserId:this._context.userSettings.userId.substring(1,this._context.userSettings.userId.length-1),shouldBeFocused:shouldFocusOnRatingControl},Attributes:{DisplayName:null,LogicalName:"CC_Rating_ArticleId",Type:"string",IsSecured:false,RequiredLevel:0,MaxLength:2147483647,EntityLogicalName:"",Format:"text",ImeMode:-1,Behavior:null,MultisessionContext:this.ratingMultisessionContext}}}},ratingControl=this._context.factory.createComponent("MscrmControls.KbRatingControl.KbRatingControl","KbRatingControl_Container",ratingControlProps),ratingContainer=this._context.factory.createElement("Container",{id:"KbRatingControlContainer",key:"KbRatingControlContainer",ref:"KbRatingControlContainer",style:{display:"inline",width:"100%"}},ratingControl),ratingContainerprops=ratingContainer.getProperties();ratingContainerprops.style["maxWidth"]="100%";ratingContainerprops.style["marginLeft"]="auto";ratingContainerprops.style["marginRight"]="auto";if(KbContentControl_1.KbContentUtil.IsHostedInArticlePage())ratingContainerprops.style["maxWidth"]=this._context.theming.breakpoints.dimensionm;controlBlock.push(ratingContainer);var contentPaneArticleContentContainerKey=KbContentControl_1.Constants.ContentPaneArticleContentContainerPrefix+selectedArticle,style={flexGrow:1,"-webkit-overflow-scrolling":"touch !important",width:"100%",flexDirection:"column",boxSizing:"border-box"};style[this._context.client.isRTL?"paddingRight":"paddingLeft"]=!MscrmControls.KbCommonUtils.CommonUtils.IsReferencePanel(this._context)?this._context.theming.measures.measure100:0;var contentDiv=this._context.factory.createElement("Container",{id:contentPaneArticleContentContainerKey,key:contentPaneArticleContentContainerKey,ref:"ContentPaneArticleContentContainerDiv",style:style},controlBlock);return contentDiv};KbContentControl.prototype.render=function(){return this.renderArticleContent()};KbContentControl.prototype.getOutputs=function(){return null};KbContentControl.prototype.getArticleContentContainerKey=function(){return KbContentControl_1.Constants.ContentPaneArticleContentContainerPrefix+(this.isHostedInQuickform?this.contentKey:this._context.parameters.record.knowledgeArticleId)};KbContentControl.prototype.destroy=function(){if(MscrmControls.KbCommonUtils.FCBUtil.IsStatePersistenceEnabled(this._context)&&this._context.setControlState){var state={},articleContentContainerKey=this.getArticleContentContainerKey(),iFrameContainer=document.getElementById(this._context.accessibility.getUniqueId(articleContentContainerKey));if(iFrameContainer&&this._context.parameters.record){var iFrameNode=iFrameContainer.firstChild;if(iFrameNode&&iFrameNode.contentWindow){var frameDoc=iFrameNode.contentWindow.document;if(frameDoc&&frameDoc.scrollingElement&&frameDoc.scrollingElement.scrollTop!=0)state.articleScrollPos=frameDoc.scrollingElement.scrollTop}}if(this.ratingMultisessionContext&&this.ratingMultisessionContext.RequestStateFn)state.RatingState=this.ratingMultisessionContext.RequestStateFn();this._context.setControlState(state,false,true)}};KbContentControl.prototype.initRatingMultisessionContext=function(){if(MscrmControls.KbCommonUtils.CommonUtils.IsMultisessionHost(this._context))this.ratingMultisessionContext={IsProductivityPane:false,Session:null,SessionUniqueId:null,SessionContext:null,State:this._state?this._state.RatingState:null,RequestStateFn:null}};return KbContentControl}();KbContentControl_1.KbContentControl=KbContentControl})(KbContentControl=MscrmControls.KbContentControl||(MscrmControls.KbContentControl={}))})(MscrmControls||(MscrmControls={}));var MscrmControls;(function(MscrmControls){var KbContentControl;(function(KbContentControl){var KbContentUtil=function(){function KbContentUtil(){}KbContentUtil.IsHostedInArticlePage=function(){return window&&window.location&&window.location.href&&window.location.href.toLowerCase().indexOf("kbarticle")>-1};KbContentUtil.isCustomerEnabledForCurrentWave=function(context){return context.utils.isFeatureEnabled(this.CurrentWave)};KbContentUtil.IsFeatureEnabled=function(context,feature){return context.utils.isFeatureEnabled(feature)&&this.isCustomerEnabledForCurrentWave(context)};KbContentUtil.CurrentWave="April2020Update";return KbContentUtil}();KbContentControl.KbContentUtil=KbContentUtil})(KbContentControl=MscrmControls.KbContentControl||(MscrmControls.KbContentControl={}))})(MscrmControls||(MscrmControls={}))