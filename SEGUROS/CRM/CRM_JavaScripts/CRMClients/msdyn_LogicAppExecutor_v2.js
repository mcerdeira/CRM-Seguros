var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
/// <reference path="../../../../../../references/external/TypeDefinitions/lib.es6.d.ts" />
/// <reference path="../Interfaces.ts" />
/// <reference path="../LogicAppExecutor.ts" />
var Microsoft;
(function (Microsoft) {
    var LogicAppExecutor;
    (function (LogicAppExecutor) {
        class IfAction {
            constructor() { }
            static get Instance() {
                if (!IfAction._instance) {
                    IfAction._instance = new IfAction();
                }
                return IfAction._instance;
            }
            ExecuteAction(action, state, runHistoryData) {
                return new Promise((resolve, reject) => {
                    let expressions = action.expression;
                    var startTime = new Date().toISOString();
                    var outputs = {};
                    this.evaluateExpression(expressions, state).then(function (result) {
                        var innerActions;
                        if (result) {
                            innerActions = action.actions;
                            status = Microsoft.ProductivityMacros.Constants.StatusSucceded;
                            var trueInput = {
                                "expressionResult": true
                            };
                            Microsoft.ProductivityMacros.RunHistory.setActionStatus(runHistoryData, status, startTime, outputs, action.name, trueInput);
                        }
                        else {
                            if (action.else) {
                                innerActions = action.else.actions;
                            }
                            status = Microsoft.ProductivityMacros.Constants.StatusFailed;
                            var falseInput = {
                                "expressionResult": false
                            };
                            Microsoft.ProductivityMacros.RunHistory.setActionStatus(runHistoryData, status, startTime, outputs, action.name, falseInput);
                        }
                        let executeActionPromise = LogicAppExecutor.ExecuteActions(innerActions, state, runHistoryData).then(function (result) {
                            return (result);
                        }, function (error) {
                            reject(error);
                        });
                        executeActionPromise.then(function (success) {
                            console.log(success);
                            resolve(success);
                        }, function (error) {
                            reject(error);
                        });
                    }, function (error) {
                        reject(error);
                    });
                });
            }
            evaluateExpression(expressions, state) {
                return new Promise((resolve, reject) => {
                    for (const expression in expressions) {
                        let operator = expression;
                        switch (operator) {
                            case "and":
                                let innerExpressions = expressions[expression];
                                var promises = [];
                                for (const exp in innerExpressions) {
                                    var promiseResult = this.evaluateExpression(innerExpressions[exp], state).then(function (result) {
                                        if (!result) {
                                            return resolve(result);
                                        }
                                    }, function (error) {
                                        reject(error);
                                    });
                                    promises.push(promiseResult);
                                }
                                Promise.all(promises).then(function (success) {
                                    return resolve(true);
                                }, function (error) {
                                    reject(error);
                                });
                                break;
                            case "or":
                                let innerExprs = expressions[expression];
                                var orPromises = [];
                                for (const exp in innerExprs) {
                                    var promiseResult = this.evaluateExpression(innerExprs[exp], state).then(function (result) {
                                        if (result) {
                                            return resolve(result);
                                        }
                                    }, function (error) {
                                        reject(error);
                                    });
                                    orPromises.push(promiseResult);
                                }
                                Promise.all(orPromises).then(function (success) {
                                    return resolve(false);
                                }, function (error) {
                                    reject(error);
                                });
                                break;
                            case "not":
                                this.evaluateExpression(expressions[expression], state).then(function (success) {
                                    console.log(success);
                                    return resolve(!success);
                                }, function (error) {
                                    reject(error);
                                });
                                break;
                            default:
                                var slugPromises = [];
                                var lhsValue;
                                var rhsValue;
                                slugPromises.push(LogicAppExecutor.resolveSlug(expressions[expression][0], state.stateParams).then(function (lhs) {
                                    try {
                                        console.log("LHS : " + lhs);
                                        lhsValue = lhs;
                                    }
                                    catch (ex) {
                                        console.log(ex);
                                        reject(ex);
                                    }
                                }.bind(this), function (error) {
                                    reject(error);
                                }));
                                slugPromises.push(LogicAppExecutor.resolveSlug(expressions[expression][1], state.stateParams).then(function (rhs) {
                                    try {
                                        console.log("RHS : " + rhs);
                                        rhsValue = rhs;
                                    }
                                    catch (ex) {
                                        console.log(ex);
                                        reject(ex);
                                    }
                                }.bind(this), function (error) {
                                    reject(error);
                                }));
                                Promise.all(slugPromises).then(function (result) {
                                    return resolve(this.evaluateOperation(lhsValue, rhsValue, operator));
                                }.bind(this), function (error) {
                                    reject(error);
                                });
                        }
                    }
                });
            }
            evaluateOperation(lhs, rhs, operator) {
                try {
                    switch (operator) {
                        case "greater":
                            return (lhs > rhs);
                        case "less":
                            return (lhs < rhs);
                        case "equals":
                            return (lhs == rhs);
                        case "greaterOrEquals":
                            return (lhs >= rhs);
                        case "lessOrEquals":
                            return (lhs <= rhs);
                        case "startsWith":
                            return lhs.toString().startsWith(rhs.toString());
                        case "endsWith":
                            return lhs.toString().endsWith(rhs.toString());
                        case "contains":
                            return lhs.toString().includes(rhs.toString());
                    }
                }
                catch (ex) {
                    console.log(ex);
                    throw ex;
                }
            }
        }
        IfAction._instance = null;
        LogicAppExecutor.IfAction = IfAction;
    })(LogicAppExecutor = Microsoft.LogicAppExecutor || (Microsoft.LogicAppExecutor = {}));
})(Microsoft || (Microsoft = {}));
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
/// <reference path="../../../../../../references/external/TypeDefinitions/lib.es6.d.ts" />
/// <reference path="../Interfaces.ts" />
/// <reference path="../LogicAppExecutor.ts" />
var Microsoft;
(function (Microsoft) {
    var LogicAppExecutor;
    (function (LogicAppExecutor) {
        class SetDefaultCallScriptAction {
            constructor() { }
            static get Instance() {
                if (!SetDefaultCallScriptAction._instance) {
                    SetDefaultCallScriptAction._instance = new SetDefaultCallScriptAction();
                }
                return SetDefaultCallScriptAction._instance;
            }
            ExecuteAction(action, state, runHistoryData) {
                return new Promise((resolve, reject) => {
                    console.log(action.inputs);
                    return resolve(action.inputs.callscriptId);
                });
            }
        }
        SetDefaultCallScriptAction._instance = null;
        LogicAppExecutor.SetDefaultCallScriptAction = SetDefaultCallScriptAction;
    })(LogicAppExecutor = Microsoft.LogicAppExecutor || (Microsoft.LogicAppExecutor = {}));
})(Microsoft || (Microsoft = {}));
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
/** @internal */
var Microsoft;
(function (Microsoft) {
    var ProductivityMacros;
    (function (ProductivityMacros) {
        class Constants {
        }
        Constants.AppName = "appName";
        Constants.ClientUrl = "clientUrl";
        Constants.AppUrl = "appUrl";
        Constants.OrgLcid = "orgLcid";
        Constants.OrgUniqueName = "orgUniqueName";
        Constants.UserId = "userId";
        Constants.UserLcid = "userLcid";
        Constants.UserName = "username";
        Constants.UserRoles = "userRoles";
        Constants.OrgId = "orgId";
        Constants.crmVersion = "crmVersion";
        Constants.SuffixTabId = ".TabId";
        Constants.SuffixEntityName = ".EntityName";
        Constants.SuffixEntityId = ".EntityId";
        Constants.SuffixFlowId = ".flowId";
        Constants.SuffixPageType = ".PageType";
        Constants.SuffixPrimaryNameAttributeValue = ".PrimaryNameAttributeValue";
        Constants.OutputResult = "result";
        Constants.StatusSucceded = "Succeeded";
        Constants.StatusFailed = "Failed";
        Constants.StatusSkipped = "Skipped";
        Constants.ActionSuccessfull = "Action performed successfully";
        Constants.SplitByDot = ".";
        Constants.typeOfExecution = "Microsoft.Logic/workflows/runs";
        Constants.typeOfDefinition = "Microsoft.Logic/workflows/versions";
        Constants.DIALOG_FLOW_ID = "flow_id";
        Constants.DIALOG_FLOWS_ENVIRONMENT_ID = "environment_id";
        Constants.DIALOG_ORG_UNIQUE_NAME = "org_unique_name";
        Constants.DIALOG_ENTITY_LOGICAL_COLLECTION_NAME = "entity_logical_collection_name";
        Constants.DIALOG_ENTITY_LOGICAL_NAME = "entity_logical_name";
        Constants.DIALOG_DYNAMICS365_ACCESS_TOKEN = "dynamics365_access_token";
        Constants.DIALOG_FLOWS_AUTHENTICATION_STRING = "flows_authentication_string";
        Constants.DIALOG_DYNAMICS_365_ACCESS_TOKEN = "dynamics365_access_token";
        Constants.DIALOG_FLOWS_DESTINATION_URL = "flows_destination_url";
        Constants.DIALOG_FLOWS_FPI_SITE_URL = "flows_fpi_site_url";
        Constants.DIALOG_FLOWS_ENABLE_WIDGET_V2 = "flows_enable_widget_v2";
        Constants.FLOW_DESTINATION_URL = "MicrosoftFlowDestinationUrl";
        Constants.FLOW_FPI_URL = "MicrosoftFlowFirstPartyIntegrationSiteUrl";
        Constants.FLOW_FPI_URL_ENABLE_WIDGET_V2_PARAMETER = "&flowsEnableWidgetV2=true";
        Constants.DIALOG_HEIGHT = 600;
        Constants.DIALOG_WIDTH = 600;
        Constants.MICROSOFT_FLOWS_DIALOG = "MicrosoftFlowsDialog";
        Constants.FLOW_ENV_ID = "Flow_Env_Id";
        Constants.ENTITIES_ID = "entity_ids";
        Constants.POST_REQUEST = "POST";
        Constants.ENTITY_LOGICAL_NAME = "entityLogicalName";
        Constants.ENTITY_LOGICAL_COLLECTION_NAME = "entityLogicalCollectionName";
        Constants.FLOW_ID = "flowId";
        ProductivityMacros.Constants = Constants;
        class ActionTypes {
        }
        ActionTypes.CREATE_NEW = "Create_New";
        ActionTypes.OPEN_FORM = "Open_Form";
        ActionTypes.OPEN_GRID = "Open_Grid";
        ActionTypes.OPEN_KNOWLEDGE_SEARCH = "Open_knowledge_search";
        ActionTypes.SEARCH_KNOWLEDGE_BASE = "Search_knowledge_base";
        ActionTypes.SEARCH_BY_RELEVANCE = "Search_by_relevance";
        ActionTypes.UPDATE_RECORD = "Update_Record";
        ActionTypes.OPEN_ASSOCIATED = "Open_Associated";
        ActionTypes.DRAFT_EMAIL = "Draft_Email";
        ActionTypes.GET_ENVIRONMENT = "Get_Environment";
        ActionTypes.RESOLVE_INCIDENT = "Resolve_Case";
        //P2
        ActionTypes.OPEN_DASHBOARD = "Open_Dashboard";
        ActionTypes.LIST_FLOWS = "List_Flows";
        ProductivityMacros.ActionTypes = ActionTypes;
        class Attributes {
        }
        Attributes.commmonAttributes = ["modifiedby", "createdby", "createdonbehalfby", "createdon", "statuscode", "statecode", "ownerid", "modifiedon", "owningbusinessunit", "FormattedValue", "owninguser"];
        ProductivityMacros.Attributes = Attributes;
        class SlugPrefix {
        }
        SlugPrefix.SPLIT_BY_OPENING_BRACKET = "(";
        SlugPrefix.SPLIT_BY_DOT = ".";
        SlugPrefix.SPLIT_BY_COMMA = ",";
        SlugPrefix.SPLIT_BY_DOLLAR = "$";
        ProductivityMacros.SlugPrefix = SlugPrefix;
        class EntityName {
        }
        EntityName.ActionTemplateEntityName = "msdyn_productivitymacroactiontemplate";
        EntityName.ConnectorEntityName = "msdyn_productivitymacroconnector";
        EntityName.RunHistoryEntity = "msdyn_macrosession";
        EntityName.WorkflowEntity = "workflow";
        ProductivityMacros.EntityName = EntityName;
        class OpenAppTabType {
        }
        OpenAppTabType.Data = "data";
        OpenAppTabType.Url = "url";
        OpenAppTabType.Relationship = "relationship";
        OpenAppTabType.CreateFromEntity = "createfromentity";
        OpenAppTabType.SearchType = "searchtype";
        OpenAppTabType.CustomControlInputString = "customcontrol";
        OpenAppTabType.ThirdPartyWebsiteInputString = "websiteurl";
        OpenAppTabType.ThirdPartyWebsiteInputString1 = "thirdpartywebsite";
        OpenAppTabType.EntityViewInputString = "entityview";
        OpenAppTabType.DashboardInputString = "dashboard";
        OpenAppTabType.EntityRecordInputString = "entityrecord";
        OpenAppTabType.EntitySearchInputString = "entitysearch";
        OpenAppTabType.WebResourceInputString = "webresource";
        OpenAppTabType.Control = "control";
        OpenAppTabType.Dashboard = "dashboard";
        OpenAppTabType.Entitylist = "entitylist";
        OpenAppTabType.Entityrecord = "entityrecord";
        OpenAppTabType.Search = "search";
        OpenAppTabType.Webresource = "webresource";
        OpenAppTabType.ThirdPartyWebsite = "webresource"; //ThirdPartyWebsite
        OpenAppTabType.Custom = "custom";
        ProductivityMacros.OpenAppTabType = OpenAppTabType;
    })(ProductivityMacros = Microsoft.ProductivityMacros || (Microsoft.ProductivityMacros = {}));
})(Microsoft || (Microsoft = {}));
/// <reference path="Constants.ts" />
/// <reference path="LogicAppExecutor/Interfaces.ts" />
var Microsoft;
(function (Microsoft) {
    var ProductivityMacros;
    (function (ProductivityMacros) {
        var RunHistory;
        (function (RunHistory) {
            function newGuid() {
                return (getRandomGuidSubstr(null) +
                    getRandomGuidSubstr(true) +
                    getRandomGuidSubstr(true) +
                    getRandomGuidSubstr(null));
            }
            function getRandomGuidSubstr(s) {
                const p = (Math.random().toString(16) + "000000000").substr(2, 8);
                return s ? "-" + p.substr(0, 4) + "-" + p.substr(4, 4) : p;
            }
            function initializeRunHistoryJSON(data, inputJSONstring, macroName) {
                data.id = newGuid();
                data.startTime = new Date().toISOString();
                data.waitEndTime = data.startTime;
                data.type = Microsoft.ProductivityMacros.Constants.typeOfExecution;
                data.name = macroName;
                data.definition = {};
                data.definition.triggers = JSON.parse(inputJSONstring).definition.triggers;
                //data.definition.triggers.status = "Succeeded" // TODO: What to do if trigger can also execute
                data.trigger = {
                    "name": Object.keys(data.definition.triggers)[0],
                    "startTime": data.startTime,
                    "status": Microsoft.ProductivityMacros.Constants.StatusSucceded,
                    "scheduledTime": data.startTime,
                    "endTime": data.startTime
                };
                data.definition.contentVersion = JSON.parse(inputJSONstring).definition.contentVersion;
                data.definition.id = newGuid();
                data.definition.version = data.definition.id;
                data.definition.name = data.definition.id;
                data.definition.type = Microsoft.ProductivityMacros.Constants.typeOfDefinition;
                data.definition.$schema = JSON.parse(inputJSONstring).definition.$schema;
                return data;
            }
            RunHistory.initializeRunHistoryJSON = initializeRunHistoryJSON;
            function initializeDefinition(data, result) {
                data.definition = {};
                data.definition.createdTime = result.entities[0].createdon;
                data.definition.changedTime = result.entities[0].modifiedon;
            }
            RunHistory.initializeDefinition = initializeDefinition;
            function setActionsInConditionJSON(data, sessionID) {
                let keys = Object.keys(data);
                for (var i = 0; i < keys.length; i++) {
                    if (keys[i].startsWith("Condition")) {
                        data[keys[i]] = {
                            id: sessionID + "/actions/" + keys[i],
                            name: keys[i],
                            type: data[keys[i]].type,
                            runAfter: data[keys[i]].runAfter,
                            status: Microsoft.ProductivityMacros.Constants.StatusSkipped,
                            actions: data[keys[i]].actions,
                            else: data[keys[i]].else,
                            expression: data[keys[i]].expression,
                            inputs: data[keys[i]].inputs
                        };
                        data[keys[i]].actions = setActionsInConditionJSON(data[keys[i]].actions, sessionID);
                        if (data[keys[i]].else) {
                            data[keys[i]].else.actions = setActionsInConditionJSON(data[keys[i]].else.actions, sessionID);
                        }
                    }
                    else {
                        data[keys[i]] = {
                            id: sessionID + "/actions/" + keys[i],
                            name: keys[i],
                            type: data[keys[i]].type,
                            runAfter: data[keys[i]].runAfter,
                            status: Microsoft.ProductivityMacros.Constants.StatusSkipped,
                            inputs: data[keys[i]].inputs
                        };
                    }
                }
                return data;
            }
            function setActionsInJSON(data, actions, sessionID) {
                for (var i = 0; i < actions.length; i++) {
                    if (actions[i].name.startsWith("Condition")) {
                        data[actions[i].name] = {
                            id: sessionID + "/actions/" + actions[i].name,
                            name: actions[i].name,
                            type: actions[i].type,
                            runAfter: actions[i].runAfter,
                            status: Microsoft.ProductivityMacros.Constants.StatusSkipped,
                            actions: actions[i].actions,
                            else: actions[i].else,
                            expression: actions[i].expression,
                            inputs: actions[i].inputs
                        };
                        data[actions[i].name].actions = setActionsInConditionJSON(data[actions[i].name].actions, sessionID);
                        if (data[actions[i].name].else) {
                            data[actions[i].name].else.actions = setActionsInConditionJSON(data[actions[i].name].else.actions, sessionID);
                        }
                    }
                    else {
                        data[actions[i].name] = {
                            id: sessionID + "/actions/" + actions[i].name,
                            name: actions[i].name,
                            type: actions[i].type,
                            runAfter: actions[i].runAfter,
                            status: Microsoft.ProductivityMacros.Constants.StatusSkipped,
                            inputs: actions[i].inputs
                        };
                    }
                }
                return data;
            }
            RunHistory.setActionsInJSON = setActionsInJSON;
            function createRunHistoryRecord(data, status, macroName) {
                data.endTime = new Date().toISOString();
                data.status = status;
                let entityLogicalName = Microsoft.ProductivityMacros.EntityName.RunHistoryEntity;
                var workflowid;
                Xrm.WebApi.retrieveMultipleRecords(Microsoft.ProductivityMacros.EntityName.WorkflowEntity, "?$select=workflowid" + "&$filter=name eq '" + macroName + "' and (category eq 6 or category eq 9000)").then(function success(result) {
                    workflowid = result.entities[0]["workflowid"];
                    data.macroid = workflowid;
                    let finalData = {
                        "createdon": data.startTime,
                        "msdyn_macrosessionid": "{" + data.id + "}",
                        "msdyn_macroname@odata.bind": "workflows(" + workflowid + ")",
                        "msdyn_executioncontext": JSON.stringify(data),
                        "msdyn_status": data.status,
                        "msdyn_name": macroName
                    };
                    createRecord(entityLogicalName, finalData);
                }, function (error) {
                    console.log(error.message + " - Could not retrieve Macro ID");
                    workflowid = "error";
                });
            }
            RunHistory.createRunHistoryRecord = createRunHistoryRecord;
            function createRecord(entityLogicalName, data) {
                Xrm.WebApi.createRecord(entityLogicalName, data).then(function success(result) {
                    console.log("Macro Run created");
                }, function (error) {
                    console.log(error.message + " - Error creating entity record");
                });
            }
            function setActionStatus(data, status, startTime, outputs, actionName, actionInputs) {
                if (Object.keys(data).length !== 0) {
                    data.definition.actions = setActionStatusRecursively(data.definition.actions, status, startTime, outputs, actionName, actionInputs);
                }
                return data;
            }
            RunHistory.setActionStatus = setActionStatus;
            function setActionStatusRecursively(parent, status, startTime, outputs, actionName, actionInputs) {
                var endTime = new Date().toISOString();
                var keys = Object.keys(parent);
                for (var i = 0; i < keys.length; i++) {
                    if (actionName == keys[i]) {
                        parent[actionName].inputs = { "body": actionInputs };
                        parent[actionName].outputs = { "body": outputs };
                        parent[actionName].startTime = startTime;
                        parent[actionName].status = status;
                        parent[actionName].endTime = endTime;
                        break;
                    }
                    else if (keys[i].startsWith("Condition")) {
                        parent[keys[i]].actions = setActionStatusRecursively(parent[keys[i]].actions, status, startTime, outputs, actionName, actionInputs);
                        parent[keys[i]].status = status;
                        if (parent[keys[i]].else) {
                            parent[keys[i]].else.actions = setActionStatusRecursively(parent[keys[i]].else.actions, status, startTime, outputs, actionName, actionInputs);
                        }
                    }
                }
                return parent;
            }
        })(RunHistory = ProductivityMacros.RunHistory || (ProductivityMacros.RunHistory = {}));
    })(ProductivityMacros = Microsoft.ProductivityMacros || (Microsoft.ProductivityMacros = {}));
})(Microsoft || (Microsoft = {}));
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
/** @internal */
var Microsoft;
(function (Microsoft) {
    var ProductivityMacros;
    (function (ProductivityMacros) {
        var Internal;
        (function (Internal) {
            class ProductivityMacroState {
                constructor(stateParams) {
                    this._stateParams = stateParams || {};
                }
                get stateParams() {
                    return this._stateParams;
                }
                setStateParams(input) {
                    for (let key in input) {
                        this._stateParams[key] = input[key];
                    }
                }
                removeStateParams(input) {
                    for (var i = 0; i < input.length; i++) {
                        delete this._stateParams[input[i]];
                    }
                }
            }
            Internal.ProductivityMacroState = ProductivityMacroState;
        })(Internal = ProductivityMacros.Internal || (ProductivityMacros.Internal = {}));
    })(ProductivityMacros = Microsoft.ProductivityMacros || (Microsoft.ProductivityMacros = {}));
})(Microsoft || (Microsoft = {}));
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
/// <reference path="../../../../../../references/external/TypeDefinitions/lib.es6.d.ts" />
/// <reference path="../Interfaces.ts" />
/// <reference path="../LogicAppExecutor.ts" />
/// <reference path="../../ProductivityMacrosRunHistory.ts" />
/// <reference path="../../ProductivityMacroState.ts" />
/// <reference path="../../Constants.ts" />
var Microsoft;
(function (Microsoft) {
    var LogicAppExecutor;
    (function (LogicAppExecutor) {
        class MacroAction {
            constructor() { }
            static get Instance() {
                if (!MacroAction._instance) {
                    MacroAction._instance = new MacroAction();
                }
                return MacroAction._instance;
            }
            ExecuteAction(action, state, runHistoryData) {
                return new Promise((resolve, reject) => {
                    var executeActionsPromise = this.resolveParamsAndExecuteMacroAction(action.type, action.inputs, action.name, state, runHistoryData);
                    executeActionsPromise.then(function (success) {
                        resolve(Microsoft.ProductivityMacros.Constants.ActionSuccessfull);
                    }.bind(this), function (error) {
                        reject(error);
                    }.bind(this));
                });
            }
            resolveParamsAndExecuteMacroAction(actionType, actionInputs, actionName, macroState, runHistoryData) {
                return new Promise(function (resolve, reject) {
                    let result = {};
                    this.resolveParams(actionType, JSON.stringify(actionInputs), macroState, result).then(function (response) {
                        Promise.all([this.resolveListFlowsActionParams(actionType, response), this.updateSolutionFlowsId(response)]).then(function (response) {
                            this.executeMacroAction(actionType, response[0], actionName, macroState, runHistoryData).then(function (response) {
                                resolve(response);
                            }.bind(this), function (error) {
                                reject(error);
                            });
                        }.bind(this), function (error) {
                            reject(error);
                        });
                    }.bind(this));
                }.bind(this));
            }
            resolveParams(actionType, actionInputs, macroState, result) {
                return new Promise(function (resolve, reject) {
                    var stringResolversInputs = [];
                    var resolvedInputs = {};
                    if (!actionInputs) {
                        resolve("");
                    }
                    let inputs = JSON.parse(actionInputs);
                    for (var input in inputs) {
                        if (typeof inputs[input] === 'object') {
                            let val = inputs[input];
                            resolvedInputs[input] = val;
                            Object.keys(val).forEach(function (propName) {
                                stringResolversInputs.push(this.resolveParams(actionType, JSON.stringify(val[propName]), macroState, result).then(function (response) {
                                    resolvedInputs[input][propName] = response;
                                }.bind(this)));
                            }.bind(this));
                        }
                        else if (Array.isArray(inputs[input])) {
                            var arrayInput = inputs[input];
                            resolvedInputs[input] = arrayInput;
                            for (var i = 0; i < arrayInput.length; i++) {
                                stringResolversInputs.push(this.resolveParams(actionType, arrayInput[i], macroState, result).then(function (response) {
                                    resolvedInputs[input][i] = response;
                                }.bind(this), function (error) {
                                }));
                            }
                        }
                        else if (typeof inputs[input] === 'string' || inputs[input] instanceof String) {
                            if (inputs[input].startsWith("@outputs")) {
                                inputs[input] = LogicAppExecutor.resolveActionInputFromPrevActionOutput(inputs[input]);
                            }
                            stringResolversInputs.push(Microsoft.ProductivityMacros.Internal.resolveTemplateString(inputs[input], macroState.stateParams, "").then(function (indexObj, result) {
                                resolvedInputs[indexObj] = result;
                                Promise.resolve(resolvedInputs);
                            }.bind(this, input), function (error) {
                                return Promise.reject("Error");
                            }));
                        }
                        else {
                            resolvedInputs[input] = inputs[input];
                            Promise.resolve(resolvedInputs);
                        }
                    }
                    Promise.all(stringResolversInputs).then(function (response) {
                        return resolve(resolvedInputs);
                    }.bind(this), function (error) {
                        return reject(error);
                    });
                }.bind(this));
            }
            resolveListFlowsActionParams(actionType, inputs) {
                return new Promise((resolve) => {
                    try {
                        // the entityLogicalName in workflow entity is actually entity's LogicalCollectionName.
                        // it is used to fetch the flows from api.flow.microsoft.com
                        // but flow execution need entity's LogicalName
                        // resolveEntityLogicalName method is used to replace the LogicalCollectionName to LogicalName
                        const entityCollectionName = inputs[Microsoft.ProductivityMacros.Constants.ENTITY_LOGICAL_NAME];
                        if (actionType !== Microsoft.ProductivityMacros.ActionTypes.LIST_FLOWS || !entityCollectionName) {
                            return resolve(inputs);
                        }
                        const queryString = `/api/data/v9.0/EntityDefinitions?$filter=LogicalCollectionName%20eq%20%27${entityCollectionName}%27&$select=LogicalName`;
                        var req = new XMLHttpRequest();
                        req.open("GET", Xrm.Utility.getGlobalContext().getClientUrl() + queryString, false);
                        req.setRequestHeader("OData-MaxVersion", "4.0");
                        req.setRequestHeader("OData-Version", "4.0");
                        req.setRequestHeader("Accept", "application/json");
                        req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                        req.onreadystatechange = function () {
                            if (req.readyState === 4) {
                                req.onreadystatechange = null;
                                if (req.status === 200) {
                                    const entity = JSON.parse(req.response);
                                    if (entity && entity.value && entity.value.length == 1) {
                                        inputs[Microsoft.ProductivityMacros.Constants.ENTITY_LOGICAL_NAME] = entity.value[0].LogicalName;
                                        inputs[Microsoft.ProductivityMacros.Constants.ENTITY_LOGICAL_COLLECTION_NAME] = entityCollectionName;
                                    }
                                    return resolve(inputs);
                                }
                            }
                        };
                        req.send();
                    }
                    catch (error) {
                        return resolve(inputs);
                    }
                });
            }
            updateSolutionFlowsId(inputs) {
                return new Promise((resolve) => {
                    try {
                        // For flows within imported solution, flowId retrieved from inputs is workflowid of the flow,
                        // which cannot be used to identify flow by the execution method
                        // Need to retrieve workflowidunique of the flow to allow execution method idenfity the flow
                        const workFlowId = inputs[Microsoft.ProductivityMacros.Constants.FLOW_ID];
                        if (!workFlowId) {
                            return resolve(inputs);
                        }
                        const queryString = `/api/data/v9.0/workflows?$filter=workflowid%20eq%20%27${workFlowId}%27&$select=workflowidunique`;
                        var req = new XMLHttpRequest();
                        req.open("GET", Xrm.Utility.getGlobalContext().getClientUrl() + queryString, false);
                        req.setRequestHeader("OData-MaxVersion", "4.0");
                        req.setRequestHeader("OData-Version", "4.0");
                        req.setRequestHeader("Accept", "application/json");
                        req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                        req.onreadystatechange = function () {
                            if (req.readyState === 4) {
                                req.onreadystatechange = null;
                                if (req.status === 200) {
                                    const entity = JSON.parse(req.response);
                                    if (entity && entity.value && entity.value.length == 1) {
                                        inputs[Microsoft.ProductivityMacros.Constants.FLOW_ID] = entity.value[0].workflowidunique;
                                    }
                                    return resolve(inputs);
                                }
                            }
                        };
                        req.send();
                    }
                    catch (error) {
                        return resolve(inputs);
                    }
                });
            }
            executeMacroAction(actionType, actionInputs, actionName, macroState, runHistoryData) {
                let exectuableMethod = Microsoft.ProductivityMacros.Internal.ProductivityMacroOperation.macroActionTemplates.get(actionType)["_runtimeAPI"];
                var status, outputs = {}, startTime = new Date().toISOString();
                return new Promise((resolve, reject) => {
                    eval(exectuableMethod).then(function (success) {
                        LogicAppExecutor.updateActionOutputInSessionContext(success, macroState);
                        status = Microsoft.ProductivityMacros.Constants.StatusSucceded;
                        outputs = this.generateOutputJSON(success[Microsoft.ProductivityMacros.Constants.OutputResult]);
                        Microsoft.ProductivityMacros.RunHistory.setActionStatus(runHistoryData, status, startTime, outputs, actionName, actionInputs);
                        resolve(success);
                    }.bind(this), function (error) {
                        status = Microsoft.ProductivityMacros.Constants.StatusFailed;
                        outputs = {};
                        Microsoft.ProductivityMacros.RunHistory.setActionStatus(runHistoryData, status, startTime, outputs, actionName, actionInputs);
                        reject(error);
                    });
                });
            }
            generateOutputJSON(output) {
                let keys = Object.keys(output);
                var finalOutput = {};
                for (var i = 0; i < keys.length; i++) {
                    var newKey = keys[i].split(Microsoft.ProductivityMacros.Constants.SplitByDot, 2)[1];
                    finalOutput[newKey] = output[keys[i]];
                }
                return finalOutput;
            }
        }
        MacroAction._instance = null;
        LogicAppExecutor.MacroAction = MacroAction;
    })(LogicAppExecutor = Microsoft.LogicAppExecutor || (Microsoft.LogicAppExecutor = {}));
})(Microsoft || (Microsoft = {}));
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
/** @internal */
var Microsoft;
(function (Microsoft) {
    var ProductivityMacros;
    (function (ProductivityMacros) {
        var Internal;
        (function (Internal) {
            /**
             * All Constants related to Telemetry should go here
            */
            var TelemetryConstants;
            (function (TelemetryConstants) {
                TelemetryConstants.macroVersion = "MacrosSolVersion";
                TelemetryConstants.macroActionName = "ActionName";
                TelemetryConstants.macroActionResult = "ActionResult";
                TelemetryConstants.appId = "AppId";
                TelemetryConstants.clientType = "ClientType";
                TelemetryConstants.crmVersion = "CrmVersion";
                TelemetryConstants.orgId = "OrganizationId";
                TelemetryConstants.orgName = "OrganizationName";
                TelemetryConstants.startTime = "StartTime";
                TelemetryConstants.timeTaken = "TimeTaken";
                TelemetryConstants.telemetryData = "APIPerfMarkers";
                TelemetryConstants.isError = "IsError";
                TelemetryConstants.errorMessage = "ErrorMessage";
                TelemetryConstants.errorType = "ErrorType";
                TelemetryConstants.errorReportTime = "ErrorReportTime";
                TelemetryConstants.errorFunction = "ErrorFunction";
                TelemetryConstants.macrosRuntimeTable = "D365_Macros_Runtime";
                TelemetryConstants.macrosAdminTable = "D365_Macros_Admin";
                TelemetryConstants.userId = "UserID";
                TelemetryConstants.navigationType = "NavType";
                TelemetryConstants.multiSession = "Multi Session";
                TelemetryConstants.singleSession = "Single Session";
                TelemetryConstants.correlationId = "CorrelationId";
                TelemetryConstants.adminDesignerInstanceId = "designerInstanceId";
                TelemetryConstants.adminEventName = "eventName";
                TelemetryConstants.adminEventCorrelationId = "eventCorrelationId";
                TelemetryConstants.adminMessage = "message";
                TelemetryConstants.adminEventData = "eventData";
                TelemetryConstants.adminEventTimeStamp = "eventTimeStamp";
                TelemetryConstants.adminEventType = "eventType";
                TelemetryConstants.adminLevel = "level";
                TelemetryConstants.adminException = "exception";
                TelemetryConstants.adminEventId = "eventId";
            })(TelemetryConstants = Internal.TelemetryConstants || (Internal.TelemetryConstants = {}));
            var errorTypes;
            (function (errorTypes) {
                errorTypes[errorTypes["InvalidParams"] = 0] = "InvalidParams";
                errorTypes[errorTypes["TimeOut"] = 1] = "TimeOut";
                errorTypes[errorTypes["XrmApiError"] = 2] = "XrmApiError";
                errorTypes[errorTypes["GenericError"] = 3] = "GenericError";
            })(errorTypes = Internal.errorTypes || (Internal.errorTypes = {}));
        })(Internal = ProductivityMacros.Internal || (ProductivityMacros.Internal = {}));
    })(ProductivityMacros = Microsoft.ProductivityMacros || (Microsoft.ProductivityMacros = {}));
})(Microsoft || (Microsoft = {}));
/// <reference path="TelemetryConstants.ts" />
/// <reference path="CRMClients/aria-webjs-sdk-1.8.3.d.ts" />
/** @internal */
var Microsoft;
(function (Microsoft) {
    var ProductivityMacros;
    (function (ProductivityMacros) {
        var Internal;
        (function (Internal) {
            Internal.crmVersion = "";
            Internal.orgId = "";
            let prodIngestionKey = "15742b0e58eb4711bc046acff53e7165-1bfb5a4d-2ecc-4c51-8271-a773c63f58de-6809";
            let devIngestionKey = "22fdf28125b2493787078364a7ffe42e-28bf5791-b218-4f89-8d06-8135775da123-7269";
            let GERMANY_ENDPOINT = "https://de.pipe.aria.microsoft.com/Collector/3.0/";
            let GCCH_ENDPOINT = "https://tb.pipe.aria.microsoft.com/Collector/3.0/";
            let DOD_ENDPOINT = "https://pf.pipe.aria.microsoft.com/Collector/3.0";
            let EUROPE_ENDPOINT = "https://eu.pipe.aria.microsoft.com/Collector/3.0/";
            let MOONCAKE_ENDPOINT = ""; // Add MoonCake ARIA Endpoint whenever available
            function initializeTelemetry() {
                let domain = getDomain();
                let logConfig = getConfiguration(domain);
                if (domain == "Dev") {
                    macrosLogger = AWTLogManager.initialize(devIngestionKey, logConfig);
                }
                else {
                    macrosLogger = AWTLogManager.initialize(prodIngestionKey, logConfig);
                }
                AWTLogManager.addNotificationListener({
                    eventsSent: (events) => {
                        console.log("CIF Telemetry - Number of Events Sent: " + events.length);
                    },
                    eventsDropped: (events, reason) => {
                        console.log("CIF Telemetry - Number of Events Dropped: " + events.length);
                    }
                });
            }
            Internal.initializeTelemetry = initializeTelemetry;
            // Returns the Host Name
            function getHost() {
                let hostValue = window.location.host;
                if (!hostValue) {
                    hostValue = window.parent.location.host;
                }
                return hostValue;
            }
            // Returns the Domain of the Org
            function getDomain() {
                let hostValue = getHost();
                // Need to add checks for MoonCake(China) and Europe Orgs, if needed
                if (hostValue.endsWith("dod-crm.microsoftdynamics.us"))
                    return "DoD";
                else if (hostValue.endsWith("crm9.dynamics.com") || hostValue.endsWith("crm.microsoftdynamics.us"))
                    return "GCCHigh";
                else if (hostValue.endsWith("crm.microsoftdynamics.de"))
                    return "BlackForest";
                else if (hostValue.endsWith("crm.dynamics.cn"))
                    return "MoonCake";
                else if (hostValue.endsWith("crm4.dynamics.com"))
                    return "Europe";
                else if (hostValue.endsWith("extest.microsoft.com") || hostValue.endsWith("crm10.dynamics.com") || hostValue.endsWith("crm.crmlivetie.com")
                    || hostValue.endsWith("crm2.crmlivetie.com") || hostValue.endsWith("contoso.com:444") || hostValue.endsWith("microsoft.com")
                    || hostValue.endsWith("msmecrm.com") || hostValue.endsWith("crm.crmlivetoday.com") || hostValue.endsWith("crm.1boxtest.com")
                    || hostValue.endsWith("crm.crmifd.com") || hostValue.endsWith("msmecrm.com:444") || hostValue.search("localhost") == 0)
                    return "Dev";
                else
                    return "Public";
            }
            // Returns the ARIA configuration for the environment type
            function getConfiguration(domain) {
                let logConfiguration = {};
                // Disables the logging of Device ID
                logConfiguration.disableCookiesUsage = true;
                switch (domain) {
                    case "GCCHigh":
                        logConfiguration.collectorUri = GCCH_ENDPOINT;
                        break;
                    case "DoD":
                        logConfiguration.collectorUri = DOD_ENDPOINT;
                        break;
                    case "BlackForest":
                        logConfiguration.collectorUri = GERMANY_ENDPOINT;
                        break;
                    case "Europe":
                        logConfiguration.collectorUri = EUROPE_ENDPOINT;
                        break;
                }
                return logConfiguration;
            }
            function getNavigationType() {
                return Internal.TelemetryConstants.multiSession;
            }
            function getAppId() {
                return top.location.search.split('appid=')[1].split('&')[0];
            }
            function getMacroVersion() {
                let MacrosVersion = "";
                window.top.Xrm.WebApi.retrieveMultipleRecords("msdyn_productivitymacrosolutionconfiguration", "?$top=1").then((result) => {
                    if (result && result.entities) {
                        MacrosVersion = result.entities[0].msdyn_macrosversion;
                    }
                });
                return MacrosVersion;
            }
            function getClientType() {
                return window.top.Xrm.Utility.getGlobalContext().client.getClient();
            }
            function getCrmVersion() {
                return window.top.Xrm.Utility.getGlobalContext().getVersion();
            }
            function getOrgId() {
                return window.top.Xrm.Utility.getGlobalContext().organizationSettings.organizationId;
            }
            function getOrgName() {
                return window.top.Xrm.Utility.getGlobalContext().organizationSettings.uniqueName;
            }
            function getUserId() {
                return window.top.Xrm.Utility.getGlobalContext().userSettings.userId;
            }
            // API for Error Telemetry
            function logFailure(actionName, errorObject, correlationid) {
                let usageData = new UsageTelemetryData(actionName, "Failure", {}, correlationid, true, errorObject);
                setMacrosRuntimeData(usageData);
            }
            Internal.logFailure = logFailure;
            // Generates the IErrorHandler for logging purpose
            function generateErrorObject(error, sourceFunction, errorType) {
                let errorData = {};
                try {
                    errorData.errorMsg = error.get("message");
                }
                catch (e) {
                    errorData.errorMsg = error.message;
                }
                errorData.sourceFunc = sourceFunction;
                errorData.errorType = errorType;
                errorData.reportTime = new Date().toUTCString();
                return errorData;
            }
            Internal.generateErrorObject = generateErrorObject;
            function logNestedApiData(telemetryData, startTime, timetaken, apiName, additionalData) {
                let ApiData = new Object();
                ApiData["StartTime"] = startTime.toUTCString();
                ApiData["TimeTaken"] = timetaken;
                if (additionalData) {
                    ApiData["AdditionalDetails"] = additionalData;
                }
                if (telemetryData) {
                    telemetryData[apiName] = ApiData;
                }
            }
            Internal.logNestedApiData = logNestedApiData;
            // API to log Success Scenario
            function logSuccess(actionName, correlationId, telemetryData) {
                if (!telemetryData)
                    telemetryData = {};
                let usageData = new UsageTelemetryData(actionName, "Success", telemetryData, correlationId, false);
                setMacrosRuntimeData(usageData);
            }
            Internal.logSuccess = logSuccess;
            function setMacrosAdminData(data) {
                var AdminTelemetry = new AWTEventProperties();
                AdminTelemetry.setName(Internal.TelemetryConstants.macrosAdminTable);
                AdminTelemetry.setProperty(Internal.TelemetryConstants.adminDesignerInstanceId, data.designerInstanceId ? data.designerInstanceId : "");
                AdminTelemetry.setProperty(Internal.TelemetryConstants.adminEventName, data.eventName ? data.eventName : "");
                AdminTelemetry.setProperty(Internal.TelemetryConstants.adminEventCorrelationId, data.eventCorrelationId ? data.eventCorrelationId : "");
                AdminTelemetry.setProperty(Internal.TelemetryConstants.adminMessage, data.message ? data.message : "");
                AdminTelemetry.setProperty(Internal.TelemetryConstants.adminEventData, data.eventData ? data.eventData : "");
                AdminTelemetry.setProperty(Internal.TelemetryConstants.adminEventId, data.eventId ? data.eventId : "");
                AdminTelemetry.setProperty(Internal.TelemetryConstants.adminEventTimeStamp, data.eventTimeStamp ? data.eventTimeStamp : "");
                AdminTelemetry.setProperty(Internal.TelemetryConstants.adminEventType, data.eventType ? data.eventType : "");
                AdminTelemetry.setProperty(Internal.TelemetryConstants.adminLevel, data.level ? data.level : "");
                AdminTelemetry.setProperty(Internal.TelemetryConstants.adminException, data.exception ? data.exception : "");
                AdminTelemetry.setProperty(Internal.TelemetryConstants.macroVersion, getMacroVersion());
                AdminTelemetry.setProperty(Internal.TelemetryConstants.appId, getAppId());
                AdminTelemetry.setProperty(Internal.TelemetryConstants.navigationType, getNavigationType());
                AdminTelemetry.setProperty(Internal.TelemetryConstants.clientType, getClientType());
                AdminTelemetry.setProperty(Internal.TelemetryConstants.crmVersion, getCrmVersion());
                AdminTelemetry.setProperty(Internal.TelemetryConstants.orgId, getOrgId());
                AdminTelemetry.setProperty(Internal.TelemetryConstants.orgName, getOrgName());
                AdminTelemetry.setProperty(Internal.TelemetryConstants.userId, getUserId());
                macrosLogger.logEvent(AdminTelemetry);
            }
            Internal.setMacrosAdminData = setMacrosAdminData;
            // Function to populate the Macros Runtime Data Telemetry
            function setMacrosRuntimeData(data) {
                var RuntimeTelemetry = new AWTEventProperties();
                RuntimeTelemetry.setName(Internal.TelemetryConstants.macrosRuntimeTable);
                RuntimeTelemetry.setProperty(Internal.TelemetryConstants.macroActionName, data.MacrosActionName);
                RuntimeTelemetry.setProperty(Internal.TelemetryConstants.macroActionResult, data.MacrosActionResult);
                RuntimeTelemetry.setProperty(Internal.TelemetryConstants.telemetryData, data.TelemetryData ? JSON.stringify(data.TelemetryData) : "");
                RuntimeTelemetry.setProperty(Internal.TelemetryConstants.isError, data.IsError ? data.IsError : false);
                RuntimeTelemetry.setProperty(Internal.TelemetryConstants.errorFunction, data.ErrorObject ? data.ErrorObject.sourceFunc : "");
                RuntimeTelemetry.setProperty(Internal.TelemetryConstants.errorMessage, data.ErrorObject ? data.ErrorObject.errorMsg : "");
                RuntimeTelemetry.setProperty(Internal.TelemetryConstants.errorType, data.ErrorObject ? Internal.errorTypes[data.ErrorObject.errorType] : "");
                RuntimeTelemetry.setProperty(Internal.TelemetryConstants.errorReportTime, data.ErrorObject ? data.ErrorObject.reportTime : "");
                RuntimeTelemetry.setProperty(Internal.TelemetryConstants.correlationId, data.CorrelationId ? data.CorrelationId : "");
                RuntimeTelemetry.setProperty(Internal.TelemetryConstants.macroVersion, getMacroVersion());
                RuntimeTelemetry.setProperty(Internal.TelemetryConstants.appId, getAppId());
                RuntimeTelemetry.setProperty(Internal.TelemetryConstants.navigationType, getNavigationType());
                RuntimeTelemetry.setProperty(Internal.TelemetryConstants.clientType, getClientType());
                RuntimeTelemetry.setProperty(Internal.TelemetryConstants.crmVersion, getCrmVersion());
                RuntimeTelemetry.setProperty(Internal.TelemetryConstants.orgId, getOrgId());
                RuntimeTelemetry.setProperty(Internal.TelemetryConstants.orgName, getOrgName());
                RuntimeTelemetry.setProperty(Internal.TelemetryConstants.userId, getUserId());
                macrosLogger.logEvent(RuntimeTelemetry);
            }
            class UsageTelemetryData {
                constructor(MacrosActionName, MacrosActionResult, TelemetryData, CorrelationId, IsError, errorObject) {
                    this.MacrosActionName = MacrosActionName ? MacrosActionName : "";
                    this.MacrosActionResult = MacrosActionResult ? MacrosActionResult : "";
                    this.TelemetryData = TelemetryData ? TelemetryData : {};
                    this.CorrelationId = CorrelationId ? CorrelationId : "";
                    this.IsError = IsError ? IsError : false;
                    this.ErrorObject = errorObject ? errorObject : {};
                }
            }
            Internal.UsageTelemetryData = UsageTelemetryData;
        })(Internal = ProductivityMacros.Internal || (ProductivityMacros.Internal = {}));
    })(ProductivityMacros = Microsoft.ProductivityMacros || (Microsoft.ProductivityMacros = {}));
})(Microsoft || (Microsoft = {}));
/// <reference path="../../TypeDefinitions/msdyn_MacrosDataLayer.d.ts" />
/// <reference path="../../../../packages/Crm.ClientApiTypings.1.3.2084/clientapi/XrmClientApi.d.ts" />
/// <reference path="Constants.ts" />
/** @internal */
var Microsoft;
(function (Microsoft) {
    var ProductivityMacros;
    (function (ProductivityMacros) {
        var Internal;
        (function (Internal) {
            class FPIHelper {
                constructor() {
                    this.instanceIdentifier = Date.now().toString();
                    this.MacrosDataLayer = window.top.Microsoft.ProductivityMacros.MacrosDataLayer;
                }
                isNullUndefinedorEmpty(variable) {
                    if (variable === null || variable === undefined || variable === "") {
                        return true;
                    }
                    return false;
                }
                /**
                    * Initialize Fpi Helper Lib instance and register consumer
                    */
                initializeFpiHelper() {
                    if (FPIHelper.isFpiHelperInitialized) {
                        return;
                    }
                    FPIHelper.dataHelper = this.MacrosDataLayer.DataHelper.getInstance();
                    this.MacrosDataLayer.DataHelper.registerConsumer(this.instanceIdentifier);
                    FPIHelper.isFpiHelperInitialized = true;
                }
                fetchFlowsEnvId() {
                    return __awaiter(this, void 0, void 0, function* () {
                        if (FPIHelper.isFpiHelperInitialized == false) {
                            this.initializeFpiHelper();
                        }
                        const requestContent = new this.MacrosDataLayer.FlowRequestContext(this.instanceIdentifier, this.getRandomString());
                        return FPIHelper.dataHelper.FlowClient.getEnvironment(requestContent);
                    });
                }
                /**
                    * Generates random string
                    */
                getRandomString() {
                    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
                }
            }
            FPIHelper.dataHelper = null;
            //Fpi helper library reference      
            FPIHelper.isFpiHelperInitialized = false;
            Internal.FPIHelper = FPIHelper;
        })(Internal = ProductivityMacros.Internal || (ProductivityMacros.Internal = {}));
    })(ProductivityMacros = Microsoft.ProductivityMacros || (Microsoft.ProductivityMacros = {}));
})(Microsoft || (Microsoft = {}));
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
/// <reference path="../../../../packages/Crm.ClientApiTypings.1.3.2084/clientapi/XrmClientApi.d.ts" />
/// <reference path="Constants.ts" />
/// <reference path="../../TypeDefinitions/AppRuntimeClientSdk.d.ts" />
/// <reference path="../TelemetryHelper.ts" />
/// <reference path="FPIHelper.ts" />
/** @internal */
var Microsoft;
(function (Microsoft) {
    var ProductivityMacros;
    (function (ProductivityMacros) {
        var Internal;
        (function (Internal) {
            /**
             * utility func to check whether an object is null or undefined
             */
            function isNullOrUndefined(obj) {
                return (obj == null || typeof obj === "undefined");
            }
            Internal.isNullOrUndefined = isNullOrUndefined;
            function getCustomArray(formInputs) {
                let ret = {};
                if (isNullOrUndefined(formInputs.Custom_Array)) {
                    return ret;
                }
                Object.keys(formInputs.Custom_Array).forEach(function (key) {
                    let attrib = formInputs.Custom_Array[key];
                    ret[attrib.Name] = attrib.Value;
                });
                return ret;
            }
            function consolidateLookupObj(formInput) {
                let ret = {};
                if (isNullOrUndefined(formInput)) {
                    return ret;
                }
                let temp = formInput;
                Object.keys(temp).forEach(function (key) {
                    let attribName = "";
                    let _flag = true;
                    if (key.endsWith("name"))
                        attribName = key.substr(0, key.length - 4);
                    if (key.endsWith("entitytype")) {
                        attribName = key.substr(0, key.length - 10);
                        _flag = false;
                    }
                    if (_flag && key.endsWith("type"))
                        attribName = key.substr(0, key.length - 4);
                    if ((attribName != "") && (attribName in formInput) && (attribName + "name" in formInput) && ((attribName + "entitytype" in formInput) || (attribName + "type" in formInput))) {
                        var lookupValue = new Array();
                        lookupValue[0] = new Object();
                        lookupValue[0].id = formInput[attribName];
                        lookupValue[0].name = formInput[attribName + "name"];
                        lookupValue[0].entityType = (attribName + "type" in formInput) ? formInput[attribName + "type"] : formInput[attribName + "entitytype"];
                        ret[attribName] = lookupValue;
                        delete formInput[attribName];
                        delete formInput[attribName + "name"];
                        attribName + "type" in formInput ? delete formInput[attribName + "type"] : delete formInput[attribName + "entitytype"];
                    }
                    else {
                        if (key in formInput)
                            ret[key] = formInput[key];
                    }
                });
                return ret;
            }
            function getCustomArrayFromEntityCollection(entities) {
                let arrayObj = [];
                entities.forEach(function (item) {
                    let obj = {};
                    obj["Name"] = item.msdyn_name;
                    obj["Value"] = item.msdyn_value;
                    arrayObj.push(obj);
                });
                return arrayObj;
            }
            function focusTab(tabId) {
                if (!(isNullOrUndefined(tabId))) {
                    return new Promise((resolve, reject) => {
                        let sessionId = getFocusedSessionId();
                        let session = Microsoft.AppRuntime.Sessions.getSession(sessionId);
                        let tab = session.getTab(tabId);
                        tab.focus();
                        resolve("tab in focus");
                    });
                }
                else {
                    return Promise.reject("tabId is null or undefined");
                }
            }
            function refreshTab(tabId) {
                if (!(isNullOrUndefined(tabId))) {
                    return new Promise((resolve, reject) => {
                        let sessionId = getFocusedSessionId();
                        let session = Microsoft.AppRuntime.Sessions.getSession(sessionId);
                        let tab = session.getTab(tabId);
                        tab.refresh();
                        resolve("tab refreshed");
                    });
                }
                else {
                    return Promise.reject("tabId is null or undefined");
                }
            }
            function openTab(actionName, pageInput, options) {
                return new Promise(function (resolve, reject) {
                    var tabInput = {
                        pageInput: pageInput,
                        options: options
                    };
                    createTab(tabInput).then(function (tabId) {
                        var ouputResponse = {};
                        var sessionContextParams = {};
                        sessionContextParams[actionName + ".TabId"] = tabId;
                        sessionContextParams[actionName + ".PageType"] = tabInput.pageInput.pageType;
                        ouputResponse["result"] = sessionContextParams;
                        resolve(ouputResponse);
                    }, function (error) {
                        reject(error.message);
                    });
                });
            }
            function getApplicationTemplate(guid) {
                return new Promise(function (resolve, reject) {
                    let xml = `<fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="false">
                          <entity name="msdyn_templateparameter">
                            <attribute name='msdyn_name' />
                            <attribute name='msdyn_value' />
                            <order attribute="msdyn_name" descending="false" />
                            <filter type="and">
                                <condition attribute='msdyn_applicationtabtemplateid' operator='eq' uitype='msdyn_applicationtabtemplate' value='{` + guid + `}' />
                            </filter>
                          </entity>
                        </fetch>`;
                    Xrm.WebApi.retrieveMultipleRecords("msdyn_templateparameter", "?fetchXml=" + encodeURIComponent(xml)).then(function (result) {
                        if (result.entities.length > 0)
                            resolve(result);
                        else
                            reject("No Parameter found for given Applicate Tab Template - openApplicationTamplate");
                    }, function (error) {
                        reject(error);
                    });
                });
            }
            function getApplicationTemplateRecord(guid) {
                return new Promise(function (resolve, reject) {
                    let xml = `<fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="false">
                          <entity name="msdyn_applicationtabtemplate">
                            <attribute name='msdyn_title' />
                            <filter type="and">
                                <condition attribute='msdyn_applicationtabtemplateid' operator='eq' uitype='msdyn_applicationtabtemplate' value='{` + guid + `}' />
                            </filter>
                          </entity>
                        </fetch>`;
                    Xrm.WebApi.retrieveMultipleRecords("msdyn_applicationtabtemplate", "?fetchXml=" + encodeURIComponent(xml)).then(function (result) {
                        if (result.entities.length > 0)
                            resolve(result);
                        else
                            reject("No record found for given application tab template id");
                    }, function (error) {
                        reject(error);
                    });
                });
            }
            function getPageInput(entityData) {
                var pageInput = {};
                let i;
                let AppTabConstant = ProductivityMacros.OpenAppTabType;
                switch (entityData.PageType.replace(/\s/g, "").toLowerCase()) {
                    case AppTabConstant.CustomControlInputString:
                    case AppTabConstant.Control:
                        pageInput.pageType = AppTabConstant.Control;
                        for (i = 0; i < entityData.Custom_Array.length; i++) {
                            try {
                                if (entityData.Custom_Array[i].Value !== undefined) {
                                    pageInput[entityData.Custom_Array[i].Name] = entityData.Custom_Array[i].Value;
                                    if (entityData.Custom_Array[i].Name.toLowerCase() == AppTabConstant.Data)
                                        pageInput[entityData.Custom_Array[i].Name] = JSON.parse(entityData.Custom_Array[i].Value);
                                }
                            }
                            catch (e) {
                                continue;
                            }
                        }
                        break;
                    case AppTabConstant.DashboardInputString:
                        pageInput.pageType = AppTabConstant.Dashboard;
                        for (i = 0; i < entityData.Custom_Array.length; i++) {
                            if (entityData.Custom_Array[i].Value !== undefined) {
                                pageInput[entityData.Custom_Array[i].Name] = entityData.Custom_Array[i].Value;
                            }
                        }
                        break;
                    case AppTabConstant.EntityViewInputString:
                    case AppTabConstant.Entitylist:
                        pageInput.pageType = AppTabConstant.Entitylist;
                        for (i = 0; i < entityData.Custom_Array.length; i++) {
                            if (entityData.Custom_Array[i].Value !== undefined) {
                                pageInput[entityData.Custom_Array[i].Name] = entityData.Custom_Array[i].Value;
                            }
                        }
                        break;
                    case AppTabConstant.EntityRecordInputString:
                        pageInput.pageType = AppTabConstant.Entityrecord;
                        for (i = 0; i < entityData.Custom_Array.length; i++) {
                            try {
                                if (entityData.Custom_Array[i].Value !== undefined) {
                                    switch (entityData.Custom_Array[i].Name.toLowerCase()) {
                                        case AppTabConstant.Relationship:
                                            pageInput.relationship = JSON.parse(entityData.Custom_Array[i].Value);
                                            break;
                                        case AppTabConstant.CreateFromEntity:
                                            pageInput.processInstanceId = JSON.parse(entityData.Custom_Array[i].Value);
                                            break;
                                        case AppTabConstant.Data:
                                            pageInput.data = JSON.parse(entityData.Custom_Array[i].Value);
                                            break;
                                        default:
                                            pageInput[entityData.Custom_Array[i].Name] = entityData.Custom_Array[i].Value;
                                    }
                                }
                            }
                            catch (e) {
                                continue;
                            }
                        }
                        break;
                    case AppTabConstant.EntitySearchInputString:
                        pageInput.pageType = AppTabConstant.Search;
                        for (i = 0; i < entityData.Custom_Array.length; i++) {
                            try {
                                if (entityData.Custom_Array[i].Value !== undefined) {
                                    pageInput[entityData.Custom_Array[i].Name] = entityData.Custom_Array[i].Value;
                                    if (entityData.Custom_Array[i].Name == AppTabConstant.SearchType)
                                        pageInput[entityData.Custom_Array[i].Name] = parseInt(entityData.Custom_Array[i].Value);
                                }
                            }
                            catch (e) {
                                continue;
                            }
                        }
                        break;
                    case AppTabConstant.WebResourceInputString:
                        pageInput.pageType = AppTabConstant.Webresource;
                        for (i = 0; i < entityData.Custom_Array.length; i++) {
                            if (entityData.Custom_Array[i].Value !== undefined) {
                                pageInput[entityData.Custom_Array[i].Name] = entityData.Custom_Array[i].Value;
                            }
                        }
                        break;
                    case AppTabConstant.ThirdPartyWebsiteInputString:
                    case AppTabConstant.ThirdPartyWebsiteInputString1:
                        //keeping thirthpartyWebsite as weresource as currently we are not able to access
                        //CIF public API and we are consuming Microsoft.CIFramework.External.CIFExternalUtilityImpl() to create tab
                        //pageInput.pageType = "ThirdPartyWebsite";
                        const url = entityData.Custom_Array.find((element) => element.Name.trim() === AppTabConstant.Url);
                        if (url && url.Value) {
                            const data = entityData.Custom_Array.find((element) => element.Name.trim() === AppTabConstant.Data);
                            let dataString = (data && data.Value) ? data.Value : '';
                            // below dataString check is used to fix issue in current public doc sample
                            // https://docs.microsoft.com/en-us/dynamics365/app-profile-manager/application-tab-templates#third-party-website
                            // we should revisit the sample to improve the user experience
                            if (url.Value.endsWith('/search?') && !dataString.startsWith('q=')) {
                                dataString = 'q=' + dataString;
                            }
                            pageInput.pageType = AppTabConstant.Webresource;
                            pageInput.webresourceName = "msdyn_CECExternalWebPageContainer.html";
                            pageInput.data = `cif_thirdpartyurl${url.Value}${dataString}`;
                        }
                        break;
                    case AppTabConstant.Custom:
                        pageInput.pageType = AppTabConstant.Custom;
                        for (i = 0; i < entityData.Custom_Array.length; i++) {
                            if (entityData.Custom_Array[i].Value !== undefined) {
                                pageInput[entityData.Custom_Array[i].Name] = entityData.Custom_Array[i].Value;
                            }
                        }
                        break;
                }
                return pageInput;
            }
            function getFocusedSessionId() {
                if (Microsoft.AppRuntime && Microsoft.AppRuntime.Sessions) {
                    return Microsoft.AppRuntime.Sessions.getFocusedSession().sessionId;
                }
                else {
                    return Xrm.App.sessions.getFocusedSession().sessionId;
                }
            }
            function openNewForm(actionName, formInputs) {
                if (!(isNullOrUndefined(formInputs))) {
                    return new Promise((resolve, reject) => {
                        getNavigationType().then((navigationType) => {
                            if (navigationType == 1) {
                                var tabInput = {
                                    pageInput: {
                                        pageType: "entityrecord",
                                        entityName: formInputs.EntityName,
                                        data: getCustomArray(formInputs)
                                    },
                                    options: { isFocused: true }
                                };
                                if (!isNullOrUndefined(formInputs.FormId)) {
                                    tabInput.pageInput.formId = formInputs.FormId;
                                }
                                createTab(tabInput).then(function (tabId) {
                                    var ouputResponse = {};
                                    var sessionContextParams = {};
                                    sessionContextParams[actionName + ".TabId"] = tabId;
                                    sessionContextParams[actionName + ".EntityName"] = formInputs.EntityName;
                                    sessionContextParams[actionName + ".PageType"] = "entityrecord";
                                    ouputResponse[ProductivityMacros.Constants.OutputResult] = sessionContextParams;
                                    Internal.logSuccess("ProductivityMacrosWrapper - openNewForm", "");
                                    resolve(ouputResponse);
                                }, function (error) {
                                    let errorObject = Internal.generateErrorObject(error, "ProductivityMacrosWrapper - openNewForm", Internal.errorTypes.GenericError);
                                    Internal.logFailure("openNewForm", errorObject, "");
                                    reject(error.message);
                                });
                            }
                            else {
                                var efo = {
                                    entityName: formInputs.EntityName,
                                    useQuickCreateForm: false
                                };
                                if (!isNullOrUndefined(formInputs.FormId)) {
                                    efo["formId"] = formInputs.FormId;
                                }
                                var parameters = getCustomArray(formInputs);
                                Xrm.Navigation.openForm(efo, parameters).then(function (res) {
                                    var ouputResponse = {};
                                    var sessionContextParams = {};
                                    sessionContextParams[actionName + ".EntityName"] = formInputs.EntityName;
                                    sessionContextParams[actionName + ".PageType"] = "entityrecord";
                                    sessionContextParams[actionName + ".EntityId"] = res.savedEntityReference[0].id;
                                    ouputResponse[ProductivityMacros.Constants.OutputResult] = sessionContextParams;
                                    return resolve(ouputResponse);
                                }, function (error) {
                                    let errorData = Internal.generateErrorObject(error, "client.openForm - Xrm.Navigation.openForm", Internal.errorTypes.XrmApiError);
                                    return reject(errorData);
                                });
                            }
                        });
                    });
                }
                else {
                    let errorObject = {};
                    errorObject.errorMsg = "formInputs is Null or Undefined";
                    errorObject.errorType = Internal.errorTypes.InvalidParams;
                    errorObject.reportTime = new Date().toUTCString();
                    errorObject.sourceFunc = "ProductivityMacrosWrapper - openNewForm";
                    Internal.logFailure("openNewForm", errorObject, "");
                    return Promise.reject("openNewForm - formInputs is Null or Undefined");
                }
            }
            Internal.openNewForm = openNewForm;
            function openExistingForm(actionName, entityFormOptions) {
                if (!(isNullOrUndefined(entityFormOptions) || entityFormOptions == "")) {
                    return new Promise((resolve, reject) => {
                        getNavigationType().then((navigationType) => {
                            if (navigationType == 1) {
                                var tabInput = {
                                    pageInput: {
                                        pageType: "entityrecord",
                                        entityName: entityFormOptions.EntityName,
                                        entityId: entityFormOptions.EntityId,
                                        data: {}
                                    },
                                    options: { isFocused: true }
                                };
                                if (!isNullOrUndefined(entityFormOptions.FormId)) {
                                    tabInput.pageInput.formId = entityFormOptions.FormId;
                                }
                                createTab(tabInput).then(function (tabId) {
                                    var ouputResponse = {};
                                    var sessionContextParams = {};
                                    sessionContextParams[actionName + ProductivityMacros.Constants.SuffixTabId] = tabId;
                                    sessionContextParams[actionName + ProductivityMacros.Constants.SuffixEntityName] = entityFormOptions.EntityName;
                                    sessionContextParams[actionName + ProductivityMacros.Constants.SuffixEntityId] = entityFormOptions.EntityId;
                                    sessionContextParams[actionName + ProductivityMacros.Constants.SuffixPageType] = "entityrecord";
                                    ouputResponse[ProductivityMacros.Constants.OutputResult] = sessionContextParams;
                                    Internal.logSuccess("ProductivityMacrosWrapper - openExistingForm", "");
                                    resolve(ouputResponse);
                                }, function (error) {
                                    let errorObject = Internal.generateErrorObject(error, "ProductivityMacrosWrapper - openExistingForm", Internal.errorTypes.GenericError);
                                    Internal.logFailure("openExistingForm", errorObject, "");
                                    reject(error.message);
                                });
                            }
                            else {
                                var efo = {
                                    entityName: entityFormOptions.EntityName,
                                    entityId: entityFormOptions.EntityId
                                };
                                if (!isNullOrUndefined(entityFormOptions.FormId)) {
                                    efo["formId"] = entityFormOptions.FormId;
                                }
                                Xrm.Navigation.openForm(efo, null).then(function (res) {
                                    var ouputResponse = {};
                                    var sessionContextParams = {};
                                    sessionContextParams[actionName + ProductivityMacros.Constants.SuffixEntityName] = res.savedEntityReference[0].name;
                                    sessionContextParams[actionName + ProductivityMacros.Constants.SuffixPageType] = "entityrecord";
                                    sessionContextParams[actionName + ProductivityMacros.Constants.SuffixEntityId] = res.savedEntityReference[0].id;
                                    ouputResponse[ProductivityMacros.Constants.OutputResult] = sessionContextParams;
                                    return resolve(ouputResponse);
                                }, function (error) {
                                    let errorData = Internal.generateErrorObject(error, "client.openForm - Xrm.Navigation.openForm", Internal.errorTypes.XrmApiError);
                                    return reject(errorData);
                                });
                            }
                        });
                    });
                }
                else {
                    let errorObject = {};
                    errorObject.errorMsg = "entityFormOptions is Null or Undefined";
                    errorObject.errorType = Internal.errorTypes.InvalidParams;
                    errorObject.reportTime = new Date().toUTCString();
                    errorObject.sourceFunc = "ProductivityMacrosWrapper - openExistingForm";
                    Internal.logFailure("openExistingForm", errorObject, "");
                    return Promise.reject("openExistingForm - entityFormOptions is Null or Undefined");
                }
            }
            Internal.openExistingForm = openExistingForm;
            function openKbArticle(actionName, entityFormOptions) {
                if (!(isNullOrUndefined(entityFormOptions) || entityFormOptions == "")) {
                    entityFormOptions.EntityName = "knowledgearticle";
                    return new Promise((resolve, reject) => {
                        openExistingForm(actionName, entityFormOptions).then((result) => {
                            return resolve(result);
                        }, function (error) {
                            let errorObject = Internal.generateErrorObject(error, "ProductivityMacrosWrapper - openKbArticle", Internal.errorTypes.GenericError);
                            Internal.logFailure("openKbArticle", errorObject, "");
                            return reject(error.message);
                        });
                    });
                }
            }
            Internal.openKbArticle = openKbArticle;
            function draftEmail(actionName, entityFormData) {
                if (!(isNullOrUndefined(entityFormData) || entityFormData == "")) {
                    // Create new array
                    var partylist = new Array();
                    partylist[0] = new Object();
                    partylist[0].id = entityFormData.EntityId;
                    partylist[0].name = entityFormData.PartyListName;
                    partylist[0].entityType = entityFormData.EntityName;
                    var formParameters;
                    if (entityFormData.TemplateId) {
                        return InstantiateEmailTemplate(entityFormData).then((result) => {
                            if (result && !isNullOrUndefined(result.value[0]) && !isNullOrUndefined(result.value[0].subject)
                                && !isNullOrUndefined(result.value[0].description)) {
                                // Set form paramters
                                formParameters = {
                                    "to": partylist,
                                    "subject": result.value[0].subject,
                                    "description": result.value[0].description
                                };
                                var tabInput = {
                                    pageInput: {
                                        pageType: "entityrecord",
                                        entityName: "email",
                                        data: formParameters
                                    },
                                    options: { isFocused: true }
                                };
                                return new Promise((resolve, reject) => {
                                    //let createTabAction: Promise<string> = createTab(tabInput);
                                    getNavigationType().then((navigationType) => {
                                        if (navigationType == 1) {
                                            createTab(tabInput).then(function (tabId) {
                                                var ouputResponse = {};
                                                var sessionContextParams = {};
                                                sessionContextParams[actionName + ProductivityMacros.Constants.SuffixTabId] = tabId;
                                                sessionContextParams[actionName + ProductivityMacros.Constants.SuffixEntityName] = entityFormData.EntityName;
                                                sessionContextParams[actionName + ProductivityMacros.Constants.SuffixPageType] = "entityrecord";
                                                ouputResponse[ProductivityMacros.Constants.OutputResult] = sessionContextParams;
                                                Internal.logSuccess("ProductivityMacrosWrapper - draftEmail", "");
                                                return resolve(ouputResponse);
                                            }, function (error) {
                                                let errorObject = Internal.generateErrorObject(error, "ProductivityMacrosWrapper - draftEmail", Internal.errorTypes.GenericError);
                                                Internal.logFailure("draftEmail", errorObject, "");
                                                reject(error.message);
                                            });
                                        }
                                    });
                                });
                            }
                        });
                    }
                    else {
                        formParameters = {
                            "to": partylist,
                            "subject": entityFormData.subject,
                            "description": entityFormData.description
                        };
                        var tabInput = {
                            pageInput: {
                                pageType: "entityrecord",
                                entityName: "email",
                                data: formParameters
                            },
                            options: { isFocused: true }
                        };
                        return new Promise((resolve, reject) => {
                            getNavigationType().then((navigationType) => {
                                if (navigationType == 1) {
                                    createTab(tabInput).then(function (success) {
                                        Internal.logSuccess("ProductivityMacrosWrapper - draftEmail", "");
                                        resolve(success);
                                    }.bind(this, actionName), function (error) {
                                        let errorObject = Internal.generateErrorObject(error, "ProductivityMacrosWrapper - draftEmail", Internal.errorTypes.GenericError);
                                        Internal.logFailure("draftEmail", errorObject, "");
                                        reject(error.message);
                                    });
                                }
                            });
                        });
                    }
                }
                else {
                    let errorObject = {};
                    errorObject.errorMsg = "entityFormData is Null or Undefined";
                    errorObject.errorType = Internal.errorTypes.InvalidParams;
                    errorObject.reportTime = new Date().toUTCString();
                    errorObject.sourceFunc = "ProductivityMacrosWrapper - draftEmail";
                    Internal.logFailure("draftEmail", errorObject, "");
                    return Promise.reject("draftEmail - entityFormData is Null or Undefined");
                }
            }
            Internal.draftEmail = draftEmail;
            function openGrid(actionName, entityListOptions) {
                if (!(isNullOrUndefined(entityListOptions) || entityListOptions == "")) {
                    var tabInput = {
                        pageInput: {
                            pageType: "entitylist",
                            entityName: entityListOptions.EntityName,
                            viewId: entityListOptions.ViewId,
                            viewType: entityListOptions.ViewType
                        },
                        options: { isFocused: true }
                    };
                    return new Promise((resolve, reject) => {
                        getNavigationType().then((navigationType) => {
                            if (navigationType == 1) {
                                createTab(tabInput).then(function (tabId) {
                                    var ouputResponse = {};
                                    var sessionContextParams = {};
                                    sessionContextParams[actionName + ProductivityMacros.Constants.SuffixTabId] = tabId;
                                    sessionContextParams[actionName + ProductivityMacros.Constants.SuffixEntityName] = entityListOptions.EntityName;
                                    sessionContextParams[actionName + ProductivityMacros.Constants.SuffixPageType] = "entityrecord";
                                    ouputResponse[ProductivityMacros.Constants.OutputResult] = sessionContextParams;
                                    Internal.logSuccess("ProductivityMacrosWrapper - openGrid", "");
                                    resolve(ouputResponse);
                                }.bind(this, actionName), function (error) {
                                    let errorObject = Internal.generateErrorObject(error, "ProductivityMacrosWrapper - openGrid", Internal.errorTypes.GenericError);
                                    Internal.logFailure("openGrid", errorObject, "");
                                    reject(error.message);
                                });
                            }
                        });
                    });
                }
                else {
                    let errorObject = {};
                    errorObject.errorMsg = "entityListOptions is Null or Undefined";
                    errorObject.errorType = Internal.errorTypes.InvalidParams;
                    errorObject.reportTime = new Date().toUTCString();
                    errorObject.sourceFunc = "ProductivityMacrosWrapper - openGrid";
                    Internal.logFailure("openGrid", errorObject, "");
                    return Promise.reject("openGrid - entityListOptions is Null or Undefined");
                }
            }
            Internal.openGrid = openGrid;
            function openDashboard(actionName, dashboardPageOptions) {
                if (!(isNullOrUndefined(dashboardPageOptions) || dashboardPageOptions == "")) {
                    var tabInput = {
                        pageInput: {
                            pageType: "dashboard",
                            navigationPath: dashboardPageOptions.navigationPath,
                            dashboardId: dashboardPageOptions.dashboardId,
                            entityType: dashboardPageOptions.entityType,
                            type: dashboardPageOptions.type
                        },
                        options: { isFocused: true }
                    };
                    return new Promise((resolve, reject) => {
                        getNavigationType().then((navigationType) => {
                            if (navigationType == 1) {
                                createTab(tabInput).then(function (success) {
                                    Internal.logSuccess("ProductivityMacrosWrapper - openDashboard", "");
                                    resolve(success);
                                }.bind(this, actionName), function (error) {
                                    let errorObject = Internal.generateErrorObject(error, "ProductivityMacrosWrapper - openDashboard", Internal.errorTypes.GenericError);
                                    Internal.logFailure("openDashboard", errorObject, "");
                                    reject(error.message);
                                });
                            }
                        });
                    });
                }
                else {
                    let errorObject = {};
                    errorObject.errorMsg = "dashboardPageOptions is Null or Undefined";
                    errorObject.errorType = Internal.errorTypes.InvalidParams;
                    errorObject.reportTime = new Date().toUTCString();
                    errorObject.sourceFunc = "ProductivityMacrosWrapper - openDashboard";
                    Internal.logFailure("openDashboard", errorObject, "");
                    return Promise.reject("openDashboard - dashboardPageOptions is Null or Undefined");
                }
            }
            Internal.openDashboard = openDashboard;
            function openSearchPage(actionName, searchPageOptions) {
                if (!(isNullOrUndefined(searchPageOptions) || searchPageOptions == "")) {
                    var tabInput = {
                        pageInput: {
                            pageType: "search",
                            searchText: searchPageOptions.SearchString,
                            searchType: 0 /* RelevanceSearch */,
                            EntityNames: searchPageOptions.EntityNames
                        },
                        options: { isFocused: true }
                    };
                    return new Promise((resolve, reject) => {
                        getNavigationType().then((navigationType) => {
                            if (navigationType == 1) {
                                createTab(tabInput).then(function (tabId) {
                                    var ouputResponse = {};
                                    var sessionContextParams = {};
                                    sessionContextParams[actionName + ProductivityMacros.Constants.SuffixTabId] = tabId;
                                    ouputResponse[ProductivityMacros.Constants.OutputResult] = sessionContextParams;
                                    Internal.logSuccess("ProductivityMacrosWrapper - openSearchPage", "");
                                    resolve(ouputResponse);
                                }.bind(this, actionName), function (error) {
                                    let errorObject = Internal.generateErrorObject(error, "ProductivityMacrosWrapper - openSearchPage", Internal.errorTypes.GenericError);
                                    Internal.logFailure("openSearchPage", errorObject, "");
                                    reject(error.message);
                                });
                            }
                        });
                    });
                }
                else {
                    let errorObject = {};
                    errorObject.errorMsg = "searchPageOptions is Null or Undefined";
                    errorObject.errorType = Internal.errorTypes.InvalidParams;
                    errorObject.reportTime = new Date().toUTCString();
                    errorObject.sourceFunc = "ProductivityMacrosWrapper - openSearchPage";
                    Internal.logFailure("openSearchPage", errorObject, "");
                    return Promise.reject("openSearchPage - searchPageOptions is Null or Undefined");
                }
            }
            Internal.openSearchPage = openSearchPage;
            function openKBSearchControl(actionName, searchPageOptions) {
                try {
                    var tabInput = {
                        pageInput: {
                            pageType: "webresource",
                            webresourceName: "msdyn_kbsearchpagehost.html",
                            data: searchPageOptions.SearchString
                        },
                        options: { isFocused: true }
                    };
                    return new Promise((resolve, reject) => {
                        getNavigationType().then((navigationType) => {
                            if (navigationType == 1) {
                                createTab(tabInput).then(function (tabId) {
                                    var ouputResponse = {};
                                    var sessionContextParams = {};
                                    sessionContextParams[actionName + ProductivityMacros.Constants.SuffixTabId] = tabId;
                                    ouputResponse[ProductivityMacros.Constants.OutputResult] = sessionContextParams;
                                    Internal.logSuccess("ProductivityMacrosWrapper - openKBSearchControl", "");
                                    resolve(ouputResponse);
                                }.bind(this, actionName), function (error) {
                                    let errorObject = Internal.generateErrorObject(error, "ProductivityMacrosWrapper - openKBSearchControl", Internal.errorTypes.GenericError);
                                    Internal.logFailure("openKBSearchControl", errorObject, "");
                                    reject(error.message);
                                });
                            }
                        });
                    });
                }
                catch (error) {
                    let errorObject = {};
                    errorObject.errorMsg = error;
                    errorObject.errorType = Internal.errorTypes.InvalidParams;
                    errorObject.reportTime = new Date().toUTCString();
                    errorObject.sourceFunc = "ProductivityMacrosWrapper - openKBSearchControl";
                    Internal.logFailure("openKBSearchControl", errorObject, "");
                    return Promise.reject(error);
                }
            }
            Internal.openKBSearchControl = openKBSearchControl;
            function save(actionName) {
                let telemetryData = new Object();
                return new Promise(function (resolve, reject) {
                    let startTime = new Date();
                    ((window.top).Xrm).Page.data.save().then(function (response) {
                        Internal.logNestedApiData(telemetryData, startTime, Date.now() - startTime.getTime(), "Xrm.Page.data.save");
                        Internal.logSuccess("ProductivityMacrosWrapper - save", "", telemetryData);
                        var ouputResponse = {};
                        var sessionContextParams = {};
                        sessionContextParams[actionName + ProductivityMacros.Constants.SuffixEntityName] = response.savedEntityReference.entityType;
                        sessionContextParams[actionName + ProductivityMacros.Constants.SuffixEntityId] = response.savedEntityReference.id;
                        sessionContextParams[actionName + ProductivityMacros.Constants.SuffixPrimaryNameAttributeValue] = response.savedEntityReference.name;
                        ouputResponse[ProductivityMacros.Constants.OutputResult] = sessionContextParams;
                        resolve(ouputResponse);
                    }.bind(this), function (errorMessage) {
                        let errorObject = {};
                        errorObject.errorMsg = errorMessage;
                        errorObject.errorType = Internal.errorTypes.XrmApiError;
                        errorObject.reportTime = new Date().toUTCString();
                        errorObject.sourceFunc = "ProductivityMacrosWrapper - save";
                        Internal.logFailure("save", errorObject, "");
                        return reject(errorMessage);
                    });
                });
            }
            Internal.save = save;
            function getEnvironment() {
                //Xrm.Page is deprecated hence definition not available in .d.ts
                //Using eval(...) to avoid compiler error
                var data = new Map();
                try {
                    let telemetryData = new Object();
                    let startTime = new Date();
                    let pageUrl = new URL(eval("window.top.Xrm.Page.getUrl()"));
                    let timeTaken = Date.now() - startTime.getTime();
                    Internal.logNestedApiData(telemetryData, startTime, timeTaken, "Xrm.Page.getUrl");
                    for (var entry of pageUrl.searchParams.entries()) {
                        data.set(entry[0], entry[1]);
                    }
                }
                catch (error) {
                    let errorObject = {};
                    errorObject.errorMsg = "geturl not available on this page";
                    errorObject.errorType = Internal.errorTypes.GenericError;
                    errorObject.reportTime = new Date().toUTCString();
                    errorObject.sourceFunc = "ProductivityMacrosWrapper - getEnvironment";
                    Internal.logFailure("getEnvironment", errorObject, "");
                    return createErrorMap("getUrl not available on this page", "getEnvironment");
                }
                let startTime = new Date();
                let telemetryData = new Object;
                var context = Xrm.Utility.getGlobalContext();
                let timeTaken = Date.now() - startTime.getTime();
                Internal.logNestedApiData(telemetryData, startTime, timeTaken, "Xrm.Utility.getGlobalContext");
                data.set(ProductivityMacros.Constants.ClientUrl, context.getClientUrl());
                data.set(ProductivityMacros.Constants.AppUrl, context.getCurrentAppUrl());
                data.set(ProductivityMacros.Constants.OrgLcid, context.organizationSettings.languageId);
                data.set(ProductivityMacros.Constants.OrgUniqueName, context.organizationSettings.uniqueName);
                data.set(ProductivityMacros.Constants.OrgId, context.organizationSettings.organizationId);
                data.set(ProductivityMacros.Constants.UserId, context.userSettings.userId);
                data.set(ProductivityMacros.Constants.UserLcid, context.userSettings.languageId);
                data.set(ProductivityMacros.Constants.UserName, context.userSettings.userName);
                data.set(ProductivityMacros.Constants.UserRoles, context.userSettings.securityRoles);
                data.set(ProductivityMacros.Constants.crmVersion, context.getVersion());
                Internal.logSuccess("ProductivityMacrosWrapper - getEnvironment", "", telemetryData);
                return data;
            }
            Internal.getEnvironment = getEnvironment;
            function getAttributeFromCollection(recordTitle) {
                let windowXrm;
                try {
                    //we are using here windows.top.xrm.page 
                    //this api will work in case of crm forms are focused
                    //if anything else is focused then it will contradict the action it self as this action for cloning a record on crm form. 
                    //in that case we are catching exception and returning as macro triggered for invalide form.  
                    windowXrm = ((window.top).Xrm);
                }
                catch (e) {
                    return Promise.reject(createErrorMap("Macro executed for invalid form", "cloneRecord"));
                }
                let entityObj = {};
                entityObj["attributeObj"] = {};
                //let attributeObj: any = {};
                let col = windowXrm.Page.data.entity.attributes._collection;
                let entityRef = windowXrm.Page.data.entity.getEntityReference();
                entityObj["entityName"] = entityRef.entityType;
                Object.keys(col).forEach(function (key) {
                    entityObj.attributeObj[key] = col[key].getValue();
                });
                entityObj.attributeObj = removeExtraData(entityObj.attributeObj, entityObj.entityName);
                return entityObj;
            }
            function removeExtraData(obj, entityName) {
                let tempObj = obj;
                let tempArray = ProductivityMacros.Attributes.commmonAttributes;
                tempArray.push(entityName + "id");
                tempArray.forEach(function (attrib) {
                    Object.keys(obj).forEach(function (key) {
                        if (key.includes(attrib) || tempObj[key] == null) {
                            delete tempObj[key];
                        }
                    });
                });
                return tempObj;
            }
            function arrangeLookupValue(obj, entityName) {
                let temp = obj;
                let result = {};
                let formatedValue = "_value@OData.Community.Display.V1.FormattedValue";
                let navigationProperty = "_value@Microsoft.Dynamics.CRM.associatednavigationproperty";
                let lookupLogicalName = "_value@Microsoft.Dynamics.CRM.lookuplogicalname";
                let value = "_value";
                let underScor = "_";
                Object.keys(temp).forEach(function (key) {
                    let attribName = "";
                    if (key.endsWith(value))
                        attribName = key.substr(1, key.length - value.length - 1);
                    if (key.endsWith(lookupLogicalName))
                        attribName = key.substr(1, key.length - lookupLogicalName.length - 1);
                    if (key.endsWith(navigationProperty))
                        attribName = key.substr(1, key.length - navigationProperty.length - 1);
                    if (key.endsWith(formatedValue))
                        attribName = key.substr(1, key.length - formatedValue.length - 1);
                    if ((attribName != "") && (underScor + attribName + value in obj) && (underScor + attribName + lookupLogicalName in obj) &&
                        (underScor + attribName + navigationProperty in obj) && (underScor + attribName + formatedValue in obj)) {
                        var lookupValue = new Array();
                        lookupValue[0] = new Object();
                        lookupValue[0].id = obj[underScor + attribName + value];
                        lookupValue[0].name = obj[underScor + attribName + formatedValue];
                        lookupValue[0].entityType = obj[underScor + attribName + lookupLogicalName];
                        result[attribName] = lookupValue;
                        delete obj[underScor + attribName + value];
                        delete obj[underScor + attribName + lookupLogicalName];
                        delete obj[underScor + attribName + navigationProperty];
                        delete obj[underScor + attribName + formatedValue];
                    }
                    else {
                        if (key in obj)
                            result[key] = obj[key];
                    }
                });
                return result;
            }
            function cloneInputRecord(actionName, entityData, telemetryData) {
                let recordTitle = "_copy";
                if (!entityData) {
                    return Promise.reject(createErrorMap("Need values to clone record", "cloneInputRecord"));
                }
                return new Promise((resolve, reject) => {
                    if (entityData.hasOwnProperty("RecordTitle") && typeof (entityData.RecordTitle) !== "undefined") {
                        recordTitle = entityData.RecordTitle;
                    }
                    getPrimaryNameAttribute(entityData.EntityName).then(function (primaryAttrib) {
                        getRecordToClone(actionName, entityData, primaryAttrib, recordTitle).then(function (dataObj) {
                            cloneRecord_DefaultBehaviour(actionName, entityData.EntityName, dataObj).then(function (outParameter) {
                                resolve(outParameter);
                            }, function (error) {
                                reject(error);
                            });
                        }, function (error) {
                            reject(error);
                        });
                    });
                });
            }
            Internal.cloneInputRecord = cloneInputRecord;
            function cloneFocusedRecord(actionName, entityData, telemetryData) {
                let recordTitle = "_copy";
                if (!entityData) {
                    return Promise.reject(createErrorMap("Need values to clone record", "cloneFocusedRecord"));
                }
                return new Promise((resolve, reject) => {
                    if (entityData.hasOwnProperty("RecordTitle") && typeof (entityData.RecordTitle) !== "undefined") {
                        recordTitle = entityData.RecordTitle;
                    }
                    let entityObj = getAttributeFromCollection(recordTitle);
                    getPrimaryNameAttribute(entityObj.entityName).then(function (primaryAttrib) {
                        if (primaryAttrib !== "") {
                            if (recordTitle === "_copy")
                                entityObj.attributeObj[primaryAttrib] = entityObj.attributeObj[primaryAttrib] + "_copy";
                            else {
                                entityObj.attributeObj[primaryAttrib] = recordTitle;
                            }
                        }
                        resolve(cloneRecord_DefaultBehaviour(actionName, entityObj.entityName, entityObj.attributeObj));
                    });
                });
            }
            Internal.cloneFocusedRecord = cloneFocusedRecord;
            function getPrimaryNameAttribute(entityName) {
                return new Promise(function (resolve, reject) {
                    var req = new XMLHttpRequest();
                    req.open("GET", Xrm.Utility.getGlobalContext().getClientUrl() + "/api/data/v9.0/EntityDefinitions(LogicalName='" + entityName + "')/?$select=PrimaryNameAttribute", true);
                    req.setRequestHeader("OData-MaxVersion", "4.0");
                    req.setRequestHeader("OData-Version", "4.0");
                    req.setRequestHeader("Accept", "application/json");
                    req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                    req.onreadystatechange = function () {
                        if (req.readyState === 4) {
                            req.onreadystatechange = null;
                            if (req.status === 200) {
                                let name = JSON.parse(req.response).PrimaryNameAttribute;
                                if (name === undefined) {
                                    name = "";
                                }
                                resolve(name);
                            }
                            else {
                                resolve("");
                            }
                        }
                    };
                    req.send();
                });
            }
            function getRecordToClone(actionName, entityData, primaryNameAttribute, recordTitle) {
                return new Promise((resolve, reject) => {
                    let startTime = new Date();
                    Xrm.WebApi.retrieveRecord(entityData.EntityName, entityData.EntityId).then(function success(result1) {
                        result1 = arrangeLookupValue(result1, entityData.EntityName);
                        result1 = removeExtraData(result1, entityData.EntityName);
                        delete result1["@odata.context"];
                        delete result1["@odata.etag"];
                        if (primaryNameAttribute != "")
                            result1[primaryNameAttribute] = (recordTitle == "_copy") ? result1[primaryNameAttribute] + recordTitle : recordTitle;
                        resolve(result1);
                    }, function (error) {
                        let errorData = Internal.generateErrorObject(error, "ProductivityMacrosWrapper - cloneRecord", Internal.errorTypes.XrmApiError);
                        Internal.logFailure("cloneRecord", errorData, "");
                        reject(error);
                    });
                });
            }
            function cloneRecord_DefaultBehaviour(actionName, entityName, entityData) {
                return new Promise((resolve, reject) => {
                    getNavigationType().then((navigationType) => {
                        if (navigationType == 1) {
                            var tabInput = {
                                pageInput: {
                                    pageType: "entityrecord",
                                    entityName: entityName,
                                    data: entityData
                                },
                                options: { isFocused: true }
                            };
                            createTab(tabInput).then(function (tabId) {
                                var ouputResponse = {};
                                var sessionContextParams = {};
                                sessionContextParams[actionName + ".TabId"] = tabId;
                                sessionContextParams[actionName + ".EntityName"] = entityName;
                                sessionContextParams[actionName + ".PageType"] = "entityrecord";
                                ouputResponse[ProductivityMacros.Constants.OutputResult] = sessionContextParams;
                                Internal.logSuccess("ProductivityMacrosWrapper - cloneRecord", "");
                                resolve(ouputResponse);
                            }, function (error) {
                                let errorObject = Internal.generateErrorObject(error, "ProductivityMacrosWrapper - cloneRecord", Internal.errorTypes.GenericError);
                                Internal.logFailure("cloneRecord", errorObject, "");
                                reject(error.message);
                            });
                        }
                        else {
                            var efo = {
                                entityName: entityName,
                                useQuickCreateForm: false
                            };
                            var parameters = entityData;
                            Xrm.Navigation.openForm(efo, parameters).then(function (res) {
                                var ouputResponse = {};
                                var sessionContextParams = {};
                                sessionContextParams[actionName + ".EntityName"] = entityName;
                                sessionContextParams[actionName + ".PageType"] = "entityrecord";
                                sessionContextParams[actionName + ".EntityId"] = res.savedEntityReference[0].id;
                                ouputResponse[ProductivityMacros.Constants.OutputResult] = sessionContextParams;
                                return resolve(ouputResponse);
                            }, function (error) {
                                let errorData = Internal.generateErrorObject(error, "client.openForm - Xrm.Navigation.openForm", Internal.errorTypes.XrmApiError);
                                return reject(errorData);
                            });
                        }
                    });
                });
            }
            function getPartyListValue(data) {
                try {
                    let partyList = JSON.parse(data);
                    if (Array.isArray(partyList)) {
                        let partylistData = new Array();
                        let i = 0;
                        partyList.forEach((item) => {
                            if (item.hasOwnProperty("id") && item.hasOwnProperty("name") && (item.hasOwnProperty("entitytype") || item.hasOwnProperty("type"))) {
                                partylistData[i] = new Object();
                                partylistData[i].id = item.id;
                                partylistData[i].name = item.name;
                                partylistData[i].entityType = item.hasOwnProperty("entitytype") ? item.entitytype : item.type;
                                i++;
                            }
                        });
                        return partylistData;
                    }
                }
                catch (e) {
                    return data;
                }
                return data;
            }
            function updateFormAttribute(actionName, entityData, telemetryData) {
                if (!entityData) {
                    return Promise.reject(createErrorMap("Need values to Update for updateFormAttribute", "updateFormAttribute")); // should be removed add logrejectanderror mrthod here
                }
                let windowXrm;
                try {
                    //we are using here windows.top.xrm.page and windows.top.xrm.page.ui.formselector
                    //this api will work in case of crm forms are focused
                    //if anything else is focused then it will contradict the action it self as this action for pupulating fields on crm form. 
                    //in that case we are catching exception and returning as macro triggered for invalide form.  
                    windowXrm = ((window.top).Xrm);
                    if (entityData.EntityName != windowXrm.Page.ui.formSelector._entityName) {
                        return Promise.reject(createErrorMap("Macro executed for invalid form", "updateFormAttribute")); // should be removed add logrejectanderror mrthod here
                    }
                }
                catch (e) {
                    return Promise.reject(createErrorMap("Macro executed for invalid form", "updateFormAttribute")); // should be removed add logrejectanderror mrthod here
                }
                return new Promise((resolve, reject) => {
                    let startTime = new Date();
                    try {
                        let data = consolidateLookupObj(getCustomArray(entityData));
                        Object.keys(data).forEach(function (key) {
                            let dataType = windowXrm.Page.getAttribute(key).getAttributeType();
                            try {
                                switch (dataType) {
                                    case "decimal":
                                    case "optionset":
                                    case "integer":
                                        windowXrm.Page.getAttribute(key).setValue(parseInt(data[key]));
                                        break;
                                    case "boolean":
                                        windowXrm.Page.getAttribute(key).setValue(Boolean.parse(data[key]));
                                        break;
                                    case "double":
                                    case "money":
                                        windowXrm.Page.getAttribute(key).setValue(parseFloat(data[key]));
                                        break;
                                    case "datetime":
                                        windowXrm.Page.getAttribute(key).setValue(new Date(data[key]));
                                        break;
                                    case "multiselectoptionset":
                                        let tempArray = data[key].split(",");
                                        let multiOptionSet = new Array();
                                        tempArray.forEach(function (item) {
                                            multiOptionSet.push(parseInt(item));
                                        });
                                        windowXrm.Page.getAttribute(key).setValue(multiOptionSet);
                                        break;
                                    case "lookup":
                                        data[key] = getPartyListValue(data[key]);
                                        windowXrm.Page.getAttribute(key).setValue(data[key]);
                                        break;
                                    default:
                                        windowXrm.Page.getAttribute(key).setValue(data[key]);
                                }
                            }
                            catch (e) {
                                let errorData = Internal.generateErrorObject(e, "ProductivityMacrosWrapper - updateFormAttribute - unable to parse input parameter " + key + "-" + data[key], Internal.errorTypes.InvalidParams);
                                Internal.logFailure("updateFormAttribute", errorData, "");
                            }
                        });
                        let timeTaken = Date.now() - startTime.getTime();
                        var ouputResponse = {};
                        var sessionContextParams = {};
                        sessionContextParams[actionName + ProductivityMacros.Constants.SuffixEntityName] = entityData.EntityName;
                        sessionContextParams[actionName + ProductivityMacros.Constants.SuffixTabId] = windowXrm.App.sessions.getFocusedSession().tabs.getFocusedTab().tabId;
                        ouputResponse[ProductivityMacros.Constants.OutputResult] = sessionContextParams;
                        Internal.logSuccess("ProductivityMacrosWrapper - updateFormAttribute", "", telemetryData);
                        resolve(ouputResponse);
                    }
                    catch (e) {
                        let errorData = Internal.generateErrorObject(e, "ProductivityMacrosWrapper - updateFormAttribute", Internal.errorTypes.XrmApiError);
                        Internal.logFailure("updateFormAttribute", errorData, "");
                        reject(e);
                    }
                });
            }
            Internal.updateFormAttribute = updateFormAttribute;
            function updateRecord(actionName, entityData, telemetryData) {
                if (!entityData) {
                    /* let errorData = {} as IErrorHandler;
                    errorData.errorMsg = "Need values to Update for updateRecord";
                    errorData.errorType = errorTypes.InvalidParams;
                    errorData.reportTime = new Date().toUTCString();
                    errorData.sourceFunc = "ProductivityMacros.updateRecord";
                    //return Promise.reject(errorData);
                    */
                    return Promise.reject(createErrorMap("Need values to Update for updateRecord", "updateRecord")); // should be removed add logrejectanderror mrthod here
                }
                let data = getCustomArray(entityData);
                return new Promise((resolve, reject) => {
                    let startTime = new Date();
                    return Xrm.WebApi.updateRecord(entityData.EntityName, entityData.EntityId, data).then((result) => {
                        let timeTaken = Date.now() - startTime.getTime();
                        var ouputResponse = {};
                        var sessionContextParams = {};
                        sessionContextParams[actionName + ProductivityMacros.Constants.SuffixEntityName] = entityData.EntityName;
                        sessionContextParams[actionName + ProductivityMacros.Constants.SuffixEntityId] = entityData.EntityId;
                        ouputResponse[ProductivityMacros.Constants.OutputResult] = sessionContextParams;
                        Internal.logNestedApiData(telemetryData, startTime, timeTaken, "Xrm.WebApi.updateRecord");
                        Internal.logSuccess("ProductivityMacrosWrapper - updateRecord", "", telemetryData);
                        return resolve(ouputResponse);
                    }, (error) => {
                        let errorData = Internal.generateErrorObject(error, "ProductivityMacrosWrapper - updateRecord", Internal.errorTypes.XrmApiError);
                        Internal.logFailure("openNewForm", errorData, "");
                        return reject(error);
                    });
                });
            }
            Internal.updateRecord = updateRecord;
            function retrieveRecord(entityData, telemetryData) {
                return new Promise((resolve, reject) => {
                    let startTime = new Date();
                    return Xrm.WebApi.retrieveRecord(entityData.EntityName, entityData.EntityId, entityData.Query).then((result) => {
                        let timeTaken = Date.now() - startTime.getTime();
                        Internal.logNestedApiData(telemetryData, startTime, timeTaken, "Xrm.WebApi.retrieveRecord");
                        Internal.logSuccess("ProductivityMacrosWrapper - retrieveRecord", "", telemetryData);
                        return resolve(buildMap(result));
                    }, (error) => {
                        let errorData = Internal.generateErrorObject(error, "ProductivityMacrosWrapper - retrieveRecord", Internal.errorTypes.XrmApiError);
                        Internal.logFailure("openNewForm", errorData, "");
                        return reject(error);
                    });
                });
            }
            Internal.retrieveRecord = retrieveRecord;
            function foucsTabAction(actionName, actionInputs) {
                if (!(isNullOrUndefined(actionInputs))) {
                    return new Promise((resolve, reject) => {
                        let tabId = actionInputs.TabId;
                        focusTab(tabId).then((success) => {
                            var ouputResponse = {};
                            var sessionContextParams = {};
                            sessionContextParams[actionName + ".TabId"] = tabId;
                            ouputResponse["result"] = sessionContextParams;
                            resolve(ouputResponse);
                        }, (error) => {
                            reject(error);
                        });
                    });
                }
                else {
                    return Promise.reject("foucsTabAction is null or undefined");
                }
            }
            Internal.foucsTabAction = foucsTabAction;
            function getCurrentPageAction(actionName, actionInputs) {
                if (!(isNullOrUndefined(actionInputs))) {
                    return new Promise((resolve, reject) => {
                        let sessionId = getFocusedSessionId();
                        let session = Microsoft.AppRuntime.Sessions.getSession(sessionId);
                        var tabId = session.getFocusedTab().tabId;
                        var ouputResponse = {};
                        var sessionContextParams = {};
                        sessionContextParams[actionName + ".TabId"] = tabId;
                        ouputResponse["result"] = sessionContextParams;
                        resolve(ouputResponse);
                    });
                }
                else {
                    return Promise.reject("getCurrentPageAction is null or undefined");
                }
            }
            Internal.getCurrentPageAction = getCurrentPageAction;
            function openApplicationTemplate(actionName, entityData) {
                if (!entityData || entityData.PageType === undefined || entityData.ApplicationTemplateId === undefined) {
                    return Promise.reject("Need values to open application template - openApplicationTamplate");
                }
                return new Promise((resolve, reject) => {
                    let pageInput;
                    let options = { isFocused: true };
                    if (entityData.Custom_Array == undefined) {
                        let promises = [];
                        promises.push(getApplicationTemplate(entityData.ApplicationTemplateId));
                        promises.push(getApplicationTemplateRecord(entityData.ApplicationTemplateId));
                        Promise.all(promises).then(function (result) {
                            entityData.Custom_Array = getCustomArrayFromEntityCollection(result[0].entities);
                            pageInput = getPageInput(entityData);
                            var title = result[1].entities[0].msdyn_title;
                            if (!isNullOrUndefined(title)) {
                                options.title = title;
                            }
                            resolve(openTab(actionName, pageInput, options));
                        }, function (error) {
                            reject(error.message);
                        });
                    }
                    else {
                        pageInput = getPageInput(entityData);
                        resolve(openTab(actionName, pageInput, options));
                    }
                });
            }
            Internal.openApplicationTemplate = openApplicationTemplate;
            function refreshPageAction(actionName, actionInputs) {
                if (!(isNullOrUndefined(actionInputs))) {
                    return new Promise((resolve, reject) => {
                        let tabId = actionInputs.TabId;
                        refreshTab(tabId).then((success) => {
                            var ouputResponse = {};
                            var sessionContextParams = {};
                            sessionContextParams[actionName + ".TabId"] = tabId;
                            ouputResponse["result"] = sessionContextParams;
                            resolve(ouputResponse);
                        }, (error) => {
                            reject(error);
                        });
                    });
                }
                else {
                    return Promise.reject("refreshPageAction is null or undefined");
                }
            }
            Internal.refreshPageAction = refreshPageAction;
            function resolveSlug(context, paramName) {
                return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                    var callbackResponse = {};
                    let sessionContext = yield Microsoft.AppRuntime.Sessions.getFocusedSession().getContext();
                    sessionContext.resolveSlug(paramName).then((result) => {
                        callbackResponse["statusCode"] = 200;
                        callbackResponse["status"] = "succedded";
                        callbackResponse["result"] = result;
                        resolve(callbackResponse);
                    }, (error) => {
                        callbackResponse["statusCode"] = 500;
                        callbackResponse["status"] = "failed";
                        callbackResponse["result"] = error;
                        reject(callbackResponse);
                    });
                }));
            }
            Internal.resolveSlug = resolveSlug;
            function createTab(input, telemetryData) {
                if (Microsoft.AppRuntime && Microsoft.AppRuntime.Internal) {
                    return Microsoft.AppRuntime.Internal.createTab(input);
                }
                else {
                    return Xrm.App.sessions.getFocusedSession().tabs.createTab(input);
                }
            }
            /**
             * Given a map, this func returns an equivalent XrmClientApi.WebApi.Entity object for it.
             * @param map Object to build the entity for.
             */
            function buildEntity(map) {
                let entity = {};
                map.forEach((value, key) => {
                    entity[key] = value;
                });
                return entity;
            }
            /**
             * Given a key-value object, this func returns an equivalent Map object for it.
             * @param dict Object to build the map for.
             */
            function buildMap(dict) {
                if (isError(dict)) {
                    return createErrorMap(dict.message);
                }
                else {
                    let map = new Map();
                    Object.keys(dict).forEach((key) => {
                        map.set(key, dict[key]);
                    });
                    return map;
                }
            }
            Internal.buildMap = buildMap;
            /**
             * utility func to create a error map with the error message and optional error code
            */
            function createErrorMap(errorMessage, apiName) {
                return new Map().set("message", errorMessage).set("msdyn_name", apiName);
            }
            Internal.createErrorMap = createErrorMap;
            /**
             * utility func to check whether argument passed if of type Error Object
             * @param arg Object to check whether it is Error or not.
            */
            function isError(arg) {
                return (arg.message !== undefined);
            }
            Internal.isError = isError;
            function resolveIncident(actionName, entityFormData) {
                let telemetryData = new Object();
                return new Promise((resolve, reject) => {
                    var parameters = {
                        "IncidentId": {
                            "incidentid": entityFormData.IncidentId,
                            "@odata.type": "Microsoft.Dynamics.CRM.incident"
                        },
                        "Status": 5,
                        "BillableTime": entityFormData.BillableTime,
                        "Resolution": entityFormData.Resolution,
                        "Remarks": entityFormData.Remarks
                    };
                    var requestUrl = "/api/data/v9.0/ResolveIncident?tag=abortbpf";
                    let startTime = new Date();
                    var context = Xrm.Utility.getGlobalContext();
                    let timeTaken = Date.now() - startTime.getTime();
                    Internal.logNestedApiData(telemetryData, startTime, timeTaken, "Xrm.Utility.getGlobalContext");
                    var req = new XMLHttpRequest();
                    req.open("POST", context.getClientUrl() + requestUrl, true);
                    req.setRequestHeader("OData-MaxVersion", "4.0");
                    req.setRequestHeader("OData-Version", "4.0");
                    req.setRequestHeader("Accept", "application/json");
                    req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                    req.onreadystatechange = function () {
                        if (req.readyState === 4) {
                            req.onreadystatechange = null;
                            if (req.status === 204) {
                                var ouputResponse = {};
                                var sessionContextParams = {};
                                sessionContextParams[actionName + ProductivityMacros.Constants.SuffixEntityName] = "incident";
                                sessionContextParams[actionName + ProductivityMacros.Constants.SuffixEntityId] = entityFormData.IncidentId;
                                sessionContextParams[actionName + ProductivityMacros.Constants.SuffixPageType] = "entityrecord";
                                ouputResponse[ProductivityMacros.Constants.OutputResult] = sessionContextParams;
                                Internal.logSuccess("ProductivityMacrosWrapper - resolveIncident", "", telemetryData);
                                resolve(ouputResponse);
                            }
                            else {
                                let errorObject = {};
                                errorObject.errorMsg = req.responseText;
                                errorObject.errorType = Internal.errorTypes.GenericError;
                                errorObject.reportTime = new Date().toUTCString();
                                errorObject.sourceFunc = "ProductivityMacrosWrapper - resolveIncident";
                                Internal.logFailure("resolveIncident", errorObject, "");
                                return reject(req.responseText);
                            }
                        }
                    };
                    req.send(JSON.stringify(parameters));
                });
            }
            Internal.resolveIncident = resolveIncident;
            function InstantiateEmailTemplate(entityFormData) {
                let telemetryData = new Object();
                return new Promise((resolve, reject) => {
                    var parameters = {
                        "TemplateId": entityFormData.TemplateId,
                        "ObjectType": entityFormData.EntityName,
                        "ObjectId": entityFormData.EntityId //record id for the entity above
                    };
                    var requestUrl = "/api/data/v9.1/InstantiateTemplate";
                    let startTime = new Date();
                    var context = Xrm.Utility.getGlobalContext();
                    let timeTaken = Date.now() - startTime.getTime();
                    Internal.logNestedApiData(telemetryData, startTime, timeTaken, "Xrm.Utility.getGlobalContext");
                    var req = new XMLHttpRequest();
                    req.open("POST", context.getClientUrl() + requestUrl, true);
                    req.setRequestHeader("OData-MaxVersion", "4.0");
                    req.setRequestHeader("OData-Version", "4.0");
                    req.setRequestHeader("Accept", "application/json");
                    req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                    req.onreadystatechange = function () {
                        if (req.readyState === 4) {
                            req.onreadystatechange = null;
                            if (req.status === 200) {
                                var result = JSON.parse(req.response); //template result containing resolved subject and description fields
                                Internal.logSuccess("ProductivityMacrosWrapper - InstantiateEmailTemplate", "", telemetryData);
                                resolve(result);
                            }
                            else {
                                let errorObject = {};
                                errorObject.errorMsg = req.responseText;
                                errorObject.errorType = Internal.errorTypes.GenericError;
                                errorObject.reportTime = new Date().toUTCString();
                                errorObject.sourceFunc = "ProductivityMacrosWrapper - instantiateEmailTemplate";
                                Internal.logFailure("instantiateEmailTemplate", errorObject, "");
                                return reject(req.responseText);
                            }
                        }
                    };
                    req.send(JSON.stringify(parameters));
                });
            }
            function getNavigationType() {
                return new Promise((resolve, reject) => {
                    var context = Xrm.Utility.getGlobalContext();
                    context.getCurrentAppProperties().then((result) => {
                        var appId = result.appId;
                        Xrm.WebApi.retrieveRecord("appmodule", appId, "?$select=name,navigationtype").then((data) => {
                            return resolve(data.navigationtype);
                        }, (error) => {
                            let errorObject = {};
                            errorObject.errorMsg = error;
                            errorObject.errorType = Internal.errorTypes.XrmApiError;
                            errorObject.reportTime = new Date().toUTCString();
                            errorObject.sourceFunc = "ProductivityMacrosWrapper - getNavigationType";
                            Internal.logFailure("getNavigationType", errorObject, "");
                            return reject(error);
                        });
                    });
                });
            }
            function triggerFlow(actionName, actionInputs) {
                if (!(isNullOrUndefined(actionInputs))) {
                    return new Promise((resolve, reject) => {
                        var ouputResponse = {};
                        var sessionContextParams = {};
                        let fpiHelper = new Internal.FPIHelper();
                        fpiHelper.fetchFlowsEnvId()
                            .then((flowEnvIdResponse) => {
                            var flowEnvId = flowEnvIdResponse.name;
                            // Build dialog parameters for Flow MDD.
                            const dialogParams = populateFlowDialogParams(actionInputs.flowId, actionInputs.entityLogicalName, actionInputs.entityLogicalCollectionName, actionInputs.entityRecordId, flowEnvId);
                            // Set dialog options
                            const dialogOptions = {};
                            dialogOptions.height = ProductivityMacros.Constants.DIALOG_HEIGHT;
                            dialogOptions.width = ProductivityMacros.Constants.DIALOG_WIDTH;
                            // Open dialog to invoke the Flow
                            return Xrm.Navigation.openDialog(ProductivityMacros.Constants.MICROSOFT_FLOWS_DIALOG, dialogOptions, dialogParams).then((result) => {
                                sessionContextParams[actionName + ProductivityMacros.Constants.SuffixFlowId] = result.parameters.flow_id;
                                ouputResponse[ProductivityMacros.Constants.OutputResult] = sessionContextParams;
                                return resolve(ouputResponse);
                            }, (error) => {
                                let errorData = Internal.generateErrorObject(error, "ProductivityMacrosWrapper - triggerFlow", Internal.errorTypes.XrmApiError);
                                Internal.logFailure("triggerFlow", errorData, "");
                                return reject(error);
                            });
                        });
                    });
                }
                else {
                    let errorObject = {};
                    errorObject.errorMsg = "formInputs is Null or Undefined";
                    errorObject.errorType = Internal.errorTypes.InvalidParams;
                    errorObject.reportTime = new Date().toUTCString();
                    errorObject.sourceFunc = "ProductivityMacrosWrapper - triggerFlow";
                    Internal.logFailure("triggerFlow", errorObject, "");
                    return Promise.reject("triggerFlow - formInputs is Null or Undefined");
                }
            }
            Internal.triggerFlow = triggerFlow;
            function populateFlowDialogParams(flowId, entityLogicalName, entityCollectionName, entityRecordId, flowEnvId) {
                const dialogParams = {};
                const entityIds = [];
                entityIds.push(entityRecordId);
                const entityId = JSON.stringify(entityIds);
                dialogParams[ProductivityMacros.Constants.ENTITIES_ID] = entityId;
                dialogParams[ProductivityMacros.Constants.DIALOG_FLOW_ID] = flowId;
                dialogParams[ProductivityMacros.Constants.DIALOG_FLOWS_ENVIRONMENT_ID] = flowEnvId;
                dialogParams[ProductivityMacros.Constants.DIALOG_ORG_UNIQUE_NAME] = Xrm.Utility.getGlobalContext().organizationSettings.uniqueName;
                const destinationUrl = Xrm.Utility.getGlobalContext().getAdvancedConfigSetting(ProductivityMacros.Constants.FLOW_DESTINATION_URL);
                dialogParams[ProductivityMacros.Constants.DIALOG_DYNAMICS365_ACCESS_TOKEN] = null;
                dialogParams[ProductivityMacros.Constants.DIALOG_FLOWS_AUTHENTICATION_STRING] = undefined;
                dialogParams[ProductivityMacros.Constants.DIALOG_ENTITY_LOGICAL_NAME] = entityLogicalName;
                dialogParams[ProductivityMacros.Constants.DIALOG_ENTITY_LOGICAL_COLLECTION_NAME] = entityCollectionName;
                dialogParams[ProductivityMacros.Constants.DIALOG_FLOWS_DESTINATION_URL] = destinationUrl;
                const flowFpiUrl = Xrm.Utility.getGlobalContext().getAdvancedConfigSetting(ProductivityMacros.Constants.FLOW_FPI_URL);
                dialogParams[ProductivityMacros.Constants.DIALOG_FLOWS_FPI_SITE_URL] =
                    flowFpiUrl + ProductivityMacros.Constants.FLOW_FPI_URL_ENABLE_WIDGET_V2_PARAMETER;
                // Always load widget v2.
                dialogParams[ProductivityMacros.Constants.DIALOG_FLOWS_ENABLE_WIDGET_V2] = true;
                return dialogParams;
            }
        })(Internal = ProductivityMacros.Internal || (ProductivityMacros.Internal = {}));
    })(ProductivityMacros = Microsoft.ProductivityMacros || (Microsoft.ProductivityMacros = {}));
})(Microsoft || (Microsoft = {}));
/// <reference path="../../../../packages/Crm.ClientApiTypings.1.3.2084/clientapi/XrmClientApi.d.ts" />
/// <reference path="../Libraries/requirejs/require.d.ts" />
/** @internal */
var Microsoft;
(function (Microsoft) {
    var ProductivityMacros;
    (function (ProductivityMacros) {
        var Internal;
        (function (Internal) {
            class ProductivityMacroOperation {
                static InitMacroActionTemplates() {
                    return new Promise(function (resolve, reject) {
                        if (ProductivityMacroOperation.macroActionTemplates.size > 0 && ProductivityMacroOperation.isWebResourceLoaded == true) {
                            return resolve(true);
                        }
                        let mPromises = [];
                        mPromises.push(Xrm.WebApi.retrieveMultipleRecords(ProductivityMacros.EntityName.ActionTemplateEntityName, "?$select=msdyn_name,msdyn_title,msdyn_runtimeapi"));
                        mPromises.push(Xrm.WebApi.retrieveMultipleRecords(ProductivityMacros.EntityName.ConnectorEntityName, "?$select=msdyn_prefix,msdyn_callback,msdyn_webresourcename"));
                        Promise.all(mPromises).then(function (results) {
                            results[0].entities.forEach(function (value) {
                                ProductivityMacroOperation.macroActionTemplates.set(value["msdyn_name"], new ProductivityMacroActionTemplate(value["msdyn_productivitymacroactiontemplateid"], value["msdyn_name"], value["msdyn_title"], value["msdyn_runtimeapi"]));
                            });
                            results[1].entities.forEach(function (value) {
                                ProductivityMacroOperation.macroConnectorTemplates.set(value["msdyn_prefix"].toLowerCase(), new ProductivityMacroConnector(value["msdyn_prefix"].toLowerCase(), value["msdyn_callback"], value["msdyn_webresourcename"]));
                            });
                            loadWebResource().then((result) => {
                                ProductivityMacroOperation.isWebResourceLoaded = true;
                                return resolve(true);
                            }, (error) => {
                                return reject(error);
                            });
                        }, function (error) {
                            return reject(error);
                        });
                    });
                }
            }
            ProductivityMacroOperation.macroActionTemplates = new Map();
            ProductivityMacroOperation.macroConnectorTemplates = new Map();
            ProductivityMacroOperation.isWebResourceLoaded = false;
            Internal.ProductivityMacroOperation = ProductivityMacroOperation;
            class ProductivityMacroActionTemplate {
                constructor(templateId, actionName, actionTitle, actionRuntimeAPI) {
                    this._templateId = templateId;
                    this._name = actionName;
                    this._title = actionTitle;
                    this._runtimeAPI = actionRuntimeAPI;
                }
                get runtimeAPI() {
                    return this._runtimeAPI;
                }
            }
            Internal.ProductivityMacroActionTemplate = ProductivityMacroActionTemplate;
            class ProductivityMacroConnector {
                constructor(prefix, callback, webresourceName) {
                    this._prefix = prefix;
                    this._callback = callback;
                    this._webresourceName = webresourceName;
                }
                get callback() {
                    return this._callback;
                }
                get webresourceName() {
                    return this._webresourceName;
                }
            }
            Internal.ProductivityMacroConnector = ProductivityMacroConnector;
            function loadWebResource() {
                return new Promise((resolve, reject) => {
                    let webresources = {};
                    let resources = [];
                    if (Internal.ProductivityMacroOperation.macroConnectorTemplates.size === 0) {
                        return resolve(true);
                    }
                    var serverUrl = ((window.top).Xrm).Page.context.getClientUrl();
                    if (serverUrl.match(/\/$/)) {
                        serverUrl = serverUrl.substring(0, serverUrl.length - 1);
                    }
                    Internal.ProductivityMacroOperation.macroConnectorTemplates.forEach((value, key, map) => {
                        var webresourcename = value.webresourceName;
                        if (!Internal.isNullOrUndefined(webresourcename)) {
                            webresources[webresourcename] = false;
                        }
                    });
                    let promises = [];
                    if (Object.keys(webresources).length > 0) {
                        Object.keys(webresources).forEach(function (key) {
                            promises.push(findDepedency(key, webresources));
                        });
                    }
                    else {
                        return resolve("success");
                    }
                    Promise.all(promises).then(function (results) {
                        Object.keys(webresources).forEach(function (key) {
                            resources.push(serverUrl + "/webresources/" + key);
                        });
                        require(resources, function (library) {
                            return resolve("success");
                        });
                        requirejs.onError = function (err) {
                            return reject(err);
                        };
                    }, function (error) {
                        return reject(error);
                    });
                });
            }
            function findDepedency(webresourcename, webresources) {
                if (webresources[webresourcename] == false) {
                    webresources[webresourcename] = true;
                    return new Promise((resolve, reject) => {
                        Xrm.WebApi.retrieveMultipleRecords("webresource", "?$select=name,dependencyxml,webresourceid&$filter=name%20eq%20%27" + webresourcename + "%27").then(function (result) {
                            if (result.entities.length > 0) {
                                result.entities.forEach(function (value, index, array) {
                                    let dependencyResources = getDependendency(value["dependencyxml"]);
                                    if (dependencyResources.length > 0) {
                                        let promises = [];
                                        dependencyResources.forEach(function (value, index, array) {
                                            if (!(value in webresources)) {
                                                if (isResx(value)) {
                                                    webresources[value] = true;
                                                }
                                                else {
                                                    webresources[value] = false;
                                                    promises.push(findDepedency(value, webresources));
                                                }
                                            }
                                            else if (webresources[value] == false) {
                                                promises.push(findDepedency(value, webresources));
                                            }
                                        });
                                        Promise.all(promises).then(function (results) {
                                            resolve("success");
                                        }, function (error) {
                                            return reject(error);
                                        });
                                    }
                                    else {
                                        resolve("success");
                                    }
                                });
                            }
                            else {
                                console.log("Failed to find " + webresourcename);
                                resolve("success"); //Resolving as success here as error as this point won't be caught in run history
                            }
                        }, function (error) {
                            reject(error);
                        });
                    });
                }
            }
            function getDependendency(dependencyxml) {
                var dependentResources = [];
                var parsedXml = window.top.$.parseXML(dependencyxml);
                var dependencyElement = parsedXml.documentElement.getElementsByTagName("Dependency");
                for (var i = 0; i < dependencyElement.length; i++) {
                    var libraries = dependencyElement[i].getElementsByTagName("Library");
                    for (var l = 0; l < libraries.length; l++) {
                        var webresourceName = libraries[l].getAttribute("name");
                        if (!Internal.isNullOrUndefined(webresourceName)) {
                            dependentResources.push(webresourceName);
                        }
                    }
                }
                return dependentResources;
            }
            function isResx(resourceName) {
                var type = resourceName.substring(resourceName.length - 4);
                if (type === "resx") {
                    return true;
                }
                else {
                    return false;
                }
            }
        })(Internal = ProductivityMacros.Internal || (ProductivityMacros.Internal = {}));
    })(ProductivityMacros = Microsoft.ProductivityMacros || (Microsoft.ProductivityMacros = {}));
})(Microsoft || (Microsoft = {}));
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
/// <reference path="../../../../packages/Crm.ClientApiTypings.1.3.2084/clientapi/XrmClientApi.d.ts" />
/// <reference path="Constants.ts" />
/// <reference path="../TelemetryHelper.ts" />
/// <reference path="ProductivityMacrosWrapper.ts" />
/// <reference path="MacroActionTemplatesInfra.ts" />
/** @internal */
var Microsoft;
(function (Microsoft) {
    var ProductivityMacros;
    (function (ProductivityMacros) {
        var Internal;
        (function (Internal) {
            function resolveTemplateString(input, templateParams, scope) {
                return new Promise(function (resolve, reject) {
                    if (Internal.isNullOrUndefined(input)) {
                        return resolve(input);
                    }
                    let paramVals = new Map();
                    let paramResolvers = [];
                    if (input.startsWith(ProductivityMacros.SlugPrefix.SPLIT_BY_DOLLAR)) {
                        input = input.substr(1, input.length - 1);
                    }
                    // Regex has 4 variants (seperated by "|" in regex):
                    // Regular slug matching
                    // 		(Start '{')	|		(slug name string - no special char like {}'")	|	(End '}')
                    // Reg:	\{			|		[^{}\"\']*										|	\\}
                    // Ex:	{			|		anchor.customerId								|	}
                    // Odata format matching
                    //		(Start '{$')	|	('odata' string - no special char like {})	    |	({Slug} string if any)				|	(End '}')
                    // Reg:	\{$				|	[^{}]*				                            |	((\{[^{}]*\})+[^{}]*)*				|	\}
                    // Ex:	{$				|	odata				                            |	...entityid eq '{slug}'&$select...	|	}
                    // Regular slug matching, but with proceeding "$"
                    // 		(Start '${')	|		(slug name string - no special char like {}'")	|	(End '}')
                    // Reg:	$\{			    |		[^{}\"\']*										|	\\}
                    // Ex:	${			    |		anchor.customerId								|	}
                    // Odata format matching, but with proceeding "$"
                    //		(Start '${$')	|	('odata' string - no special char like {})	    |	({Slug} string if any)				|	(End '}')
                    // Reg:	$\{$			|	[^{}]*				                            |	((\{[^{}]*\})+[^{}]*)*				|	\}
                    // Ex:	${$				|	odata				                            |	...entityid eq '{slug}'&$select...	|	}
                    // Use cases mentioned in document: 
                    // ${anchor.<attribute_name>}
                    // ${ReconnectUrl{ReconnectID}}
                    // ${$session.visitorDevice}
                    let matches = input.match(new RegExp("\\{[^{}\"\']*\\}|\\{\\$[^{}]*((\\{[^{}]*\\})+[^{}]*)*\\}|\\$\{[^{}\"\']*\\}|\\$\{\\$[^{}]*((\\{[^{}]*\\})+[^{}]*)*\\}", "g"));
                    let slugCallbacks = [];
                    for (let index in matches) {
                        let param = matches[index];
                        let paramName;
                        if (param.startsWith(ProductivityMacros.SlugPrefix.SPLIT_BY_DOLLAR)) {
                            paramName = param.substr(2, param.length - 3);
                        }
                        else {
                            paramName = param.substr(1, param.length - 2);
                        }
                        if (paramVals.has(param)) {
                            continue;
                        }
                        paramVals.set(param, "");
                        try {
                            let val = "";
                            if (paramName.startsWith(ProductivityMacros.SlugPrefix.SPLIT_BY_DOLLAR) && !(paramName.toLowerCase().startsWith("$odata"))) {
                                let prefixes = paramName.split(ProductivityMacros.SlugPrefix.SPLIT_BY_DOT);
                                if (prefixes.length > 1) {
                                    var connector = Internal.ProductivityMacroOperation.macroConnectorTemplates.get(prefixes[0].substr(1).toLowerCase());
                                    if (!Internal.isNullOrUndefined(connector)) {
                                        slugCallbacks.push(connector.callback);
                                        paramName = stripSlugPrefix(paramName);
                                    }
                                }
                            }
                            if (!(paramName.toLowerCase().startsWith("$odata")) && slugCallbacks.length == 0) {
                                buildSlugCallbacks(slugCallbacks);
                            }
                            if (!Internal.isNullOrUndefined(templateParams) && templateParams.hasOwnProperty(scope) && templateParams[scope].hasOwnProperty(paramName)) {
                                val = templateParams[scope][paramName];
                            }
                            else if (!Internal.isNullOrUndefined(templateParams) && templateParams.hasOwnProperty(paramName)) {
                                val = templateParams[paramName];
                            }
                            else if (slugCallbacks.length > 0) {
                                let promise = new Promise(function (resolve, reject) {
                                    let executionpromise = slugCallbacks.reduce((accumulatorPromise, nextId) => {
                                        return accumulatorPromise.then(function (result) {
                                            if (result === undefined || result === "") {
                                                return Internal.resolveSlugInCallback(nextId, paramName);
                                            }
                                            else {
                                                return Promise.resolve(result);
                                            }
                                        }, function (error) {
                                            return reject(error);
                                        });
                                    }, Promise.resolve(""));
                                    executionpromise.then((result) => {
                                        paramVals.set(param, result);
                                        return resolve(paramVals.get(param));
                                    }, (error) => {
                                        return reject(error);
                                    });
                                });
                                paramResolvers.push(promise);
                            }
                            if (paramName.toLowerCase().startsWith("$odata")) {
                                //val is assumed to be of the format $odata.<entityLogicalName>.<entityAttributeName>.<query>
                                let queryParts = paramName.split(ProductivityMacros.SlugPrefix.SPLIT_BY_DOT);
                                if (queryParts.length < 4) {
                                    continue; //Invalid template parameter; ignore it
                                }
                                let promise = new Promise(function (resolve, reject) {
                                    let qPromises = [];
                                    qPromises.push(resolveTemplateString(queryParts[1], templateParams, scope));
                                    qPromises.push(resolveTemplateString(queryParts[2], templateParams, scope));
                                    for (let index = 3; index < queryParts.length - 1; index++) {
                                        queryParts[3] += "." + queryParts[index + 1];
                                    }
                                    qPromises.push(resolveTemplateString(queryParts[3], templateParams, scope));
                                    Promise.all(qPromises).then(function (results) {
                                        Xrm.WebApi.retrieveMultipleRecords(results[0], results[2], 1).then(function (result) {
                                            try {
                                                if (result.entities.length > 0) {
                                                    paramVals.set(param, result.entities[0][results[1]]);
                                                }
                                                else {
                                                    paramVals.set(param, "");
                                                }
                                                console.log("Fullfilled odata for " + param + " got value " + paramVals.get(param));
                                                return resolve(paramVals.get(param));
                                            }
                                            catch (error) {
                                                //TODO: Log telemetry
                                                console.log("Error resolving " + input + " : " + error);
                                                return reject(error);
                                            }
                                        }, function (error) {
                                            //TODO: log telemetry
                                            console.log("Error resolving " + input + " : " + error);
                                            return reject(error);
                                        });
                                    }, function (error) {
                                        console.log("Error resolving " + input + " : " + error);
                                        return reject(error);
                                    });
                                }).catch(function (error) {
                                    console.log("Error resolving " + param + " : " + error);
                                });
                                paramResolvers.push(promise);
                            }
                            else {
                                paramVals.set(param, val);
                            }
                        }
                        catch (error) {
                            //TODO: log telemetry
                            console.log("Error resolving " + input + " : " + error);
                        }
                    }
                    Promise.all(paramResolvers).then(function (result) {
                        let ret = input;
                        paramVals.forEach(function (val, key, map) {
                            ret = ret.split(key).join(val || "");
                        });
                        return resolve(ret);
                    }, function (error) {
                        //TODO: log telemetry
                        console.log("Error resolving " + input + " : " + error);
                        return reject(error);
                    });
                });
            }
            Internal.resolveTemplateString = resolveTemplateString;
            function isJsonString(str) {
                try {
                    JSON.parse(str);
                }
                catch (e) {
                    return false;
                }
                return true;
            }
            function buildSlugCallbacks(slugCallbacks) {
                var connector = Internal.ProductivityMacroOperation.macroConnectorTemplates.get("oc"); // Default callback
                if (!Internal.isNullOrUndefined(connector)) {
                    slugCallbacks.push(connector.callback);
                }
                Internal.ProductivityMacroOperation.macroConnectorTemplates.forEach((value, key) => {
                    if (key != "oc" && !Internal.isNullOrUndefined(value.callback)) {
                        slugCallbacks.push(value.callback);
                    }
                });
            }
            function resolveSlugInCallback(callback, paramName) {
                var slugPromise = new Promise((resolve, reject) => {
                    var callbackParams = stripCallbackParams(callback);
                    if (callbackParams.length == 2) {
                        var callbackFun = new Function(callbackParams[0], callbackParams[1], "return " + callback);
                    }
                    var executionContext = {};
                    callbackFun(executionContext, "{" + paramName + "}").then((res) => {
                        if (res["statusCode"] == 200) {
                            return resolve(res["result"]);
                        }
                        else {
                            //TODO: log telemetry
                            return resolve("");
                        }
                    }, function (error) {
                        return reject(error);
                    });
                });
                const promiseTimeout = function (ms, promise) {
                    // Create a promise that rejects in <ms> milliseconds
                    let timeout = new Promise((resolve, reject) => {
                        let id = setTimeout(() => {
                            clearTimeout(id);
                            //TODO: log telemetry
                            resolve("");
                        }, ms);
                    });
                    // Returns a race between our timeout and the passed in promise
                    return Promise.race([
                        promise,
                        timeout
                    ]);
                };
                return promiseTimeout(1000, slugPromise);
            }
            Internal.resolveSlugInCallback = resolveSlugInCallback;
            function stripSlugPrefix(param) {
                let splitTextArray = param.split(ProductivityMacros.SlugPrefix.SPLIT_BY_DOT);
                let slug = splitTextArray[0];
                return param.substr(slug.length + 1);
            }
            function stripCallbackParams(param) {
                var params = param.split(ProductivityMacros.SlugPrefix.SPLIT_BY_OPENING_BRACKET)[1];
                params = params.substr(0, params.length - 1);
                return params.split(ProductivityMacros.SlugPrefix.SPLIT_BY_COMMA);
            }
        })(Internal = ProductivityMacros.Internal || (ProductivityMacros.Internal = {}));
    })(ProductivityMacros = Microsoft.ProductivityMacros || (Microsoft.ProductivityMacros = {}));
})(Microsoft || (Microsoft = {}));
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
/// <reference path="../../../../../references/external/TypeDefinitions/lib.es6.d.ts" />
/// <reference path="Interfaces.ts" />
/// <reference path="Actions/IfAction.ts" />
/// <reference path="Actions/SetDefaultCallScriptAction.ts" />
/// <reference path="Actions/macroAction.ts" />
/// <reference path="../ProductivityMacroSlug.ts" />
var Microsoft;
(function (Microsoft) {
    var LogicAppExecutor;
    (function (LogicAppExecutor) {
        function getSortedActionsList(actionList) {
            //let actions = {} as Map<string, IActionItem>;
            let actions = [];
            for (const actionKey in actionList) {
                let action = {};
                action.name = actionKey;
                action.inputs = actionList[actionKey].inputs;
                action.type = actionList[actionKey].type;
                action.runAfter = actionList[actionKey].runAfter;
                action.actions = actionList[actionKey].actions;
                action.else = actionList[actionKey].else;
                action.expression = actionList[actionKey].expression;
                actions.push(action);
            }
            let map = new Map();
            let result = [];
            let visited = new Map();
            var dependecySortObj = {
                objectMap: map,
                visited: visited,
                result: result
            };
            actions.forEach(function (obj) {
                dependecySortObj.objectMap.set(obj.name, obj);
            });
            actions.forEach(function (obj) {
                if (!dependecySortObj.visited.get(obj.name)) {
                    sortUtil(obj, dependecySortObj);
                }
            });
            return dependecySortObj.result;
        }
        LogicAppExecutor.getSortedActionsList = getSortedActionsList;
        function sortUtil(obj, dependecySortObj) {
            dependecySortObj.visited.set(obj.name, true);
            Object.keys(obj.runAfter).forEach(function (action) {
                if (!dependecySortObj.visited.get(action)) {
                    sortUtil(dependecySortObj.objectMap.get(action), dependecySortObj);
                }
            });
            dependecySortObj.result.push(obj);
        }
        function getActionExecutorInstance(actionType) {
            switch (actionType) {
                case "If":
                    return LogicAppExecutor.IfAction.Instance;
                case "setcallscript":
                    return LogicAppExecutor.SetDefaultCallScriptAction.Instance;
                default:
                    return LogicAppExecutor.MacroAction.Instance;
            }
        }
        LogicAppExecutor.getActionExecutorInstance = getActionExecutorInstance;
        function resolveSlug(slug, stateParams) {
            if (typeof slug === 'string' || slug instanceof String) {
                if (slug.startsWith("@outputs")) {
                    slug = resolveActionInputFromPrevActionOutput(slug);
                }
                return Microsoft.ProductivityMacros.Internal.resolveTemplateString(slug, stateParams, "");
            }
            else {
                return Promise.resolve(slug);
            }
        }
        LogicAppExecutor.resolveSlug = resolveSlug;
        function resolveActionInputFromPrevActionOutput(input) {
            let matches = input.match(new RegExp("'(.*?)'", "g"));
            let prefix = matches[0];
            let attribute = matches[1];
            prefix = prefix.substr(1, prefix.length - 2);
            attribute = attribute.substr(1, attribute.length - 2);
            let inputSlug = "${" + prefix + "." + attribute + "}";
            return inputSlug;
        }
        LogicAppExecutor.resolveActionInputFromPrevActionOutput = resolveActionInputFromPrevActionOutput;
        function updateActionOutputInSessionContext(output, state) {
            if (output && output[Microsoft.ProductivityMacros.Constants.OutputResult]) {
                state.setStateParams(output[Microsoft.ProductivityMacros.Constants.OutputResult]);
            }
        }
        LogicAppExecutor.updateActionOutputInSessionContext = updateActionOutputInSessionContext;
    })(LogicAppExecutor = Microsoft.LogicAppExecutor || (Microsoft.LogicAppExecutor = {}));
})(Microsoft || (Microsoft = {}));
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
/// <reference path="../../../../../references/external/TypeDefinitions/lib.es6.d.ts" />
/// <reference path="Interfaces.ts" />
/// <reference path="LogicAppExecutorUtils.ts" />
/// <reference path="../MacroActionTemplatesInfra.ts" />
var Microsoft;
(function (Microsoft) {
    var LogicAppExecutor;
    (function (LogicAppExecutor) {
        function ExecuteLogicApp(logicAppJSONstring, sourceName) {
            return new Promise((resolve, reject) => {
                Microsoft.ProductivityMacros.Internal.ProductivityMacroOperation.InitMacroActionTemplates().then(function (templates) {
                    let parsedJson = JSON.parse(logicAppJSONstring);
                    let actions = parsedJson.definition.actions;
                    var state = new Microsoft.ProductivityMacros.Internal.ProductivityMacroState();
                    var runHistoryData = {};
                    if (!Microsoft.ProductivityMacros.Internal.isNullOrUndefined(sourceName)) {
                        Microsoft.ProductivityMacros.RunHistory.initializeRunHistoryJSON(runHistoryData, logicAppJSONstring, sourceName);
                    }
                    let executeActionsPromise = ExecuteActions(actions, state, runHistoryData).then(function (result) {
                        console.log(result);
                        return (result);
                    }, function (error) {
                        reject(error);
                    });
                    executeActionsPromise.then(function (success) {
                        if (!Microsoft.ProductivityMacros.Internal.isNullOrUndefined(sourceName)) {
                            var status = Microsoft.ProductivityMacros.Constants.StatusSucceded;
                            if (Microsoft.ProductivityMacros.Internal.isNullOrUndefined(success)) {
                                status = Microsoft.ProductivityMacros.Constants.StatusFailed;
                            }
                            Microsoft.ProductivityMacros.RunHistory.createRunHistoryRecord(runHistoryData, status, sourceName);
                        }
                        console.log(success);
                        resolve(success);
                    }, function (error) {
                        if (!Microsoft.ProductivityMacros.Internal.isNullOrUndefined(sourceName)) {
                            var status = Microsoft.ProductivityMacros.Constants.StatusFailed;
                            Microsoft.ProductivityMacros.RunHistory.createRunHistoryRecord(runHistoryData, status, sourceName);
                        }
                        reject(error);
                    });
                }, function (error) {
                    reject(error);
                });
            });
        }
        LogicAppExecutor.ExecuteLogicApp = ExecuteLogicApp;
        function ExecuteActions(actions, state, runHistoryData) {
            return new Promise((resolve, reject) => {
                let sortedActions = LogicAppExecutor.getSortedActionsList(actions);
                if (!Microsoft.ProductivityMacros.Internal.isNullOrUndefined(runHistoryData.id) && Microsoft.ProductivityMacros.Internal.isNullOrUndefined(runHistoryData.definition.actions)) {
                    runHistoryData.definition.actions = {};
                    Microsoft.ProductivityMacros.RunHistory.setActionsInJSON(runHistoryData.definition.actions, sortedActions, runHistoryData.id);
                }
                let executeActionsPromise = sortedActions.reduce((accumulatorPromise, nextId) => {
                    return accumulatorPromise.then(function (result) {
                        return LogicAppExecutor.getActionExecutorInstance(nextId.type).ExecuteAction(nextId, state, runHistoryData);
                    }, function (error) {
                        reject(error);
                    });
                }, Promise.resolve());
                executeActionsPromise.then(function (success) {
                    return resolve(success);
                }, function (error) {
                    reject(error);
                });
            });
        }
        LogicAppExecutor.ExecuteActions = ExecuteActions;
    })(LogicAppExecutor = Microsoft.LogicAppExecutor || (Microsoft.LogicAppExecutor = {}));
})(Microsoft || (Microsoft = {}));
//# sourceMappingURL=msdyn_LogicAppExecutor_v2.js.map