var MscrmControls;(function(MscrmControls){var KbArticleControl;(function(KbArticleControl){"use strict";var Constants=function(){function Constants(){}Constants.NumberOfViewsIconToolTip="SearchWidget.SearchKMArticles.NumberOfViewsToolTip";Constants.ModifiedOnLabelToolTip="SearchWidget.SearchKMArticles.LastModifiedDateLabelToolTip";Constants.ArticleAssociatedTag="SearchWidget.ArticleTagLabel.Associated";Constants.ArticleAssociatedTagToolTip="SearchWidget.ArticleIconToolTip.Associated";Constants.RatingIconToolTip="SearchWidget.SearchKMArticles.RatingIconToolTip";Constants.NumberOfRatingToolTip="SearchWidget.SearchKMArticles.NumberOfRatingToolTip";Constants.ModifiedOnLabel="SearchWidget.SearchKMArticles.LastModifiedDateLabel";Constants.AllDraftArticlesResourceName="SearchWidget.Filters.AllDraftArticles";Constants.AllPublishedArticlesResourceName="SearchWidget.Filters.AllPublishedArticles";Constants.AllApprovedArticlesResourceName="SearchWidget.Filters.AllApprovedArticles";Constants.WebresourceNameArticleActions="ArticleActions";Constants.EnterKeyValue="Enter";Constants.ServerSearchFailure="SearchWidget.SearchKMArticles.ServerFailure";Constants.KBArticleControlID="kbarticle";Constants.GLOBAL_NOTIFICATION_TYPE_TOAST=1;Constants.GLOBAL_NOTIFICATION_LEVEL_SUCCESS=1;return Constants}();KbArticleControl.Constants=Constants})(KbArticleControl=MscrmControls.KbArticleControl||(MscrmControls.KbArticleControl={}))})(MscrmControls||(MscrmControls={}));var MscrmControls;(function(MscrmControls){var KbArticleControl;(function(KbArticleControl_1){"use strict";var KbArticleControl=function(){function KbArticleControl(){this.isInitialized=false}KbArticleControl.prototype.init=function(context,notifyOutputChanged,state,container){var _this=this;this._context=context;MscrmControls.KbCommonUtils.FCBUtil.SetCustomerEnabledWaves(context);MscrmControls.KbCommonUtils.ActionOperationRegistration.RegisterAllActions();this._stateManager=KbArticleControl_1.StateManager.Instance(KbArticleControl_1.Constants.KBArticleControlID,true);!this.isInitialized&&this.fetchControlInitSettings().then(function(value){_this.isInitialized=true;_this.kmPrivileges=value.KMPrivileges;_this.useExternalKMPortal=value.UseExternalKMPortal;_this.externalKMPortalURL=value.ExternalKMPortalURL;_this.isRelevanceSearchEnabled=value.IsRelevanceSearchEnabled;_this._stateManager.isKnowledgeSearchInsightsEnabled=value.IsKnowledgeSearchInsightsEnabled;_this._context.utils.requestRender();_this.showEditBtnInDialog()},function(error){var errorMessage=error&&error.message||error&&error.error&&error.error.message||"";_this.UpdateErrorStateInContext(context,KbArticleControl_1.Constants.ServerSearchFailure,false,errorMessage)});this._stateManager.InitializeModels(this._context);if(MscrmControls.KbCommonUtils.CommonUtils.IsInArticlePageContext()){document.title=MscrmCommon.ControlUtils.String.Format(context.resources.getString("KbArticlePage.Standalone.PageTitle"),context.parameters.article.title);this.parseExtraQueryString()}this.isInKbSubgridReadDialog()&&MscrmControls.KbCommonUtils.CommonUtils.IncrementKnowledgeArticleViewCountOfCurrentOrg(this._context,this._context.parameters.article.knowledgeArticleId);this.logInitTelemetry()};KbArticleControl.prototype.logInitTelemetry=function(){var eventParams=[];eventParams.push({name:"UseExternalKMPortal",value:this.useExternalKMPortal});eventParams.push({name:"IsKnowledgeSearchInsightsEnabled",value:this._stateManager.isKnowledgeSearchInsightsEnabled});MscrmControls.KbCommonUtils.TelemetryReporter.LogInfo(this._context,{actionName:MscrmControls.KbCommonUtils.TelemetryActionName.KbArticle_Control_Initialized,controlType:MscrmControls.KbCommonUtils.TelemetryControlType.KbArticleControl,eventParams:eventParams})};KbArticleControl.prototype.isInKbSubgridReadDialog=function(){return MscrmControls.KbCommonUtils.CommonUtils.IsLoadedInDialog(this._context)&&MscrmControls.KbCommonUtils.CommonUtils.GetDialogUniqueName(this._context)==="KnowledgeArticleReadDialog"};KbArticleControl.prototype.showEditBtnInDialog=function(){if(window.Xrm.Page.ui.controls){var editBtn=window.Xrm.Page.ui.controls.get("edit_id");editBtn&&this.kmPrivileges.CanWrite&&MscrmControls.KbCommonUtils.CommonUtils.IsNetworkAvailable()&&editBtn.setVisible(true)}};KbArticleControl.prototype.UpdateErrorStateInContext=function(context,errorMessage,isControlDisabled,errorDescription,additionalProperties){if(isControlDisabled===void 0)isControlDisabled=false;var stateManager=KbArticleControl_1.StateManager.Instance(KbArticleControl_1.Constants.KBArticleControlID);stateManager.errorDetails=errorDescription;stateManager.errorMessage=errorMessage;stateManager.error=true;stateManager.loading=false;additionalProperties&&Object.assign(stateManager,additionalProperties)};KbArticleControl.prototype.fetchControlInitSettings=function(){var entityIdentifier="";if(this._context.page.entityTypeName)entityIdentifier="EntityLogicalName='"+this._context.page.entityTypeName+"'";var crossOrgResourceUri=this._context.parameters&&this._context.parameters.article&&this._context.parameters.article.resourceUri,searchProviderType=this._context.parameters&&this._context.parameters.article&&this._context.parameters.article.searchProviderType,kmInitSettingsUrl=""+MscrmControls.KbCommonUtils.Constants.ODATA_PATH+MscrmControls.KbCommonUtils.Constants.RetrieveKMControlSettingsEndpoint+"("+entityIdentifier+")";return MscrmControls.KbCommonUtils.FetchApiHelper.Fetch(this._context,MscrmControls.KbCommonUtils.GET_METHOD,kmInitSettingsUrl,"",MscrmControls.KbCommonUtils.SearchProviderType.CrossDynamicsOrg==searchProviderType,crossOrgResourceUri,MscrmControls.KbCommonUtils.Constants.CrossDynamicsOrgApiCall).then(function(parsedValue){return JSON.parse(parsedValue.Result)})};KbArticleControl.prototype.IsKbArticlePageType=function(){return window&&window.location&&window.location.href&&window.location.href.toLowerCase().indexOf("kbarticle")>-1};KbArticleControl.prototype.parseExtraQueryString=function(){try{var urlParams=new URLSearchParams(window.location.search),extraQueryString=urlParams.get(MscrmControls.KbCommonUtils.Constants.ExtraQueryString);if(extraQueryString!=null){var extraQueryParams=new URLSearchParams(extraQueryString);if(extraQueryParams.get(MscrmControls.KbCommonUtils.Constants.KnowledgeOperationIdParameter))this._stateManager.knowledgeOperationId=extraQueryParams.get(MscrmControls.KbCommonUtils.Constants.KnowledgeOperationIdParameter).trim();if(extraQueryParams.get(MscrmControls.KbCommonUtils.Constants.ArticleRankParameter))this._stateManager.articleRank=parseInt(extraQueryParams.get(MscrmControls.KbCommonUtils.Constants.ArticleRankParameter).trim())}}catch(ex){MscrmControls.KbCommonUtils.TelemetryReporter.LogError(this._context,{componentName:MscrmControls.KbCommonUtils.TelemetryComponentName.KbArticleControl_General,controlType:MscrmControls.KbCommonUtils.TelemetryControlType.KbArticleControl,errorMessage:"Failed to parse extra query string: "+extraQueryString})}};KbArticleControl.prototype.updateView=function(context){this._context=context;this._stateManager.kmPrivileges=this.kmPrivileges;this._stateManager.useExternalKMPortal=this.useExternalKMPortal;this._stateManager.externalKMPortalURL=this.externalKMPortalURL;MscrmControls.KbCommonUtils.KbCommonControlLocale.initialize(function(id){return context.resources.getString(id)});return this.render()};KbArticleControl.prototype.renderArticleMetadata=function(){if(this.KbSearchResultLegendsObject==null){this.KbSearchResultLegendsObject=new KbArticleControl_1.KbSearchResultLegends;this.KbSearchResultLegendsObject.init(this._context)}this.KbSearchResultLegendsObject.IsRelevanceSearchEnabled=this.isRelevanceSearchEnabled;var resultLegends=this.KbSearchResultLegendsObject.render(this._context.parameters.article);return this._context.factory.createElement("Container",{id:"kbSearchResults.footer.id_test",key:"kbSearchResults.footer.id",style:{width:"100%",display:"flex"}},resultLegends)};KbArticleControl.prototype.renderArticleTitle=function(title){return this._context.factory.createElement("TEXT",{id:"contentPaneArticleTitle",semanticTag:"h2",style:{fontFamily:this._context.theming.fontfamilies.semibold,fontSize:this._context.theming.fontsizes.font175,color:this._context.theming.colors.grays.gray06,textOverflow:"ellipsis",overflow:"hidden",width:"100%",maxWidth:"100%",lineHeight:"1.4em",whiteSpace:"normal"}},title)};KbArticleControl.prototype.renderArticleActions=function(articleRecord,describedByElementId){var articleActionsObject=new KbArticleControl_1.ArticleActions;articleActionsObject.init(this._context);return articleActionsObject.render(articleRecord,this._context.accessibility.getUniqueId(describedByElementId))};KbArticleControl.prototype.renderControlBlock=function(){var controlBlock=[],actionDiv=null,isMultiSessionAppTab=MscrmControls.KbCommonUtils.CommonUtils.IsArticleOpenInMultisessionAppTab(this._context),title=this._context.parameters.article.title,renderArticleTitle=this.renderArticleTitle(title),articleTitleProps={id:"ContentPaneArticleName",key:"ContentPaneArticleNameDiv",style:{marginTop:this._context.theming.measures.measure100,marginBottom:this._context.theming.measures.measure100,width:"100%"}},articleMetadataProps={id:"ContentPaneArticleMetadata",key:"ContentPaneArticleMetadatadiv",style:{minHeight:"20px",marginTop:this._context.theming.measures.measure025,width:"100%"}},controlBlockProps={id:"controlBlockArticleInfoHeaderReadPane",key:"controlBlockArticleInfoReadPanelDiv",ref:"controlBlockArticleInfoReadPanelDiv"},articleTitleId="articleTitle"+this._context.parameters.article.knowledgeArticleId,rowsForActionRender=this.renderArticleActions(this._context.parameters.article,articleTitleId);if((this.IsKbArticlePageType()||isMultiSessionAppTab)&&rowsForActionRender!=null){actionDiv=this._context.factory.createElement("Container",{id:"contentPaneArticleActionsContainer",key:"kbSearchResults.action",style:{width:"100%",height:isMultiSessionAppTab?"auto":this._context.theming.measures.measure175,marginRight:this._context.client.isRTL?this._context.theming.measures.measure100:0,position:"relative",borderBottom:"1px solid #ccc",paddingBottom:isMultiSessionAppTab?"0px":this._context.theming.measures.measure125}},rowsForActionRender);!isMultiSessionAppTab&&controlBlock.push(actionDiv)}articleTitleProps.style["display"]="block";articleMetadataProps.style["display"]="block";controlBlockProps.style={width:"100%",display:"block",maxWidth:"100%",margin:"auto",boxSizing:"border-box"};controlBlockProps.style[this._context.client.isRTL?"paddingRight":"paddingLeft"]=!MscrmControls.KbCommonUtils.CommonUtils.IsReferencePanel(this._context)?this._context.theming.measures.measure100:0;if(MscrmControls.KbCommonUtils.CommonUtils.IsInArticlePageContext())controlBlockProps.style["maxWidth"]=this._context.theming.breakpoints.dimensionm;controlBlock.push(this._context.factory.createElement("Container",articleTitleProps,renderArticleTitle));controlBlock.push(this._context.factory.createElement("Container",articleMetadataProps,this.renderArticleMetadata()));if(isMultiSessionAppTab&&actionDiv!=null)return this._context.factory.createElement("Container",{id:"KnowledgeArticle-Container",key:"KnowledgeArticle-Container",style:{width:"100%",display:"block"}},[actionDiv,this._context.factory.createElement("Container",controlBlockProps,controlBlock)]);else return this._context.factory.createElement("Container",controlBlockProps,controlBlock)};KbArticleControl.prototype.render=function(){return this.renderControlBlock()};KbArticleControl.prototype.getOutputs=function(){return null};KbArticleControl.prototype.destroy=function(){};return KbArticleControl}();KbArticleControl_1.KbArticleControl=KbArticleControl})(KbArticleControl=MscrmControls.KbArticleControl||(MscrmControls.KbArticleControl={}))})(MscrmControls||(MscrmControls={}));var MscrmControls;(function(MscrmControls){var KbArticleControl;(function(KbArticleControl){"use strict";var StateManager=function(){function StateManager(){this.loading=true;this.isKnowledgeSearchInsightsEnabled=false;this.knowledgeOperationId=null;this.articleRank=-1;this.relations=null}StateManager.Instance=function(controlId,initializingControl){if(initializingControl===void 0)initializingControl=false;if(!StateManager._stateManager[controlId]||initializingControl)StateManager._stateManager[controlId]=new StateManager;return StateManager._stateManager[controlId]};StateManager.prototype.GetkbSearchResultContentPaneObject=function(){};StateManager.prototype.SetSelectedArticle=function(selectedKbSearchRecord,context){};StateManager.prototype.SetIsSearchMode=function(isSearchMode,context){};StateManager.prototype.InitializeModels=function(context){this._context=context};StateManager.prototype.ReportEventToTelemetry=function(actionName){MscrmControls.KbCommonUtils.TelemetryReporter.LogUsage(this._context,{actionName:actionName,controlType:MscrmControls.KbCommonUtils.TelemetryControlType.KbArticleControl,featureName:MscrmControls.KbCommonUtils.TelemetryFeatureName.ArticleActions,subFeatureName:actionName})};StateManager._stateManager={};return StateManager}();KbArticleControl.StateManager=StateManager})(KbArticleControl=MscrmControls.KbArticleControl||(MscrmControls.KbArticleControl={}))})(MscrmControls||(MscrmControls={}));var MscrmControls;(function(MscrmControls){var KbArticleControl;(function(KbArticleControl){"use strict";var KbSearchResultLegends=function(){function KbSearchResultLegends(){}KbSearchResultLegends.prototype.init=function(context,notifyOutputChanged,state,container){this._context=context};KbSearchResultLegends.prototype.render=function(kbSearchRecord){var controlBlock=[],knowledgeArticleViews=kbSearchRecord.knowledgeArticleViews?kbSearchRecord.knowledgeArticleViews:0,knowledgeArticleViewsTooltipValue=MscrmCommon.ControlUtils.String.Format(this._context.resources.getString(KbArticleControl.Constants.NumberOfViewsIconToolTip),knowledgeArticleViews.toString()),modifiedOnResourceTooltipValue=this._context.resources.getString(KbArticleControl.Constants.ModifiedOnLabelToolTip),knowledgeArticleViewsLabel=this._context.factory.createElement("LABEL",{id:"KbArticleControl.knowledgeArticleViews_"+kbSearchRecord.knowledgeArticleId.toString(),key:"KbArticleControl.knowledgeArticleViews_"+kbSearchRecord.knowledgeArticleId.toString(),title:knowledgeArticleViewsTooltipValue,accessibilityHidden:true,tabIndex:-1,style:{fontSize:this._context.theming.fontsizes.font085,lineHeight:this._context.theming.fontsizes.font115}},knowledgeArticleViews),knowledgeArticleViewsAccessibilityLabel=this._context.factory.createElement("LABEL",{id:"KbArticleControl.knowledgeArticleViewsAccessibilityLabel_"+kbSearchRecord.knowledgeArticleId.toString(),key:"KbArticleControl.knowledgeArticleViewsAccessibilityLabel_"+kbSearchRecord.knowledgeArticleId.toString(),style:MscrmControls.KbCommonUtils.Constants.AccessibilityLabelStyle},knowledgeArticleViewsTooltipValue),rating=kbSearchRecord.rating?kbSearchRecord.rating:0,ratingAccessibilityLabelText=MscrmCommon.ControlUtils.String.Format(this._context.resources.getString(KbArticleControl.Constants.NumberOfRatingToolTip),rating.toString()),ratingLabel=this._context.factory.createElement("LABEL",{id:"KbArticleControl.rating_"+kbSearchRecord.knowledgeArticleId.toString(),key:"KbArticleControl.rating_"+kbSearchRecord.knowledgeArticleId.toString(),title:ratingAccessibilityLabelText,accessibilityHidden:true,tabIndex:-1,style:{fontSize:this._context.theming.fontsizes.font085,lineHeight:this._context.theming.fontsizes.font115}},rating),ratingAccessibilityLabel=this._context.factory.createElement("LABEL",{id:"KbArticleControl.ratingAccessibilityLabel_"+kbSearchRecord.knowledgeArticleId.toString(),key:"KbArticleControl.ratingAccessibilityLabel_"+kbSearchRecord.knowledgeArticleId.toString(),style:MscrmControls.KbCommonUtils.Constants.AccessibilityLabelStyle},ratingAccessibilityLabelText),modifiedOnValue;if(kbSearchRecord.modifiedOn){var formattedDateTime,modifiedOnStr=kbSearchRecord.modifiedOn.toString();if(MscrmControls.KbCommonUtils.FCBUtil.IsFeatureEnabled(this._context,MscrmControls.KbCommonUtils.FCBUtil.KMRelevanceSearchDisplayDateEnabled)&&this.IsRelevanceSearchEnabled&&modifiedOnStr.indexOf(" ")>-1)formattedDateTime=modifiedOnStr.split(/\s/);else formattedDateTime=this._context.formatting.formatTime(new Date(modifiedOnStr),1).split(/\s/);modifiedOnValue=formattedDateTime.length>1?formattedDateTime[0]:""}modifiedOnResourceTooltipValue=modifiedOnResourceTooltipValue.concat(" "+modifiedOnValue);var modifiedOnValueLabel=this._context.factory.createElement("LABEL",{id:"KbArticleControl.modifiedOnValue",key:"KbArticleControl.modifiedOnValue",style:{padding:"",fontSize:this._context.theming.fontsizes.font085,lineHeight:this._context.theming.fontsizes.font115,color:this._context.theming.colors.grays.gray05},title:modifiedOnResourceTooltipValue,accessibilityLabel:modifiedOnResourceTooltipValue},modifiedOnValue),modifiedOnResourceValue=this._context.resources.getString(KbArticleControl.Constants.ModifiedOnLabel),modifiedOnResourceLabel=this._context.factory.createElement("LABEL",{id:"KbArticleControl.modifiedOnResourceValue_"+kbSearchRecord.knowledgeArticleId.toString(),key:"KbArticleControl.modifiedOnResourceValue_"+kbSearchRecord.knowledgeArticleId.toString(),style:{fontSize:this._context.theming.fontsizes.font100,color:this._context.theming.colors.grays.gray05},title:modifiedOnResourceTooltipValue,accessibilityHidden:true},modifiedOnResourceValue),props=modifiedOnResourceLabel.getProperties();props.style["paddingLeft"]="5px";props.style["paddingRight"]="5px";var modifiedOnDiv=this._context.factory.createElement("Container",{id:"KbArticleControl.footerDivModifiedOn",key:"KbArticleControl.footerDivModifiedOn",style:{whiteSpace:"nowrap",flexWrap:"wrap",marginLeft:this._context.client.isRTL?this._context.theming.measures.measure100:0,marginRight:this._context.client.isRTL?0:this._context.theming.measures.measure100,display:"flex"}},[modifiedOnValueLabel]),numberOfViewsIconId="KbArticleControl.microsoftIcon_numberOfViewsButton_",numberOfViewsIcon=this._context.factory.createElement("MICROSOFTICON",{id:numberOfViewsIconId,key:numberOfViewsIconId,type:MscrmControls.KbCommonUtils.IconSymbolCode.NumberOfViews,accessibilityHidden:true,tabIndex:-1}),numberOfViewsIconDiv=this._context.factory.createElement("Container",{id:"numberOfViewsIcon",key:"numberOfViewsIconDiv",ref:"numberOfViewsIconDiv",style:{whiteSpace:"nowrap",display:"inline-block",paddingLeft:this._context.client.isRTL?this._context.theming.measures.measure025:0,paddingRight:this._context.client.isRTL?0:this._context.theming.measures.measure025,fontSize:"16px",cursor:"default"},title:knowledgeArticleViewsTooltipValue},[numberOfViewsIcon,knowledgeArticleViewsAccessibilityLabel]);controlBlock.push(numberOfViewsIconDiv,knowledgeArticleViewsLabel);controlBlock.push(this.renderMetadataSeparator(MscrmControls.KbCommonUtils.Constants.NumberOfViews,kbSearchRecord.knowledgeArticleId.toString()));if(this._context.parameters.enableRating!=="false"){var ratingFullIconId="KbArticleControl.microsoftIcon_ratingFullButton_",ratingFullIcon=this._context.factory.createElement("MICROSOFTICON",{id:ratingFullIconId,key:ratingFullIconId,type:MscrmControls.KbCommonUtils.CommonUtils.getRatingIcon(),accessibilityHidden:true,tabIndex:-1}),ratingFullIconDiv=this._context.factory.createElement("Container",{id:"KbArticleControl.ratingFullIcon",key:"KbArticleControl.ratingFullIconDiv",ref:"KbArticleControl.ratingFullIconDiv",style:{whiteSpace:"nowrap",display:"inline-block",marginLeft:"",marginRight:"",paddingLeft:this._context.client.isRTL?this._context.theming.measures.measure025:0,paddingRight:this._context.client.isRTL?0:this._context.theming.measures.measure025,fontSize:"16px",cursor:"default"},title:ratingAccessibilityLabelText,accessibilityLabel:ratingAccessibilityLabelText},[ratingFullIcon,ratingAccessibilityLabel]);controlBlock.unshift(ratingFullIconDiv,ratingLabel,this.renderMetadataSeparator(MscrmControls.KbCommonUtils.Constants.Rating,kbSearchRecord.knowledgeArticleId.toString()))}var footerDivRatingandArticleView=this._context.factory.createElement("Container",{id:"KbArticleControl.footerDivRatingandArticleView",key:"KbArticleControl.footerDivRatingandArticleView",style:{whiteSpace:"normal",display:"flex",flexWrap:"nowrap"}},controlBlock),headerIconBlockStyle={width:"100%"},headerIconsBlockList=[footerDivRatingandArticleView,modifiedOnDiv];if(kbSearchRecord.isAssociated){var linkedTooltipValue=MscrmCommon.ControlUtils.String.Format(this._context.resources.getString(KbArticleControl.Constants.ArticleAssociatedTagToolTip),this._context.parameters.entityDisplayName),linkedArticleLabel=this._context.factory.createElement("LABEL",{id:"KbArticleControl.kbArticleLinked_"+kbSearchRecord.knowledgeArticleId.toString(),key:"KbArticleControl.kbArticleLinked_"+kbSearchRecord.knowledgeArticleId.toString(),title:linkedTooltipValue,accessibilityLabel:linkedTooltipValue,style:{color:"#323130",fontSize:this._context.theming.fontsizes.font085,lineHeight:this._context.theming.fontsizes.font115}},MscrmCommon.ControlUtils.String.Format(this._context.resources.getString(KbArticleControl.Constants.ArticleAssociatedTag),this._context.parameters.entityDisplayName)),linkedArticle=this._context.factory.createElement("Container",{id:"kbArticle.LinkedArticle_"+kbSearchRecord.knowledgeArticleId.toString(),key:"kbArticle.LinkedArticle_"+kbSearchRecord.knowledgeArticleId.toString(),style:{color:"#fff",backgroundColor:"#CCDEFF",borderRadius:"2px",padding:"1px 5px"}},linkedArticleLabel);headerIconsBlockList.unshift(linkedArticle);var props_1=footerDivRatingandArticleView.getProperties();props_1.style["paddingLeft"]=this._context.theming.measures.measure075;props_1.style["paddingRight"]=this._context.theming.measures.measure075}var selectedRecordsControlOfDialog=window.Xrm.Page.getControl("selectKA_id");if(selectedRecordsControlOfDialog&&selectedRecordsControlOfDialog.getAttribute&&selectedRecordsControlOfDialog.getAttribute().getValue){var selectedRecordsString=selectedRecordsControlOfDialog.getAttribute().getValue();if(selectedRecordsString){var SelectedRecords=JSON.parse(selectedRecordsString);if(SelectedRecords&&SelectedRecords[kbSearchRecord.knowledgeArticleId]){var isContentSelected=SelectedRecords[kbSearchRecord.knowledgeArticleId].content,isUrlSelected=SelectedRecords[kbSearchRecord.knowledgeArticleId].url,selectedTooltipValue=void 0;if(isContentSelected&&isUrlSelected)selectedTooltipValue="Content and URL Selected";else if(isContentSelected)selectedTooltipValue="Content Selected";else selectedTooltipValue="Url Selected";var SelectedArticleLabel=this._context.factory.createElement("LABEL",{id:"KbArticleControl.knowledgeArticleSelected_"+kbSearchRecord.knowledgeArticleId.toString(),key:"KbArticleControl.knowledgeArticleSelected_"+kbSearchRecord.knowledgeArticleId.toString(),title:selectedTooltipValue,accessibilityLabel:selectedTooltipValue,style:{color:MscrmControls.KbCommonUtils.Constants.COLOR_SEARCH_RESULT_LABEL,fontSize:this._context.theming.fontsizes.font085,lineHeight:this._context.theming.fontsizes.font115}},selectedTooltipValue),SelectedArticle=this._context.factory.createElement("Container",{id:"KbArticleControl.footerDivSelectedArticle_"+kbSearchRecord.knowledgeArticleId.toString(),key:"KbArticleControl.footerDivSelectedArticle_"+kbSearchRecord.knowledgeArticleId.toString(),style:{color:MscrmControls.KbCommonUtils.Constants.COLOR_SEARCH_RESULT_LABEL_CONTAINER,backgroundColor:MscrmControls.KbCommonUtils.Constants.BGCOLOR_SEARCH_RESULT_LABEL_CONTAINER,borderRadius:"2px",padding:"1px 5px"}},SelectedArticleLabel);headerIconsBlockList.unshift(SelectedArticle);var props_2=footerDivRatingandArticleView.getProperties();props_2.style["paddingLeft"]=this._context.theming.measures.measure075;props_2.style["paddingRight"]=this._context.theming.measures.measure075}}}var headerIconsBlock=this._context.factory.createElement("Container",{id:"KbArticleControl.controlBlockHeaderIconPane",key:"KbArticleControl.controlBlockHeaderIconPaneDiv",ref:"KbArticleControl.controlBlockHeaderIconPaneDiv",className:"controlBlockHeaderIconPane",style:headerIconBlockStyle},headerIconsBlockList);return headerIconsBlock};KbSearchResultLegends.prototype.renderMetadataSeparator=function(separatorId,kbArticleId){return this._context.factory.createElement("LABEL",{id:"articleMetadataSeparator_"+separatorId+"_"+kbArticleId+"_"+(!MscrmControls.KbCommonUtils.CommonUtils.IsInArticlePageContext?this._context.parameters.controlId:""),key:"articleMetadataSeparator_"+separatorId+"_"+kbArticleId+"_"+(!MscrmControls.KbCommonUtils.CommonUtils.IsInArticlePageContext?this._context.parameters.controlId:""),accessibilityHidden:true,tabIndex:-1,style:{fontSize:this._context.theming.fontsizes.font085,paddingLeft:this._context.theming.measures.measure050,paddingRight:this._context.theming.measures.measure050,fontWeight:800}},MscrmControls.KbCommonUtils.Constants.MiddleDotUnicode)};KbSearchResultLegends.prototype.getOutputs=function(){return null};KbSearchResultLegends.prototype.destroy=function(){};KbSearchResultLegends.prototype.onPreNavigation=function(){};return KbSearchResultLegends}();KbArticleControl.KbSearchResultLegends=KbSearchResultLegends})(KbArticleControl=MscrmControls.KbArticleControl||(MscrmControls.KbArticleControl={}))})(MscrmControls||(MscrmControls={}));var MscrmControls;(function(MscrmControls){var KbArticleControl;(function(KbArticleControl){"use strict";var ArticleActions=function(){function ArticleActions(){}ArticleActions.prototype.init=function(context,notifyOutputChanged,state,container){this._stateManager=KbArticleControl.StateManager.Instance(KbArticleControl.Constants.KBArticleControlID);this._context=context};ArticleActions.prototype.handleArticleActionClick=function(articleActionId,articleRecord){var _this=this,watermarkTelemetryEvent=MscrmControls.KbCommonUtils.WatermarkTelemetryEvent.Start(this._context,KbArticleControl.Constants.WebresourceNameArticleActions,"handleArticleActionClick"),selectedArticleActionId=articleActionId,selectedKnowledgeArticleId=articleRecord.knowledgeArticleId;if(selectedArticleActionId<0||!selectedKnowledgeArticleId){watermarkTelemetryEvent.End();return}if(!MscrmControls.KbCommonUtils.ArticleAction[selectedArticleActionId]){watermarkTelemetryEvent.End();return}MscrmControls.KbCommonUtils.ActionOperationFactory.Instance.Execute(selectedArticleActionId,{controlContext:this._context,record:articleRecord,stateManager:this._stateManager,kmPrivileges:this._stateManager.kmPrivileges,useExternalKMPortal:this._stateManager.useExternalKMPortal,externalKMPortalURL:this._stateManager.externalKMPortalURL,isExternalSearchIndexEnabled:this._stateManager.isExternalSearchIndexEnabled});this.reportActionToTelemetry(selectedArticleActionId);if(this._stateManager.isKnowledgeSearchInsightsEnabled){var knowledgeOperationId=this._stateManager.knowledgeOperationId!=null?this._stateManager.knowledgeOperationId:articleRecord.knowledgeOperationId,articleRank=this._stateManager.articleRank>0?this._stateManager.articleRank:articleRecord.articleRank,interactionType=MscrmControls.KbCommonUtils.CommonUtils.ConvertArticleActionToInteractionType(selectedArticleActionId);MscrmControls.KbCommonUtils.CommonUtils.CreateKnowledgeInteractionRecord(this._context,knowledgeOperationId,interactionType,selectedKnowledgeArticleId,articleRank,MscrmControls.KbCommonUtils.TelemetryControlType.KbArticleControl)}setTimeout(function(){if(articleActionId>=2)return;var articleActionElementId="articleActionsFirstAction";if(articleActionId===1)articleActionElementId="articleActionsSecondAction";var uniqueId=_this._context.accessibility.getUniqueId(articleActionElementId);_this._context.accessibility.focusElementById(uniqueId)},0);watermarkTelemetryEvent.End()};ArticleActions.prototype.GetMicrosoftSymbolIconByArticleActionId=function(actionId){return MscrmControls.KbCommonUtils.ActionOperationFactory.Instance.GetSymbolCode(actionId)};ArticleActions.prototype.renderArticleActionIcon=function(articleRecord,currentAction,firstAction,secondAction){if(firstAction===void 0)firstAction=false;if(secondAction===void 0)secondAction=false;var prefixString;if(firstAction)prefixString="_firstArticleAction_";else if(secondAction)prefixString="_secondArticleAction_";var menuFlyoutActionIconId="microsoftIcon"+prefixString+articleRecord.knowledgeArticleId.toString()+"_"+currentAction+"_",articleActionsActionTooltip=this.GetLocalizedActionTooltip(currentAction),style;if(firstAction)style={display:"inline-flex",fontSize:this._context.theming.fontsizes.font115,paddingRight:this._context.client.isRTL?"0rem":this._context.theming.measures.measure025,paddingLeft:this._context.client.isRTL?this._context.theming.measures.measure025:"0rem",paddingTop:this._context.theming.measures.measure015};else if(secondAction)style={display:"inline-flex",fontSize:this._context.theming.fontsizes.font115,paddingRight:this._context.client.isRTL?0:this._context.theming.measures.measure025,paddingLeft:this._context.client.isRTL?this._context.theming.measures.measure025:0,paddingTop:this._context.theming.measures.measure015};style["color"]=MscrmControls.KbCommonUtils.Constants.COLOR_ACTION_ICON;var menuFlyoutActionIcon=this._context.factory.createElement("MICROSOFTICON",{id:menuFlyoutActionIconId,key:menuFlyoutActionIconId,accessibilityHidden:true,role:"presentation",tabIndex:-1,title:articleActionsActionTooltip,hidden:false,type:this.GetMicrosoftSymbolIconByArticleActionId(currentAction)});return this._context.factory.createElement("Container",{id:"menuFlyoutActionIconContainer_"+menuFlyoutActionIconId,key:"menuFlyoutActionIconContainer_"+menuFlyoutActionIconId,style:style},menuFlyoutActionIcon)};ArticleActions.prototype.getUniqueActionId=function(knowledgeArticleId,actionPosition){return "actionItem_"+actionPosition+"_"+knowledgeArticleId};ArticleActions.prototype.renderActionTitle=function(articleRecord,currentAction,articleActions,firstAction){if(firstAction===void 0)firstAction=false;var actionTitleId=this.getUniqueActionId(articleRecord.knowledgeArticleId,currentAction),articleActionsActionLabel=this._context.resources.getString(this.getArticleActionToLabelNameMapping(currentAction));if(firstAction)return this._context.factory.createElement("LABEL",{id:actionTitleId,key:actionTitleId,role:"button",tabIndex:-1,style:{fontSize:this._context.theming.fontsizes.font100,paddingLeft:0,paddingRight:0,cursor:"pointer",color:MscrmControls.KbCommonUtils.Constants.COLOR_ACTION_TITLE,margin:!MscrmControls.KbCommonUtils.CommonUtils.IsReferencePanel(this._context)?"auto":"initial"}},articleActionsActionLabel);else return this._context.factory.createElement("LABEL",{id:actionTitleId,key:actionTitleId,role:"menuitem",tabIndex:-1,style:{fontSize:this._context.theming.fontsizes.font100,cursor:"pointer",color:MscrmControls.KbCommonUtils.Constants.COLOR_ACTION_TITLE,margin:!MscrmControls.KbCommonUtils.CommonUtils.IsReferencePanel(this._context)?"auto":"initial"}},articleActionsActionLabel)};ArticleActions.prototype.renderInlineActions=function(articleRecord,describedByElementId,articleActions){var _this=this,watermarkTelemetryEvent=MscrmControls.KbCommonUtils.WatermarkTelemetryEvent.Start(this._context,KbArticleControl.Constants.WebresourceNameArticleActions,"renderInlineActions"),childrenActions=[],firstAction=articleActions[0],secondAction=articleActions[1],style={display:"inline-flex",cursor:"pointer",padding:this._context.theming.measures.measure050,":hover":{backgroundColor:MscrmControls.KbCommonUtils.Constants.BGCOLOR_ACTION}},firstActionIcon=this.renderArticleActionIcon(articleRecord,firstAction,true),firstActionTitle=this.renderActionTitle(articleRecord,firstAction,articleActions,true),articleActionsActionLabel=this._context.resources.getString(this.getArticleActionToLabelNameMapping(firstAction)),articleActionsActionTooltip=this.GetLocalizedActionTooltip(firstAction),firstActionContainer=this._context.factory.createElement("CONTAINER",{id:"articleActionsFirstAction_"+articleRecord.knowledgeArticleId.toString(),key:"articleActionsFirstAction",style:style,tabIndex:0,role:"button",title:articleActionsActionTooltip,accessibilityLabel:articleActionsActionLabel,describedByElementId:describedByElementId,onKeyDown:function(event){_this.handleArticleActionsInlineActionKeyDown(event,firstAction,articleRecord,articleActions)},onClick:this.handleArticleActionClick.bind(this,firstAction,articleRecord)},[firstActionIcon,firstActionTitle]);childrenActions.push(firstActionContainer);if(secondAction){var secondActionContainer=this.renderSecondAction(articleRecord,describedByElementId,articleActions);childrenActions.push(secondActionContainer)}var result=this._context.factory.createElement("CONTAINER",{id:"articleActionsFirstSecondAction_"+articleRecord.knowledgeArticleId.toString(),key:"articleActionsFirstSecondAction"},childrenActions);watermarkTelemetryEvent.End();return result};ArticleActions.prototype.GetLocalizedActionTooltip=function(action){return this._context.resources.getString(this.getArticleActionToTooltipNameMapping(action))};ArticleActions.prototype.renderSecondAction=function(articleRecord,describedByElementId,articleActions){var _this=this,watermarkTelemetryEvent=MscrmControls.KbCommonUtils.WatermarkTelemetryEvent.Start(this._context,KbArticleControl.Constants.WebresourceNameArticleActions,"renderSecondAction"),secondAction=articleActions[1],secondActionIcon=this.renderArticleActionIcon(articleRecord,secondAction,false,true),secondActionTitle=this.renderActionTitle(articleRecord,secondAction,articleActions,true),articleActionsActionLabel=this._context.resources.getString(this.getArticleActionToLabelNameMapping(secondAction)),articleActionsActionTooltip=this.GetLocalizedActionTooltip(secondAction),secondActionContainer=this._context.factory.createElement("CONTAINER",{id:"articleActionsSecondAction_"+articleRecord.knowledgeArticleId.toString(),key:"articleActionsSecondAction",style:{display:"inline-flex",cursor:"pointer",padding:this._context.theming.measures.measure050,borderLeft:0,borderRight:0,":hover":{backgroundColor:MscrmControls.KbCommonUtils.Constants.BGCOLOR_ACTION}},tabIndex:0,role:"button",title:articleActionsActionTooltip,accessibilityLabel:articleActionsActionLabel,describedByElementId:describedByElementId,onKeyDown:function(event){_this.handleArticleActionsInlineActionKeyDown(event,secondAction,articleRecord,articleActions)},onClick:this.handleArticleActionClick.bind(this,secondAction,articleRecord)},[secondActionIcon,secondActionTitle]);watermarkTelemetryEvent.End();return secondActionContainer};ArticleActions.prototype.getArticleActionToLabelNameMapping=function(articleAction){return MscrmControls.KbCommonUtils.ActionOperationFactory.Instance.GetLabel(articleAction)};ArticleActions.prototype.getArticleActionToTooltipNameMapping=function(articleAction){return MscrmControls.KbCommonUtils.ActionOperationFactory.Instance.GetTooltip(articleAction)};ArticleActions.prototype.render=function(articleRecord,describedByElementId){var _this=this,watermarkTelemetryEvent=MscrmControls.KbCommonUtils.WatermarkTelemetryEvent.Start(this._context,KbArticleControl.Constants.WebresourceNameArticleActions,"render"),style,controlBlock=[],articleActions=Object.keys(MscrmControls.KbCommonUtils.ArticleAction).filter(function(val){return parseInt(val,10)>-1}).map(function(strVal){return parseInt(strVal,10)});articleActions=articleActions.filter(function(articleAction){return _this.isActionValid(articleAction,articleRecord)});if(articleActions.length==0)return null;controlBlock.push(this.renderInlineActions(articleRecord,describedByElementId,articleActions));style={width:"100%",display:"flex"};var result=this._context.factory.createElement("CONTAINER",{id:"articleActions_"+articleRecord.knowledgeArticleId.toString(),key:"articleActions",style:style,className:"mscrm-articleActions"},controlBlock);watermarkTelemetryEvent.End();return result};ArticleActions.prototype.handleArticleActionsInlineActionKeyDown=function(event,firstAction,articleRecord,articleActions){if(event.key===KbArticleControl.Constants.EnterKeyValue){event.stopPropagation();event.preventDefault();this.handleArticleActionClick(firstAction,articleRecord)}};ArticleActions.prototype.isActionValid=function(articleAction,articleRecord){return MscrmControls.KbCommonUtils.ActionOperationFactory.Instance.Validate(articleAction,{controlContext:this._context,record:articleRecord,stateManager:this._stateManager,kmPrivileges:this._stateManager.kmPrivileges,useExternalKMPortal:this._stateManager.useExternalKMPortal,externalKMPortalURL:this._stateManager.externalKMPortalURL,isExternalSearchIndexEnabled:this._stateManager.isExternalSearchIndexEnabled})};ArticleActions.prototype.reportActionToTelemetry=function(id){switch(id){case MscrmControls.KbCommonUtils.ArticleAction.CopyLink:this._stateManager.ReportEventToTelemetry(MscrmControls.KbCommonUtils.TelemetryActionName.Copy_Link);break;case MscrmControls.KbCommonUtils.ArticleAction.PrintArticle:this._stateManager.ReportEventToTelemetry(MscrmControls.KbCommonUtils.TelemetryActionName.Print_Article);break;case MscrmControls.KbCommonUtils.ArticleAction.SendToCTI:this._stateManager.ReportEventToTelemetry(MscrmControls.KbCommonUtils.TelemetryActionName.Send_Link_ToCTI);break}};ArticleActions.prototype.getOutputs=function(){return null};ArticleActions.prototype.destroy=function(){};ArticleActions.prototype.onPreNavigation=function(){};return ArticleActions}();KbArticleControl.ArticleActions=ArticleActions})(KbArticleControl=MscrmControls.KbArticleControl||(MscrmControls.KbArticleControl={}))})(MscrmControls||(MscrmControls={}))