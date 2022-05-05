var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// This file was forked from CRM main repository, v8.1 branch
//---------------------------------------------------------------------------------------------------------------
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    var ErrorHandling;
    (function (ErrorHandling) {
        'use strict';
        /**
         * List of error codes used in custom controls.
         */
        var ErrorCode = (function () {
            function ErrorCode() {
            }
            // Value out of range id from the MobileClientResources.xml file
            ErrorCode.ValueOutOfRangeId = "CustomControl_OutOfRange_Error";
            // Value invalid input mask id from the MobileClientResources.xml file
            ErrorCode.InvalidInputMaskId = "CustomControl_InvalidInput_Error";
            // Maximum length exceeded id from the MobileClientResources.xml file
            ErrorCode.MaxLengthExceededId = "CustomControl_MaxLengthExceeded_Error";
            return ErrorCode;
        }());
        ErrorHandling.ErrorCode = ErrorCode;
    })(ErrorHandling = MktSvcCommon.ErrorHandling || (MktSvcCommon.ErrorHandling = {}));
})(MktSvcCommon || (MktSvcCommon = {}));
// This file was forked from CRM main repository, v8.1 branch
//---------------------------------------------------------------------------------------------------------------
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    var ErrorHandling;
    (function (ErrorHandling) {
        'use strict';
        /**
         * Handles the notification of custom control errors to the user
         * @remark the notifications come from XRM and are documented here:
         * https://msdn.microsoft.com/en-us/library/gg334266(v=crm.6).aspx#BKMK_notification
         */
        var NotificationHandler = (function () {
            /**
             * Builds the notification handler
             * @param setNotification: delegate for setting the notification
             * @param clearNotification: delegate for clearing the notification
             */
            function NotificationHandler(setNotification, clearNotification) {
                this.setNotification = setNotification;
                this.clearNotification = clearNotification;
                this.setNotification = setNotification;
                this.clearNotification = clearNotification;
            }
            /**
             * Displays the notification
             * @param notification message
             * @param notification id
            */
            NotificationHandler.prototype.notify = function (message, id) {
                this.setNotification(message, id);
            };
            /**
             * Clears the notification
             * @param notification id
             */
            NotificationHandler.prototype.clear = function (id) {
                this.clearNotification(id);
            };
            return NotificationHandler;
        }());
        ErrorHandling.NotificationHandler = NotificationHandler;
    })(ErrorHandling = MktSvcCommon.ErrorHandling || (MktSvcCommon.ErrorHandling = {}));
})(MktSvcCommon || (MktSvcCommon = {}));
// This file was forked from CRM main repository, v8.1 branch
//---------------------------------------------------------------------------------------------------------------
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    var ErrorHandling;
    (function (ErrorHandling) {
        'use strict';
        /**
         * Handles code exceptions
         */
        var ExceptionHandler = (function () {
            function ExceptionHandler() {
            }
            /**
             * Displays the exception message
             * @param error message
             */
            ExceptionHandler.throwException = function (message) {
                throw (message);
            };
            return ExceptionHandler;
        }());
        ErrorHandling.ExceptionHandler = ExceptionHandler;
    })(ErrorHandling = MktSvcCommon.ErrorHandling || (MktSvcCommon.ErrorHandling = {}));
})(MktSvcCommon || (MktSvcCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var Mscrm;
(function (Mscrm) {
    'use strict';
    (function (UpdateEventType) {
        UpdateEventType[UpdateEventType["DataSet"] = 0] = "DataSet";
        UpdateEventType[UpdateEventType["Layout"] = 1] = "Layout";
        UpdateEventType[UpdateEventType["Activation"] = 2] = "Activation";
    })(Mscrm.UpdateEventType || (Mscrm.UpdateEventType = {}));
    var UpdateEventType = Mscrm.UpdateEventType;
    /**
     * Allows a control to guard itself against (multiple) different update events coming from the infra.
     * The default configuration is:
     *   - DataSet: Not ignored
     *   - Layout: Not ignored
     *   - Activation: Ignored
     */
    var UpdateEvents = (function () {
        function UpdateEvents() {
            this.ignoredEvents = {};
            this.ignoredEvents[Mscrm.UpdateEventType.DataSet] = false;
            this.ignoredEvents[Mscrm.UpdateEventType.Layout] = false;
            this.ignoredEvents[Mscrm.UpdateEventType.Activation] = true;
        }
        /**
         * Returns the Mscrm.UpdateEventType enum that is mapped to a given event type code
         * generated by the infra. Returns null if not the code is not found.
         */
        UpdateEvents.getEventType = function (event) {
            switch (event) {
                case "dataset":
                    return Mscrm.UpdateEventType.DataSet;
                case "layout":
                    return Mscrm.UpdateEventType.Layout;
                case "activation":
                    return Mscrm.UpdateEventType.Activation;
                default:
                    return null;
            }
        };
        /**
         * Returns the Mscrm.UpdateEventType enum that is mapped to a given event type code
         * generated by the infra. Returns null if not the code is not found.
         */
        UpdateEvents.getEventCode = function (event) {
            switch (event) {
                case Mscrm.UpdateEventType.DataSet:
                    return "dataset";
                case Mscrm.UpdateEventType.Layout:
                    return "layout";
                case Mscrm.UpdateEventType.Activation:
                    return "activation";
                default:
                    return null;
            }
        };
        /**
         * The event provided in the parameters will be marked as ignorable if and only if
         * shouldIgnore is set to true.
         *
         * @param event {Mscrm.UpdateEventType}: The event to be configured
         * @param shouldIgnore {boolean}: true if the event can be ignored; false otherwise.
         */
        UpdateEvents.prototype.shouldIgnoreEvent = function (event, shouldIgnore) {
            if (!MktSvc.Controls.Common.Object.isNullOrUndefined(event)) {
                this.ignoredEvents[event] = shouldIgnore;
            }
        };
        /**
         * Returns true if and only if the event provided may be ignored.
         *
         * @param event {Mscrm.UpdateEventType}: The event to be checked.
         */
        UpdateEvents.prototype.isIgnoredEvent = function (event) {
            if (!MktSvc.Controls.Common.Object.isNullOrUndefined(event)) {
                return this.ignoredEvents[event];
            }
            return false;
        };
        /**
         * Returns true if and only if the updatedProperties array contains the event provided.
         *
         * @param updatedProperties {string[]}: The updated properties array provided by the infra.
         * @param event {Mscrm.UpdateEventType}: The event to be located in the updatedProperties array.
         */
        UpdateEvents.hasEvent = function (updatedProperties, event) {
            var eventCode = UpdateEvents.getEventCode(event);
            return new MktSvc.Controls.Common.ArrayQuery(updatedProperties).contains(function (item) {
                return item == eventCode;
            });
        };
        return UpdateEvents;
    }());
    Mscrm.UpdateEvents = UpdateEvents;
})(Mscrm || (Mscrm = {}));
// This file was forked from CRM main repository, v8.1 branch
//---------------------------------------------------------------------------------------------------------------
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="CommonReferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    'use strict';
    var AttributeConstants = (function () {
        function AttributeConstants() {
        }
        /** input node checked attribute */
        AttributeConstants.Checked = "checked";
        /** input node readonly attribute**/
        AttributeConstants.ReadOnly = "readonly";
        /** control disabled attribute */
        AttributeConstants.Disabled = "disabled";
        /** control style attribute */
        AttributeConstants.Style = "style";
        /** control framework layout update attribute */
        AttributeConstants.Layout = "layout";
        return AttributeConstants;
    }());
    MktSvcCommon.AttributeConstants = AttributeConstants;
})(MktSvcCommon || (MktSvcCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../commonreferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    var AssistEdit;
    (function (AssistEdit) {
        'use strict';
    })(AssistEdit = MktSvcCommon.AssistEdit || (MktSvcCommon.AssistEdit = {}));
})(MktSvcCommon || (MktSvcCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../commonreferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    var AssistEdit;
    (function (AssistEdit) {
        'use strict';
    })(AssistEdit = MktSvcCommon.AssistEdit || (MktSvcCommon.AssistEdit = {}));
})(MktSvcCommon || (MktSvcCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../commonreferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    var AssistEdit;
    (function (AssistEdit) {
        'use strict';
    })(AssistEdit = MktSvcCommon.AssistEdit || (MktSvcCommon.AssistEdit = {}));
})(MktSvcCommon || (MktSvcCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../commonreferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    var AssistEdit;
    (function (AssistEdit) {
        'use strict';
    })(AssistEdit = MktSvcCommon.AssistEdit || (MktSvcCommon.AssistEdit = {}));
})(MktSvcCommon || (MktSvcCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../commonreferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    var AssistEdit;
    (function (AssistEdit) {
        'use strict';
    })(AssistEdit = MktSvcCommon.AssistEdit || (MktSvcCommon.AssistEdit = {}));
})(MktSvcCommon || (MktSvcCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../commonreferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    var AssistEdit;
    (function (AssistEdit) {
        'use strict';
    })(AssistEdit = MktSvcCommon.AssistEdit || (MktSvcCommon.AssistEdit = {}));
})(MktSvcCommon || (MktSvcCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../commonreferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    var AssistEdit;
    (function (AssistEdit) {
        'use strict';
        var AssistEditEventConstants = (function () {
            function AssistEditEventConstants() {
            }
            AssistEditEventConstants.assistEditFinalItemSelected = "assistEditFinalItemSelected";
            AssistEditEventConstants.assistEditItemSelected = "assistEditItemSelected";
            AssistEditEventConstants.assistEditClosed = "assistEditClosed";
            AssistEditEventConstants.assistEditCommandExecuted = "assistEditCommandExecuted";
            AssistEditEventConstants.assistEditEnterKeyDown = "assistEditEnterKeyDown";
            AssistEditEventConstants.inputAssistEditFocusout = "inputAssistEditFocusout";
            AssistEditEventConstants.assistEditOptionFocused = "assistEditOptionFocused";
            AssistEditEventConstants.assistEditDataSourceUpdated = "assistEditDataSourceUpdated";
            return AssistEditEventConstants;
        }());
        AssistEdit.AssistEditEventConstants = AssistEditEventConstants;
    })(AssistEdit = MktSvcCommon.AssistEdit || (MktSvcCommon.AssistEdit = {}));
})(MktSvcCommon || (MktSvcCommon = {}));
/// <reference path="../commonreferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    var AssistEdit;
    (function (AssistEdit) {
        'use strict';
    })(AssistEdit = MktSvcCommon.AssistEdit || (MktSvcCommon.AssistEdit = {}));
})(MktSvcCommon || (MktSvcCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../commonreferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    var AssistEdit;
    (function (AssistEdit) {
        'use strict';
        /**
         * Class responsible for rendering and managing the assist edit input span
         */
        var AssistEditInputSpanRenderer = (function () {
            function AssistEditInputSpanRenderer(selectionManager) {
                this.assistEditStyle = "/*Assist edit input style*/ assistEditSelectedTextContainer, .assistEditInputWrapper, .assistEditInput {height: 100%;display: inline-block;} .assistEditInput { background-color: #bec9dd; } .assistEditActivePlaceholder { min-width:10px; background-color: #bec9dd; } .assistEditSelectedTextContainer { background-color: #edf0f7; } .assistEditInput { min-width: 1px; }  .assistEditInput:focus { outline: 0; }";
                this.selectionManager = selectionManager;
            }
            AssistEditInputSpanRenderer.prototype.setup = function (eventBroker, focusOutHandler) {
                this.eventBroker = eventBroker;
                this.focusOutHandler = focusOutHandler;
            };
            /**
            * Renders the input span on the selected block
            * @param selectedBlock The focused block
            */
            AssistEditInputSpanRenderer.prototype.render = function (selectedBlock) {
                // Get the current document from the selected block and the selection
                this.currentDocument = selectedBlock[0].ownerDocument;
                this.selectionManager.setup(this.currentDocument);
                if (!this.selectionManager.isCaretInsideBlock(selectedBlock[0])) {
                    this.selectionManager.setCaretAtEnd(selectedBlock);
                }
                var selection = this.currentDocument.getSelection();
                this.selectionRange = selection.getRangeAt(0);
                var selectedText = this.selectionRange.toString();
                var assitEditInput = this.attachAssistEditInputSpan(selectedText);
                // Add assist edit style
                var assistEditStyle = $("<style>")
                    .attr("rel", "stylesheet")
                    .attr("type", "text/css")
                    .text(this.assistEditStyle);
                this.currentDocument.head.appendChild(assistEditStyle[0]);
                assitEditInput.on('focusout', this.focusOutHandler);
                return assitEditInput;
            };
            /**
            * Appends the final selected item of the assist edit to the text block
            * @param eventArgs Arguments containing the final item selected from the assist edit
            */
            AssistEditInputSpanRenderer.prototype.insertFinalSelectedItem = function (eventArgs) {
                this.replaceInputSpanWithText(eventArgs.value);
            };
            /**
            * Appends the selected item of the assist edit to the text block
            * @param eventArgs Arguments containing the item selected from the assist edit
            */
            AssistEditInputSpanRenderer.prototype.updateSelectedValue = function (value) {
                var assistEditSpanInput = this.getByClassInCurrentDocument(AssistEdit.AssistEditConstants.assistEditInputSpanClassName);
                assistEditSpanInput.off('focusout', this.focusOutHandler);
                if (assistEditSpanInput.length > 0) {
                    assistEditSpanInput.removeAttr('aria-activedescendant');
                    value = MktSvcCommon.HtmlEncode.encode(value);
                    value = this.setActivePlaceholder(value);
                    var selectedTextContainer = this.getByClassInCurrentDocument(AssistEdit.AssistEditConstants.assistEditSelectedTextContainer);
                    assistEditSpanInput.appendTo(selectedTextContainer.parent());
                    selectedTextContainer.empty();
                    selectedTextContainer.append($('<span></span>').html(value));
                    assistEditSpanInput.appendTo(selectedTextContainer.find("." + AssistEdit.AssistEditConstants.assistEditActivePlaceholder));
                    assistEditSpanInput.text(MktSvc.Controls.Common.String.Empty);
                    var inputSpanWrapper = assistEditSpanInput.parent();
                    this.scrollToViewElement(inputSpanWrapper);
                    this.addBrForFirefoxBug(assistEditSpanInput);
                    assistEditSpanInput.focus();
                }
                assistEditSpanInput.on('focusout', this.focusOutHandler);
            };
            /**
            * Appends the raw item of the assist edit to the text block
            */
            AssistEditInputSpanRenderer.prototype.insertRawItem = function () {
                this.replaceInputSpanWithText(this.getByClassInCurrentDocument(AssistEdit.AssistEditConstants.assistEditSelectedTextContainer).text());
            };
            AssistEditInputSpanRenderer.prototype.cleanup = function (blockElements) {
                blockElements.find("." + AssistEdit.AssistEditConstants.assistEditEmptyPlaceholderClassName).remove();
                blockElements.find("." + AssistEdit.AssistEditConstants.assistEditInputWrapperClassName).remove();
            };
            AssistEditInputSpanRenderer.prototype.dispose = function () {
                if (!MktSvc.Controls.Common.Object.isNullOrUndefined(this.onBlurEventHandler)) {
                    this.currentDocument.removeEventListener('blur', this.onBlurEventHandler, true);
                }
                this.getByClassInCurrentDocument(AssistEdit.AssistEditConstants.assistEditInputWrapperClassName).remove();
                this.eventBroker.unsubscribe(AssistEdit.AssistEditEventConstants.assistEditOptionFocused, this.assistEditFocusedOptionDelegate);
            };
            AssistEditInputSpanRenderer.prototype.setActivePlaceholder = function (value) {
                var activePlaceholderRegex = /\[([^\]]+)\]/;
                var entityLogicalNameMatches = activePlaceholderRegex.exec(value);
                if (entityLogicalNameMatches != null && entityLogicalNameMatches.length) {
                    return value.replace(entityLogicalNameMatches[0], "<span class=\"" + AssistEdit.AssistEditConstants.assistEditActivePlaceholder + "\"></span>");
                }
                return value;
            };
            AssistEditInputSpanRenderer.prototype.replaceInputSpanWithText = function (value) {
                this.getByClassInCurrentDocument(AssistEdit.AssistEditConstants.assistEditInputSpanClassName).off('focusout');
                var assistEditInputWrapper = this.getByClassInCurrentDocument(AssistEdit.AssistEditConstants.assistEditInputWrapperClassName);
                // Focus the editable text block where assist edit was opened
                var closestEditableAncestor = assistEditInputWrapper.parent().closest('[contenteditable]');
                closestEditableAncestor.focus();
                this.scrollToViewTheInsertedText(value);
                var textElement = this.currentDocument.createTextNode(value);
                assistEditInputWrapper.replaceWith(textElement);
                if (this.selectionManager.isSelectionInDocument()) {
                    this.selectionManager.setCaretAtEndOfElement(textElement);
                }
            };
            AssistEditInputSpanRenderer.prototype.attachAssistEditInputSpan = function (selectedText) {
                var _this = this;
                // Set the wrapper to contenteditable to false in order to make the spanInput focusable
                var noneditableContainer = $(this.currentDocument.createElement("span"))
                    .addClass(AssistEdit.AssistEditConstants.assistEditInputWrapperClassName)
                    .attr('contenteditable', 'false');
                $('<span></span>')
                    .addClass(AssistEdit.AssistEditConstants.assistEditSelectedTextContainer)
                    .attr('contenteditable', 'false')
                    .appendTo(noneditableContainer);
                var spanInput = $('<span></span>')
                    .addClass(AssistEdit.AssistEditConstants.assistEditInputSpanClassName)
                    .attr('contenteditable', 'true')
                    .appendTo(noneditableContainer)
                    .text(selectedText);
                this.ariaSetup(spanInput);
                this.selectionManager.insertElementInSelection(noneditableContainer[0], this.selectionRange);
                this.focusAssistEditSpan(spanInput);
                this.addBrForFirefoxBug(spanInput);
                var setAriaPropertiesHandler = function (eventArgs) {
                    _this.setAriaProperties(eventArgs.value, spanInput);
                };
                this.assistEditFocusedOptionDelegate = this.eventBroker.subscribe(AssistEdit.AssistEditEventConstants.assistEditOptionFocused, setAriaPropertiesHandler);
                return spanInput;
            };
            AssistEditInputSpanRenderer.prototype.addBrForFirefoxBug = function (spanInput) {
                // Firefox issue. If the span is empty the cursor will be displayed one line above the text
                // TODO: find a more suitable solution
                if (this.isFirefox()) {
                    $('<br/>')
                        .addClass(AssistEdit.AssistEditConstants.assistEditEmptyPlaceholderClassName)
                        .appendTo(spanInput);
                }
            };
            AssistEditInputSpanRenderer.prototype.scrollToViewTheInsertedText = function (value) {
                if (MktSvc.Controls.Common.Object.isNullOrUndefined(this.currentDocument)) {
                    return;
                }
                // Append the text value wrapped in a span to the DOM to get the actual width based on the font style/size inherited from the parent.
                var assistEditInputWrapper = this.getByClassInCurrentDocument(AssistEdit.AssistEditConstants.assistEditInputWrapperClassName);
                var textElement = $(this.currentDocument.createElement("span")).text(value);
                assistEditInputWrapper.replaceWith(textElement);
                this.scrollToViewElement(textElement);
                // Remove the temporary span element
                textElement.replaceWith(assistEditInputWrapper);
            };
            AssistEditInputSpanRenderer.prototype.scrollToViewElement = function (element) {
                var parent = element.parent();
                if (parent.length === 0) {
                    return;
                }
                var width = element.width();
                var left = element.position().left - parent.position().left;
                var outerLeft = width + left;
                var parentWidht = parent.width();
                if (outerLeft > parentWidht) {
                    parent.scrollLeft(parent.scrollLeft() + (outerLeft - parentWidht));
                }
            };
            AssistEditInputSpanRenderer.prototype.focusAssistEditSpan = function (spanInput) {
                var _this = this;
                // Prevent event propagation so that the ckEditor toolbar doesn't get hidden 
                this.onBlurEventHandler = function (event) {
                    _this.currentDocument.removeEventListener('blur', _this.onBlurEventHandler, true);
                    event.stopPropagation();
                    event.preventDefault();
                };
                this.currentDocument.addEventListener('blur', this.onBlurEventHandler, true);
                this.selectionManager.setCaretAtEnd(spanInput);
            };
            AssistEditInputSpanRenderer.prototype.setAriaProperties = function (focusedOptionId, assistEditSpan) {
                assistEditSpan.attr('aria-activedescendant', focusedOptionId);
            };
            AssistEditInputSpanRenderer.prototype.ariaSetup = function (spanInput) {
                var childListBoxId = MktSvc.Controls.Common.UniqueId.generate('listBox');
                spanInput.attr('role', 'combobox');
                spanInput.attr('aria-autocomplete', 'both');
                spanInput.attr('aria-haspopup', 'true');
                spanInput.attr('aria-expanded', 'true');
                spanInput.attr('aria-controls', childListBoxId);
                spanInput.attr('aria-owns', childListBoxId);
                spanInput.attr('aria-activedescendant', childListBoxId + '_0');
            };
            AssistEditInputSpanRenderer.prototype.getByClassInCurrentDocument = function (className) {
                return $(this.currentDocument).find("." + className);
            };
            /**
             * Checks if the browser used is firefox.
             **/
            AssistEditInputSpanRenderer.prototype.isFirefox = function () {
                return (navigator.userAgent.indexOf('Firefox') !== -1 && navigator.userAgent.indexOf('Trident/') === -1);
            };
            return AssistEditInputSpanRenderer;
        }());
        AssistEdit.AssistEditInputSpanRenderer = AssistEditInputSpanRenderer;
    })(AssistEdit = MktSvcCommon.AssistEdit || (MktSvcCommon.AssistEdit = {}));
})(MktSvcCommon || (MktSvcCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="commonreferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    'use strict';
    /**
     * The selection manager.
     */
    var SelectionManager = (function () {
        function SelectionManager() {
        }
        /*
        * Sets the selection manger
        */
        SelectionManager.prototype.setup = function (currentDocument) {
            this.currentDocument = currentDocument;
        };
        /*
        * Inserts the element in the seleciton range
        */
        SelectionManager.prototype.insertElementInSelection = function (element, selectionRange) {
            selectionRange.deleteContents();
            selectionRange.insertNode(element);
        };
        /*
        * Checks wheter the selection is on the block
        */
        SelectionManager.prototype.isCaretInsideBlock = function (block) {
            if (MktSvc.Controls.Common.Object.isNullOrUndefined(this.currentDocument)) {
                return false;
            }
            var isCaretInside = false;
            if (this.isSelectionInDocument()) {
                var selectionStartContainer = this.currentDocument.getSelection().getRangeAt(0).startContainer;
                isCaretInside = ($.contains(block, selectionStartContainer) || selectionStartContainer === block);
            }
            return isCaretInside;
        };
        SelectionManager.prototype.isSelectionInDocument = function () {
            return this.currentDocument.getSelection().rangeCount > 0;
        };
        /*
        * Sets the caret at the end of the element
        */
        SelectionManager.prototype.setCaretAtEnd = function (element) {
            element.focus();
            if (this.isSelectionInDocument()) {
                this.setCaretAtEndOfElement(element[0]);
            }
        };
        /*
        * Sets the caret at the end of the element
        */
        SelectionManager.prototype.setCaretAtEndOfElement = function (element) {
            if (MktSvc.Controls.Common.Object.isNullOrUndefined(this.currentDocument)) {
                return;
            }
            var selection = this.currentDocument.getSelection();
            var range = this.currentDocument.createRange();
            range.selectNodeContents(element);
            range.collapse(false);
            selection.removeAllRanges();
            selection.addRange(range);
        };
        SelectionManager.prototype.selectElement = function (element) {
            var selectedText = element[0];
            this.selectTextNode(selectedText);
        };
        SelectionManager.prototype.selectTextNode = function (node) {
            if (MktSvc.Controls.Common.Object.isNullOrUndefined(this.currentDocument)) {
                return;
            }
            var selection = this.currentDocument.getSelection();
            selection.removeAllRanges();
            var selectionRange = this.currentDocument.createRange();
            selectionRange.selectNode(node);
            selection.addRange(selectionRange);
        };
        return SelectionManager;
    }());
    MktSvcCommon.SelectionManager = SelectionManager;
})(MktSvcCommon || (MktSvcCommon = {}));
// This file was forked from CRM main repository, v8.1 branch
//---------------------------------------------------------------------------------------------------------------
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="CommonReferences.ts" />
var MscrmControls;
(function (MscrmControls) {
    var Common;
    (function (Common) {
        'use strict';
        (function (ControlState) {
            ControlState[ControlState["Disabled"] = 0] = "Disabled";
            ControlState[ControlState["Enabled"] = 1] = "Enabled";
        })(Common.ControlState || (Common.ControlState = {}));
        var ControlState = Common.ControlState;
    })(Common = MscrmControls.Common || (MscrmControls.Common = {}));
})(MscrmControls || (MscrmControls = {}));
// This file was forked from CRM main repository, v9.0 branch
//---------------------------------------------------------------------------------------------------------------
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="CommonReferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    'use strict';
    var CommonControl = (function () {
        /**
         * Empty constructor.
         */
        function CommonControl() {
            // A variable to distinguish when focusing with tab key or mouse
            this.lastKeyPress = true;
            this.isInitialized = false;
            this.isEnabled = false;
            this.shouldPreventMultipleEventTypes = true;
            this.isInReadMode = true;
            this.updateEvents = new Mscrm.UpdateEvents();
        }
        Object.defineProperty(CommonControl.prototype, "isControlInitialized", {
            /**
             * Gets a value indicating if the control was initialized.
             */
            get: function () {
                return this.isInitialized;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Initializes the control. This function will receive the HTML Div element that will contain your custom control
         * as well as a function to notify the infrastructure that your outputs have changed and that it should call getOutputs()
         * @param context The "Input Bag" containing the parameters and other control metadata.
         * @param notifyOutputChanged A Callback to notify the infrastructure to read the outputs
         * @param state The control state.
         * @param container The HTML Element that will contain the control
         */
        CommonControl.prototype.init = function (context, notifyOutputChanged, state, container) {
            if (MktSvc.Controls.Common.Object.isNullOrUndefined(container)) {
                MktSvcCommon.ErrorHandling.ExceptionHandler.throwException(CommonControl.NullOrUndefinedInitContainer);
            }
            if (MktSvc.Controls.Common.Object.isNullOrUndefined(notifyOutputChanged)) {
                MktSvcCommon.ErrorHandling.ExceptionHandler.throwException(CommonControl.NullOrUndefinedInitNotifyOutputChangedDelegate);
            }
            if (this.isControlInitialized) {
                return;
            }
            this.container = container;
            this.notifyOutputChanged = notifyOutputChanged;
            this.disablePanoramaScroll = context.utils.disablePanoramaScroll;
            this.initializeControl(context, state);
        };
        /**
         * Updates the control with data from the a bag of values currently assigned to the control's manifest parameters
         * @param context The bag of values described above
         */
        CommonControl.prototype.updateView = function (context) {
            if (this.shouldIgnoreUpdate(context)) {
                return;
            }
            this.throwIfPropertyBagNotValid(context);
            if (!this.isInitialized) {
                MktSvcCommon.ErrorHandling.ExceptionHandler.throwException(CommonControl.UninitializedErrorMessage);
            }
            this.handleEditToReadModeTransition(context);
            this.isEnabled = this.isControlEnabled(context);
            this.updateCore(context);
            if (context.mode.isRead || context.mode.isPreview || context.mode.isControlDisabled) {
                this.renderReadMode(context);
            }
            else {
                this.renderEditMode(context);
            }
        };
        /**
         * @returns The a bag of output values to pass to the infrastructure
         */
        CommonControl.prototype.getOutputs = function () {
            if (!this.isControlInitialized) {
                MktSvcCommon.ErrorHandling.ExceptionHandler.throwException(CommonControl.UninitializedControl);
            }
            return this.getOutputsCore();
        };
        /**
         * Event handler called when the user triggers a navigation event.
         */
        CommonControl.prototype.onPreNavigation = function () {
            return;
        };
        /**
         * This function destroys the control and cleans up
         */
        CommonControl.prototype.destroy = function () {
            if (this.isControlInitialized) {
                this.eventGuard.destroy();
                this.destroyCore();
            }
            this.cleanup();
        };
        /**
         * Create a wrapper container for the control.
         * @remark this contains the common controls class name
         * @param additional, more specific class name
         */
        CommonControl.prototype.createWrapperContainer = function (className, isRtl) {
            if (className === void 0) { className = ""; }
            if (isRtl === void 0) { isRtl = false; }
            var wrapperContainer = document.createElement("div");
            wrapperContainer.className = MktSvcCommon.CommonControl.ClassName;
            wrapperContainer.className += className === "" ? "" : " " + className;
            if (MktSvc.Controls.Common.Object.isNullOrUndefined(this.container)) {
                MktSvcCommon.ErrorHandling.ExceptionHandler.throwException(MktSvcCommon.CommonControl.NullOrUndefinedInitContainer);
            }
            if (isRtl) {
                wrapperContainer.className += " " + MktSvcCommon.CommonControl.ClassRtl;
            }
            this.container.appendChild(wrapperContainer);
            return wrapperContainer;
        };
        /**
         * Handles control specific initialization.
         * Method should be overridden in the controls specialized classes.
         * @params context The "Input Bag" containing the parameters and other control metadata.
         */
        CommonControl.prototype.initCore = function (context, state) {
            MktSvcCommon.ErrorHandling.ExceptionHandler.throwException(MktSvc.Controls.Common.String.Format(CommonControl.MethodNotOverridenFormat, "initCore"));
        };
        /**
         * Handles control specific update.
         * Method should be overridden in the controls specialized classes.
         * @params context The "Input Bag" containing the parameters and other control metadata.
         */
        CommonControl.prototype.updateCore = function (context) {
            MktSvcCommon.ErrorHandling.ExceptionHandler.throwException(MktSvc.Controls.Common.String.Format(CommonControl.MethodNotOverridenFormat, "updateCore"));
        };
        /**
         * Handles control specific destruction.
         */
        CommonControl.prototype.destroyCore = function () {
            MktSvcCommon.ErrorHandling.ExceptionHandler.throwException(MktSvc.Controls.Common.String.Format(CommonControl.MethodNotOverridenFormat, "destroyCore"));
        };
        /**
         * Handles read mode rendering.
         * Method should be overridden in the controls specialized classes.
         * @params context The "Input Bag" containing the parameters and other control metadata.
         */
        CommonControl.prototype.renderReadMode = function (context) {
            this.shouldNotifyOutputChanged = false;
        };
        /**
         * Handles edit mode rendering.
         * Method should be overridden in the controls specialized classes.
         * @params context The "Input Bag" containing the parameters and other control metadata.
         */
        CommonControl.prototype.renderEditMode = function (context) {
            this.shouldNotifyOutputChanged = false;
            // When transitioning from read mode, add the panorama events handlers and disable the transition click
            if (this.isInReadMode) {
                if (this.preventEditModePanoramaEvents) {
                    this.removePanoramaEventsHandlers();
                    this.addPanoramaEventsHandlers();
                }
                this.eventGuard.preventClicksUntilUserInteracted();
            }
            this.isInReadMode = false;
        };
        /**
         * Method should be overridden in the controls specialized classes.
         */
        CommonControl.prototype.getOutputsCore = function () {
            MktSvcCommon.ErrorHandling.ExceptionHandler.throwException(MktSvc.Controls.Common.String.Format(CommonControl.MethodNotOverridenFormat, "getOutputsCore"));
            return null;
        };
        /**
         * Notifies output changed only if the control is enabled or in read/preview mode.
         */
        CommonControl.prototype.notifyEnabledControlOutputChanged = function () {
            if (this.isEnabled) {
                // if (this.shouldNotifyOutputChanged) {
                if (true){
                    this.notifyOutputChanged();
                }
            }
        };
        /**
         * Checks whether the control is enabled for changed output notifications.
         * @params context The "Input Bag" containing the parameters and other control metadata.
         */
        CommonControl.prototype.isControlEnabled = function (context) {
            return !context.mode.isRead && !context.mode.isPreview && !context.mode.isControlDisabled;
        };
        /**
         * Checks if the control's bound property is null.
         * Method should be overridden in the controls specialized classes.
         * @params context The "Input Bag" containing the parameters and other control metadata.
         * @returns true if the bound property is null, false otherwise.
         */
        CommonControl.prototype.showDefaultLabelCore = function (context) {
            return false;
        };
        /**
        * Toggles the container visibility depending on the param
        * @param value - truth value for showing/hiding the container
        * @remark if the control wrapper container exists, it will show/hide that one, else it will show/hide the parent container
        */
        CommonControl.prototype.toggleContainerVisibility = function (value) {
            if (MktSvc.Controls.Common.Object.isNullOrUndefined(this.controlWrapperContainer)) {
                value ? $(this.container).show() : $(this.container).hide();
            }
            else {
                value ? $(this.controlWrapperContainer).show() : $(this.controlWrapperContainer).hide();
            }
        };
        /**
        * Handles the internal implementation of the control initialization.
        * @params context The "Input Bag" containing the parameters and other control metadata.
        * @param state The control state.
        */
        CommonControl.prototype.initializeControl = function (context, state) {
            try {
                this.throwIfPropertyBagNotValid(context);
                this.notificationHandler = new MktSvcCommon.ErrorHandling.NotificationHandler(context.utils.setNotification, context.utils.clearNotification);
                this.htmlEncode = context.utils.crmHtmlEncode;
                this.eventGuard = new MktSvcCommon.EventGuard(this.container, context.client.userAgent);
                this.initCore(context, state);
                if (this.shouldPreventMultipleEventTypes) {
                    this.eventGuard.preventMultipleEventTypes();
                }
                this.isEnabled = this.isControlEnabled(context);
                this.isInitialized = true;
            }
            catch (e) {
                // Ensure that the container is cleaned up if an error occured on control initialization
                if (this.container.hasChildNodes()) {
                    var childCount = this.container.childNodes.length;
                    for (var i = childCount - 1; i >= 0; i--) {
                        this.container.removeChild(this.container.childNodes[i]);
                    }
                }
                MktSvcCommon.ErrorHandling.ExceptionHandler.throwException(e);
            }
        };
        /**
        * Guards against infra updates due to layout changes.
        * @param context The bag of values described above
        * @returns truth value based on infra properties and the control's decision to ignore the update
        */
        CommonControl.prototype.shouldIgnoreUpdate = function (context) {
            var shouldIgnore = true;
            if (MktSvc.Controls.Common.Object.isNullOrUndefined(context) ||
                MktSvc.Controls.Common.Object.isNullOrUndefined(context.updatedProperties) ||
                MktSvc.Controls.Common.Object.isNullOrUndefined(this.updateEvents) ||
                context.updatedProperties.length == 0) {
                return false;
            }
            for (var i = 0; i < context.updatedProperties.length; i++) {
                var eventType = Mscrm.UpdateEvents.getEventType(context.updatedProperties[i]);
                shouldIgnore = shouldIgnore && this.updateEvents.isIgnoredEvent(eventType);
            }
            return shouldIgnore;
        };
        /**
         * Checks the validity of the property bag and throws if it is invalid.
         * @param context The data bag.
         */
        CommonControl.prototype.throwIfPropertyBagNotValid = function (context) {
            if (MktSvc.Controls.Common.Object.isNullOrUndefined(context)) {
                MktSvcCommon.ErrorHandling.ExceptionHandler.throwException(CommonControl.UninitializedDataBagMessage);
            }
            if (MktSvc.Controls.Common.Object.isNullOrUndefined(context.parameters)) {
                MktSvcCommon.ErrorHandling.ExceptionHandler.throwException(MktSvc.Controls.Common.String.Format(MktSvcCommon.CommonControl.InvalidDataBagKeyFormat, "dataBag.parameters"));
            }
            if (MktSvc.Controls.Common.Object.isNullOrUndefined(context.utils)) {
                MktSvcCommon.ErrorHandling.ExceptionHandler.throwException(MktSvc.Controls.Common.String.Format(MktSvcCommon.CommonControl.InvalidDataBagKeyFormat, "dataBag.utils"));
            }
            if (MktSvc.Controls.Common.Object.isNullOrUndefined(context.utils.setNotification)) {
                MktSvcCommon.ErrorHandling.ExceptionHandler.throwException(MktSvc.Controls.Common.String.Format(MktSvcCommon.CommonControl.InvalidDataBagKeyFormat, "dataBag.utils.setNotification"));
            }
            if (MktSvc.Controls.Common.Object.isNullOrUndefined(context.utils.clearNotification)) {
                MktSvcCommon.ErrorHandling.ExceptionHandler.throwException(MktSvc.Controls.Common.String.Format(MktSvcCommon.CommonControl.InvalidDataBagKeyFormat, "dataBag.utils.clearNotification"));
            }
            if (MktSvc.Controls.Common.Object.isNullOrUndefined(context.utils.openInBrowser)) {
                MktSvcCommon.ErrorHandling.ExceptionHandler.throwException(MktSvc.Controls.Common.String.Format(MktSvcCommon.CommonControl.InvalidDataBagKeyFormat, "dataBag.utils.openInBrowser"));
            }
            if (MktSvc.Controls.Common.Object.isNullOrUndefined(context.utils.getServiceUri)) {
                MktSvcCommon.ErrorHandling.ExceptionHandler.throwException(MktSvc.Controls.Common.String.Format(MktSvcCommon.CommonControl.InvalidDataBagKeyFormat, "dataBag.utils.getServiceUri"));
            }
            if (MktSvc.Controls.Common.Object.isNullOrUndefined(context.mode)) {
                MktSvcCommon.ErrorHandling.ExceptionHandler.throwException(MktSvc.Controls.Common.String.Format(MktSvcCommon.CommonControl.InvalidDataBagKeyFormat, "dataBag.mode"));
            }
            if (MktSvc.Controls.Common.Object.isNullOrUndefined(context.mode.isControlDisabled)) {
                MktSvcCommon.ErrorHandling.ExceptionHandler.throwException(MktSvc.Controls.Common.String.Format(MktSvcCommon.CommonControl.InvalidDataBagKeyFormat, "dataBag.mode.isControlDisabled"));
            }
            if (MktSvc.Controls.Common.Object.isNullOrUndefined(context.mode.isRead)) {
                MktSvcCommon.ErrorHandling.ExceptionHandler.throwException(MktSvc.Controls.Common.String.Format(MktSvcCommon.CommonControl.InvalidDataBagKeyFormat, "dataBag.mode.isRead"));
            }
            if (MktSvc.Controls.Common.Object.isNullOrUndefined(context.mode.isPreview)) {
                MktSvcCommon.ErrorHandling.ExceptionHandler.throwException(MktSvc.Controls.Common.String.Format(MktSvcCommon.CommonControl.InvalidDataBagKeyFormat, "dataBag.mode.isPreview"));
            }
            if (MktSvc.Controls.Common.Object.isNullOrUndefined(context.utils)) {
                throw MktSvc.Controls.Common.String.Format(MktSvcCommon.CommonControl.InvalidDataBagKeyFormat, "dataBag.utils");
            }
            if (MktSvc.Controls.Common.Object.isNullOrUndefined(context.utils.crmHtmlEncode)) {
                throw MktSvc.Controls.Common.String.Format(MktSvcCommon.CommonControl.InvalidDataBagKeyFormat, "dataBag.utils.crmHtmlEncode");
            }
        };
        /**
         * Helper method to clean up container
         */
        CommonControl.prototype.cleanup = function () {
            if (!MktSvc.Controls.Common.Object.isNullOrUndefined(this.container)) {
                if (this.preventEditModePanoramaEvents) {
                    this.removePanoramaEventsHandlers();
                }
            }
            this.isInitialized = false;
            this.notifyOutputChanged = null;
            $(this.container).empty();
            this.container = null;
        };
        /**
         * Handles the transition from edit to read mode.
         * @param context The context.
         */
        CommonControl.prototype.handleEditToReadModeTransition = function (context) {
            // Remove the event handlers before the label can be shown when transitioning to read mode from edit mode
            if (!this.isInReadMode && context.mode.isRead) {
                // When transitioning from edit mode, remove the panorama events handlers
                if (this.preventEditModePanoramaEvents) {
                    this.removePanoramaEventsHandlers();
                }
                this.eventGuard.stopPreventingClicks();
                this.isInReadMode = true;
            }
        };
        /**
         * Removes the panorama events handlers, which disable panorama scroll.
         */
        CommonControl.prototype.removePanoramaEventsHandlers = function () {
            $(this.container).off(CommonControl.PointerDownEventName);
            $(this.container).off(CommonControl.PointerMoveEventName);
            $(this.container).off(CommonControl.PointerUpEventName);
            $(this.container).off(CommonControl.TouchEndEventName);
        };
        /**
         * Adds the panorama events handlers, which disable panorama scroll.
         */
        CommonControl.prototype.addPanoramaEventsHandlers = function () {
            var _this = this;
            $(this.container).on(CommonControl.PointerDownEventName, function (event) {
                if (_this.isEnabled) {
                    _this.disablePanoramaScroll(true);
                    event.stopPropagation();
                }
            });
            $(this.container).on(CommonControl.PointerMoveEventName, function (event) {
                if (_this.isEnabled) {
                    event.stopPropagation();
                }
            });
            $(this.container).on(CommonControl.PointerUpEventName, function (event) {
                if (_this.isEnabled) {
                    _this.disablePanoramaScroll(false);
                }
            });
            $(this.container).on(CommonControl.TouchEndEventName, function (event) {
                // This is needed if the event occurs outside of the container (if the touch ends outside the container, no pointerup is fired, however a touchend is)
                if (_this.isEnabled) {
                    _this.disablePanoramaScroll(false);
                }
            });
        };
        /**
         * This method binds focus outlining when tabbing in a control.
         * @param focusElement The jQuery element initiating focus events.
         * @param container The jQuery element that the outline class will be added.
         */
        CommonControl.prototype.bindFocusVisibility = function (focusElement, container) {
            var _this = this;
            focusElement.on("focus", function () {
                if (_this.lastKeyPress)
                    container.addClass(CommonControl.accessibilityOutlineClassName);
            });
            focusElement.on("focusout", function () {
                container.removeClass(CommonControl.accessibilityOutlineClassName);
                _this.lastKeyPress = true;
            });
            container.on("mousedown touchstart", function () {
                _this.lastKeyPress = false;
                container.removeClass(CommonControl.accessibilityOutlineClassName);
            });
            container.on("keydown", function () {
                _this.lastKeyPress = true;
            });
        };
        /**
         * This method unbinds focus outlining when tabbing in a control.
         * @param container The jQuery element that the focuing events are binded.
         */
        CommonControl.prototype.unbindFocusVisibility = function (focusElement, container) {
            focusElement.off("focus");
            focusElement.off("focusout");
            container.off("mousedown");
            container.off("touchstart");
            container.off("keydown");
        };
        // The class name common to the field controls.
        CommonControl.ClassName = "mocaControls";
        // The class added to indicate control is in RightToLeft text mode.
        CommonControl.ClassRtl = "rtl";
        // The custom control pointerdown event.
        CommonControl.PointerDownEventName = "pointerdown.CustomControl";
        // The custom control pointermove event.
        CommonControl.PointerMoveEventName = "pointermove.CustomControl";
        // The custom control pointerup event.
        CommonControl.PointerUpEventName = "pointerup.CustomControl";
        // The custom control touchend event.
        CommonControl.TouchEndEventName = "touchend.CustomControl";
        // The label string for the control's default (null) value.
        CommonControl.DefaultValueLabel = "---";
        // This exception message is thrown when initializing a control with a null or undefined container.
        CommonControl.NullOrUndefinedInitContainer = "Null or undefined control container.";
        // This exception message is thrown when initializing a control with a null or undefined value (aux) container.
        CommonControl.NullOrUndefinedInitValueContainer = "Null or undefined control value container.";
        // This exception message is thrown when initializing a control with a null or undefined NotifyOutputChanged delegate.
        CommonControl.NullOrUndefinedInitNotifyOutputChangedDelegate = "Null or undefined NotifyOutputChanged delegate.";
        // This exception message is thrown when updating a control before initialize.
        CommonControl.UninitializedErrorMessage = "init should be called before calling update.";
        // This exception message is thrown when the control is updated with a null or undefined context property.
        CommonControl.UninitializedDataBagMessage = "Null or undefined dataBag property.";
        // This exception message is thrown when the property bag does not contain an expected parameter 
        CommonControl.InvalidDataBagKeyFormat = "Expected key {0} in the input data bag.";
        // This exception message is thrown when the control is used uninitialized
        CommonControl.UninitializedControl = "Control is used uninitialized.";
        // This exception message is thrown when Min or Max values do not bound a valid interval.
        CommonControl.InvalidInputParamMinMax = "Min and max values do not bound a valid interval.";
        // This exception message is thrown when step parameter is less than 0 or not in the min-max interval.
        CommonControl.InvalidInputParamStep = "Step parameter should be greater than 0 and less than the interval bound by min and max.";
        // This exception message is thrown when the value for the control is not within the desired interval.
        CommonControl.InvalidInputParamValue = "Value for the control is not within the desired interval.";
        // This exception message is thrown when an input parameter should have been greater than zero
        CommonControl.NotGreaterThanZeroInputParamValue = "Parameter {0} should be greater than zero.";
        // This is the default error message for invalid parameters.
        CommonControl.InvalidInputParam = "One or more of the input parameters are invalid: {0}";
        // This exception message is thrown when a given method is not overriden.
        CommonControl.MethodNotOverridenFormat = "Method {0} is not overridden in the specialized class.";
        // This exception message is thrown when a given method is not overriden.
        CommonControl.MethodNotImplementedInControl = "Method {0} is not implemented in the control.";
        // The outline class name when focusing in a control
        CommonControl.accessibilityOutlineClassName = "outline-for-accessibility";
        return CommonControl;
    }());
    MktSvcCommon.CommonControl = CommonControl;
})(MktSvcCommon || (MktSvcCommon = {}));
// This file was forked from CRM main repository, v8.1 branch
//---------------------------------------------------------------------------------------------------------------
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="CommonReferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    'use strict';
    /**
    * Base class for field controls
    */
    var FieldControlBase = (function (_super) {
        __extends(FieldControlBase, _super);
        function FieldControlBase() {
            _super.call(this);
            this.updateEvents.shouldIgnoreEvent(Mscrm.UpdateEventType.Layout, true);
            this.updateEvents.shouldIgnoreEvent(Mscrm.UpdateEventType.Activation, true);
        }
        return FieldControlBase;
    }(MktSvcCommon.CommonControl));
    MktSvcCommon.FieldControlBase = FieldControlBase;
})(MktSvcCommon || (MktSvcCommon = {}));
// This file was forked from CRM main repository, v8.1 branch
//---------------------------------------------------------------------------------------------------------------
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="CommonReferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    'use strict';
    var EventConstants = (function () {
        function EventConstants() {
        }
        /** JQuery change event */
        EventConstants.Change = "change";
        /** JQuery click event */
        EventConstants.Click = "click";
        /** JQuery knob configure event */
        EventConstants.JQueryKnobConfigure = "configure";
        /** JQuery swipe left event */
        EventConstants.JQuerySwipeLeft = "swipeleft";
        /** JQuery right left event */
        EventConstants.JQuerySwipeRight = "swiperight";
        /** Key raise event */
        EventConstants.KeyUp = "keyup";
        /** JQuery mouseup event */
        EventConstants.MouseUp = "mouseup";
        /** JQuery mousedown event */
        EventConstants.MouseDown = "mousedown";
        /** Mouse Over event */
        EventConstants.MouseOver = "mouseover";
        /** Mouse Move event */
        EventConstants.MouseMove = "mousemove";
        /** Pointer Down event */
        EventConstants.PointerDown = "pointerdown";
        /** Pointer Move event */
        EventConstants.PointerMove = "pointermove";
        /** Pointer Up event */
        EventConstants.PointerUp = "pointerup";
        /** Pointer Out event */
        EventConstants.PointerOut = "pointerout";
        /** MS Pointer Over event */
        EventConstants.MSPointerOver = "MSPointerOver";
        /** MS Pointer Down event */
        EventConstants.MSPointerDown = "MSPointerDown";
        /** MS Pointer Out event */
        EventConstants.MSPointerOut = "MSPointerOut";
        /** MS Pointer Up event */
        EventConstants.MSPointerUp = "MSPointerUp";
        /** MS Pointer Move event */
        EventConstants.MSPointerMove = "MSPointerMove";
        /** Touch Start event */
        EventConstants.TouchStart = "touchstart";
        /** Touch Move event */
        EventConstants.TouchMove = "touchmove";
        /** Touch End event */
        EventConstants.TouchEnd = "touchend";
        /** JQuery Mobile Virtual Mouse Move event */
        EventConstants.VMouseMove = "vmousemove";
        /** Focus event */
        EventConstants.Focus = "focus";
        /** Focus in event */
        EventConstants.FocusIn = "focusin";
        /** Focus out event */
        EventConstants.FocusOut = "focusout";
        /** Focus events */
        EventConstants.FocusEvents = "focusin focusout";
        return EventConstants;
    }());
    MktSvcCommon.EventConstants = EventConstants;
})(MktSvcCommon || (MktSvcCommon = {}));
// This file was forked from CRM main repository, v8.1 branch
//---------------------------------------------------------------------------------------------------------------
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="CommonReferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    'use strict';
    var EventGuard = (function () {
        /* Creates a new event guard.
         * @param container The container on which to prevent the focus event.
         * @param userAgent The user agent.
         */
        function EventGuard(container, userAgent) {
            this.container = container;
            this.userAgent = userAgent;
        }
        /**
         * Destroys the event guard.
         */
        EventGuard.prototype.destroy = function () {
            this.stopPreventingClicks();
            this.stopPreventingFocus();
            this.stopPreventingMultipleEventTypes();
            this.container = null;
            this.userAgent = null;
        };
        /*
         * Prevent the next edit mode click event if occuring within the edit mode transition phase, as this is not due to user interaction.
         * Should only be used when first going into read mode from edit mode.
         * @remarks We need to prevent the first click when transitioning from read mode since the infra calls updateCore on pointerup, and the click event might follow.
         *			The extraneous click event can cause unwanted behavior upon our control, however is still needed by the infra to prevent double edit mode, therefore it
         *			will be faked by synthesizing a click event on the container, which will have no side-effects, however will make the infra acknowledge that we're in edit mode.
         *			The user interaction flag can also be set by a pointerdown event, just in case the final click event is not triggered by the browser.
         *			This behavior should be removed when entering read mode by calling the stopPreventingClicks function.
         * @param container The container.
         */
        EventGuard.prototype.preventClicksUntilUserInteracted = function () {
            var _this = this;
            if (this.container == null || this.userAgent == null) {
                return;
            }
            // Stop preventing clicks in case already preventing and the user has never interacted.
            this.stopPreventingClicks();
            // Mark the container as having been interacted with when a pointerdown event is triggered
            $(this.container).on(EventGuard.hasUserInteractedEventName, function (e) {
                _this.userInteractedInEditMode = true;
            });
            // Prevent the non-user generated click events
            this.removeClickEventHandler = EventGuard.handleEditModeClickEvents(this.container, this);
        };
        /*
         * Stop preventing clicks until user interacted.
         */
        EventGuard.prototype.stopPreventingClicks = function () {
            this.userInteractedInEditMode = false;
            // Remove the click prevention on the next container pointerdown
            $(this.container).off(EventGuard.hasUserInteractedEventName);
            if (!MktSvc.Controls.Common.Object.isNullOrUndefined(this.removeClickEventHandler)) {
                this.removeClickEventHandler();
            }
            this.removeClickEventHandler = null;
        };
        /**
         * Prevent the next edit mode focus event, since it will occur during the transition.
         * @remarks We need to prevent input element actions when transitioning from read mode since the infra calls updateCore on pointerUp, and the focus event might follow.
         *			The extraneous focus event can cause unwanted behavior upon our control, so we set the input elements to read-only until we are sure that the user is interacting,
         *			which will happen on the next pointerdown.
         *			This behavior should be removed when entering read mode by calling the stopPreventingFocus function.
         */
        EventGuard.prototype.preventEditModeTransitionFocus = function () {
            var _this = this;
            if (this.container == null || this.userAgent == null) {
                return;
            }
            // Stop preventing focuses in case already preventing and the user has never interacted.
            this.stopPreventingFocus();
            this.userInteractedInEditModeWithAnInputElement = false;
            var inputElements = $(this.container).find('input');
            inputElements.each(function (index, element) {
                // Set the input elements to readonly until the next pointerdown to prevent focus events
                element.setAttribute(MktSvcCommon.AttributeConstants.ReadOnly, MktSvcCommon.AttributeConstants.ReadOnly);
                // On Android, also blur on focus to prevent the caret from showing
                if (_this.userAgent.isAndroid) {
                    $(element).on(EventGuard.focusRemoveEvent, function (e) {
                        $(element).blur();
                        $(element).off(EventGuard.focusRemoveEvent);
                    });
                }
                // Remove the readonly on the next element pointerdown
                $(element).on(EventGuard.hasUserInteractedWithElementEventName, function (e) {
                    _this.stopPreventingFocusEvents(element);
                });
            });
        };
        /**
         * Stops preventing the transition edit mode focus event, as the control might not have been interacted with.
         * @param container The container on which to prevent the focus event.
         */
        EventGuard.prototype.stopPreventingFocus = function () {
            var _this = this;
            // Only stop preventing transition focus if the user hasn't interacted with the element in edit mode. Else the event handler cleanup should already have been executed.
            if (!this.userInteractedInEditModeWithAnInputElement) {
                var inputElements = $(this.container).find('input');
                inputElements.each(function (index, element) {
                    _this.stopPreventingFocusEvents(element);
                });
            }
        };
        /*
         * Prevents all mouse events upon an element if a touch event is detected and vice-versa, returning a callback to remove the event handlers.
         * Also prevents the first click and focus events if they occur within a certain timeframe.
         * @return Callback to remove the event handlers.
         */
        EventGuard.prototype.preventMultipleEventTypes = function () {
            var _this = this;
            if (this.container == null || this.userAgent == null) {
                return;
            }
            var resetMultipleEventTypeFlags = function (e) {
                // The click is issued only after all mouse*, touch* and pointer* events are issued, so we can safely set the prevention flags to false
                _this.shouldPreventMouseEvents = false;
                _this.shouldPreventTouchEvents = false;
            };
            var removeTouchEventHandlers = EventGuard.preventTouchEventsAfterMouseDown(this.container, this);
            var removeMouseEventHandlers = EventGuard.preventMouseEventsAfterTouchStart(this.container, this);
            this.container.addEventListener(MktSvcCommon.EventConstants.Click, resetMultipleEventTypeFlags, true);
            var removalCallback = function () {
                removeTouchEventHandlers();
                removeMouseEventHandlers();
                _this.container.removeEventListener(MktSvcCommon.EventConstants.Click, resetMultipleEventTypeFlags, true);
            };
            this.removeMultipleEventHandlers = removalCallback;
        };
        /**
         * Stops preventing multiple event types.
         * Should be used when destroying the control.
         */
        EventGuard.prototype.stopPreventingMultipleEventTypes = function () {
            if (!MktSvc.Controls.Common.Object.isNullOrUndefined(this.removeMultipleEventHandlers)) {
                this.removeMultipleEventHandlers();
            }
            this.removeMultipleEventHandlers = null;
        };
        /**
         * Stops preventing focus events on a certain element.
         * @param element The element to stop focus events upon.
         */
        EventGuard.prototype.stopPreventingFocusEvents = function (element) {
            element.removeAttribute(MktSvcCommon.AttributeConstants.ReadOnly);
            if (this.userAgent.isAndroid) {
                $(element).off(EventGuard.focusRemoveEvent);
            }
            $(element).off(EventGuard.hasUserInteractedWithElementEventName);
            this.userInteractedInEditModeWithAnInputElement = true;
        };
        EventGuard.handleEditModeClickEvents = function (element, eventGuard) {
            var preventFirstClick = function (e) {
                // The controls should not react upon the first edit mode click event since this is fired almost instantly after entering edit mode.
                if (!eventGuard.userInteractedInEditMode) {
                    e.stopPropagation();
                    // Pre-set this flag since we're handling the transition mode click
                    eventGuard.userInteractedInEditMode = true;
                    // Trigger a synthetic click event so that standard MoCA behavior is not altered.
                    $(element).trigger(MktSvcCommon.EventConstants.Click);
                }
                eventGuard.userInteractedInEditMode = true;
            };
            element.addEventListener(MktSvcCommon.EventConstants.Click, preventFirstClick, true);
            return function () {
                element.removeEventListener(MktSvcCommon.EventConstants.Click, preventFirstClick, true);
            };
        };
        EventGuard.preventTouchEventsAfterMouseDown = function (element, eventGuard) {
            var onTouchStart = function (e) {
                // If touch events are not prevented, it means the touch start was the first event to be called and we must start preventing mouse events.
                if (!eventGuard.shouldPreventTouchEvents) {
                    eventGuard.shouldPreventMouseEvents = true;
                }
                else {
                    e.stopImmediatePropagation();
                }
            };
            var preventTouchEventsIfRequired = function (e) {
                if (eventGuard.shouldPreventTouchEvents) {
                    e.stopImmediatePropagation();
                }
            };
            element.addEventListener(MktSvcCommon.EventConstants.TouchStart, onTouchStart, true);
            element.addEventListener(MktSvcCommon.EventConstants.TouchMove, preventTouchEventsIfRequired, true);
            element.addEventListener(MktSvcCommon.EventConstants.TouchEnd, preventTouchEventsIfRequired, true);
            return function () {
                element.removeEventListener(MktSvcCommon.EventConstants.TouchStart, onTouchStart, true);
                element.removeEventListener(MktSvcCommon.EventConstants.TouchMove, preventTouchEventsIfRequired, true);
                element.removeEventListener(MktSvcCommon.EventConstants.TouchEnd, preventTouchEventsIfRequired, true);
            };
        };
        EventGuard.preventMouseEventsAfterTouchStart = function (element, eventGuard) {
            var onMouseDown = function (e) {
                // If mouse events are not prevented, it means the mouse down was the first event to be called and we must start preventing touch events.
                if (!eventGuard.shouldPreventMouseEvents) {
                    eventGuard.shouldPreventTouchEvents = true;
                }
                else {
                    e.stopImmediatePropagation();
                }
            };
            var preventMouseEventsIfRequired = function (e) {
                if (eventGuard.shouldPreventMouseEvents) {
                    e.stopImmediatePropagation();
                }
            };
            element.addEventListener(MktSvcCommon.EventConstants.MouseDown, onMouseDown, true);
            element.addEventListener(MktSvcCommon.EventConstants.MouseMove, preventMouseEventsIfRequired, true);
            element.addEventListener(MktSvcCommon.EventConstants.MouseUp, preventMouseEventsIfRequired, true);
            return function () {
                element.removeEventListener(MktSvcCommon.EventConstants.MouseDown, onMouseDown, true);
                element.removeEventListener(MktSvcCommon.EventConstants.MouseMove, preventMouseEventsIfRequired, true);
                element.removeEventListener(MktSvcCommon.EventConstants.MouseUp, preventMouseEventsIfRequired, true);
            };
        };
        /* Remove focus event, to prevent Android from showing the caret on a readonly input when switching into edit mode */
        EventGuard.focusRemoveEvent = "focus.RemoveFocus";
        /* Pointerdown event, which signals that the user interacted with the control in edit mode */
        EventGuard.hasUserInteractedEventName = "pointerdown.UserInteracted";
        /* Pointerdown event, which signals that the user interacted with an element in edit mode */
        EventGuard.hasUserInteractedWithElementEventName = "pointerdown.UserInteractedElement";
        return EventGuard;
    }());
    MktSvcCommon.EventGuard = EventGuard;
})(MktSvcCommon || (MktSvcCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    var EventArgs;
    (function (EventArgs) {
        'use strict';
        var AssistEditItemSelectedEventArgs = (function () {
            function AssistEditItemSelectedEventArgs() {
            }
            return AssistEditItemSelectedEventArgs;
        }());
        EventArgs.AssistEditItemSelectedEventArgs = AssistEditItemSelectedEventArgs;
    })(EventArgs = MktSvcCommon.EventArgs || (MktSvcCommon.EventArgs = {}));
})(MktSvcCommon || (MktSvcCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    var EventArgs;
    (function (EventArgs) {
        'use strict';
        /**
        * Event parameter for the ImageSelectedEvent
        */
        var ImageSelectedEventParameter = (function () {
            function ImageSelectedEventParameter() {
            }
            return ImageSelectedEventParameter;
        }());
        EventArgs.ImageSelectedEventParameter = ImageSelectedEventParameter;
    })(EventArgs = MktSvcCommon.EventArgs || (MktSvcCommon.EventArgs = {}));
})(MktSvcCommon || (MktSvcCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../commonreferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    var NotificationHelper;
    (function (NotificationHelper_1) {
        'use strict';
        /**
         * The NotificationHelper.
         */
        var NotificationHelper = (function () {
            /**
             * Initializes NotificationHelper.
             * @params context The control context, containing the utils.
             */
            function NotificationHelper(context) {
                this.context = context;
                this.notificationIds = [];
            }
            /**
             * Sets a notification.
             * @param message The message.
             * @param notificationLevel The notification level.
             * @param notificationId A unique identifier for the message.
             * @param removingDelay The removing delay. The notification will not be removed automatically, if null or undefined.
             * @return true if it succeeds, false if it fails.
             */
            NotificationHelper.prototype.setNotification = function (message, notificationLevel, notificationId, removingDelay) {
                var _this = this;
                // TODO: use this.context.utils.setNotification when this API will be ready
                if (!window.Xrm || !window.Xrm.Page) {
                    return false;
                }
                var status = window.Xrm.Page.ui.setFormNotification(message, notificationLevel, notificationId);
                if (status && this.notificationIds.indexOf(notificationId) === -1) {
                    this.notificationIds.push(notificationId);
                }
                if (removingDelay && removingDelay > 0 && status) {
                    setTimeout(function () {
                        _this.clearNotification(notificationId);
                    }, removingDelay);
                }
                return status;
            };
            /**
             * Clears the notification identified by uniqueId.
             * @param notificationId A unique identifier for the message.
             * @return true if it succeeds, false if it fails.
             */
            NotificationHelper.prototype.clearNotification = function (notificationId) {
                // TODO: use this.context.utils.clearNotification when this API will be ready
                if (!window.Xrm || !window.Xrm.Page) {
                    return false;
                }
                var status = window.Xrm.Page.ui.clearFormNotification(notificationId);
                if (status && this.notificationIds.indexOf(notificationId) !== -1) {
                    this.notificationIds.slice(this.notificationIds.indexOf(notificationId), 1);
                }
                return status;
            };
            /**
             * Clears all notifications with a specific prefix if specified or all notifications, which was shown by this helper.
             * @param prefix The notification id prefix.
             * @return true if it succeeds, false if it fails.
             */
            NotificationHelper.prototype.clearAllNotifications = function (prefix) {
                var _this = this;
                var status = true;
                var unprocessedNotificationIds = [];
                this.notificationIds.forEach(function (notificationId) {
                    if (!prefix || (prefix && notificationId.indexOf(prefix) === 0)) {
                        var currentStatus = _this.clearNotification(notificationId);
                        if (!currentStatus) {
                            status = false;
                            unprocessedNotificationIds.push(notificationId);
                        }
                    }
                    else {
                        unprocessedNotificationIds.push(notificationId);
                    }
                });
                this.notificationIds = unprocessedNotificationIds;
                return status;
            };
            return NotificationHelper;
        }());
        NotificationHelper_1.NotificationHelper = NotificationHelper;
    })(NotificationHelper = MktSvcCommon.NotificationHelper || (MktSvcCommon.NotificationHelper = {}));
})(MktSvcCommon || (MktSvcCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../commonreferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    var NotificationHelper;
    (function (NotificationHelper) {
        'use strict';
    })(NotificationHelper = MktSvcCommon.NotificationHelper || (MktSvcCommon.NotificationHelper = {}));
})(MktSvcCommon || (MktSvcCommon = {}));
// This file was forked from CRM main repository, v8.1 branch
//---------------------------------------------------------------------------------------------------------------
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="CommonReferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    'use strict';
    var MethodConstants = (function () {
        function MethodConstants() {
        }
        /** JQuery Mobile destroy method */
        MethodConstants.Destroy = "destroy";
        /** JQuery Mobile refresh method */
        MethodConstants.Refresh = "refresh";
        /** JQuery value method */
        MethodConstants.Value = "value";
        /** JQuery option method */
        MethodConstants.Option = "option";
        /** JQuery disable method */
        MethodConstants.Disable = "disable";
        /** JQuery enable method */
        MethodConstants.Enable = "enable";
        return MethodConstants;
    }());
    MktSvcCommon.MethodConstants = MethodConstants;
})(MktSvcCommon || (MktSvcCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    var ControlUtils;
    (function (ControlUtils) {
        'use strict';
        /**
        * Event names for the CustomControls
        */
        var CustomControlEvent = (function () {
            function CustomControlEvent() {
            }
            CustomControlEvent.itemSelected = 'ITEM_SELECTED';
            CustomControlEvent.valueChanged = 'VALUE_CHANGED';
            CustomControlEvent.finalItemSelected = 'FINAL_ITEM_SELECTED';
            CustomControlEvent.initComplete = 'INIT_COMPLETE';
            CustomControlEvent.controlCanceled = 'CONTROL_CANCEL';
            CustomControlEvent.listBoxUpdated = 'LIST_BOX_UPDATED';
            CustomControlEvent.enterKeyDown = 'ENTER_KEY_DOWN';
            CustomControlEvent.focusout = 'FOCUSOUT';
            CustomControlEvent.optionFocused = 'OPTION_FOCUSED';
            return CustomControlEvent;
        }());
        ControlUtils.CustomControlEvent = CustomControlEvent;
    })(ControlUtils = MktSvcCommon.ControlUtils || (MktSvcCommon.ControlUtils = {}));
})(MktSvcCommon || (MktSvcCommon = {}));
// This file was forked from CRM main repository, v8.1 branch
//---------------------------------------------------------------------------------------------------------------
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    var ControlUtils;
    (function (ControlUtils) {
        'use strict';
        /**
        * Enum helper methods.
        */
        var Enum = (function () {
            function Enum() {
            }
            Enum.getFromString = function (enumArray, stringValue) {
                for (var i in enumArray) {
                    if (enumArray[i] == stringValue) {
                        return parseInt(i);
                    }
                }
                return -1;
            };
            return Enum;
        }());
        ControlUtils.Enum = Enum;
    })(ControlUtils = MktSvcCommon.ControlUtils || (MktSvcCommon.ControlUtils = {}));
})(MktSvcCommon || (MktSvcCommon = {}));
// This file was forked from CRM main repository, v8.1 branch
//---------------------------------------------------------------------------------------------------------------
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    var ControlUtils;
    (function (ControlUtils) {
        'use strict';
        /**
        * Event helper methods.
        */
        var Event = (function () {
            function Event() {
            }
            /**
             * Creates a namespaced event, in order to uniquely identify it.
             * @param eventName The name of an event, e.g. click.
             * @param eventNamespace The namespace of the event, used to uniquely identify the event.
             * @returns The event with the namespace.
             */
            Event.createName = function (eventName, eventNamespace) {
                return MktSvc.Controls.Common.String.Format("{0}.{1}", eventName, eventNamespace);
            };
            return Event;
        }());
        ControlUtils.Event = Event;
    })(ControlUtils = MktSvcCommon.ControlUtils || (MktSvcCommon.ControlUtils = {}));
})(MktSvcCommon || (MktSvcCommon = {}));
// This file was forked from CRM main repository, v8.1 branch
//---------------------------------------------------------------------------------------------------------------
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    var ControlUtils;
    (function (ControlUtils) {
        'use strict';
        /**
        * Hit target helper methods.
        */
        var HitTarget = (function () {
            function HitTarget() {
            }
            /**
             * Checks if the hit target is already created
             * @param container - the container received from the control framework
             * @param hitTargetClassSelector - CSS selector for the hit target class
             * @returns truth value
             */
            HitTarget.exists = function (container, hitTargetClassSelector) {
                return container.find(hitTargetClassSelector).length > 0;
            };
            /**
             * Creates a hit target around the control
             * @param container - the container received from the control framework
             * @param controlDomElement - the control's host element
             * @param hitTargetClass - the class containing control specific styles
             * @param trackElementClassSelector - the CSS selector that identifies the track element, e.g., actual slider bar
             * @param min - the mimimum value supported by the control
             * @param max - the maximum value supported by the control
             * @param paddingLeftPx - the offset from the container's left border
             * @param setControlValue - delegate that sets the control's value
             */
            HitTarget.create = function (container, controlDomElement, hitTargetClass, trackElementClassSelector, paddingLeftPx, min, max, setControlValue) {
                if (max < min) {
                    MktSvcCommon.ErrorHandling.ExceptionHandler.throwException("Expected max to be bigger then min");
                }
                controlDomElement.wrap('<div class="' + hitTargetClass + '"/>');
                var controlNumericRange = max - min;
                var hitTargetElement = container.find("." + hitTargetClass);
                var setValue = function (event) {
                    // get the control's coordinates (offset from 0,0) on page
                    var offset = container.find(trackElementClassSelector).offset();
                    var width = controlDomElement.width();
                    var height = controlDomElement.height();
                    var isClickOutsideControlHeight = event.pageY < offset.top || event.pageY > (offset.top + height);
                    if (!isClickOutsideControlHeight) {
                        return;
                    }
                    var isClickInsideContainer = $(event.target).hasClass(controlDomElement[0].className) || $(event.target).hasClass(hitTargetClass);
                    if (!isClickInsideContainer) {
                        return;
                    }
                    // calculate the click's displacement on the x-axis, relative to the control's width
                    var xAxisDisplacementPercent = Math.abs(((event.pageX + paddingLeftPx) - offset.left)) / width;
                    // guard against clicks outside the control's width
                    if (xAxisDisplacementPercent <= 1) {
                        // calculate new value to set on the control and round it up
                        var newValue = ControlUtils.NumericInterval.trunc(min + (controlNumericRange * xAxisDisplacementPercent));
                        setControlValue(newValue);
                    }
                    if (event.type === MktSvcCommon.EventConstants.PointerDown) {
                        // Prevent mouse users from editing the control all the time if they lift the mouse button while not over the hit target.)
                        $(document).on(HitTarget.mouseUpHitTargetEventName, function (e) {
                            // This should only be triggered for users using the mouse in the app (Windows app or Android using mouse)
                            HitTarget.removeHitTargetSubsequentEvents(hitTargetElement);
                        });
                        // Enable further events (pointermove, pointerup)
                        hitTargetElement.on(HitTarget.subsequentEvents, setValue);
                    }
                    else if (event.type === MktSvcCommon.EventConstants.PointerUp) {
                        // If the pointer up event has fired (within the container), it means the mouseup event is not needed and that the user finished a set of interactions.
                        HitTarget.removeHitTargetSubsequentEvents(hitTargetElement);
                    }
                };
                hitTargetElement.on(HitTarget.initialEvents, setValue);
                hitTargetElement.on(MktSvcCommon.EventConstants.TouchEnd, function (event) {
                    // If the touch end event has fired (within or outside of the container), it means the mouseup event is not needed, as the user isn't using a mouse.
                    HitTarget.removeHitTargetSubsequentEvents(hitTargetElement);
                });
            };
            HitTarget.removeHitTargetSubsequentEvents = function (hitTargetElement) {
                $(document).off(HitTarget.mouseUpHitTargetEventName);
                hitTargetElement.off(HitTarget.subsequentEvents);
            };
            HitTarget.initialEvents = "click pointerdown";
            HitTarget.subsequentEvents = "pointermove pointerup";
            HitTarget.mouseUpHitTargetEventName = "mouseup.HitTarget";
            return HitTarget;
        }());
        ControlUtils.HitTarget = HitTarget;
    })(ControlUtils = MktSvcCommon.ControlUtils || (MktSvcCommon.ControlUtils = {}));
})(MktSvcCommon || (MktSvcCommon = {}));
// This file was forked from CRM main repository, v8.1 branch
//---------------------------------------------------------------------------------------------------------------
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    var ControlUtils;
    (function (ControlUtils_1) {
        'use strict';
        var ControlUtils = MktSvc.Controls.Common;
        /**
        * Helper methods for numeric interval controls.
        */
        var NumericInterval = (function () {
            function NumericInterval() {
            }
            /**
             * Checks the parameters in the property bag for null values.
             * @param context object passed by the infra
             * @param hasStep boolean flag
             */
            NumericInterval.throwIfNullDataBagParameters = function (context, hasStep) {
                if (hasStep === void 0) { hasStep = true; }
                if (ControlUtils.Object.isNullOrUndefined(context.parameters.value)) {
                    MktSvcCommon.ErrorHandling.ExceptionHandler.throwException(ControlUtils.String.Format(MktSvcCommon.CommonControl.InvalidDataBagKeyFormat, "value"));
                }
                if (ControlUtils.Object.isNullOrUndefined(context.parameters.value.attributes.MinValue)) {
                    MktSvcCommon.ErrorHandling.ExceptionHandler.throwException(ControlUtils.String.Format(MktSvcCommon.CommonControl.InvalidDataBagKeyFormat, "value.attributes.MinValue"));
                }
                if (ControlUtils.Object.isNullOrUndefined(context.parameters.value.attributes.MaxValue)) {
                    MktSvcCommon.ErrorHandling.ExceptionHandler.throwException(ControlUtils.String.Format(MktSvcCommon.CommonControl.InvalidDataBagKeyFormat, "value.attributes.MaxValue"));
                }
                if (hasStep && ControlUtils.Object.isNullOrUndefined(context.parameters.step)) {
                    MktSvcCommon.ErrorHandling.ExceptionHandler.throwException(ControlUtils.String.Format(MktSvcCommon.CommonControl.InvalidDataBagKeyFormat, "step"));
                }
                if (ControlUtils.Object.isNullOrUndefined(context.parameters.min)) {
                    MktSvcCommon.ErrorHandling.ExceptionHandler.throwException(ControlUtils.String.Format(MktSvcCommon.CommonControl.InvalidDataBagKeyFormat, "min"));
                }
                if (ControlUtils.Object.isNullOrUndefined(context.parameters.max)) {
                    MktSvcCommon.ErrorHandling.ExceptionHandler.throwException(ControlUtils.String.Format(MktSvcCommon.CommonControl.InvalidDataBagKeyFormat, "max"));
                }
            };
            /**
             * Process the property bag values (set default values, gracefully handle customization error scenarios).
             * @param context object passed by the infra
             * @param notificationHandler object
             * @param hasStep boolean flag
             * @param roundValues boolean flag
             */
            NumericInterval.processPropertyBagValues = function (context, notificationHandler, roundValues) {
                if (roundValues === void 0) { roundValues = true; }
                if (ControlUtils.Object.isNullOrUndefined(context.parameters)) {
                    MktSvcCommon.ErrorHandling.ExceptionHandler.throwException("Expected context.parameters object");
                }
                var min = context.parameters.min;
                var max = context.parameters.max;
                var value = context.parameters.value;
                var step = context.parameters.step;
                var hasStep = !ControlUtils.Object.isNullOrUndefined(step);
                if (ControlUtils.Object.isNullOrUndefined(notificationHandler)) {
                    MktSvcCommon.ErrorHandling.ExceptionHandler.throwException("Expected notificationHandler object");
                }
                notificationHandler.clear(MktSvcCommon.ErrorHandling.ErrorCode.ValueOutOfRangeId);
                if (ControlUtils.Object.isNullOrUndefined(min.raw)) {
                    min.raw = context.parameters.value.attributes.MinValue;
                }
                if (ControlUtils.Object.isNullOrUndefined(max.raw)) {
                    max.raw = context.parameters.value.attributes.MaxValue;
                }
                // swap min / max if wrongly set by the customizer
                if (max.raw < min.raw) {
                    var swap = max.raw;
                    max.raw = min.raw;
                    min.raw = swap;
                }
                // the error flag is set whenever the bound property is outside the range [attributes.minValue, attributes.maxValue]
                if (ControlUtils.Object.isNullOrUndefined(value.raw) || value.error == true) {
                    value.raw = min.raw;
                }
                if (hasStep && ControlUtils.Object.isNullOrUndefined(step.raw)) {
                    step.raw = NumericInterval.StepDefaultValue;
                }
                if (roundValues) {
                    min.raw = Math.round(min.raw);
                    max.raw = Math.round(max.raw);
                    value.raw = Math.round(value.raw);
                    if (hasStep) {
                        step.raw = Math.round(step.raw);
                    }
                }
                if (hasStep && (step.raw > (max.raw - min.raw) || (step.raw <= 0) || (value.raw % step.raw !== 0))) {
                    step.raw = NumericInterval.StepDefaultValue;
                }
                if (value.raw < min.raw || value.raw > max.raw) {
                    var messageFormat = context.resources.getString(MktSvcCommon.ErrorHandling.ErrorCode.ValueOutOfRangeId);
                    var message = ControlUtils.String.Format(messageFormat, min.raw, max.raw);
                    notificationHandler.notify(message, MktSvcCommon.ErrorHandling.ErrorCode.ValueOutOfRangeId);
                }
            };
            /**
             * Return a optional number propery
             * @param value the raw value
             * @returns a number property.
             */
            NumericInterval.createOptionalNumberPropery = function (value) {
                return {
                    raw: value,
                    type: "Optional",
                    error: null,
                    attributes: null,
                    errorMessage: null
                };
            };
            /**
             * Move the value to its correct step.
             * @param value the raw value
             * @param context the databag
             * @returns the new value
             */
            NumericInterval.moveValueToMultipleOfStep = function (value, context) {
                if (Math.abs(value - context.parameters.min.raw) % context.parameters.step.raw !== 0 && value !== context.parameters.max.raw) {
                    var stepsAfterMinimum = Math.floor(Math.abs(value - context.parameters.min.raw) / context.parameters.step.raw);
                    if (isNaN(stepsAfterMinimum)) {
                        stepsAfterMinimum = 0;
                    }
                    value = context.parameters.min.raw + stepsAfterMinimum * context.parameters.step.raw;
                    if (value > context.parameters.max.raw) {
                        value = context.parameters.max.raw;
                    }
                }
                return value;
            };
            /**
             * Gets the formatted value of the numeric control
             * @param value the NumberProperty object from the context
             * @returns the formatted value as a string
             */
            NumericInterval.getFormattedValue = function (value) {
                var formattedValue = value.formatted;
                if (ControlUtils.Object.isNullOrUndefined(formattedValue)
                    || ControlUtils.String.isNullOrWhitespace(formattedValue)) {
                    var rawValue = value.raw;
                    formattedValue = !ControlUtils.Object.isNullOrUndefined(rawValue) ? rawValue.toString() : ControlUtils.String.Empty;
                }
                return formattedValue;
            };
            /**
            * Checks whether the formatted value is a percentage
            * @param formattedValue string
            * @remarks Wijmo does not accept a custom percentage symbol so we need to adhere to the default % symbol.
            */
            NumericInterval.isPercent = function (formattedValue) {
                return !ControlUtils.Object.isNullOrUndefined(formattedValue) && formattedValue.indexOf('%') > -1;
            };
            /**
            * Handles the behavior of the value container for numeric controls.
            * @param container for holding the value
            * @param control value as string
            */
            NumericInterval.setValueContainer = function (container, value) {
                var jqueryContainer = $(container);
                jqueryContainer.show();
                jqueryContainer.text(value);
            };
            /**
            * Gets the precision property
            * @remarks The precision is only present for decimals and currencies. Thus, we weakly type the attributes to reach this value.
            * @param property of type Mscrm.NumberProperty (weakly typed)
            * @returns precision attribute as a number
            */
            NumericInterval.getPrecision = function (property) {
                return property.attributes.Precision;
            };
            /**
            * Checks if the supplied parameter si a number
            * @param value the value that needs to checked
            * @returns true if the parameter is a number, false otherwise
            */
            NumericInterval.isNumber = function (value) {
                return !ControlUtils.Object.isNullOrUndefined(value) && typeof (value) == 'number';
            };
            /**
            * Returns the integral part of a number by removing any fractional digits
            * @param x a number
            */
            NumericInterval.trunc = function (x) {
                return x < 0 ? Math.ceil(x) : Math.floor(x);
            };
            /**
            * Checks to see if the value is a finite number.
            * @returns true if the parameter is a valid number, false otherwise
            */
            NumericInterval.isNumeric = function (value) {
                return !isNaN(value) && isFinite(value);
            };
            NumericInterval.StepDefaultValue = 1;
            return NumericInterval;
        }());
        ControlUtils_1.NumericInterval = NumericInterval;
    })(ControlUtils = MktSvcCommon.ControlUtils || (MktSvcCommon.ControlUtils = {}));
})(MktSvcCommon || (MktSvcCommon = {}));
// This file was forked from CRM main repository, v8.1 branch
//---------------------------------------------------------------------------------------------------------------
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    var ControlUtils;
    (function (ControlUtils) {
        'use strict';
        /**
        * Object helper methods.
        */
        var Property = (function () {
            function Property() {
            }
            /**
             * Checks if the bound property is null.
             * @param property The control specific bound property
             * @returns true if the bound property is null, false otherwise.
             */
            Property.isNullOrEmpty = function (property) {
                return MktSvc.Controls.Common.Object.isNullOrUndefined(property)
                    || MktSvc.Controls.Common.Object.isNullOrUndefined(property.raw)
                    || MktSvc.Controls.Common.String.isNullOrEmpty(property.raw);
            };
            return Property;
        }());
        ControlUtils.Property = Property;
    })(ControlUtils = MktSvcCommon.ControlUtils || (MktSvcCommon.ControlUtils = {}));
})(MktSvcCommon || (MktSvcCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    'use strict';
    var HtmlEncode = (function () {
        function HtmlEncode() {
        }
        HtmlEncode.encode = function (sourceString) {
            return $('<div>').text(sourceString).html();
        };
        return HtmlEncode;
    }());
    MktSvcCommon.HtmlEncode = HtmlEncode;
})(MktSvcCommon || (MktSvcCommon = {}));
// This file was forked from CRM main repository, v8.1 branch
//---------------------------------------------------------------------------------------------------------------
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="CommonReferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    'use strict';
    /**
     * The full screen helper uses the HTML5 Fullscreen API to enable full screen rendering of HTML elements
     */
    var FullscreenHelper = (function () {
        function FullscreenHelper() {
        }
        Object.defineProperty(FullscreenHelper, "supportsFullscreenApi", {
            /**
             * Checks if a browser supports the HTML5 Fullscreen API.
             */
            get: function () {
                var apiTarget = document;
                return apiTarget.fullscreenEnabled ||
                    apiTarget.webkitFullscreenEnabled ||
                    apiTarget.mozFullScreenEnabled ||
                    apiTarget.msFullscreenEnabled;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FullscreenHelper, "fullscreenElement", {
            /**
             * Gets the current full screen element using the HTML5 Fullscreen API.
             */
            get: function () {
                var apiTarget = document;
                return apiTarget.fullscreenElement ||
                    apiTarget.webkitFullscreenElement ||
                    apiTarget.mozFullScreenElement ||
                    apiTarget.msFullscreenElement;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Requests an element to go full screen using the HTML5 Fullscreen API.
         * @param fullscreenTarget The element which to display full screen.
         */
        FullscreenHelper.requestFullscreen = function (fullscreenTarget) {
            if (fullscreenTarget.requestFullscreen) {
                fullscreenTarget.requestFullscreen();
            }
            else if (fullscreenTarget.webkitRequestFullscreen) {
                fullscreenTarget.webkitRequestFullscreen();
            }
            else if (fullscreenTarget.mozRequestFullScreen) {
                fullscreenTarget.mozRequestFullScreen();
            }
            else if (fullscreenTarget.msRequestFullscreen) {
                fullscreenTarget.msRequestFullscreen();
            }
        };
        /**
         * Requests an element to go full screen using styling.
         * @param fullscreenTarget The element which to display full screen.
         */
        FullscreenHelper.requestFullscreenUsingStyling = function (fullscreenTarget) {
            $(fullscreenTarget).css("width", "100vw");
            $(fullscreenTarget).css("height", "100vh");
            $(fullscreenTarget).css("overflow", "visible !important");
            $(fullscreenTarget).css("position", "fixed !important");
            $(fullscreenTarget).css("top", "0px");
            $(fullscreenTarget).css("left", "0px");
            $(fullscreenTarget).css("background-color", "#000000");
        };
        /**
         * Removes the element currently occupying the full screen from the full screen using the HTML5 Fullscreen API.
         */
        FullscreenHelper.exitFullscreen = function () {
            var apiTarget = document;
            if (apiTarget.exitFullscreen) {
                apiTarget.exitFullscreen();
            }
            else if (apiTarget.webkitExitFullscreen) {
                apiTarget.webkitExitFullscreen();
            }
            else if (apiTarget.mozCancelFullScreen) {
                apiTarget.mozCancelFullScreen();
            }
            else if (apiTarget.msExitFullscreen) {
                apiTarget.msExitFullscreen();
            }
        };
        /**
         * Removes an element from occupying the full screen using styling.
         * @param fullscreenTarget The element which to remove from the full screen.
         */
        FullscreenHelper.exitFullscreenUsingStyling = function (fullscreenTarget) {
            $(fullscreenTarget).css("width", "");
            $(fullscreenTarget).css("height", "");
            $(fullscreenTarget).css("overflow", "");
            $(fullscreenTarget).css("position", "");
            $(fullscreenTarget).css("top", "");
            $(fullscreenTarget).css("left", "");
            $(fullscreenTarget).css("background-color", "");
        };
        return FullscreenHelper;
    }());
    MktSvcCommon.FullscreenHelper = FullscreenHelper;
})(MktSvcCommon || (MktSvcCommon = {}));
// This file was forked from CRM main repository, v8.1 branch
//---------------------------------------------------------------------------------------------------------------
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="CommonReferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    'use strict';
    /**
     * Current sort status of a data set column
     */
    var DataSetColumnSortStatus = (function () {
        function DataSetColumnSortStatus() {
        }
        return DataSetColumnSortStatus;
    }());
    MktSvcCommon.DataSetColumnSortStatus = DataSetColumnSortStatus;
})(MktSvcCommon || (MktSvcCommon = {}));
// This file was forked from CRM main repository, v8.1 branch
//---------------------------------------------------------------------------------------------------------------
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="CommonReferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    'use strict';
    /**
    * An expression used to represent a filter condition.
    */
    var ConditionExpression = (function () {
        function ConditionExpression() {
        }
        return ConditionExpression;
    }());
    MktSvcCommon.ConditionExpression = ConditionExpression;
})(MktSvcCommon || (MktSvcCommon = {}));
// This file was forked from CRM main repository, v8.1 branch
//---------------------------------------------------------------------------------------------------------------
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="CommonReferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    'use strict';
    /**
    * An expression used to represent a filter.
    */
    var FilterExpression = (function () {
        function FilterExpression() {
        }
        return FilterExpression;
    }());
    MktSvcCommon.FilterExpression = FilterExpression;
})(MktSvcCommon || (MktSvcCommon = {}));
// This file was forked from CRM main repository, v8.1 branch
//---------------------------------------------------------------------------------------------------------------
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="CommonReferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    'use strict';
    var PrimitiveValue = (function () {
        function PrimitiveValue(value, dataType) {
            this.value = value;
            this.dataType = dataType;
        }
        return PrimitiveValue;
    }());
    MktSvcCommon.PrimitiveValue = PrimitiveValue;
})(MktSvcCommon || (MktSvcCommon = {}));
// This file was forked from CRM main repository, v8.1 branch
//---------------------------------------------------------------------------------------------------------------
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    var Globalization;
    (function (Globalization) {
        'use strict';
        /**
        * Exposes type names used by the CRM infrastructure.
        */
        var CrmNumberType = (function () {
            function CrmNumberType() {
            }
            CrmNumberType.CrmDecimalTypeName = "decimal";
            CrmNumberType.CrmDoubleTypeName = "double";
            CrmNumberType.CrmIntegerTypeName = "integer";
            CrmNumberType.CrmMoneyTypeName = "money";
            return CrmNumberType;
        }());
        Globalization.CrmNumberType = CrmNumberType;
    })(Globalization = MktSvcCommon.Globalization || (MktSvcCommon.Globalization = {}));
})(MktSvcCommon || (MktSvcCommon = {}));
// This file was forked from CRM main repository, v8.1 branch
//---------------------------------------------------------------------------------------------------------------
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    var Globalization;
    (function (Globalization) {
        'use strict';
        var ExceptionHandler = MktSvcCommon.ErrorHandling.ExceptionHandler;
        /**
        * Number format pattern factory class. This class performs the mappings from .NET-compatible values to string number patterns.
        */
        var NumberPatternFactory = (function () {
            function NumberPatternFactory() {
                this.currencyPositivePatternArray = ["$n", "n$", "$ n", "n $"];
                this.currencyNegativePatternArray = ["($n)", "-$n", "$-n", "$n-", "(n$)", "-n$", "n-$", "n$-", "-n $", "-$ n", "n $-", "$ n-", "$ -n", "n- $", "($ n)", "(n $)"];
                this.percentPositivePatternArray = ["n %", "n%", "%n", "% n"];
                this.percentNegativePatternArray = ["-n %", "-n%", "-%n", "%-n", "%n-", "n-%", "n%-", "-% n", "n %-", "% n-", "% -n", "n- %"];
            }
            /**
             * Returns the number format pattern having the specified value for currency positive numbers.
             * More info here: https://msdn.microsoft.com/en-us/library/system.globalization.numberformatinfo.currencypositivepattern(v=vs.110).aspx
             * @param patternValue The value of the number formatting pattern. See the documentation above for more info.
             */
            NumberPatternFactory.prototype.getCurrencyPositivePattern = function (patternValue) {
                return this.getPattern(this.currencyPositivePatternArray, patternValue);
            };
            /**
             * Returns the number format pattern having the specified value for currency negative numbers.
             * More info here: https://msdn.microsoft.com/en-us/library/system.globalization.numberformatinfo.currencynegativepattern(v=vs.110).aspx
             * @param patternValue The value of the number formatting pattern. See the documentation above for more info.
             */
            NumberPatternFactory.prototype.getCurrencyNegativePattern = function (patternValue) {
                return this.getPattern(this.currencyNegativePatternArray, patternValue);
            };
            /**
             * Returns the number format pattern having the specified value for currency positive numbers.
             * More info here: https://msdn.microsoft.com/en-us/library/system.globalization.numberformatinfo.percentpositivepattern(v=vs.110).aspx
             * @param patternValue The value of the number formatting pattern. See the documentation above for more info.
             */
            NumberPatternFactory.prototype.getPercentPositivePattern = function (patternValue) {
                return this.getPattern(this.percentPositivePatternArray, patternValue);
            };
            /**
             * Returns the number format pattern having the specified value for currency positive numbers.
             * More info here: https://msdn.microsoft.com/en-us/library/system.globalization.numberformatinfo.percentnegativepattern(v=vs.110).aspx
             * @param patternValue The value of the number formatting pattern. See the documentation above for more info.
             */
            NumberPatternFactory.prototype.getPercentNegativePattern = function (patternValue) {
                return this.getPattern(this.percentNegativePatternArray, patternValue);
            };
            NumberPatternFactory.prototype.getPattern = function (patternArray, patternValue) {
                if (patternValue < 0 || patternValue >= patternArray.length) {
                    ExceptionHandler.throwException(MktSvc.Controls.Common.String.Format(NumberPatternFactory.NoSuchPatternError, patternValue));
                }
                return patternArray[patternValue];
            };
            NumberPatternFactory.NoSuchPatternError = "The number formatting pattern value that you specified does not exist: {0}.";
            return NumberPatternFactory;
        }());
        Globalization.NumberPatternFactory = NumberPatternFactory;
    })(Globalization = MktSvcCommon.Globalization || (MktSvcCommon.Globalization = {}));
})(MktSvcCommon || (MktSvcCommon = {}));
// This file was forked from CRM main repository, v8.1 branch
//---------------------------------------------------------------------------------------------------------------
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/**
 * Please read carefully and thoroughly when adding a new file in the CommonControl's CommonReferences.
 *
 * DO NOT reference control/library-specific .ts files in this file.
 * Each control project should be self-contained as far as references go.
 * ONLY add libraries and control files that you want in ALL controls.
 * Make sure to add internal project references to each project's PrivateReferences.ts file.
 */
