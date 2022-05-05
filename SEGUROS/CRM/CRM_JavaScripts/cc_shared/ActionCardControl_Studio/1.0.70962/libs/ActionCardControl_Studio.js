var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MscrmControls;
(function (MscrmControls) {
    var Sales;
    (function (Sales) {
        var Assistant;
        (function (Assistant) {
            var Command = /** @class */ (function () {
                function Command() {
                }
                Command.IsCommandAutoDismiss = function (command) {
                    // Add command to the list which require auto dismiss
                    return Command.AutoDismissCommands.findIndex(function (element) { return element == command; }) != -1;
                };
                Command.DoesCommandShowPrompt = function (command) {
                    return Command.DismissWithPromptCommands.findIndex(function (element) { return element == command; }) != -1;
                };
                Command.BackToPrevious = "Assistant.Internal.BackToPrevious";
                Command.SnoozeAllCardsInList = "Assistant.Internal.SnoozeAllCardsInList";
                Command.DismissAllCardsInList = "Assistant.Internal.DismissAllCardsInList";
                Command.DismissAllCardsInGroup = "Assistant.Internal.DismissAllCardsInGroup";
                Command.ShowAll = "Assistant.Internal.ShowAll";
                Command.ShowDetailed = "Assistant.Internal.ShowDetailed";
                Command.Like = "Assistant.Internal.Like";
                Command.Dislike = "Assistant.Internal.Dislike";
                Command.OpenUrl = "Assistant.Internal.OpenUrl";
                Command.ToggleGroupMode = "Assistant.Internal.ToggleGroupMode";
                Command.OpenEntity = "Assistant.Internal.OpenRegardingEntity";
                Command.OpenCardRegardingEntity = "Assistant.Internal.OpenCardRegardingEntity";
                Command.Open = "Open";
                Command.Snooze = "Mscrm.HomepageGrid.actioncard.SnoozeCommand";
                Command.Dismiss = "Mscrm.HomepageGrid.actioncard.DismissCommand";
                Command.SnoozeRequested = "Assistant.Internal.SnoozeRequested";
                Command.DismissRequested = "Assistant.Internal.DismissRequested";
                Command.DismissAllRequestedForGroup = "Assistant.Internal.DismissAllRequestedForGroup";
                Command.UndoSnoozeDismiss = "Assistant.Internal.UndoSnoozeDismiss";
                Command.UndoDismissAll = "Assistant.Internal.UndoDismissAll";
                Command.CloseTask = "Ribbon.Tooltip.actioncard.CloseTask";
                Command.CompleteTask = "Ribbon.Tooltip.actioncard.CompleteTask";
                Command.CompleteOtherActivity = "Ribbon.Tooltip.actioncard.CompleteOtherActivity";
                Command.ClosePhoneCall = "Ribbon.Tooltip.actioncard.ClosePhoneCall";
                Command.CompletePhoneCall = "Ribbon.Tooltip.actioncard.CompletePhoneCall";
                Command.FlowPrimaryAction = "Mscrm.HomepageGrid.actioncard.FlowCommand";
                Command.EmailAttendees = "EmailAttendees";
                Command.PerformPostOperation = "Assistant.Internal.PerformPostOperation";
                Command.AutoDismissCommands = [
                    Command.CompleteTask,
                    Command.CompleteOtherActivity,
                    Command.Snooze,
                    Command.Dismiss,
                ];
                Command.DismissWithPromptCommands = [
                    Command.CloseTask,
                    Command.ClosePhoneCall,
                    Command.CompletePhoneCall,
                ];
                Command.DismissCardForUser = "Assistant.Internal.DismissCardForUser";
                return Command;
            }());
            Assistant.Command = Command;
        })(Assistant = Sales.Assistant || (Sales.Assistant = {}));
    })(Sales = MscrmControls.Sales || (MscrmControls.Sales = {}));
})(MscrmControls || (MscrmControls = {}));
var MscrmControls;
(function (MscrmControls) {
    var Sales;
    (function (Sales) {
        var Assistant;
        (function (Assistant) {
            var Constants = /** @class */ (function () {
                function Constants() {
                }
                Constants.MainContainerId = "containerWithControlscompletePage";
                Constants.ActionCardIdPrefix = "raActionCardPrefix_";
                Constants.AdaptiveCardFocusIdPrefix = "acFocusId_";
                Constants.BackButtonId = "backToInitialView";
                Constants.UndoButtonId = "undoActionButtonId";
                Constants.CloseButtonId = "closeIconContainer";
                Constants.MaxCardsInGroupView = 5;
                Constants.GlobalPanelCardsPrefix = "MscrmControls.CardFeedContainerWrapper.CardFeedContainerWrapper-MscrmControls.CardFeedContainerWrapper.CardFeedContainerWrapper.MscrmControls.Sales.CardContainer.CardContainer-";
                // ToastTimeoutSessionStorageKey used in AssistantStudio.js to update once user changes
                Constants.ToastTimeoutSessionStorageKey = "ToastTimeoutSessionStorageKey";
                Constants.ToastNotificationUserFeedbackPrefix = "toastMessageAfterUserFeedback";
                Constants.UserFeedbackSessionStorageKey = "userfeedback";
                Constants.ActionCardTypesStorageKey = "actioncardtypesv2";
                Constants.PopulateCardCalledOnStorageKey = "populatecardcalledon";
                Constants.ActionCardsCommandsCacheStorageKey = "actioncardscommandscache";
                Constants.SelectedCardStorageKey = "selectedCard";
                Constants.ButtonActionCommandIdStorageKey = "buttonActionCommandId";
                Constants.FlightCardType = 107;
                return Constants;
            }());
            Assistant.Constants = Constants;
        })(Assistant = Sales.Assistant || (Sales.Assistant = {}));
    })(Sales = MscrmControls.Sales || (MscrmControls.Sales = {}));
})(MscrmControls || (MscrmControls = {}));
/// <reference path="../../../jsreferences/internal/TypeDefinitions/mscrm.d.ts" />
var MscrmControls;
(function (MscrmControls) {
    var Sales;
    (function (Sales) {
        var Assistant;
        (function (Assistant) {
            var Util = /** @class */ (function () {
                function Util() {
                }
                Util.FormatString = function (source) {
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    var placeholderPattern = /{\d+}/gm;
                    function replacePlaceholder(placeholder) {
                        var position = parseInt(placeholder.replace(/{|}/, ""));
                        return position < args.length ? args[position] : placeholder;
                    }
                    return source.replace(placeholderPattern, replacePlaceholder);
                };
                Util.GetEntryPoint = function (context, returnDefault) {
                    var isParamLocationDefined = context.parameters.Location != undefined &&
                        context.parameters.Location != null &&
                        context.parameters.Location.raw != undefined &&
                        context.parameters.Location.raw != null;
                    return isParamLocationDefined ? context.parameters.Location.raw : returnDefault;
                };
                Util.GetOrgId = function (context) {
                    var orgSettings = context.client.orgSettings;
                    var orgId = orgSettings &&
                        orgSettings.organizationId &&
                        orgSettings.organizationId.substring(1, orgSettings.organizationId.length - 1);
                    return orgId;
                };
                Util.GetTimeFromNowString = function (date, context) {
                    var timeDiffInMinutes = Math.trunc((new Date(date).valueOf() - new Date(Date.now()).valueOf()) / (1000 * 60));
                    if (timeDiffInMinutes <= 0) {
                        return "";
                    }
                    else if (timeDiffInMinutes >= 1440) {
                        var days = Math.trunc(timeDiffInMinutes / 1440);
                        var pluralSuffix = days > 1 ? "s" : "";
                        return this.FormatString(context.resources.getString("ActionCard.InDay" + pluralSuffix), days);
                    }
                    else if (timeDiffInMinutes >= 60) {
                        var hours = Math.trunc(timeDiffInMinutes / 60);
                        var pluralSuffix = hours > 1 ? "s" : "";
                        return this.FormatString(context.resources.getString("ActionCard.InHour" + pluralSuffix), hours);
                    }
                    else {
                        var pluralSuffix = timeDiffInMinutes > 1 ? "s" : "";
                        return this.FormatString(context.resources.getString("ActionCard.InMinute" + pluralSuffix), timeDiffInMinutes);
                    }
                };
                return Util;
            }());
            Assistant.Util = Util;
        })(Assistant = Sales.Assistant || (Sales.Assistant = {}));
    })(Sales = MscrmControls.Sales || (MscrmControls.Sales = {}));
})(MscrmControls || (MscrmControls = {}));
/**
 * @license Copyright (c) Microsoft Corporation.  All rights reserved.
 */
/// <reference path="../../../jsreferences/internal/TypeDefinitions/mscrm.d.ts" />
/// <reference path="./Util.ts" />
var MscrmControls;
(function (MscrmControls) {
    var Sales;
    (function (Sales) {
        var Assistant;
        (function (Assistant) {
            var Telemetry = /** @class */ (function () {
                function Telemetry() {
                }
                Telemetry.InitializeContext = function (context) {
                    Telemetry.OrgId = Assistant.Util.GetOrgId(context);
                };
                Telemetry.ReportBIEvent = function (context, methodName, message, data) {
                    context.reporting.reportEvent(new AssistantEvent(context, "SITraceBIEvent", "", "", methodName, message, data, 3 /* Info */, 102 /* BIEvent */));
                };
                Telemetry.ReportUserAction = function (context, action, actionOn, methodName, message, data) {
                    context.reporting.reportEvent(new AssistantEvent(context, "SITraceCIEvent", action, actionOn, methodName, message, data, 3 /* Info */, 101 /* CIEventId */));
                };
                Telemetry.ReportWarning = function (context, action, actionOn, methodName, message, data) {
                    context.reporting.reportEvent(new AssistantEvent(context, "SITraceEvent", action, actionOn, methodName, message, data, 2 /* Warning */, 100 /* EventId */));
                };
                Telemetry.ReportError = function (context, methodName, action, actionOn, message, data) {
                    context.reporting.reportEvent(new AssistantEvent(context, "SITraceEvent", action, actionOn, methodName, message, data, 1 /* Error */, 100 /* EventId */));
                };
                return Telemetry;
            }());
            Assistant.Telemetry = Telemetry;
            var CardEventParameter = /** @class */ (function () {
                function CardEventParameter(name, value) {
                    this.name = name;
                    this.value = value;
                }
                return CardEventParameter;
            }());
            Assistant.CardEventParameter = CardEventParameter;
            var AssistantEvent = /** @class */ (function () {
                function AssistantEvent(context, eventName, action, actionOn, methodName, message, data, level, eventId) {
                    this.eventParameters = [];
                    var entryPoint = Assistant.Util.GetEntryPoint(context, 1);
                    var source = entryPoint == 0 ? "Global Panel" : entryPoint == 1 ? "Entity Form" : "Dashboard";
                    this.eventName = eventName;
                    this.addEventParameter("Source", source);
                    this.addEventParameter("Area", "AssistantV2");
                    this.addEventParameter("appName", "AssistantV2"); // TODO: Check if we still need appName
                    this.addEventParameter("Action", action);
                    this.addEventParameter("ActionOn", actionOn);
                    this.addEventParameter("MethodName", methodName);
                    this.addEventParameter("Message", message);
                    this.addEventParameter("Data", JSON.stringify(data));
                    this.addEventParameter("EventId", eventId);
                    this.addEventParameter("OrgId", Telemetry.OrgId);
                    this.addEventParameter("Tag", "0000");
                    this.addEventParameter("Level", level);
                    this.addEventParameter("EntryPoint", entryPoint);
                    this.addEventParameter("isUCI", true);
                }
                AssistantEvent.prototype.addEventParameter = function (parameterName, value) {
                    var event = new CardEventParameter(parameterName, value);
                    this.eventParameters.push(event);
                };
                return AssistantEvent;
            }());
            Assistant.AssistantEvent = AssistantEvent;
        })(Assistant = Sales.Assistant || (Sales.Assistant = {}));
    })(Sales = MscrmControls.Sales || (MscrmControls.Sales = {}));
})(MscrmControls || (MscrmControls = {}));
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
/// <reference path="inputsoutputs.g.ts" />
/// <reference path="../Common/Command.ts" />
/// <reference path="../Common/Constants.ts" />
/// <reference path="../Common/Util.ts" />
/// <reference path="../Common/TelemetryEvents.ts" />
var MscrmControls;
(function (MscrmControls) {
    var Sales;
    (function (Sales) {
        var CardContainer;
        (function (CardContainer) {
            // export enum CardViewState {
            //     DefaultView = 1,
            //     GroupView,
            //     DetailedView,
            // }
            var CardClickActionType;
            (function (CardClickActionType) {
                CardClickActionType[CardClickActionType["None"] = 0] = "None";
                CardClickActionType[CardClickActionType["PerformPrimaryAction"] = 1] = "PerformPrimaryAction";
                CardClickActionType[CardClickActionType["PerformSecondaryAction"] = 2] = "PerformSecondaryAction";
                CardClickActionType[CardClickActionType["OpenRegardingEntity"] = 3] = "OpenRegardingEntity";
                CardClickActionType[CardClickActionType["OpenUrl"] = 4] = "OpenUrl";
            })(CardClickActionType = CardContainer.CardClickActionType || (CardContainer.CardClickActionType = {}));
            var UserFeedback;
            (function (UserFeedback) {
                UserFeedback[UserFeedback["None"] = 1] = "None";
                UserFeedback[UserFeedback["Liked"] = 2] = "Liked";
                UserFeedback[UserFeedback["Disliked"] = 3] = "Disliked";
            })(UserFeedback = CardContainer.UserFeedback || (CardContainer.UserFeedback = {}));
            var CardState;
            (function (CardState) {
                CardState[CardState["Default"] = 1] = "Default";
                CardState[CardState["DismissRequested"] = 2] = "DismissRequested";
                CardState[CardState["SnoozeRequested"] = 3] = "SnoozeRequested";
            })(CardState = CardContainer.CardState || (CardContainer.CardState = {}));
            var CardViewState;
            (function (CardViewState) {
                CardViewState[CardViewState["None"] = 0] = "None";
                CardViewState[CardViewState["GroupCollapsed"] = 1] = "GroupCollapsed";
                CardViewState[CardViewState["GroupExpanded"] = 2] = "GroupExpanded";
                CardViewState[CardViewState["Basic"] = 3] = "Basic";
                CardViewState[CardViewState["Detailed"] = 4] = "Detailed";
            })(CardViewState = CardContainer.CardViewState || (CardContainer.CardViewState = {}));
            var ReasonForCardDismiss;
            (function (ReasonForCardDismiss) {
                ReasonForCardDismiss[ReasonForCardDismiss["None"] = 0] = "None";
                ReasonForCardDismiss[ReasonForCardDismiss["IncorrectEmail"] = 1] = "IncorrectEmail";
                ReasonForCardDismiss[ReasonForCardDismiss["ReasonAlreadyProvided"] = 2] = "ReasonAlreadyProvided";
                ReasonForCardDismiss[ReasonForCardDismiss["IncorrectRequest"] = 3] = "IncorrectRequest";
                ReasonForCardDismiss[ReasonForCardDismiss["OtherReasons"] = 4] = "OtherReasons";
            })(ReasonForCardDismiss = CardContainer.ReasonForCardDismiss || (CardContainer.ReasonForCardDismiss = {}));
        })(CardContainer = Sales.CardContainer || (Sales.CardContainer = {}));
    })(Sales = MscrmControls.Sales || (MscrmControls.Sales = {}));
})(MscrmControls || (MscrmControls = {}));
/**
 * @license Copyright (c) Microsoft Corporation.  All rights reserved.
 */
/// <reference path="../../../jsreferences/internal/TypeDefinitions/mscrm.d.ts" />
/// <reference path="CommonReferences.ts" />
/// <reference path="../Typings/ActionCard.d.ts" />
/// <reference path="../CardContainer/models/enums.ts" />
/**
 * @license Copyright (c) Microsoft Corporation.  All rights reserved.
 */
/// <reference path="privatereferences.ts"/>
var MscrmControls;
(function (MscrmControls) {
    var Sales;
    (function (Sales) {
        var ActionCardControl;
        (function (ActionCardControl_1) {
            "use strict";
            var ActionCardControl = /** @class */ (function () {
                function ActionCardControl() {
                }
                ActionCardControl.prototype.init = function (context, notifyOutputChanged, state, container) {
                    var cardList = context.parameters.CardList &&
                        context.parameters.CardList.raw &&
                        JSON.parse(context.parameters.CardList.raw);
                    var card = JSON.parse(context.parameters.Card.raw);
                    var cardViewString = MscrmControls.Sales.CardContainer.CardViewState[context.parameters.CardView.raw];
                    var cardView = MscrmControls.Sales.CardContainer.CardViewState[cardViewString];
                    this.actionCardControl = new ActionCardControl_1.CardControl(context, card, cardList, cardView);
                    this.actionCardControl.LoadActionCard(container);
                };
                ActionCardControl.prototype.updateView = function (context) { };
                ActionCardControl.prototype.getOutputs = function () {
                    return null;
                };
                ActionCardControl.prototype.destroy = function () { };
                return ActionCardControl;
            }());
            ActionCardControl_1.ActionCardControl = ActionCardControl;
        })(ActionCardControl = Sales.ActionCardControl || (Sales.ActionCardControl = {}));
    })(Sales = MscrmControls.Sales || (MscrmControls.Sales = {}));
})(MscrmControls || (MscrmControls = {}));
/**
 * @license Copyright (c) Microsoft Corporation.  All rights reserved.
 */
