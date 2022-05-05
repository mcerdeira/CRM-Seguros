/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
var DocumentManagement;
(function (DocumentManagement) {
    var OpenRecordUtil;
    (function (OpenRecordUtil) {
        var FileType;
        (function (FileType) {
            FileType[FileType["Word"] = 0] = "Word";
            FileType[FileType["Excel"] = 1] = "Excel";
            FileType[FileType["PowerPoint"] = 2] = "PowerPoint";
            FileType[FileType["OneNote"] = 3] = "OneNote";
            FileType[FileType["Other"] = 4] = "Other";
        })(FileType = OpenRecordUtil.FileType || (OpenRecordUtil.FileType = {}));
        /**
         * Utility class to open records
         */
        var OpenRecordWrapper = /** @class */ (function () {
            function OpenRecordWrapper(absoluteUrl, wopiUrl, fileType, context) {
                this.absoluteUrl = absoluteUrl;
                this.wopiUrl = wopiUrl;
                this.fileType = OpenRecordUtil.MapperUtil.getFileType(fileType);
                this.runtimeContext = DocumentManagement.RuntimeContextFactory.getRuntimeContext(context);
                this.urlOpener = OpenRecordUtil.UrlOpenerFactory.getUrlOpener(absoluteUrl, wopiUrl, this.fileType, this.runtimeContext);
            }
            OpenRecordWrapper.prototype.openUrl = function () {
                this.urlOpener.openUrl();
            };
            return OpenRecordWrapper;
        }());
        /**
         * Utility funciton to open URL for opening SharePoint records from Grid and Carousel
         * This is the only exposed API in this Utility class
         * @param url - The url of the document to open
         * @param fileType - The file type (extension) of the document
         * @param context - (Optional) the custom control context (for suggestions carousel)
         */
        function openUrl(absoluteUrl, wopiUrl, fileType, context) {
            new OpenRecordWrapper(absoluteUrl, wopiUrl, fileType, context).openUrl();
        }
        OpenRecordUtil.openUrl = openUrl;
        /**
        * Encode a given url after checking if its already encoded
        * @param urlToEncode
        */
        function encodeUrl(urlToEncode) {
            var decodedUrl = urlToEncode;
            while (decodedUrl !== decodeURI(decodedUrl)) {
                decodedUrl = decodeURI(decodedUrl);
            }
            return encodeURI(decodedUrl);
        }
        OpenRecordUtil.encodeUrl = encodeUrl;
    })(OpenRecordUtil = DocumentManagement.OpenRecordUtil || (DocumentManagement.OpenRecordUtil = {}));
})(DocumentManagement || (DocumentManagement = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
var DocumentManagement;
(function (DocumentManagement) {
    /**
     * Factory for getting instance of Runtime context
     * Using basic dependency injection for separating the two context implementations
     */
    var RuntimeContextFactory = /** @class */ (function () {
        function RuntimeContextFactory() {
        }
        RuntimeContextFactory.getRuntimeContext = function (context) {
            if (context) {
                return new DocumentManagement.CustomControlContext(context);
            }
            else {
                return new DocumentManagement.WebResourceContext();
            }
        };
        return RuntimeContextFactory;
    }());
    DocumentManagement.RuntimeContextFactory = RuntimeContextFactory;
    var PlatformType;
    (function (PlatformType) {
        PlatformType[PlatformType["Browser"] = 0] = "Browser";
        PlatformType[PlatformType["Windows8"] = 1] = "Windows8";
        PlatformType[PlatformType["Windows10"] = 2] = "Windows10";
        PlatformType[PlatformType["Android"] = 3] = "Android";
        PlatformType[PlatformType["Ios"] = 4] = "Ios";
        PlatformType[PlatformType["Unknown"] = 5] = "Unknown";
    })(PlatformType = DocumentManagement.PlatformType || (DocumentManagement.PlatformType = {}));
    var BrowserType;
    (function (BrowserType) {
        BrowserType[BrowserType["Chrome"] = 0] = "Chrome";
        BrowserType[BrowserType["Firefox"] = 1] = "Firefox";
        BrowserType[BrowserType["Edge"] = 2] = "Edge";
        BrowserType[BrowserType["Safari"] = 3] = "Safari";
        BrowserType[BrowserType["IE"] = 4] = "IE";
        BrowserType[BrowserType["Other"] = 5] = "Other";
    })(BrowserType = DocumentManagement.BrowserType || (DocumentManagement.BrowserType = {}));
})(DocumentManagement || (DocumentManagement = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
var DocumentManagement;
(function (DocumentManagement) {
    var OpenRecordUtil;
    (function (OpenRecordUtil) {
        /**
         * Class for all documents to be opened in browser
         * Used primarliy in web-client
         * Also in scenarios where platform type / file type is unknown
         */
        var BrowserUrlOpener = /** @class */ (function () {
            function BrowserUrlOpener(params) {
                this.absoluteUrl = params.absoluteUrl;
                this.wopiUrl = params.wopiUrl;
                this.runtimeContext = params.runtimeContext;
            }
            BrowserUrlOpener.prototype.openUrl = function () {
                var urlToOpen = this.absoluteUrl;
                if (this.wopiUrl && this.wopiUrl.length > 0) {
                    urlToOpen = this.wopiUrl;
                }
                this.runtimeContext.openUrl(urlToOpen, { openInNewWindow: false });
            };
            return BrowserUrlOpener;
        }());
        var WindowsUrlOpener = /** @class */ (function (_super) {
            __extends(WindowsUrlOpener, _super);
            function WindowsUrlOpener(params) {
                var _this = _super.call(this, params) || this;
                _this.protocol = params.protocol;
                return _this;
            }
            WindowsUrlOpener.prototype.openUrl = function () {
                window.location.href = this.getDocumentUrl();
            };
            WindowsUrlOpener.prototype.getDocumentUrl = function () {
                return this.protocol + ":" + OpenRecordUtil.encodeUrl(this.absoluteUrl);
            };
            return WindowsUrlOpener;
        }(BrowserUrlOpener));
        /**
         * Base class for documents opening in native app
         */
        var NativeAppUrlOpener = /** @class */ (function (_super) {
            __extends(NativeAppUrlOpener, _super);
            function NativeAppUrlOpener(params) {
                var _this = _super.call(this, params) || this;
                // Defautl app store URL for windows & Android
                _this.appStoreUrl = "market://details?id=";
                _this.fileType = params.fileType;
                _this.appStoreId = params.appStoreId;
                return _this;
            }
            NativeAppUrlOpener.prototype.openUrl = function () {
                var self = this;
                this.runtimeContext.canOpenUrl(this.getDocumentUrl()).then(function (canOpenUrl) {
                    if (canOpenUrl) {
                        self.runtimeContext.openUrl(self.getDocumentUrl(), { openInNewWindow: false });
                    }
                    else {
                        // TODO: Show Intune error
                        var confirmDialogStrings = self.getConfirmDialogStrings(OpenRecordUtil.FileType[self.fileType], self.runtimeContext);
                        self.runtimeContext.openConfirmDialog(confirmDialogStrings).then(function (response) {
                            if (response.confirmed) {
                                self.runtimeContext.openUrl(self.getAppStoreUrl(), { openInNewWindow: false });
                            }
                        });
                    }
                });
            };
            NativeAppUrlOpener.prototype.getAppStoreUrl = function () {
                return "" + this.appStoreUrl + this.appStoreId;
            };
            NativeAppUrlOpener.prototype.getConfirmDialogStrings = function (fileType, runtimeContext) {
                return {
                    text: runtimeContext.getResourceString(fileType + "InstallConfirmDialogTitle"),
                    confirmButtonLabel: runtimeContext.getResourceString("Get" + fileType + "OkButtonText")
                };
            };
            return NativeAppUrlOpener;
        }(WindowsUrlOpener));
        /**
         * iOS URL support
         */
        var IosUrlOpener = /** @class */ (function (_super) {
            __extends(IosUrlOpener, _super);
            function IosUrlOpener() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.appStoreUrl = "https://itunes.apple.com/app/";
                return _this;
            }
            return IosUrlOpener;
        }(NativeAppUrlOpener));
        /**
         * Pass back URL opener for iOS
         */
        var PassbackUrlOpener = /** @class */ (function (_super) {
            __extends(PassbackUrlOpener, _super);
            function PassbackUrlOpener() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            PassbackUrlOpener.prototype.getDocumentUrl = function () {
                return OpenRecordUtil.encodeUrl(this.protocol + ":ofe|u|" + this.absoluteUrl + "|p|ms-dynamcisxrm");
            };
            return PassbackUrlOpener;
        }(IosUrlOpener));
        var UrlOpenerFactory = /** @class */ (function () {
            function UrlOpenerFactory() {
            }
            /**
            * Get the URL opener class for accessing document and app URLs
            * @param url - the URL of the document to open
            * @param fileType - the file type of document
            * @param platformType - the underlying platform type
            */
            UrlOpenerFactory.getUrlOpener = function (absoluteUrl, wopiUrl, fileType, runtimeContext) {
                var platformType = runtimeContext.getPlatformType();
                var urlOpenerParams = {
                    absoluteUrl: absoluteUrl,
                    wopiUrl: wopiUrl,
                    fileType: fileType,
                    protocol: OpenRecordUtil.MapperUtil.getProtocol(fileType),
                    runtimeContext: runtimeContext,
                    appStoreId: OpenRecordUtil.MapperUtil.getAppStoreId(fileType, platformType)
                };
                var _urlOpener = this.getOpenerType(fileType, platformType);
                return new _urlOpener(urlOpenerParams);
            };
            UrlOpenerFactory.getOpenerType = function (filetype, platformType) {
                switch (platformType) {
                    case DocumentManagement.PlatformType.Windows10:
                        switch (filetype) {
                            case OpenRecordUtil.FileType.Word:
                            case OpenRecordUtil.FileType.Excel:
                            case OpenRecordUtil.FileType.PowerPoint:
                            case OpenRecordUtil.FileType.OneNote:
                                return WindowsUrlOpener;
                        }
                        break;
                    case DocumentManagement.PlatformType.Android:
                        switch (filetype) {
                            case OpenRecordUtil.FileType.Word:
                            case OpenRecordUtil.FileType.Excel:
                            case OpenRecordUtil.FileType.PowerPoint:
                            case OpenRecordUtil.FileType.OneNote:
                                return NativeAppUrlOpener;
                        }
                        break;
                    case DocumentManagement.PlatformType.Ios:
                        switch (filetype) {
                            case OpenRecordUtil.FileType.Word:
                            case OpenRecordUtil.FileType.Excel:
                            case OpenRecordUtil.FileType.PowerPoint:
                                return PassbackUrlOpener;
                            case OpenRecordUtil.FileType.OneNote:
                                return IosUrlOpener;
                        }
                        break;
                }
                // Fallback to open documents as in browser
                return BrowserUrlOpener;
            };
            return UrlOpenerFactory;
        }());
        OpenRecordUtil.UrlOpenerFactory = UrlOpenerFactory;
    })(OpenRecordUtil = DocumentManagement.OpenRecordUtil || (DocumentManagement.OpenRecordUtil = {}));
})(DocumentManagement || (DocumentManagement = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
var DocumentManagement;
(function (DocumentManagement) {
    var OpenRecordUtil;
    (function (OpenRecordUtil) {
        OpenRecordUtil.Constants = {
            WordProtocol: "ms-word",
            ExcelProtocol: "ms-excel",
            PowerPointProtocol: "ms-powerpoint",
            OneNoteProtocol: "onenote",
            CommonOfficeProtocolWin8: "office",
            WordPackageName: "com.microsoft.office.word",
            ExcelPackageName: "com.microsoft.office.excel",
            PowerPointPackageName: "com.microsoft.office.powerpoint",
            OneNotePackageName: "com.microsoft.office.onenote",
            WordAppleStoreId: "id586447913",
            ExcelAppleStoreId: "id586683407",
            PowerPointAppleStoreId: "id586449534",
            OneNoteAppleStoreId: "id410395246"
        };
    })(OpenRecordUtil = DocumentManagement.OpenRecordUtil || (DocumentManagement.OpenRecordUtil = {}));
})(DocumentManagement || (DocumentManagement = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
var DocumentManagement;
(function (DocumentManagement) {
    var OpenRecordUtil;
    (function (OpenRecordUtil) {
        /**
         * Provides functions for different mappings
         */
        var MapperUtil = /** @class */ (function () {
            function MapperUtil() {
            }
            /**
             * Get FileType enum for fileType extension string
             * @param fileType - string with the file type (extension) of document
             */
            MapperUtil.getFileType = function (fileType) {
                fileType = fileType.toLowerCase();
                switch (fileType) {
                    case "one":
                    case "onetoc":
                    case "onetoc2":
                        return OpenRecordUtil.FileType.OneNote;
                    case "docx":
                    case "docm":
                    case "dotx":
                    case "dotm":
                    case "doc":
                        return OpenRecordUtil.FileType.Word;
                    case "pptx":
                    case "pptm":
                    case "potx":
                    case "potm":
                    case "ppam":
                    case "ppsx":
                    case "ppsm":
                    case "ppt":
                        return OpenRecordUtil.FileType.PowerPoint;
                    case "xlsx":
                    case "xlsm":
                    case "xltx":
                    case "xltm":
                    case "xlsb":
                    case "xlam":
                        return OpenRecordUtil.FileType.Excel;
                    default:
                        return OpenRecordUtil.FileType.Other;
                }
            };
            MapperUtil.getProtocol = function (fileType) {
                switch (fileType) {
                    case OpenRecordUtil.FileType.Word:
                        return OpenRecordUtil.Constants.WordProtocol;
                    case OpenRecordUtil.FileType.Excel:
                        return OpenRecordUtil.Constants.ExcelProtocol;
                    case OpenRecordUtil.FileType.PowerPoint:
                        return OpenRecordUtil.Constants.PowerPointProtocol;
                    case OpenRecordUtil.FileType.OneNote:
                        return OpenRecordUtil.Constants.OneNoteProtocol;
                }
            };
            MapperUtil.getAppStoreId = function (fileType, platformType) {
                switch (platformType) {
                    case DocumentManagement.PlatformType.Android:
                        switch (fileType) {
                            case OpenRecordUtil.FileType.Word:
                                return OpenRecordUtil.Constants.WordPackageName;
                            case OpenRecordUtil.FileType.Excel:
                                return OpenRecordUtil.Constants.ExcelPackageName;
                            case OpenRecordUtil.FileType.PowerPoint:
                                return OpenRecordUtil.Constants.PowerPointPackageName;
                            case OpenRecordUtil.FileType.OneNote:
                                return OpenRecordUtil.Constants.OneNotePackageName;
                        }
                        break;
                    case DocumentManagement.PlatformType.Ios:
                        switch (fileType) {
                            case OpenRecordUtil.FileType.Word:
                                return OpenRecordUtil.Constants.WordAppleStoreId;
                            case OpenRecordUtil.FileType.Excel:
                                return OpenRecordUtil.Constants.ExcelAppleStoreId;
                            case OpenRecordUtil.FileType.PowerPoint:
                                return OpenRecordUtil.Constants.PowerPointAppleStoreId;
                            case OpenRecordUtil.FileType.OneNote:
                                return OpenRecordUtil.Constants.OneNoteAppleStoreId;
                        }
                        break;
                }
            };
            return MapperUtil;
        }());
        OpenRecordUtil.MapperUtil = MapperUtil;
    })(OpenRecordUtil = DocumentManagement.OpenRecordUtil || (DocumentManagement.OpenRecordUtil = {}));
})(DocumentManagement || (DocumentManagement = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
var DocumentManagement;
(function (DocumentManagement) {
    /**
     * The runtime context in scenario of custom control
     */
    var CustomControlContext = /** @class */ (function () {
        function CustomControlContext(context) {
            this.context = context;
            this.initPlatform();
            this.initBrowser();
        }
        CustomControlContext.prototype.openUrl = function (url, options) {
            this.context.navigation.openUrl(url, options);
        };
        CustomControlContext.prototype.canOpenUrl = function (url) {
            return this.context.utils.canOpenUrl(url);
        };
        CustomControlContext.prototype.getPlatformType = function () {
            return this.platformType;
        };
        CustomControlContext.prototype.getPlatformName = function () {
            switch (this.platformType) {
                case DocumentManagement.PlatformType.Android: return "Android";
                case DocumentManagement.PlatformType.Browser: return "Browser";
                case DocumentManagement.PlatformType.Ios: return "Ios";
                case DocumentManagement.PlatformType.Unknown: return "Unknown";
                case DocumentManagement.PlatformType.Windows10: return "Windows10";
                case DocumentManagement.PlatformType.Windows8: return "Windows8";
            }
        };
        CustomControlContext.prototype.getBrowserType = function () {
            return this.browsertype;
        };
        CustomControlContext.prototype.getBrowserName = function () {
            switch (this.browsertype) {
                case DocumentManagement.BrowserType.Chrome: return "Chrome";
                case DocumentManagement.BrowserType.Firefox: return "Firefox";
                case DocumentManagement.BrowserType.Edge: return "Edge";
                case DocumentManagement.BrowserType.Safari: return "Safari";
                case DocumentManagement.BrowserType.IE: return "IE";
                case DocumentManagement.BrowserType.Other: return "Other";
            }
        };
        CustomControlContext.prototype.openConfirmDialog = function (strings) {
            return this.context.navigation.openConfirmDialog(strings);
        };
        CustomControlContext.prototype.getResourceString = function (key) {
            return this.context.resources.getString(key);
        };
        CustomControlContext.prototype.initPlatform = function () {
            var userAgent = this.context.client.userAgent;
            if (!this.IsUciOnMobile) {
                this.platformType = DocumentManagement.PlatformType.Browser;
            }
            else if (userAgent.isWinPhone10 || userAgent.isWin) {
                this.platformType = DocumentManagement.PlatformType.Windows10;
            }
            else if (userAgent.isAndroid || userAgent.isAndroidModern) {
                this.platformType = DocumentManagement.PlatformType.Android;
            }
            else if (userAgent.isIos) {
                this.platformType = DocumentManagement.PlatformType.Ios;
            }
            else {
                this.platformType = DocumentManagement.PlatformType.Unknown;
            }
        };
        CustomControlContext.prototype.initBrowser = function () {
            var userAgent = this.context.client.userAgent;
            if (userAgent.isBrowserChrome) {
                this.browsertype = DocumentManagement.BrowserType.Chrome;
            }
            else if (userAgent.isBrowserFirefox) {
                this.browsertype = DocumentManagement.BrowserType.Firefox;
            }
            else if (userAgent.isBrowserSafari) {
                this.browsertype = DocumentManagement.BrowserType.Safari;
            }
            else if (userAgent.isBrowserIE) {
                this.browsertype = DocumentManagement.BrowserType.IE;
            }
            else {
                this.browsertype = DocumentManagement.BrowserType.Other;
            }
        };
        Object.defineProperty(CustomControlContext.prototype, "IsUciOnMobile", {
            get: function () {
                return this.context.client.getClient() === "Mobile";
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Log Client side information with Device and Browser name
         * @param ComponentName - SharePoint operation name for which the client information is logged.
         * @param context -  The "Input Bag" containing the parameters and other control metadata.
        */
        CustomControlContext.prototype.LogUsageTelemetry = function (ComponentName, context) {
            var Platform = this.getPlatformName();
            var Browser = this.getBrowserName();
            var GridType = context.utils.getParentControlName() == "" ? "DocumentsAssociatedGrid" : "DocumentsSubGrid";
            context.reporting.reportSuccess(ComponentName, [
                { name: "client", value: Platform },
                { name: "browser", value: Browser },
                { name: "gridtype", value: GridType }
            ]);
        };
        return CustomControlContext;
    }());
    DocumentManagement.CustomControlContext = CustomControlContext;
})(DocumentManagement || (DocumentManagement = {}));
/**
* @license Copyright (c) Microsoft Corporation.  All rights reserved.
*/
var SharePointUtils;
(function (SharePointUtils) {
    var Constants;
    (function (Constants) {
        Constants.DEFAULT_LOCATION_VIEWID = "3A7B55EF-6029-47E2-86FB-EEA2C7272353";
        Constants.CONTAINER_ID = "SPAssociatedGridContainerID";
        Constants.GRID_ID = "StandardGridControlID";
        Constants.BREADCRUMB_ID = "BreadcrumbControlID";
        Constants.NOTIFICATION_CONTROL_ID = "SPNotificationControl";
        Constants.BREADCRUMB_ITEM_CLICK_EVENT = "BreadcrumbItemClick";
        Constants.DEFAULT_LOCATION_ID_RECIEVED = "DefaultLocationIdRecieved";
        Constants.SEND_CONTROL_COMMANDS_TO_HOST_COMMANDBAR = "sendgridcontrolcommandstohostcommandbar";
        Constants.CAROUSEL_CONTROL_TYPE = "MscrmControls.CarouselControl.CarouselControl";
        Constants.CAROUSEL_COPY_COMMAND_SUCCESS_EVENT = "CopyCommandSuccessEvent";
        Constants.NOTIFICATION_CONTROL_CLOSE_EVENT = "NotificationControlCloseEvent";
        Constants.CAROUSEL_ID = "CarouselControlID";
        Constants.SUGGESTIONS_CARD_DEFAULT_VIEWID = "F664EC37-BCFC-E611-80D9-00155DB96A84";
        Constants.SUGGESTIONS_TEMPLATE_ENTITY_NAME = "suggestioncardtemplate";
        Constants.RECOMMENDED_DOCUMENTS_ENTITY_NAME = "recommendeddocument";
        Constants.RECOMMENDED_DOCUMENTES_DEFAULT_VIEW_ID = "6180A110-645D-4F82-BAD7-20C56B416514";
        Constants.DOCUMENT_ASSOCIATED_GRID_VIEW_ID = "{0016F9F3-41CC-4276-9D11-04308D15858D}";
        Constants.ALL_FILES_LOCATION_ID = "{BEF666F6-2EAD-4B6A-BCD4-22D87DFFF51E}";
        Constants.ERR_NO_DATA_FOR_ROOT_NODE = "No data received for default root location";
        Constants.SHARED_LOCATION_GUID = "17DE0DBB-153C-4C1A-B98A-223B3EA10125";
        Constants.ONEDRIVE_LOCATION_NOT_CREATED = "d311bf6e-6683-4583-9909-69f7182da440";
        Constants.FCB_MSTEAMS_INTEGRATION = "MSTeamsIntegration";
        // sharepointdocument entity attribute names
        Constants.LOCATION_NAME = "locationname";
        Constants.RELATIVE_LOCATION = "relativelocation";
        Constants.SERVICE_TYPE = "servicetype";
        Constants.ORG_ENTITY_NAME = "organization";
        Constants.LOCATION_ID = "locationid";
        Constants.IS_ONEDRIVE_ENABLED = "isonedriveenabled";
        Constants.IS_MSTEAMS_ENABLED = "ismsteamsenabled";
        Constants.IS_SHAREPOINT_ENABLED = "issharepointenabled";
        //Document location entity name
        Constants.SHAREPOINT_LOCATION_ENTITY = "sharepointdocumentlocation";
        // custom control entity name
        Constants.CUSTOM_CONTROL_ENTITY = "customcontrol";
        Constants.DEFAULT_PAGESIZE = 10;
        Constants.LEFTCHEVRON_ICON_TYPE = 299;
        Constants.RIGHTCHEVRON_ICON_TYPE = 298;
        Constants.ORG_SETTINGS_FILTER = "?$select=isonedriveenabled,ismsteamsenabled";
        //Error Codes Constants
        Constants.DOC_MANAGEMENT_DISABLED_FOR_ORG = "Error_Message_0x80071017";
        Constants.DOC_MANAGEMENT_DISABLED_FOR_ENTITY = "Error_Message_0x8006073b";
    })(Constants = SharePointUtils.Constants || (SharePointUtils.Constants = {}));
    /**
     * Function to generate djb2 hash code for a string
     */
    function DJB2Code(str) {
        var hash = 5381;
        for (var i = 0; i < str.length; i++) {
            var char = str.charCodeAt(i);
            hash = ((hash << 5) + hash) + char; /* hash * 33 + c */
        }
        return hash;
    }
    SharePointUtils.DJB2Code = DJB2Code;
    /**
     * Get attribute values from filter conditions
     * @param filter
     * @param attributes
     */
    function GetValuesFromFilterConditions(filter, attributes) {
        var values = {};
        if (!filter)
            return values;
        for (var _i = 0, _a = filter.conditions; _i < _a.length; _i++) {
            var condition = _a[_i];
            if (attributes.indexOf(condition.attributeName) > -1 && typeof condition.value == "string") {
                values[condition.attributeName] = condition.value;
            }
        }
        return values;
    }
    SharePointUtils.GetValuesFromFilterConditions = GetValuesFromFilterConditions;
    /**
     * Replace value of given attribute in filter conditions
     * @param filte
     * @param attrName
     * @param attrVal
     * @returns True if value is replaced, false if attribute not found
     */
    function ReplaceValueInFilterConditions(filter, attrName, attrVal) {
        if (!filter)
            return false;
        for (var _i = 0, _a = filter.conditions; _i < _a.length; _i++) {
            var condition = _a[_i];
            if (condition.attributeName == attrName) {
                condition.value = attrVal;
                return true;
            }
        }
        return false;
    }
    SharePointUtils.ReplaceValueInFilterConditions = ReplaceValueInFilterConditions;
    /**
     * Remove conditions from filter condition for given attribute
     * @param filter
     * @param attrName
     * @return True if value is removed, false if attribute not found
     */
    function RemoveConditionFromFilterConditions(filter, attrName) {
        if (!filter)
            return false;
        var idx = -1;
        for (var i = 0; i < filter.conditions.length; i++) {
            if (filter.conditions[i].attributeName == attrName) {
                idx = i;
                break;
            }
        }
        if (idx != -1) {
            filter.conditions.splice(idx, 1);
            return true;
        }
        return false;
    }
    SharePointUtils.RemoveConditionFromFilterConditions = RemoveConditionFromFilterConditions;
    /**
     * Add given condition to filter conditions
     * @param filter
     * @param condition
     */
    function AddConditionInFilterConditions(filter, condition) {
        filter.conditions.push(condition);
    }
    SharePointUtils.AddConditionInFilterConditions = AddConditionInFilterConditions;
    function isNullOrEmpty(s) {
        return s == null || s == undefined || s.length === 0;
    }
    SharePointUtils.isNullOrEmpty = isNullOrEmpty;
    /**
     * Get a new deferred object with an unresolved promise
     */
    function getNewDeferred() {
        var defer;
        var promise = new Promise(function (resolve, reject) { return defer = { resolve: resolve, reject: reject }; });
        defer.promise = promise;
        return defer;
    }
    SharePointUtils.getNewDeferred = getNewDeferred;
    /**
         * Compare guid strings
         * @param guid1Str
         * @param guid2Str
         */
    function CompareGuidStr(guid1Str, guid2Str) {
        var guid1 = Guid.tryParse(guid1Str);
        var guid2 = Guid.tryParse(guid2Str);
        return Guid.equals(guid1, guid2);
    }
    SharePointUtils.CompareGuidStr = CompareGuidStr;
})(SharePointUtils || (SharePointUtils = {}));