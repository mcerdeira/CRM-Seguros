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
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
/// <reference path="inputsoutputs.g.ts" />
var MscrmControls;
(function (MscrmControls) {
    var Sales;
    (function (Sales) {
        var CardContainer;
        (function (CardContainer) {
            var CardView;
            (function (CardView) {
                CardView[CardView["DefaultView"] = 1] = "DefaultView";
                CardView[CardView["GroupView"] = 2] = "GroupView";
                CardView[CardView["DetailedView"] = 3] = "DetailedView";
            })(CardView = CardContainer.CardView || (CardContainer.CardView = {}));
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
                    var externalDependencies = { xrmNavigation: Xrm.Navigation };
                    var additionalDetails = context.parameters.AdditionalDetails &&
                        context.parameters.AdditionalDetails.raw &&
                        JSON.parse(context.parameters.AdditionalDetails.raw);
                    var card = JSON.parse(context.parameters.Card.raw);
                    var cardViewString = MscrmControls.Sales.CardContainer.CardView[context.parameters.CardView.raw];
                    var cardView = MscrmControls.Sales.CardContainer.CardView[cardViewString];
                    this.actionCardControl = new ActionCardControl_1.CardControl(context, card, additionalDetails, cardView, externalDependencies);
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
                function CardControl(context, card, additionalDetails, cardView, externalDependencies, adaptiveCard) {
                    this.context = context;
                    this.card = card;
                    this.additionalDetails = additionalDetails;
                    this.cardView = cardView;
                    this.xrmNavigation = externalDependencies.xrmNavigation;
                    this.adaptiveCard = adaptiveCard ? adaptiveCard : new AdaptiveCards.AdaptiveCard();
                }
                CardControl.prototype.LoadActionCard = function (container) {
                    container.firstChild && container.removeChild(container.firstChild);
                    container.appendChild(this.GetControlMainHTMLDiv());
                };
                CardControl.prototype.GetControlMainHTMLDiv = function () {
                    var adaptiveCardHelper = new ActionCardControl.AdaptiveCardHelper(this.adaptiveCard, this.context, this.card, this.additionalDetails, this.cardView, this.xrmNavigation);
                    var htmlContent = adaptiveCardHelper.GetCardHTMLContent();
                    return htmlContent;
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
                        var typecode = Util.getEntityTypeCode(card.regardingobjectid.etn);
                        return "./_imgs/svg_" + typecode.toString() + ".svg";
                    }
                    return Util.defaultIcon;
                };
                // Getting typecode of regardingobjectid for flow cards
                Util.getEntityTypeCode = function (entity) {
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
                function AdaptiveCardHelper(adaptiveCard, context, card, additionalDetails, cardView, xrmNavigation) {
                    this.adaptiveCard = adaptiveCard;
                    this.xrmNavigation = xrmNavigation;
                    this.card = card;
                    this.additionalDetails = additionalDetails;
                    this.cardView = cardView;
                    this.context = context;
                }
                AdaptiveCardHelper.prototype.GetCardHTMLContent = function () {
                    return this.buildAdaptiveControl(ActionCardControl.TemplateFactory.GetCardTemplate(this.context, this.card, this.additionalDetails, this.cardView, this.xrmNavigation));
                };
                AdaptiveCardHelper.prototype.buildAdaptiveControl = function (cardTemplate) {
                    cardTemplate.PopulateCardDetails();
                    var templateDefinition;
                    if (this.cardView == MscrmControls.Sales.CardContainer.CardView.GroupView) {
                        templateDefinition = cardTemplate.GetGroupCardTemplate();
                    }
                    else {
                        templateDefinition = cardTemplate.GetTemplate();
                    }
                    this.adaptiveCard.parse(templateDefinition);
                    this.adaptiveCard.onExecuteAction = cardTemplate.OnExecuteAction.bind(cardTemplate);
                    cardTemplate.OverrideHostConfig(this.adaptiveCard.hostConfig);
                    var cardHTMLDiv = this.adaptiveCard.render();
                    cardTemplate.OverrideCardStyle(cardHTMLDiv, this.context);
                    return cardHTMLDiv;
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
            var CardIconFactory = /** @class */ (function () {
                function CardIconFactory() {
                }
                CardIconFactory.GetCardIcon = function (card) {
                    // Check for flow and custom cards
                    if (card.cardtype >= 10000) {
                        return card.icon;
                    }
                    switch (card.cardtype) {
                        case 7:
                            return "./webresources/msdyn_/Images/TaskCardIcon.svg";
                        case 13:
                            return "./webresources/msdyn_/Images/EmailCardIcon.svg";
                        case 16:
                            return "./webresources/msdyn_/Images/MissedCloseDateIcon.svg";
                        case 20:
                            return "./webresources/msdyn_/Images/CloseDateComingSoonIcon.svg";
                        case 29:
                        case 30:
                        case 31:
                        case 32:
                        case 33:
                            return "./webresources/msdyn_/Images/NoActivityCardIcon.svg";
                        case 110:
                            return "./webresources/msdyn_/Images/TeaserIcon.png";
                        default:
                            return "./webresources/msdyn_/Images/ActivityDueCardIcon.svg";
                    }
                };
                CardIconFactory.GetGroupCardIcon = function (card) {
                    //TODO: Change to new group type once that is done
                    switch (card.cardtype) {
                        case 101:
                        case 102:
                            return "./webresources/msdyn_/Images/TopCardIcon.svg";
                        default:
                            return "./webresources/msdyn_/Images/ActivityDueCardIcon.svg";
                    }
                };
                CardIconFactory.GetCardActionIcon = function () {
                    return "./webresources/msdyn_/Images/ButtonPlaceholderIcon.svg";
                };
                return CardIconFactory;
            }());
            ActionCardControl.CardIconFactory = CardIconFactory;
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
                TemplateFactory.GetCardTemplate = function (context, card, additionalDetails, cardView, xrmNavigation) {
                    switch (card.cardtype) {
                        case 101:
                        case 102:
                            return new ActionCardControl.TopCardTemplate(context, card, additionalDetails, cardView);
                        case 110:
                            return new ActionCardControl.TeaserCardTemplate(context, card, additionalDetails, cardView, xrmNavigation);
                        default:
                            return new ActionCardControl.CardTemplate(context, card, additionalDetails, cardView);
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
                function CardTemplate(context, card, additionalDetails, cardView) {
                    this.icon = "";
                    this.title = "";
                    this.softTitle = "";
                    this.description = "";
                    this.summaryText = "";
                    this.groupFooter = "";
                    this.snooze = "";
                    this.dismiss = "";
                    this.like = "";
                    this.dislike = "";
                    this.Card = card;
                    this.AdditionalDetails = additionalDetails;
                    this.cardView = cardView;
                    this.Context = context;
                }
                CardTemplate.prototype.PopulateCardDetails = function () {
                    this.icon = ActionCardControl.CardIconFactory.GetCardIcon(this.Card) || "";
                    this.title = JSON.stringify(this.Card.title || "");
                    this.softTitle = JSON.stringify(this.Card.softTitle || "");
                    this.description = JSON.stringify(this.Card.description || "");
                    this.summaryText = JSON.stringify(this.Card.summaryText || "");
                    this.snooze = this.Context.resources.getString("ActionCard.CFC.Common.Snooze");
                    this.dismiss = this.Context.resources.getString("ActionCard.CFC.Common.Dismiss");
                    this.like = this.Context.resources.getString("ActionCard.CFC.Common.Like");
                    this.dislike = this.Context.resources.getString("ActionCard.CFC.Common.Dislike");
                    if (this.cardView == MscrmControls.Sales.CardContainer.CardView.GroupView) {
                        this.groupFooter =
                            this.AdditionalDetails &&
                                JSON.stringify(this.Card.title + " + " + (this.AdditionalDetails.GroupCardsCount -
                                    1) + " " + this.Context.resources.getString("ActionCard.Group.Footer.Suffix"));
                    }
                };
                CardTemplate.prototype.OverrideHostConfig = function (hostConfig) {
                    hostConfig.actions.actionsOrientation = 0; // Horizontal;
                    hostConfig.actions.actionAlignment = 2; // Right;
                };
                CardTemplate.prototype.OverrideCardStyle = function (cardHTMLDiv, context) {
                    cardHTMLDiv.style.padding = context.theming.measures.measure100;
                    cardHTMLDiv.style.marginBottom = context.theming.measures.measure100;
                    cardHTMLDiv.style.boxShadow = "0px 0.3px 0.9px rgba(0, 0, 0, 0.108), 0px 1.6px 3.6px rgba(0, 0, 0, 0.132)";
                    cardHTMLDiv.style.borderRadius = "2px";
                };
                CardTemplate.prototype.GetTemplate = function () {
                    var template = JSON.parse("{\n                \"type\": \"AdaptiveCard\",\n                \"body\": [{\n                        \"type\": \"Container\",\n                        \"spacing\": \"Small\",\n                        \"items\": [{\n                                \"type\": \"ColumnSet\",\n                                \"columns\": [{\n                                        \"type\": \"Column\",\n                                        \"items\": [\n                                            {\n                                                \"type\": \"Image\",\n                                                \"url\": \"" + this.icon + "\",\n                                                \"style\": \"person\",\n                                                \"altText\": " + this.softTitle + ",\n                                                \"width\": \"24px\",\n                                                \"height\": \"24px\",\n                                                \"horizontalAlignment\": \"Center\"\n                                            }],\n                                            \"width\": \"40px\",\n                                            \"horizontalAlignment\": \"Center\",\n                                            \"verticalContentAlignment\": \"Center\"\n                                    },\n                                    {\n                                        \"type\": \"Column\",\n                                        \"width\": \"stretch\",\n                                        \"items\": [{\n                                                \"type\": \"TextBlock\",\n                                                \"text\": " + this.softTitle + ",\n                                                \"weight\": \"Bolder\"\n                                            },\n                                            {\n                                                \"type\": \"TextBlock\",\n                                                \"text\": " + this.title + ",\n                                                \"spacing\": \"None\"\n                                            }\n                                        ],\n                                        \"spacing\": \"small\"\n                                    },\n                                    {\n                                        \"type\": \"Column\",\n                                        \"items\": [{\n                                                \"type\": \"Image\",\n                                                \"altText\": \"" + this.dislike + "\",\n                                                \"horizontalAlignment\": \"Center\",\n                                                \"backgroundColor\": \"\",\n                                                \"url\": \"./webresources/msdyn_/Images/DislikeCardIcon.svg\",\n                                                \"width\": \"12px\",\n                                                \"height\": \"12px\"\n                                            }],\n                                        \"spacing\": \"None\",\n                                        \"width\": \"32px\",\n                                        \"selectAction\": {\n                                            \"type\": \"Action.Submit\",\n                                            \"title\": \"Dislike\"\n                                        },\n                                        \"verticalContentAlignment\": \"Center\"\n                                    },\n                                    {\n                                        \"type\": \"Column\",\n                                        \"items\": [{\n                                                \"type\": \"Image\",\n                                                \"altText\": \"" + this.like + "\",\n                                                \"horizontalAlignment\": \"Center\",\n                                                \"backgroundColor\": \"\",\n                                                \"url\": \"./webresources/msdyn_/Images/LikeCardIcon.svg\",\n                                                \"width\": \"12px\",\n                                                \"height\": \"12px\"\n                                            }],\n                                        \"spacing\": \"None\",\n                                        \"width\": \"32px\",\n                                        \"selectAction\": {\n                                            \"type\": \"Action.Submit\",\n                                            \"title\": \"Like\"\n                                        },\n                                        \"verticalContentAlignment\": \"Center\"\n                                    },\n                                    {\n                                        \"type\": \"Column\",\n                                        \"items\": [{\n                                                \"type\": \"Image\",\n                                                \"altText\": \"" + this.snooze + "\",\n                                                \"horizontalAlignment\": \"Center\",\n                                                \"backgroundColor\": \"\",\n                                                \"url\": \"./webresources/msdyn_/Images/SnoozeCardIcon.svg\",\n                                                \"width\": \"12px\",\n                                                \"height\": \"12px\"\n                                            }],\n                                        \"spacing\": \"None\",\n                                        \"width\": \"32px\",\n                                        \"selectAction\": {\n                                            \"type\": \"Action.Submit\",\n                                            \"title\": \"Snooze\"\n                                        },\n                                        \"verticalContentAlignment\": \"Center\"\n                                    },\n                                    {\n                                        \"type\": \"Column\",\n                                        \"items\": [{\n                                                \"type\": \"Image\",\n                                                \"altText\": \"" + this.dismiss + "\",\n                                                \"horizontalAlignment\": \"Center\",\n                                                \"backgroundColor\": \"\",\n                                                \"url\": \"./webresources/msdyn_/Images/DismissCardIcon.svg\",\n                                                \"width\": \"12px\",\n                                                \"height\": \"12px\"\n                                            }],\n                                        \"spacing\": \"None\",\n                                        \"width\": \"32px\",\n                                        \"selectAction\": {\n                                            \"type\": \"Action.Submit\",\n                                            \"title\": \"Dismiss\"\n                                        },\n                                        \"verticalContentAlignment\": \"Center\"\n                                    }\n                                ]\n                            }]\n                    },\n                    {\n                        \"type\": \"TextBlock\",\n                        \"text\": " + this.description + ",\n                        \"wrap\": true,\n                        \"maxLines\": 3\n                    }\n                ],\n                \"$schema\": \"http://adaptivecards.io/schemas/adaptive-card.json\",\n                \"version\": \"1.0\",\n                \"actions\": " + this.GetActions() + "\n            }");
                    return template;
                };
                CardTemplate.prototype.GetActions = function () {
                    var _this = this;
                    var actions = [];
                    if (this.Card.actions) {
                        this.Card.actions.Mobile &&
                            this.Card.actions.Mobile.Actions.map(function (action) {
                                actions.push({
                                    type: "Action.Submit",
                                    title: _this.Card.data && _this.Card.data["ActionName"]
                                        ? _this.Card.data["ActionName"]
                                        : action.Title,
                                    data: action,
                                    iconUrl: ActionCardControl.CardIconFactory.GetCardActionIcon(),
                                });
                            });
                        !this.Card.actions.Mobile &&
                            this.Card.actions.WebClient &&
                            this.Card.actions.WebClient.Actions.map(function (action) {
                                actions.push({
                                    type: "Action.Submit",
                                    title: _this.Card.data && _this.Card.data["ActionName"]
                                        ? _this.Card.data["ActionName"]
                                        : action.Title,
                                    data: action,
                                    iconUrl: ActionCardControl.CardIconFactory.GetCardActionIcon(),
                                });
                            });
                    }
                    return JSON.stringify(actions);
                };
                CardTemplate.prototype.GetGroupCardTemplate = function () {
                    var template = JSON.parse("{\n            \"type\": \"AdaptiveCard\",\n            \"body\": [\n                {\n                    \"type\": \"Container\",\n                    \"spacing\": \"Small\",\n                    \"items\": [\n                        {\n                            \"type\": \"ColumnSet\",\n                            \"columns\": [\n                                {\n                                    \"type\": \"Column\",\n                                    \"width\": \"auto\",\n                                    \"items\": [\n                                        {\n                                            \"type\": \"Image\",\n                                            \"url\": \"" + this.icon + "\",\n                                            \"size\": \"Small\",\n                                            \"style\": \"Person\"\n                                        }\n                                    ]\n                                },\n                                {\n                                    \"type\": \"Column\",\n                                    \"width\": \"stretch\",\n                                    \"items\": [\n                                        {\n                                            \"type\": \"TextBlock\",\n                                            \"color\": \"Warning\",\n                                            \"text\": " + this.softTitle + "\n                                        },\n                                        {\n                                            \"type\": \"TextBlock\",\n                                            \"text\": " + this.summaryText + ",\n                                            \"wrap\": true,\n                                            \"maxLines\": 2\n                                        }\n                                    ]\n                                },\n                                {\n                                    \"type\": \"Column\",\n                                    \"items\": [\n                                        {\n                                            \"type\": \"Container\",\n                                            \"items\": [\n                                                {\n                                                    \"type\": \"Image\",\n                                                    \"altText\": \"\",\n                                                    \"horizontalAlignment\": \"Center\",\n                                                    \"size\": \"Small\",\n                                                    \"backgroundColor\": \"\",\n                                                    \"url\": \"https://image.flaticon.com/icons/svg/2089/2089640.svg\",\n                                                    \"width\": \"14px\",\n                                                    \"height\": \"14px\"\n                                                }\n                                            ],\n                                            \"width\": \"20px\",\n                                            \"horizontalAlignment\": \"Center\",\n                                            \"spacing\": \"None\",\n                                            \"selectAction\": {\n                                                \"type\": \"Action.Submit\",\n                                                \"title\": \"Expand\"\n                                            },\n                                            \"minHeight\": \"20px\",\n                                            \"verticalContentAlignment\": \"Center\",\n                                            \"height\": \"stretch\"\n                                        }\n                                    ],\n                                    \"width\": \"20px\"\n                                }\n                            ]\n                        }\n                    ]\n                },\n                {\n                    \"type\": \"ColumnSet\",\n                    \"columns\": [\n                        {\n                            \"type\": \"Column\",\n                            \"width\": \"auto\",\n                            \"items\": [\n                                {\n                                    \"type\": \"Image\",\n                                    \"url\": \"" + ActionCardControl.Util.getEntityIcon(this.Card) + "\",\n                                    \"size\": \"Small\",\n                                    \"width\": \"40px\",\n                                    \"height\": \"16px\"\n                                }\n                            ]\n                        },\n                        {\n                            \"type\": \"Column\",\n                            \"width\": \"stretch\",\n                            \"items\": [\n                                {\n                                    \"type\": \"TextBlock\",\n                                    \"text\": " + this.groupFooter + ",\n                                    \"weight\": \"Bolder\"\n                                }\n                            ]\n                        }\n                    ],\n                    \"separator\": true,\n                    \"spacing\": \"Medium\"\n                }\n            ],\n            \"$schema\": \"http://adaptivecards.io/schemas/adaptive-card.json\",\n            \"version\": \"1.0\"\n        }");
                    return template;
                };
                CardTemplate.prototype.OnExecuteAction = function (action) {
                    var command;
                    switch (action.title) {
                        case "Expand":
                            command = {
                                ActionName: "Expand",
                                SelectedCardType: this.Card.cardtype,
                            };
                            break;
                        case "Snooze":
                            command = {
                                ActionName: "Snooze",
                                CommandName: "Mscrm.HomepageGrid.actioncard.SnoozeCommand",
                                SelectedCard: this.Card,
                            };
                            break;
                        case "Dismiss":
                            command = {
                                ActionName: "Dismiss",
                                CommandName: "Mscrm.HomepageGrid.actioncard.DismissCommand",
                                SelectedCard: this.Card,
                            };
                            break;
                        case "Like":
                            command = {
                                ActionName: "Like",
                                SelectedCard: this.Card,
                            };
                            break;
                        case "Dislike":
                            command = {
                                ActionName: "Dislike",
                                SelectedCard: this.Card,
                            };
                            break;
                        default:
                            command = {
                                CommandName: action.data.CommandName,
                                ActionName: action.data.ActionName,
                                SelectedCard: this.Card,
                            };
                            break;
                    }
                    this.Context.factory.fireEvent("ExecuteActionCardCommand", command);
                };
                return CardTemplate;
            }());
            ActionCardControl.CardTemplate = CardTemplate;
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
                function TeaserCardTemplate(context, card, additionalDetails, cardView, xrmNavigation) {
                    var _this = _super.call(this, context, card, additionalDetails, cardView) || this;
                    _this.learnMoreText = "";
                    _this.remindMeLaterText = "";
                    _this._storage = sessionStorage;
                    _this.xrmNavigation = xrmNavigation;
                    return _this;
                }
                TeaserCardTemplate.prototype.GetTemplate = function () {
                    var teaserInfo = this.getTeaserInfo();
                    var formatedTitle = teaserInfo.title;
                    var cardDescriptionLabel = teaserInfo.description;
                    var icon = ActionCardControl.CardIconFactory.GetCardIcon(this.Card);
                    this.learnMoreText = this.Context.resources.getString("ActionCard.CFC.Teaser.LearnMore");
                    this.remindMeLaterText = this.Context.resources.getString("ActionCard.CFC.Teaser.RemindLater");
                    var forwardLink = teaserInfo.forwardLink;
                    var template = {
                        type: "AdaptiveCard",
                        backgroundImage: "./webresources/msdyn_/Images/TeaserBackground.jpg",
                        body: [
                            {
                                type: "Container",
                                spacing: "small",
                                items: [
                                    {
                                        type: "ColumnSet",
                                        columns: [
                                            {
                                                type: "Column",
                                                width: "auto",
                                                items: [
                                                    {
                                                        type: "Image",
                                                        url: icon,
                                                        size: "small",
                                                        style: "person",
                                                        altText: formatedTitle,
                                                    },
                                                ],
                                            },
                                            {
                                                type: "Column",
                                                width: "stretch",
                                                items: [
                                                    {
                                                        type: "TextBlock",
                                                        text: formatedTitle,
                                                        wrap: true,
                                                        spacing: "None",
                                                        weight: "Bolder",
                                                    },
                                                    {
                                                        type: "TextBlock",
                                                        text: cardDescriptionLabel,
                                                        wrap: true,
                                                    },
                                                    {
                                                        type: "TextBlock",
                                                        text: " ",
                                                        wrap: true,
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                        actions: [
                            {
                                type: "Action.Submit",
                                title: this.remindMeLaterText,
                            },
                            {
                                type: "Action.Submit",
                                title: this.learnMoreText,
                                data: forwardLink,
                            },
                        ],
                        $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
                        version: "1.0",
                    };
                    return template;
                };
                TeaserCardTemplate.prototype.OverrideHostConfig = function (hostConfig) {
                    hostConfig.actions.actionsOrientation = 0; // Horizontal;
                    hostConfig.actions.actionAlignment = 0; // Left;
                };
                TeaserCardTemplate.prototype.OnExecuteAction = function (action) {
                    switch (action.title) {
                        case this.learnMoreText:
                            this.xrmNavigation.openUrl(action.data);
                            break;
                        case this.remindMeLaterText:
                            this.Context.factory.fireEvent("ExecuteActionCardCommand", {
                                CommandName: "Mscrm.HomepageGrid.actioncard.SnoozeCommand",
                                SelectedCard: this.Card,
                            });
                            break;
                    }
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
                    }
                    return teasersArray[0];
                };
                TeaserCardTemplate.prototype.getTeasersArray = function () {
                    return [
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
                            forwardLink: "https://go.microsoft.com/fwlink/p/?linkid=824710",
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
                    _this.icons = [];
                    _this.titles = [];
                    _this.descriptions = [];
                    _this.snoozeAll = "";
                    _this.dismissAll = "";
                    return _this;
                }
                TopCardTemplate.prototype.PopulateCardDetails = function () {
                    var _this = this;
                    this.cards = this.AdditionalDetails && this.AdditionalDetails.cards.slice(0, 3);
                    this.icon = ActionCardControl.CardIconFactory.GetGroupCardIcon(this.Card) || "";
                    this.softTitle = JSON.stringify(this.Card.softTitle || "");
                    this.summaryText = JSON.stringify(this.Card.summaryText || "");
                    this.cards &&
                        this.cards.map(function (card) {
                            _this.titles.push(JSON.stringify(card.title || ""));
                            _this.descriptions.push(JSON.stringify(card.description || ""));
                            _this.icons.push(JSON.stringify("http://icons.iconarchive.com/icons/papirus-team/papirus-status/256/avatar-default-icon.png"));
                        });
                    this.snoozeAll = this.Context.resources.getString("ActionCard.CFC.Common.SnoozeAll");
                    this.dismissAll = this.Context.resources.getString("ActionCard.CFC.Common.DismissAll");
                    this.like = this.Context.resources.getString("ActionCard.CFC.Common.Like");
                    this.dislike = this.Context.resources.getString("ActionCard.CFC.Common.Dislike");
                };
                TopCardTemplate.prototype.OverrideCardStyle = function (cardHTMLDiv, context) {
                    _super.prototype.OverrideCardStyle.call(this, cardHTMLDiv, context);
                    cardHTMLDiv.style.padding = "0px";
                    cardHTMLDiv.style.paddingTop = context.theming.measures.measure100;
                };
                TopCardTemplate.prototype.GetGroupCardTemplate = function () {
                    var template = JSON.parse("{\n                \"type\": \"AdaptiveCard\",\n                \"body\": [\n                    {\n                        \"type\": \"ColumnSet\",\n                        \"columns\": [\n                            {\n                                \"type\": \"Column\",\n                                \"items\": [\n                                    {\n                                        \"type\": \"Image\",\n                                        \"url\": \"" + this.icon + "\",\n                                        \"altText\": " + this.softTitle + ",\n                                        \"width\": \"24px\",\n                                        \"height\": \"24px\",\n                                        \"horizontalAlignment\": \"Center\"\n                                    }],\n                                    \"width\": \"60px\",\n                                    \"horizontalAlignment\": \"Center\",\n                                    \"verticalContentAlignment\": \"Center\"\n                            },\n                            {\n                                \"type\": \"Column\",\n                                \"width\": \"stretch\",\n                                \"items\": [\n                                    {\n                                        \"type\": \"TextBlock\",\n                                        \"text\": " + this.softTitle + ",\n                                        \"weight\": \"Bolder\"\n                                    }\n                                ],\n                                \"verticalContentAlignment\": \"Center\",\n                                \"spacing\": \"none\"\n                            },\n                            {\n                                \"type\": \"Column\",\n                                \"items\": [{\n                                        \"type\": \"Image\",\n                                        \"altText\": \"" + this.dislike + "\",\n                                        \"horizontalAlignment\": \"Center\",\n                                        \"backgroundColor\": \"\",\n                                        \"url\": \"./webresources/msdyn_/Images/DislikeCardIcon.svg\",\n                                        \"width\": \"12px\",\n                                        \"height\": \"12px\"\n                                    }],\n                                \"spacing\": \"None\",\n                                \"width\": \"32px\",\n                                \"selectAction\": {\n                                    \"type\": \"Action.Submit\",\n                                    \"title\": \"Dislike\"\n                                },\n                                \"verticalContentAlignment\": \"Center\"\n                            },\n                            {\n                                \"type\": \"Column\",\n                                \"items\": [{\n                                        \"type\": \"Image\",\n                                        \"altText\": \"" + this.like + "\",\n                                        \"horizontalAlignment\": \"Center\",\n                                        \"backgroundColor\": \"\",\n                                        \"url\": \"./webresources/msdyn_/Images/LikeCardIcon.svg\",\n                                        \"width\": \"12px\",\n                                        \"height\": \"12px\"\n                                    }],\n                                \"spacing\": \"None\",\n                                \"width\": \"32px\",\n                                \"selectAction\": {\n                                    \"type\": \"Action.Submit\",\n                                    \"title\": \"Like\"\n                                },\n                                \"verticalContentAlignment\": \"Center\"\n                            },\n                            {\n                                \"type\": \"Column\",\n                                \"items\": [{\n                                        \"type\": \"Image\",\n                                        \"altText\": \"" + this.snoozeAll + "\",\n                                        \"horizontalAlignment\": \"Center\",\n                                        \"backgroundColor\": \"\",\n                                        \"url\": \"./webresources/msdyn_/Images/SnoozeCardIcon.svg\",\n                                        \"width\": \"12px\",\n                                        \"height\": \"12px\"\n                                    }],\n                                \"spacing\": \"None\",\n                                \"width\": \"32px\",\n                                \"selectAction\": {\n                                    \"type\": \"Action.Submit\",\n                                    \"title\": \"SnoozeAll\"\n                                },\n                                \"verticalContentAlignment\": \"Center\"\n                            },\n                            {\n                                \"type\": \"Column\",\n                                \"items\": [{\n                                        \"type\": \"Image\",\n                                        \"altText\": \"" + this.dismissAll + "\",\n                                        \"horizontalAlignment\": \"Center\",\n                                        \"backgroundColor\": \"\",\n                                        \"url\": \"./webresources/msdyn_/Images/DismissCardIcon.svg\",\n                                        \"width\": \"12px\",\n                                        \"height\": \"12px\"\n                                    }],\n                                \"spacing\": \"None\",\n                                \"width\": \"32px\",\n                                \"selectAction\": {\n                                    \"type\": \"Action.Submit\",\n                                    \"title\": \"DismissAll\"\n                                },\n                                \"verticalContentAlignment\": \"Center\"\n                            },\n                            {\n                                \"type\": \"Column\",\n                                \"width\": \"14px\",\n                                \"spacing\": \"None\"\n                            }\n                        ],\n                        \"minHeight\": \"32px\"\n                    },\n                    {\n                        \"type\": \"Container\",\n                        \"items\": [\n                            {\n                                \"type\": \"ColumnSet\",\n                                \"columns\": [\n                                    {\n                                        \"type\": \"Column\",\n                                        \"items\": [\n                                            {\n                                                \"type\": \"Image\",\n                                                \"altText\": " + this.titles[0] + ",\n                                                \"size\": \"Small\",\n                                                \"url\": " + this.icons[0] + ",\n                                                \"style\": \"Person\",\n                                                \"horizontalAlignment\": \"Center\"\n                                            }\n                                        ],\n                                        \"width\": \"60px\",\n                                        \"verticalContentAlignment\": \"Center\"\n                                    },\n                                    {\n                                        \"type\": \"Column\",\n                                        \"width\": \"stretch\",\n                                        \"items\": [\n                                            {\n                                                \"type\": \"TextBlock\",\n                                                \"text\": " + this.titles[0] + ",\n                                                \"horizontalAlignment\": \"Left\",\n                                                \"weight\": \"Bolder\",\n                                                \"spacing\": \"none\"\n                                            },\n                                            {\n                                                \"type\": \"TextBlock\",\n                                                \"text\": " + this.descriptions[0] + ",\n                                                \"spacing\": \"none\"\n                                            }\n                                        ],\n                                        \"verticalContentAlignment\": \"Center\",\n                                        \"spacing\": \"none\"\n                                    }\n                                ],\n                                \"selectAction\": {\n                                    \"type\": \"Action.Submit\",\n                                    \"title\": \"OpenEntity\",\n                                    \"data\": \"0\"\n                                },\n                                \"spacing\": \"none\",\n                                \"minHeight\": \"60px\"\n                            },\n                            {\n                                \"type\": \"ColumnSet\",\n                                \"columns\": [\n                                    {\n                                        \"type\": \"Column\",\n                                        \"items\": [\n                                            {\n                                                \"type\": \"Image\",\n                                                \"altText\": " + this.titles[1] + ",\n                                                \"size\": \"Small\",\n                                                \"url\": " + this.icons[1] + ",\n                                                \"style\": \"Person\",\n                                                \"horizontalAlignment\": \"Center\"\n                                            }\n                                        ],\n                                        \"width\": \"60px\",\n                                        \"verticalContentAlignment\": \"Center\"\n                                    },\n                                    {\n                                        \"type\": \"Column\",\n                                        \"width\": \"stretch\",\n                                        \"items\": [\n                                            {\n                                                \"type\": \"TextBlock\",\n                                                \"text\": " + this.titles[1] + ",\n                                                \"horizontalAlignment\": \"Left\",\n                                                \"weight\": \"Bolder\",\n                                                \"spacing\": \"none\"\n                                            },\n                                            {\n                                                \"type\": \"TextBlock\",\n                                                \"text\": " + this.descriptions[1] + ",\n                                                \"spacing\": \"none\"\n                                            }\n                                        ],\n                                        \"verticalContentAlignment\": \"Center\",\n                                        \"spacing\": \"none\"\n                                    }\n                                ],\n                                \"selectAction\": {\n                                    \"type\": \"Action.Submit\",\n                                    \"title\": \"OpenEntity\",\n                                    \"data\": \"1\"\n                                },\n                                \"spacing\": \"none\",\n                                \"minHeight\": \"60px\"\n                            },\n                            {\n                                \"type\": \"ColumnSet\",\n                                \"columns\": [\n                                    {\n                                        \"type\": \"Column\",\n                                        \"items\": [\n                                            {\n                                                \"type\": \"Image\",\n                                                \"altText\": " + this.titles[2] + ",\n                                                \"size\": \"Small\",\n                                                \"url\": " + this.icons[2] + ",\n                                                \"style\": \"Person\",\n                                                \"horizontalAlignment\": \"Center\"\n                                            }\n                                        ],\n                                        \"width\": \"60px\",\n                                        \"verticalContentAlignment\": \"Center\"\n                                    },\n                                    {\n                                        \"type\": \"Column\",\n                                        \"width\": \"stretch\",\n                                        \"items\": [\n                                            {\n                                                \"type\": \"TextBlock\",\n                                                \"text\": " + this.titles[2] + ",\n                                                \"horizontalAlignment\": \"Left\",\n                                                \"weight\": \"Bolder\",\n                                                \"spacing\": \"none\"\n                                            },\n                                            {\n                                                \"type\": \"TextBlock\",\n                                                \"text\": " + this.descriptions[2] + ",\n                                                \"spacing\": \"none\"\n                                            }\n                                        ],\n                                        \"verticalContentAlignment\": \"Center\",\n                                        \"spacing\": \"none\"\n                                    }\n                                ],\n                                \"selectAction\": {\n                                    \"type\": \"Action.Submit\",\n                                    \"title\": \"OpenEntity\",\n                                    \"data\": \"2\"\n                                },\n                                \"spacing\": \"none\",\n                                \"minHeight\": \"60px\"\n                            }\n                        ],\n                        \"separator\": true\n                    }\n                ],\n                \"$schema\": \"http://adaptivecards.io/schemas/adaptive-card.json\",\n                \"version\": \"1.0\"\n            }");
                    return template;
                };
                TopCardTemplate.prototype.OnExecuteAction = function (action) {
                    var command;
                    switch (action.title) {
                        case "OpenEntity":
                            command = {
                                ActionName: "OpenEntityForTopCards",
                                SelectedCard: this.cards[parseInt(action.data)],
                            };
                            break;
                        case "Like":
                            command = {
                                ActionName: "Like",
                                SelectedCard: this.Card,
                            };
                            break;
                        case "Dislike":
                            command = {
                                ActionName: "Dislike",
                                SelectedCard: this.Card,
                            };
                            break;
                        case "SnoozeAll":
                            command = {
                                ActionName: "SnoozeAll",
                                SelectedCardType: this.Card.cardtype,
                            };
                            break;
                        case "DismissAll":
                            command = {
                                ActionName: "DismissAll",
                                SelectedCardType: this.Card.cardtype,
                            };
                            break;
                    }
                    this.Context.factory.fireEvent("ExecuteActionCardCommand", command);
                };
                return TopCardTemplate;
            }(ActionCardControl.CardTemplate));
            ActionCardControl.TopCardTemplate = TopCardTemplate;
        })(ActionCardControl = Sales.ActionCardControl || (Sales.ActionCardControl = {}));
    })(Sales = MscrmControls.Sales || (MscrmControls.Sales = {}));
})(MscrmControls || (MscrmControls = {}));