/// <reference path="../../Typings/mscrm.d.ts" />
/// <reference path="../../Typings/mscrmcomponents.d.ts" />
/// <reference path="../../OpenSource/Typings/jquery/jquery.d.ts" />
/// <reference path="../../Typings/Controls.Common.d.ts" />
/// <reference path="../../Typings/Client.ControlsCommon.d.ts" />
/// <reference path="errorhandling/errorcode.ts" />
/// <reference path="errorhandling/notificationhandler.ts" />
/// <reference path="errorhandling/exceptionhandler.ts" />
/// <reference path="Mscrm/UpdateEvents.ts" />
/// <reference path="attributeconstants.ts" />
/// <reference path="assistEdit/iassisteditchildcontrol.ts" />
/// <reference path="assistEdit/iassisteditcontainerrenderer.ts" />
/// <reference path="assistEdit/IAssistEdit.ts" />
/// <reference path="assistEdit/IInputAssistEdit.ts" />
/// <reference path="assistEdit/IInputAssistEditFactory.ts" />
/// <reference path="assistEdit/IAssistEditBlockCleaner.ts" />
/// <reference path="assistEdit/AssistEditEventConstants.ts" />
/// <reference path="assistEdit/AssistEditConstants.ts" />
/// <reference path="assistEdit/IAssistEditCommandFactory.ts" />
/// <reference path="assistEdit/AssistEditInputSpanRenderer.ts" />
/// <reference path="SelectionManager.ts"/>
/// <reference path="controlstate.ts" />
/// <reference path="control.ts" />
/// <reference path="fieldcontrolbase.ts" />
/// <reference path="eventconstants.ts" />
/// <reference path="eventguard.ts" />
/// <reference path="eventargs/AssistEditItemSelectedEventArgs.ts" />
/// <reference path="eventargs/imageselectedeventparameter.ts" />
/// <reference path="NotificationHelper/NotificationHelper.ts"/>
/// <reference path="NotificationHelper/INotificationHelper.ts"/>
/// <reference path="methodconstants.ts" />
/// <reference path="utils/customcontrolevent.ts" />
/// <reference path="utils/enum.ts" />
/// <reference path="utils/event.ts" />
/// <reference path="utils/hittarget.ts" />
/// <reference path="utils/numericinterval.ts" />
/// <reference path="utils/property.ts" />
/// <reference path="utils/HtmlEncode.ts" />
/// <reference path="fullscreenhelper.ts" />
/// <reference path="DataSetColumnSortStatus.ts"/>
/// <reference path="ConditionExpression.ts"/>
/// <reference path="FilterExpression.ts"/>
/// <reference path="PrimitiveValue.ts"/>
/// <reference path="globalization/crmnumbertype.ts" />
/// <reference path="globalization/numberpatternfactory.ts" /> 
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../commonreferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    var AssistEdit;
    (function (AssistEdit) {
        'use strict';
        var AssistEditConstants = (function () {
            function AssistEditConstants() {
            }
            AssistEditConstants.assistEditInputSpanClassName = 'assistEditInput';
            AssistEditConstants.assistEditActivePlaceholder = "assistEditActivePlaceholder";
            AssistEditConstants.assistEditInputWrapperClassName = 'assistEditInputWrapper';
            AssistEditConstants.assistEditSelectedTextContainer = 'assistEditSelectedTextContainer';
            AssistEditConstants.assistEditContainerClassName = 'assistEditContainer';
            AssistEditConstants.assistEditEmptyPlaceholderClassName = 'assistEditEmptyPlaceholder';
            return AssistEditConstants;
        }());
        AssistEdit.AssistEditConstants = AssistEditConstants;
    })(AssistEdit = MktSvcCommon.AssistEdit || (MktSvcCommon.AssistEdit = {}));
})(MktSvcCommon || (MktSvcCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation.  All rights reserved.
*/
var MktSvcCommon;
(function (MktSvcCommon) {
    var AssistEdit;
    (function (AssistEdit) {
        'use strict';
        var AssistEditControlCallback = (function () {
            function AssistEditControlCallback() {
            }
            return AssistEditControlCallback;
        }());
        AssistEdit.AssistEditControlCallback = AssistEditControlCallback;
    })(AssistEdit = MktSvcCommon.AssistEdit || (MktSvcCommon.AssistEdit = {}));
})(MktSvcCommon || (MktSvcCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation.  All rights reserved.
*/
var MktSvcCommon;
(function (MktSvcCommon) {
    var AssistEdit;
    (function (AssistEdit) {
        'use strict';
        var exclusionEntityTypeFilterConst = "exclusionEntityTypeFilter";
        var AssistEditChildControl = (function () {
            /**
             * Initializes a new instance of AssistEditChildControl
             */
            function AssistEditChildControl(context, assistEditSource, assistEditContainerRenderer, parameterProvider) {
                this.context = context;
                this.parameterProvider = parameterProvider;
                this.assistEditSource = assistEditSource;
                this.assistEditContainerRenderer = assistEditContainerRenderer;
            }
            /**
             * Configure the AssistEditChildControl with the event broker.
             * @param emailEventBroker The email Event Broker
             */
            AssistEditChildControl.prototype.setup = function (assistEditChildControlCallbacks) {
                this.onFinalItemSelected = assistEditChildControlCallbacks.finalItemSelectedCallback;
                this.onItemSelected = assistEditChildControlCallbacks.itemSelectedCallback;
                this.onOptionFocused = assistEditChildControlCallbacks.optionFocusedCallback;
            };
            /**
             * Creates the Assist Edit custom control
             */
            AssistEditChildControl.prototype.open = function (container, initialValue, listBoxId) {
                this.currentDocument = container[0].ownerDocument;
                this.assistEditControlId = MktSvc.Controls.Common.ControlGuidGenerator.newGuid("assist_edit");
                // Append the assist edit container to the input
                var assistEditContainer = this.assistEditContainerRenderer.render(container);
                assistEditContainer.attr('id', this.assistEditControlId);
                this.context.utils.bindDOMElement(this.generateChildAssistEditControl(initialValue, listBoxId), assistEditContainer[0]);
            };
            /**
             * Update the Assist Edit custom control
             */
            AssistEditChildControl.prototype.update = function (value) {
                if (!MktSvc.Controls.Common.Object.isNullOrUndefined(this.updateAssistEditCallback)) {
                    this.updateAssistEditCallback(value);
                }
            };
            /**
             * Trigger assist edit list box keydown event
             */
            AssistEditChildControl.prototype.keydown = function (event) {
                if (!MktSvc.Controls.Common.Object.isNullOrUndefined(this.assistEditKeydownCallback)) {
                    this.assistEditKeydownCallback(event);
                }
            };
            /**
             * Generate an assist edit control
             * @returns an assist edit control
             */
            AssistEditChildControl.prototype.generateChildAssistEditControl = function (initialValue, listBoxId) {
                var dynamicSource = this.parameterProvider.getDataSetParameter(this.assistEditSource, MktSvcCommon.EntityConstants.dynamicContentMetadataTableName);
                var exclusionEntityTypeFilter;
                if (this.context.parameters.hasOwnProperty(exclusionEntityTypeFilterConst)) {
                    exclusionEntityTypeFilter = this.parameterProvider.getFalseBoundParameter(this.context.parameters[exclusionEntityTypeFilterConst].raw);
                }
                else {
                    exclusionEntityTypeFilter = this.parameterProvider.getFalseBoundParameter("");
                }
                var listBoxIdParameter = this.parameterProvider.getInputParameter(listBoxId);
                var properties = {
                    id: this.assistEditControlId,
                    key: this.assistEditControlId,
                    parameters: {
                        dynamicSource: dynamicSource,
                        exclusionEntityTypeFilter: exclusionEntityTypeFilter,
                        listBoxId: listBoxIdParameter
                    },
                    childeventlisteners: this.generateChildListeners(initialValue)
                };
                return this.context.factory.createComponent("MscrmControls.AssistEditControl.AssistEditControl", this.assistEditControlId, properties);
            };
            /**
            * Generate a child listeners' list
            * @returns the child listeners
            */
            AssistEditChildControl.prototype.generateChildListeners = function (initialValue) {
                var _this = this;
                var finalItemSelectedHandler = function (args) { _this.onAssistEditItemSelected(args); };
                var itemSelectedHandler = function (args) { _this.onItemSelected(args); };
                var optionFocusedHandler = function (args) { _this.onOptionFocused(args); };
                var initCompleteHandler = function (args) {
                    _this.updateAssistEditCallback = args.updateCallback;
                    _this.assistEditKeydownCallback = args.keydownCallback;
                    _this.updateAssistEditCallback(initialValue);
                };
                var onFinalItemSelected = {
                    eventname: MktSvcCommon.ControlUtils.CustomControlEvent.finalItemSelected,
                    eventhandler: finalItemSelectedHandler
                };
                var onItemSelected = {
                    eventname: MktSvcCommon.ControlUtils.CustomControlEvent.itemSelected,
                    eventhandler: itemSelectedHandler
                };
                var onInitComplete = {
                    eventname: MktSvcCommon.ControlUtils.CustomControlEvent.initComplete,
                    eventhandler: initCompleteHandler
                };
                var onOptionFocused = {
                    eventname: MktSvcCommon.ControlUtils.CustomControlEvent.optionFocused,
                    eventhandler: optionFocusedHandler
                };
                return [onFinalItemSelected, onItemSelected, onInitComplete, onOptionFocused];
            };
            AssistEditChildControl.prototype.onAssistEditItemSelected = function (parameters) {
                this.assistEditControlCallback(parameters.value);
                this.dispose();
            };
            AssistEditChildControl.prototype.dispose = function () {
                this.context.utils.unbindDOMComponent(this.assistEditControlId);
                this.assistEditContainerRenderer.dispose();
            };
            /**
             * The callback that notifies Email Editor the assist edit item was selected
             * @param selectedValue The selected value returned by the assist edit
             */
            AssistEditChildControl.prototype.assistEditControlCallback = function (selectedValue) {
                var eventArgs = new MktSvcCommon.EventArgs.AssistEditItemSelectedEventArgs();
                eventArgs.value = selectedValue;
                this.onFinalItemSelected(eventArgs);
            };
            return AssistEditChildControl;
        }());
        AssistEdit.AssistEditChildControl = AssistEditChildControl;
    })(AssistEdit = MktSvcCommon.AssistEdit || (MktSvcCommon.AssistEdit = {}));
})(MktSvcCommon || (MktSvcCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation.  All rights reserved.
*/
var MktSvcCommon;
(function (MktSvcCommon) {
    var AssistEdit;
    (function (AssistEdit) {
        'use strict';
        var AssistEditChildControlFactory = (function () {
            function AssistEditChildControlFactory() {
            }
            AssistEditChildControlFactory.prototype.create = function (context, assistEditSource, assistEditContainerRenderer, parameterProvider) {
                return new AssistEdit.AssistEditChildControl(context, assistEditSource, assistEditContainerRenderer, parameterProvider);
            };
            return AssistEditChildControlFactory;
        }());
        AssistEdit.AssistEditChildControlFactory = AssistEditChildControlFactory;
    })(AssistEdit = MktSvcCommon.AssistEdit || (MktSvcCommon.AssistEdit = {}));
})(MktSvcCommon || (MktSvcCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../commonreferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    var AssistEdit;
    (function (AssistEdit) {
        'use strict';
    })(AssistEdit = MktSvcCommon.AssistEdit || (MktSvcCommon.AssistEdit = {}));
})(MktSvcCommon || (MktSvcCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    'use strict';
    var CdnEnabledControlConfigProvider = (function () {
        function CdnEnabledControlConfigProvider(clientBaseUrl, webResourceRootNamespace, controlFolder, orgConfigProvider) {
            this.clientBaseUrl = clientBaseUrl;
            this.webResourceRootNamespace = webResourceRootNamespace;
            this.controlFolder = controlFolder;
            this.orgConfigProvider = orgConfigProvider;
        }
        CdnEnabledControlConfigProvider.prototype.getControlConfiguration = function (callback) {
            var _this = this;
            this.getLatestCdnBasePath(function (controlBasePath, cdnRoot) {
                var urlBuilder = new MktSvc.Controls.Common.UrlBuilder(controlBasePath);
                urlBuilder.appendSubPath(_this.controlFolder);
                callback(urlBuilder.build(), cdnRoot);
            });
        };
        CdnEnabledControlConfigProvider.prototype.getLatestCdnBasePath = function (callback) {
            var _this = this;
            var endpointsConfig = this.orgConfigProvider.getConfigurationValues(MktSvcCommon.OrgConfigNamespaces.Endpoints);
            var uiConfig = this.orgConfigProvider.getConfigurationValues(MktSvcCommon.OrgConfigNamespaces.Ui);
            $.when(endpointsConfig, uiConfig).done(function (endpointsConfig, uiConfig) {
                var controlRoot = _this.getControlsRoot(endpointsConfig, uiConfig);
                var cdnRoot = !endpointsConfig ? "" : endpointsConfig.get(MktSvcCommon.OrgConfigKeys.CDNRoot) || "";
                callback(controlRoot, cdnRoot);
            });
        };
        CdnEnabledControlConfigProvider.prototype.getControlsRoot = function (endpointsConfig, uiConfig) {
            if (uiConfig && endpointsConfig &&
                uiConfig.hasKey(MktSvcCommon.OrgConfigKeys.CDNEnabled) &&
                endpointsConfig.hasKey(MktSvcCommon.OrgConfigKeys.CDNRoot)) {
                var cdnEnabled = JSON.parse(uiConfig.get(MktSvcCommon.OrgConfigKeys.CDNEnabled));
                var controlsRoot = endpointsConfig.get(MktSvcCommon.OrgConfigKeys.CDNRoot);
                if (cdnEnabled) {
                    return controlsRoot;
                }
            }
            return this.getLocalCrmWebResourcesPath();
        };
        CdnEnabledControlConfigProvider.prototype.getLocalCrmWebResourcesPath = function () {
            var urlBuilder = new MktSvc.Controls.Common.UrlBuilder(this.clientBaseUrl)
                .appendSubPath("WebResources")
                .appendSubPath(this.webResourceRootNamespace);
            return urlBuilder.build();
        };
        return CdnEnabledControlConfigProvider;
    }());
    MktSvcCommon.CdnEnabledControlConfigProvider = CdnEnabledControlConfigProvider;
})(MktSvcCommon || (MktSvcCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../../CommonReferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    'use strict';
    var ConfigElementModel = (function () {
        function ConfigElementModel() {
        }
        return ConfigElementModel;
    }());
    MktSvcCommon.ConfigElementModel = ConfigElementModel;
})(MktSvcCommon || (MktSvcCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../../CommonReferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    'use strict';
})(MktSvcCommon || (MktSvcCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../../CommonReferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    'use strict';
    var OrgConfigKeys = (function () {
        function OrgConfigKeys() {
        }
        OrgConfigKeys.CDNEnabled = "CDNEnabled";
        OrgConfigKeys.CDNRoot = "PublicAssetsCdn";
        return OrgConfigKeys;
    }());
    MktSvcCommon.OrgConfigKeys = OrgConfigKeys;
})(MktSvcCommon || (MktSvcCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../../CommonReferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    'use strict';
    var OrgConfigNamespaces = (function () {
        function OrgConfigNamespaces() {
        }
        OrgConfigNamespaces.Ui = "Ui";
        OrgConfigNamespaces.Endpoints = "Endpoints";
        return OrgConfigNamespaces;
    }());
    MktSvcCommon.OrgConfigNamespaces = OrgConfigNamespaces;
})(MktSvcCommon || (MktSvcCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../../CommonReferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    'use strict';
    var OrgConfigProvider = (function () {
        function OrgConfigProvider(configReader) {
            this.configReader = configReader;
        }
        OrgConfigProvider.prototype.getConfigurationValues = function (namespace) {
            var deferred = $.Deferred();
            this.configReader.readConfiguration().done(function (configElements) {
                var result = new MktSvc.Controls.Common.Dictionary();
                for (var _i = 0, configElements_1 = configElements; _i < configElements_1.length; _i++) {
                    var configElement = configElements_1[_i];
                    if (configElement.namespace === namespace) {
                        result.addOrUpdate(configElement.name, configElement.value);
                    }
                }
                deferred.resolve(result);
            }).fail(function () {
                deferred.reject();
            });
            return deferred.promise();
        };
        return OrgConfigProvider;
    }());
    MktSvcCommon.OrgConfigProvider = OrgConfigProvider;
})(MktSvcCommon || (MktSvcCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../../CommonReferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    'use strict';
})(MktSvcCommon || (MktSvcCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../../CommonReferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    'use strict';
    var MarketingConfigReader = (function () {
        function MarketingConfigReader(baseUrl, serviceClient) {
            this.baseUrl = baseUrl;
            this.serviceClient = serviceClient;
            this.configModel = null;
        }
        MarketingConfigReader.prototype.readConfiguration = function () {
            var _this = this;
            var deferred = $.Deferred();
            if (this.configModel && this.configModel.length > 0) {
                deferred.resolve(this.configModel);
            }
            else {
                var entityRecordUrlBuilder = new MktSvc.Controls.Common.EntityRecordUrlBuilder(this.baseUrl, MktSvcCommon.EntityConstants.marketingConfigurationsRecordSetName);
                entityRecordUrlBuilder.setSelectedFields([MktSvcCommon.EntityConstants.msdyncrm_organization_config]);
                this.serviceClient.getData(entityRecordUrlBuilder.build()).done(function (result) {
                    var response = MktSvc.Controls.Common.String.isNullUndefinedOrWhitespace(result) ? [] : JSON.parse(result).value;
                    if (response &&
                        response.length > 0 &&
                        !MktSvc.Controls.Common.String.isNullUndefinedOrWhitespace(response[0][MktSvcCommon.EntityConstants.msdyncrm_organization_config])) {
                        var rawConfig = response[0][MktSvcCommon.EntityConstants.msdyncrm_organization_config];
                        _this.configModel = JSON.parse(rawConfig);
                    }
                    else {
                        _this.configModel = [];
                    }
                    deferred.resolve(_this.configModel);
                }).fail(function () {
                    deferred.reject();
                });
            }
            return deferred.promise();
        };
        return MarketingConfigReader;
    }());
    MktSvcCommon.MarketingConfigReader = MarketingConfigReader;
})(MktSvcCommon || (MktSvcCommon = {}));
// This file was forked from CRM main repository, v9.0 branch
//---------------------------------------------------------------------------------------------------------------
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="CommonReferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    'use strict';
    var ControlLoadDecorator = (function () {
        function ControlLoadDecorator(controlName) {
            this.controlName = controlName;
            this.decoratedControl = null;
            this.decoratedControlDeferred = null;
            this.logger = null;
        }
        ControlLoadDecorator.prototype.getDecoratedControlInstance = function (controlLoadResult) {
            return null;
        };
        ControlLoadDecorator.prototype.getScriptDependencies = function () {
            return [];
        };
        ControlLoadDecorator.prototype.getStyleSheetDependencies = function () {
            return [];
        };
        ControlLoadDecorator.prototype.getControlLoader = function (context) {
            return null;
        };
        /**
         * Initializes the control. This function will receive the HTML Div element that will contain your custom control
         * as well as a function to notify the infrastructure that your outputs have changed and that it should call getOutputs()
         * @param context The "Input Bag" containing the parameters and other control metadata.
         * @param notifyOutputChanged A Callback to notify the infrastructure to read the outputs
         * @param state The control state.
         * @param container The HTML Element that will contain the control
         */
        ControlLoadDecorator.prototype.init = function (context, notifyOutputChanged, state, container) {
            var _this = this;
            this.logger = new MktSvcCommon.Logger.TelemetryLogger("MktSvcCommon.ControlLoadDecorator", context);
            // register logger for ControlLoadDecorator
            this.startDecorateAsync(context);
            this.decoratedControlDeferred.done(function (decoratedControl) {
                try {
                    decoratedControl.init(context, notifyOutputChanged, state, container);
                }
                catch (e) {
                    _this.logger.logException(MktSvc.Controls.Common.TraceLevel.Error, "MktSvcCommon.ControlLoadDecorator.init", e, new MktSvc.Controls.Common.Dictionary({ "ControlName": _this.controlName }));
                }
            });
        };
        /**
        * Updates the control with data from the a bag of values currently assigned to the control's manifest parameters
        * @param context The bag of values described above
        */
        ControlLoadDecorator.prototype.updateView = function (context) {
            var _this = this;
            this.decoratedControlDeferred.done(function (decoratedControl) {
                try {
                    decoratedControl.updateView(context);
                }
                catch (e) {
                    _this.logger.logException(MktSvc.Controls.Common.TraceLevel.Error, "MktSvcCommon.ControlLoadDecorator.updateView", e, new MktSvc.Controls.Common.Dictionary({ "ControlName": _this.controlName }));
                }
            });
        };
        /**
        * @returns The a bag of output values to pass to the infrastructure
        */
        ControlLoadDecorator.prototype.getOutputs = function () {
            if (!this.decoratedControl) {
                this.logger.log(MktSvc.Controls.Common.TraceLevel.Info, "MktSvcCommon.ControlLoadDecorator.getOutputs", new MktSvc.Controls.Common.Dictionary({ "ControlName": this.controlName, Message: "Decorated control is not ready" }));
                throw Error("Decorated control not ready");
            }
            return this.decoratedControl.getOutputs();
        };
        /**
        * This function destroys the control and cleans up
        */
        ControlLoadDecorator.prototype.destroy = function () {
            var _this = this;
            if (this.decoratedControlDeferred) {
                this.decoratedControlDeferred.done(function (decoratedControl) {
                    try {
                        decoratedControl.destroy();
                    }
                    catch (e) {
                        _this.logger.logException(MktSvc.Controls.Common.TraceLevel.Error, "MktSvcCommon.ControlLoadDecorator.destroy", e, new MktSvc.Controls.Common.Dictionary({ "ControlName": _this.controlName }));
                    }
                });
            }
        };
        ControlLoadDecorator.prototype.startDecorateAsync = function (context) {
            var _this = this;
            this.decoratedControlDeferred = $.Deferred();
            var controlLoader = this.getControlLoader(context);
            if (!controlLoader) {
                throw Error("controlLoader not initialized");
            }
            controlLoader.loadControl(this.getScriptDependencies(), this.getStyleSheetDependencies(), this.controlName)
                .done(function (controlLoadResult) {
                _this.decoratedControl = _this.getDecoratedControlInstance(controlLoadResult);
                _this.decoratedControlDeferred.resolve(_this.decoratedControl);
            });
        };
        return ControlLoadDecorator;
    }());
    MktSvcCommon.ControlLoadDecorator = ControlLoadDecorator;
})(MktSvcCommon || (MktSvcCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="CommonReferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    'use strict';
    var ControlResourcesFolderName;
    (function (ControlResourcesFolderName) {
        ControlResourcesFolderName.staticFiles = "static";
        ControlResourcesFolderName.webResourcesRoot = "msdyncrm_";
        ControlResourcesFolderName.assistEdit = "AssistEditControl";
        ControlResourcesFolderName.bingMap = "BingMapControlCore";
        ControlResourcesFolderName.campaignGallery = "CampaignGalleryControlCore";
        ControlResourcesFolderName.clickMap = "ClickMapControlCore";
        ControlResourcesFolderName.customerJourneyDesigner = "CustomerJourneyDesignerControl";
        ControlResourcesFolderName.emailEditor = "EmailEditor";
        ControlResourcesFolderName.emailTemplateGallery = "EmailTemplateGalleryControlCore";
        ControlResourcesFolderName.formsGallery = "FormsGalleryControlCore";
        ControlResourcesFolderName.formEditor = "FormEditor";
        ControlResourcesFolderName.imagePicker = "ImagePickerControlCore";
        ControlResourcesFolderName.inputAssistEdit = "InputAssistEditControl";
        ControlResourcesFolderName.leadScoringDesigner = "LeadScoringDesignerControl";
        ControlResourcesFolderName.pageEditor = "PageEditor";
        ControlResourcesFolderName.pageTemplateGallery = "PageTemplateGalleryControlCore";
        ControlResourcesFolderName.attributeSelectControl = "AttributeSelectControl";
        ControlResourcesFolderName.attributeMultiSelectControl = "AttributeMultiSelectControl";
    })(ControlResourcesFolderName = MktSvcCommon.ControlResourcesFolderName || (MktSvcCommon.ControlResourcesFolderName = {}));
})(MktSvcCommon || (MktSvcCommon = {}));
// This file was forked from CRM main repository, v8.1 branch
//---------------------------------------------------------------------------------------------------------------
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    'use strict';
    var ControlLoader = (function () {
        function ControlLoader(configProvider, dependencyManager, logger) {
            this.configProvider = configProvider;
            this.dependencyManager = dependencyManager;
            this.logger = logger;
        }
        ControlLoader.prototype.loadControl = function (scriptDependencies, styleSheetsDependencies, controlName) {
            var _this = this;
            var deferred = $.Deferred();
            this.configProvider.getControlConfiguration(function (controlPath, cdnRoot) {
                _this.logger.log(MktSvc.Controls.Common.TraceLevel.Info, "MktSvcCommon.ControlLoader.loadControl-cdnPathRetrieved", new MktSvc.Controls.Common.Dictionary({ "ControlPath": controlPath, "ControlName": controlName }));
                _this.dependencyManager.loadStylesheetsIntoDom(_this.getStyleSheetDependenciesCdn(controlPath, styleSheetsDependencies), function () {
                    var scriptsToLoad = _this.getScriptDependenciesCdn(controlPath, scriptDependencies);
                    _this.dependencyManager.loadScriptsIntoDomSequentially(scriptsToLoad, function () {
                        var controlLoadResult = new MktSvcCommon.ControlLoadResult(controlPath, cdnRoot);
                        deferred.resolve(controlLoadResult);
                    });
                });
            });
            return deferred.promise();
        };
        ControlLoader.prototype.getScriptDependenciesCdn = function (controlsRoot, scriptDependencies) {
            var result = [];
            for (var _i = 0, scriptDependencies_1 = scriptDependencies; _i < scriptDependencies_1.length; _i++) {
                var dependencyModel = scriptDependencies_1[_i];
                var urlBuilder = new MktSvc.Controls.Common.UrlBuilder(controlsRoot);
                urlBuilder.appendSubPath(dependencyModel.loadPath);
                result.push(new ControlsCommon.Utils.ScriptDependencyModel(dependencyModel.name, dependencyModel.id, urlBuilder.build()));
            }
            return result;
        };
        ControlLoader.prototype.getStyleSheetDependenciesCdn = function (controlsRoot, styleSheetsDependencies) {
            var result = [];
            for (var _i = 0, styleSheetsDependencies_1 = styleSheetsDependencies; _i < styleSheetsDependencies_1.length; _i++) {
                var dependencyModel = styleSheetsDependencies_1[_i];
                var urlBuilder = new MktSvc.Controls.Common.UrlBuilder(controlsRoot);
                urlBuilder.appendSubPath(dependencyModel.loadPath);
                result.push(new ControlsCommon.Utils.StyleSheetDependencyModel(dependencyModel.name, urlBuilder.build()));
            }
            return result;
        };
        return ControlLoader;
    }());
    MktSvcCommon.ControlLoader = ControlLoader;
})(MktSvcCommon || (MktSvcCommon = {}));
// This file was forked from CRM main repository, v8.1 branch
//---------------------------------------------------------------------------------------------------------------
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    'use strict';
    var ControlLoaderFactory = (function () {
        function ControlLoaderFactory(configProvider, logger) {
            this.configProvider = configProvider;
            this.logger = logger;
        }
        ControlLoaderFactory.prototype.create = function () {
            return new MktSvcCommon.ControlLoader(this.configProvider, new ControlsCommon.Utils.DependencyManager(document), this.logger);
        };
        return ControlLoaderFactory;
    }());
    MktSvcCommon.ControlLoaderFactory = ControlLoaderFactory;
})(MktSvcCommon || (MktSvcCommon = {}));
// This file was forked from CRM main repository, v8.1 branch
//---------------------------------------------------------------------------------------------------------------
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    'use strict';
    var ControlLoadResult = (function () {
        function ControlLoadResult(controlRootPath, cdnRootPath) {
            this.controlRootPath = controlRootPath;
            this.cdnRootPath = cdnRootPath;
        }
        return ControlLoadResult;
    }());
    MktSvcCommon.ControlLoadResult = ControlLoadResult;
})(MktSvcCommon || (MktSvcCommon = {}));
// This file was forked from CRM main repository, v8.1 branch
//---------------------------------------------------------------------------------------------------------------
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    'use strict';
})(MktSvcCommon || (MktSvcCommon = {}));
// This file was forked from CRM main repository, v8.1 branch
//---------------------------------------------------------------------------------------------------------------
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    'use strict';
})(MktSvcCommon || (MktSvcCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../commonreferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    var Logger;
    (function (Logger) {
        'use strict';
        var Object = MktSvc.Controls.Common.Object;
        var String = MktSvc.Controls.Common.String;
        var Dictionary = MktSvc.Controls.Common.Dictionary;
        var TraceLevel = MktSvc.Controls.Common.TraceLevel;
        var ParameterKeys = MktSvc.Controls.Common.ParameterKeys;
        /**
        * Implementation of Mscrm.Application event interface.
        */
        var TelementryEvent = (function () {
            function TelementryEvent(eventName, eventParameters) {
                this.eventName = eventName;
                this.eventParameters = eventParameters;
            }
            return TelementryEvent;
        }());
        Logger.TelementryEvent = TelementryEvent;
        /**
        * Implementation of Mscrm.Application event interface.
        */
        var TelemetryEventParam = (function () {
            function TelemetryEventParam(name, value) {
                this.name = name;
                this.value = value;
            }
            return TelemetryEventParam;
        }());
        Logger.TelemetryEventParam = TelemetryEventParam;
        /**
        * Wraps logic about logging to the telemetry system.
        */
        var TelemetryLogger = (function () {
            /**
            * Initializes a new instance of Telemetry Logger
            * @param context The bag of values currently assigned to the control's manifest parameters
            */
            function TelemetryLogger(componentName, context) {
                this.componentName = componentName;
                this.context = context;
            }
            TelemetryLogger.prototype.log = function (traceLevel, eventName, parameters) {
                var _this = this;
                var eventParams = [];
                // insert component name as the first element in eventParams for custom event only
                if (traceLevel !== TraceLevel.Error) {
                    eventParams.push(new TelemetryEventParam("ComponentName", this.componentName));
                }
                if (!Object.isNullOrUndefined(parameters)) {
                    parameters.getKeys().each(function (paramName, index) {
                        eventParams.push(new TelemetryEventParam(paramName, parameters.get(paramName)));
                    });
                }
                // ensure that eventName is prefixed with Marketing.
                var marketingPrefix = "Marketing.";
                if (eventName.substring(0, marketingPrefix.length) !== marketingPrefix) {
                    eventName = marketingPrefix + eventName;
                }
                var event = new TelementryEvent(eventName, eventParams);
                var logToTelemetry = traceLevel !== TraceLevel.Error ?
                    function () {
                        _this.context.reporting.reportEvent(event);
                    } :
                    function () {
                        _this.context.reporting.reportFailure(_this.componentName, new Error(eventName), String.Empty, eventParams);
                    };
                try {
                    // Log to CRM telemetry subsystems
                    logToTelemetry();
                }
                catch (e) {
                }
            };
            TelemetryLogger.prototype.getPerfToken = function () {
                return { timestampInMillisUtc: new Date().getTime() };
            };
            TelemetryLogger.prototype.logPerf = function (traceLevel, eventName, perfToken, parameters) {
                var dateNow = new Date();
                var elapsedMilliseconds = dateNow.getTime() - perfToken.timestampInMillisUtc;
                if (Object.isNullOrUndefined(parameters)) {
                    parameters = new Dictionary();
                }
                parameters.addOrUpdate("ElapsedMilliseconds", elapsedMilliseconds);
                this.log(traceLevel, eventName, parameters);
            };
            TelemetryLogger.prototype.logException = function (traceLevel, eventName, error, parameters) {
                if (Object.isNullOrUndefined(parameters)) {
                    parameters = new Dictionary();
                }
                var traceDump = Object.isNullOrUndefined(error.stack) ? error.message : error.stack;
                parameters.addOrUpdate(ParameterKeys.LoggerError, traceDump);
                this.log(traceLevel, eventName, parameters);
            };
            return TelemetryLogger;
        }());
        Logger.TelemetryLogger = TelemetryLogger;
    })(Logger = MktSvcCommon.Logger || (MktSvcCommon.Logger = {}));
})(MktSvcCommon || (MktSvcCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    var EventArgs;
    (function (EventArgs) {
        'use strict';
        var ControlInitEventArgs = (function () {
            function ControlInitEventArgs() {
            }
            return ControlInitEventArgs;
        }());
        EventArgs.ControlInitEventArgs = ControlInitEventArgs;
    })(EventArgs = MktSvcCommon.EventArgs || (MktSvcCommon.EventArgs = {}));
})(MktSvcCommon || (MktSvcCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    var EventArgs;
    (function (EventArgs) {
        'use strict';
        var AssistEditInitControlEventArgs = (function (_super) {
            __extends(AssistEditInitControlEventArgs, _super);
            function AssistEditInitControlEventArgs() {
                _super.apply(this, arguments);
            }
            return AssistEditInitControlEventArgs;
        }(EventArgs.ControlInitEventArgs));
        EventArgs.AssistEditInitControlEventArgs = AssistEditInitControlEventArgs;
    })(EventArgs = MktSvcCommon.EventArgs || (MktSvcCommon.EventArgs = {}));
})(MktSvcCommon || (MktSvcCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    var EventArgs;
    (function (EventArgs) {
        'use strict';
        var AssistEditOptionFocusedEventArgs = (function () {
            function AssistEditOptionFocusedEventArgs() {
            }
            return AssistEditOptionFocusedEventArgs;
        }());
        EventArgs.AssistEditOptionFocusedEventArgs = AssistEditOptionFocusedEventArgs;
    })(EventArgs = MktSvcCommon.EventArgs || (MktSvcCommon.EventArgs = {}));
})(MktSvcCommon || (MktSvcCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    var EventArgs;
    (function (EventArgs) {
        'use strict';
        var InputAssistEditValueChangedEventArgs = (function () {
            function InputAssistEditValueChangedEventArgs() {
            }
            return InputAssistEditValueChangedEventArgs;
        }());
        EventArgs.InputAssistEditValueChangedEventArgs = InputAssistEditValueChangedEventArgs;
    })(EventArgs = MktSvcCommon.EventArgs || (MktSvcCommon.EventArgs = {}));
})(MktSvcCommon || (MktSvcCommon = {}));
// This file was forked from CRM main repository, v8.1 branch
//---------------------------------------------------------------------------------------------------------------
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="CommonReferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    'use strict';
    var EntityConstants = (function () {
        function EntityConstants() {
        }
        /** Dynamic content metadata table name */
        EntityConstants.dynamicContentMetadataTableName = "msdyncrm_marketingemaildynamiccontentmetadata";
        EntityConstants.marketingConfigurationsRecordSetName = "msdyncrm_marketingconfigurations";
        EntityConstants.msdyncrm_organization_config = "msdyncrm_organization_config";
        /** Item type field name */
        EntityConstants.itemTypeFieldName = "msdyncrm_itemType";
        /** Syntax field name*/
        EntityConstants.syntaxFieldName = "msdyncrm_syntax";
        /** Fields field name*/
        EntityConstants.fieldsFieldName = "msdyncrm_fields";
        return EntityConstants;
    }());
    MktSvcCommon.EntityConstants = EntityConstants;
})(MktSvcCommon || (MktSvcCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../commonreferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    var Lookup;
    (function (Lookup) {
        'use strict';
    })(Lookup = MktSvcCommon.Lookup || (MktSvcCommon.Lookup = {}));
})(MktSvcCommon || (MktSvcCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../commonreferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    var Lookup;
    (function (Lookup) {
        'use strict';
    })(Lookup = MktSvcCommon.Lookup || (MktSvcCommon.Lookup = {}));
})(MktSvcCommon || (MktSvcCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation.  All rights reserved.
*/
/// <reference path="../commonreferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    var Lookup;
    (function (Lookup) {
        'use strict';
        var Object = MktSvc.Controls.Common.Object;
        var LookupCustomControl = (function () {
            /**
             * Initializes a new instance of LookupCustomControl
             * @param context The bag of values currently assigned to the control's manifest parameters
             * @param logger The logger used for telemetry
             */
            function LookupCustomControl(context, logger) {
                this.context = context;
                this.logger = logger;
                this.lookupControlId = 'LookupControl';
                this.lookupContainerId = 'LookupControl';
                this.lookupContainerCssClass = 'lookupInput';
            }
            /**
             * Creates the Lookup custom control
             */
            LookupCustomControl.prototype.loadLookup = function (controlId, container, entityName, viewId, callback, initialValue, entitySetName, titleFieldName) {
                var _this = this;
                var initialEntity = null;
                var lookupContainer = $("<div></div>").appendTo(container);
                lookupContainer.attr('id', entityName + this.lookupContainerId);
                lookupContainer.addClass(this.lookupContainerCssClass);
                if (!Object.isNullOrUndefined(initialValue)) {
                    if (MktSvc.Controls.Common.String.isNullUndefinedOrWhitespace(initialValue.Name)) {
                        var oDataUrl = new MktSvc.Controls.Common.EntityRecordUrlBuilder(this.context.page.getClientUrl(), entitySetName);
                        oDataUrl.setRecordId(initialValue.Id);
                        var oDataClient = new MktSvc.Controls.Common.ODataServiceClient(this.logger);
                        oDataClient.getData(oDataUrl.build()).done(function (result) {
                            var entityValue = JSON.parse(result);
                            initialEntity = {
                                Id: initialValue.Id,
                                Name: entityValue[titleFieldName],
                                LogicalName: entityName,
                                get_identifier: function () { return initialValue.Id; }
                            };
                            _this.context.utils.bindDOMElement(_this.generateChildLookupControlControl(controlId, entityName, viewId, callback, initialEntity), lookupContainer.get(0));
                        }).fail(function (response) {
                            var logEventName = "MktSvcCommon.Lookup.LookupCustomControl.loadLookup";
                            var logData = new MktSvc.Controls.Common.Dictionary({ url: oDataUrl.build() });
                            logData.addOrUpdate(MktSvc.Controls.Common.ParameterKeys.Message, response);
                            _this.logger.log(MktSvc.Controls.Common.TraceLevel.Error, logEventName, logData);
                        });
                    }
                    else {
                        initialEntity = {
                            Id: initialValue.Id,
                            Name: initialValue.Name,
                            LogicalName: entityName,
                            get_identifier: function () { return initialValue.Id; }
                        };
                        this.context.utils.bindDOMElement(this.generateChildLookupControlControl(controlId, entityName, viewId, callback, initialEntity), lookupContainer.get(0));
                    }
                }
                else {
                    this.context.utils.bindDOMElement(this.generateChildLookupControlControl(controlId, entityName, viewId, callback, initialEntity), lookupContainer.get(0));
                }
            };
            /**
             * Generate a lookup control
             * @returns a lookup control
             */
            LookupCustomControl.prototype.generateChildLookupControlControl = function (controlId, entityName, viewId, callback, initialEntity) {
                var onValueChanged = function (value) {
                    var callbackValue = null;
                    // Backward compatibility
                    if (!Object.isNullOrUndefined(value)) {
                        // On the UClient from the CRM build <= 22 the callback is an array of customControlEntityReference
                        if (Array.isArray(value)) {
                            callbackValue = value.length ? value[0] : null;
                        }
                        else {
                            // On the UClient from the CRM build >= 36 the callback is a customControlEntityReference
                            callbackValue = value;
                        }
                    }
                    callback(callbackValue);
                };
                var attributes = {
                    DisplayName: entityName + this.lookupControlId,
                    IsSecured: false,
                    Format: "none",
                    LogicalName: entityName + this.lookupControlId,
                    ImeMode: -1,
                    RequiredLevel: 0,
                    Type: "lookup",
                    Targets: [entityName]
                };
                var simpleLookupProps = {
                    id: controlId,
                    key: controlId,
                    parameters: {
                        value: {
                            Attributes: attributes,
                            Callback: onValueChanged,
                            Usage: 3,
                            Static: false,
                            Type: "Lookup.Simple",
                            Value: initialEntity,
                            Primary: true,
                            EntityName: entityName,
                            Name: "value",
                            ViewId: viewId,
                            AllowFilterOff: false,
                            DisableQuickFind: false,
                            EnableViewPicker: true,
                            TargetEntityType: entityName
                        },
                        valueDataSet: {
                            EntityName: entityName,
                            ViewId: viewId,
                            EnableViewPicker: true,
                            TargetEntityType: entityName,
                            Name: "valueDataSet"
                        }
                    }
                };
                var childLookup = this.context.factory.createComponent("MscrmControls.FieldControls.SimpleLookupControl", controlId, simpleLookupProps);
                return childLookup;
            };
            LookupCustomControl.prototype.dispose = function (controlId) {
                this.context.utils.unbindDOMComponent(controlId);
            };
            return LookupCustomControl;
        }());
        Lookup.LookupCustomControl = LookupCustomControl;
    })(Lookup = MktSvcCommon.Lookup || (MktSvcCommon.Lookup = {}));
})(MktSvcCommon || (MktSvcCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var Mscrm;
(function (Mscrm) {
    'use strict';
})(Mscrm || (Mscrm = {}));
/**
* @license Copyright (c) Microsoft Corporation.  All rights reserved.
*/
/// <reference path="../commonreferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    var QuickView;
    (function (QuickView) {
        'use strict';
        var QuickViewControl = (function () {
            /**
             * Initializes a new instance of QuickViewControl
             * @param context The bag of values currently assigned to the control's manifest parameters
             * @param containerCssClass the CSS class of the quick view container
             */
            function QuickViewControl(context, containerCssClass) {
                this.context = context;
                this.quickViewContainerId = 'QuickViewControl';
                this.quickViewContainerCssClass = containerCssClass ? containerCssClass : 'quickViewControl';
            }
            /**
             * Renders the quick view
             * @param controlId The control identifier
             * @param container The control container
             * @param entityLogicalName The entity logical name
             * @param quickFormId The quick form identifier
             * @param recordId The record identifier
             */
            QuickViewControl.prototype.loadQuickView = function (controlId, container, entityLogicalName, quickFormId, recordId) {
                var quickViewContainer = $("<div/>").appendTo(container);
                quickViewContainer.attr('id', controlId + this.quickViewContainerId);
                quickViewContainer.addClass(this.quickViewContainerCssClass);
                this.context.utils.bindDOMElement(this.generateChildQuickViewControl(controlId, container, entityLogicalName, quickFormId, recordId), quickViewContainer.get(0));
            };
            QuickViewControl.prototype.generateChildQuickViewControl = function (controlId, container, entityLogicalName, quickFormId, recordId) {
                if (MktSvc.Controls.Common.String.isNullUndefinedOrWhitespace(recordId)) {
                    recordId = "00000000-0000-0000-0000-000000000000";
                }
                var valueParam = {
                    Usage: 0,
                    Type: "Form.QuickForm",
                    Value: quickFormId + ":Quick|" + entityLogicalName + "|" + recordId,
                    Static: false,
                    Primary: true
                };
                var properties = {
                    controlstates: {
                        hasFocus: this.context.mode.hasFocus,
                        isControlDisabled: this.context.mode.isControlDisabled,
                    },
                    parameters: {
                        "value": valueParam,
                    },
                };
                var quickForm = this.context.factory.createComponent("MscrmControls.Containers.QuickForm", controlId, properties);
                return quickForm;
            };
            QuickViewControl.prototype.dispose = function (controlId) {
                this.context.utils.unbindDOMComponent(controlId);
            };
            return QuickViewControl;
        }());
        QuickView.QuickViewControl = QuickViewControl;
    })(QuickView = MktSvcCommon.QuickView || (MktSvcCommon.QuickView = {}));
})(MktSvcCommon || (MktSvcCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    var ControlUtils;
    (function (ControlUtils) {
        'use strict';
        var UniqueId = (function () {
            function UniqueId() {
            }
            UniqueId.getUniqueId = function () {
                var uidPrefix = 'xxxxxxxxxxxx'.replace(/[x]/g, function () {
                    var r = Math.floor(Math.random() * 16);
                    return r.toString(16);
                });
                var dateSuffix = (new Date()).getTime();
                var randomDelimiter = Math.random().toString(16).slice(2);
                return "" + uidPrefix + randomDelimiter + dateSuffix;
            };
            return UniqueId;
        }());
        ControlUtils.UniqueId = UniqueId;
    })(ControlUtils = MktSvcCommon.ControlUtils || (MktSvcCommon.ControlUtils = {}));
})(MktSvcCommon || (MktSvcCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    var ControlUtils;
    (function (ControlUtils) {
        'use strict';
    })(ControlUtils = MktSvcCommon.ControlUtils || (MktSvcCommon.ControlUtils = {}));
})(MktSvcCommon || (MktSvcCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var MktSvcCommon;
(function (MktSvcCommon) {
    var ControlUtils;
    (function (ControlUtils) {
        'use strict';
        /**
        * Provides parameters for the child controls in the context of CostumControl composition
        */
        var ControlCompositionParameterProvider = (function () {
            function ControlCompositionParameterProvider() {
            }
            /**
            * Creates a data set parameter, from an existing one, ussualy prvided by the parent
            */
            ControlCompositionParameterProvider.prototype.getDataSetParameter = function (dataSet, targetEntityType) {
                var columns = [];
                dataSet.columns.forEach(function (column) {
                    columns.push({
                        Alias: column.alias,
                        Name: column.name,
                        DataType: column.dataType // data-type of attribute to be bound to
                    });
                });
                return {
                    Columns: columns,
                    ViewId: dataSet.getViewId() || dataSet.viewId,
                    TargetEntityType: targetEntityType,
                    Type: 'Grid'
                };
            };
            /**
           * Creates an input type property parameter
           */
            ControlCompositionParameterProvider.prototype.getInputParameter = function (value) {
                return {
                    Usage: 1,
                    Type: 'SingleLine.Text',
                    Value: value,
                    Static: true,
                    Primary: false
                };
            };
            /**
            * Creates a bound type property parameter
            */
            ControlCompositionParameterProvider.prototype.getBoundParameter = function (value) {
                return {
                    Usage: 0,
                    Type: 'SingleLine.Text',
                    Value: value,
                    Static: false,
                    Primary: true
                };
            };
            /**
            * Creates a false bound type property parameter
            */
            ControlCompositionParameterProvider.prototype.getFalseBoundParameter = function (value) {
                return {
                    Usage: 3,
                    Type: 'SingleLine.Text',
                    Value: value
                };
            };
            return ControlCompositionParameterProvider;
        }());
        ControlUtils.ControlCompositionParameterProvider = ControlCompositionParameterProvider;
    })(ControlUtils = MktSvcCommon.ControlUtils || (MktSvcCommon.ControlUtils = {}));
})(MktSvcCommon || (MktSvcCommon = {}));
//# sourceMappingURL=Common.js.map