/// <reference path="./privatereferences.ts"/>
var MscrmControls;
(function (MscrmControls) {
    var Sales;
    (function (Sales) {
        var ActionCardControl;
        (function (ActionCardControl) {
            "use strict";
            var CardControl = /** @class */ (function () {
                function CardControl(context, card, cardList, cardView, adaptiveCard) {
                    this.context = context;
                    this.card = card;
                    this.cardList = cardList;
                    this.cardView = cardView;
                    Sales.Assistant.Telemetry.InitializeContext(context);
                    this.adaptiveCard = adaptiveCard ? adaptiveCard : new AdaptiveCards.AdaptiveCard();
                }
                CardControl.prototype.LoadActionCard = function (container) {
                    container.firstChild && container.removeChild(container.firstChild);
                    container.appendChild(this.GetControlMainHTMLDiv());
                };
                CardControl.prototype.GetControlMainHTMLDiv = function () {
                    try {
                        var adaptiveCardHelper = new ActionCardControl.AdaptiveCardHelper(this.adaptiveCard, this.context, this.card, this.cardList, this.cardView);
                        var htmlContent = adaptiveCardHelper.GetCardHTMLContent();
                        return htmlContent;
                    }
                    catch (err) {
                        Sales.Assistant.Telemetry.ReportError(this.context, "GetControlMainHTMLDiv", "Loading card", this.card && this.card.cardId, "failed to render adaptive card", err);
                        throw err;
                    }
                };
                return CardControl;
            }());
            ActionCardControl.CardControl = CardControl;
        })(ActionCardControl = Sales.ActionCardControl || (Sales.ActionCardControl = {}));
    })(Sales = MscrmControls.Sales || (MscrmControls.Sales = {}));
})(MscrmControls || (MscrmControls = {}));
var MscrmControls;
(function (MscrmControls) {
    var Sales;
    (function (Sales) {
        var ActionCardControl;
        (function (ActionCardControl) {
            "use strict";
            var Util = /** @class */ (function () {
                function Util() {
                }
                Util.getEntityIcon = function (card) {
                    if (typeof card.referencetokens == "string") {
                        card.referencetokens = JSON.parse(card.referencetokens);
                    }
                    if (card.referencetokens && card.referencetokens.Tokens) {
                        var tokens = card.referencetokens.Tokens;
                        if (tokens.title && tokens.title.Params && tokens.title.Params.length > 0) {
                            var icon_1 = Util.defaultIcon;
                            tokens.title.Params.map(function (param) {
                                if (param.TypeCode) {
                                    icon_1 = "./_imgs/svg_" + param.TypeCode.toString() + ".svg";
                                }
                            });
                            return icon_1;
                        }
                    }
                    if (card.regardingobjectid && card.regardingobjectid.etn) {
                        var typecode = Util.GetEntityTypeCode(card.regardingobjectid.etn);
                        return "./_imgs/svg_" + typecode.toString() + ".svg";
                    }
                    return Util.defaultIcon;
                };
                // Getting typecode of regardingobjectid for flow cards
                Util.GetEntityTypeCode = function (entity) {
                    switch (entity) {
                        case "account":
                            return 1;
                        case "contact":
                            return 2;
                        case "opportunity":
                            return 3;
                        case "lead":
                            return 4;
                        case "appointment":
                            return 4201;
                        case "email":
                            return 4202;
                        case "phonecall":
                            return 4210;
                        case "task":
                            return 4212;
                        default:
                            // Returning default icon typecode
                            return 4200;
                    }
                };
                Util.ShouldGetShowAllTemplate = function (cardList) {
                    return (cardList[0].groupcategory != 0 &&
                        cardList[0].groupcategory != 1 &&
                        cardList.length > Sales.Assistant.Constants.MaxCardsInGroupView);
                };
                Util.GetAriaLabelForCardListItem = function (label, cardIndex, totalCards, title, groupCategory) {
                    if (groupCategory) {
                        return Sales.Assistant.Util.FormatString(label, cardIndex, totalCards, groupCategory, title);
                    }
                    else {
                        return Sales.Assistant.Util.FormatString(label, cardIndex, totalCards, title);
                    }
                };
                Util.SetAccessibilityAttributes = function (id, cardHTMLDiv, isGroupCard, ariaLabel) {
                    if (isGroupCard) {
                        cardHTMLDiv.children[0].setAttribute("id", id);
                    }
                    else {
                        cardHTMLDiv.setAttribute("id", id);
                    }
                    cardHTMLDiv.setAttribute("aria-label", ariaLabel);
                    cardHTMLDiv.setAttribute("tabIndex", "-1");
                    return cardHTMLDiv;
                };
                Util.IsGroupViewState = function (cardView) {
                    return (cardView != MscrmControls.Sales.CardContainer.CardViewState.Basic &&
                        cardView != MscrmControls.Sales.CardContainer.CardViewState.Detailed);
                };
                Util.GetGroupCardFullHeader = function (groupcategory, length, headerString, context) {
                    return ((groupcategory != 0 ? length + " " : "") +
                        this.GetGroupCardHeaderWithoutCount(length, headerString, context));
                };
                Util.GetGroupCardHeaderWithoutCount = function (length, headerString, context) {
                    var pluralSuffix = length > 1 ? "s" : "";
                    return context.resources.getString(headerString + pluralSuffix);
                };
                // Generic Microsoft CRM method to decide background color of entity
                Util.GetBackgroundImageResourceName = function (name) {
                    var imageBgColors = [
                        "rgb(0,92,98)",
                        "rgb(53,135,23)",
                        "rgb(114,90,13)",
                        "rgb(164,43,26)",
                        "rgb(101,47,78)",
                        "rgb(106,30,122)",
                        "rgb(49,95,162)",
                    ];
                    try {
                        var s = 0;
                        for (var k = name.length - 1; k >= 0; k--) {
                            var o = name.charCodeAt(k);
                            var e = k % 8;
                            s ^= (o << e) + (o >> (8 - e));
                        }
                        return "data:image/svg+xml;utf8,<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"16\" cy=\"16\" r=\"16\" fill=\"" + imageBgColors[s % imageBgColors.length] + "\"/></svg>";
                    }
                    catch (err) {
                        // Fallback color
                        return "data:image/svg+xml;utf8,<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"16\" cy=\"16\" r=\"16\" fill=\"" + imageBgColors[0] + "\"/></svg>";
                    }
                };
                // CRM way of computing initials
                Util.ComputeInitials = function (name) {
                    var splitName = name.split(" ");
                    if (splitName[1]) {
                        return (splitName[0].charAt(0) + splitName[1].charAt(0)).toUpperCase();
                    }
                    else {
                        return (splitName[0].charAt(0) + splitName[0].charAt(1)).toUpperCase();
                    }
                };
                Util.defaultIcon = "./_imgs/svg_4200.svg";
                return Util;
            }());
            ActionCardControl.Util = Util;
        })(ActionCardControl = Sales.ActionCardControl || (Sales.ActionCardControl = {}));
    })(Sales = MscrmControls.Sales || (MscrmControls.Sales = {}));
})(MscrmControls || (MscrmControls = {}));
/// <reference path="../PrivateReferences.ts" />
var MscrmControls;
(function (MscrmControls) {
    var Sales;
    (function (Sales) {
        var ActionCardControl;
        (function (ActionCardControl) {
            var AdaptiveCardHelper = /** @class */ (function () {
                function AdaptiveCardHelper(adaptiveCard, context, card, cardList, cardView) {
                    this.adaptiveCard = adaptiveCard;
                    this.card = card;
                    this.cardList = cardList;
                    this.cardView = cardView;
                    this.context = context;
                }
                AdaptiveCardHelper.prototype.GetCardHTMLContent = function () {
                    return this.buildAdaptiveControl();
                };
                AdaptiveCardHelper.prototype.buildAdaptiveControl = function () {
                    var adaptiveTemplate;
                    switch (this.cardView) {
                        case MscrmControls.Sales.CardContainer.CardViewState.Basic:
                            adaptiveTemplate = this.getBasicTemplate();
                            break;
                        case MscrmControls.Sales.CardContainer.CardViewState.GroupExpanded:
                        case MscrmControls.Sales.CardContainer.CardViewState.GroupCollapsed:
                            adaptiveTemplate = this.getGroupTemplate();
                            break;
                        case MscrmControls.Sales.CardContainer.CardViewState.Detailed:
                            adaptiveTemplate = this.getDetailedTemplate();
                            break;
                    }
                    this.adaptiveCard.parse(adaptiveTemplate);
                    var cardHTMLDiv = this.adaptiveCard.render();
                    var focusableElementId = (this.context.parameters.FocusableElementId && this.context.parameters.FocusableElementId.raw) || "";
                    // For grouped cards, need to remove tabIndex and set aria-label
                    if (ActionCardControl.Util.IsGroupViewState(this.cardView)) {
                        cardHTMLDiv = ActionCardControl.Util.SetAccessibilityAttributes(focusableElementId, cardHTMLDiv, true, " ");
                    }
                    else {
                        cardHTMLDiv = ActionCardControl.Util.SetAccessibilityAttributes(focusableElementId, cardHTMLDiv, false, " ");
                    }
                    return cardHTMLDiv;
                };
                AdaptiveCardHelper.prototype.getBasicTemplate = function () {
                    var cardTemplate = ActionCardControl.TemplateFactory.GetCardTemplate(this.context, this.card, this.cardList, this.cardView);
                    cardTemplate.PopulateCardDetails();
                    cardTemplate.OverrideHostConfig(this.adaptiveCard.hostConfig);
                    this.adaptiveCard.onExecuteAction = cardTemplate.OnExecuteAction.bind(cardTemplate);
                    return cardTemplate.GetTemplate();
                };
                AdaptiveCardHelper.prototype.getGroupTemplate = function () {
                    var _this = this;
                    var groupTemplate = new ActionCardControl.GroupTemplate(this.context, this.card, this.cardList, this.cardView);
                    groupTemplate.PopulateCardDetails();
                    var adaptiveCardTemplate = groupTemplate.GetTemplate();
                    var groupedCardList = this.cardList;
                    if (this.card.groupcategory != 1) {
                        groupedCardList = this.cardList.slice(0, Sales.Assistant.Constants.MaxCardsInGroupView);
                    }
                    groupedCardList.map(function (card, index) {
                        var cardTemplate = ActionCardControl.TemplateFactory.GetCardTemplate(_this.context, card, _this.cardList, null);
                        cardTemplate.PopulateCardDetails();
                        _this.adaptiveCard.onExecuteAction = cardTemplate.OnExecuteAction.bind(cardTemplate);
                        adaptiveCardTemplate["body"][1].items.push(cardTemplate.GetGroupCardTemplate(index));
                    });
                    if (ActionCardControl.Util.ShouldGetShowAllTemplate(this.cardList))
                        adaptiveCardTemplate["body"][1].items.push(groupTemplate.GetShowAllTemplate());
                    groupTemplate.OverrideHostConfig(this.adaptiveCard.hostConfig);
                    return adaptiveCardTemplate;
                };
                AdaptiveCardHelper.prototype.getDetailedTemplate = function () {
                    var cardTemplate = ActionCardControl.TemplateFactory.GetCardTemplate(this.context, this.card, this.cardList, this.cardView);
                    cardTemplate.PopulateCardDetails();
                    cardTemplate.OverrideHostConfig(this.adaptiveCard.hostConfig);
                    this.adaptiveCard.onExecuteAction = cardTemplate.OnExecuteAction.bind(cardTemplate);
                    return cardTemplate.GetTemplate();
                };
                return AdaptiveCardHelper;
            }());
            ActionCardControl.AdaptiveCardHelper = AdaptiveCardHelper;
        })(ActionCardControl = Sales.ActionCardControl || (Sales.ActionCardControl = {}));
    })(Sales = MscrmControls.Sales || (MscrmControls.Sales = {}));
})(MscrmControls || (MscrmControls = {}));
var MscrmControls;
(function (MscrmControls) {
    var Sales;
    (function (Sales) {
        var ActionCardControl;
        (function (ActionCardControl) {
            var GroupCardFactory = /** @class */ (function () {
                function GroupCardFactory() {
                }
                GroupCardFactory.GetGroupCardIcon = function (groupcategory) {
                    switch (groupcategory) {
                        case 1:
                            return ActionCardControl.IconFactory.MiscIcons.MeetingGroup;
                        case 2:
                            return ActionCardControl.IconFactory.MiscIcons.AlertGroup;
                        case 3:
                            return ActionCardControl.IconFactory.MiscIcons.RecommendationGroup;
                    }
                };
                GroupCardFactory.GetGroupCardHeaderString = function (groupcategory) {
                    switch (groupcategory) {
                        case 1:
                            return "ActionCard.CFC.Common.MeetingGroupHeader";
                        case 2:
                            return "ActionCard.CFC.Common.AlertGroupHeader";
                        case 3:
                            return "ActionCard.CFC.Common.RecommendationGroupHeader";
                    }
                };
                return GroupCardFactory;
            }());
            ActionCardControl.GroupCardFactory = GroupCardFactory;
        })(ActionCardControl = Sales.ActionCardControl || (Sales.ActionCardControl = {}));
    })(Sales = MscrmControls.Sales || (MscrmControls.Sales = {}));
})(MscrmControls || (MscrmControls = {}));
var MscrmControls;
(function (MscrmControls) {
    var Sales;
    (function (Sales) {
        var ActionCardControl;
        (function (ActionCardControl) {
            var IconFactory = /** @class */ (function () {
                function IconFactory() {
                }
                IconFactory.GetCardIcon = function (card) {
                    // Check for custom cards
                    if (card.cardtype >= 9000 &&
                        card.icon &&
                        card.icon.length > 0 &&
                        card.icon.indexOf("msdyn_flowcardtypeicon") === -1) {
                        return card.icon;
                    }
                    return "data:image/svg+xml;utf8," + this.GetIconSvg(card.cardtype);
                };
                IconFactory.GetIconSvg = function (cardType) {
                    switch (cardType) {
                        case 0:
                        case 1:
                        case 2:
                        case 11:
                        case 20:
                        case 26:
                        case 27:
                        case 28:
                        case 106:
                            return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="rgb(238,238,238)"/><path d="M16.5 15V15.75H13.5C13.5 15.957 13.4609 16.1523 13.3828 16.3359C13.3047 16.5156 13.1973 16.6738 13.0605 16.8105C12.9238 16.9473 12.7637 17.0547 12.5801 17.1328C12.4004 17.2109 12.207 17.25 12 17.25C11.793 17.25 11.5977 17.2109 11.4141 17.1328C11.2344 17.0547 11.0762 16.9473 10.9395 16.8105C10.8027 16.6738 10.6953 16.5156 10.6172 16.3359C10.5391 16.1523 10.5 15.957 10.5 15.75H7.5V15H8.25V10.5C8.25 10.1562 8.29492 9.82422 8.38477 9.50391C8.47461 9.18359 8.59961 8.88477 8.75977 8.60742C8.92383 8.33008 9.11914 8.07812 9.3457 7.85156C9.57617 7.62109 9.83008 7.42578 10.1074 7.26562C10.3848 7.10156 10.6836 6.97461 11.0039 6.88477C11.3242 6.79492 11.6562 6.75 12 6.75C12.3438 6.75 12.6758 6.79492 12.9961 6.88477C13.3164 6.97461 13.6152 7.10156 13.8926 7.26562C14.1699 7.42578 14.4219 7.62109 14.6484 7.85156C14.8789 8.07812 15.0742 8.33008 15.2344 8.60742C15.3984 8.88477 15.5254 9.18359 15.6152 9.50391C15.7051 9.82422 15.75 10.1562 15.75 10.5V15H16.5ZM15 15V10.5C15 10.0859 14.9199 9.69727 14.7598 9.33398C14.6035 8.9707 14.3887 8.6543 14.1152 8.38477C13.8457 8.11133 13.5293 7.89648 13.166 7.74023C12.8027 7.58008 12.4141 7.5 12 7.5C11.5859 7.5 11.1973 7.58008 10.834 7.74023C10.4707 7.89648 10.1523 8.11133 9.87891 8.38477C9.60938 8.6543 9.39453 8.9707 9.23438 9.33398C9.07812 9.69727 9 10.0859 9 10.5V15H15ZM12 16.5C12.1055 16.5 12.2031 16.4805 12.293 16.4414C12.3828 16.4023 12.4609 16.3496 12.5273 16.2832C12.5977 16.2129 12.6523 16.1328 12.6914 16.043C12.7305 15.9531 12.75 15.8555 12.75 15.75H11.25C11.25 15.8555 11.2695 15.9531 11.3086 16.043C11.3477 16.1328 11.4004 16.2129 11.4668 16.2832C11.5371 16.3496 11.6172 16.4023 11.707 16.4414C11.7969 16.4805 11.8945 16.5 12 16.5Z" fill="black" fill-opacity="0.32"/><path d="M16.5 15V15.75H13.5C13.5 15.957 13.4609 16.1523 13.3828 16.3359C13.3047 16.5156 13.1973 16.6738 13.0605 16.8105C12.9238 16.9473 12.7637 17.0547 12.5801 17.1328C12.4004 17.2109 12.207 17.25 12 17.25C11.793 17.25 11.5977 17.2109 11.4141 17.1328C11.2344 17.0547 11.0762 16.9473 10.9395 16.8105C10.8027 16.6738 10.6953 16.5156 10.6172 16.3359C10.5391 16.1523 10.5 15.957 10.5 15.75H7.5V15H8.25V10.5C8.25 10.1562 8.29492 9.82422 8.38477 9.50391C8.47461 9.18359 8.59961 8.88477 8.75977 8.60742C8.92383 8.33008 9.11914 8.07812 9.3457 7.85156C9.57617 7.62109 9.83008 7.42578 10.1074 7.26562C10.3848 7.10156 10.6836 6.97461 11.0039 6.88477C11.3242 6.79492 11.6562 6.75 12 6.75C12.3438 6.75 12.6758 6.79492 12.9961 6.88477C13.3164 6.97461 13.6152 7.10156 13.8926 7.26562C14.1699 7.42578 14.4219 7.62109 14.6484 7.85156C14.8789 8.07812 15.0742 8.33008 15.2344 8.60742C15.3984 8.88477 15.5254 9.18359 15.6152 9.50391C15.7051 9.82422 15.75 10.1562 15.75 10.5V15H16.5ZM15 15V10.5C15 10.0859 14.9199 9.69727 14.7598 9.33398C14.6035 8.9707 14.3887 8.6543 14.1152 8.38477C13.8457 8.11133 13.5293 7.89648 13.166 7.74023C12.8027 7.58008 12.4141 7.5 12 7.5C11.5859 7.5 11.1973 7.58008 10.834 7.74023C10.4707 7.89648 10.1523 8.11133 9.87891 8.38477C9.60938 8.6543 9.39453 8.9707 9.23438 9.33398C9.07812 9.69727 9 10.0859 9 10.5V15H15ZM12 16.5C12.1055 16.5 12.2031 16.4805 12.293 16.4414C12.3828 16.4023 12.4609 16.3496 12.5273 16.2832C12.5977 16.2129 12.6523 16.1328 12.6914 16.043C12.7305 15.9531 12.75 15.8555 12.75 15.75H11.25C11.25 15.8555 11.2695 15.9531 11.3086 16.043C11.3477 16.1328 11.4004 16.2129 11.4668 16.2832C11.5371 16.3496 11.6172 16.4023 11.707 16.4414C11.7969 16.4805 11.8945 16.5 12 16.5Z" fill="black" style="mix-blend-mode:overlay"/></svg>';
                        case 3:
                            return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="rgb(238,238,238)"/><path d="M11.25 10.5V14.25H10.5V10.5H11.25ZM8.25 15.75V10.5H9V15.75H8.25ZM15.6211 14.5195C15.9766 14.6602 16.3008 14.8496 16.5938 15.0879C16.8867 15.3223 17.1367 15.5918 17.3438 15.8965C17.5547 16.1973 17.7168 16.5273 17.8301 16.8867C17.9434 17.2422 18 17.6133 18 18H17.25C17.25 17.5859 17.1699 17.1973 17.0098 16.834C16.8535 16.4707 16.6387 16.1543 16.3652 15.8848C16.0957 15.6113 15.7793 15.3965 15.416 15.2402C15.0527 15.0801 14.6641 15 14.25 15C13.8359 15 13.4473 15.0801 13.084 15.2402C12.7207 15.3965 12.4023 15.6113 12.1289 15.8848C11.8594 16.1543 11.6445 16.4707 11.4844 16.834C11.3281 17.1973 11.25 17.5859 11.25 18H10.5C10.5 17.6133 10.5566 17.2422 10.6699 16.8867C10.7832 16.5273 10.9434 16.1973 11.1504 15.8965C11.3613 15.5918 11.6113 15.3223 11.9004 15.0879C12.1934 14.8496 12.5195 14.6602 12.8789 14.5195C12.6016 14.3086 12.3848 14.0488 12.2285 13.7402C12.0762 13.4316 12 13.1016 12 12.75C12 12.4414 12.0586 12.1504 12.1758 11.877C12.293 11.6035 12.4531 11.3652 12.6562 11.1621C12.8633 10.9551 13.1016 10.793 13.3711 10.6758C13.6445 10.5586 13.9375 10.5 14.25 10.5C14.5586 10.5 14.8496 10.5586 15.123 10.6758C15.3965 10.793 15.6348 10.9551 15.8379 11.1621C16.0449 11.3652 16.207 11.6035 16.3242 11.877C16.4414 12.1504 16.5 12.4414 16.5 12.75C16.5 13.1016 16.4219 13.4316 16.2656 13.7402C16.1133 14.0488 15.8984 14.3086 15.6211 14.5195ZM12.75 12.75C12.75 12.957 12.7891 13.1523 12.8672 13.3359C12.9453 13.5156 13.0527 13.6738 13.1895 13.8105C13.3262 13.9473 13.4844 14.0547 13.6641 14.1328C13.8477 14.2109 14.043 14.25 14.25 14.25C14.457 14.25 14.6504 14.2109 14.8301 14.1328C15.0137 14.0547 15.1738 13.9473 15.3105 13.8105C15.4473 13.6738 15.5547 13.5156 15.6328 13.3359C15.7109 13.1523 15.75 12.957 15.75 12.75C15.75 12.543 15.7109 12.3496 15.6328 12.1699C15.5547 11.9863 15.4473 11.8262 15.3105 11.6895C15.1738 11.5527 15.0137 11.4453 14.8301 11.3672C14.6504 11.2891 14.457 11.25 14.25 11.25C14.043 11.25 13.8477 11.2891 13.6641 11.3672C13.4844 11.4453 13.3262 11.5527 13.1895 11.6895C13.0527 11.8262 12.9453 11.9863 12.8672 12.1699C12.7891 12.3496 12.75 12.543 12.75 12.75ZM18 6.75V15.3105C17.7891 14.9863 17.5391 14.6953 17.25 14.4375V9.75H6.75V16.5H9.75586C9.66992 16.7383 9.60547 16.9883 9.5625 17.25H6V6.75H8.25V6H9V6.75H15V6H15.75V6.75H18ZM17.25 7.5H15.75V8.25H15V7.5H9V8.25H8.25V7.5H6.75V9H17.25V7.5Z" fill="black" fill-opacity="0.32"/><path d="M11.25 10.5V14.25H10.5V10.5H11.25ZM8.25 15.75V10.5H9V15.75H8.25ZM15.6211 14.5195C15.9766 14.6602 16.3008 14.8496 16.5938 15.0879C16.8867 15.3223 17.1367 15.5918 17.3438 15.8965C17.5547 16.1973 17.7168 16.5273 17.8301 16.8867C17.9434 17.2422 18 17.6133 18 18H17.25C17.25 17.5859 17.1699 17.1973 17.0098 16.834C16.8535 16.4707 16.6387 16.1543 16.3652 15.8848C16.0957 15.6113 15.7793 15.3965 15.416 15.2402C15.0527 15.0801 14.6641 15 14.25 15C13.8359 15 13.4473 15.0801 13.084 15.2402C12.7207 15.3965 12.4023 15.6113 12.1289 15.8848C11.8594 16.1543 11.6445 16.4707 11.4844 16.834C11.3281 17.1973 11.25 17.5859 11.25 18H10.5C10.5 17.6133 10.5566 17.2422 10.6699 16.8867C10.7832 16.5273 10.9434 16.1973 11.1504 15.8965C11.3613 15.5918 11.6113 15.3223 11.9004 15.0879C12.1934 14.8496 12.5195 14.6602 12.8789 14.5195C12.6016 14.3086 12.3848 14.0488 12.2285 13.7402C12.0762 13.4316 12 13.1016 12 12.75C12 12.4414 12.0586 12.1504 12.1758 11.877C12.293 11.6035 12.4531 11.3652 12.6562 11.1621C12.8633 10.9551 13.1016 10.793 13.3711 10.6758C13.6445 10.5586 13.9375 10.5 14.25 10.5C14.5586 10.5 14.8496 10.5586 15.123 10.6758C15.3965 10.793 15.6348 10.9551 15.8379 11.1621C16.0449 11.3652 16.207 11.6035 16.3242 11.877C16.4414 12.1504 16.5 12.4414 16.5 12.75C16.5 13.1016 16.4219 13.4316 16.2656 13.7402C16.1133 14.0488 15.8984 14.3086 15.6211 14.5195ZM12.75 12.75C12.75 12.957 12.7891 13.1523 12.8672 13.3359C12.9453 13.5156 13.0527 13.6738 13.1895 13.8105C13.3262 13.9473 13.4844 14.0547 13.6641 14.1328C13.8477 14.2109 14.043 14.25 14.25 14.25C14.457 14.25 14.6504 14.2109 14.8301 14.1328C15.0137 14.0547 15.1738 13.9473 15.3105 13.8105C15.4473 13.6738 15.5547 13.5156 15.6328 13.3359C15.7109 13.1523 15.75 12.957 15.75 12.75C15.75 12.543 15.7109 12.3496 15.6328 12.1699C15.5547 11.9863 15.4473 11.8262 15.3105 11.6895C15.1738 11.5527 15.0137 11.4453 14.8301 11.3672C14.6504 11.2891 14.457 11.25 14.25 11.25C14.043 11.25 13.8477 11.2891 13.6641 11.3672C13.4844 11.4453 13.3262 11.5527 13.1895 11.6895C13.0527 11.8262 12.9453 11.9863 12.8672 12.1699C12.7891 12.3496 12.75 12.543 12.75 12.75ZM18 6.75V15.3105C17.7891 14.9863 17.5391 14.6953 17.25 14.4375V9.75H6.75V16.5H9.75586C9.66992 16.7383 9.60547 16.9883 9.5625 17.25H6V6.75H8.25V6H9V6.75H15V6H15.75V6.75H18ZM17.25 7.5H15.75V8.25H15V7.5H9V8.25H8.25V7.5H6.75V9H17.25V7.5Z" fill="black" style="mix-blend-mode:overlay"/></svg>';
                        case 4:
                        case 22:
                        case 24:
                        case 101:
                        case 102:
                        case 110:
                        case 120:
                            return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="rgb(204,204,255)"/><path d="M17.2969 10.8574L12 17.3789L6.70312 10.8574L9.84961 7.5H14.1504L17.2969 10.8574ZM13.3945 10.5L12.5508 8.25H11.4492L10.6055 10.5H13.3945ZM10.5645 11.25L12 16.2773L13.4355 11.25H10.5645ZM10.0195 8.25L7.91602 10.5H9.92578L10.7695 8.25H10.0195ZM7.83984 11.25L11.0156 15.1582L9.89648 11.25H7.83984ZM12.9844 15.1582L16.1602 11.25H14.1035L12.9844 15.1582ZM16.084 10.5L13.9805 8.25H13.2305L14.0742 10.5H16.084Z" fill="black" fill-opacity="0.32"/><path d="M17.2969 10.8574L12 17.3789L6.70312 10.8574L9.84961 7.5H14.1504L17.2969 10.8574ZM13.3945 10.5L12.5508 8.25H11.4492L10.6055 10.5H13.3945ZM10.5645 11.25L12 16.2773L13.4355 11.25H10.5645ZM10.0195 8.25L7.91602 10.5H9.92578L10.7695 8.25H10.0195ZM7.83984 11.25L11.0156 15.1582L9.89648 11.25H7.83984ZM12.9844 15.1582L16.1602 11.25H14.1035L12.9844 15.1582ZM16.084 10.5L13.9805 8.25H13.2305L14.0742 10.5H16.084Z" fill="black" style="mix-blend-mode:overlay"/></svg>';
                        case 5:
                        case 23:
                            return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="rgb(255,230,102)"/><path d="M17.25 7.5V13.5H12V12H8.25V18H7.5V6H12.75V7.5H17.25ZM12 11.25V6.75H8.25V11.25H12ZM16.5 8.25H12.75V12.75H16.5V8.25Z" fill="black" fill-opacity="0.32"/><path d="M17.25 7.5V13.5H12V12H8.25V18H7.5V6H12.75V7.5H17.25ZM12 11.25V6.75H8.25V11.25H12ZM16.5 8.25H12.75V12.75H16.5V8.25Z" fill="black" style="mix-blend-mode:overlay"/></svg>';
                        case 6:
                        case 15:
                        case 21:
                        case 36:
                        case 37:
                        case 100:
                        case 108:
                            return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="rgb(238,238,238)"/><path d="M15.75 6.75H18V17.25H6V6.75H8.25V6H9V6.75H15V6H15.75V6.75ZM8.25 7.5H6.75V9H17.25V7.5H15.75V8.25H15V7.5H9V8.25H8.25V7.5ZM6.75 16.5H17.25V9.75H6.75V16.5Z" fill="black" fill-opacity="0.32"/><path d="M15.75 6.75H18V17.25H6V6.75H8.25V6H9V6.75H15V6H15.75V6.75ZM8.25 7.5H6.75V9H17.25V7.5H15.75V8.25H15V7.5H9V8.25H8.25V7.5ZM6.75 16.5H17.25V9.75H6.75V16.5Z" fill="black" style="mix-blend-mode:overlay"/></svg>';
                        case 7:
                        case 109:
                            return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="rgb(238,238,238)"/><path d="M11.25 14.4668L13.9863 11.7363L14.5137 12.2637L11.25 15.5332L9.67383 13.9512L10.2012 13.4238L11.25 14.4668ZM16.5 7.5V18H7.5V7.5H10.5C10.5 7.29297 10.5391 7.09961 10.6172 6.91992C10.6953 6.73633 10.8027 6.57617 10.9395 6.43945C11.0762 6.30273 11.2344 6.19531 11.4141 6.11719C11.5977 6.03906 11.793 6 12 6C12.207 6 12.4004 6.03906 12.5801 6.11719C12.7637 6.19531 12.9238 6.30273 13.0605 6.43945C13.1973 6.57617 13.3047 6.73633 13.3828 6.91992C13.4609 7.09961 13.5 7.29297 13.5 7.5H16.5ZM9.75 8.25V9H14.25V8.25H12.75V7.5C12.75 7.39453 12.7305 7.29688 12.6914 7.20703C12.6523 7.11719 12.5977 7.03906 12.5273 6.97266C12.4609 6.90234 12.3828 6.84766 12.293 6.80859C12.2031 6.76953 12.1055 6.75 12 6.75C11.8945 6.75 11.7969 6.76953 11.707 6.80859C11.6172 6.84766 11.5371 6.90234 11.4668 6.97266C11.4004 7.03906 11.3477 7.11719 11.3086 7.20703C11.2695 7.29688 11.25 7.39453 11.25 7.5V8.25H9.75ZM15.75 17.25V8.25H15V9.75H9V8.25H8.25V17.25H15.75Z" fill="black" fill-opacity="0.32"/><path d="M11.25 14.4668L13.9863 11.7363L14.5137 12.2637L11.25 15.5332L9.67383 13.9512L10.2012 13.4238L11.25 14.4668ZM16.5 7.5V18H7.5V7.5H10.5C10.5 7.29297 10.5391 7.09961 10.6172 6.91992C10.6953 6.73633 10.8027 6.57617 10.9395 6.43945C11.0762 6.30273 11.2344 6.19531 11.4141 6.11719C11.5977 6.03906 11.793 6 12 6C12.207 6 12.4004 6.03906 12.5801 6.11719C12.7637 6.19531 12.9238 6.30273 13.0605 6.43945C13.1973 6.57617 13.3047 6.73633 13.3828 6.91992C13.4609 7.09961 13.5 7.29297 13.5 7.5H16.5ZM9.75 8.25V9H14.25V8.25H12.75V7.5C12.75 7.39453 12.7305 7.29688 12.6914 7.20703C12.6523 7.11719 12.5977 7.03906 12.5273 6.97266C12.4609 6.90234 12.3828 6.84766 12.293 6.80859C12.2031 6.76953 12.1055 6.75 12 6.75C11.8945 6.75 11.7969 6.76953 11.707 6.80859C11.6172 6.84766 11.5371 6.90234 11.4668 6.97266C11.4004 7.03906 11.3477 7.11719 11.3086 7.20703C11.2695 7.29688 11.25 7.39453 11.25 7.5V8.25H9.75ZM15.75 17.25V8.25H15V9.75H9V8.25H8.25V17.25H15.75Z" fill="black" style="mix-blend-mode:overlay"/></svg>';
                        case 8:
                            return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="rgb(238,238,238)"/><path d="M15.416 13.1074C15.5879 13.1074 15.752 13.1406 15.9082 13.207C16.0684 13.2695 16.209 13.3613 16.3301 13.4824L17.6191 14.7715C17.7402 14.8926 17.832 15.0332 17.8945 15.1934C17.9609 15.3496 17.9941 15.5137 17.9941 15.6855C17.9941 15.8574 17.9609 16.0234 17.8945 16.1836C17.832 16.3398 17.7402 16.4785 17.6191 16.5996L17.5371 16.6816C17.3262 16.8926 17.1328 17.0801 16.957 17.2441C16.7812 17.4082 16.5977 17.5469 16.4062 17.6602C16.2148 17.7695 16.002 17.8535 15.7676 17.9121C15.5332 17.9707 15.2539 18 14.9297 18C14.4414 18 13.9395 17.9238 13.4238 17.7715C12.9082 17.6191 12.3945 17.4082 11.8828 17.1387C11.375 16.8691 10.875 16.5488 10.3828 16.1777C9.89453 15.8066 9.43164 15.4023 8.99414 14.9648C8.56055 14.5234 8.16016 14.0586 7.79297 13.5703C7.42578 13.0781 7.10938 12.5781 6.84375 12.0703C6.57812 11.5586 6.37109 11.0488 6.22266 10.541C6.07422 10.0332 6 9.54102 6 9.06445C6 8.74023 6.02734 8.46289 6.08203 8.23242C6.14062 8.00195 6.22461 7.79102 6.33398 7.59961C6.44727 7.4082 6.58398 7.22656 6.74414 7.05469C6.9082 6.87891 7.0957 6.68555 7.30664 6.47461L7.40039 6.38086C7.52148 6.25977 7.66016 6.16602 7.81641 6.09961C7.97266 6.0332 8.13867 6 8.31445 6C8.48633 6 8.65039 6.0332 8.80664 6.09961C8.9668 6.16602 9.10742 6.25977 9.22852 6.38086L10.5176 7.66992C10.6387 7.79102 10.7305 7.93164 10.793 8.0918C10.8594 8.24805 10.8926 8.41211 10.8926 8.58398C10.8926 8.75586 10.8633 8.91016 10.8047 9.04688C10.7461 9.17969 10.6738 9.30078 10.5879 9.41016C10.502 9.51953 10.4062 9.61914 10.3008 9.70898C10.1992 9.79883 10.1055 9.88672 10.0195 9.97266C9.93359 10.0586 9.86133 10.1465 9.80273 10.2363C9.74414 10.3223 9.71484 10.416 9.71484 10.5176C9.71484 10.666 9.76758 10.793 9.87305 10.8984L13.1016 14.127C13.207 14.2324 13.334 14.2852 13.4824 14.2852C13.584 14.2852 13.6777 14.2559 13.7637 14.1973C13.8535 14.1387 13.9414 14.0664 14.0273 13.9805C14.1133 13.8945 14.2012 13.8008 14.291 13.6992C14.3809 13.5938 14.4805 13.498 14.5898 13.4121C14.6992 13.3262 14.8203 13.2539 14.9531 13.1953C15.0898 13.1367 15.2441 13.1074 15.416 13.1074ZM14.9297 17.25C15.2109 17.25 15.4453 17.2246 15.6328 17.1738C15.8242 17.1191 15.9961 17.043 16.1484 16.9453C16.3008 16.8438 16.4492 16.7188 16.5938 16.5703C16.7383 16.4219 16.9043 16.2539 17.0918 16.0664C17.1973 15.9609 17.25 15.834 17.25 15.6855C17.25 15.6152 17.2207 15.5332 17.1621 15.4395C17.1074 15.3418 17.0352 15.2402 16.9453 15.1348C16.8555 15.0293 16.7539 14.9219 16.6406 14.8125C16.5312 14.6992 16.4219 14.5938 16.3125 14.4961C16.207 14.3945 16.1074 14.3027 16.0137 14.2207C15.9238 14.1348 15.8535 14.0664 15.8027 14.0156C15.6973 13.9102 15.5684 13.8574 15.416 13.8574C15.3145 13.8574 15.2207 13.8867 15.1348 13.9453C15.0488 14.0039 14.9629 14.0762 14.877 14.1621C14.791 14.248 14.7012 14.3438 14.6074 14.4492C14.5176 14.5508 14.418 14.6445 14.3086 14.7305C14.1992 14.8164 14.0762 14.8887 13.9395 14.9473C13.8066 15.0059 13.6543 15.0352 13.4824 15.0352C13.3105 15.0352 13.1445 15.0039 12.9844 14.9414C12.8281 14.875 12.6895 14.7812 12.5684 14.6602L9.33984 11.4316C9.21875 11.3105 9.125 11.1719 9.05859 11.0156C8.99609 10.8555 8.96484 10.6895 8.96484 10.5176C8.96484 10.3457 8.99414 10.1934 9.05273 10.0605C9.11133 9.92383 9.18359 9.80078 9.26953 9.69141C9.35547 9.58203 9.44922 9.48242 9.55078 9.39258C9.65625 9.29883 9.75195 9.20898 9.83789 9.12305C9.92383 9.03711 9.99609 8.95117 10.0547 8.86523C10.1133 8.7793 10.1426 8.68555 10.1426 8.58398C10.1426 8.43164 10.0898 8.30273 9.98438 8.19727C9.93359 8.14648 9.86523 8.07617 9.7793 7.98633C9.69727 7.89258 9.60547 7.79297 9.50391 7.6875C9.40625 7.57812 9.30078 7.46875 9.1875 7.35938C9.07812 7.24609 8.9707 7.14453 8.86523 7.05469C8.75977 6.96484 8.6582 6.89258 8.56055 6.83789C8.4668 6.7793 8.38477 6.75 8.31445 6.75C8.16602 6.75 8.03906 6.80273 7.93359 6.9082C7.74609 7.0957 7.57812 7.26172 7.42969 7.40625C7.28516 7.55078 7.16016 7.69922 7.05469 7.85156C6.95312 8.00391 6.875 8.17578 6.82031 8.36719C6.76953 8.55469 6.74414 8.78711 6.74414 9.06445C6.74414 9.50195 6.81445 9.95312 6.95508 10.418C7.09961 10.8828 7.29688 11.3477 7.54688 11.8125C7.80078 12.2773 8.09961 12.7363 8.44336 13.1895C8.78711 13.6387 9.16211 14.0645 9.56836 14.4668C9.97461 14.8691 10.4023 15.2402 10.8516 15.5801C11.3047 15.9199 11.7617 16.2148 12.2227 16.4648C12.6875 16.7109 13.1484 16.9043 13.6055 17.0449C14.0664 17.1816 14.5078 17.25 14.9297 17.25Z" fill="black" fill-opacity="0.32"/>   <path d="M15.416 13.1074C15.5879 13.1074 15.752 13.1406 15.9082 13.207C16.0684 13.2695 16.209 13.3613 16.3301 13.4824L17.6191 14.7715C17.7402 14.8926 17.832 15.0332 17.8945 15.1934C17.9609 15.3496 17.9941 15.5137 17.9941 15.6855C17.9941 15.8574 17.9609 16.0234 17.8945 16.1836C17.832 16.3398 17.7402 16.4785 17.6191 16.5996L17.5371 16.6816C17.3262 16.8926 17.1328 17.0801 16.957 17.2441C16.7812 17.4082 16.5977 17.5469 16.4062 17.6602C16.2148 17.7695 16.002 17.8535 15.7676 17.9121C15.5332 17.9707 15.2539 18 14.9297 18C14.4414 18 13.9395 17.9238 13.4238 17.7715C12.9082 17.6191 12.3945 17.4082 11.8828 17.1387C11.375 16.8691 10.875 16.5488 10.3828 16.1777C9.89453 15.8066 9.43164 15.4023 8.99414 14.9648C8.56055 14.5234 8.16016 14.0586 7.79297 13.5703C7.42578 13.0781 7.10938 12.5781 6.84375 12.0703C6.57812 11.5586 6.37109 11.0488 6.22266 10.541C6.07422 10.0332 6 9.54102 6 9.06445C6 8.74023 6.02734 8.46289 6.08203 8.23242C6.14062 8.00195 6.22461 7.79102 6.33398 7.59961C6.44727 7.4082 6.58398 7.22656 6.74414 7.05469C6.9082 6.87891 7.0957 6.68555 7.30664 6.47461L7.40039 6.38086C7.52148 6.25977 7.66016 6.16602 7.81641 6.09961C7.97266 6.0332 8.13867 6 8.31445 6C8.48633 6 8.65039 6.0332 8.80664 6.09961C8.9668 6.16602 9.10742 6.25977 9.22852 6.38086L10.5176 7.66992C10.6387 7.79102 10.7305 7.93164 10.793 8.0918C10.8594 8.24805 10.8926 8.41211 10.8926 8.58398C10.8926 8.75586 10.8633 8.91016 10.8047 9.04688C10.7461 9.17969 10.6738 9.30078 10.5879 9.41016C10.502 9.51953 10.4062 9.61914 10.3008 9.70898C10.1992 9.79883 10.1055 9.88672 10.0195 9.97266C9.93359 10.0586 9.86133 10.1465 9.80273 10.2363C9.74414 10.3223 9.71484 10.416 9.71484 10.5176C9.71484 10.666 9.76758 10.793 9.87305 10.8984L13.1016 14.127C13.207 14.2324 13.334 14.2852 13.4824 14.2852C13.584 14.2852 13.6777 14.2559 13.7637 14.1973C13.8535 14.1387 13.9414 14.0664 14.0273 13.9805C14.1133 13.8945 14.2012 13.8008 14.291 13.6992C14.3809 13.5938 14.4805 13.498 14.5898 13.4121C14.6992 13.3262 14.8203 13.2539 14.9531 13.1953C15.0898 13.1367 15.2441 13.1074 15.416 13.1074ZM14.9297 17.25C15.2109 17.25 15.4453 17.2246 15.6328 17.1738C15.8242 17.1191 15.9961 17.043 16.1484 16.9453C16.3008 16.8438 16.4492 16.7188 16.5938 16.5703C16.7383 16.4219 16.9043 16.2539 17.0918 16.0664C17.1973 15.9609 17.25 15.834 17.25 15.6855C17.25 15.6152 17.2207 15.5332 17.1621 15.4395C17.1074 15.3418 17.0352 15.2402 16.9453 15.1348C16.8555 15.0293 16.7539 14.9219 16.6406 14.8125C16.5312 14.6992 16.4219 14.5938 16.3125 14.4961C16.207 14.3945 16.1074 14.3027 16.0137 14.2207C15.9238 14.1348 15.8535 14.0664 15.8027 14.0156C15.6973 13.9102 15.5684 13.8574 15.416 13.8574C15.3145 13.8574 15.2207 13.8867 15.1348 13.9453C15.0488 14.0039 14.9629 14.0762 14.877 14.1621C14.791 14.248 14.7012 14.3438 14.6074 14.4492C14.5176 14.5508 14.418 14.6445 14.3086 14.7305C14.1992 14.8164 14.0762 14.8887 13.9395 14.9473C13.8066 15.0059 13.6543 15.0352 13.4824 15.0352C13.3105 15.0352 13.1445 15.0039 12.9844 14.9414C12.8281 14.875 12.6895 14.7812 12.5684 14.6602L9.33984 11.4316C9.21875 11.3105 9.125 11.1719 9.05859 11.0156C8.99609 10.8555 8.96484 10.6895 8.96484 10.5176C8.96484 10.3457 8.99414 10.1934 9.05273 10.0605C9.11133 9.92383 9.18359 9.80078 9.26953 9.69141C9.35547 9.58203 9.44922 9.48242 9.55078 9.39258C9.65625 9.29883 9.75195 9.20898 9.83789 9.12305C9.92383 9.03711 9.99609 8.95117 10.0547 8.86523C10.1133 8.7793 10.1426 8.68555 10.1426 8.58398C10.1426 8.43164 10.0898 8.30273 9.98438 8.19727C9.93359 8.14648 9.86523 8.07617 9.7793 7.98633C9.69727 7.89258 9.60547 7.79297 9.50391 7.6875C9.40625 7.57812 9.30078 7.46875 9.1875 7.35938C9.07812 7.24609 8.9707 7.14453 8.86523 7.05469C8.75977 6.96484 8.6582 6.89258 8.56055 6.83789C8.4668 6.7793 8.38477 6.75 8.31445 6.75C8.16602 6.75 8.03906 6.80273 7.93359 6.9082C7.74609 7.0957 7.57812 7.26172 7.42969 7.40625C7.28516 7.55078 7.16016 7.69922 7.05469 7.85156C6.95312 8.00391 6.875 8.17578 6.82031 8.36719C6.76953 8.55469 6.74414 8.78711 6.74414 9.06445C6.74414 9.50195 6.81445 9.95312 6.95508 10.418C7.09961 10.8828 7.29688 11.3477 7.54688 11.8125C7.80078 12.2773 8.09961 12.7363 8.44336 13.1895C8.78711 13.6387 9.16211 14.0645 9.56836 14.4668C9.97461 14.8691 10.4023 15.2402 10.8516 15.5801C11.3047 15.9199 11.7617 16.2148 12.2227 16.4648C12.6875 16.7109 13.1484 16.9043 13.6055 17.0449C14.0664 17.1816 14.5078 17.25 14.9297 17.25Z" fill="black" style="mix-blend-mode:overlay"/></svg>';
                        case 10:
                            return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="rgb(238,238,238)"/><path d="M18 8.25V12H17.25V9.79688L12 12.416L6.75 9.79688V15H12V15.75H6V8.25H18ZM12 11.584L17.1621 9H6.83789L12 11.584ZM15.375 12.75C15.6328 12.75 15.875 12.8008 16.1016 12.9023C16.3281 13 16.5254 13.1348 16.6934 13.3066C16.8652 13.4746 17 13.6719 17.0977 13.8984C17.1992 14.125 17.25 14.3672 17.25 14.625V15.75H18V16.5H16.5V16.875C16.5 17.0312 16.4707 17.1777 16.4121 17.3145C16.3535 17.4512 16.2734 17.5703 16.1719 17.6719C16.0703 17.7734 15.9512 17.8535 15.8145 17.9121C15.6777 17.9707 15.5312 18 15.375 18C15.2188 18 15.0723 17.9707 14.9355 17.9121C14.7988 17.8535 14.6797 17.7734 14.5781 17.6719C14.4766 17.5703 14.3965 17.4512 14.3379 17.3145C14.2793 17.1777 14.25 17.0312 14.25 16.875V16.5H12.75V15.75H13.5V14.625C13.5 14.3672 13.5488 14.125 13.6465 13.8984C13.7441 13.6719 13.877 13.4746 14.0449 13.3066C14.2168 13.1348 14.416 13 14.6426 12.9023C14.873 12.8008 15.1172 12.75 15.375 12.75ZM15.75 16.5H15V16.875C15 16.9766 15.0371 17.0645 15.1113 17.1387C15.1855 17.2129 15.2734 17.25 15.375 17.25C15.4766 17.25 15.5645 17.2129 15.6387 17.1387C15.7129 17.0645 15.75 16.9766 15.75 16.875V16.5ZM16.5 15.75V14.625C16.5 14.4688 16.4707 14.3223 16.4121 14.1855C16.3535 14.0488 16.2734 13.9297 16.1719 13.8281C16.0703 13.7266 15.9512 13.6465 15.8145 13.5879C15.6777 13.5293 15.5312 13.5 15.375 13.5C15.2188 13.5 15.0723 13.5293 14.9355 13.5879C14.7988 13.6465 14.6797 13.7266 14.5781 13.8281C14.4766 13.9297 14.3965 14.0488 14.3379 14.1855C14.2793 14.3223 14.25 14.4688 14.25 14.625V15.75H16.5Z" fill="black" fill-opacity="0.32"/><path d="M18 8.25V12H17.25V9.79688L12 12.416L6.75 9.79688V15H12V15.75H6V8.25H18ZM12 11.584L17.1621 9H6.83789L12 11.584ZM15.375 12.75C15.6328 12.75 15.875 12.8008 16.1016 12.9023C16.3281 13 16.5254 13.1348 16.6934 13.3066C16.8652 13.4746 17 13.6719 17.0977 13.8984C17.1992 14.125 17.25 14.3672 17.25 14.625V15.75H18V16.5H16.5V16.875C16.5 17.0312 16.4707 17.1777 16.4121 17.3145C16.3535 17.4512 16.2734 17.5703 16.1719 17.6719C16.0703 17.7734 15.9512 17.8535 15.8145 17.9121C15.6777 17.9707 15.5312 18 15.375 18C15.2188 18 15.0723 17.9707 14.9355 17.9121C14.7988 17.8535 14.6797 17.7734 14.5781 17.6719C14.4766 17.5703 14.3965 17.4512 14.3379 17.3145C14.2793 17.1777 14.25 17.0312 14.25 16.875V16.5H12.75V15.75H13.5V14.625C13.5 14.3672 13.5488 14.125 13.6465 13.8984C13.7441 13.6719 13.877 13.4746 14.0449 13.3066C14.2168 13.1348 14.416 13 14.6426 12.9023C14.873 12.8008 15.1172 12.75 15.375 12.75ZM15.75 16.5H15V16.875C15 16.9766 15.0371 17.0645 15.1113 17.1387C15.1855 17.2129 15.2734 17.25 15.375 17.25C15.4766 17.25 15.5645 17.2129 15.6387 17.1387C15.7129 17.0645 15.75 16.9766 15.75 16.875V16.5ZM16.5 15.75V14.625C16.5 14.4688 16.4707 14.3223 16.4121 14.1855C16.3535 14.0488 16.2734 13.9297 16.1719 13.8281C16.0703 13.7266 15.9512 13.6465 15.8145 13.5879C15.6777 13.5293 15.5312 13.5 15.375 13.5C15.2188 13.5 15.0723 13.5293 14.9355 13.5879C14.7988 13.6465 14.6797 13.7266 14.5781 13.8281C14.4766 13.9297 14.3965 14.0488 14.3379 14.1855C14.2793 14.3223 14.25 14.4688 14.25 14.625V15.75H16.5Z" fill="black" style="mix-blend-mode:overlay"/></svg>';
                        case 12:
                            return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="rgb(238,238,238)"/><path d="M7.875 12C7.97656 12 8.06445 12.0371 8.13867 12.1113C8.21289 12.1855 8.25 12.2734 8.25 12.375C8.25 12.4766 8.21289 12.5645 8.13867 12.6387C8.06445 12.7129 7.97656 12.75 7.875 12.75C7.77344 12.75 7.68555 12.7129 7.61133 12.6387C7.53711 12.5645 7.5 12.4766 7.5 12.375C7.5 12.2734 7.53711 12.1855 7.61133 12.1113C7.68555 12.0371 7.77344 12 7.875 12ZM15 8.25C15.418 8.25 15.8184 8.3457 16.2012 8.53711C16.5527 8.71289 16.8438 8.94531 17.0742 9.23438C17.3047 9.51953 17.4883 9.83398 17.625 10.1777C17.7656 10.5215 17.8633 10.8828 17.918 11.2617C17.9727 11.6406 18 12.0117 18 12.375C18 12.7383 17.9727 13.1094 17.918 13.4883C17.8633 13.8672 17.7656 14.2285 17.625 14.5723C17.4883 14.916 17.3047 15.2324 17.0742 15.5215C16.8438 15.8066 16.5527 16.0371 16.2012 16.2129C15.8184 16.4043 15.418 16.5 15 16.5H14.25V18H8.25V16.5H6V11.25C6 11.1445 6.01953 11.0469 6.05859 10.957C6.09766 10.8672 6.15039 10.7891 6.2168 10.7227C6.28711 10.6523 6.36719 10.5977 6.45703 10.5586C6.54688 10.5195 6.64453 10.5 6.75 10.5H8.25V6H14.25V8.25H15ZM9 10.5H13.5V6.75H9V10.5ZM13.5 14.25H9V17.25H13.5V14.25ZM15 13.5V11.25H6.75V15.75H8.25V13.5H15ZM15 15.75C15.2891 15.75 15.5449 15.6992 15.7676 15.5977C15.9941 15.4961 16.1895 15.3594 16.3535 15.1875C16.5215 15.0156 16.6621 14.8164 16.7754 14.5898C16.8926 14.3633 16.9844 14.125 17.0508 13.875C17.1211 13.625 17.1719 13.3711 17.2031 13.1133C17.2344 12.8555 17.25 12.6094 17.25 12.375C17.25 12.1406 17.2344 11.8945 17.2031 11.6367C17.1719 11.3789 17.1211 11.125 17.0508 10.875C16.9844 10.625 16.8926 10.3867 16.7754 10.1602C16.6621 9.93359 16.5215 9.73438 16.3535 9.5625C16.1895 9.39062 15.9941 9.25391 15.7676 9.15234C15.5449 9.05078 15.2891 9 15 9H14.625C14.5234 9 14.4355 9.03711 14.3613 9.11133C14.2871 9.18555 14.25 9.27344 14.25 9.375V10.125C14.25 10.2344 14.2754 10.3164 14.3262 10.3711C14.377 10.4219 14.4395 10.457 14.5137 10.4766C14.5918 10.4961 14.6738 10.5059 14.7598 10.5059C14.8496 10.502 14.9297 10.5 15 10.5C15.1055 10.5 15.2031 10.5195 15.293 10.5586C15.3828 10.5977 15.4609 10.6523 15.5273 10.7227C15.5977 10.7891 15.6523 10.8672 15.6914 10.957C15.7305 11.0469 15.75 11.1445 15.75 11.25V13.5C15.75 13.6055 15.7305 13.7031 15.6914 13.793C15.6523 13.8828 15.5977 13.9629 15.5273 14.0332C15.4609 14.0996 15.3828 14.1523 15.293 14.1914C15.2031 14.2305 15.1055 14.25 15 14.25C14.9297 14.25 14.8496 14.25 14.7598 14.25C14.6738 14.2461 14.5918 14.2539 14.5137 14.2734C14.4395 14.293 14.377 14.3301 14.3262 14.3848C14.2754 14.4355 14.25 14.5156 14.25 14.625V15.375C14.25 15.4766 14.2871 15.5645 14.3613 15.6387C14.4355 15.7129 14.5234 15.75 14.625 15.75H15Z" fill="black" fill-opacity="0.32"/><path d="M7.875 12C7.97656 12 8.06445 12.0371 8.13867 12.1113C8.21289 12.1855 8.25 12.2734 8.25 12.375C8.25 12.4766 8.21289 12.5645 8.13867 12.6387C8.06445 12.7129 7.97656 12.75 7.875 12.75C7.77344 12.75 7.68555 12.7129 7.61133 12.6387C7.53711 12.5645 7.5 12.4766 7.5 12.375C7.5 12.2734 7.53711 12.1855 7.61133 12.1113C7.68555 12.0371 7.77344 12 7.875 12ZM15 8.25C15.418 8.25 15.8184 8.3457 16.2012 8.53711C16.5527 8.71289 16.8438 8.94531 17.0742 9.23438C17.3047 9.51953 17.4883 9.83398 17.625 10.1777C17.7656 10.5215 17.8633 10.8828 17.918 11.2617C17.9727 11.6406 18 12.0117 18 12.375C18 12.7383 17.9727 13.1094 17.918 13.4883C17.8633 13.8672 17.7656 14.2285 17.625 14.5723C17.4883 14.916 17.3047 15.2324 17.0742 15.5215C16.8438 15.8066 16.5527 16.0371 16.2012 16.2129C15.8184 16.4043 15.418 16.5 15 16.5H14.25V18H8.25V16.5H6V11.25C6 11.1445 6.01953 11.0469 6.05859 10.957C6.09766 10.8672 6.15039 10.7891 6.2168 10.7227C6.28711 10.6523 6.36719 10.5977 6.45703 10.5586C6.54688 10.5195 6.64453 10.5 6.75 10.5H8.25V6H14.25V8.25H15ZM9 10.5H13.5V6.75H9V10.5ZM13.5 14.25H9V17.25H13.5V14.25ZM15 13.5V11.25H6.75V15.75H8.25V13.5H15ZM15 15.75C15.2891 15.75 15.5449 15.6992 15.7676 15.5977C15.9941 15.4961 16.1895 15.3594 16.3535 15.1875C16.5215 15.0156 16.6621 14.8164 16.7754 14.5898C16.8926 14.3633 16.9844 14.125 17.0508 13.875C17.1211 13.625 17.1719 13.3711 17.2031 13.1133C17.2344 12.8555 17.25 12.6094 17.25 12.375C17.25 12.1406 17.2344 11.8945 17.2031 11.6367C17.1719 11.3789 17.1211 11.125 17.0508 10.875C16.9844 10.625 16.8926 10.3867 16.7754 10.1602C16.6621 9.93359 16.5215 9.73438 16.3535 9.5625C16.1895 9.39062 15.9941 9.25391 15.7676 9.15234C15.5449 9.05078 15.2891 9 15 9H14.625C14.5234 9 14.4355 9.03711 14.3613 9.11133C14.2871 9.18555 14.25 9.27344 14.25 9.375V10.125C14.25 10.2344 14.2754 10.3164 14.3262 10.3711C14.377 10.4219 14.4395 10.457 14.5137 10.4766C14.5918 10.4961 14.6738 10.5059 14.7598 10.5059C14.8496 10.502 14.9297 10.5 15 10.5C15.1055 10.5 15.2031 10.5195 15.293 10.5586C15.3828 10.5977 15.4609 10.6523 15.5273 10.7227C15.5977 10.7891 15.6523 10.8672 15.6914 10.957C15.7305 11.0469 15.75 11.1445 15.75 11.25V13.5C15.75 13.6055 15.7305 13.7031 15.6914 13.793C15.6523 13.8828 15.5977 13.9629 15.5273 14.0332C15.4609 14.0996 15.3828 14.1523 15.293 14.1914C15.2031 14.2305 15.1055 14.25 15 14.25C14.9297 14.25 14.8496 14.25 14.7598 14.25C14.6738 14.2461 14.5918 14.2539 14.5137 14.2734C14.4395 14.293 14.377 14.3301 14.3262 14.3848C14.2754 14.4355 14.25 14.5156 14.25 14.625V15.375C14.25 15.4766 14.2871 15.5645 14.3613 15.6387C14.4355 15.7129 14.5234 15.75 14.625 15.75H15Z" fill="black" style="mix-blend-mode:overlay"/></svg>';
                        case 13:
                            return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="rgb(238,238,238)"/><path d="M18 8.25V15.75H6V8.25H18ZM6.83789 9L12 11.584L17.1621 9H6.83789ZM17.25 15V9.79688L12 12.416L6.75 9.79688V15H17.25Z" fill="black" fill-opacity="0.32"/><path d="M18 8.25V15.75H6V8.25H18ZM6.83789 9L12 11.584L17.1621 9H6.83789ZM17.25 15V9.79688L12 12.416L6.75 9.79688V15H17.25Z" fill="black" style="mix-blend-mode:overlay"/></svg>';
                        case 14:
                            return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="rgb(238,238,238)"/><path d="M8.25 12V11.25H15.75V12H8.25ZM11.25 10.5V9.75H15.75V10.5H11.25ZM15.75 12.75V13.5H8.25V12.75H15.75ZM15.75 8.25V9H11.25V8.25H15.75ZM8.25 15V14.25H15.75V15H8.25ZM6.75 6H17.25V18H6.75V10.5H7.5V17.25H16.5V6.75H6.75V6ZM7.38867 7.23633L7.92188 7.76367L7.43555 8.25H10.5V9H7.43555L7.92188 9.48633L7.38867 10.0137L6 8.625L7.38867 7.23633Z" fill="black" fill-opacity="0.32"/><path d="M8.25 12V11.25H15.75V12H8.25ZM11.25 10.5V9.75H15.75V10.5H11.25ZM15.75 12.75V13.5H8.25V12.75H15.75ZM15.75 8.25V9H11.25V8.25H15.75ZM8.25 15V14.25H15.75V15H8.25ZM6.75 6H17.25V18H6.75V10.5H7.5V17.25H16.5V6.75H6.75V6ZM7.38867 7.23633L7.92188 7.76367L7.43555 8.25H10.5V9H7.43555L7.92188 9.48633L7.38867 10.0137L6 8.625L7.38867 7.23633Z" fill="black" style="mix-blend-mode:overlay"/></svg>';
                        case 16:
                            return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="rgb(238,238,238)"/><path d="M15.75 6.75H18V17.25H6V6.75H8.25V6H9V6.75H15V6H15.75V6.75ZM8.25 7.5H6.75V9H17.25V7.5H15.75V8.25H15V7.5H9V8.25H8.25V7.5ZM6.75 16.5H17.25V9.75H6.75V16.5ZM11.25 13.5V10.5H12V13.5H11.25ZM11.25 15V14.25H12V15H11.25Z" fill="black" fill-opacity="0.32"/><path d="M15.75 6.75H18V17.25H6V6.75H8.25V6H9V6.75H15V6H15.75V6.75ZM8.25 7.5H6.75V9H17.25V7.5H15.75V8.25H15V7.5H9V8.25H8.25V7.5ZM6.75 16.5H17.25V9.75H6.75V16.5ZM11.25 13.5V10.5H12V13.5H11.25ZM11.25 15V14.25H12V15H11.25Z" fill="black" style="mix-blend-mode:overlay"/></svg>';
                        case 25:
                            return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="rgb(238,238,238)"/><path d="M12 6.70312L18 9.70312V17.25H6V9.70312L12 6.70312ZM17.1152 10.1016L12 7.54688L6.88477 10.1016L8.7832 12H15.2168L17.1152 10.1016ZM6.75 16.5H17.25V11.0332L15.5332 12.75H8.4668L6.75 11.0332V16.5Z" fill="black" fill-opacity="0.32"/><path d="M12 6.70312L18 9.70312V17.25H6V9.70312L12 6.70312ZM17.1152 10.1016L12 7.54688L6.88477 10.1016L8.7832 12H15.2168L17.1152 10.1016ZM6.75 16.5H17.25V11.0332L15.5332 12.75H8.4668L6.75 11.0332V16.5Z" fill="black" style="mix-blend-mode:overlay"/></svg>';
                        case 29:
                        case 30:
                        case 31:
                        case 32:
                        case 33:
                            return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="rgb(238,238,238)"/><path d="M12 7.49414C11.5859 7.49414 11.1953 7.57422 10.8281 7.73438C10.4648 7.89062 10.1465 8.10547 9.87305 8.37891C9.60352 8.64844 9.38867 8.9668 9.22852 9.33398C9.07227 9.69727 8.99414 10.0859 8.99414 10.5V15H13.1426L13.8926 15.75H13.5C13.5 15.957 13.4609 16.1523 13.3828 16.3359C13.3047 16.5156 13.1973 16.6738 13.0605 16.8105C12.9238 16.9473 12.7637 17.0547 12.5801 17.1328C12.4004 17.2109 12.207 17.25 12 17.25C11.793 17.25 11.5977 17.2109 11.4141 17.1328C11.2344 17.0547 11.0762 16.9473 10.9395 16.8105C10.8027 16.6738 10.6953 16.5156 10.6172 16.3359C10.5391 16.1523 10.5 15.957 10.5 15.75H7.5V15H8.25586V10.5C8.25586 10.1562 8.30078 9.82422 8.39062 9.50391C8.48047 9.18359 8.60547 8.88477 8.76562 8.60742C8.92969 8.33008 9.125 8.07812 9.35156 7.85156C9.57812 7.62109 9.83008 7.42578 10.1074 7.26562C10.3848 7.10156 10.6836 6.97461 11.0039 6.88477C11.3242 6.79492 11.6562 6.75 12 6.75C12.3438 6.75 12.6758 6.79492 12.9961 6.88477C13.3164 6.97461 13.6152 7.10156 13.8926 7.26562C14.1699 7.42578 14.4219 7.62109 14.6484 7.85156C14.8789 8.07812 15.0742 8.33008 15.2344 8.60742C15.3984 8.88477 15.5254 9.18359 15.6152 9.50391C15.7051 9.82422 15.75 10.1562 15.75 10.5V13.8926L15.0059 13.1543V10.5C15.0059 10.0859 14.9258 9.69727 14.7656 9.33398C14.6094 8.9668 14.3945 8.64844 14.1211 8.37891C13.8516 8.10547 13.5332 7.89062 13.166 7.73438C12.8027 7.57422 12.4141 7.49414 12 7.49414ZM11.2969 15.75C11.2969 15.8477 11.3145 15.9395 11.3496 16.0254C11.3887 16.1074 11.4395 16.1816 11.502 16.248C11.5684 16.3105 11.6426 16.3613 11.7246 16.4004C11.8105 16.4355 11.9023 16.4531 12 16.4531C12.0977 16.4531 12.1875 16.4355 12.2695 16.4004C12.3555 16.3613 12.4297 16.3105 12.4922 16.248C12.5586 16.1816 12.6094 16.1074 12.6445 16.0254C12.6836 15.9395 12.7031 15.8477 12.7031 15.75H11.2969ZM16.6582 16.125L17.9824 17.4551L17.4551 17.9824L16.125 16.6582L14.7949 17.9883L14.2676 17.4551L15.5977 16.125L14.2676 14.7949L14.7949 14.2676L16.125 15.5977L17.4551 14.2676L17.9824 14.8008L16.6582 16.125Z" fill="black" fill-opacity="0.32"/><path d="M12 7.49414C11.5859 7.49414 11.1953 7.57422 10.8281 7.73438C10.4648 7.89062 10.1465 8.10547 9.87305 8.37891C9.60352 8.64844 9.38867 8.9668 9.22852 9.33398C9.07227 9.69727 8.99414 10.0859 8.99414 10.5V15H13.1426L13.8926 15.75H13.5C13.5 15.957 13.4609 16.1523 13.3828 16.3359C13.3047 16.5156 13.1973 16.6738 13.0605 16.8105C12.9238 16.9473 12.7637 17.0547 12.5801 17.1328C12.4004 17.2109 12.207 17.25 12 17.25C11.793 17.25 11.5977 17.2109 11.4141 17.1328C11.2344 17.0547 11.0762 16.9473 10.9395 16.8105C10.8027 16.6738 10.6953 16.5156 10.6172 16.3359C10.5391 16.1523 10.5 15.957 10.5 15.75H7.5V15H8.25586V10.5C8.25586 10.1562 8.30078 9.82422 8.39062 9.50391C8.48047 9.18359 8.60547 8.88477 8.76562 8.60742C8.92969 8.33008 9.125 8.07812 9.35156 7.85156C9.57812 7.62109 9.83008 7.42578 10.1074 7.26562C10.3848 7.10156 10.6836 6.97461 11.0039 6.88477C11.3242 6.79492 11.6562 6.75 12 6.75C12.3438 6.75 12.6758 6.79492 12.9961 6.88477C13.3164 6.97461 13.6152 7.10156 13.8926 7.26562C14.1699 7.42578 14.4219 7.62109 14.6484 7.85156C14.8789 8.07812 15.0742 8.33008 15.2344 8.60742C15.3984 8.88477 15.5254 9.18359 15.6152 9.50391C15.7051 9.82422 15.75 10.1562 15.75 10.5V13.8926L15.0059 13.1543V10.5C15.0059 10.0859 14.9258 9.69727 14.7656 9.33398C14.6094 8.9668 14.3945 8.64844 14.1211 8.37891C13.8516 8.10547 13.5332 7.89062 13.166 7.73438C12.8027 7.57422 12.4141 7.49414 12 7.49414ZM11.2969 15.75C11.2969 15.8477 11.3145 15.9395 11.3496 16.0254C11.3887 16.1074 11.4395 16.1816 11.502 16.248C11.5684 16.3105 11.6426 16.3613 11.7246 16.4004C11.8105 16.4355 11.9023 16.4531 12 16.4531C12.0977 16.4531 12.1875 16.4355 12.2695 16.4004C12.3555 16.3613 12.4297 16.3105 12.4922 16.248C12.5586 16.1816 12.6094 16.1074 12.6445 16.0254C12.6836 15.9395 12.7031 15.8477 12.7031 15.75H11.2969ZM16.6582 16.125L17.9824 17.4551L17.4551 17.9824L16.125 16.6582L14.7949 17.9883L14.2676 17.4551L15.5977 16.125L14.2676 14.7949L14.7949 14.2676L16.125 15.5977L17.4551 14.2676L17.9824 14.8008L16.6582 16.125Z" fill="black" style="mix-blend-mode:overlay"/></svg>';
                        case 34:
                        case 35:
                            return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="rgb(255,102,102)"/><path d="M12.75 14.25H11.25V6.75H12.75V14.25ZM12.75 17.25H11.25V15.75H12.75V17.25Z" fill="black" fill-opacity="0.32"/><path d="M12.75 14.25H11.25V6.75H12.75V14.25ZM12.75 17.25H11.25V15.75H12.75V17.25Z" fill="black" style="mix-blend-mode:overlay"/></svg>';
                        case 107:
                            return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="rgb(238,238,238)"/><path d="M16.5 10.5C16.7031 10.5 16.8965 10.541 17.0801 10.623C17.2637 10.7012 17.4219 10.8086 17.5547 10.9453C17.6914 11.0781 17.7988 11.2363 17.877 11.4199C17.959 11.6035 18 11.7969 18 12C18 12.207 17.959 12.4023 17.877 12.5859C17.7988 12.7656 17.6914 12.9238 17.5547 13.0605C17.4219 13.1934 17.2637 13.3008 17.0801 13.3828C16.8965 13.4609 16.7031 13.5 16.5 13.5H13.875L11.625 18H9L10.5 13.5H9L8.625 14.25H6L6.75 12L6 9.75H8.625L9 10.5H10.5L9 6H11.625L13.875 10.5H16.5ZM16.5 12.75C16.6055 12.75 16.7031 12.7305 16.793 12.6914C16.8828 12.6523 16.9609 12.5996 17.0273 12.5332C17.0977 12.4629 17.1523 12.3828 17.1914 12.293C17.2305 12.2031 17.25 12.1055 17.25 12C17.25 11.8945 17.2305 11.7969 17.1914 11.707C17.1523 11.6172 17.0977 11.5391 17.0273 11.4727C16.9609 11.4023 16.8828 11.3477 16.793 11.3086C16.7031 11.2695 16.6055 11.25 16.5 11.25H13.4121C13.0254 10.5 12.6484 9.75195 12.2812 9.00586C11.9141 8.25586 11.541 7.50391 11.1621 6.75H10.043C10.293 7.50391 10.541 8.25586 10.7871 9.00586C11.0332 9.75195 11.2852 10.5 11.543 11.25H8.53711L8.16211 10.5H7.04297C7.125 10.75 7.20508 11 7.2832 11.25C7.36523 11.5 7.45117 11.75 7.54102 12C7.45117 12.25 7.36523 12.5 7.2832 12.75C7.20508 13 7.125 13.25 7.04297 13.5H8.16211L8.53711 12.75H11.543C11.2852 13.5 11.0332 14.25 10.7871 15C10.541 15.7461 10.293 16.4961 10.043 17.25H11.1621C11.541 16.4961 11.9141 15.7461 12.2812 15C12.6484 14.25 13.0254 13.5 13.4121 12.75H16.5Z" fill="black" fill-opacity="0.32"/><path d="M16.5 10.5C16.7031 10.5 16.8965 10.541 17.0801 10.623C17.2637 10.7012 17.4219 10.8086 17.5547 10.9453C17.6914 11.0781 17.7988 11.2363 17.877 11.4199C17.959 11.6035 18 11.7969 18 12C18 12.207 17.959 12.4023 17.877 12.5859C17.7988 12.7656 17.6914 12.9238 17.5547 13.0605C17.4219 13.1934 17.2637 13.3008 17.0801 13.3828C16.8965 13.4609 16.7031 13.5 16.5 13.5H13.875L11.625 18H9L10.5 13.5H9L8.625 14.25H6L6.75 12L6 9.75H8.625L9 10.5H10.5L9 6H11.625L13.875 10.5H16.5ZM16.5 12.75C16.6055 12.75 16.7031 12.7305 16.793 12.6914C16.8828 12.6523 16.9609 12.5996 17.0273 12.5332C17.0977 12.4629 17.1523 12.3828 17.1914 12.293C17.2305 12.2031 17.25 12.1055 17.25 12C17.25 11.8945 17.2305 11.7969 17.1914 11.707C17.1523 11.6172 17.0977 11.5391 17.0273 11.4727C16.9609 11.4023 16.8828 11.3477 16.793 11.3086C16.7031 11.2695 16.6055 11.25 16.5 11.25H13.4121C13.0254 10.5 12.6484 9.75195 12.2812 9.00586C11.9141 8.25586 11.541 7.50391 11.1621 6.75H10.043C10.293 7.50391 10.541 8.25586 10.7871 9.00586C11.0332 9.75195 11.2852 10.5 11.543 11.25H8.53711L8.16211 10.5H7.04297C7.125 10.75 7.20508 11 7.2832 11.25C7.36523 11.5 7.45117 11.75 7.54102 12C7.45117 12.25 7.36523 12.5 7.2832 12.75C7.20508 13 7.125 13.25 7.04297 13.5H8.16211L8.53711 12.75H11.543C11.2852 13.5 11.0332 14.25 10.7871 15C10.541 15.7461 10.293 16.4961 10.043 17.25H11.1621C11.541 16.4961 11.9141 15.7461 12.2812 15C12.6484 14.25 13.0254 13.5 13.4121 12.75H16.5Z" fill="black" style="mix-blend-mode:overlay"/></svg>';
                        default:
                            return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="rgb(238,238,238)"/><path d="M16.5 15V15.75H13.5C13.5 15.957 13.4609 16.1523 13.3828 16.3359C13.3047 16.5156 13.1973 16.6738 13.0605 16.8105C12.9238 16.9473 12.7637 17.0547 12.5801 17.1328C12.4004 17.2109 12.207 17.25 12 17.25C11.793 17.25 11.5977 17.2109 11.4141 17.1328C11.2344 17.0547 11.0762 16.9473 10.9395 16.8105C10.8027 16.6738 10.6953 16.5156 10.6172 16.3359C10.5391 16.1523 10.5 15.957 10.5 15.75H7.5V15H8.25V10.5C8.25 10.1562 8.29492 9.82422 8.38477 9.50391C8.47461 9.18359 8.59961 8.88477 8.75977 8.60742C8.92383 8.33008 9.11914 8.07812 9.3457 7.85156C9.57617 7.62109 9.83008 7.42578 10.1074 7.26562C10.3848 7.10156 10.6836 6.97461 11.0039 6.88477C11.3242 6.79492 11.6562 6.75 12 6.75C12.3438 6.75 12.6758 6.79492 12.9961 6.88477C13.3164 6.97461 13.6152 7.10156 13.8926 7.26562C14.1699 7.42578 14.4219 7.62109 14.6484 7.85156C14.8789 8.07812 15.0742 8.33008 15.2344 8.60742C15.3984 8.88477 15.5254 9.18359 15.6152 9.50391C15.7051 9.82422 15.75 10.1562 15.75 10.5V15H16.5ZM15 15V10.5C15 10.0859 14.9199 9.69727 14.7598 9.33398C14.6035 8.9707 14.3887 8.6543 14.1152 8.38477C13.8457 8.11133 13.5293 7.89648 13.166 7.74023C12.8027 7.58008 12.4141 7.5 12 7.5C11.5859 7.5 11.1973 7.58008 10.834 7.74023C10.4707 7.89648 10.1523 8.11133 9.87891 8.38477C9.60938 8.6543 9.39453 8.9707 9.23438 9.33398C9.07812 9.69727 9 10.0859 9 10.5V15H15ZM12 16.5C12.1055 16.5 12.2031 16.4805 12.293 16.4414C12.3828 16.4023 12.4609 16.3496 12.5273 16.2832C12.5977 16.2129 12.6523 16.1328 12.6914 16.043C12.7305 15.9531 12.75 15.8555 12.75 15.75H11.25C11.25 15.8555 11.2695 15.9531 11.3086 16.043C11.3477 16.1328 11.4004 16.2129 11.4668 16.2832C11.5371 16.3496 11.6172 16.4023 11.707 16.4414C11.7969 16.4805 11.8945 16.5 12 16.5Z" fill="black" fill-opacity="0.32"/><path d="M16.5 15V15.75H13.5C13.5 15.957 13.4609 16.1523 13.3828 16.3359C13.3047 16.5156 13.1973 16.6738 13.0605 16.8105C12.9238 16.9473 12.7637 17.0547 12.5801 17.1328C12.4004 17.2109 12.207 17.25 12 17.25C11.793 17.25 11.5977 17.2109 11.4141 17.1328C11.2344 17.0547 11.0762 16.9473 10.9395 16.8105C10.8027 16.6738 10.6953 16.5156 10.6172 16.3359C10.5391 16.1523 10.5 15.957 10.5 15.75H7.5V15H8.25V10.5C8.25 10.1562 8.29492 9.82422 8.38477 9.50391C8.47461 9.18359 8.59961 8.88477 8.75977 8.60742C8.92383 8.33008 9.11914 8.07812 9.3457 7.85156C9.57617 7.62109 9.83008 7.42578 10.1074 7.26562C10.3848 7.10156 10.6836 6.97461 11.0039 6.88477C11.3242 6.79492 11.6562 6.75 12 6.75C12.3438 6.75 12.6758 6.79492 12.9961 6.88477C13.3164 6.97461 13.6152 7.10156 13.8926 7.26562C14.1699 7.42578 14.4219 7.62109 14.6484 7.85156C14.8789 8.07812 15.0742 8.33008 15.2344 8.60742C15.3984 8.88477 15.5254 9.18359 15.6152 9.50391C15.7051 9.82422 15.75 10.1562 15.75 10.5V15H16.5ZM15 15V10.5C15 10.0859 14.9199 9.69727 14.7598 9.33398C14.6035 8.9707 14.3887 8.6543 14.1152 8.38477C13.8457 8.11133 13.5293 7.89648 13.166 7.74023C12.8027 7.58008 12.4141 7.5 12 7.5C11.5859 7.5 11.1973 7.58008 10.834 7.74023C10.4707 7.89648 10.1523 8.11133 9.87891 8.38477C9.60938 8.6543 9.39453 8.9707 9.23438 9.33398C9.07812 9.69727 9 10.0859 9 10.5V15H15ZM12 16.5C12.1055 16.5 12.2031 16.4805 12.293 16.4414C12.3828 16.4023 12.4609 16.3496 12.5273 16.2832C12.5977 16.2129 12.6523 16.1328 12.6914 16.043C12.7305 15.9531 12.75 15.8555 12.75 15.75H11.25C11.25 15.8555 11.2695 15.9531 11.3086 16.043C11.3477 16.1328 11.4004 16.2129 11.4668 16.2832C11.5371 16.3496 11.6172 16.4023 11.707 16.4414C11.7969 16.4805 11.8945 16.5 12 16.5Z" fill="black" style="mix-blend-mode:overlay"/></svg>';
                    }
                };
                IconFactory.GetCardActionIcon = function (commandName) {
                    if (IconFactory.cardActionIconDict[commandName]) {
                        return "data:image/svg+xml;utf8," + IconFactory.cardActionIconDict[commandName];
                    }
                    return "data:image/svg+xml;utf8," + IconFactory.cardActionPlaceHolderIcon;
                };
                IconFactory.cardActionIconDict = {
                    "Mscrm.HomepageGrid.actioncard.Open": '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 8C20.1354 8 20.263 8.02604 20.3828 8.07812C20.5078 8.13021 20.6146 8.20312 20.7031 8.29688C20.7969 8.38542 20.8698 8.49219 20.9219 8.61719C20.974 8.73698 21 8.86458 21 9V16.25C21 16.4115 21.0234 16.5521 21.0703 16.6719C21.1224 16.7917 21.1849 16.9062 21.2578 17.0156C21.3307 17.1198 21.4115 17.2266 21.5 17.3359C21.5885 17.4401 21.6693 17.5573 21.7422 17.6875C21.8151 17.8177 21.875 17.9688 21.9219 18.1406C21.974 18.3125 22 18.5156 22 18.75V21C22 21.1354 21.974 21.2656 21.9219 21.3906C21.8698 21.5104 21.7969 21.6172 21.7031 21.7109C21.6146 21.7995 21.5078 21.8698 21.3828 21.9219C21.263 21.974 21.1354 22 21 22H14V23C14 23.2031 13.9427 23.388 13.8281 23.5547C13.7188 23.7214 13.5703 23.8438 13.3828 23.9219C13.263 23.974 13.1354 24 13 24C12.724 24 12.487 23.901 12.2891 23.7031L10 21.4141V8H20ZM13 20.25C13 20.0156 13.0234 19.8151 13.0703 19.6484C13.1224 19.4766 13.1849 19.3255 13.2578 19.1953C13.3307 19.0599 13.4115 18.9401 13.5 18.8359C13.5885 18.7318 13.6693 18.6276 13.7422 18.5234C13.8151 18.4141 13.875 18.2995 13.9219 18.1797C13.974 18.0547 14 17.9115 14 17.75V12.7109L11 9.71094V21L13 23V20.25ZM21 18.75C21 18.5885 20.974 18.4479 20.9219 18.3281C20.875 18.2083 20.8151 18.0964 20.7422 17.9922C20.6693 17.8828 20.5885 17.776 20.5 17.6719C20.4115 17.5625 20.3307 17.4427 20.2578 17.3125C20.1849 17.1823 20.1224 17.0312 20.0703 16.8594C20.0234 16.6875 20 16.4844 20 16.25V9H11.7109L14.7109 12C14.8047 12.0938 14.875 12.2031 14.9219 12.3281C14.974 12.4479 15 12.5755 15 12.7109V17.75C15 17.9844 14.974 18.1875 14.9219 18.3594C14.875 18.526 14.8151 18.6771 14.7422 18.8125C14.6693 18.9427 14.5885 19.0599 14.5 19.1641C14.4115 19.2682 14.3307 19.375 14.2578 19.4844C14.1849 19.5885 14.1224 19.7031 14.0703 19.8281C14.0234 19.9479 14 20.0885 14 20.25V21H21V18.75Z" fill="rgb(34,102,227)"/></svg>',
                    "Mscrm.Modern.OpenEmailCommand": '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 8.9375L24 12.9375V23H8V12.9375L16 8.9375ZM22.8203 13.4688L16 10.0625L9.17969 13.4688L11.7109 16H20.2891L22.8203 13.4688ZM9 22H23V14.7109L20.7109 17H11.2891L9 14.7109V22Z" fill="rgb(34,102,227)"/></svg>',
                    "Mscrm.HomepageGrid.actioncard.CreateNewMeetingCardCommand": '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 14V21H18V22H8V10H11V9H12V10H18V9H19V10H22V18H21V14H9ZM11 11H9V13H21V11H19V12H18V11H12V12H11V11ZM22 21H24V22H22V24H21V22H19V21H21V19H22V21Z" fill="rgb(34,102,227)"/></svg>',
                    "Mscrm.Modern.CreateEmailReplyDraftCommand": '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 11V19.4531C8.15104 19.3333 8.3099 19.2318 8.47656 19.1484C8.64323 19.0599 8.81771 18.9844 9 18.9219V12.5547L16 16.0625L23 12.5547V20H15V21H24V11H8ZM16 14.9375L10.1172 12H21.8828L16 14.9375ZM12.2891 20C12.0286 20 11.7396 19.9948 11.4219 19.9844C11.1094 19.9688 10.7943 19.9688 10.4766 19.9844C10.1589 20 9.85156 20.0391 9.55469 20.1016C9.25781 20.1589 8.99219 20.263 8.75781 20.4141C8.52865 20.5599 8.34375 20.7604 8.20312 21.0156C8.06771 21.2708 8 21.599 8 22C8 22.276 8.05208 22.5365 8.15625 22.7812C8.26562 23.0208 8.40885 23.2318 8.58594 23.4141C8.76823 23.5911 8.98177 23.7344 9.22656 23.8438C9.47135 23.9479 9.72917 24 10 24V23C9.85938 23 9.72917 22.974 9.60938 22.9219C9.48958 22.8698 9.38281 22.7995 9.28906 22.7109C9.20052 22.6172 9.13021 22.5104 9.07812 22.3906C9.02604 22.2708 9 22.1406 9 22C9 21.8594 9.02604 21.7292 9.07812 21.6094C9.13021 21.4896 9.20052 21.3854 9.28906 21.2969C9.38281 21.2031 9.48958 21.1302 9.60938 21.0781C9.72917 21.026 9.85938 21 10 21H12.2891L11.0234 22.2734L11.7266 22.9766L14.2031 20.5L11.7266 18.0234L11.0234 18.7266L12.2891 20Z" fill="rgb(34,102,227)"/></svg>',
                    "Mscrm.HomepageGrid.actioncard.SendEmailWebClientCommand": '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.6016 15.5L8.14062 22.3984L9.85938 15.5L8.14062 8.60156L23.6016 15.5ZM9.60938 10.3516L10.7734 15.0234H20.0703L9.60938 10.3516ZM10.7578 16.0234L9.60938 20.6484L19.9766 16.0234H10.7578Z" fill="rgb(34,102,227)"/></svg>',
                    "Mscrm.HomepageGrid.actioncard.DoThisAutomaticallyCommand": '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.3516 12.3516L14 20.7109L9.64844 16.3516L10.3516 15.6484L14 19.2891L21.6484 11.6484L22.3516 12.3516Z" fill="rgb(34,102,227)"/></svg>',
                    "Mscrm.HomepageGrid.actioncard.AddAsStakeHolderCommand": '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 20H19.8984C19.7786 19.4167 19.5677 18.8802 19.2656 18.3906C18.9635 17.901 18.5938 17.4792 18.1562 17.125C17.724 16.7708 17.237 16.4948 16.6953 16.2969C16.1589 16.099 15.5938 16 15 16C14.5417 16 14.099 16.0599 13.6719 16.1797C13.2448 16.2995 12.8464 16.4688 12.4766 16.6875C12.1068 16.901 11.7682 17.1615 11.4609 17.4688C11.1589 17.7708 10.8984 18.1068 10.6797 18.4766C10.4661 18.8464 10.2995 19.2448 10.1797 19.6719C10.0599 20.099 10 20.5417 10 21H9C9 20.375 9.09115 19.7734 9.27344 19.1953C9.46094 18.6172 9.72396 18.0833 10.0625 17.5938C10.401 17.1042 10.8073 16.6693 11.2812 16.2891C11.7604 15.9089 12.2917 15.6094 12.875 15.3906C12.2865 15.0052 11.8255 14.5208 11.4922 13.9375C11.1641 13.3542 11 12.7083 11 12C11 11.4479 11.1042 10.9297 11.3125 10.4453C11.5208 9.95573 11.8047 9.53125 12.1641 9.17188C12.5286 8.80729 12.9531 8.52083 13.4375 8.3125C13.9271 8.10417 14.4479 8 15 8C15.5521 8 16.0703 8.10417 16.5547 8.3125C17.0443 8.52083 17.4688 8.80729 17.8281 9.17188C18.1927 9.53125 18.4792 9.95573 18.6875 10.4453C18.8958 10.9297 19 11.4479 19 12C19 12.3438 18.9557 12.6797 18.8672 13.0078C18.7839 13.3359 18.6615 13.6458 18.5 13.9375C18.3385 14.2292 18.1406 14.5 17.9062 14.75C17.6771 14.9948 17.4167 15.2083 17.125 15.3906C17.7083 15.6146 18.2448 15.9245 18.7344 16.3203C19.2292 16.7109 19.651 17.1667 20 17.6875V20ZM12 12C12 12.4167 12.0781 12.8073 12.2344 13.1719C12.3906 13.5312 12.6042 13.849 12.875 14.125C13.151 14.3958 13.4688 14.6094 13.8281 14.7656C14.1927 14.9219 14.5833 15 15 15C15.4115 15 15.7995 14.9219 16.1641 14.7656C16.5286 14.6094 16.8464 14.3958 17.1172 14.125C17.3932 13.849 17.6094 13.5312 17.7656 13.1719C17.9219 12.8073 18 12.4167 18 12C18 11.5885 17.9219 11.2005 17.7656 10.8359C17.6094 10.4714 17.3932 10.1536 17.1172 9.88281C16.8464 9.60677 16.5286 9.39062 16.1641 9.23438C15.7995 9.07812 15.4115 9 15 9C14.5833 9 14.1927 9.07812 13.8281 9.23438C13.4688 9.39062 13.151 9.60677 12.875 9.88281C12.6042 10.1536 12.3906 10.4714 12.2344 10.8359C12.0781 11.2005 12 11.5885 12 12ZM22 21H24V22H22V24H21V22H19V21H21V19H22V21Z" fill="rgb(34,102,227)"/></svg>',
                    "Mscrm.HomepageGrid.actioncard.CallCommand": '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.5547 17.4766C20.7839 17.4766 21.0026 17.5208 21.2109 17.6094C21.4245 17.6927 21.612 17.8151 21.7734 17.9766L23.4922 19.6953C23.6536 19.8568 23.776 20.0443 23.8594 20.2578C23.9479 20.4661 23.9922 20.6849 23.9922 20.9141C23.9922 21.1432 23.9479 21.3646 23.8594 21.5781C23.776 21.7865 23.6536 21.9714 23.4922 22.1328L23.3828 22.2422C23.1016 22.5234 22.8438 22.7734 22.6094 22.9922C22.375 23.2109 22.1302 23.3958 21.875 23.5469C21.6198 23.6927 21.3359 23.8047 21.0234 23.8828C20.7109 23.9609 20.3385 24 19.9062 24C19.2552 24 18.5859 23.8984 17.8984 23.6953C17.2109 23.4922 16.526 23.2109 15.8438 22.8516C15.1667 22.4922 14.5 22.0651 13.8438 21.5703C13.1927 21.0755 12.5755 20.5365 11.9922 19.9531C11.4141 19.3646 10.8802 18.7448 10.3906 18.0938C9.90104 17.4375 9.47917 16.7708 9.125 16.0938C8.77083 15.4115 8.49479 14.7318 8.29688 14.0547C8.09896 13.3776 8 12.7214 8 12.0859C8 11.6536 8.03646 11.2839 8.10938 10.9766C8.1875 10.6693 8.29948 10.388 8.44531 10.1328C8.59635 9.8776 8.77865 9.63542 8.99219 9.40625C9.21094 9.17188 9.46094 8.91406 9.74219 8.63281L9.86719 8.50781C10.0286 8.34635 10.2135 8.22135 10.4219 8.13281C10.6302 8.04427 10.8516 8 11.0859 8C11.3151 8 11.5339 8.04427 11.7422 8.13281C11.9557 8.22135 12.1432 8.34635 12.3047 8.50781L14.0234 10.2266C14.1849 10.388 14.3073 10.5755 14.3906 10.7891C14.4792 10.9974 14.5234 11.2161 14.5234 11.4453C14.5234 11.6745 14.4844 11.8802 14.4062 12.0625C14.3281 12.2396 14.2318 12.401 14.1172 12.5469C14.0026 12.6927 13.875 12.8255 13.7344 12.9453C13.599 13.0651 13.474 13.1823 13.3594 13.2969C13.2448 13.4115 13.1484 13.5286 13.0703 13.6484C12.9922 13.763 12.9531 13.888 12.9531 14.0234C12.9531 14.2214 13.0234 14.3906 13.1641 14.5312L17.4688 18.8359C17.6094 18.9766 17.7786 19.0469 17.9766 19.0469C18.112 19.0469 18.237 19.0078 18.3516 18.9297C18.4714 18.8516 18.5885 18.7552 18.7031 18.6406C18.8177 18.526 18.9349 18.401 19.0547 18.2656C19.1745 18.125 19.3073 17.9974 19.4531 17.8828C19.599 17.7682 19.7604 17.6719 19.9375 17.5938C20.1198 17.5156 20.3255 17.4766 20.5547 17.4766ZM19.9062 23C20.2812 23 20.5938 22.9661 20.8438 22.8984C21.099 22.8255 21.3281 22.724 21.5312 22.5938C21.7344 22.4583 21.9323 22.2917 22.125 22.0938C22.3177 21.8958 22.5391 21.6719 22.7891 21.4219C22.9297 21.2812 23 21.112 23 20.9141C23 20.8203 22.9609 20.7109 22.8828 20.5859C22.8099 20.4557 22.7135 20.3203 22.5938 20.1797C22.474 20.0391 22.3385 19.8958 22.1875 19.75C22.0417 19.599 21.8958 19.4583 21.75 19.3281C21.6094 19.1927 21.4766 19.0703 21.3516 18.9609C21.2318 18.8464 21.138 18.7552 21.0703 18.6875C20.9297 18.5469 20.7578 18.4766 20.5547 18.4766C20.4193 18.4766 20.2943 18.5156 20.1797 18.5938C20.0651 18.6719 19.9505 18.7682 19.8359 18.8828C19.7214 18.9974 19.6016 19.125 19.4766 19.2656C19.3568 19.401 19.224 19.526 19.0781 19.6406C18.9323 19.7552 18.7682 19.8516 18.5859 19.9297C18.4089 20.0078 18.2057 20.0469 17.9766 20.0469C17.7474 20.0469 17.526 20.0052 17.3125 19.9219C17.1042 19.8333 16.9193 19.7083 16.7578 19.5469L12.4531 15.2422C12.2917 15.0807 12.1667 14.8958 12.0781 14.6875C11.9948 14.474 11.9531 14.2526 11.9531 14.0234C11.9531 13.7943 11.9922 13.5911 12.0703 13.4141C12.1484 13.2318 12.2448 13.0677 12.3594 12.9219C12.474 12.776 12.599 12.6432 12.7344 12.5234C12.875 12.3984 13.0026 12.2786 13.1172 12.1641C13.2318 12.0495 13.3281 11.9349 13.4062 11.8203C13.4844 11.7057 13.5234 11.5807 13.5234 11.4453C13.5234 11.2422 13.4531 11.0703 13.3125 10.9297C13.2448 10.862 13.1536 10.7682 13.0391 10.6484C12.9297 10.5234 12.8073 10.3906 12.6719 10.25C12.5417 10.1042 12.401 9.95833 12.25 9.8125C12.1042 9.66146 11.9609 9.52604 11.8203 9.40625C11.6797 9.28646 11.5443 9.1901 11.4141 9.11719C11.2891 9.03906 11.1797 9 11.0859 9C10.888 9 10.7188 9.07031 10.5781 9.21094C10.3281 9.46094 10.1042 9.68229 9.90625 9.875C9.71354 10.0677 9.54688 10.2656 9.40625 10.4688C9.27083 10.6719 9.16667 10.901 9.09375 11.1562C9.02604 11.4062 8.99219 11.7161 8.99219 12.0859C8.99219 12.6693 9.08594 13.2708 9.27344 13.8906C9.46615 14.5104 9.72917 15.1302 10.0625 15.75C10.401 16.3698 10.7995 16.9818 11.2578 17.5859C11.7161 18.1849 12.2161 18.7526 12.7578 19.2891C13.2995 19.8255 13.8698 20.3203 14.4688 20.7734C15.0729 21.2266 15.6823 21.6198 16.2969 21.9531C16.9167 22.2812 17.5312 22.5391 18.1406 22.7266C18.7552 22.9089 19.3438 23 19.9062 23Z" fill="rgb(34,102,227)"/></svg>',
                    "Mscrm.HomepageGrid.actioncard.OpenRecipientCommand": '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 8C20.1354 8 20.263 8.02604 20.3828 8.07812C20.5078 8.13021 20.6146 8.20312 20.7031 8.29688C20.7969 8.38542 20.8698 8.49219 20.9219 8.61719C20.974 8.73698 21 8.86458 21 9V16.25C21 16.4115 21.0234 16.5521 21.0703 16.6719C21.1224 16.7917 21.1849 16.9062 21.2578 17.0156C21.3307 17.1198 21.4115 17.2266 21.5 17.3359C21.5885 17.4401 21.6693 17.5573 21.7422 17.6875C21.8151 17.8177 21.875 17.9688 21.9219 18.1406C21.974 18.3125 22 18.5156 22 18.75V21C22 21.1354 21.974 21.2656 21.9219 21.3906C21.8698 21.5104 21.7969 21.6172 21.7031 21.7109C21.6146 21.7995 21.5078 21.8698 21.3828 21.9219C21.263 21.974 21.1354 22 21 22H14V23C14 23.2031 13.9427 23.388 13.8281 23.5547C13.7188 23.7214 13.5703 23.8438 13.3828 23.9219C13.263 23.974 13.1354 24 13 24C12.724 24 12.487 23.901 12.2891 23.7031L10 21.4141V8H20ZM13 20.25C13 20.0156 13.0234 19.8151 13.0703 19.6484C13.1224 19.4766 13.1849 19.3255 13.2578 19.1953C13.3307 19.0599 13.4115 18.9401 13.5 18.8359C13.5885 18.7318 13.6693 18.6276 13.7422 18.5234C13.8151 18.4141 13.875 18.2995 13.9219 18.1797C13.974 18.0547 14 17.9115 14 17.75V12.7109L11 9.71094V21L13 23V20.25ZM21 18.75C21 18.5885 20.974 18.4479 20.9219 18.3281C20.875 18.2083 20.8151 18.0964 20.7422 17.9922C20.6693 17.8828 20.5885 17.776 20.5 17.6719C20.4115 17.5625 20.3307 17.4427 20.2578 17.3125C20.1849 17.1823 20.1224 17.0312 20.0703 16.8594C20.0234 16.6875 20 16.4844 20 16.25V9H11.7109L14.7109 12C14.8047 12.0938 14.875 12.2031 14.9219 12.3281C14.974 12.4479 15 12.5755 15 12.7109V17.75C15 17.9844 14.974 18.1875 14.9219 18.3594C14.875 18.526 14.8151 18.6771 14.7422 18.8125C14.6693 18.9427 14.5885 19.0599 14.5 19.1641C14.4115 19.2682 14.3307 19.375 14.2578 19.4844C14.1849 19.5885 14.1224 19.7031 14.0703 19.8281C14.0234 19.9479 14 20.0885 14 20.25V21H21V18.75Z" fill="rgb(34,102,227)"/></svg>',
                    "Mscrm.HomepageGrid.actioncard.CompletePhoneCallCommand": '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.9531 18.2109C19.1562 18.2109 19.3542 18.25 19.5469 18.3281C19.7396 18.4062 19.9089 18.5182 20.0547 18.6641L21.5469 20.1562C21.6927 20.3021 21.8047 20.4714 21.8828 20.6641C21.9609 20.8568 22 21.0547 22 21.2578C22 21.4609 21.9609 21.6589 21.8828 21.8516C21.8047 22.0443 21.6927 22.2135 21.5469 22.3594L20.7969 23.1094C20.4688 23.4323 20.0964 23.6615 19.6797 23.7969C19.263 23.9323 18.8307 24 18.3828 24C17.8255 24 17.2474 23.9141 16.6484 23.7422C16.0547 23.5651 15.4609 23.3203 14.8672 23.0078C14.2786 22.6953 13.6979 22.3255 13.125 21.8984C12.5573 21.4714 12.0182 21.0052 11.5078 20.5C11.0026 19.9896 10.5339 19.4505 10.1016 18.8828C9.67448 18.3099 9.30469 17.7292 8.99219 17.1406C8.67969 16.5469 8.4349 15.9531 8.25781 15.3594C8.08594 14.7656 8 14.1875 8 13.625C8 13.224 8.03385 12.8828 8.10156 12.6016C8.17448 12.3203 8.27865 12.0651 8.41406 11.8359C8.55469 11.6068 8.72656 11.3854 8.92969 11.1719C9.13281 10.9583 9.36979 10.7188 9.64062 10.4531C9.78646 10.3073 9.95573 10.1953 10.1484 10.1172C10.3411 10.0391 10.5391 10 10.7422 10C10.9453 10 11.1432 10.0391 11.3359 10.1172C11.5286 10.1953 11.6979 10.3073 11.8438 10.4531L13.3359 11.9453C13.4818 12.0911 13.5938 12.2604 13.6719 12.4531C13.75 12.6458 13.7891 12.8438 13.7891 13.0469C13.7891 13.25 13.7552 13.4323 13.6875 13.5938C13.6198 13.75 13.5339 13.8958 13.4297 14.0312C13.3307 14.1615 13.2214 14.2812 13.1016 14.3906C12.987 14.4948 12.8776 14.5964 12.7734 14.6953C12.6745 14.7943 12.5911 14.8932 12.5234 14.9922C12.4557 15.0859 12.4219 15.1849 12.4219 15.2891C12.4219 15.4401 12.4766 15.5703 12.5859 15.6797L16.3203 19.4141C16.4297 19.5234 16.5599 19.5781 16.7109 19.5781C16.8203 19.5781 16.9219 19.5443 17.0156 19.4766C17.1146 19.4089 17.2109 19.3255 17.3047 19.2266C17.4036 19.1224 17.5052 19.013 17.6094 18.8984C17.7188 18.7786 17.8385 18.6693 17.9688 18.5703C18.099 18.4661 18.2422 18.3802 18.3984 18.3125C18.5599 18.2448 18.7448 18.2109 18.9531 18.2109ZM18.3828 23C18.7005 23 18.9661 22.9714 19.1797 22.9141C19.3932 22.8516 19.5859 22.7656 19.7578 22.6562C19.9297 22.5417 20.0964 22.401 20.2578 22.2344C20.4245 22.0677 20.6172 21.875 20.8359 21.6562C20.9453 21.5469 21 21.4167 21 21.2656C21 21.1094 20.9453 20.9766 20.8359 20.8672L19.3438 19.375C19.2344 19.2656 19.1016 19.2109 18.9453 19.2109C18.8359 19.2109 18.7318 19.2448 18.6328 19.3125C18.5391 19.3802 18.4427 19.4661 18.3438 19.5703C18.25 19.6693 18.1484 19.7786 18.0391 19.8984C17.9349 20.013 17.8177 20.1224 17.6875 20.2266C17.5573 20.3255 17.4115 20.4089 17.25 20.4766C17.0938 20.5443 16.9141 20.5781 16.7109 20.5781C16.5026 20.5781 16.3021 20.5391 16.1094 20.4609C15.9219 20.3776 15.7552 20.263 15.6094 20.1172L11.8828 16.3906C11.737 16.2448 11.6224 16.0781 11.5391 15.8906C11.4609 15.6979 11.4219 15.4974 11.4219 15.2891C11.4219 15.0859 11.4557 14.9062 11.5234 14.75C11.5911 14.5885 11.6745 14.4427 11.7734 14.3125C11.8776 14.1823 11.987 14.0651 12.1016 13.9609C12.2214 13.8516 12.3307 13.7474 12.4297 13.6484C12.5339 13.5495 12.6198 13.4531 12.6875 13.3594C12.7552 13.2604 12.7891 13.1562 12.7891 13.0469C12.7891 12.8958 12.7344 12.7656 12.625 12.6562L11.1328 11.1641C11.0234 11.0547 10.8932 11 10.7422 11C10.5859 11 10.4531 11.0547 10.3438 11.1641C10.125 11.3828 9.93229 11.5755 9.76562 11.7422C9.59896 11.9036 9.45833 12.0703 9.34375 12.2422C9.23438 12.4141 9.14844 12.6068 9.08594 12.8203C9.02865 13.0339 9 13.2995 9 13.6172C9 14.1068 9.08073 14.6172 9.24219 15.1484C9.40365 15.6797 9.6276 16.2109 9.91406 16.7422C10.2005 17.2734 10.5391 17.7969 10.9297 18.3125C11.3255 18.8281 11.7552 19.3177 12.2188 19.7812C12.6823 20.2448 13.1719 20.6745 13.6875 21.0703C14.2031 21.4609 14.7266 21.7995 15.2578 22.0859C15.7891 22.3724 16.3203 22.5964 16.8516 22.7578C17.3828 22.9193 17.8932 23 18.3828 23ZM18.5 15.7109L15.6484 12.8516L16.3516 12.1484L18.5 14.2891L23.1484 9.64844L23.8516 10.3516L18.5 15.7109Z" fill="rgb(34,102,227)"/></svg>',
                    "Mscrm.HomepageGrid.actioncard.CloseTaskCommand": '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.6484 12.6484L20.3516 13.3516L14.5 19.2031L11.6484 16.3516L12.3516 15.6484L14.5 17.7969L19.6484 12.6484ZM16 8C16.7344 8 17.4427 8.09635 18.125 8.28906C18.8073 8.47656 19.4453 8.74479 20.0391 9.09375C20.6328 9.4375 21.1719 9.85417 21.6562 10.3438C22.1458 10.8281 22.5625 11.3672 22.9062 11.9609C23.2552 12.5547 23.5234 13.1927 23.7109 13.875C23.9036 14.5573 24 15.2656 24 16C24 16.7344 23.9036 17.4427 23.7109 18.125C23.5234 18.8073 23.2552 19.4453 22.9062 20.0391C22.5625 20.6328 22.1458 21.1745 21.6562 21.6641C21.1719 22.1484 20.6328 22.5651 20.0391 22.9141C19.4453 23.2578 18.8073 23.526 18.125 23.7188C17.4427 23.9062 16.7344 24 16 24C15.2656 24 14.5573 23.9062 13.875 23.7188C13.1927 23.526 12.5547 23.2578 11.9609 22.9141C11.3672 22.5651 10.8255 22.1484 10.3359 21.6641C9.85156 21.1745 9.4349 20.6328 9.08594 20.0391C8.74219 19.4453 8.47396 18.8099 8.28125 18.1328C8.09375 17.4505 8 16.7396 8 16C8 15.2656 8.09375 14.5573 8.28125 13.875C8.47396 13.1927 8.74219 12.5547 9.08594 11.9609C9.4349 11.3672 9.85156 10.8281 10.3359 10.3438C10.8255 9.85417 11.3672 9.4375 11.9609 9.09375C12.5547 8.74479 13.1901 8.47656 13.8672 8.28906C14.5495 8.09635 15.2604 8 16 8ZM16 23C16.6406 23 17.2578 22.9167 17.8516 22.75C18.4505 22.5833 19.0078 22.349 19.5234 22.0469C20.0443 21.7396 20.5182 21.3724 20.9453 20.9453C21.3724 20.5182 21.737 20.0469 22.0391 19.5312C22.3464 19.0104 22.5833 18.4531 22.75 17.8594C22.9167 17.2656 23 16.6458 23 16C23 15.3594 22.9167 14.7422 22.75 14.1484C22.5833 13.5495 22.3464 12.9922 22.0391 12.4766C21.737 11.9557 21.3724 11.4818 20.9453 11.0547C20.5182 10.6276 20.0443 10.263 19.5234 9.96094C19.0078 9.65365 18.4505 9.41667 17.8516 9.25C17.2578 9.08333 16.6406 9 16 9C15.3594 9 14.7396 9.08333 14.1406 9.25C13.5469 9.41667 12.9896 9.65365 12.4688 9.96094C11.9531 10.263 11.4818 10.6276 11.0547 11.0547C10.6276 11.4818 10.2604 11.9557 9.95312 12.4766C9.65104 12.9922 9.41667 13.5495 9.25 14.1484C9.08333 14.7422 9 15.3594 9 16C9 16.6406 9.08333 17.2604 9.25 17.8594C9.41667 18.4531 9.65104 19.0104 9.95312 19.5312C10.2604 20.0469 10.6276 20.5182 11.0547 20.9453C11.4818 21.3724 11.9531 21.7396 12.4688 22.0469C12.9896 22.349 13.5469 22.5833 14.1406 22.75C14.7344 22.9167 15.3542 23 16 23Z" fill="rgb(34,102,227)"/></svg>',
                    "Mscrm.HomepageGrid.actioncard.CompleteTaskCommand": '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.6484 12.6484L20.3516 13.3516L14.5 19.2031L11.6484 16.3516L12.3516 15.6484L14.5 17.7969L19.6484 12.6484ZM16 8C16.7344 8 17.4427 8.09635 18.125 8.28906C18.8073 8.47656 19.4453 8.74479 20.0391 9.09375C20.6328 9.4375 21.1719 9.85417 21.6562 10.3438C22.1458 10.8281 22.5625 11.3672 22.9062 11.9609C23.2552 12.5547 23.5234 13.1927 23.7109 13.875C23.9036 14.5573 24 15.2656 24 16C24 16.7344 23.9036 17.4427 23.7109 18.125C23.5234 18.8073 23.2552 19.4453 22.9062 20.0391C22.5625 20.6328 22.1458 21.1745 21.6562 21.6641C21.1719 22.1484 20.6328 22.5651 20.0391 22.9141C19.4453 23.2578 18.8073 23.526 18.125 23.7188C17.4427 23.9062 16.7344 24 16 24C15.2656 24 14.5573 23.9062 13.875 23.7188C13.1927 23.526 12.5547 23.2578 11.9609 22.9141C11.3672 22.5651 10.8255 22.1484 10.3359 21.6641C9.85156 21.1745 9.4349 20.6328 9.08594 20.0391C8.74219 19.4453 8.47396 18.8099 8.28125 18.1328C8.09375 17.4505 8 16.7396 8 16C8 15.2656 8.09375 14.5573 8.28125 13.875C8.47396 13.1927 8.74219 12.5547 9.08594 11.9609C9.4349 11.3672 9.85156 10.8281 10.3359 10.3438C10.8255 9.85417 11.3672 9.4375 11.9609 9.09375C12.5547 8.74479 13.1901 8.47656 13.8672 8.28906C14.5495 8.09635 15.2604 8 16 8ZM16 23C16.6406 23 17.2578 22.9167 17.8516 22.75C18.4505 22.5833 19.0078 22.349 19.5234 22.0469C20.0443 21.7396 20.5182 21.3724 20.9453 20.9453C21.3724 20.5182 21.737 20.0469 22.0391 19.5312C22.3464 19.0104 22.5833 18.4531 22.75 17.8594C22.9167 17.2656 23 16.6458 23 16C23 15.3594 22.9167 14.7422 22.75 14.1484C22.5833 13.5495 22.3464 12.9922 22.0391 12.4766C21.737 11.9557 21.3724 11.4818 20.9453 11.0547C20.5182 10.6276 20.0443 10.263 19.5234 9.96094C19.0078 9.65365 18.4505 9.41667 17.8516 9.25C17.2578 9.08333 16.6406 9 16 9C15.3594 9 14.7396 9.08333 14.1406 9.25C13.5469 9.41667 12.9896 9.65365 12.4688 9.96094C11.9531 10.263 11.4818 10.6276 11.0547 11.0547C10.6276 11.4818 10.2604 11.9557 9.95312 12.4766C9.65104 12.9922 9.41667 13.5495 9.25 14.1484C9.08333 14.7422 9 15.3594 9 16C9 16.6406 9.08333 17.2604 9.25 17.8594C9.41667 18.4531 9.65104 19.0104 9.95312 19.5312C10.2604 20.0469 10.6276 20.5182 11.0547 20.9453C11.4818 21.3724 11.9531 21.7396 12.4688 22.0469C12.9896 22.349 13.5469 22.5833 14.1406 22.75C14.7344 22.9167 15.3542 23 16 23Z" fill="rgb(34,102,227)"/></svg>',
                    "Mscrm.HomepageGrid.actioncard.UpdateContactOrLeadCommand": '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.8516 19.3516L19.5 23.7109L17.3984 21.6016L18.1016 20.8984L19.5 22.2891L23.1484 18.6484L23.8516 19.3516ZM20.4609 19.9141C19.8828 19.2786 19.2083 18.8021 18.4375 18.4844C17.6667 18.1615 16.8542 18 16 18C15.4375 18 14.8984 18.0703 14.3828 18.2109C13.8724 18.3516 13.3932 18.5521 12.9453 18.8125C12.5026 19.0677 12.099 19.3776 11.7344 19.7422C11.375 20.1016 11.0651 20.5052 10.8047 20.9531C10.5495 21.3958 10.3516 21.875 10.2109 22.3906C10.0703 22.901 10 23.4375 10 24H9C9 23.2552 9.10677 22.5391 9.32031 21.8516C9.53906 21.1641 9.84896 20.5312 10.25 19.9531C10.651 19.375 11.1354 18.8672 11.7031 18.4297C12.276 17.9922 12.9141 17.6484 13.6172 17.3984C13.2109 17.1797 12.8464 16.9141 12.5234 16.6016C12.2005 16.2891 11.9245 15.9427 11.6953 15.5625C11.4714 15.1823 11.2995 14.776 11.1797 14.3438C11.0599 13.9115 11 13.4635 11 13C11 12.3073 11.1302 11.6589 11.3906 11.0547C11.651 10.4453 12.0078 9.91406 12.4609 9.46094C12.9141 9.00781 13.4427 8.65104 14.0469 8.39062C14.6562 8.13021 15.3073 8 16 8C16.6927 8 17.3411 8.13021 17.9453 8.39062C18.5547 8.65104 19.0859 9.00781 19.5391 9.46094C19.9922 9.91406 20.349 10.4453 20.6094 11.0547C20.8698 11.6589 21 12.3073 21 13C21 13.4635 20.9375 13.9115 20.8125 14.3438C20.6927 14.776 20.5182 15.1823 20.2891 15.5625C20.0651 15.9427 19.7917 16.2891 19.4688 16.6016C19.1458 16.9141 18.7812 17.1797 18.375 17.3984C18.9062 17.5859 19.4062 17.8359 19.875 18.1484C20.3438 18.4557 20.7682 18.8151 21.1484 19.2266L20.4609 19.9141ZM12 13C12 13.5521 12.1042 14.0703 12.3125 14.5547C12.526 15.0391 12.8125 15.4635 13.1719 15.8281C13.5365 16.1875 13.9609 16.474 14.4453 16.6875C14.9297 16.8958 15.4479 17 16 17C16.5521 17 17.0703 16.8958 17.5547 16.6875C18.0391 16.474 18.4609 16.1875 18.8203 15.8281C19.1849 15.4635 19.4714 15.0391 19.6797 14.5547C19.8932 14.0703 20 13.5521 20 13C20 12.4479 19.8932 11.9297 19.6797 11.4453C19.4714 10.9609 19.1849 10.5391 18.8203 10.1797C18.4609 9.8151 18.0391 9.52865 17.5547 9.32031C17.0703 9.10677 16.5521 9 16 9C15.4479 9 14.9297 9.10677 14.4453 9.32031C13.9609 9.52865 13.5365 9.8151 13.1719 10.1797C12.8125 10.5391 12.526 10.9609 12.3125 11.4453C12.1042 11.9297 12 12.4479 12 13Z" fill="rgb(34,102,227)"/></svg>',
                    "Mscrm.HomepageGrid.actioncard.ConvertToOpportunityCommand": '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 13H16V17.2891L17.2891 16L18 16.7109L15.5 19.2031L13 16.7109L13.7109 16L15 17.2891V13ZM12 8H19V12H12V8ZM18 11V9H13V11H18ZM12 24V20H19V24H12ZM13 21V23H18V21H13Z" fill="rgb(34,102,227)"/></svg>',
                    "Mscrm.HomepageGrid.actioncard.ClosePhoneCallCommand": '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.9531 18.2109C19.1562 18.2109 19.3542 18.25 19.5469 18.3281C19.7396 18.4062 19.9089 18.5182 20.0547 18.6641L21.5469 20.1562C21.6927 20.3021 21.8047 20.4714 21.8828 20.6641C21.9609 20.8568 22 21.0547 22 21.2578C22 21.4609 21.9609 21.6589 21.8828 21.8516C21.8047 22.0443 21.6927 22.2135 21.5469 22.3594L20.7969 23.1094C20.4688 23.4323 20.0964 23.6615 19.6797 23.7969C19.263 23.9323 18.8307 24 18.3828 24C17.8255 24 17.2474 23.9141 16.6484 23.7422C16.0547 23.5651 15.4609 23.3203 14.8672 23.0078C14.2786 22.6953 13.6979 22.3255 13.125 21.8984C12.5573 21.4714 12.0182 21.0052 11.5078 20.5C11.0026 19.9896 10.5339 19.4505 10.1016 18.8828C9.67448 18.3099 9.30469 17.7292 8.99219 17.1406C8.67969 16.5469 8.4349 15.9531 8.25781 15.3594C8.08594 14.7656 8 14.1875 8 13.625C8 13.224 8.03385 12.8828 8.10156 12.6016C8.17448 12.3203 8.27865 12.0651 8.41406 11.8359C8.55469 11.6068 8.72656 11.3854 8.92969 11.1719C9.13281 10.9583 9.36979 10.7188 9.64062 10.4531C9.78646 10.3073 9.95573 10.1953 10.1484 10.1172C10.3411 10.0391 10.5391 10 10.7422 10C10.9453 10 11.1432 10.0391 11.3359 10.1172C11.5286 10.1953 11.6979 10.3073 11.8438 10.4531L13.3359 11.9453C13.4818 12.0911 13.5938 12.2604 13.6719 12.4531C13.75 12.6458 13.7891 12.8438 13.7891 13.0469C13.7891 13.25 13.7552 13.4323 13.6875 13.5938C13.6198 13.75 13.5339 13.8958 13.4297 14.0312C13.3307 14.1615 13.2214 14.2812 13.1016 14.3906C12.987 14.4948 12.8776 14.5964 12.7734 14.6953C12.6745 14.7943 12.5911 14.8932 12.5234 14.9922C12.4557 15.0859 12.4219 15.1849 12.4219 15.2891C12.4219 15.4401 12.4766 15.5703 12.5859 15.6797L16.3203 19.4141C16.4297 19.5234 16.5599 19.5781 16.7109 19.5781C16.8203 19.5781 16.9219 19.5443 17.0156 19.4766C17.1146 19.4089 17.2109 19.3255 17.3047 19.2266C17.4036 19.1224 17.5052 19.013 17.6094 18.8984C17.7188 18.7786 17.8385 18.6693 17.9688 18.5703C18.099 18.4661 18.2422 18.3802 18.3984 18.3125C18.5599 18.2448 18.7448 18.2109 18.9531 18.2109ZM18.3828 23C18.7005 23 18.9661 22.9714 19.1797 22.9141C19.3932 22.8516 19.5859 22.7656 19.7578 22.6562C19.9297 22.5417 20.0964 22.401 20.2578 22.2344C20.4245 22.0677 20.6172 21.875 20.8359 21.6562C20.9453 21.5469 21 21.4167 21 21.2656C21 21.1094 20.9453 20.9766 20.8359 20.8672L19.3438 19.375C19.2344 19.2656 19.1016 19.2109 18.9453 19.2109C18.8359 19.2109 18.7318 19.2448 18.6328 19.3125C18.5391 19.3802 18.4427 19.4661 18.3438 19.5703C18.25 19.6693 18.1484 19.7786 18.0391 19.8984C17.9349 20.013 17.8177 20.1224 17.6875 20.2266C17.5573 20.3255 17.4115 20.4089 17.25 20.4766C17.0938 20.5443 16.9141 20.5781 16.7109 20.5781C16.5026 20.5781 16.3021 20.5391 16.1094 20.4609C15.9219 20.3776 15.7552 20.263 15.6094 20.1172L11.8828 16.3906C11.737 16.2448 11.6224 16.0781 11.5391 15.8906C11.4609 15.6979 11.4219 15.4974 11.4219 15.2891C11.4219 15.0859 11.4557 14.9062 11.5234 14.75C11.5911 14.5885 11.6745 14.4427 11.7734 14.3125C11.8776 14.1823 11.987 14.0651 12.1016 13.9609C12.2214 13.8516 12.3307 13.7474 12.4297 13.6484C12.5339 13.5495 12.6198 13.4531 12.6875 13.3594C12.7552 13.2604 12.7891 13.1562 12.7891 13.0469C12.7891 12.8958 12.7344 12.7656 12.625 12.6562L11.1328 11.1641C11.0234 11.0547 10.8932 11 10.7422 11C10.5859 11 10.4531 11.0547 10.3438 11.1641C10.125 11.3828 9.93229 11.5755 9.76562 11.7422C9.59896 11.9036 9.45833 12.0703 9.34375 12.2422C9.23438 12.4141 9.14844 12.6068 9.08594 12.8203C9.02865 13.0339 9 13.2995 9 13.6172C9 14.1068 9.08073 14.6172 9.24219 15.1484C9.40365 15.6797 9.6276 16.2109 9.91406 16.7422C10.2005 17.2734 10.5391 17.7969 10.9297 18.3125C11.3255 18.8281 11.7552 19.3177 12.2188 19.7812C12.6823 20.2448 13.1719 20.6745 13.6875 21.0703C14.2031 21.4609 14.7266 21.7995 15.2578 22.0859C15.7891 22.3724 16.3203 22.5964 16.8516 22.7578C17.3828 22.9193 17.8932 23 18.3828 23ZM18.5 15.7109L15.6484 12.8516L16.3516 12.1484L18.5 14.2891L23.1484 9.64844L23.8516 10.3516L18.5 15.7109Z" fill="rgb(34,102,227)"/></svg>',
                    "Mscrm.HomepageGrid.actioncard.ReplyCommand": '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 13C17.6667 13 18.3047 13.125 18.9141 13.375C19.5234 13.625 20.0651 13.987 20.5391 14.4609C21.013 14.9349 21.375 15.4766 21.625 16.0859C21.875 16.6953 22 17.3333 22 18C22 18.6927 21.8698 19.3438 21.6094 19.9531C21.349 20.5573 20.9922 21.0859 20.5391 21.5391C20.0859 21.9922 19.5547 22.349 18.9453 22.6094C18.3411 22.8698 17.6927 23 17 23V22C17.5521 22 18.0703 21.8958 18.5547 21.6875C19.0391 21.474 19.4609 21.1875 19.8203 20.8281C20.1849 20.4635 20.4714 20.0391 20.6797 19.5547C20.8932 19.0703 21 18.5521 21 18C21 17.4479 20.8932 16.9297 20.6797 16.4453C20.4714 15.9609 20.1849 15.5391 19.8203 15.1797C19.4609 14.8151 19.0391 14.5286 18.5547 14.3203C18.0703 14.1068 17.5521 14 17 14H11.7109L14.8516 17.1484L14.1484 17.8516L9.79688 13.5L14.1484 9.14844L14.8516 9.85156L11.7109 13H17Z" fill="rgb(34,102,227)"/></svg>',
                    "Mscrm.HomepageGrid.actioncard.AddAsCompetitorCommand": '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 13H13V12H16V13ZM12 13H11V12H12V13ZM16 15H13V14H16V15ZM12 15H11V14H12V15ZM13 16H16V17H13V16ZM11 16H12V17H11V16ZM24 21V22H22V24H21V22H19V21H21V19H22V21H24ZM10 23H20V24H9V8H17.7109L22 12.2891V18H21V13H17V9H10V23ZM18 12H20.2891L18 9.71094V12Z" fill="rgb(34,102,227)"/></svg>',
                    "Mscrm.HomepageGrid.actioncard.OpenEmailWebClientCommand": '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 8.9375L24 12.9375V23H8V12.9375L16 8.9375ZM22.8203 13.4688L16 10.0625L9.17969 13.4688L11.7109 16H20.2891L22.8203 13.4688ZM9 22H23V14.7109L20.7109 17H11.2891L9 14.7109V22Z" fill="rgb(34,102,227)"/></svg>',
                    "Mscrm.HomepageGrid.actioncard.TakeNotesCommand": '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 22H18V23H13L9 19V9H23V18H22V10H10V18H14V22ZM13 21.5859V19H10.4141L13 21.5859ZM24 21V22H22V24H21V22H19V21H21V19H22V21H24Z" fill="rgb(34,102,227)"/></svg>',
                    "Mscrm.Modern.SendEmailCommand": '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.6016 15.5L8.14062 22.3984L9.85938 15.5L8.14062 8.60156L23.6016 15.5ZM9.60938 10.3516L10.7734 15.0234H20.0703L9.60938 10.3516ZM10.7578 16.0234L9.60938 20.6484L19.9766 16.0234H10.7578Z" fill="rgb(34,102,227)"/></svg>',
                    "Mscrm.HomepageGrid.actioncard.CreateCaseCommand": '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.5 17C19.3802 17 19.2578 16.9974 19.1328 16.9922C19.013 16.9818 18.8932 16.9635 18.7734 16.9375L12.4766 23.2344C12.2266 23.4844 11.9427 23.6745 11.625 23.8047C11.3073 23.9349 10.9714 24 10.6172 24C10.2578 24 9.91927 23.9323 9.60156 23.7969C9.28385 23.6562 9.00521 23.4688 8.76562 23.2344C8.53125 22.9948 8.34375 22.7161 8.20312 22.3984C8.06771 22.0807 8 21.7422 8 21.3828C8 21.0339 8.0651 20.7005 8.19531 20.3828C8.32552 20.0599 8.51562 19.7734 8.76562 19.5234L15.0625 13.2266C15.0365 13.1068 15.0182 12.987 15.0078 12.8672C15.0026 12.7422 15 12.6198 15 12.5C15 11.8802 15.1172 11.2969 15.3516 10.75C15.5911 10.2031 15.9141 9.72656 16.3203 9.32031C16.7266 8.91406 17.2031 8.59375 17.75 8.35938C18.2969 8.11979 18.8802 8 19.5 8C19.7865 8 20.0469 8.02344 20.2812 8.07031C20.5156 8.11198 20.7422 8.17448 20.9609 8.25781C21.1797 8.34115 21.3932 8.4401 21.6016 8.55469C21.8151 8.66406 22.0417 8.78646 22.2812 8.92188L19.2031 12L20 12.7969L23.0781 9.71875C23.2135 9.95312 23.3359 10.1771 23.4453 10.3906C23.5599 10.6042 23.6589 10.8203 23.7422 11.0391C23.8255 11.2578 23.888 11.487 23.9297 11.7266C23.9766 11.9609 24 12.2188 24 12.5C24 12.9115 23.9453 13.3099 23.8359 13.6953C23.7318 14.0755 23.5807 14.4323 23.3828 14.7656C23.1901 15.099 22.9557 15.4036 22.6797 15.6797C22.4036 15.9557 22.099 16.1927 21.7656 16.3906C21.4323 16.5833 21.0729 16.7344 20.6875 16.8438C20.3073 16.9479 19.9115 17 19.5 17ZM18.4531 15.8438C18.625 15.8854 18.7969 15.9219 18.9688 15.9531C19.1406 15.9844 19.3177 16 19.5 16C19.9844 16 20.4375 15.9089 20.8594 15.7266C21.2865 15.5391 21.6562 15.2891 21.9688 14.9766C22.2865 14.6589 22.5365 14.2891 22.7188 13.8672C22.9062 13.4401 23 12.9844 23 12.5C23 12.1198 22.9375 11.7526 22.8125 11.3984L20 14.2031L17.7969 12L20.6016 9.1875C20.2474 9.0625 19.8802 9 19.5 9C19.0156 9 18.5599 9.09375 18.1328 9.28125C17.7109 9.46354 17.3411 9.71354 17.0234 10.0312C16.7109 10.3438 16.4609 10.7135 16.2734 11.1406C16.0911 11.5625 16 12.0156 16 12.5C16 12.6823 16.0156 12.8594 16.0469 13.0312C16.0781 13.2031 16.1146 13.375 16.1562 13.5469L9.47656 20.2344C9.32552 20.3854 9.20833 20.5599 9.125 20.7578C9.04167 20.9557 9 21.1641 9 21.3828C9 21.6016 9.04167 21.8099 9.125 22.0078C9.21354 22.2057 9.33073 22.3776 9.47656 22.5234C9.6224 22.6693 9.79427 22.7865 9.99219 22.875C10.1901 22.9583 10.3984 23 10.6172 23C10.8359 23 11.0443 22.9583 11.2422 22.875C11.4401 22.7917 11.6146 22.6745 11.7656 22.5234L18.4531 15.8438ZM22 19V21H24V22H22V24H21V22H19V21H21V19H22Z" fill="rgb(34,102,227)"/></svg>',
                    "Mscrm.HomepageGrid.actioncard.CompleteOtherActivityCommand": '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.6484 12.6484L20.3516 13.3516L14.5 19.2031L11.6484 16.3516L12.3516 15.6484L14.5 17.7969L19.6484 12.6484ZM16 8C16.7344 8 17.4427 8.09635 18.125 8.28906C18.8073 8.47656 19.4453 8.74479 20.0391 9.09375C20.6328 9.4375 21.1719 9.85417 21.6562 10.3438C22.1458 10.8281 22.5625 11.3672 22.9062 11.9609C23.2552 12.5547 23.5234 13.1927 23.7109 13.875C23.9036 14.5573 24 15.2656 24 16C24 16.7344 23.9036 17.4427 23.7109 18.125C23.5234 18.8073 23.2552 19.4453 22.9062 20.0391C22.5625 20.6328 22.1458 21.1745 21.6562 21.6641C21.1719 22.1484 20.6328 22.5651 20.0391 22.9141C19.4453 23.2578 18.8073 23.526 18.125 23.7188C17.4427 23.9062 16.7344 24 16 24C15.2656 24 14.5573 23.9062 13.875 23.7188C13.1927 23.526 12.5547 23.2578 11.9609 22.9141C11.3672 22.5651 10.8255 22.1484 10.3359 21.6641C9.85156 21.1745 9.4349 20.6328 9.08594 20.0391C8.74219 19.4453 8.47396 18.8099 8.28125 18.1328C8.09375 17.4505 8 16.7396 8 16C8 15.2656 8.09375 14.5573 8.28125 13.875C8.47396 13.1927 8.74219 12.5547 9.08594 11.9609C9.4349 11.3672 9.85156 10.8281 10.3359 10.3438C10.8255 9.85417 11.3672 9.4375 11.9609 9.09375C12.5547 8.74479 13.1901 8.47656 13.8672 8.28906C14.5495 8.09635 15.2604 8 16 8ZM16 23C16.6406 23 17.2578 22.9167 17.8516 22.75C18.4505 22.5833 19.0078 22.349 19.5234 22.0469C20.0443 21.7396 20.5182 21.3724 20.9453 20.9453C21.3724 20.5182 21.737 20.0469 22.0391 19.5312C22.3464 19.0104 22.5833 18.4531 22.75 17.8594C22.9167 17.2656 23 16.6458 23 16C23 15.3594 22.9167 14.7422 22.75 14.1484C22.5833 13.5495 22.3464 12.9922 22.0391 12.4766C21.737 11.9557 21.3724 11.4818 20.9453 11.0547C20.5182 10.6276 20.0443 10.263 19.5234 9.96094C19.0078 9.65365 18.4505 9.41667 17.8516 9.25C17.2578 9.08333 16.6406 9 16 9C15.3594 9 14.7396 9.08333 14.1406 9.25C13.5469 9.41667 12.9896 9.65365 12.4688 9.96094C11.9531 10.263 11.4818 10.6276 11.0547 11.0547C10.6276 11.4818 10.2604 11.9557 9.95312 12.4766C9.65104 12.9922 9.41667 13.5495 9.25 14.1484C9.08333 14.7422 9 15.3594 9 16C9 16.6406 9.08333 17.2604 9.25 17.8594C9.41667 18.4531 9.65104 19.0104 9.95312 19.5312C10.2604 20.0469 10.6276 20.5182 11.0547 20.9453C11.4818 21.3724 11.9531 21.7396 12.4688 22.0469C12.9896 22.349 13.5469 22.5833 14.1406 22.75C14.7344 22.9167 15.3542 23 16 23Z" fill="rgb(34,102,227)"/></svg>',
                    "Mscrm.HomepageGrid.actioncard.CancelOtherActivityCommand": '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 11H21V22.5C21 22.7083 20.9609 22.9036 20.8828 23.0859C20.8047 23.2682 20.6979 23.4271 20.5625 23.5625C20.4271 23.6979 20.2682 23.8047 20.0859 23.8828C19.9036 23.9609 19.7083 24 19.5 24H11.5C11.2917 24 11.0964 23.9609 10.9141 23.8828C10.7318 23.8047 10.5729 23.6979 10.4375 23.5625C10.3021 23.4271 10.1953 23.2682 10.1172 23.0859C10.0391 22.9036 10 22.7083 10 22.5V11H9V10H13V9C13 8.85938 13.026 8.72917 13.0781 8.60938C13.1302 8.48958 13.2005 8.38542 13.2891 8.29688C13.3828 8.20312 13.4896 8.13021 13.6094 8.07812C13.7292 8.02604 13.8594 8 14 8H17C17.1406 8 17.2708 8.02604 17.3906 8.07812C17.5104 8.13021 17.6146 8.20312 17.7031 8.29688C17.7969 8.38542 17.8698 8.48958 17.9219 8.60938C17.974 8.72917 18 8.85938 18 9V10H22V11ZM14 10H17V9H14V10ZM20 11H11V22.5C11 22.6354 11.0495 22.7526 11.1484 22.8516C11.2474 22.9505 11.3646 23 11.5 23H19.5C19.6354 23 19.7526 22.9505 19.8516 22.8516C19.9505 22.7526 20 22.6354 20 22.5V11ZM14 21H13V13H14V21ZM16 21H15V13H16V21ZM18 21H17V13H18V21Z" fill="rgb(34,102,227)"/></svg>',
                    "Mscrm.HomepageGrid.actioncard.GotItActionCommand": '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.3516 12.3516L14 20.7109L9.64844 16.3516L10.3516 15.6484L14 19.2891L21.6484 11.6484L22.3516 12.3516Z" fill="rgb(34,102,227)"/></svg>',
                    "Mscrm.Modern.SkypeMeetingCommand": '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5312 14.2109C14.5312 14.3932 14.5964 14.5417 14.7266 14.6562C14.862 14.7656 15.0391 14.8568 15.2578 14.9297C15.4818 14.9974 15.7318 15.0573 16.0078 15.1094C16.2891 15.1615 16.5755 15.2214 16.8672 15.2891C17.1641 15.3568 17.4505 15.4427 17.7266 15.5469C18.0078 15.6458 18.2578 15.7812 18.4766 15.9531C18.7005 16.125 18.8776 16.3411 19.0078 16.6016C19.1432 16.862 19.2109 17.1823 19.2109 17.5625C19.2109 18.0104 19.1172 18.3906 18.9297 18.7031C18.7422 19.0104 18.4974 19.2604 18.1953 19.4531C17.8932 19.6458 17.5521 19.7865 17.1719 19.875C16.7917 19.9583 16.4089 20 16.0234 20C15.763 20 15.4896 19.9818 15.2031 19.9453C14.9219 19.9036 14.6484 19.8385 14.3828 19.75C14.1172 19.6562 13.8672 19.5339 13.6328 19.3828C13.4036 19.2318 13.2109 19.0417 13.0547 18.8125C12.9766 18.6979 12.9115 18.5755 12.8594 18.4453C12.8125 18.3151 12.7891 18.1823 12.7891 18.0469C12.7891 17.8281 12.862 17.6562 13.0078 17.5312C13.1589 17.401 13.3385 17.3359 13.5469 17.3359C13.7031 17.3359 13.8307 17.3724 13.9297 17.4453C14.0339 17.513 14.1276 17.599 14.2109 17.7031C14.2995 17.8073 14.388 17.9219 14.4766 18.0469C14.5651 18.1667 14.6745 18.2786 14.8047 18.3828C14.9349 18.487 15.0964 18.5755 15.2891 18.6484C15.4818 18.7161 15.7266 18.75 16.0234 18.75C16.1745 18.75 16.3333 18.7292 16.5 18.6875C16.6719 18.6458 16.8281 18.5807 16.9688 18.4922C17.1094 18.4036 17.2266 18.2943 17.3203 18.1641C17.4141 18.0339 17.4609 17.8776 17.4609 17.6953C17.4609 17.5807 17.4401 17.4792 17.3984 17.3906C17.3568 17.3021 17.2995 17.2266 17.2266 17.1641C17.1536 17.1016 17.0703 17.0495 16.9766 17.0078C16.8828 16.9661 16.7865 16.9323 16.6875 16.9062C16.3594 16.8177 16.0286 16.7344 15.6953 16.6562C15.3672 16.5781 15.0391 16.4948 14.7109 16.4062C14.4245 16.3333 14.1667 16.2422 13.9375 16.1328C13.7083 16.0182 13.513 15.8776 13.3516 15.7109C13.1901 15.5443 13.0651 15.3464 12.9766 15.1172C12.888 14.888 12.8438 14.6198 12.8438 14.3125C12.8438 13.8854 12.9323 13.526 13.1094 13.2344C13.2917 12.9375 13.526 12.6979 13.8125 12.5156C14.099 12.3333 14.4219 12.2031 14.7812 12.125C15.1458 12.0417 15.513 12 15.8828 12C16.0391 12 16.2214 12.0156 16.4297 12.0469C16.6432 12.0781 16.8594 12.125 17.0781 12.1875C17.3021 12.25 17.5208 12.3307 17.7344 12.4297C17.9479 12.5234 18.138 12.6354 18.3047 12.7656C18.4766 12.8958 18.6146 13.0443 18.7188 13.2109C18.8229 13.3776 18.875 13.5625 18.875 13.7656C18.875 13.875 18.8516 13.974 18.8047 14.0625C18.763 14.1458 18.7057 14.2161 18.6328 14.2734C18.5599 14.3255 18.474 14.3672 18.375 14.3984C18.2812 14.4245 18.1849 14.4375 18.0859 14.4375C17.9557 14.4375 17.8438 14.4115 17.75 14.3594C17.6615 14.3021 17.5755 14.2318 17.4922 14.1484C17.4089 14.0599 17.3229 13.9688 17.2344 13.875C17.1458 13.776 17.0391 13.6849 16.9141 13.6016C16.7891 13.513 16.6354 13.4427 16.4531 13.3906C16.2708 13.3333 16.0443 13.3047 15.7734 13.3047C15.6276 13.3047 15.4818 13.3203 15.3359 13.3516C15.1901 13.3828 15.0573 13.4349 14.9375 13.5078C14.8177 13.5755 14.7188 13.6667 14.6406 13.7812C14.5677 13.8958 14.5312 14.0391 14.5312 14.2109ZM22.9609 16.6484C23.2943 17.0547 23.5495 17.5026 23.7266 17.9922C23.9089 18.4766 24 18.9792 24 19.5C24 20.1198 23.8802 20.7031 23.6406 21.25C23.4062 21.7969 23.0859 22.2734 22.6797 22.6797C22.2734 23.0859 21.7969 23.4089 21.25 23.6484C20.7031 23.8828 20.1198 24 19.5 24C18.9792 24 18.474 23.9115 17.9844 23.7344C17.5 23.5521 17.0547 23.2943 16.6484 22.9609C16.5391 22.9766 16.4297 22.987 16.3203 22.9922C16.2161 22.9974 16.1094 23 16 23C15.3542 23 14.7318 22.9167 14.1328 22.75C13.5391 22.5833 12.9818 22.349 12.4609 22.0469C11.9453 21.7396 11.474 21.375 11.0469 20.9531C10.625 20.526 10.2604 20.0547 9.95312 19.5391C9.65104 19.0182 9.41667 18.4609 9.25 17.8672C9.08333 17.2682 9 16.6458 9 16C9 15.8906 9.0026 15.7839 9.00781 15.6797C9.01302 15.5703 9.02344 15.4609 9.03906 15.3516C8.70573 14.9453 8.44792 14.5 8.26562 14.0156C8.08854 13.526 8 13.0208 8 12.5C8 11.8802 8.11719 11.2969 8.35156 10.75C8.59115 10.2031 8.91406 9.72656 9.32031 9.32031C9.72656 8.91406 10.2031 8.59375 10.75 8.35938C11.2969 8.11979 11.8802 8 12.5 8C13.0208 8 13.5234 8.09115 14.0078 8.27344C14.4974 8.45052 14.9453 8.70573 15.3516 9.03906C15.4609 9.02344 15.5677 9.01302 15.6719 9.00781C15.7812 9.0026 15.8906 9 16 9C16.6458 9 17.2656 9.08333 17.8594 9.25C18.4583 9.41667 19.0156 9.65365 19.5312 9.96094C20.0521 10.263 20.5234 10.6276 20.9453 11.0547C21.3724 11.4766 21.737 11.9479 22.0391 12.4688C22.3464 12.9844 22.5833 13.5417 22.75 14.1406C22.9167 14.7344 23 15.3542 23 16C23 16.1094 22.9974 16.2188 22.9922 16.3281C22.987 16.4323 22.9766 16.5391 22.9609 16.6484ZM19.5 23C19.9844 23 20.4375 22.9089 20.8594 22.7266C21.2865 22.5391 21.6562 22.2891 21.9688 21.9766C22.2865 21.6589 22.5365 21.2891 22.7188 20.8672C22.9062 20.4401 23 19.9844 23 19.5C23 18.9948 22.9036 18.5391 22.7109 18.1328C22.5234 17.7214 22.2604 17.3359 21.9219 16.9766C21.9375 16.8099 21.9531 16.6484 21.9688 16.4922C21.9896 16.3307 22 16.1667 22 16C22 15.4479 21.9271 14.9167 21.7812 14.4062C21.6406 13.8958 21.4401 13.4193 21.1797 12.9766C20.9193 12.5286 20.6068 12.1224 20.2422 11.7578C19.8776 11.3932 19.4714 11.0807 19.0234 10.8203C18.5807 10.5599 18.1042 10.3594 17.5938 10.2188C17.0833 10.0729 16.5521 10 16 10C15.8333 10 15.6693 10.0104 15.5078 10.0312C15.3516 10.0469 15.1901 10.0625 15.0234 10.0781C14.6641 9.73958 14.2786 9.47656 13.8672 9.28906C13.4609 9.09635 13.0052 9 12.5 9C12.0156 9 11.5599 9.09375 11.1328 9.28125C10.7109 9.46354 10.3411 9.71354 10.0234 10.0312C9.71094 10.3438 9.46094 10.7135 9.27344 11.1406C9.09115 11.5625 9 12.0156 9 12.5C9 13.0052 9.09375 13.4635 9.28125 13.875C9.47396 14.2812 9.73958 14.6641 10.0781 15.0234C10.0625 15.1901 10.0443 15.3542 10.0234 15.5156C10.0078 15.6719 10 15.8333 10 16C10 16.5521 10.0703 17.0833 10.2109 17.5938C10.3568 18.1042 10.5599 18.5833 10.8203 19.0312C11.0807 19.474 11.3932 19.8776 11.7578 20.2422C12.1224 20.6068 12.526 20.9193 12.9688 21.1797C13.4167 21.4401 13.8958 21.6432 14.4062 21.7891C14.9167 21.9297 15.4479 22 16 22C16.1667 22 16.3281 21.9922 16.4844 21.9766C16.6458 21.9557 16.8099 21.9375 16.9766 21.9219C17.3359 22.2604 17.7188 22.526 18.125 22.7188C18.5365 22.9062 18.9948 23 19.5 23Z" fill="rgb(34,102,227)"/></svg>',
                    "Mscrm.Modern.PhoneCallCommand": '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.5547 17.4766C20.7839 17.4766 21.0026 17.5208 21.2109 17.6094C21.4245 17.6927 21.612 17.8151 21.7734 17.9766L23.4922 19.6953C23.6536 19.8568 23.776 20.0443 23.8594 20.2578C23.9479 20.4661 23.9922 20.6849 23.9922 20.9141C23.9922 21.1432 23.9479 21.3646 23.8594 21.5781C23.776 21.7865 23.6536 21.9714 23.4922 22.1328L23.3828 22.2422C23.1016 22.5234 22.8438 22.7734 22.6094 22.9922C22.375 23.2109 22.1302 23.3958 21.875 23.5469C21.6198 23.6927 21.3359 23.8047 21.0234 23.8828C20.7109 23.9609 20.3385 24 19.9062 24C19.2552 24 18.5859 23.8984 17.8984 23.6953C17.2109 23.4922 16.526 23.2109 15.8438 22.8516C15.1667 22.4922 14.5 22.0651 13.8438 21.5703C13.1927 21.0755 12.5755 20.5365 11.9922 19.9531C11.4141 19.3646 10.8802 18.7448 10.3906 18.0938C9.90104 17.4375 9.47917 16.7708 9.125 16.0938C8.77083 15.4115 8.49479 14.7318 8.29688 14.0547C8.09896 13.3776 8 12.7214 8 12.0859C8 11.6536 8.03646 11.2839 8.10938 10.9766C8.1875 10.6693 8.29948 10.388 8.44531 10.1328C8.59635 9.8776 8.77865 9.63542 8.99219 9.40625C9.21094 9.17188 9.46094 8.91406 9.74219 8.63281L9.86719 8.50781C10.0286 8.34635 10.2135 8.22135 10.4219 8.13281C10.6302 8.04427 10.8516 8 11.0859 8C11.3151 8 11.5339 8.04427 11.7422 8.13281C11.9557 8.22135 12.1432 8.34635 12.3047 8.50781L14.0234 10.2266C14.1849 10.388 14.3073 10.5755 14.3906 10.7891C14.4792 10.9974 14.5234 11.2161 14.5234 11.4453C14.5234 11.6745 14.4844 11.8802 14.4062 12.0625C14.3281 12.2396 14.2318 12.401 14.1172 12.5469C14.0026 12.6927 13.875 12.8255 13.7344 12.9453C13.599 13.0651 13.474 13.1823 13.3594 13.2969C13.2448 13.4115 13.1484 13.5286 13.0703 13.6484C12.9922 13.763 12.9531 13.888 12.9531 14.0234C12.9531 14.2214 13.0234 14.3906 13.1641 14.5312L17.4688 18.8359C17.6094 18.9766 17.7786 19.0469 17.9766 19.0469C18.112 19.0469 18.237 19.0078 18.3516 18.9297C18.4714 18.8516 18.5885 18.7552 18.7031 18.6406C18.8177 18.526 18.9349 18.401 19.0547 18.2656C19.1745 18.125 19.3073 17.9974 19.4531 17.8828C19.599 17.7682 19.7604 17.6719 19.9375 17.5938C20.1198 17.5156 20.3255 17.4766 20.5547 17.4766ZM19.9062 23C20.2812 23 20.5938 22.9661 20.8438 22.8984C21.099 22.8255 21.3281 22.724 21.5312 22.5938C21.7344 22.4583 21.9323 22.2917 22.125 22.0938C22.3177 21.8958 22.5391 21.6719 22.7891 21.4219C22.9297 21.2812 23 21.112 23 20.9141C23 20.8203 22.9609 20.7109 22.8828 20.5859C22.8099 20.4557 22.7135 20.3203 22.5938 20.1797C22.474 20.0391 22.3385 19.8958 22.1875 19.75C22.0417 19.599 21.8958 19.4583 21.75 19.3281C21.6094 19.1927 21.4766 19.0703 21.3516 18.9609C21.2318 18.8464 21.138 18.7552 21.0703 18.6875C20.9297 18.5469 20.7578 18.4766 20.5547 18.4766C20.4193 18.4766 20.2943 18.5156 20.1797 18.5938C20.0651 18.6719 19.9505 18.7682 19.8359 18.8828C19.7214 18.9974 19.6016 19.125 19.4766 19.2656C19.3568 19.401 19.224 19.526 19.0781 19.6406C18.9323 19.7552 18.7682 19.8516 18.5859 19.9297C18.4089 20.0078 18.2057 20.0469 17.9766 20.0469C17.7474 20.0469 17.526 20.0052 17.3125 19.9219C17.1042 19.8333 16.9193 19.7083 16.7578 19.5469L12.4531 15.2422C12.2917 15.0807 12.1667 14.8958 12.0781 14.6875C11.9948 14.474 11.9531 14.2526 11.9531 14.0234C11.9531 13.7943 11.9922 13.5911 12.0703 13.4141C12.1484 13.2318 12.2448 13.0677 12.3594 12.9219C12.474 12.776 12.599 12.6432 12.7344 12.5234C12.875 12.3984 13.0026 12.2786 13.1172 12.1641C13.2318 12.0495 13.3281 11.9349 13.4062 11.8203C13.4844 11.7057 13.5234 11.5807 13.5234 11.4453C13.5234 11.2422 13.4531 11.0703 13.3125 10.9297C13.2448 10.862 13.1536 10.7682 13.0391 10.6484C12.9297 10.5234 12.8073 10.3906 12.6719 10.25C12.5417 10.1042 12.401 9.95833 12.25 9.8125C12.1042 9.66146 11.9609 9.52604 11.8203 9.40625C11.6797 9.28646 11.5443 9.1901 11.4141 9.11719C11.2891 9.03906 11.1797 9 11.0859 9C10.888 9 10.7188 9.07031 10.5781 9.21094C10.3281 9.46094 10.1042 9.68229 9.90625 9.875C9.71354 10.0677 9.54688 10.2656 9.40625 10.4688C9.27083 10.6719 9.16667 10.901 9.09375 11.1562C9.02604 11.4062 8.99219 11.7161 8.99219 12.0859C8.99219 12.6693 9.08594 13.2708 9.27344 13.8906C9.46615 14.5104 9.72917 15.1302 10.0625 15.75C10.401 16.3698 10.7995 16.9818 11.2578 17.5859C11.7161 18.1849 12.2161 18.7526 12.7578 19.2891C13.2995 19.8255 13.8698 20.3203 14.4688 20.7734C15.0729 21.2266 15.6823 21.6198 16.2969 21.9531C16.9167 22.2812 17.5312 22.5391 18.1406 22.7266C18.7552 22.9089 19.3438 23 19.9062 23Z" fill="rgb(34,102,227)"/></svg>',
                    "Mscrm.Modern.EmailAttendeesCommand": '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 13C19.6667 13 20.3047 13.125 20.9141 13.375C21.5234 13.625 22.0651 13.987 22.5391 14.4609C23.013 14.9349 23.375 15.4766 23.625 16.0859C23.875 16.6953 24 17.3333 24 18C24 18.6927 23.8698 19.3438 23.6094 19.9531C23.349 20.5573 22.9922 21.0859 22.5391 21.5391C22.0859 21.9922 21.5547 22.349 20.9453 22.6094C20.3411 22.8698 19.6927 23 19 23V22C19.5521 22 20.0703 21.8958 20.5547 21.6875C21.0391 21.474 21.4609 21.1875 21.8203 20.8281C22.1849 20.4635 22.4714 20.0391 22.6797 19.5547C22.8932 19.0703 23 18.5521 23 18C23 17.4479 22.8932 16.9297 22.6797 16.4453C22.4714 15.9609 22.1849 15.5391 21.8203 15.1797C21.4609 14.8151 21.0391 14.5286 20.5547 14.3203C20.0703 14.1068 19.5521 14 19 14H14.7109L17.8516 17.1484L17.1484 17.8516L12.7969 13.5L17.1484 9.14844L17.8516 9.85156L14.7109 13H19ZM10.2031 13.5L13.8516 17.1484L13.1484 17.8516L8.79688 13.5L13.1484 9.14844L13.8516 9.85156L10.2031 13.5Z" fill="rgb(34,102,227)"/></svg>',
                    "Mscrm.HomepageGrid.actioncard.OpenOpportunity": '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 8C20.1354 8 20.263 8.02604 20.3828 8.07812C20.5078 8.13021 20.6146 8.20312 20.7031 8.29688C20.7969 8.38542 20.8698 8.49219 20.9219 8.61719C20.974 8.73698 21 8.86458 21 9V16.25C21 16.4115 21.0234 16.5521 21.0703 16.6719C21.1224 16.7917 21.1849 16.9062 21.2578 17.0156C21.3307 17.1198 21.4115 17.2266 21.5 17.3359C21.5885 17.4401 21.6693 17.5573 21.7422 17.6875C21.8151 17.8177 21.875 17.9688 21.9219 18.1406C21.974 18.3125 22 18.5156 22 18.75V21C22 21.1354 21.974 21.2656 21.9219 21.3906C21.8698 21.5104 21.7969 21.6172 21.7031 21.7109C21.6146 21.7995 21.5078 21.8698 21.3828 21.9219C21.263 21.974 21.1354 22 21 22H14V23C14 23.2031 13.9427 23.388 13.8281 23.5547C13.7188 23.7214 13.5703 23.8438 13.3828 23.9219C13.263 23.974 13.1354 24 13 24C12.724 24 12.487 23.901 12.2891 23.7031L10 21.4141V8H20ZM13 20.25C13 20.0156 13.0234 19.8151 13.0703 19.6484C13.1224 19.4766 13.1849 19.3255 13.2578 19.1953C13.3307 19.0599 13.4115 18.9401 13.5 18.8359C13.5885 18.7318 13.6693 18.6276 13.7422 18.5234C13.8151 18.4141 13.875 18.2995 13.9219 18.1797C13.974 18.0547 14 17.9115 14 17.75V12.7109L11 9.71094V21L13 23V20.25ZM21 18.75C21 18.5885 20.974 18.4479 20.9219 18.3281C20.875 18.2083 20.8151 18.0964 20.7422 17.9922C20.6693 17.8828 20.5885 17.776 20.5 17.6719C20.4115 17.5625 20.3307 17.4427 20.2578 17.3125C20.1849 17.1823 20.1224 17.0312 20.0703 16.8594C20.0234 16.6875 20 16.4844 20 16.25V9H11.7109L14.7109 12C14.8047 12.0938 14.875 12.2031 14.9219 12.3281C14.974 12.4479 15 12.5755 15 12.7109V17.75C15 17.9844 14.974 18.1875 14.9219 18.3594C14.875 18.526 14.8151 18.6771 14.7422 18.8125C14.6693 18.9427 14.5885 19.0599 14.5 19.1641C14.4115 19.2682 14.3307 19.375 14.2578 19.4844C14.1849 19.5885 14.1224 19.7031 14.0703 19.8281C14.0234 19.9479 14 20.0885 14 20.25V21H21V18.75Z" fill="rgb(34,102,227)"/></svg>',
                    "Mscrm.HomepageGrid.actioncard.OpenEmailView": '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 13.9375V24H8V13.9375L11 12.4453V8H17.7109L21 11.2891V12.4453L24 13.9375ZM21 13.5547V16.2891L22.8203 14.4688L21 13.5547ZM18 11H19.2891L18 9.71094V11ZM12 9V17H20V12H17V9H12ZM11 13.5547L9.17969 14.4688L11 16.2891V13.5547ZM23 23V15.7109L20.7109 18H11.2891L9 15.7109V23H23ZM19 14H13V13H19V14ZM16 12H13V11H16V12ZM19 16H13V15H19V16Z" fill="rgb(34,102,227)"/></svg>',
                    "Mscrm.HomepageGrid.actioncard.OpenAppointmentView": '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 9H24V23H8V9H11V8H12V9H20V8H21V9ZM11 10H9V12H23V10H21V11H20V10H12V11H11V10ZM9 22H23V13H9V22Z" fill="rgb(34,102,227)"/></svg>',
                    "Mscrm.HomepageGrid.actioncard.OpenRecipientView": '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.7812 13.4141C21.1198 13.5859 21.4245 13.7995 21.6953 14.0547C21.9714 14.3047 22.2057 14.5859 22.3984 14.8984C22.5911 15.2057 22.7396 15.5391 22.8438 15.8984C22.9479 16.2526 23 16.6198 23 17H22C22 16.5885 21.9193 16.2005 21.7578 15.8359C21.6016 15.4714 21.388 15.1536 21.1172 14.8828C20.8464 14.612 20.5286 14.3984 20.1641 14.2422C19.7995 14.0807 19.4115 14 19 14C18.5885 14 18.2005 14.0807 17.8359 14.2422C17.4714 14.3984 17.1536 14.612 16.8828 14.8828C16.612 15.1536 16.3958 15.4714 16.2344 15.8359C16.0781 16.2005 16 16.5885 16 17C16 17.474 15.8906 17.9245 15.6719 18.3516C15.4583 18.7786 15.1615 19.1328 14.7812 19.4141C15.1198 19.5859 15.4245 19.7995 15.6953 20.0547C15.9714 20.3047 16.2057 20.5859 16.3984 20.8984C16.5911 21.2057 16.7396 21.5391 16.8438 21.8984C16.9479 22.2526 17 22.6198 17 23H16C16 22.5885 15.9193 22.2005 15.7578 21.8359C15.6016 21.4714 15.388 21.1536 15.1172 20.8828C14.8464 20.612 14.5286 20.3984 14.1641 20.2422C13.7995 20.0807 13.4115 20 13 20C12.5885 20 12.2005 20.0807 11.8359 20.2422C11.4714 20.3984 11.1536 20.612 10.8828 20.8828C10.612 21.1536 10.3958 21.4714 10.2344 21.8359C10.0781 22.2005 10 22.5885 10 23H9C9 22.6198 9.05208 22.2526 9.15625 21.8984C9.26042 21.5391 9.40885 21.2057 9.60156 20.8984C9.79427 20.5859 10.026 20.3047 10.2969 20.0547C10.5729 19.7995 10.8802 19.5859 11.2188 19.4141C10.8385 19.1328 10.5391 18.7786 10.3203 18.3516C10.1068 17.9245 10 17.474 10 17C10 16.5885 10.0781 16.2005 10.2344 15.8359C10.3958 15.4714 10.612 15.1536 10.8828 14.8828C11.1536 14.612 11.4714 14.3984 11.8359 14.2422C12.2005 14.0807 12.5885 14 13 14C13.474 14 13.9245 14.1094 14.3516 14.3281C14.7786 14.5417 15.1328 14.8385 15.4141 15.2188C15.612 14.8281 15.8646 14.4792 16.1719 14.1719C16.4792 13.8646 16.8281 13.612 17.2188 13.4141C16.8385 13.1328 16.5391 12.7786 16.3203 12.3516C16.1068 11.9245 16 11.474 16 11C16 10.5885 16.0781 10.2005 16.2344 9.83594C16.3958 9.47135 16.612 9.15365 16.8828 8.88281C17.1536 8.61198 17.4714 8.39844 17.8359 8.24219C18.2005 8.08073 18.5885 8 19 8C19.4115 8 19.7995 8.08073 20.1641 8.24219C20.5286 8.39844 20.8464 8.61198 21.1172 8.88281C21.388 9.15365 21.6016 9.47135 21.7578 9.83594C21.9193 10.2005 22 10.5885 22 11C22 11.474 21.8906 11.9245 21.6719 12.3516C21.4583 12.7786 21.1615 13.1328 20.7812 13.4141ZM13 19C13.2708 19 13.5286 18.9479 13.7734 18.8438C14.0182 18.7344 14.2292 18.5911 14.4062 18.4141C14.5885 18.2318 14.7318 18.0208 14.8359 17.7812C14.9453 17.5365 15 17.276 15 17C15 16.7292 14.9453 16.4714 14.8359 16.2266C14.7318 15.9818 14.5885 15.7708 14.4062 15.5938C14.2292 15.4115 14.0182 15.2682 13.7734 15.1641C13.5286 15.0547 13.2708 15 13 15C12.724 15 12.4635 15.0547 12.2188 15.1641C11.9792 15.2682 11.7682 15.4115 11.5859 15.5938C11.4089 15.7708 11.2656 15.9818 11.1562 16.2266C11.0521 16.4714 11 16.7292 11 17C11 17.276 11.0521 17.5365 11.1562 17.7812C11.2656 18.0208 11.4089 18.2318 11.5859 18.4141C11.7682 18.5911 11.9792 18.7344 12.2188 18.8438C12.4635 18.9479 12.724 19 13 19ZM17 11C17 11.276 17.0521 11.5365 17.1562 11.7812C17.2656 12.0208 17.4089 12.2318 17.5859 12.4141C17.7682 12.5911 17.9792 12.7344 18.2188 12.8438C18.4635 12.9479 18.724 13 19 13C19.2708 13 19.5286 12.9479 19.7734 12.8438C20.0182 12.7344 20.2292 12.5911 20.4062 12.4141C20.5885 12.2318 20.7318 12.0208 20.8359 11.7812C20.9453 11.5365 21 11.276 21 11C21 10.7292 20.9453 10.4714 20.8359 10.2266C20.7318 9.98177 20.5885 9.77083 20.4062 9.59375C20.2292 9.41146 20.0182 9.26823 19.7734 9.16406C19.5286 9.05469 19.2708 9 19 9C18.724 9 18.4635 9.05469 18.2188 9.16406C17.9792 9.26823 17.7682 9.41146 17.5859 9.59375C17.4089 9.77083 17.2656 9.98177 17.1562 10.2266C17.0521 10.4714 17 10.7292 17 11Z" fill="rgb(34,102,227)"/></svg>',
                    "Mscrm.HomepageGrid.actioncard.CompleteExchangeTaskCommand": '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.6484 12.6484L20.3516 13.3516L14.5 19.2031L11.6484 16.3516L12.3516 15.6484L14.5 17.7969L19.6484 12.6484ZM16 8C16.7344 8 17.4427 8.09635 18.125 8.28906C18.8073 8.47656 19.4453 8.74479 20.0391 9.09375C20.6328 9.4375 21.1719 9.85417 21.6562 10.3438C22.1458 10.8281 22.5625 11.3672 22.9062 11.9609C23.2552 12.5547 23.5234 13.1927 23.7109 13.875C23.9036 14.5573 24 15.2656 24 16C24 16.7344 23.9036 17.4427 23.7109 18.125C23.5234 18.8073 23.2552 19.4453 22.9062 20.0391C22.5625 20.6328 22.1458 21.1745 21.6562 21.6641C21.1719 22.1484 20.6328 22.5651 20.0391 22.9141C19.4453 23.2578 18.8073 23.526 18.125 23.7188C17.4427 23.9062 16.7344 24 16 24C15.2656 24 14.5573 23.9062 13.875 23.7188C13.1927 23.526 12.5547 23.2578 11.9609 22.9141C11.3672 22.5651 10.8255 22.1484 10.3359 21.6641C9.85156 21.1745 9.4349 20.6328 9.08594 20.0391C8.74219 19.4453 8.47396 18.8099 8.28125 18.1328C8.09375 17.4505 8 16.7396 8 16C8 15.2656 8.09375 14.5573 8.28125 13.875C8.47396 13.1927 8.74219 12.5547 9.08594 11.9609C9.4349 11.3672 9.85156 10.8281 10.3359 10.3438C10.8255 9.85417 11.3672 9.4375 11.9609 9.09375C12.5547 8.74479 13.1901 8.47656 13.8672 8.28906C14.5495 8.09635 15.2604 8 16 8ZM16 23C16.6406 23 17.2578 22.9167 17.8516 22.75C18.4505 22.5833 19.0078 22.349 19.5234 22.0469C20.0443 21.7396 20.5182 21.3724 20.9453 20.9453C21.3724 20.5182 21.737 20.0469 22.0391 19.5312C22.3464 19.0104 22.5833 18.4531 22.75 17.8594C22.9167 17.2656 23 16.6458 23 16C23 15.3594 22.9167 14.7422 22.75 14.1484C22.5833 13.5495 22.3464 12.9922 22.0391 12.4766C21.737 11.9557 21.3724 11.4818 20.9453 11.0547C20.5182 10.6276 20.0443 10.263 19.5234 9.96094C19.0078 9.65365 18.4505 9.41667 17.8516 9.25C17.2578 9.08333 16.6406 9 16 9C15.3594 9 14.7396 9.08333 14.1406 9.25C13.5469 9.41667 12.9896 9.65365 12.4688 9.96094C11.9531 10.263 11.4818 10.6276 11.0547 11.0547C10.6276 11.4818 10.2604 11.9557 9.95312 12.4766C9.65104 12.9922 9.41667 13.5495 9.25 14.1484C9.08333 14.7422 9 15.3594 9 16C9 16.6406 9.08333 17.2604 9.25 17.8594C9.41667 18.4531 9.65104 19.0104 9.95312 19.5312C10.2604 20.0469 10.6276 20.5182 11.0547 20.9453C11.4818 21.3724 11.9531 21.7396 12.4688 22.0469C12.9896 22.349 13.5469 22.5833 14.1406 22.75C14.7344 22.9167 15.3542 23 16 23Z" fill="rgb(34,102,227)"/></svg>',
                    "Mscrm.HomepageGrid.actioncard.EmailAttendeesWeb": '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 13C19.6667 13 20.3047 13.125 20.9141 13.375C21.5234 13.625 22.0651 13.987 22.5391 14.4609C23.013 14.9349 23.375 15.4766 23.625 16.0859C23.875 16.6953 24 17.3333 24 18C24 18.6927 23.8698 19.3438 23.6094 19.9531C23.349 20.5573 22.9922 21.0859 22.5391 21.5391C22.0859 21.9922 21.5547 22.349 20.9453 22.6094C20.3411 22.8698 19.6927 23 19 23V22C19.5521 22 20.0703 21.8958 20.5547 21.6875C21.0391 21.474 21.4609 21.1875 21.8203 20.8281C22.1849 20.4635 22.4714 20.0391 22.6797 19.5547C22.8932 19.0703 23 18.5521 23 18C23 17.4479 22.8932 16.9297 22.6797 16.4453C22.4714 15.9609 22.1849 15.5391 21.8203 15.1797C21.4609 14.8151 21.0391 14.5286 20.5547 14.3203C20.0703 14.1068 19.5521 14 19 14H14.7109L17.8516 17.1484L17.1484 17.8516L12.7969 13.5L17.1484 9.14844L17.8516 9.85156L14.7109 13H19ZM10.2031 13.5L13.8516 17.1484L13.1484 17.8516L8.79688 13.5L13.1484 9.14844L13.8516 9.85156L10.2031 13.5Z" fill="rgb(34,102,227)"/></svg>',
                    "Mscrm.HomepageGrid.actioncard.CreateContactCommand": '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 15H17V14H22V15ZM20 18H17V17H20V18ZM24 10V22H8V10H24ZM23 11H9V21H23V11ZM13 17C12.724 17 12.4635 17.0521 12.2188 17.1562C11.9792 17.2604 11.7682 17.4036 11.5859 17.5859C11.4036 17.7682 11.2604 17.9818 11.1562 18.2266C11.0521 18.4661 11 18.724 11 19H10C10 18.7292 10.0365 18.4661 10.1094 18.2109C10.1823 17.9505 10.2839 17.7083 10.4141 17.4844C10.5495 17.2552 10.7109 17.0469 10.8984 16.8594C11.0911 16.6719 11.3073 16.5104 11.5469 16.375C11.375 16.1927 11.2396 15.9818 11.1406 15.7422C11.0469 15.5026 11 15.2552 11 15C11 14.724 11.0521 14.4661 11.1562 14.2266C11.2604 13.9818 11.4036 13.7682 11.5859 13.5859C11.7682 13.4036 11.9792 13.2604 12.2188 13.1562C12.4635 13.0521 12.724 13 13 13C13.276 13 13.5339 13.0521 13.7734 13.1562C14.0182 13.2604 14.2318 13.4036 14.4141 13.5859C14.5964 13.7682 14.7396 13.9818 14.8438 14.2266C14.9479 14.4661 15 14.724 15 15C15 15.2552 14.9505 15.5026 14.8516 15.7422C14.7578 15.9818 14.625 16.1927 14.4531 16.375C14.6927 16.5104 14.9062 16.6719 15.0938 16.8594C15.2865 17.0469 15.4479 17.2552 15.5781 17.4844C15.7135 17.7083 15.8177 17.9505 15.8906 18.2109C15.9635 18.4661 16 18.7292 16 19H15C15 18.724 14.9479 18.4661 14.8438 18.2266C14.7396 17.9818 14.5964 17.7682 14.4141 17.5859C14.2318 17.4036 14.0182 17.2604 13.7734 17.1562C13.5339 17.0521 13.276 17 13 17ZM12 15C12 15.1406 12.026 15.2708 12.0781 15.3906C12.1302 15.5104 12.2005 15.6172 12.2891 15.7109C12.3828 15.7995 12.4896 15.8698 12.6094 15.9219C12.7292 15.974 12.8594 16 13 16C13.1406 16 13.2708 15.974 13.3906 15.9219C13.5104 15.8698 13.6146 15.7995 13.7031 15.7109C13.7969 15.6172 13.8698 15.5104 13.9219 15.3906C13.974 15.2708 14 15.1406 14 15C14 14.8594 13.974 14.7292 13.9219 14.6094C13.8698 14.4896 13.7969 14.3854 13.7031 14.2969C13.6146 14.2031 13.5104 14.1302 13.3906 14.0781C13.2708 14.026 13.1406 14 13 14C12.8594 14 12.7292 14.026 12.6094 14.0781C12.4896 14.1302 12.3828 14.2031 12.2891 14.2969C12.2005 14.3854 12.1302 14.4896 12.0781 14.6094C12.026 14.7292 12 14.8594 12 15Z" fill="rgb(34,102,227)"/></svg>',
                    "Mscrm.HomepageGrid.actioncard.CreateCaseCommandSolution": '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.5 17C19.3802 17 19.2578 16.9974 19.1328 16.9922C19.013 16.9818 18.8932 16.9635 18.7734 16.9375L12.4766 23.2344C12.2266 23.4844 11.9427 23.6745 11.625 23.8047C11.3073 23.9349 10.9714 24 10.6172 24C10.2578 24 9.91927 23.9323 9.60156 23.7969C9.28385 23.6562 9.00521 23.4688 8.76562 23.2344C8.53125 22.9948 8.34375 22.7161 8.20312 22.3984C8.06771 22.0807 8 21.7422 8 21.3828C8 21.0339 8.0651 20.7005 8.19531 20.3828C8.32552 20.0599 8.51562 19.7734 8.76562 19.5234L15.0625 13.2266C15.0365 13.1068 15.0182 12.987 15.0078 12.8672C15.0026 12.7422 15 12.6198 15 12.5C15 11.8802 15.1172 11.2969 15.3516 10.75C15.5911 10.2031 15.9141 9.72656 16.3203 9.32031C16.7266 8.91406 17.2031 8.59375 17.75 8.35938C18.2969 8.11979 18.8802 8 19.5 8C19.7865 8 20.0469 8.02344 20.2812 8.07031C20.5156 8.11198 20.7422 8.17448 20.9609 8.25781C21.1797 8.34115 21.3932 8.4401 21.6016 8.55469C21.8151 8.66406 22.0417 8.78646 22.2812 8.92188L19.2031 12L20 12.7969L23.0781 9.71875C23.2135 9.95312 23.3359 10.1771 23.4453 10.3906C23.5599 10.6042 23.6589 10.8203 23.7422 11.0391C23.8255 11.2578 23.888 11.487 23.9297 11.7266C23.9766 11.9609 24 12.2188 24 12.5C24 12.9115 23.9453 13.3099 23.8359 13.6953C23.7318 14.0755 23.5807 14.4323 23.3828 14.7656C23.1901 15.099 22.9557 15.4036 22.6797 15.6797C22.4036 15.9557 22.099 16.1927 21.7656 16.3906C21.4323 16.5833 21.0729 16.7344 20.6875 16.8438C20.3073 16.9479 19.9115 17 19.5 17ZM18.4531 15.8438C18.625 15.8854 18.7969 15.9219 18.9688 15.9531C19.1406 15.9844 19.3177 16 19.5 16C19.9844 16 20.4375 15.9089 20.8594 15.7266C21.2865 15.5391 21.6562 15.2891 21.9688 14.9766C22.2865 14.6589 22.5365 14.2891 22.7188 13.8672C22.9062 13.4401 23 12.9844 23 12.5C23 12.1198 22.9375 11.7526 22.8125 11.3984L20 14.2031L17.7969 12L20.6016 9.1875C20.2474 9.0625 19.8802 9 19.5 9C19.0156 9 18.5599 9.09375 18.1328 9.28125C17.7109 9.46354 17.3411 9.71354 17.0234 10.0312C16.7109 10.3438 16.4609 10.7135 16.2734 11.1406C16.0911 11.5625 16 12.0156 16 12.5C16 12.6823 16.0156 12.8594 16.0469 13.0312C16.0781 13.2031 16.1146 13.375 16.1562 13.5469L9.47656 20.2344C9.32552 20.3854 9.20833 20.5599 9.125 20.7578C9.04167 20.9557 9 21.1641 9 21.3828C9 21.6016 9.04167 21.8099 9.125 22.0078C9.21354 22.2057 9.33073 22.3776 9.47656 22.5234C9.6224 22.6693 9.79427 22.7865 9.99219 22.875C10.1901 22.9583 10.3984 23 10.6172 23C10.8359 23 11.0443 22.9583 11.2422 22.875C11.4401 22.7917 11.6146 22.6745 11.7656 22.5234L18.4531 15.8438ZM22 19V21H24V22H22V24H21V22H19V21H21V19H22Z" fill="rgb(34,102,227)"/></svg>',
                    "Mscrm.HomepageGrid.actioncard.ConvertToCaseCommand": '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 13H16V17.2891L17.2891 16L18 16.7109L15.5 19.2031L13 16.7109L13.7109 16L15 17.2891V13ZM12 8H19V12H12V8ZM18 11V9H13V11H18ZM12 24V20H19V24H12ZM13 21V23H18V21H13Z" fill="rgb(34,102,227)"/></svg>',
                    "Mscrm.HomepageGrid.actioncard.OpenOpportunitySolution": '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 8C20.1354 8 20.263 8.02604 20.3828 8.07812C20.5078 8.13021 20.6146 8.20312 20.7031 8.29688C20.7969 8.38542 20.8698 8.49219 20.9219 8.61719C20.974 8.73698 21 8.86458 21 9V16.25C21 16.4115 21.0234 16.5521 21.0703 16.6719C21.1224 16.7917 21.1849 16.9062 21.2578 17.0156C21.3307 17.1198 21.4115 17.2266 21.5 17.3359C21.5885 17.4401 21.6693 17.5573 21.7422 17.6875C21.8151 17.8177 21.875 17.9688 21.9219 18.1406C21.974 18.3125 22 18.5156 22 18.75V21C22 21.1354 21.974 21.2656 21.9219 21.3906C21.8698 21.5104 21.7969 21.6172 21.7031 21.7109C21.6146 21.7995 21.5078 21.8698 21.3828 21.9219C21.263 21.974 21.1354 22 21 22H14V23C14 23.2031 13.9427 23.388 13.8281 23.5547C13.7188 23.7214 13.5703 23.8438 13.3828 23.9219C13.263 23.974 13.1354 24 13 24C12.724 24 12.487 23.901 12.2891 23.7031L10 21.4141V8H20ZM13 20.25C13 20.0156 13.0234 19.8151 13.0703 19.6484C13.1224 19.4766 13.1849 19.3255 13.2578 19.1953C13.3307 19.0599 13.4115 18.9401 13.5 18.8359C13.5885 18.7318 13.6693 18.6276 13.7422 18.5234C13.8151 18.4141 13.875 18.2995 13.9219 18.1797C13.974 18.0547 14 17.9115 14 17.75V12.7109L11 9.71094V21L13 23V20.25ZM21 18.75C21 18.5885 20.974 18.4479 20.9219 18.3281C20.875 18.2083 20.8151 18.0964 20.7422 17.9922C20.6693 17.8828 20.5885 17.776 20.5 17.6719C20.4115 17.5625 20.3307 17.4427 20.2578 17.3125C20.1849 17.1823 20.1224 17.0312 20.0703 16.8594C20.0234 16.6875 20 16.4844 20 16.25V9H11.7109L14.7109 12C14.8047 12.0938 14.875 12.2031 14.9219 12.3281C14.974 12.4479 15 12.5755 15 12.7109V17.75C15 17.9844 14.974 18.1875 14.9219 18.3594C14.875 18.526 14.8151 18.6771 14.7422 18.8125C14.6693 18.9427 14.5885 19.0599 14.5 19.1641C14.4115 19.2682 14.3307 19.375 14.2578 19.4844C14.1849 19.5885 14.1224 19.7031 14.0703 19.8281C14.0234 19.9479 14 20.0885 14 20.25V21H21V18.75Z" fill="rgb(34,102,227)"/></svg>',
                    "Mscrm.HomepageGrid.actioncard.AddAsCompetitorCommandSolution": '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 13H13V12H16V13ZM12 13H11V12H12V13ZM16 15H13V14H16V15ZM12 15H11V14H12V15ZM13 16H16V17H13V16ZM11 16H12V17H11V16ZM24 21V22H22V24H21V22H19V21H21V19H22V21H24ZM10 23H20V24H9V8H17.7109L22 12.2891V18H21V13H17V9H10V23ZM18 12H20.2891L18 9.71094V12Z" fill="rgb(34,102,227)"/></svg>',
                    "Mscrm.HomepageGrid.actioncard.AddAsStakeHolderCommandSolution": '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 15C17.5833 15 17.1927 15.0781 16.8281 15.2344C16.4688 15.3906 16.151 15.6068 15.875 15.8828C15.6042 16.1536 15.3906 16.4714 15.2344 16.8359C15.0781 17.2005 15 17.5885 15 18C15 18.4792 14.8932 18.9297 14.6797 19.3516C14.4661 19.7734 14.1667 20.1276 13.7812 20.4141C14.1198 20.5859 14.4245 20.7995 14.6953 21.0547C14.9714 21.3047 15.2057 21.5859 15.3984 21.8984C15.5911 22.2057 15.7396 22.5391 15.8438 22.8984C15.9479 23.2526 16 23.6198 16 24H15C15 23.5885 14.9219 23.2005 14.7656 22.8359C14.6094 22.4714 14.3932 22.1536 14.1172 21.8828C13.8464 21.6068 13.5286 21.3906 13.1641 21.2344C12.7995 21.0781 12.4115 21 12 21C11.5833 21 11.1927 21.0781 10.8281 21.2344C10.4688 21.3906 10.151 21.6068 9.875 21.8828C9.60417 22.1536 9.39062 22.4714 9.23438 22.8359C9.07812 23.2005 9 23.5885 9 24H8C8 23.6198 8.05208 23.2526 8.15625 22.8984C8.26042 22.5391 8.40885 22.2057 8.60156 21.8984C8.79427 21.5859 9.02604 21.3047 9.29688 21.0547C9.57292 20.7995 9.88021 20.5859 10.2188 20.4141C9.83333 20.1276 9.53385 19.7734 9.32031 19.3516C9.10677 18.9297 9 18.4792 9 18C9 17.5885 9.07812 17.2005 9.23438 16.8359C9.39062 16.4714 9.60417 16.1536 9.875 15.8828C10.151 15.6068 10.4688 15.3906 10.8281 15.2344C11.1927 15.0781 11.5833 15 12 15C12.4792 15 12.9297 15.1068 13.3516 15.3203C13.7734 15.5339 14.1276 15.8333 14.4141 16.2188C14.612 15.8281 14.8646 15.4792 15.1719 15.1719C15.4792 14.8646 15.8281 14.612 16.2188 14.4141C15.8333 14.1276 15.5339 13.7734 15.3203 13.3516C15.1068 12.9297 15 12.4792 15 12C15 11.5885 15.0781 11.2005 15.2344 10.8359C15.3906 10.4714 15.6042 10.1536 15.875 9.88281C16.151 9.60677 16.4688 9.39062 16.8281 9.23438C17.1927 9.07812 17.5833 9 18 9C18.4115 9 18.7995 9.07812 19.1641 9.23438C19.5286 9.39062 19.8464 9.60677 20.1172 9.88281C20.3932 10.1536 20.6094 10.4714 20.7656 10.8359C20.9219 11.2005 21 11.5885 21 12C21 12.4792 20.8932 12.9297 20.6797 13.3516C20.4661 13.7734 20.1667 14.1276 19.7812 14.4141C20.1198 14.5859 20.4245 14.7995 20.6953 15.0547C20.9714 15.3047 21.2057 15.5859 21.3984 15.8984C21.5911 16.2057 21.7396 16.5391 21.8438 16.8984C21.9479 17.2526 22 17.6198 22 18H21C21 17.5885 20.9219 17.2005 20.7656 16.8359C20.6094 16.4714 20.3932 16.1536 20.1172 15.8828C19.8464 15.6068 19.5286 15.3906 19.1641 15.2344C18.7995 15.0781 18.4115 15 18 15ZM16 12C16 12.276 16.0521 12.5365 16.1562 12.7812C16.2604 13.0208 16.4036 13.2318 16.5859 13.4141C16.7682 13.5964 16.9792 13.7396 17.2188 13.8438C17.4635 13.9479 17.724 14 18 14C18.276 14 18.5339 13.9479 18.7734 13.8438C19.0182 13.7396 19.2318 13.5964 19.4141 13.4141C19.5964 13.2318 19.7396 13.0208 19.8438 12.7812C19.9479 12.5365 20 12.276 20 12C20 11.724 19.9479 11.4661 19.8438 11.2266C19.7396 10.9818 19.5964 10.7682 19.4141 10.5859C19.2318 10.4036 19.0182 10.2604 18.7734 10.1562C18.5339 10.0521 18.276 10 18 10C17.724 10 17.4635 10.0521 17.2188 10.1562C16.9792 10.2604 16.7682 10.4036 16.5859 10.5859C16.4036 10.7682 16.2604 10.9818 16.1562 11.2266C16.0521 11.4661 16 11.724 16 12ZM12 20C12.276 20 12.5339 19.9479 12.7734 19.8438C13.0182 19.7396 13.2318 19.5964 13.4141 19.4141C13.5964 19.2318 13.7396 19.0208 13.8438 18.7812C13.9479 18.5365 14 18.276 14 18C14 17.724 13.9479 17.4661 13.8438 17.2266C13.7396 16.9818 13.5964 16.7682 13.4141 16.5859C13.2318 16.4036 13.0182 16.2604 12.7734 16.1562C12.5339 16.0521 12.276 16 12 16C11.724 16 11.4635 16.0521 11.2188 16.1562C10.9792 16.2604 10.7682 16.4036 10.5859 16.5859C10.4036 16.7682 10.2604 16.9818 10.1562 17.2266C10.0521 17.4661 10 17.724 10 18C10 18.276 10.0521 18.5365 10.1562 18.7812C10.2604 19.0208 10.4036 19.2318 10.5859 19.4141C10.7682 19.5964 10.9792 19.7396 11.2188 19.8438C11.4635 19.9479 11.724 20 12 20ZM24 22H22V24H21V22H19V21H21V19H22V21H24V22Z" fill="rgb(34,102,227)"/></svg>',
                    "Mscrm.HomepageGrid.actioncard.NoLongerInOrgCardCommand": '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.125 15.3906C16.7448 15.6302 17.3099 15.9635 17.8203 16.3906C18.3307 16.8177 18.7578 17.3151 19.1016 17.8828L18.375 18.6094C18.1562 18.2083 17.8906 17.849 17.5781 17.5312C17.2656 17.2083 16.9193 16.9349 16.5391 16.7109C16.1641 16.4818 15.7604 16.3073 15.3281 16.1875C14.901 16.0625 14.4583 16 14 16C13.5417 16 13.099 16.0599 12.6719 16.1797C12.2448 16.2995 11.8464 16.4688 11.4766 16.6875C11.1068 16.901 10.7682 17.1615 10.4609 17.4688C10.1589 17.7708 9.89844 18.1068 9.67969 18.4766C9.46615 18.8464 9.29948 19.2448 9.17969 19.6719C9.0599 20.099 9 20.5417 9 21H8C8 20.375 8.09115 19.7734 8.27344 19.1953C8.46094 18.6172 8.72396 18.0833 9.0625 17.5938C9.40104 17.1042 9.80729 16.6693 10.2812 16.2891C10.7604 15.9089 11.2917 15.6094 11.875 15.3906C11.2865 15.0052 10.8255 14.5208 10.4922 13.9375C10.1641 13.3542 10 12.7083 10 12C10 11.4479 10.1042 10.9297 10.3125 10.4453C10.5208 9.95573 10.8047 9.53125 11.1641 9.17188C11.5286 8.80729 11.9531 8.52083 12.4375 8.3125C12.9271 8.10417 13.4479 8 14 8C14.5521 8 15.0703 8.10417 15.5547 8.3125C16.0443 8.52083 16.4688 8.80729 16.8281 9.17188C17.1927 9.53125 17.4792 9.95573 17.6875 10.4453C17.8958 10.9297 18 11.4479 18 12C18 12.3438 17.9557 12.6797 17.8672 13.0078C17.7839 13.3359 17.6615 13.6458 17.5 13.9375C17.3385 14.2292 17.1406 14.5 16.9062 14.75C16.6771 14.9948 16.4167 15.2083 16.125 15.3906ZM11 12C11 12.4167 11.0781 12.8073 11.2344 13.1719C11.3906 13.5312 11.6042 13.849 11.875 14.125C12.151 14.3958 12.4688 14.6094 12.8281 14.7656C13.1927 14.9219 13.5833 15 14 15C14.4115 15 14.7995 14.9219 15.1641 14.7656C15.5286 14.6094 15.8464 14.3958 16.1172 14.125C16.3932 13.849 16.6094 13.5312 16.7656 13.1719C16.9219 12.8073 17 12.4167 17 12C17 11.5885 16.9219 11.2005 16.7656 10.8359C16.6094 10.4714 16.3932 10.1536 16.1172 9.88281C15.8464 9.60677 15.5286 9.39062 15.1641 9.23438C14.7995 9.07812 14.4115 9 14 9C13.5833 9 13.1927 9.07812 12.8281 9.23438C12.4688 9.39062 12.151 9.60677 11.875 9.88281C11.6042 10.1536 11.3906 10.4714 11.2344 10.8359C11.0781 11.2005 11 11.5885 11 12ZM23.9766 19.7344L22.2109 21.5L23.9766 23.2734L23.2734 23.9766L21.5 22.2109L19.7266 23.9844L19.0234 23.2734L20.7969 21.5L19.0234 19.7266L19.7266 19.0234L21.5 20.7969L23.2734 19.0234L23.9766 19.7344Z" fill="rgb(34,102,227)"/></svg>',
                    "Mscrm.HomepageGrid.actioncard.FlowCommand": '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 10H24V15H19V13H18.0625L14.5547 20H13V22H8V17H13V19H13.9375L17.4453 12H19V10ZM12 21V18H9V21H12ZM23 14V11H20V14H23Z" fill="rgb(34,102,227)"/></svg>',
                };
                IconFactory.MiscIcons = {
                    Snooze: 'data:image/svg+xml;utf8,<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 14C6.35417 14 5.73177 13.9167 5.13281 13.75C4.53906 13.5833 3.98177 13.349 3.46094 13.0469C2.94531 12.7396 2.47396 12.375 2.04688 11.9531C1.625 11.526 1.26042 11.0547 0.953125 10.5391C0.651042 10.0182 0.416667 9.46094 0.25 8.86719C0.0833333 8.26823 0 7.64583 0 7C0 6.35417 0.0833333 5.73438 0.25 5.14062C0.416667 4.54167 0.651042 3.98438 0.953125 3.46875C1.26042 2.94792 1.625 2.47656 2.04688 2.05469C2.47396 1.6276 2.94531 1.26302 3.46094 0.960938C3.98177 0.653646 4.53906 0.416667 5.13281 0.25C5.73177 0.0833333 6.35417 0 7 0C7.64583 0 8.26562 0.0833333 8.85938 0.25C9.45833 0.416667 10.0156 0.653646 10.5312 0.960938C11.0521 1.26302 11.5234 1.6276 11.9453 2.05469C12.3724 2.47656 12.737 2.94792 13.0391 3.46875C13.3464 3.98438 13.5833 4.54167 13.75 5.14062C13.9167 5.73438 14 6.35417 14 7C14 7.64583 13.9167 8.26823 13.75 8.86719C13.5833 9.46094 13.3464 10.0182 13.0391 10.5391C12.737 11.0547 12.3724 11.526 11.9453 11.9531C11.5234 12.375 11.0521 12.7396 10.5312 13.0469C10.0156 13.349 9.45833 13.5833 8.85938 13.75C8.26562 13.9167 7.64583 14 7 14ZM7 1C6.17188 1 5.39323 1.15885 4.66406 1.47656C3.9401 1.78906 3.30469 2.21875 2.75781 2.76562C2.21615 3.30729 1.78646 3.94271 1.46875 4.67188C1.15625 5.39583 1 6.17188 1 7C1 7.82812 1.15625 8.60677 1.46875 9.33594C1.78646 10.0599 2.21615 10.6953 2.75781 11.2422C3.30469 11.7839 3.9401 12.2135 4.66406 12.5312C5.39323 12.8438 6.17188 13 7 13C7.82812 13 8.60417 12.8438 9.32812 12.5312C10.0573 12.2135 10.6927 11.7839 11.2344 11.2422C11.7812 10.6953 12.2109 10.0599 12.5234 9.33594C12.8411 8.60677 13 7.82812 13 7C13 6.17188 12.8411 5.39583 12.5234 4.67188C12.2109 3.94271 11.7812 3.30729 11.2344 2.76562C10.6927 2.21875 10.0573 1.78906 9.32812 1.47656C8.60417 1.15885 7.82812 1 7 1ZM7 7V3H6V8H10V7H7Z" fill="rgb(128,128,128)"/></svg>',
                    Dismiss: 'data:image/svg+xml;utf8,<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.71094 7L13.1016 12.3984L12.3984 13.1016L7 7.71094L1.60156 13.1016L0.898438 12.3984L6.28906 7L0.898438 1.60156L1.60156 0.898438L7 6.28906L12.3984 0.898438L13.1016 1.60156L7.71094 7Z" fill="rgb(128,128,128)"/></svg>',
                    Expand: 'data:image/svg+xml;utf8,<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.541 0.0449219L11.959 1.45703L6 7.41602L0.0410156 1.45703L1.45898 0.0449219L6 4.58594L10.541 0.0449219Z" fill="rgb(96,94,92)" /></svg>',
                    Collapse: 'data:image/svg+xml;utf8,<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 0.583984L11.959 6.54297L10.541 7.95508L6 3.41406L1.45898 7.95508L0.0410156 6.54297L6 0.583984Z" fill="rgb(96,94,92)" /></svg>',
                    ChevronRight: 'data:image/svg+xml;utf8,<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.45703 0.0410156L7.41602 6L1.45703 11.959L0.0449219 10.541L4.58594 6L0.0449219 1.45898L1.45703 0.0410156Z" fill="rgb(96,94,92)"/></svg>',
                    Dislike: 'data:image/svg+xml;utf8,<svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.625 0.5C6.32031 0.5 6.99414 0.634766 7.64648 0.904297C7.92773 1.01758 8.20898 1.10352 8.49023 1.16211C8.77539 1.2207 9.07031 1.25 9.375 1.25H12V6.5H9.55664C9.30273 6.5 9.0625 6.54688 8.83594 6.64062C8.61328 6.73438 8.41211 6.87109 8.23242 7.05078L4.58789 10.6895C4.49023 10.7871 4.39258 10.8633 4.29492 10.918C4.19727 10.9727 4.07812 11 3.9375 11C3.80859 11 3.6875 10.9766 3.57422 10.9297C3.46094 10.8789 3.36133 10.8105 3.27539 10.7246C3.18945 10.6387 3.12109 10.5391 3.07031 10.4258C3.02344 10.3125 3 10.1914 3 10.0625C3 9.74609 3.03516 9.44531 3.10547 9.16016C3.17578 8.87109 3.2793 8.58594 3.41602 8.30469C3.49414 8.13672 3.56055 7.9668 3.61523 7.79492C3.66992 7.61914 3.70703 7.4375 3.72656 7.25H1.125C0.972656 7.25 0.828125 7.2207 0.691406 7.16211C0.554688 7.10352 0.433594 7.02344 0.328125 6.92188C0.226562 6.82031 0.146484 6.70117 0.0878906 6.56445C0.0292969 6.42773 0 6.28125 0 6.125C0 6 0.0195312 5.88086 0.0585938 5.76758L1.55859 1.26758C1.63672 1.03711 1.77344 0.851562 1.96875 0.710938C2.16406 0.570312 2.38281 0.5 2.625 0.5H5.625ZM11.25 2H9.375C8.67578 2 8.00195 1.86523 7.35352 1.5957C6.79102 1.36523 6.21484 1.25 5.625 1.25H2.625C2.54688 1.25 2.47461 1.27344 2.4082 1.32031C2.3418 1.36719 2.29492 1.42969 2.26758 1.50781C2.24805 1.5625 2.21094 1.66797 2.15625 1.82422C2.10547 1.98047 2.04297 2.16992 1.96875 2.39258C1.89453 2.61133 1.8125 2.85352 1.72266 3.11914C1.63281 3.38086 1.54297 3.64648 1.45312 3.91602C1.36328 4.18555 1.27539 4.44922 1.18945 4.70703C1.10742 4.96094 1.0332 5.19141 0.966797 5.39844C0.900391 5.60156 0.847656 5.76953 0.808594 5.90234C0.769531 6.03125 0.75 6.10547 0.75 6.125C0.75 6.22656 0.787109 6.31445 0.861328 6.38867C0.935547 6.46289 1.02344 6.5 1.125 6.5H4.5C4.5 6.70703 4.49414 6.90039 4.48242 7.08008C4.47461 7.25586 4.45508 7.42773 4.42383 7.5957C4.39648 7.76367 4.35547 7.93164 4.30078 8.09961C4.24609 8.26758 4.17383 8.44531 4.08398 8.63281C3.97461 8.85938 3.89062 9.0918 3.83203 9.33008C3.77734 9.56445 3.75 9.80859 3.75 10.0625C3.75 10.1172 3.76758 10.1621 3.80273 10.1973C3.83789 10.2324 3.88281 10.25 3.9375 10.25C3.96094 10.25 3.98047 10.2422 3.99609 10.2266C4.01562 10.207 4.0332 10.1895 4.04883 10.1738L7.69922 6.51758C7.82422 6.39258 7.95703 6.2832 8.09766 6.18945C8.24219 6.0957 8.39453 6.01562 8.55469 5.94922C8.86719 5.81641 9.20117 5.75 9.55664 5.75H11.25V2Z" fill="rgb(128,128,128)" /></svg>',
                    Like: 'data:image/svg+xml;utf8,<svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.875 3.75C11.0273 3.75 11.1719 3.7793 11.3086 3.83789C11.4453 3.89648 11.5645 3.97656 11.666 4.07812C11.7715 4.17969 11.8535 4.29883 11.9121 4.43555C11.9707 4.57227 12 4.71875 12 4.875C12 5 11.9805 5.11914 11.9414 5.23242L10.4414 9.73242C10.4023 9.8457 10.3477 9.95117 10.2773 10.0488C10.207 10.1426 10.125 10.2227 10.0312 10.2891C9.9375 10.3555 9.83398 10.4082 9.7207 10.4473C9.61133 10.4824 9.49609 10.5 9.375 10.5H6.375C5.67578 10.5 5.00195 10.3652 4.35352 10.0957C4.07227 9.98242 3.78906 9.89648 3.50391 9.83789C3.22266 9.7793 2.92969 9.75 2.625 9.75H0V4.5H2.44336C2.69727 4.5 2.93555 4.45312 3.1582 4.35938C3.38477 4.26562 3.58789 4.12891 3.76758 3.94922L7.41211 0.310547C7.50977 0.212891 7.60742 0.136719 7.70508 0.0820312C7.80273 0.0273438 7.92188 0 8.0625 0C8.19141 0 8.3125 0.0253906 8.42578 0.0761719C8.53906 0.123047 8.63867 0.189453 8.72461 0.275391C8.81055 0.361328 8.87695 0.460938 8.92383 0.574219C8.97461 0.6875 9 0.808594 9 0.9375C9 1.25391 8.96484 1.55664 8.89453 1.8457C8.82422 2.13086 8.7207 2.41406 8.58398 2.69531C8.50586 2.86328 8.43945 3.03516 8.38477 3.21094C8.33008 3.38281 8.29297 3.5625 8.27344 3.75H10.875ZM9.375 9.75C9.45312 9.75 9.52539 9.72656 9.5918 9.67969C9.6582 9.63281 9.70508 9.57031 9.73242 9.49219C9.75195 9.4375 9.78711 9.33203 9.83789 9.17578C9.89258 9.01953 9.95703 8.83203 10.0312 8.61328C10.1055 8.39062 10.1875 8.14844 10.2773 7.88672C10.3672 7.62109 10.457 7.35352 10.5469 7.08398C10.6367 6.81445 10.7227 6.55273 10.8047 6.29883C10.8906 6.04102 10.9668 5.81055 11.0332 5.60742C11.0996 5.40039 11.1523 5.23242 11.1914 5.10352C11.2305 4.9707 11.25 4.89453 11.25 4.875C11.25 4.77344 11.2129 4.68555 11.1387 4.61133C11.0645 4.53711 10.9766 4.5 10.875 4.5H7.5C7.5 4.29297 7.50391 4.10156 7.51172 3.92578C7.52344 3.74609 7.54297 3.57227 7.57031 3.4043C7.60156 3.23633 7.64453 3.06836 7.69922 2.90039C7.75391 2.73242 7.82617 2.55469 7.91602 2.36719C8.02539 2.14062 8.10742 1.91016 8.16211 1.67578C8.2207 1.4375 8.25 1.19141 8.25 0.9375C8.25 0.882813 8.23242 0.837891 8.19727 0.802734C8.16211 0.767578 8.11719 0.75 8.0625 0.75C8.03906 0.75 8.01758 0.759766 7.99805 0.779297C7.98242 0.794922 7.9668 0.810547 7.95117 0.826172L4.30078 4.48242C4.17578 4.60742 4.04102 4.7168 3.89648 4.81055C3.75586 4.9043 3.60547 4.98438 3.44531 5.05078C3.13281 5.18359 2.79883 5.25 2.44336 5.25H0.75V9H2.625C3.32031 9 3.99414 9.13477 4.64648 9.4043C5.20898 9.63477 5.78516 9.75 6.375 9.75H9.375Z" fill="rgb(128,128,128)" /></svg>',
                    TopPeopleCard: 'data:image/svg+xml;utf8,<svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.78125 11.4141C6.11979 11.5859 6.42448 11.7995 6.69531 12.0547C6.97135 12.3047 7.20573 12.5859 7.39844 12.8984C7.59115 13.2057 7.73958 13.5391 7.84375 13.8984C7.94792 14.2526 8 14.6198 8 15H7C7 14.5885 6.92188 14.2005 6.76562 13.8359C6.60938 13.4714 6.39323 13.1536 6.11719 12.8828C5.84635 12.6068 5.52865 12.3906 5.16406 12.2344C4.79948 12.0781 4.41146 12 4 12C3.58333 12 3.19271 12.0781 2.82812 12.2344C2.46875 12.3906 2.15104 12.6068 1.875 12.8828C1.60417 13.1536 1.39062 13.4714 1.23438 13.8359C1.07812 14.2005 1 14.5885 1 15H0C0 14.6198 0.0520833 14.2526 0.15625 13.8984C0.260417 13.5391 0.408854 13.2057 0.601562 12.8984C0.794271 12.5859 1.02604 12.3047 1.29688 12.0547C1.57292 11.7995 1.88021 11.5859 2.21875 11.4141C1.83333 11.1276 1.53385 10.7734 1.32031 10.3516C1.10677 9.92969 1 9.47917 1 9C1 8.58854 1.07812 8.20052 1.23438 7.83594C1.39062 7.47135 1.60417 7.15365 1.875 6.88281C2.15104 6.60677 2.46875 6.39062 2.82812 6.23438C3.19271 6.07812 3.58333 6 4 6C4.47917 6 4.92969 6.10677 5.35156 6.32031C5.77344 6.53385 6.1276 6.83333 6.41406 7.21875C6.61198 6.82812 6.86458 6.47917 7.17188 6.17188C7.47917 5.86458 7.82812 5.61198 8.21875 5.41406C7.83333 5.1276 7.53385 4.77344 7.32031 4.35156C7.10677 3.92969 7 3.47917 7 3C7 2.58854 7.07812 2.20052 7.23438 1.83594C7.39062 1.47135 7.60417 1.15365 7.875 0.882812C8.15104 0.606771 8.46875 0.390625 8.82812 0.234375C9.19271 0.078125 9.58333 0 10 0C10.4115 0 10.7995 0.078125 11.1641 0.234375C11.5286 0.390625 11.8464 0.606771 12.1172 0.882812C12.3932 1.15365 12.6094 1.47135 12.7656 1.83594C12.9219 2.20052 13 2.58854 13 3C13 3.47917 12.8932 3.92969 12.6797 4.35156C12.4661 4.77344 12.1667 5.1276 11.7812 5.41406C12.1198 5.58594 12.4245 5.79948 12.6953 6.05469C12.9714 6.30469 13.2057 6.58594 13.3984 6.89844C13.5911 7.20573 13.7396 7.53906 13.8438 7.89844C13.9479 8.2526 14 8.61979 14 9H13C13 8.58854 12.9219 8.20052 12.7656 7.83594C12.6094 7.47135 12.3932 7.15365 12.1172 6.88281C11.8464 6.60677 11.5286 6.39062 11.1641 6.23438C10.7995 6.07812 10.4115 6 10 6C9.58333 6 9.19271 6.07812 8.82812 6.23438C8.46875 6.39062 8.15104 6.60677 7.875 6.88281C7.60417 7.15365 7.39062 7.47135 7.23438 7.83594C7.07812 8.20052 7 8.58854 7 9C7 9.47917 6.89323 9.92969 6.67969 10.3516C6.46615 10.7734 6.16667 11.1276 5.78125 11.4141ZM8 3C8 3.27604 8.05208 3.53646 8.15625 3.78125C8.26042 4.02083 8.40365 4.23177 8.58594 4.41406C8.76823 4.59635 8.97917 4.73958 9.21875 4.84375C9.46354 4.94792 9.72396 5 10 5C10.276 5 10.5339 4.94792 10.7734 4.84375C11.0182 4.73958 11.2318 4.59635 11.4141 4.41406C11.5964 4.23177 11.7396 4.02083 11.8438 3.78125C11.9479 3.53646 12 3.27604 12 3C12 2.72396 11.9479 2.46615 11.8438 2.22656C11.7396 1.98177 11.5964 1.76823 11.4141 1.58594C11.2318 1.40365 11.0182 1.26042 10.7734 1.15625C10.5339 1.05208 10.276 1 10 1C9.72396 1 9.46354 1.05208 9.21875 1.15625C8.97917 1.26042 8.76823 1.40365 8.58594 1.58594C8.40365 1.76823 8.26042 1.98177 8.15625 2.22656C8.05208 2.46615 8 2.72396 8 3ZM2 9C2 9.27604 2.05208 9.53646 2.15625 9.78125C2.26042 10.0208 2.40365 10.2318 2.58594 10.4141C2.76823 10.5964 2.97917 10.7396 3.21875 10.8438C3.46354 10.9479 3.72396 11 4 11C4.27604 11 4.53385 10.9479 4.77344 10.8438C5.01823 10.7396 5.23177 10.5964 5.41406 10.4141C5.59635 10.2318 5.73958 10.0208 5.84375 9.78125C5.94792 9.53646 6 9.27604 6 9C6 8.72396 5.94792 8.46615 5.84375 8.22656C5.73958 7.98177 5.59635 7.76823 5.41406 7.58594C5.23177 7.40365 5.01823 7.26042 4.77344 7.15625C4.53385 7.05208 4.27604 7 4 7C3.72396 7 3.46354 7.05208 3.21875 7.15625C2.97917 7.26042 2.76823 7.40365 2.58594 7.58594C2.40365 7.76823 2.26042 7.98177 2.15625 8.22656C2.05208 8.46615 2 8.72396 2 9ZM13.75 16L11.5 14.2422L9.25 16L10.1562 13.1875L8 11.5H10.6953L11.5 9L12.3047 11.5H15L12.8438 13.1875L13.75 16Z" fill="rgb(96,94,92)"/></svg>',
                    TopRecordCard: 'data:image/svg+xml;utf8,<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 0V16L5 13.4766L0 16V0H10ZM9 1H1V14.375C1.67188 14.0365 2.33854 13.6979 3 13.3594C3.66146 13.0208 4.32812 12.6849 5 12.3516C5.67188 12.6849 6.33854 13.0208 7 13.3594C7.66146 13.6979 8.32812 14.0365 9 14.375V1Z" fill="rgb(96,94,92)"/></svg>',
                    TeaserBackground: 'data:image/svg+xml;utf8,<svg width="336" height="167" viewBox="0 0 336 167" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 2C0 0.895433 0.895431 0 2 0H334C335.105 0 336 0.895431 336 2V167H0V2Z" fill="rgb(250,249,248)"/></svg>',
                    MeetingGroup: 'data:image/svg+xml;utf8,<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6H7V7H6V6ZM9 12H10V13H9V12ZM12 6H13V7H12V6ZM9 6H10V7H9V6ZM6 8H7V9H6V8ZM3 8H4V9H3V8ZM12 8H13V9H12V8ZM9 8H10V9H9V8ZM6 10H7V11H6V10ZM3 10H4V11H3V10ZM12 10H13V11H12V10ZM9 10H10V11H9V10ZM6 12H7V13H6V12ZM3 12H4V13H3V12ZM16 1V15H0V1H3V0H4V1H12V0H13V1H16ZM1 2V4H15V2H13V3H12V2H4V3H3V2H1ZM15 14V5H1V14H15Z" fill="rgb(96,94,92)"/></svg>',
                    AlertGroup: 'data:image/svg+xml;utf8,<svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 14V15.25H10.5C10.5 15.5951 10.4349 15.9206 10.3047 16.2266C10.1745 16.526 9.99544 16.7897 9.76758 17.0176C9.53971 17.2454 9.27279 17.4245 8.9668 17.5547C8.66732 17.6849 8.34505 17.75 8 17.75C7.65495 17.75 7.32943 17.6849 7.02344 17.5547C6.72396 17.4245 6.46029 17.2454 6.23242 17.0176C6.00456 16.7897 5.82552 16.526 5.69531 16.2266C5.5651 15.9206 5.5 15.5951 5.5 15.25H0.5V14H1.75V6.5C1.75 5.92708 1.82487 5.3737 1.97461 4.83984C2.12435 4.30599 2.33268 3.80794 2.59961 3.3457C2.87305 2.88346 3.19857 2.46354 3.57617 2.08594C3.96029 1.70182 4.38346 1.3763 4.8457 1.10938C5.30794 0.835938 5.80599 0.624349 6.33984 0.474609C6.8737 0.32487 7.42708 0.25 8 0.25C8.57292 0.25 9.1263 0.32487 9.66016 0.474609C10.194 0.624349 10.6921 0.835938 11.1543 1.10938C11.6165 1.3763 12.0365 1.70182 12.4141 2.08594C12.7982 2.46354 13.1237 2.88346 13.3906 3.3457C13.6641 3.80794 13.8757 4.30599 14.0254 4.83984C14.1751 5.3737 14.25 5.92708 14.25 6.5V14H15.5ZM13 14V6.5C13 5.8099 12.8665 5.16211 12.5996 4.55664C12.3392 3.95117 11.9811 3.42383 11.5254 2.97461C11.0762 2.51888 10.5488 2.16081 9.94336 1.90039C9.33789 1.63346 8.6901 1.5 8 1.5C7.3099 1.5 6.66211 1.63346 6.05664 1.90039C5.45117 2.16081 4.92057 2.51888 4.46484 2.97461C4.01562 3.42383 3.65755 3.95117 3.39062 4.55664C3.13021 5.16211 3 5.8099 3 6.5V14H13ZM8 16.5C8.17578 16.5 8.33854 16.4674 8.48828 16.4023C8.63802 16.3372 8.76823 16.2493 8.87891 16.1387C8.99609 16.0215 9.08724 15.888 9.15234 15.7383C9.21745 15.5885 9.25 15.4258 9.25 15.25H6.75C6.75 15.4258 6.78255 15.5885 6.84766 15.7383C6.91276 15.888 7.00065 16.0215 7.11133 16.1387C7.22852 16.2493 7.36198 16.3372 7.51172 16.4023C7.66146 16.4674 7.82422 16.5 8 16.5Z" fill="rgb(96,94,92)"/></svg>',
                    RecommendationGroup: 'data:image/svg+xml;utf8,<svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.375 3.75C10.1497 3.75 10.8789 3.89974 11.5625 4.19922C12.2461 4.49219 12.8418 4.89258 13.3496 5.40039C13.8574 5.9082 14.2578 6.50391 14.5508 7.1875C14.8503 7.87109 15 8.60026 15 9.375C15 9.78516 14.974 10.1693 14.9219 10.5273C14.8698 10.8854 14.7852 11.2305 14.668 11.5625C14.5573 11.888 14.4141 12.2103 14.2383 12.5293C14.069 12.8418 13.8639 13.1641 13.623 13.4961C13.4342 13.7565 13.2682 13.9909 13.125 14.1992C12.9818 14.4076 12.8646 14.6191 12.7734 14.834C12.6823 15.0423 12.6139 15.2702 12.5684 15.5176C12.5228 15.7585 12.5 16.0449 12.5 16.377V18.125C12.5 18.3854 12.4512 18.6296 12.3535 18.8574C12.2559 19.0853 12.1224 19.2839 11.9531 19.4531C11.7839 19.6224 11.5853 19.7559 11.3574 19.8535C11.1296 19.9512 10.8854 20 10.625 20H8.125C7.86458 20 7.62044 19.9512 7.39258 19.8535C7.16471 19.7559 6.96615 19.6224 6.79688 19.4531C6.6276 19.2839 6.49414 19.0853 6.39648 18.8574C6.29883 18.6296 6.25 18.3854 6.25 18.125V16.3672C6.25 16.0352 6.22721 15.7487 6.18164 15.5078C6.13607 15.2669 6.06445 15.0423 5.9668 14.834C5.87565 14.6191 5.75846 14.4076 5.61523 14.1992C5.47852 13.9909 5.31576 13.7565 5.12695 13.4961C4.88607 13.1641 4.67773 12.8418 4.50195 12.5293C4.33268 12.2103 4.18945 11.888 4.07227 11.5625C3.96159 11.2305 3.88021 10.8854 3.82812 10.5273C3.77604 10.1693 3.75 9.78516 3.75 9.375C3.75 8.60026 3.89648 7.87109 4.18945 7.1875C4.48893 6.50391 4.89258 5.9082 5.40039 5.40039C5.9082 4.89258 6.50391 4.49219 7.1875 4.19922C7.87109 3.89974 8.60026 3.75 9.375 3.75ZM11.25 17.5H7.5V18.125C7.5 18.2943 7.56185 18.4408 7.68555 18.5645C7.80924 18.6882 7.95573 18.75 8.125 18.75H10.625C10.7943 18.75 10.9408 18.6882 11.0645 18.5645C11.1882 18.4408 11.25 18.2943 11.25 18.125V17.5ZM11.25 16.25C11.2565 15.7096 11.3216 15.2474 11.4453 14.8633C11.5755 14.4727 11.7318 14.1211 11.9141 13.8086C12.1029 13.4896 12.3014 13.1901 12.5098 12.9102C12.7246 12.6237 12.9232 12.3177 13.1055 11.9922C13.2943 11.6602 13.4473 11.2858 13.5645 10.8691C13.6882 10.4525 13.75 9.95443 13.75 9.375C13.75 8.76953 13.6361 8.20312 13.4082 7.67578C13.1803 7.14193 12.8678 6.67643 12.4707 6.2793C12.0736 5.88216 11.6081 5.56966 11.0742 5.3418C10.5469 5.11393 9.98047 5 9.375 5C8.76953 5 8.19987 5.11393 7.66602 5.3418C7.13867 5.56966 6.67643 5.88216 6.2793 6.2793C5.88216 6.67643 5.56966 7.14193 5.3418 7.67578C5.11393 8.20312 5 8.76953 5 9.375C5 9.95443 5.05859 10.4525 5.17578 10.8691C5.29948 11.2858 5.45247 11.6602 5.63477 11.9922C5.82357 12.3177 6.02214 12.6237 6.23047 12.9102C6.44531 13.1901 6.64388 13.4896 6.82617 13.8086C7.01497 14.1211 7.17122 14.4727 7.29492 14.8633C7.42513 15.2474 7.49349 15.7096 7.5 16.25H11.25ZM9.375 2.5C9.20573 2.5 9.05924 2.43815 8.93555 2.31445C8.81185 2.19076 8.75 2.04427 8.75 1.875V0.625C8.75 0.455729 8.81185 0.309245 8.93555 0.185547C9.05924 0.061849 9.20573 0 9.375 0C9.54427 0 9.69076 0.061849 9.81445 0.185547C9.93815 0.309245 10 0.455729 10 0.625V1.875C10 2.04427 9.93815 2.19076 9.81445 2.31445C9.69076 2.43815 9.54427 2.5 9.375 2.5ZM0.625 9.0625C0.455729 9.0625 0.309245 9.00065 0.185547 8.87695C0.061849 8.75326 0 8.60677 0 8.4375C0 8.26823 0.061849 8.12174 0.185547 7.99805C0.309245 7.87435 0.455729 7.8125 0.625 7.8125H1.875C2.04427 7.8125 2.19076 7.87435 2.31445 7.99805C2.43815 8.12174 2.5 8.26823 2.5 8.4375C2.5 8.60677 2.43815 8.75326 2.31445 8.87695C2.19076 9.00065 2.04427 9.0625 1.875 9.0625H0.625ZM0.595703 12.6953C0.595703 12.5651 0.63151 12.4512 0.703125 12.3535C0.78125 12.2493 0.878906 12.1712 0.996094 12.1191C1.06771 12.0931 1.16536 12.0508 1.28906 11.9922C1.41927 11.9336 1.55273 11.8783 1.68945 11.8262C1.82617 11.7676 1.95638 11.7188 2.08008 11.6797C2.21029 11.6341 2.31445 11.6113 2.39258 11.6113C2.56185 11.6113 2.70833 11.6732 2.83203 11.7969C2.95573 11.9206 3.01758 12.0703 3.01758 12.2461C3.01758 12.3763 2.97852 12.4935 2.90039 12.5977C2.82878 12.6953 2.73438 12.7702 2.61719 12.8223C2.54557 12.8548 2.44466 12.9004 2.31445 12.959C2.19076 13.0111 2.06055 13.0664 1.92383 13.125C1.78711 13.1771 1.65365 13.2259 1.52344 13.2715C1.39974 13.3105 1.29883 13.3301 1.2207 13.3301C1.05143 13.3301 0.904948 13.2682 0.78125 13.1445C0.657552 13.0208 0.595703 12.8711 0.595703 12.6953ZM2.1875 4.0332C2.29167 4.0332 2.39909 4.06576 2.50977 4.13086L3.58398 4.77539C3.67513 4.82747 3.74674 4.90234 3.79883 5C3.85091 5.09766 3.87695 5.20182 3.87695 5.3125C3.87695 5.48177 3.8151 5.62826 3.69141 5.75195C3.56771 5.87565 3.42122 5.9375 3.25195 5.9375C3.13477 5.9375 3.02734 5.9082 2.92969 5.84961L1.86523 5.19531C1.77409 5.13672 1.69922 5.06185 1.64062 4.9707C1.58854 4.87305 1.5625 4.76888 1.5625 4.6582C1.5625 4.48893 1.62435 4.34245 1.74805 4.21875C1.87174 4.09505 2.01823 4.0332 2.1875 4.0332ZM5.91797 3.4375C5.80729 3.4375 5.69987 3.4082 5.5957 3.34961C5.49805 3.29102 5.42318 3.21289 5.37109 3.11523L4.76562 2.02148C4.71354 1.93034 4.6875 1.82943 4.6875 1.71875C4.6875 1.54948 4.74935 1.40299 4.87305 1.2793C4.99674 1.1556 5.14323 1.09375 5.3125 1.09375C5.42318 1.09375 5.52734 1.12305 5.625 1.18164C5.72917 1.24023 5.80729 1.31836 5.85938 1.41602L6.46484 2.50977C6.51693 2.60091 6.54297 2.69857 6.54297 2.80273C6.54297 2.97852 6.48112 3.12826 6.35742 3.25195C6.23372 3.37565 6.08724 3.4375 5.91797 3.4375ZM18.125 7.8125C18.2943 7.8125 18.4408 7.87435 18.5645 7.99805C18.6882 8.12174 18.75 8.26823 18.75 8.4375C18.75 8.60677 18.6882 8.75326 18.5645 8.87695C18.4408 9.00065 18.2943 9.0625 18.125 9.0625H16.875C16.7057 9.0625 16.5592 9.00065 16.4355 8.87695C16.3118 8.75326 16.25 8.60677 16.25 8.4375C16.25 8.26823 16.3118 8.12174 16.4355 7.99805C16.5592 7.87435 16.7057 7.8125 16.875 7.8125H18.125ZM16.3672 11.6016C16.4453 11.6016 16.5462 11.6243 16.6699 11.6699C16.7936 11.7155 16.9238 11.7676 17.0605 11.8262C17.1973 11.8848 17.3275 11.9434 17.4512 12.002C17.5814 12.0605 17.6823 12.1029 17.7539 12.1289C17.8711 12.181 17.9655 12.2591 18.0371 12.3633C18.1087 12.4609 18.1445 12.5749 18.1445 12.7051C18.1445 12.8743 18.0827 13.0208 17.959 13.1445C17.8353 13.2682 17.6888 13.3301 17.5195 13.3301C17.4479 13.3301 17.347 13.3105 17.2168 13.2715C17.0931 13.2259 16.9629 13.1738 16.8262 13.1152C16.6895 13.0566 16.556 13.0013 16.4258 12.9492C16.3021 12.8906 16.2044 12.8451 16.1328 12.8125C16.0156 12.7604 15.918 12.6823 15.8398 12.5781C15.7682 12.474 15.7324 12.3568 15.7324 12.2266C15.7324 12.0508 15.7943 11.9043 15.918 11.7871C16.0482 11.6634 16.1979 11.6016 16.3672 11.6016ZM17.1875 4.6582C17.1875 4.76888 17.1582 4.87305 17.0996 4.9707C17.0475 5.06185 16.9759 5.13672 16.8848 5.19531L15.8203 5.84961C15.7227 5.9082 15.6152 5.9375 15.498 5.9375C15.3288 5.9375 15.1823 5.87565 15.0586 5.75195C14.9349 5.62826 14.873 5.48177 14.873 5.3125C14.873 5.20182 14.8991 5.09766 14.9512 5C15.0033 4.90234 15.0749 4.82747 15.166 4.77539L16.2402 4.13086C16.3509 4.06576 16.4583 4.0332 16.5625 4.0332C16.7318 4.0332 16.8783 4.09505 17.002 4.21875C17.1257 4.34245 17.1875 4.48893 17.1875 4.6582ZM12.832 3.4375C12.6628 3.4375 12.5163 3.37565 12.3926 3.25195C12.2689 3.12826 12.207 2.97852 12.207 2.80273C12.207 2.69857 12.2331 2.60091 12.2852 2.50977L12.8906 1.41602C12.9427 1.31836 13.0176 1.24023 13.1152 1.18164C13.2194 1.12305 13.3268 1.09375 13.4375 1.09375C13.6068 1.09375 13.7533 1.1556 13.877 1.2793C14.0007 1.40299 14.0625 1.54948 14.0625 1.71875C14.0625 1.82943 14.0365 1.93034 13.9844 2.02148L13.3789 3.11523C13.3268 3.21289 13.2487 3.29102 13.1445 3.34961C13.0469 3.4082 12.9427 3.4375 12.832 3.4375Z" fill="rgb(79,107,237)"/></svg>',
                    StockRise: 'data:image/svg+xml;utf8,<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0H12V10.5H10.5V2.56055L1.2832 11.7832L0.216797 10.7168L9.43945 1.5H1.5V0Z" fill="rgb(16,124,16)"/></svg>',
                    StockFall: 'data:image/svg+xml;utf8,<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 1.5H12V12H1.5V10.5H9.43945L0.216797 1.2832L1.2832 0.216797L10.5 9.43945V1.5Z" fill="rgb(164,38,44)"/></svg>',
                    Flight: 'data:image/svg+xml;utf8,<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 7.5C17.8385 7.5 18.1608 7.56836 18.4668 7.70508C18.7728 7.83529 19.0365 8.01432 19.2578 8.24219C19.4857 8.46354 19.6647 8.72721 19.7949 9.0332C19.9316 9.33919 20 9.66146 20 10C20 10.3451 19.9316 10.6706 19.7949 10.9766C19.6647 11.276 19.4857 11.5397 19.2578 11.7676C19.0365 11.9889 18.7728 12.168 18.4668 12.3047C18.1608 12.4349 17.8385 12.5 17.5 12.5H13.125L9.375 20H5L7.5 12.5H5L4.375 13.75H0L1.25 10L0 6.25H4.375L5 7.5H7.5L5 0H9.375L13.125 7.5H17.5ZM17.5 11.25C17.6758 11.25 17.8385 11.2174 17.9883 11.1523C18.138 11.0872 18.2682 10.9993 18.3789 10.8887C18.4961 10.7715 18.5872 10.638 18.6523 10.4883C18.7174 10.3385 18.75 10.1758 18.75 10C18.75 9.82422 18.7174 9.66146 18.6523 9.51172C18.5872 9.36198 18.4961 9.23177 18.3789 9.12109C18.2682 9.00391 18.138 8.91276 17.9883 8.84766C17.8385 8.78255 17.6758 8.75 17.5 8.75H12.3535C11.709 7.5 11.0807 6.25326 10.4688 5.00977C9.85677 3.75977 9.23503 2.50651 8.60352 1.25H6.73828C7.15495 2.50651 7.56836 3.75977 7.97852 5.00977C8.38867 6.25326 8.80859 7.5 9.23828 8.75H4.22852L3.60352 7.5H1.73828C1.875 7.91667 2.00846 8.33333 2.13867 8.75C2.27539 9.16667 2.41862 9.58333 2.56836 10C2.41862 10.4167 2.27539 10.8333 2.13867 11.25C2.00846 11.6667 1.875 12.0833 1.73828 12.5H3.60352L4.22852 11.25H9.23828C8.80859 12.5 8.38867 13.75 7.97852 15C7.56836 16.2435 7.15495 17.4935 6.73828 18.75H8.60352C9.23503 17.4935 9.85677 16.2435 10.4688 15C11.0807 13.75 11.709 12.5 12.3535 11.25H17.5Z" fill="rgb(96,94,92)"/></svg>',
                };
                IconFactory.cardActionPlaceHolderIcon = '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 8C16.7344 8 17.4427 8.09635 18.125 8.28906C18.8073 8.47656 19.4427 8.74479 20.0312 9.09375C20.625 9.44271 21.1641 9.86198 21.6484 10.3516C22.138 10.8359 22.5573 11.375 22.9062 11.9688C23.2552 12.5573 23.5234 13.1927 23.7109 13.875C23.9036 14.5573 24 15.2656 24 16C24 16.7344 23.9036 17.4427 23.7109 18.125C23.5234 18.8073 23.2552 19.4453 22.9062 20.0391C22.5573 20.6276 22.138 21.1667 21.6484 21.6562C21.1641 22.1406 20.625 22.5573 20.0312 22.9062C19.4427 23.2552 18.8073 23.526 18.125 23.7188C17.4427 23.9062 16.7344 24 16 24C15.2656 24 14.5573 23.9062 13.875 23.7188C13.1927 23.526 12.5547 23.2552 11.9609 22.9062C11.3724 22.5573 10.8333 22.1406 10.3438 21.6562C9.85938 21.1667 9.44271 20.6276 9.09375 20.0391C8.74479 19.4453 8.47396 18.8073 8.28125 18.125C8.09375 17.4427 8 16.7344 8 16C8 15.2656 8.09375 14.5573 8.28125 13.875C8.47396 13.1927 8.74479 12.5573 9.09375 11.9688C9.44271 11.375 9.85938 10.8359 10.3438 10.3516C10.8333 9.86198 11.3724 9.44271 11.9609 9.09375C12.5547 8.74479 13.1927 8.47656 13.875 8.28906C14.5573 8.09635 15.2656 8 16 8ZM16 23C16.6458 23 17.2656 22.9167 17.8594 22.75C18.4583 22.5833 19.0156 22.349 19.5312 22.0469C20.0521 21.7396 20.5234 21.375 20.9453 20.9531C21.3724 20.526 21.737 20.0547 22.0391 19.5391C22.3464 19.0182 22.5833 18.4609 22.75 17.8672C22.9167 17.2682 23 16.6458 23 16C23 15.3542 22.9167 14.7344 22.75 14.1406C22.5833 13.5417 22.3464 12.9844 22.0391 12.4688C21.737 11.9479 21.3724 11.4766 20.9453 11.0547C20.5234 10.6276 20.0521 10.263 19.5312 9.96094C19.0156 9.65365 18.4583 9.41667 17.8594 9.25C17.2656 9.08333 16.6458 9 16 9C15.3542 9 14.7318 9.08333 14.1328 9.25C13.5391 9.41667 12.9818 9.65365 12.4609 9.96094C11.9453 10.263 11.474 10.6276 11.0469 11.0547C10.625 11.4766 10.2604 11.9479 9.95312 12.4688C9.65104 12.9844 9.41667 13.5417 9.25 14.1406C9.08333 14.7344 9 15.3542 9 16C9 16.6458 9.08333 17.2682 9.25 17.8672C9.41667 18.4609 9.65104 19.0182 9.95312 19.5391C10.2604 20.0547 10.625 20.526 11.0469 20.9531C11.474 21.375 11.9453 21.7396 12.4609 22.0469C12.9818 22.349 13.5391 22.5833 14.1328 22.75C14.7318 22.9167 15.3542 23 16 23Z" fill="rgb(34,102,227)"/></svg>';
                return IconFactory;
            }());
            ActionCardControl.IconFactory = IconFactory;
        })(ActionCardControl = Sales.ActionCardControl || (Sales.ActionCardControl = {}));
    })(Sales = MscrmControls.Sales || (MscrmControls.Sales = {}));
})(MscrmControls || (MscrmControls = {}));
var MscrmControls;
(function (MscrmControls) {
    var Sales;
    (function (Sales) {
        var ActionCardControl;
        (function (ActionCardControl) {
            var TemplateFactory = /** @class */ (function () {
                function TemplateFactory() {
                }
                TemplateFactory.GetCardTemplate = function (context, card, cardList, cardView) {
                    switch (card.cardtype) {
                        case 21:
                        case 37:
                        case 100:
                        case 108:
                            return new ActionCardControl.MeetingCardTemplate(context, card, cardList, cardView);
                        case 101:
                        case 102:
                            return new ActionCardControl.TopCardTemplate(context, card, cardList, cardView);
                        case 103:
                            return new ActionCardControl.StockCardTemplate(context, card, cardList, cardView);
                        case 104:
                            return new ActionCardControl.RelevantNewsTemplate(context, card, cardList, cardView);
                        case 105:
                            return new ActionCardControl.NearbyCustomersTemplate(context, card, cardList, cardView);
                        case 107:
                            return new ActionCardControl.FlightCardTemplate(context, card, cardList, cardView);
                        case 110:
                            return new ActionCardControl.TeaserCardTemplate(context, card, cardList, cardView);
                        default:
                            return new ActionCardControl.CardTemplate(context, card, cardList, cardView);
                    }
                };
                return TemplateFactory;
            }());
            ActionCardControl.TemplateFactory = TemplateFactory;
        })(ActionCardControl = Sales.ActionCardControl || (Sales.ActionCardControl = {}));
    })(Sales = MscrmControls.Sales || (MscrmControls.Sales = {}));
})(MscrmControls || (MscrmControls = {}));
var MscrmControls;
(function (MscrmControls) {
    var Sales;
    (function (Sales) {
        var ActionCardControl;
        (function (ActionCardControl) {
            var CardTemplate = /** @class */ (function () {
                function CardTemplate(context, card, cardList, cardView) {
                    this.Icon = "";
                    this.Title = "";
                    this.SoftTitle = "";
                    this.Description = "";
                    this.SummaryText = "";
                    this.GroupFooter = "";
                    this.Snooze = "";
                    this.Dismiss = "";
                    this.Like = "";
                    this.Dislike = "";
                    this.ShowDetails = "";
                    this.Card = card;
                    this.CardList = cardList;
                    this.CardView = cardView;
                    this.Context = context;
                }
                CardTemplate.prototype.PopulateCardDetails = function () {
                    this.Icon = ActionCardControl.IconFactory.GetCardIcon(this.Card) || "";
                    this.Title = this.Card.title || "";
                    this.SoftTitle = this.Card.softTitle || "";
                    this.Description = this.Card.description || "";
                    this.SummaryText = this.Card.summaryText || "";
                    this.Snooze = this.Context.resources.getString("ActionCard.CFC.Common.Snooze");
                    this.Dismiss = this.Context.resources.getString("ActionCard.CFC.Common.Dismiss");
                    this.Like = this.Context.resources.getString("ActionCard.CFC.Common.Like");
                    this.Dislike = this.Context.resources.getString("ActionCard.CFC.Common.Dislike");
                    this.ShowDetails = this.Context.resources.getString("ActionCard.CFC.Common.ShowDetailed");
                };
                CardTemplate.prototype.OverrideHostConfig = function (hostConfig) {
                    hostConfig.actions.actionsOrientation = 0; // Horizontal;
                    hostConfig.actions.actionAlignment = 2; // Right;
                };
                // public OverrideCardStyle(cardHTMLDiv: any, context: Mscrm.ControlData<IInputBag>) {
                //     cardHTMLDiv.style.padding = context.theming.measures.measure100;
                //     cardHTMLDiv.style.marginBottom = context.theming.measures.measure100;
                //     cardHTMLDiv.style.boxShadow = "0px 0.3px 0.9px rgba(0, 0, 0, 0.108), 0px 1.6px 3.6px rgba(0, 0, 0, 0.132)";
                //     cardHTMLDiv.style.borderRadius = "2px";
                // }
                CardTemplate.prototype.GetTemplate = function () {
                    var template = {
                        type: "AdaptiveCard",
                        body: [
                            {
                                type: "Container",
                                spacing: "Small",
                                items: [
                                    {
                                        type: "ColumnSet",
                                        columns: [
                                            {
                                                type: "Column",
                                                items: [
                                                    {
                                                        type: "Image",
                                                        url: this.Icon,
                                                        style: "person",
                                                        altText: "",
                                                        width: "24px",
                                                        height: "24px",
                                                        horizontalAlignment: "Center",
                                                    },
                                                ],
                                                width: "40px",
                                                horizontalAlignment: "Center",
                                                verticalContentAlignment: "Center",
                                            },
                                            {
                                                type: "Column",
                                                width: "stretch",
                                                items: [
                                                    {
                                                        type: "TextBlock",
                                                        text: this.SoftTitle,
                                                        weight: "Bolder",
                                                    },
                                                    {
                                                        type: "TextBlock",
                                                        text: this.Title,
                                                        spacing: "None",
                                                    },
                                                ],
                                                spacing: "small",
                                            },
                                            this.GetDislikeButton(),
                                            this.GetLikeButton(),
                                            this.GetSnoozeButton(),
                                            this.GetDismissButton(),
                                        ],
                                    },
                                ],
                            },
                            {
                                type: "TextBlock",
                                text: this.Description.trim(),
                                wrap: true,
                                maxLines: 10,
                            },
                        ],
                        $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
                        version: "1.0",
                        actions: this.GetActions(),
                    };
                    return template;
                };
                CardTemplate.prototype.GetDislikeButton = function () {
                    if (this.Card.userFeedback != Sales.CardContainer.UserFeedback.Liked &&
                        this.Card.userFeedback != Sales.CardContainer.UserFeedback.Disliked)
                        return {
                            type: "Column",
                            items: [
                                {
                                    type: "Image",
                                    altText: this.Dislike,
                                    horizontalAlignment: "Center",
                                    backgroundColor: "",
                                    url: ActionCardControl.IconFactory.MiscIcons.Dislike,
                                    width: "14px",
                                    height: "14px",
                                },
                            ],
                            spacing: "None",
                            width: "32px",
                            selectAction: {
                                type: "Action.Submit",
                                title: this.Dislike,
                                data: {
                                    ActionName: MscrmControls.Sales.Assistant.Command.Dislike,
                                    SelectedCard: this.Card,
                                },
                            },
                            verticalContentAlignment: "Center",
                        };
                    else
                        return {};
                };
                CardTemplate.prototype.GetLikeButton = function () {
                    if (this.Card.userFeedback != Sales.CardContainer.UserFeedback.Liked &&
                        this.Card.userFeedback != Sales.CardContainer.UserFeedback.Disliked)
                        return {
                            type: "Column",
                            items: [
                                {
                                    type: "Image",
                                    altText: this.Like,
                                    horizontalAlignment: "Center",
                                    backgroundColor: "",
                                    url: ActionCardControl.IconFactory.MiscIcons.Like,
                                    width: "14px",
                                    height: "14px",
                                },
                            ],
                            spacing: "None",
                            width: "32px",
                            selectAction: {
                                type: "Action.Submit",
                                title: this.Like,
                                data: {
                                    ActionName: MscrmControls.Sales.Assistant.Command.Like,
                                    SelectedCard: this.Card,
                                },
                            },
                            verticalContentAlignment: "Center",
                        };
                    else
                        return {};
                };
                CardTemplate.prototype.GetSnoozeButton = function (cardList) {
                    return {
                        type: "Column",
                        items: [
                            {
                                type: "Image",
                                altText: this.Snooze,
                                horizontalAlignment: "Center",
                                backgroundColor: "",
                                url: ActionCardControl.IconFactory.MiscIcons.Snooze,
                                width: "14px",
                                height: "14px",
                            },
                        ],
                        spacing: "None",
                        width: "32px",
                        selectAction: {
                            type: "Action.Submit",
                            title: this.Snooze,
                            data: {
                                ActionName: MscrmControls.Sales.Assistant.Command.SnoozeRequested,
                                SelectedCard: this.Card,
                                CardList: cardList,
                            },
                        },
                        verticalContentAlignment: "Center",
                    };
                };
                CardTemplate.prototype.GetDismissButton = function (cardList) {
                    return {
                        type: "Column",
                        items: [
                            {
                                type: "Image",
                                altText: this.Dismiss,
                                horizontalAlignment: "Center",
                                backgroundColor: "",
                                url: ActionCardControl.IconFactory.MiscIcons.Dismiss,
                                width: "14px",
                                height: "14px",
                            },
                        ],
                        spacing: "None",
                        width: "32px",
                        selectAction: {
                            type: "Action.Submit",
                            title: this.Dismiss,
                            data: {
                                ActionName: MscrmControls.Sales.Assistant.Command.DismissRequested,
                                SelectedCard: this.Card,
                                CardList: cardList,
                            },
                        },
                        verticalContentAlignment: "Center",
                    };
                };
                CardTemplate.prototype.GetGroupCardTemplate = function (cardIndex) {
                    var template = {
                        type: "ColumnSet",
                        columns: [
                            {
                                type: "Column",
                                items: [
                                    {
                                        type: "Image",
                                        url: this.Icon,
                                        altText: "",
                                        style: "Person",
                                        horizontalAlignment: "Center",
                                        width: "24px",
                                        height: "24px",
                                    },
                                ],
                                width: "60px",
                                verticalContentAlignment: "Center",
                            },
                            {
                                type: "Column",
                                width: "stretch",
                                items: [
                                    {
                                        type: "TextBlock",
                                        text: this.SoftTitle,
                                        horizontalAlignment: "Left",
                                        weight: "Bolder",
                                        spacing: "None",
                                    },
                                    {
                                        type: "TextBlock",
                                        text: this.Title,
                                        spacing: "None",
                                    },
                                ],
                                verticalContentAlignment: "Center",
                                spacing: "None",
                            },
                            {
                                type: "Column",
                                width: "14px",
                            },
                        ],
                        selectAction: {
                            type: "Action.Submit",
                            title: ActionCardControl.Util.GetAriaLabelForCardListItem(this.ShowDetails, cardIndex + 1, this.CardList.length, this.SoftTitle, this.GetGroupHeaderString()),
                            data: {
                                ActionName: MscrmControls.Sales.Assistant.Command.ShowDetailed,
                                SelectedCard: this.Card,
                            },
                        },
                        spacing: "None",
                        minHeight: "60px",
                        separator: true,
                    };
                    return template;
                };
                CardTemplate.prototype.GetGroupHeaderString = function () {
                    return ActionCardControl.Util.GetGroupCardHeaderWithoutCount(this.CardList.length, ActionCardControl.GroupCardFactory.GetGroupCardHeaderString(this.Card.groupcategory), this.Context);
                };
                CardTemplate.prototype.GetActions = function () {
                    var _this = this;
                    var actions = [];
                    if (this.Card.actions) {
                        this.Card.actions.Mobile &&
                            this.Card.actions.Mobile.Actions.map(function (action) {
                                var title = _this.Card.data && _this.Card.data["ActionName"]
                                    ? _this.Card.data["ActionName"]
                                    : action.Title;
                                actions.push({
                                    type: "Action.Submit",
                                    title: title,
                                    data: {
                                        ActionName: action.ActionName,
                                        SelectedCard: _this.Card,
                                        CommandName: action.CommandName,
                                    },
                                    iconUrl: ActionCardControl.IconFactory.GetCardActionIcon(action.CommandName),
                                });
                            });
                        !this.Card.actions.Mobile &&
                            this.Card.actions.WebClient &&
                            this.Card.actions.WebClient.Actions.map(function (action) {
                                var title = _this.Card.data && _this.Card.data["ActionName"]
                                    ? _this.Card.data["ActionName"]
                                    : action.Title;
                                actions.push({
                                    type: "Action.Submit",
                                    title: title,
                                    data: {
                                        ActionName: action.ActionName,
                                        SelectedCard: _this.Card,
                                        CommandName: action.CommandName,
                                    },
                                    iconUrl: ActionCardControl.IconFactory.GetCardActionIcon(action.CommandName),
                                });
                            });
                    }
                    // In extensibility scenario, this is a way to call post operation after a dialog is closed. It's hack.
                    if (this.Card.data && !this.Card.data.ActionName && this.Card.data.PostOperation) {
                        setTimeout(function () {
                            _this.OnExecuteAction({
                                data: {
                                    SelectedCard: _this.Card,
                                    ActionName: MscrmControls.Sales.Assistant.Command.PerformPostOperation,
                                },
                            });
                        }, 1000);
                    }
                    return actions;
                };
                CardTemplate.prototype.OnExecuteAction = function (action) {
                    if (action.data) {
                        this.Context.factory.fireEvent("ExecuteActionCardCommand", action.data);
                    }
                };
                return CardTemplate;
            }());
            ActionCardControl.CardTemplate = CardTemplate;
        })(ActionCardControl = Sales.ActionCardControl || (Sales.ActionCardControl = {}));
    })(Sales = MscrmControls.Sales || (MscrmControls.Sales = {}));
})(MscrmControls || (MscrmControls = {}));
var MscrmControls;
(function (MscrmControls) {
    var Sales;
    (function (Sales) {
        var ActionCardControl;
        (function (ActionCardControl) {
            var FlightCardTemplate = /** @class */ (function (_super) {
                __extends(FlightCardTemplate, _super);
                function FlightCardTemplate() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.departureDate = "";
                    _this.departureTime = "";
                    _this.departureCity = "";
                    _this.departureCityCode = "";
                    _this.arrivalDate = "";
                    _this.arrivalTime = "";
                    _this.arrivalCity = "";
                    _this.arrivalCityCode = "";
                    return _this;
                }
                FlightCardTemplate.prototype.PopulateCardDetails = function () {
                    _super.prototype.PopulateCardDetails.call(this);
                    this.SoftTitle = this.Context.resources.getString("ActionCard.CFC.UpcomingFlight.Title");
                    this.Title =
                        this.Card.data && this.Card.data.cardRelatedInfo
                            ? this.Card.data.cardRelatedInfo.provider.name +
                                " - " +
                                this.Card.data.cardRelatedInfo.provider.iataCode +
                                " " +
                                this.Card.data.cardRelatedInfo.flightNumber +
                                this.getDepartsMessage()
                            : "";
                    if (this.Card.data && this.Card.data.cardRelatedInfo) {
                        this.departureDate = this.getFormattedDate(this.Card.data.cardRelatedInfo.departureTime);
                        this.departureTime = this.getFormattedTime(this.Card.data.cardRelatedInfo.departureTime);
                        this.departureCity = this.Card.data.cardRelatedInfo.departureAirport.name;
                        this.departureCityCode = this.Card.data.cardRelatedInfo.departureAirport.iataCode;
                        this.arrivalDate = this.getFormattedDate(this.Card.data.cardRelatedInfo.arrivalTime);
                        this.arrivalTime = this.getFormattedTime(this.Card.data.cardRelatedInfo.arrivalTime);
                        this.arrivalCity = this.Card.data.cardRelatedInfo.arrivalAirport.name;
                        this.arrivalCityCode = this.Card.data.cardRelatedInfo.arrivalAirport.iataCode;
                    }
                };
                FlightCardTemplate.prototype.getFormattedDate = function (dateString) {
                    var date = new Date(dateString);
                    var formattedDate = this.Context.formatting.formatDateLongAbbreviated(date);
                    formattedDate = formattedDate.substr(0, formattedDate.length - 6);
                    return formattedDate;
                };
                FlightCardTemplate.prototype.getFormattedTime = function (dateString) {
                    var date = new Date(dateString);
                    var dateOnly = this.Context.formatting.formatDateShort(date);
                    var dateTime = this.Context.formatting.formatTime(date, 0 /* None */);
                    var time = dateTime.replace(dateOnly, "").trim();
                    return time;
                };
                FlightCardTemplate.prototype.getDepartsMessage = function () {
                    var msg = Sales.Assistant.Util.GetTimeFromNowString(this.Card.data.cardRelatedInfo.departureTime, this.Context);
                    return msg ? " : " + this.Context.resources.getString("ActionCard.CFC.UpcomingFlight.Departs") + msg : "";
                };
                FlightCardTemplate.prototype.GetTemplate = function () {
                    var template = {
                        type: "AdaptiveCard",
                        body: [
                            {
                                type: "Container",
                                spacing: "Small",
                                items: [
                                    {
                                        type: "ColumnSet",
                                        columns: [
                                            {
                                                type: "Column",
                                                items: [
                                                    {
                                                        type: "Image",
                                                        url: this.Icon,
                                                        style: "Person",
                                                        altText: "",
                                                        width: "24px",
                                                        horizontalAlignment: "Center",
                                                        height: "24px",
                                                    },
                                                ],
                                                width: "40px",
                                                horizontalAlignment: "Center",
                                                verticalContentAlignment: "Center",
                                            },
                                            {
                                                type: "Column",
                                                width: "stretch",
                                                items: [
                                                    {
                                                        type: "TextBlock",
                                                        text: this.SoftTitle,
                                                        weight: "Bolder",
                                                    },
                                                    {
                                                        type: "TextBlock",
                                                        text: this.Title,
                                                        spacing: "None",
                                                    },
                                                ],
                                                spacing: "Small",
                                            },
                                            this.GetDislikeButton(),
                                            this.GetLikeButton(),
                                            this.GetSnoozeButton(),
                                            this.GetDismissButton(),
                                        ],
                                    },
                                ],
                            },
                            {
                                type: "ColumnSet",
                                columns: [
                                    this.getCityDetails(this.departureCity, this.departureCityCode, this.departureDate, this.departureTime),
                                    {
                                        type: "Column",
                                        width: "auto",
                                        items: [
                                            {
                                                type: "Image",
                                                altText: "",
                                                url: ActionCardControl.IconFactory.MiscIcons.Flight,
                                                spacing: "None",
                                                horizontalAlignment: "Center",
                                                width: "20px",
                                                height: "20px",
                                            },
                                        ],
                                        verticalContentAlignment: "Center",
                                    },
                                    this.getCityDetails(this.arrivalCity, this.arrivalCityCode, this.arrivalDate, this.arrivalTime),
                                ],
                            },
                        ],
                        $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
                        version: "1.0",
                        actions: this.GetActions(),
                    };
                    var nearByCustomers = this.getNearByCustomersContainer();
                    if (nearByCustomers) {
                        template.body = template.body.concat(nearByCustomers);
                    }
                    return template;
                };
                FlightCardTemplate.prototype.getCityDetails = function (city, cityCode, date, time) {
                    return {
                        type: "Column",
                        width: "stretch",
                        items: [
                            {
                                type: "TextBlock",
                                text: city,
                                horizontalAlignment: "Center",
                                spacing: "None",
                            },
                            {
                                type: "TextBlock",
                                text: cityCode,
                                horizontalAlignment: "Center",
                                size: "ExtraLarge",
                                weight: "Bolder",
                                spacing: "None",
                            },
                            {
                                type: "TextBlock",
                                text: date,
                                horizontalAlignment: "Center",
                                spacing: "None",
                            },
                            {
                                type: "TextBlock",
                                text: time,
                                horizontalAlignment: "Center",
                                spacing: "None",
                            },
                        ],
                        horizontalAlignment: "Center",
                    };
                };
                FlightCardTemplate.prototype.getNearByCustomersContainer = function () {
                    if (this.CardList && this.CardList.length > 0) {
                        return [
                            {
                                type: "Container",
                                separator: true,
                                spacing: "Medium",
                                items: [
                                    {
                                        type: "TextBlock",
                                        text: this.Context.resources.getString("ActionCard.CFC.UpcomingFlight.NearByAccounts") +
                                            this.arrivalCityCode,
                                    },
                                ],
                            },
                            {
                                type: "ColumnSet",
                                columns: this.getNearByCustomers(),
                                minHeight: "42px",
                                spacing: "small",
                            },
                        ];
                    }
                };
                FlightCardTemplate.prototype.getNearByCustomers = function () {
                    var _this = this;
                    var nearByCustomers = [];
                    this.CardList.slice(0, 3).map(function (card, index) {
                        nearByCustomers.push({
                            type: "Column",
                            items: [
                                {
                                    type: "TextBlock",
                                    horizontalAlignment: "Center",
                                    text: ActionCardControl.Util.ComputeInitials(card.title),
                                    spacing: "none",
                                    color: "light",
                                },
                            ],
                            width: "42px",
                            spacing: "none",
                            verticalContentAlignment: "Center",
                            backgroundImage: {
                                url: ActionCardControl.Util.GetBackgroundImageResourceName(card.title),
                            },
                            selectAction: {
                                type: "Action.Submit",
                                title: ActionCardControl.Util.GetAriaLabelForCardListItem(_this.Context.resources.getString("ActionCard.CFC.Common.OpenEntity"), index + 1, _this.CardList.length, card.title),
                                data: {
                                    ActionName: MscrmControls.Sales.Assistant.Command.OpenEntity,
                                    SelectedCard: card,
                                },
                            },
                        });
                    });
                    return nearByCustomers;
                };
                return FlightCardTemplate;
            }(ActionCardControl.CardTemplate));
            ActionCardControl.FlightCardTemplate = FlightCardTemplate;
        })(ActionCardControl = Sales.ActionCardControl || (Sales.ActionCardControl = {}));
    })(Sales = MscrmControls.Sales || (MscrmControls.Sales = {}));
})(MscrmControls || (MscrmControls = {}));
var MscrmControls;
(function (MscrmControls) {
    var Sales;
    (function (Sales) {
        var ActionCardControl;
        (function (ActionCardControl) {
            var GroupTemplate = /** @class */ (function (_super) {
                __extends(GroupTemplate, _super);
                function GroupTemplate(context, card, cardList, cardView) {
                    var _this = _super.call(this, context, card, cardList, cardView) || this;
                    _this.isExpanded = _this.CardView == MscrmControls.Sales.CardContainer.CardViewState.GroupExpanded;
                    return _this;
                }
                GroupTemplate.prototype.PopulateCardDetails = function () {
                    this.cardIcon = this.Context.resources.getString(ActionCardControl.GroupCardFactory.GetGroupCardIcon(this.Card.groupcategory));
                    this.cardTitle = ActionCardControl.Util.GetGroupCardFullHeader(this.Card.groupcategory, this.CardList.length, ActionCardControl.GroupCardFactory.GetGroupCardHeaderString(this.Card.groupcategory), this.Context);
                    this.showAllText = this.Context.resources.getString("ActionCard.CFC.Common.ShowAll");
                    this.closeGroupText = this.Context.resources.getString("ActionCard.CFC.Common.CloseGroup");
                    this.openGroupText = this.Context.resources.getString("ActionCard.CFC.Common.OpenGroup");
                    this.groupCollapsed = this.Context.resources.getString("ActionCard.CFC.Common.CollapsedGroup");
                    this.groupExpanded = this.Context.resources.getString("ActionCard.CFC.Common.ExpandedGroup");
                };
                GroupTemplate.prototype.OverrideHostConfig = function (hostConfig) {
                    hostConfig.containerStyles.default.foregroundColors.accent.default = "#2266E3";
                };
                GroupTemplate.prototype.GetTemplate = function () {
                    var template = {
                        type: "AdaptiveCard",
                        body: [
                            {
                                type: "ColumnSet",
                                columns: [
                                    {
                                        type: "Column",
                                        items: [
                                            {
                                                type: "Image",
                                                url: this.cardIcon,
                                                altText: "",
                                                width: "16px",
                                                horizontalAlignment: "Center",
                                                height: "16px",
                                            },
                                        ],
                                        width: "60px",
                                        horizontalAlignment: "Center",
                                        verticalContentAlignment: "Center",
                                    },
                                    {
                                        type: "Column",
                                        width: "stretch",
                                        items: [
                                            {
                                                type: "TextBlock",
                                                text: this.cardTitle,
                                                weight: "Bolder",
                                            },
                                        ],
                                        verticalContentAlignment: "Center",
                                        spacing: "None",
                                    },
                                    {
                                        type: "Column",
                                        items: [
                                            {
                                                type: "Image",
                                                altText: this.closeGroupText,
                                                horizontalAlignment: "Center",
                                                backgroundColor: "",
                                                url: ActionCardControl.IconFactory.MiscIcons.Collapse,
                                                width: "12px",
                                                isVisible: this.isExpanded,
                                                id: "up",
                                                height: "12px",
                                            },
                                            {
                                                type: "Image",
                                                altText: this.openGroupText,
                                                horizontalAlignment: "Center",
                                                backgroundColor: "",
                                                url: ActionCardControl.IconFactory.MiscIcons.Expand,
                                                width: "12px",
                                                isVisible: !this.isExpanded,
                                                id: "down",
                                                height: "12px",
                                            },
                                        ],
                                        spacing: "None",
                                        width: "32px",
                                        verticalContentAlignment: "Center",
                                    },
                                    {
                                        type: "Column",
                                        width: "14px",
                                        spacing: "None",
                                    },
                                ],
                                selectAction: {
                                    type: "Action.Submit",
                                    title: this.getAccessibilityTextForToggleGroupButton(),
                                    data: {
                                        ActionName: MscrmControls.Sales.Assistant.Command.ToggleGroupMode,
                                        GroupCategory: this.Card.groupcategory,
                                    },
                                },
                                minHeight: "48px",
                            },
                            {
                                type: "Container",
                                separator: true,
                                items: [{}],
                                id: "cards",
                                isVisible: this.isExpanded,
                                spacing: "None",
                            },
                        ],
                        $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
                        version: "1.0",
                    };
                    return template;
                };
                GroupTemplate.prototype.getAccessibilityTextForToggleGroupButton = function () {
                    return (this.cardTitle +
                        ". " +
                        (this.isExpanded ? this.groupExpanded + this.closeGroupText : this.groupCollapsed + this.openGroupText));
                };
                GroupTemplate.prototype.GetShowAllTemplate = function () {
                    return {
                        type: "Container",
                        items: [
                            {
                                type: "ColumnSet",
                                columns: [
                                    {
                                        type: "Column",
                                        width: 30,
                                    },
                                    {
                                        type: "Column",
                                        width: 40,
                                        items: [
                                            {
                                                type: "TextBlock",
                                                text: this.showAllText,
                                                horizontalAlignment: "Center",
                                                color: "Accent",
                                            },
                                        ],
                                        verticalContentAlignment: "Center",
                                        selectAction: {
                                            type: "Action.Submit",
                                            title: this.showAllText + " " + this.cardTitle,
                                            data: {
                                                ActionName: MscrmControls.Sales.Assistant.Command.ShowAll,
                                                GroupCategory: this.Card.groupcategory,
                                                SelectedCard: this.Card,
                                            },
                                        },
                                        minHeight: "32px",
                                    },
                                    {
                                        type: "Column",
                                        width: 30,
                                    },
                                ],
                                spacing: "None",
                            },
                            {
                                type: "ColumnSet",
                                spacing: "None",
                                columns: [
                                    {
                                        type: "Column",
                                        minHeight: "14px",
                                    },
                                ],
                            },
                        ],
                        spacing: "None",
                    };
                };
                return GroupTemplate;
            }(ActionCardControl.CardTemplate));
            ActionCardControl.GroupTemplate = GroupTemplate;
        })(ActionCardControl = Sales.ActionCardControl || (Sales.ActionCardControl = {}));
    })(Sales = MscrmControls.Sales || (MscrmControls.Sales = {}));
})(MscrmControls || (MscrmControls = {}));
var MscrmControls;
(function (MscrmControls) {
    var Sales;
    (function (Sales) {
        var ActionCardControl;
        (function (ActionCardControl) {
            var MeetingCardTemplate = /** @class */ (function (_super) {
                __extends(MeetingCardTemplate, _super);
                function MeetingCardTemplate() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                MeetingCardTemplate.prototype.PopulateCardDetails = function () {
                    _super.prototype.PopulateCardDetails.call(this);
                    this.Title = this.Card.title;
                    this.SoftTitle = this.Card.softTitle;
                    this.Description = this.Card.description;
                    this.SummaryText = this.Card.summaryText;
                    this.openAttendeeText = this.Context.resources.getString("ActionCard.CFC.Common.OpenAttendee");
                    this.openRegardingEntityToolTip = this.Context.resources.getString("ActionCard.CFC.Common.OpenEntitySingle_AccessibilityText");
                    this.openRegardingEntityText = this.Context.resources.getString("ActionCard.CFC.Common.OpenEntitySingle");
                    if (this.Card.data.cardContextDetails &&
                        this.Card.data.cardContextDetails.length > 0 &&
                        this.Card.data.cardContextDetails[0].contextPrimaryInfo) {
                        this.regardingEntityName = this.Card.data.cardContextDetails[0].contextObject.displayName;
                        this.regardingIcon = "_imgs/svg_" + ActionCardControl.Util.GetEntityTypeCode(this.Card.data.cardContextDetails[0].contextObject.entityName) + ".svg";
                        this.regardingTitle = this.Card.data.cardContextDetails[0].contextPrimaryInfo.title;
                    }
                    else {
                        this.regardingTitle = "";
                    }
                };
                MeetingCardTemplate.prototype.GetTemplate = function () {
                    var address = this.Card.data && this.Card.data.cardRelatedInfo && this.Card.data.cardRelatedInfo.address;
                    var template = {
                        type: "AdaptiveCard",
                        body: [
                            {
                                type: "Container",
                                spacing: "Small",
                                items: [
                                    {
                                        type: "ColumnSet",
                                        columns: [
                                            {
                                                type: "Column",
                                                width: "stretch",
                                                items: [
                                                    {
                                                        type: "TextBlock",
                                                        text: this.Title,
                                                        weight: "Bolder",
                                                    },
                                                    {
                                                        type: "TextBlock",
                                                        text: address ? address : "",
                                                        spacing: "None",
                                                    },
                                                ],
                                                spacing: "small",
                                            },
                                            this.GetDislikeButton(),
                                            this.GetLikeButton(),
                                            this.GetSnoozeButton(),
                                            this.GetDismissButton(),
                                        ],
                                        minHeight: "32px",
                                    },
                                    {
                                        type: "TextBlock",
                                        text: this.SoftTitle,
                                        spacing: "Small",
                                    },
                                ],
                            },
                        ],
                        $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
                        version: "1.0",
                        actions: this.GetActions(),
                    };
                    var attendees = this.GetAttendees();
                    attendees && template.body[0].items.push(attendees);
                    var regarding = this.GetRegarding();
                    template.body[0].items = regarding ? template.body[0].items.concat(regarding) : template.body[0].items;
                    return template;
                };
                MeetingCardTemplate.prototype.GetGroupCardTemplate = function (cardIndex) {
                    var template = {
                        type: "Container",
                        items: [
                            { type: "TextBlock", text: " " },
                            {
                                type: "ColumnSet",
                                columns: [
                                    {
                                        type: "Column",
                                        items: [
                                            {
                                                type: "TextBlock",
                                                horizontalAlignment: "Left",
                                                width: "16px",
                                            },
                                        ],
                                        width: "16px",
                                        verticalContentAlignment: "Center",
                                    },
                                    {
                                        type: "Column",
                                        width: "stretch",
                                        items: [
                                            {
                                                type: "TextBlock",
                                                text: this.Title,
                                                horizontalAlignment: "Left",
                                                weight: "Bolder",
                                                spacing: "medium",
                                                size: "medium",
                                            },
                                            {
                                                type: "TextBlock",
                                                text: this.Card.data && this.Card.data.cardRelatedInfo.address,
                                                spacing: "small",
                                                isSubtle: true,
                                            },
                                            {
                                                type: "TextBlock",
                                                text: this.SoftTitle,
                                                isSubtle: true,
                                                spacing: "None",
                                            },
                                        ],
                                        verticalContentAlignment: "Center",
                                        spacing: "None",
                                    },
                                    {
                                        type: "Column",
                                        width: "14px",
                                    },
                                ],
                            },
                        ],
                        selectAction: {
                            type: "Action.Submit",
                            title: ActionCardControl.Util.GetAriaLabelForCardListItem(this.ShowDetails, cardIndex + 1, this.CardList.length, this.Title, this.GetGroupHeaderString()),
                            data: {
                                ActionName: MscrmControls.Sales.Assistant.Command.ShowDetailed,
                                SelectedCard: this.Card,
                            },
                        },
                        spacing: "None",
                        separator: true,
                    };
                    var attendee = this.GetFirstAttendee();
                    attendee && template.items.push(attendee);
                    template.items.push({ type: "TextBlock", text: " " });
                    return template;
                };
                MeetingCardTemplate.prototype.GetRegarding = function () {
                    if (this.regardingTitle != "") {
                        return [
                            {
                                type: "ColumnSet",
                                columns: [
                                    {
                                        type: "Column",
                                        width: "stretch",
                                    },
                                ],
                                spacing: "Small",
                            },
                            {
                                type: "ColumnSet",
                                separator: true,
                                spacing: "None",
                                minHeight: "50px",
                                columns: [
                                    {
                                        type: "Column",
                                        items: [
                                            {
                                                type: "Image",
                                                altText: "",
                                                horizontalAlignment: "Center",
                                                url: this.regardingIcon,
                                                width: "16px",
                                                height: "16px",
                                            },
                                        ],
                                        width: "40px",
                                        spacing: "None",
                                        verticalContentAlignment: "Center",
                                    },
                                    {
                                        type: "Column",
                                        width: "stretch",
                                        items: [
                                            {
                                                type: "TextBlock",
                                                text: this.regardingTitle,
                                                weight: "Bolder",
                                            },
                                            {
                                                type: "TextBlock",
                                                text: this.regardingEntityName,
                                                spacing: "None",
                                            },
                                        ],
                                        spacing: "none",
                                        verticalContentAlignment: "Center",
                                    },
                                    {
                                        type: "Column",
                                        items: [
                                            {
                                                type: "Image",
                                                altText: this.openRegardingEntityToolTip,
                                                horizontalAlignment: "Center",
                                                backgroundColor: "",
                                                url: ActionCardControl.IconFactory.MiscIcons.ChevronRight,
                                                width: "12px",
                                                height: "12px",
                                            },
                                        ],
                                        spacing: "None",
                                        width: "32px",
                                        verticalContentAlignment: "Center",
                                    },
                                ],
                                selectAction: {
                                    type: "Action.Submit",
                                    title: this.getOpenRegardingEntityAriaLabel(this.regardingTitle),
                                    data: {
                                        ActionName: MscrmControls.Sales.Assistant.Command.OpenEntity,
                                        SelectedCard: this.Card,
                                    },
                                },
                            },
                            {
                                type: "ColumnSet",
                                separator: true,
                                columns: [
                                    {
                                        type: "Column",
                                        width: "stretch",
                                    },
                                ],
                                spacing: "None",
                            },
                        ];
                    }
                    else {
                        return null;
                    }
                };
                MeetingCardTemplate.prototype.GetFirstAttendee = function () {
                    if (this.Card.attendees && this.Card.attendees.length > 0) {
                        return {
                            type: "ColumnSet",
                            minHeight: "32px",
                            spacing: "small",
                            columns: [
                                {
                                    type: "Column",
                                    items: [
                                        {
                                            type: "TextBlock",
                                            horizontalAlignment: "Left",
                                        },
                                    ],
                                    width: "16px",
                                    verticalContentAlignment: "Center",
                                },
                                {
                                    type: "Column",
                                    items: [
                                        {
                                            type: "TextBlock",
                                            horizontalAlignment: "Center",
                                            text: ActionCardControl.Util.ComputeInitials(this.Card.attendees[0].title),
                                            spacing: "none",
                                            color: "light",
                                        },
                                    ],
                                    width: "32px",
                                    spacing: "none",
                                    verticalContentAlignment: "Center",
                                    backgroundImage: {
                                        url: ActionCardControl.Util.GetBackgroundImageResourceName(this.Card.attendees[0].title),
                                    },
                                },
                                {
                                    type: "Column",
                                    width: "stretch",
                                    items: [
                                        {
                                            type: "TextBlock",
                                            text: this.Card.attendees[0].title,
                                        },
                                    ],
                                    spacing: "small",
                                    verticalContentAlignment: "Center",
                                },
                            ],
                        };
                    }
                    else {
                        return null;
                    }
                };
                MeetingCardTemplate.prototype.GetAttendees = function () {
                    var _this = this;
                    if (this.Card.attendees && this.Card.attendees.length > 0) {
                        var attendees_1 = {
                            type: "Container",
                            items: [],
                            spacing: "small",
                        };
                        this.Card.attendees.map(function (card, index) {
                            attendees_1.items.push({
                                type: "ColumnSet",
                                columns: [
                                    {
                                        type: "Column",
                                        items: [
                                            {
                                                type: "TextBlock",
                                                horizontalAlignment: "Center",
                                                text: ActionCardControl.Util.ComputeInitials(card.title),
                                                spacing: "none",
                                                color: "light",
                                            },
                                        ],
                                        width: "48px",
                                        spacing: "none",
                                        verticalContentAlignment: "Center",
                                        backgroundImage: {
                                            url: ActionCardControl.Util.GetBackgroundImageResourceName(card.title),
                                        },
                                    },
                                    {
                                        type: "Column",
                                        width: "stretch",
                                        items: [
                                            {
                                                type: "TextBlock",
                                                text: card.title,
                                                horizontalAlignment: "Left",
                                                weight: "Bolder",
                                            },
                                        ],
                                        verticalContentAlignment: "Center",
                                        spacing: "none",
                                    },
                                    {
                                        type: "Column",
                                        width: "14px",
                                    },
                                ],
                                selectAction: _this.Card.cardtype != 37 && _this.Card.cardtype != 108
                                    ? {
                                        type: "Action.Submit",
                                        title: ActionCardControl.Util.GetAriaLabelForCardListItem(_this.openAttendeeText, index + 1, _this.Card.attendees.length, card.title),
                                        data: {
                                            ActionName: MscrmControls.Sales.Assistant.Command.OpenEntity,
                                            SelectedCard: card,
                                        },
                                    }
                                    : {},
                                spacing: "none",
                                minHeight: "42px",
                            });
                        });
                        return attendees_1;
                    }
                };
                MeetingCardTemplate.prototype.getOpenRegardingEntityAriaLabel = function (title) {
                    return Sales.Assistant.Util.FormatString(this.openRegardingEntityText, title);
                };
                return MeetingCardTemplate;
            }(ActionCardControl.CardTemplate));
            ActionCardControl.MeetingCardTemplate = MeetingCardTemplate;
        })(ActionCardControl = Sales.ActionCardControl || (Sales.ActionCardControl = {}));
    })(Sales = MscrmControls.Sales || (MscrmControls.Sales = {}));
})(MscrmControls || (MscrmControls = {}));
var MscrmControls;
(function (MscrmControls) {
    var Sales;
    (function (Sales) {
        var ActionCardControl;
        (function (ActionCardControl) {
            var NearbyCustomersTemplate = /** @class */ (function (_super) {
                __extends(NearbyCustomersTemplate, _super);
                function NearbyCustomersTemplate() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                NearbyCustomersTemplate.prototype.GetTemplate = function () {
                    var template = {
                        type: "AdaptiveCard",
                        body: [
                            {
                                type: "ColumnSet",
                                spacing: "None",
                                columns: [
                                    {
                                        type: "Column",
                                        minHeight: "14px",
                                    },
                                ],
                            },
                            {
                                type: "ColumnSet",
                                spacing: "None",
                                columns: [
                                    {
                                        type: "Column",
                                        width: 4,
                                        spacing: "None",
                                    },
                                    {
                                        type: "Column",
                                        width: 96,
                                        items: [
                                            {
                                                type: "TextBlock",
                                                text: this.Card.softTitle,
                                                weight: "Bolder",
                                            },
                                        ],
                                        verticalContentAlignment: "Center",
                                        spacing: "None",
                                    },
                                ],
                                minHeight: "32px",
                            },
                            {
                                type: "Container",
                                items: this.GetNearByCustomers(),
                                separator: true,
                            },
                        ],
                        $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
                        version: "1.0",
                    };
                    return template;
                };
                NearbyCustomersTemplate.prototype.GetNearByCustomers = function () {
                    var _this = this;
                    var nearByCustomers = [];
                    this.CardList.map(function (card, index) {
                        var title = card.title || "";
                        var description = card.description
                            ? card.description +
                                " " +
                                _this.Context.resources.getString("ActionCard.CFC.NearbyCustomers.Employees.Text")
                            : "";
                        nearByCustomers.push({
                            type: "ColumnSet",
                            columns: [
                                {
                                    type: "Column",
                                    items: [
                                        {
                                            type: "TextBlock",
                                            horizontalAlignment: "Center",
                                            text: ActionCardControl.Util.ComputeInitials(title),
                                            spacing: "none",
                                            color: "light",
                                        },
                                    ],
                                    width: "60px",
                                    spacing: "none",
                                    verticalContentAlignment: "Center",
                                    backgroundImage: {
                                        url: ActionCardControl.Util.GetBackgroundImageResourceName(title),
                                    },
                                },
                                {
                                    type: "Column",
                                    width: 45,
                                    items: [
                                        {
                                            type: "TextBlock",
                                            text: title,
                                            spacing: "None",
                                            weight: "Bolder",
                                        },
                                        {
                                            type: "TextBlock",
                                            text: description,
                                            spacing: "None",
                                        },
                                    ],
                                    verticalContentAlignment: "Center",
                                    spacing: "None",
                                },
                                {
                                    type: "Column",
                                    width: "10px",
                                    spacing: "None",
                                },
                            ],
                            selectAction: {
                                type: "Action.Submit",
                                title: ActionCardControl.Util.GetAriaLabelForCardListItem(_this.Context.resources.getString("ActionCard.CFC.Common.OpenEntity"), index + 1, _this.CardList.length, title),
                                data: {
                                    ActionName: MscrmControls.Sales.Assistant.Command.OpenEntity,
                                    SelectedCard: card,
                                },
                            },
                            spacing: "None",
                            minHeight: "60px",
                        });
                    });
                    return nearByCustomers;
                };
                return NearbyCustomersTemplate;
            }(ActionCardControl.CardTemplate));
            ActionCardControl.NearbyCustomersTemplate = NearbyCustomersTemplate;
        })(ActionCardControl = Sales.ActionCardControl || (Sales.ActionCardControl = {}));
    })(Sales = MscrmControls.Sales || (MscrmControls.Sales = {}));
})(MscrmControls || (MscrmControls = {}));
var MscrmControls;
(function (MscrmControls) {
    var Sales;
    (function (Sales) {
        var ActionCardControl;
        (function (ActionCardControl) {
            var RelevantNewsTemplate = /** @class */ (function (_super) {
                __extends(RelevantNewsTemplate, _super);
                function RelevantNewsTemplate() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                RelevantNewsTemplate.prototype.GetTemplate = function () {
                    var template = {
                        type: "AdaptiveCard",
                        body: [
                            {
                                type: "ColumnSet",
                                spacing: "None",
                                columns: [
                                    {
                                        type: "Column",
                                        minHeight: "14px",
                                    },
                                ],
                            },
                            {
                                type: "ColumnSet",
                                spacing: "None",
                                columns: [
                                    {
                                        type: "Column",
                                        width: 4,
                                        spacing: "None",
                                    },
                                    {
                                        type: "Column",
                                        width: 96,
                                        items: [
                                            {
                                                type: "TextBlock",
                                                text: this.Card.softTitle,
                                                weight: "Bolder",
                                            },
                                            {
                                                type: "TextBlock",
                                                text: this.Card.summaryText,
                                                spacing: "none",
                                            },
                                        ],
                                        verticalContentAlignment: "Center",
                                        spacing: "None",
                                    },
                                ],
                                minHeight: "32px",
                            },
                            {
                                type: "Container",
                                items: this.GetNewsContent(),
                                separator: true,
                            },
                        ],
                        $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
                        version: "1.0",
                    };
                    return template;
                };
                RelevantNewsTemplate.prototype.GetNewsContent = function () {
                    var _this = this;
                    var newsContent = [];
                    this.CardList.map(function (card, index) {
                        // TODO: Add default fallback icon
                        var icon = (card.data && card.data.cardRelatedInfo && card.data.cardRelatedInfo.newsImage) ||
                            "./_static/_controls/ActionHubControl/RelevantNews_LimeGreen_24.png";
                        var title = card.title || "";
                        var url = (card.data && card.data.cardRelatedInfo && card.data.cardRelatedInfo.link) || "";
                        newsContent.push({
                            type: "ColumnSet",
                            columns: [
                                {
                                    type: "Column",
                                    items: [
                                        {
                                            type: "Image",
                                            altText: "",
                                            size: "Small",
                                            url: icon,
                                            horizontalAlignment: "Center",
                                        },
                                    ],
                                    width: "60px",
                                    verticalContentAlignment: "Center",
                                },
                                {
                                    type: "Column",
                                    width: 45,
                                    items: [
                                        {
                                            type: "TextBlock",
                                            text: title,
                                            spacing: "None",
                                            wrap: true,
                                            maxLines: 3,
                                        },
                                    ],
                                    verticalContentAlignment: "Center",
                                    spacing: "None",
                                },
                                {
                                    type: "Column",
                                    width: "10px",
                                    spacing: "None",
                                },
                            ],
                            selectAction: {
                                type: "Action.Submit",
                                title: ActionCardControl.Util.GetAriaLabelForCardListItem(_this.Context.resources.getString("ActionCard.CFC.Common.OpenArticle"), index + 1, _this.CardList.length, title),
                                data: {
                                    ActionName: MscrmControls.Sales.Assistant.Command.OpenUrl,
                                    Url: url,
                                },
                            },
                            spacing: "None",
                            minHeight: "60px",
                        });
                    });
                    return newsContent;
                };
                return RelevantNewsTemplate;
            }(ActionCardControl.CardTemplate));
            ActionCardControl.RelevantNewsTemplate = RelevantNewsTemplate;
        })(ActionCardControl = Sales.ActionCardControl || (Sales.ActionCardControl = {}));
    })(Sales = MscrmControls.Sales || (MscrmControls.Sales = {}));
})(MscrmControls || (MscrmControls = {}));
var MscrmControls;
(function (MscrmControls) {
    var Sales;
    (function (Sales) {
        var ActionCardControl;
        (function (ActionCardControl) {
            var StockCardTemplate = /** @class */ (function (_super) {
                __extends(StockCardTemplate, _super);
                function StockCardTemplate() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                StockCardTemplate.prototype.PopulateCardDetails = function () {
                    this.CardList = this.Card.cardDetails;
                };
                StockCardTemplate.prototype.GetTemplate = function () {
                    var template = {
                        type: "AdaptiveCard",
                        body: [
                            {
                                type: "ColumnSet",
                                spacing: "None",
                                columns: [
                                    {
                                        type: "Column",
                                        minHeight: "14px",
                                    },
                                ],
                            },
                            {
                                type: "ColumnSet",
                                spacing: "None",
                                columns: [
                                    {
                                        type: "Column",
                                        width: 4,
                                        spacing: "None",
                                    },
                                    {
                                        type: "Column",
                                        width: 96,
                                        items: [
                                            {
                                                type: "TextBlock",
                                                text: this.Card.softTitle,
                                                weight: "Bolder",
                                            },
                                        ],
                                        verticalContentAlignment: "Center",
                                        spacing: "None",
                                    },
                                ],
                                minHeight: "32px",
                            },
                            {
                                type: "Container",
                                items: this.GetStocks(),
                                separator: true,
                            },
                        ],
                        $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
                        version: "1.0",
                    };
                    return template;
                };
                StockCardTemplate.prototype.GetStocks = function () {
                    var _this = this;
                    var stocks = [];
                    this.CardList.map(function (card) {
                        // TODO: Add default fallback icon
                        var icon = (card.data && card.data.cardRelatedInfo && card.data.cardRelatedInfo.newsImage) ||
                            "./_static/_controls/ActionHubControl/StockUpdates_LimeGreen_24.png";
                        var title = card.title || "";
                        var description = card.description || "";
                        var url = (card.data && card.data.cardRelatedInfo && card.data.cardRelatedInfo.link) || "";
                        var value = card.value || "";
                        var changedValue = card.changedValue || "";
                        var changedValueInPercentage = card.changedValueInPercentage || "";
                        var stockChangeIcon = parseInt(changedValue) > 0 ? ActionCardControl.IconFactory.MiscIcons.StockRise : ActionCardControl.IconFactory.MiscIcons.StockFall;
                        var stockChangeColor = parseInt(changedValue) > 0 ? "Good" : "Attention";
                        stocks.push({
                            type: "ColumnSet",
                            columns: [
                                {
                                    type: "Column",
                                    items: [
                                        {
                                            type: "Image",
                                            altText: "",
                                            size: "Small",
                                            url: icon,
                                            horizontalAlignment: "Center",
                                        },
                                    ],
                                    width: "60px",
                                    verticalContentAlignment: "Center",
                                },
                                {
                                    type: "Column",
                                    width: 45,
                                    items: [
                                        {
                                            type: "TextBlock",
                                            text: title,
                                            weight: "Bolder",
                                            spacing: "None",
                                        },
                                        {
                                            type: "TextBlock",
                                            text: description,
                                            spacing: "None",
                                        },
                                    ],
                                    verticalContentAlignment: "Center",
                                    spacing: "None",
                                },
                                {
                                    type: "Column",
                                    width: 25,
                                    items: [
                                        {
                                            type: "TextBlock",
                                            text: value,
                                            horizontalAlignment: "Center",
                                            spacing: "None",
                                        },
                                    ],
                                    verticalContentAlignment: "Center",
                                    spacing: "Small",
                                },
                                {
                                    type: "Column",
                                    width: 5,
                                    items: [
                                        {
                                            type: "Image",
                                            altText: "",
                                            url: stockChangeIcon,
                                            horizontalAlignment: "Center",
                                            width: "16px",
                                            spacing: "None",
                                            height: "16px",
                                        },
                                    ],
                                    verticalContentAlignment: "Center",
                                    spacing: "Small",
                                },
                                {
                                    type: "Column",
                                    width: 20,
                                    items: [
                                        {
                                            type: "TextBlock",
                                            text: changedValue,
                                            horizontalAlignment: "Center",
                                            color: stockChangeColor,
                                        },
                                        {
                                            type: "TextBlock",
                                            text: changedValueInPercentage,
                                            horizontalAlignment: "Center",
                                            color: stockChangeColor,
                                            spacing: "None",
                                        },
                                    ],
                                    verticalContentAlignment: "Center",
                                    spacing: "Small",
                                },
                                {
                                    type: "Column",
                                    width: "10px",
                                    spacing: "none",
                                },
                            ],
                            selectAction: {
                                type: "Action.Submit",
                                title: title + " " + _this.Context.resources.getString("ActionCard.CFC.Common.OpenArticle"),
                                data: {
                                    ActionName: MscrmControls.Sales.Assistant.Command.OpenUrl,
                                    Url: url,
                                },
                            },
                            spacing: "None",
                            minHeight: "60px",
                        });
                    });
                    return stocks;
                };
                return StockCardTemplate;
            }(ActionCardControl.CardTemplate));
            ActionCardControl.StockCardTemplate = StockCardTemplate;
        })(ActionCardControl = Sales.ActionCardControl || (Sales.ActionCardControl = {}));
    })(Sales = MscrmControls.Sales || (MscrmControls.Sales = {}));
})(MscrmControls || (MscrmControls = {}));
/// <reference path="cardtemplate.ts" />
var MscrmControls;
(function (MscrmControls) {
    var Sales;
    (function (Sales) {
        var ActionCardControl;
        (function (ActionCardControl) {
            var TeaserCardTemplate = /** @class */ (function (_super) {
                __extends(TeaserCardTemplate, _super);
                function TeaserCardTemplate(context, card, cardList, cardView) {
                    var _this = _super.call(this, context, card, cardList, cardView) || this;
                    _this.learnMoreText = "";
                    _this.dismissCard = "";
                    _this.learnMoreLinkSuffix = "";
                    _this._storage = sessionStorage;
                    return _this;
                }
                TeaserCardTemplate.prototype.OverrideHostConfig = function (hostConfig) {
                    _super.prototype.OverrideHostConfig.call(this, hostConfig);
                    hostConfig.containerStyles.default.foregroundColors.accent.default = "#2266E3";
                };
                TeaserCardTemplate.prototype.GetTemplate = function () {
                    var teaserInfo = this.getTeaserInfo();
                    var formatedTitle = teaserInfo.title;
                    var cardDescriptionLabel = teaserInfo.description;
                    this.learnMoreText = this.Context.resources.getString("ActionCard.CFC.Teaser.LearnMore");
                    this.learnMoreLinkSuffix = this.Context.resources.getString("ActionCard.CFC.Common.Link");
                    this.dismissCard = this.Context.resources.getString("ActionCard.CFC.Common.Dismiss");
                    var forwardLink = teaserInfo.forwardLink;
                    var template = {
                        type: "AdaptiveCard",
                        body: [
                            {
                                type: "Container",
                                backgroundImage: {
                                    url: ActionCardControl.IconFactory.MiscIcons.TeaserBackground,
                                    fillMode: "Repeat",
                                },
                                width: "stretch",
                                items: [
                                    {
                                        type: "Image",
                                        altText: "",
                                        url: "./webresources/msdyn_/Images/TeaserIcon.svg",
                                        horizontalAlignment: "Center",
                                        spacing: "None",
                                    },
                                ],
                            },
                            {
                                type: "ColumnSet",
                                columns: [
                                    {
                                        type: "Column",
                                        spacing: "None",
                                        items: [
                                            {
                                                type: "TextBlock",
                                                text: formatedTitle,
                                                wrap: true,
                                                spacing: "None",
                                                size: "medium",
                                                weight: "Bolder",
                                            },
                                            {
                                                type: "TextBlock",
                                                text: cardDescriptionLabel,
                                                wrap: true,
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                type: "ColumnSet",
                                columns: [
                                    {
                                        type: "Column",
                                        spacing: "None",
                                        width: 35,
                                    },
                                    {
                                        type: "Column",
                                        spacing: "None",
                                        width: 35,
                                        items: [
                                            {
                                                type: "TextBlock",
                                                text: this.learnMoreText,
                                                horizontalAlignment: "Center",
                                                color: "Accent",
                                            },
                                        ],
                                        verticalContentAlignment: "Center",
                                        selectAction: {
                                            type: "Action.Submit",
                                            title: formatedTitle + ". " + this.learnMoreText + ". " + this.learnMoreLinkSuffix,
                                            data: {
                                                ActionName: MscrmControls.Sales.Assistant.Command.OpenUrl,
                                                SelectedCard: this.Card,
                                                Url: forwardLink,
                                            },
                                        },
                                        minHeight: "32px",
                                    },
                                    {
                                        type: "Column",
                                        spacing: "None",
                                        width: 30,
                                        items: [
                                            {
                                                type: "TextBlock",
                                                text: this.dismissCard,
                                                horizontalAlignment: "Center",
                                            },
                                        ],
                                        verticalContentAlignment: "Center",
                                        selectAction: {
                                            type: "Action.Submit",
                                            title: this.dismissCard,
                                            data: {
                                                ActionName: MscrmControls.Sales.Assistant.Command.DismissCardForUser,
                                                SelectedCard: this.Card,
                                            },
                                        },
                                        minHeight: "32px",
                                    },
                                ],
                            },
                        ],
                        $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
                        version: "1.0",
                    };
                    return template;
                };
                TeaserCardTemplate.prototype.getTeaserInfo = function () {
                    var teasersArray = this.getTeasersArray();
                    var teaserIndex = 0;
                    if (this._storage) {
                        var lastTeaserIndex = this._storage.getItem("lastTeaserIndex");
                        if (lastTeaserIndex && !isNaN(parseInt(lastTeaserIndex))) {
                            teaserIndex = (parseInt(lastTeaserIndex) + 1) % teasersArray.length;
                            this._storage.setItem("lastTeaserIndex", teaserIndex);
                            return teasersArray[teaserIndex];
                        }
                        this._storage.setItem("lastTeaserIndex", teaserIndex);
                    }
                    return teasersArray[0];
                };
                TeaserCardTemplate.prototype.getTeasersArray = function () {
                    return [
                        {
                            title: this.Context.resources.getString("ActionCard.CFC.SalesAssistant.WelcomeCard"),
                            description: this.Context.resources.getString("ActionCard.CFC.SalesAssistant.WelcomeCard.SummaryText"),
                            forwardLink: "https://aka.ms/d365salesassistant",
                        },
                        {
                            title: this.Context.resources.getString("ActionCard.CFC.Teaser.EnableExchangeCards"),
                            description: this.Context.resources.getString("ActionCard.CFC.Teaser.EnableExchangeCards.SummaryText"),
                            forwardLink: "https://aka.ms/sales.ai",
                        },
                        {
                            title: this.Context.resources.getString("ActionCard.CFC.Teaser.WhoKnowsWho"),
                            description: this.Context.resources.getString("ActionCard.CFC.Teaser.WhoKnowsWho.SummaryText"),
                            forwardLink: "https://go.microsoft.com/fwlink/p/?linkid=2006419",
                        },
                        {
                            title: this.Context.resources.getString("ActionCard.CFC.Teaser.TalkingPoints"),
                            description: this.Context.resources.getString("ActionCard.CFC.Teaser.TalkingPoints.SummaryText"),
                            forwardLink: "https://go.microsoft.com/fwlink/p/?linkid=2006505",
                        },
                        {
                            title: this.Context.resources.getString("ActionCard.CFC.Teaser.NotesAnalysis"),
                            description: this.Context.resources.getString("ActionCard.CFC.Teaser.NotesAnalysis.SummaryText"),
                            forwardLink: "https://aka.ms/notesanalysis",
                        },
                        {
                            title: this.Context.resources.getString("ActionCard.CFC.Teaser.PLS"),
                            description: this.Context.resources.getString("ActionCard.CFC.Teaser.PLS.SummaryText"),
                            forwardLink: "https://go.microsoft.com/fwlink/p/?linkid=870068",
                        },
                        {
                            title: this.Context.resources.getString("ActionCard.CFC.Teaser.POS"),
                            description: this.Context.resources.getString("ActionCard.CFC.Teaser.POS.SummaryText"),
                            forwardLink: "https://go.microsoft.com/fwlink/p/?linkid=2028194",
                        },
                    ];
                };
                TeaserCardTemplate.prototype.OverrideDefaultStorage = function (storage) {
                    this._storage = storage;
                };
                return TeaserCardTemplate;
            }(ActionCardControl.CardTemplate));
            ActionCardControl.TeaserCardTemplate = TeaserCardTemplate;
        })(ActionCardControl = Sales.ActionCardControl || (Sales.ActionCardControl = {}));
    })(Sales = MscrmControls.Sales || (MscrmControls.Sales = {}));
})(MscrmControls || (MscrmControls = {}));
var MscrmControls;
(function (MscrmControls) {
    var Sales;
    (function (Sales) {
        var ActionCardControl;
        (function (ActionCardControl) {
            var TopCardTemplate = /** @class */ (function (_super) {
                __extends(TopCardTemplate, _super);
                function TopCardTemplate() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.openEntityText = "";
                    return _this;
                }
                TopCardTemplate.prototype.PopulateCardDetails = function () {
                    this.SoftTitle = this.Card.softTitle || "";
                    this.SummaryText = this.Card.summaryText || "";
                    this.openEntityText = this.Context.resources.getString("ActionCard.CFC.Common.OpenEntity");
                    this.Icon =
                        this.Card.cardtype == 101 ? ActionCardControl.IconFactory.MiscIcons.TopPeopleCard : ActionCardControl.IconFactory.MiscIcons.TopRecordCard;
                    this.Snooze = this.Context.resources.getString("ActionCard.CFC.Common.Snooze");
                    this.Dismiss = this.Context.resources.getString("ActionCard.CFC.Common.Dismiss");
                    this.Like = this.Context.resources.getString("ActionCard.CFC.Common.Like");
                    this.Dislike = this.Context.resources.getString("ActionCard.CFC.Common.Dislike");
                    this.ShowDetails = this.Context.resources.getString("ActionCard.CFC.Common.ShowDetailed");
                    this.CardList = this.Card.cardDetails.slice(0, 3);
                };
                TopCardTemplate.prototype.GetTemplate = function () {
                    var template = {
                        type: "AdaptiveCard",
                        body: [
                            {
                                type: "ColumnSet",
                                spacing: "none",
                                columns: [
                                    {
                                        type: "Column",
                                        items: [
                                            {
                                                type: "Image",
                                                url: this.Icon,
                                                altText: "",
                                                width: "24px",
                                                height: "24px",
                                                horizontalAlignment: "Center",
                                            },
                                        ],
                                        width: "60px",
                                        horizontalAlignment: "Center",
                                        verticalContentAlignment: "Center",
                                    },
                                    {
                                        type: "Column",
                                        width: "stretch",
                                        items: [
                                            {
                                                type: "TextBlock",
                                                text: this.SoftTitle,
                                                weight: "Bolder",
                                            },
                                        ],
                                        verticalContentAlignment: "Center",
                                        spacing: "none",
                                    },
                                    this.GetDislikeButton(),
                                    this.GetLikeButton(),
                                    this.GetSnoozeButton(this.CardList),
                                    this.GetDismissButton(this.CardList),
                                ],
                                minHeight: "32px",
                            },
                            {
                                type: "Container",
                                items: this.GetTopRecords(),
                                separator: true,
                            },
                        ],
                        $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
                        version: "1.0",
                    };
                    return template;
                };
                TopCardTemplate.prototype.GetGroupCardTemplate = function (cardIndex) {
                    var template = {
                        type: "ColumnSet",
                        columns: [
                            {
                                type: "Column",
                                items: [
                                    {
                                        type: "Image",
                                        altText: "",
                                        url: ActionCardControl.IconFactory.GetCardIcon(this.Card),
                                        horizontalAlignment: "Center",
                                        width: "24px",
                                        height: "24px",
                                    },
                                ],
                                width: "60px",
                                verticalContentAlignment: "Center",
                            },
                            {
                                type: "Column",
                                width: "stretch",
                                items: [
                                    {
                                        type: "TextBlock",
                                        text: this.SoftTitle,
                                        horizontalAlignment: "Left",
                                        weight: "Bolder",
                                        spacing: "None",
                                    },
                                    {
                                        type: "TextBlock",
                                        text: this.SummaryText,
                                        spacing: "None",
                                    },
                                ],
                                verticalContentAlignment: "Center",
                                spacing: "None",
                            },
                            {
                                type: "Column",
                                width: "14px",
                            },
                        ],
                        selectAction: {
                            type: "Action.Submit",
                            title: ActionCardControl.Util.GetAriaLabelForCardListItem(this.ShowDetails, cardIndex + 1, this.CardList.length, this.SoftTitle, this.GetGroupHeaderString()),
                            data: {
                                ActionName: MscrmControls.Sales.Assistant.Command.ShowDetailed,
                                SelectedCard: this.Card,
                            },
                        },
                        spacing: "None",
                        minHeight: "60px",
                        separator: true,
                    };
                    return template;
                };
                TopCardTemplate.prototype.GetTopRecords = function () {
                    var _this = this;
                    var topRecords = [];
                    this.CardList.map(function (card, index) {
                        var title = card.title || "";
                        var description = card.description || "";
                        topRecords.push({
                            type: "ColumnSet",
                            columns: [
                                {
                                    type: "Column",
                                    items: [
                                        {
                                            type: "TextBlock",
                                            horizontalAlignment: "Center",
                                            text: ActionCardControl.Util.ComputeInitials(title),
                                            spacing: "none",
                                            color: "light",
                                        },
                                    ],
                                    width: "60px",
                                    spacing: "none",
                                    verticalContentAlignment: "Center",
                                    backgroundImage: {
                                        url: ActionCardControl.Util.GetBackgroundImageResourceName(title),
                                    },
                                },
                                {
                                    type: "Column",
                                    width: "stretch",
                                    items: [
                                        {
                                            type: "TextBlock",
                                            text: title,
                                            horizontalAlignment: "Left",
                                            weight: "Bolder",
                                            spacing: "none",
                                        },
                                        {
                                            type: "TextBlock",
                                            text: description,
                                            spacing: "none",
                                        },
                                    ],
                                    verticalContentAlignment: "Center",
                                    spacing: "none",
                                },
                            ],
                            selectAction: {
                                type: "Action.Submit",
                                title: ActionCardControl.Util.GetAriaLabelForCardListItem(_this.openEntityText, index + 1, _this.CardList.length, title),
                                data: {
                                    ActionName: MscrmControls.Sales.Assistant.Command.OpenEntity,
                                    SelectedCard: card,
                                },
                            },
                            spacing: "none",
                            minHeight: "60px",
                        });
                    });
                    return topRecords;
                };
                return TopCardTemplate;
            }(ActionCardControl.CardTemplate));
            ActionCardControl.TopCardTemplate = TopCardTemplate;
        })(ActionCardControl = Sales.ActionCardControl || (Sales.ActionCardControl = {}));
    })(Sales = MscrmControls.Sales || (MscrmControls.Sales = {}));
})(MscrmControls || (MscrmControls = {}));
