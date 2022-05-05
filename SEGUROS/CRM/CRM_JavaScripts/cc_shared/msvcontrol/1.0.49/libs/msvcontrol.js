/** @license Copyright (c) Microsoft Corporation. All rights reserved. */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @license Copyright (c) Microsoft Corporation.  All rights reserved.
 */
/// <reference path="../Shared/mscrm.d.ts" />
var MscrmControls;
(function (MscrmControls) {
    var FieldControls;
    (function (FieldControls) {
        "use strict";
        var VirtualControl = /** @class */ (function () {
            /**
             * Constructor.
             */
            function VirtualControl() {
            }
            // Mscrm.Control interface's implementation
            /**
             * Initializes the control. This function has access to the property bag context that will contain your custom control properties and utility functions.
             * Predefinitions and initialisations can be done in this.
             *
             * @param context Dictionary containing custom control's context.
             * @param notifyOutputChanged Function to call when control changed its value, to propagate changes to redux state.
             * @param state The control's internal state. Has nothing to do with redux state tree.
             * @param container Wrapping div element.
             */
            VirtualControl.prototype.init = function (context, notifyOutputChanged, state, container) {
                this.context = context;
                this.notifyOutputChanged = notifyOutputChanged || (function () { });
            };
            /**
             * This function destroys the control and cleans up
             */
            VirtualControl.prototype.destroy = function () {
                // No implementation
            };
            /**
             * Method is called by the framework to notify the control about pre navigation event.
             */
            VirtualControl.prototype.onPreNavigation = function () {
                // No implementation
            };
            /**
             * View Rendering
             */
            /**
             * Renders the control with data from the a context properties currently assigned to the control's manifest parameters
             */
            VirtualControl.prototype.updateView = function (context) {
                // Update context with possible changes since initialization.
                this.context = context;
                // Return the component for the current state for rendering.
                return {};
            };
            /**
             * @returns The a bag of output values to pass to the infrastructure
             */
            VirtualControl.prototype.getOutputs = function () {
                return {};
            };
            /**
             * Label to show when there is no value given for the control.
             */
            VirtualControl.NO_VALUE_LABEL = "---";
            return VirtualControl;
        }());
        FieldControls.VirtualControl = VirtualControl;
    })(FieldControls = MscrmControls.FieldControls || (MscrmControls.FieldControls = {}));
})(MscrmControls || (MscrmControls = {}));
/**
 * Created by v-pagorb on 1/24/2017.
 */
var MscrmControls;
(function (MscrmControls) {
    var FieldControls;
    (function (FieldControls) {
        'use strict';
        var VirtualOptionSetControl = /** @class */ (function (_super) {
            __extends(VirtualOptionSetControl, _super);
            /**
             * Constructor function
             */
            function VirtualOptionSetControl() {
                var _this = _super.call(this) || this;
                _this._pointerEnd = false;
                // Prepare bound event handlers
                _this._onChange = _this.onChangeHandler.bind(_this);
                _this._onFocus = _this.onFocusHandler.bind(_this);
                _this._onBlur = _this.onBlurHandler.bind(_this);
                // Prepare container handlers
                _this._onContainerPointerEnter = _this.onContainerPointerEnterHandler.bind(_this);
                _this._onContainerPointerLeave = _this.onContainerPointerLeaveHandler.bind(_this);
                // Initialize mode manager.
                _this.modeManager = new FieldControls.ModeTransitionManager();
                _this.modeManager.resetManager(_this, _this);
                return _this;
            }
            /**
             * Initializes the control. This function has access to the property bag context that will contain your custom control properties and utility functions.
             * Predefinitions and initialisations can be done in this.
             *
             * @param context Dictionary containing custom control's context.
             * @param notifyOutputChanged Function to call when control changed its value, to propagate changes to redux state.
             * @param state The control's internal state. Has nothing to do with redux state tree.
             * @param container Wrapping div element.
             */
            VirtualOptionSetControl.prototype.init = function (context, notifyOutputChanged, state, container) {
                var _this = this;
                _super.prototype.init.call(this, context, notifyOutputChanged, state, container);
                var outputChangedCallback = notifyOutputChanged || (function () { });
                this.notifyOutputChanged = function () {
                    _this.waitingForValueSaved = true;
                    outputChangedCallback();
                };
            };
            VirtualOptionSetControl.prototype.getOutputs = function () {
                this.waitingForValueSaved = false;
                return null;
            };
            /**
             * View Rendering
             */
            /**
             * Renders the control with data from the context properties currently assigned to the control's manifest parameters
             */
            VirtualOptionSetControl.prototype.updateView = function (context) {
                // Update context with possible changes since initialization.
                this.context = context;
                return this.component();
            };
            /**
             * Event handlers
             */
            /**
             * Handles a change of selection in the option set.
             * @params value {Mscrm.OptionSetValue} New value selected in Combobox.
             */
            VirtualOptionSetControl.prototype.onChangeHandler = function (value) {
                var candidate = (!value || VirtualOptionSetControl.isUnassigned(value))
                    ? this.unassignedOptionWithPrompt()
                    : value;
                this.setControlValue(candidate);
                this.notifyOutputChanged();
            };
            /**
             * Handler for the `focus` event for the combobox.
             */
            VirtualOptionSetControl.prototype.onFocusHandler = function () {
                var active = {
                    id: FieldControls.ModeDescriptorID.ACTIVE
                };
                this.modeManager.requestTransitionTo(active);
            };
            /**
             * Handler for the `blur` event for the combobox.
             */
            VirtualOptionSetControl.prototype.onBlurHandler = function () {
                var rest = {
                    id: FieldControls.ModeDescriptorID.REST
                };
                this.modeManager.requestTransitionTo(rest);
            };
            VirtualOptionSetControl.prototype.onContainerPointerEnterHandler = function () {
                var hover = {
                    id: FieldControls.ModeDescriptorID.HOVER
                };
                this.modeManager.requestTransitionTo(hover);
            };
            VirtualOptionSetControl.prototype.onContainerPointerLeaveHandler = function () {
                this._pointerEnd = true;
                var rest = {
                    id: FieldControls.ModeDescriptorID.REST
                };
                this.modeManager.requestTransitionTo(rest);
            };
            /**
             * For override
             */
            /**
             * Composes object with ids for internal components.
             * @return {IOptionSetIDBundle} Bundle with control-specific ids.
             */
            VirtualOptionSetControl.prototype.idBundle = function () {
                return {};
            };
            /**
             * Gets proper value for the control in a given mode.
             * @param mode {IModeDescriptor} mode descriptor for which value should be get.
             * @return {number} numeric plain value for the control.
             */
            VirtualOptionSetControl.prototype.valueForMode = function (mode) {
                return VirtualOptionSetControl.UNASSIGNED_OPTION_VALUE;
            };
            VirtualOptionSetControl.prototype.setControlValue = function (candidate) {
                if (this._value !== candidate.Value) {
                    this._value = candidate.Value;
                }
            };
            /**
             * Checks if the control is in error state.
             * @return {boolean} `true` if control is in error state, `false` - otherwise.
             */
            VirtualOptionSetControl.prototype.isError = function () {
                return this.context.parameters.value.error;
            };
            /**
             * Composes proper list of options for the option set.
             * @return {IOptionSetValue[]} Array of required options.
             */
            VirtualOptionSetControl.prototype.optionsList = function () {
                return [];
            };
            /**
             * Composes and returns all necessary default CSS styles for the dropdown arrow component.
             * @return {Mscrm.Dictionary} Dictionary containing all required styles for the moment.
             */
            VirtualOptionSetControl.prototype.arrowStyle = function () {
                var _a = this.context.theming, solidborderstyle = _a.solidborderstyle, textbox = _a.textbox;
                return {
                    display: "flex",
                    content: "",
                    transform: "rotate(45deg)",
                    borderStyle: solidborderstyle,
                    borderTopWidth: 0,
                    borderLeftWith: 0,
                    borderRightWidth: textbox.linethickness,
                    borderBottomWidth: textbox.linethickness,
                    borderColor: (this.isError()) ? textbox.redcolor : textbox.hoverboxcolor,
                    width: VirtualOptionSetControl.OPTION_SET_ARROW_SIZE,
                    height: VirtualOptionSetControl.OPTION_SET_ARROW_SIZE,
                    marginTop: "calc(-1 * " + VirtualOptionSetControl.OPTION_SET_ARROW_SIZE + " * 0.666)"
                };
            };
            /**
             * Composes and returns all necessary CSS styles for the dropdown arrow container component.
             * @return {Mscrm.Dictionary} Dictionary containing all required styles for the moment.
             */
            VirtualOptionSetControl.prototype.arrowContainerStyle = function () {
                var _a = this.context.theming, solidborderstyle = _a.solidborderstyle, textbox = _a.textbox;
                var style = {
                    paddingLeft: textbox.horizontalpadding,
                    paddingRight: textbox.horizontalpadding,
                    paddingTop: textbox.verticalpadding,
                    paddingBottom: textbox.verticalpadding,
                    position: "relative",
                    marginLeft: "calc(-1 * calc(2 * " + textbox.horizontalpadding + " + " + VirtualOptionSetControl.OPTION_SET_ARROW_SIZE + ") - " + textbox.linethickness + ")",
                    borderTopWidth: 0,
                    borderBottomWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    flexDirection: "column",
                    justifyContent: "center",
                    flex: "0 1 auto",
                    pointerEvents: "none",
                    backgroundColor: "transparent"
                };
                if (this.modeManager.mode().id === FieldControls.ModeDescriptorID.ACTIVE) {
                    style["borderStyle"] = solidborderstyle;
                    style["borderLeftWidth"] = textbox.linethickness;
                    style["borderColor"] = (this.isError()) ? textbox.redcolor : textbox.hoverboxcolor;
                }
                return style;
            };
            /**
             * Composes all necessary elements for the arrow component.
             * @return {Mscrm.Component} Complete arrow component that is ready for rendering.
             */
            VirtualOptionSetControl.prototype.arrowComponent = function () {
                if (this.modeManager.mode().id === FieldControls.ModeDescriptorID.REST) {
                    // There is no arrow in REST mode.
                    return null;
                }
                // Compose arrow props.
                var arrowProps = {
                    id: this.idBundle().arrow,
                    key: this.idBundle().arrow,
                    style: this.arrowStyle()
                };
                // Create arrow component.
                var arrow = this.context.factory.createElement("CONTAINER", arrowProps, null);
                // Compose arrow container props
                var containerProps = {
                    id: this.idBundle().arrowContainer,
                    key: this.idBundle().arrowContainer,
                    style: this.arrowContainerStyle()
                };
                // Create complete arrow component hierarchy.
                return this.context.factory.createElement("CONTAINER", containerProps, arrow);
            };
            /**
             * Composes and returns all necessary CSS styles for the select component.
             * @return {Mscrm.Dictionary} Dictionary containing all required styles for the moment.
             */
            VirtualOptionSetControl.prototype.selectStyle = function () {
                var _a = this.context.theming, noneborderstyle = _a.noneborderstyle, textbox = _a.textbox, measure250 = _a.measures.measure250;
                var backgroundColor = (this.modeManager.mode().id === FieldControls.ModeDescriptorID.ACTIVE)
                    ? (this.isError())
                        ? textbox.errorbackgroundcolor
                        : textbox.backgroundcolor
                    : "white";
                var color = (this.isError()) ? textbox.redcolor : textbox.contentcolor;
                var selectStyle = {
                    appearance: "none",
                    height: measure250,
                    lineHeight: measure250,
                    width: "100%",
                    '::-ms-expand': { display: "none" },
                    paddingLeft: textbox.horizontalpadding,
                    paddingRight: textbox.horizontalpadding,
                    fontSize: (this.isError()) ? textbox.errorfontsize : textbox.fontsize,
                    fontWeight: (this.modeManager.mode().id === FieldControls.ModeDescriptorID.REST || this.isError())
                        ? textbox.contentfontweight
                        : textbox.fontweight,
                    borderStyle: noneborderstyle,
                    backgroundColor: backgroundColor,
                    color: color
                };
                var optionStyle = {
                    backgroundColor: backgroundColor,
                    color: color
                };
                if (this.isControlDisabled()) {
                    Object.assign(selectStyle, FieldControls.ThemingHelper.getDisableStyle(this.context.theming));
                }
                var scope = this.context.parameters.scope;
                if (FieldControls.ThemingHelper.isFooterCell(scope)) {
                    Object.assign(selectStyle, FieldControls.ThemingHelper.getFooterStyle(this.context.theming));
                }
                if (FieldControls.ThemingHelper.isHeaderCell(scope)) {
                    Object.assign(selectStyle, FieldControls.ThemingHelper.getHeaderStyle(this.context.theming));
                }
                return {
                    selectStyle: selectStyle,
                    optionStyle: optionStyle
                };
            };
            /**
             * Composes all necessary elements for the select component.
             * @return {Mscrm.Component} Complete select component that is ready for rendering.
             */
            VirtualOptionSetControl.prototype.selectComponent = function () {
                var options = this.optionsList();
                var plainValue = this.valueForMode(this.modeManager.mode());
                var value = this.unassignedOptionWithPrompt(false);
                value = this.optionWithValue(plainValue, options);
                if (!this.context.parameters.value.security.readable) {
                    value = this.nonReadableOption(this.modeManager.mode().id !== FieldControls.ModeDescriptorID.REST, value);
                }
                var disabled = this.isControlDisabled();
                var style = this.selectStyle();
                if (value) {
                    this.setControlValue(value);
                }
                var describedByElementId = "";
                if (this.context.parameters && this.context.parameters.describedByElementId) {
                    describedByElementId = this.context.parameters.describedByElementId.raw;
                }
                var selectProps = {
                    id: this.idBundle().select,
                    key: this.idBundle().select,
                    describedByElementId: describedByElementId,
                    onChange: this._onChange,
                    onFocus: disabled ? null : this._onFocus,
                    onBlur: disabled ? null : this._onBlur,
                    error: this.isError(),
                    value: value,
                    disabled: disabled,
                    options: options,
                    title: value != null && value.Label != null ? value.Label : this.context.parameters.value.attributes != null &&
                        this.context.parameters.value.attributes.DisplayName != null ?
                        this.context.parameters.value.attributes.DisplayName : "",
                    accessibilityRequired: (this.context.parameters.value.attributes.RequiredLevel === 1) || (this.context.parameters.value.attributes.RequiredLevel === 2) ? true : null,
                    accessibilityLabel: this.context.parameters.value.attributes.DisplayName,
                    style: style
                };
                var select = this.context.factory.createElement("SELECT", selectProps, null);
                var containerProps = {
                    id: this.idBundle().selectContainer,
                    key: this.idBundle().selectContainer,
                    style: {
                        flex: "1 1 auto",
                        left: "0px",
                        right: "0px",
                        top: "0px",
                        position: "absolute",
                        width: "100%"
                    }
                };
                return this.context.factory.createElement("CONTAINER", containerProps, select);
            };
            /**
             * Composes and returns all necessary CSS styles for the whole option set container component.
             * @return {Mscrm.Dictionary} Dictionary containing all required styles for the moment.
             */
            VirtualOptionSetControl.prototype.containerStyle = function () {
                var _a = this.context.theming, solidborderstyle = _a.solidborderstyle, noneborderstyle = _a.noneborderstyle, textbox = _a.textbox;
                var borderColor = (this.modeManager.mode().id === FieldControls.ModeDescriptorID.REST)
                    ? "transparent"
                    : (this.isError())
                        ? textbox.redcolor
                        : textbox.hoverboxcolor;
                return {
                    width: "100%",
                    overflow: "hidden",
                    background: "transparent",
                    borderWidth: this.isError() ? textbox.errorlinethickness : textbox.linethickness,
                    borderStyle: solidborderstyle,
                    borderColor: borderColor,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    position: "relative",
                    height: "32.6px",
                    marginLeft: FieldControls.ThemingHelper.isHeaderCell(this.context.parameters.scope) ? "-0.75rem" : "0px",
                };
            };
            /**
             * Returns complete control component which will be rendered.
             * @returns {Mscrm.Component} Component to render.
             * @private
             */
            VirtualOptionSetControl.prototype.component = function () {
                var select = this.selectComponent();
                var arrow = this.arrowComponent();
                var containerProps = {
                    id: this.idBundle().container,
                    key: this.idBundle().container,
                    style: this.containerStyle(),
                    onPointerEnter: this.isControlDisabled() ? null : this._onContainerPointerEnter,
                    onPointerLeave: this.isControlDisabled() ? null : this._onContainerPointerLeave
                };
                return this.context.factory.createElement("CONTAINER", containerProps, [select, arrow]);
            };
            /**
             * Utility functionality
             */
            /**
             *
             * @param prompt
             * @return {{Label: string, Value: number, Color: null}}
             */
            VirtualOptionSetControl.prototype.unassignedOptionWithPrompt = function (prompt) {
                if (prompt === void 0) { prompt = true; }
                return {
                    Label: (prompt) ? VirtualOptionSetControl.UNASSIGNED_OPTION_LABEL_PROMPT : VirtualOptionSetControl.UNASSIGNED_OPTION_LABEL,
                    Value: VirtualOptionSetControl.UNASSIGNED_OPTION_VALUE,
                    Color: null
                };
            };
            /**
             * Return non readable label when there is no read access
             * @param isActive {boolean} option set control is in active state or not
             * @param value {IOptionSetValue} current value of the option set control
             * @return {{Label: string, Value: number, Color: null}}
             */
            VirtualOptionSetControl.prototype.nonReadableOption = function (isActive, value) {
                if (isActive === void 0) { isActive = true; }
                return {
                    Label: (isActive) ? (value ? value.Label : VirtualOptionSetControl.UNASSIGNED_OPTION_LABEL_PROMPT) : VirtualOptionSetControl.NOT_READABLE_VALUE,
                    Value: (isActive) ? (value ? value.Value : VirtualOptionSetControl.UNASSIGNED_OPTION_VALUE) : VirtualOptionSetControl.UNASSIGNED_OPTION_VALUE,
                    Color: null
                };
            };
            /**
             * Performs search of the option with given value in the given array of options.
             * @param value {number} Desired option's value.
             * @param options {Mscrm.OptionSetValue[]} Array of options where search should be done.
             * @returns {IOptionSetValue} Option if it was found in the array, or `empty`/`unassigned` option
             * if there is no option with given value in the given array of options.
             */
            VirtualOptionSetControl.prototype.optionWithValue = function (value, options) {
                var candidates = options && options.filter(function (option) { return option.Value === value; });
                if (candidates && candidates.length > 0) {
                    return candidates[0];
                }
                return this.unassignedOptionWithPrompt(false);
            };
            /**
             * Checks if given option is considered `unassigned/empty`.
             * The option is considered `unassigned` if:
             *  - there is no value set and value is not actually 0.
             *  - there is a value and the value is set to -1.
             * @param candidate {Mscrm.OptionSetValue} The Option set value to check.
             * @returns {boolean} `true` if option is considered `unassigned`, `false` - otherwise.
             */
            VirtualOptionSetControl.isUnassigned = function (candidate) {
                if (!candidate) {
                    return false;
                }
                return (!candidate.Value && candidate.Value !== 0) || /* no value OR */
                    (candidate.Value && !~candidate.Value); /* there is a value which is -1 */
            };
            /**
             * IModeTransitionDataSource
             */
            VirtualOptionSetControl.prototype.defaultMode = function () {
                return {
                    id: FieldControls.ModeDescriptorID.REST
                };
            };
            /**
             * IModeTransitionDelegate
             */
            /**
             * Function is called before any requested transition happens. It determines
             * if pending transition from given state to another given state is actually possible.
             * @param from {IModeDescriptor} Current control's mode.
             * @param to {IModeDescriptor} Desired mode control wants to be in.
             * @return {boolean} `true` if transition between given modes is allowed, `false` - otherwise.
             */
            VirtualOptionSetControl.prototype.isTransitionAllowed = function (from, to) {
                var allowed = false;
                switch (from.id) {
                    case FieldControls.ModeDescriptorID.REST:
                    case FieldControls.ModeDescriptorID.HOVER:
                        allowed = true;
                        break;
                    case FieldControls.ModeDescriptorID.ACTIVE:
                        allowed = !((to.id === FieldControls.ModeDescriptorID.REST && this._pointerEnd) || to.id === FieldControls.ModeDescriptorID.HOVER);
                        break;
                    default:
                        break;
                }
                this._pointerEnd = false;
                return allowed;
            };
            VirtualOptionSetControl.prototype.transitionWillApply = function (from, to) {
                if (from.id === FieldControls.ModeDescriptorID.ACTIVE &&
                    to.id === FieldControls.ModeDescriptorID.REST) {
                    // Notify the framework about the value change.
                    this.notifyOutputChanged();
                }
            };
            VirtualOptionSetControl.prototype.transitionDidApply = function (from, to) {
                // Transition just happened.
                // Update UI to reflect the changes.
                this.context.utils.requestRender();
            };
            /**
             * Returns true if control should be disabled
             * @returns {boolean|IPageBag}
             */
            VirtualOptionSetControl.prototype.isControlDisabled = function () {
                return this.context.mode.isControlDisabled;
            };
            /**
             * Value of the control when option is not set.
             */
            VirtualOptionSetControl.UNASSIGNED_OPTION_VALUE = -1;
            /**
             * Default label to show in rest mode when there is no value given.
             */
            VirtualOptionSetControl.UNASSIGNED_OPTION_LABEL = "---";
            /**
             * Default label to show in hover/active mode when there is no value given.
             */
            VirtualOptionSetControl.UNASSIGNED_OPTION_LABEL_PROMPT = "VirtualOptionSetControl_Unassigned_Option_Label_Prompt";
            /**
             * Default value to show when value is not readable.
             * @type {string}
             */
            VirtualOptionSetControl.NOT_READABLE_VALUE = "******";
            /**
             * Size of the option set's dropdown arrow (width and height).
             */
            VirtualOptionSetControl.OPTION_SET_ARROW_SIZE = "0.6em";
            return VirtualOptionSetControl;
        }(FieldControls.VirtualControl));
        FieldControls.VirtualOptionSetControl = VirtualOptionSetControl;
    })(FieldControls = MscrmControls.FieldControls || (MscrmControls.FieldControls = {}));
})(MscrmControls || (MscrmControls = {}));
var MscrmControls;
(function (MscrmControls) {
    var FieldControls;
    (function (FieldControls) {
        'use strict';
        var VirtualNumberControl = /** @class */ (function (_super) {
            __extends(VirtualNumberControl, _super);
            /**
             * Constructor function.
             */
            function VirtualNumberControl() {
                var _this = _super.call(this) || this;
                // Prepare bound event handlers.
                _this._changeHandler = _this.onChange.bind(_this);
                _this._focusHandler = _this.onFocus.bind(_this);
                _this._clickHandler = _this.onClick.bind(_this);
                _this._blurHandler = _this.onBlur.bind(_this);
                _this._keyDownHandler = _this.onKeyDown.bind(_this);
                _this._pointerEnterHandler = _this.onPointerEnter.bind(_this);
                _this._pointerLeaveHandler = _this.onPointerLeave.bind(_this);
                // Initialize mode manager
                _this.modeManager = new FieldControls.ModeTransitionManager();
                _this.modeManager.resetManager(_this, _this);
                return _this;
            }
            /**
             * Initializes the control. This function has access to the property bag context that will contain your custom control properties and utility functions.
             * Predefinitions and initialisations can be done in this.
             *
             * @param context Dictionary containing custom control's context.
             * @param notifyOutputChanged Function to call when control changed its value, to propagate changes to redux state.
             * @param state The control's internal state. Has nothing to do with redux state tree.
             * @param container Wrapping div element.
             */
            VirtualNumberControl.prototype.init = function (context, notifyOutputChanged, state, container) {
                var _this = this;
                _super.prototype.init.call(this, context, notifyOutputChanged, state, container);
                var outputChangedCallback = notifyOutputChanged || (function () { });
                this.notifyOutputChanged = function (alertSystem) {
                    !alertSystem && (_this.waitingForValueSaved = true);
                    outputChangedCallback(alertSystem);
                };
            };
            /**
             * Returns actual control's outputs to the framework
             * @return {null}
             */
            VirtualNumberControl.prototype.getOutputs = function () {
                this.waitingForValueSaved = false;
                return null;
            };
            /**
             * For overriding
             */
            /**
             * Composes object with ids for internal components.
             * @return {INumberIDBundle} Bundle with control-specific ids.
             */
            VirtualNumberControl.prototype.idBundle = function () {
                return {};
            };
            /**
             * Allows to save control's value in descendants.
             * @param candidate {number | string} actual value to save.
             */
            VirtualNumberControl.prototype.setControlValue = function (candidate) {
                // Override.
            };
            /**
             * Gets proper value for given control's mode.
             * @param mode {IModeDescriptor} Mode descriptor for which control's value should be get.
             * @return {number | string} Returns either raw value (that is number) or formatted (that is string)
             * depending on mode.
             */
            VirtualNumberControl.prototype.valueForMode = function (mode) {
                return "";
            };
            /**
             * Checks if the control is in error state.
             * @return {boolean} `true` if control is in error state, `false` - otherwise.
             */
            VirtualNumberControl.prototype.isError = function () {
                return this.context.parameters.value.error;
            };
            /**
             * Utility function that tries to convert given string to number.
             * @param candidate {string} string that needs to be converted.
             * @return {number | string} in case when conversion was successful, returns number. Otherwise - string.
             */
            VirtualNumberControl.prototype.tryConvertToNumber = function (candidate) {
                // Parent just returns string as is.
                return candidate;
            };
            /**
             * Renders the control with data from the a context properties currently assigned to the control's manifest parameters
             */
            VirtualNumberControl.prototype.component = function () {
                return this.context.factory.createElement("TEXTINPUT", this.propsForMode(this.modeManager.mode()));
            };
            /**
             * Function forms proper dictionary with properties of the input
             * based on the given mode.
             *
             * @param mode Mode for which props should be composed.
             * @return Dictionary containing all necessary props for given mode.
             * @private
             */
            VirtualNumberControl.prototype.propsForMode = function (mode) {
                var disabled = this.isControlDisabled();
                var style = this.styleForMode(mode);
                var describedByElementId = "";
                if (this.context.parameters && this.context.parameters.describedByElementId) {
                    describedByElementId = this.context.parameters.describedByElementId.raw;
                }
                return {
                    id: this.idBundle().input,
                    key: this.idBundle().input,
                    value: this.valueForMode(mode),
                    readOnly: disabled,
                    disabled: disabled,
                    error: this.isError(),
                    describedByElementId: describedByElementId,
                    style: style,
                    selectValueOnFocus: true,
                    accessibiltyLive: "off",
                    accessibilityRequired: (this.context.parameters.value.attributes.RequiredLevel === 1) || (this.context.parameters.value.attributes.RequiredLevel === 2) ? true : null,
                    onFocus: (disabled) ? null : this._focusHandler,
                    onClick: (disabled) ? null : this._clickHandler,
                    onBlur: (disabled) ? null : this._blurHandler,
                    onKeyDown: (disabled) ? null : this._keyDownHandler,
                    onChange: (disabled) ? null : this._changeHandler,
                    onPointerEnter: (disabled) ? null : this._pointerEnterHandler,
                    onPointerLeave: (disabled) ? null : this._pointerLeaveHandler
                };
            };
            /**
             * Composes proper dictionary object with styles for a particular control's mode.
             * @param mode Mode for which styles should be returned.
             * @returns {Mscrm.Dictionary} with proper styles for given control's mode.
             */
            VirtualNumberControl.prototype.styleForMode = function (mode) {
                var theming = this.context.theming;
                var scope = this.context.parameters.scope;
                var deviceSizeMode = this.context.parameters.deviceSizeMode;
                var isRTL = this.context.userSettings.isRTL;
                switch (mode.id) {
                    case FieldControls.ModeDescriptorID.REST:
                        return this.restStyle(theming, deviceSizeMode, scope, isRTL, this.isError());
                    case FieldControls.ModeDescriptorID.HOVER:
                        return this.hoverStyle(theming, deviceSizeMode, scope, isRTL, this.isError());
                    case FieldControls.ModeDescriptorID.ACTIVE:
                        return this.activeStyle(theming, deviceSizeMode, scope, isRTL, this.isError());
                    default:
                        break;
                }
                return {};
            };
            /**
             * Composes styles for control's REST mode.
             * @param theming Desired Theme styles, given to the control, to take stytles from.
             * @param deviceSizeMode
             * @param error Flag to compose styles for erroneous situation.
             * @returns {Mscrm.Dictionary} with proper styles for the REST mode.
             */
            VirtualNumberControl.prototype.restStyle = function (theming, deviceSizeMode, scope, isRTL, error) {
                return FieldControls.ThemingHelper.getReadModeStyle(theming, deviceSizeMode, scope, isRTL, error, this.isControlDisabled());
            };
            /**
             * Composes styles for control's HOVER mode.
             * @param theming Desired Theme styles, given to the control, to take stytles from.
             * @param deviceSizeMode
             * @param error Flag to compose styles for erroneous situation.
             * @returns {Mscrm.Dictionary} with proper styles for the HOVER mode.
             */
            VirtualNumberControl.prototype.hoverStyle = function (theming, deviceSizeMode, scope, isRTL, error) {
                return this.activeStyle(theming, deviceSizeMode, scope, isRTL, error);
            };
            /**
             * Composes styles for control's ACTIVE mode.
             * @param theming Desired Theme styles, given to the control, to take stytles from.
             * @param deviceSizeMode
             * @param error Flag to compose styles for erroneous situation.
             * @returns {Mscrm.Dictionary} with proper styles for the ACTIVE mode.
             * @private
             */
            VirtualNumberControl.prototype.activeStyle = function (theming, deviceSizeMode, scope, isRTL, error) {
                return FieldControls.ThemingHelper.getEditModeStyle(theming, deviceSizeMode, scope, isRTL, error);
            };
            /**
             * View rendering
             */
            /**
             * Renders the control with data from the a context properties currently assigned to the control's manifest parameters
             */
            VirtualNumberControl.prototype.updateView = function (context) {
                // Update context with possible changes since initialization.
                this.context = context;
                return this.component();
            };
            /**
             * Event handlers
             */
            /**
             * Handles focus event in the input and selects all text inside
             */
            VirtualNumberControl.prototype.onFocus = function () {
                var active = {
                    id: FieldControls.ModeDescriptorID.ACTIVE
                };
                this.modeManager.requestTransitionTo(active);
            };
            /**
             * Handles click event for the input
             */
            VirtualNumberControl.prototype.onClick = function (event) {
                event.currentTarget.select();
            };
            /**
             * Handler for the blur event for the input
             */
            VirtualNumberControl.prototype.onBlur = function () {
                var rest = {
                    id: FieldControls.ModeDescriptorID.REST
                };
                this.modeManager.requestTransitionTo(rest);
            };
            /**
             * Handler for the key down event for the input
             */
            VirtualNumberControl.prototype.onKeyDown = function (event) {
                // notify field change event when enter is pressed
                if (VirtualNumberControl.Enter_KEY_CODE === event.keyCode) {
                    this.notifyOutputChanged();
                }
            };
            /**
             * Handles a change of the control's value
             * @param event The change event wrapper object.
             */
            VirtualNumberControl.prototype.onChange = function (event) {
                var candidate = event.target.value;
                this.setControlValue(this.tryConvertToNumber(candidate));
                this.notifyOutputChanged(true);
            };
            /**
             * Handles pointerenter event for the element.
             */
            VirtualNumberControl.prototype.onPointerEnter = function () {
                var hover = {
                    id: FieldControls.ModeDescriptorID.HOVER
                };
                this.modeManager.requestTransitionTo(hover);
            };
            /**
             * Handles pointerleave event for the element.
             */
            VirtualNumberControl.prototype.onPointerLeave = function () {
                this._pointerEnd = true;
                var rest = {
                    id: FieldControls.ModeDescriptorID.REST
                };
                this.modeManager.requestTransitionTo(rest);
            };
            /**
             * ModeTransitionDataSource.
             */
            /**
             * Function for initialization of the ModeTransitionManager.
             * @returns {IModeDescriptor} initial mode for the control to start with.
             */
            VirtualNumberControl.prototype.defaultMode = function () {
                return { id: FieldControls.ModeDescriptorID.REST };
            };
            /**
             * ModeTransitionDelegate.
             */
            /**
             * Function is called before any requested transition happens. It determines
             * if pending transition from given state to another given state is actually possible.
             * @param from {IModeDescriptor} Current control's mode.
             * @param to {IModeDescriptor} Desired mode control wants to be in.
             * @return {boolean} `true` if transition between given modes is allowed, `false` - otherwise.
             */
            VirtualNumberControl.prototype.isTransitionAllowed = function (from, to) {
                var allowed = false;
                switch (from.id) {
                    case FieldControls.ModeDescriptorID.REST:
                    case FieldControls.ModeDescriptorID.HOVER:
                        allowed = true;
                        break;
                    case FieldControls.ModeDescriptorID.ACTIVE:
                        allowed = !((to.id === FieldControls.ModeDescriptorID.REST && this._pointerEnd) || to.id === FieldControls.ModeDescriptorID.HOVER);
                        break;
                    default:
                        break;
                }
                this._pointerEnd = false;
                return allowed;
            };
            VirtualNumberControl.prototype.transitionWillApply = function (from, to) {
                if (from.id === FieldControls.ModeDescriptorID.ACTIVE &&
                    to.id === FieldControls.ModeDescriptorID.REST) {
                    // Notify the framework about the value change.
                    this.notifyOutputChanged();
                }
            };
            VirtualNumberControl.prototype.transitionDidApply = function (from, to) {
                // Transition just happened.
                // Update UI to reflect the changes.
                this.context.utils.requestRender();
            };
            /**
             * Returns true if control should be disabled
             * @returns {boolean|IPageBag}
             */
            VirtualNumberControl.prototype.isControlDisabled = function () {
                return this.context.mode.isControlDisabled;
            };
            /**
             * Name of the event for updating label for the control
             */
            VirtualNumberControl.UPDATE_LABEL_EVENT = "getLabelUniqueId";
            /**
             * Placeholder string to show in the input when value is not set.
             */
            VirtualNumberControl.DEFAULT_VALUE_LABEL = "---";
            /**
             * Default value to show when value is not readable.
             * @type {string}
             */
            VirtualNumberControl.NOT_READABLE_VALUE = "******";
            /**
             * enter key code
             */
            VirtualNumberControl.Enter_KEY_CODE = 13;
            return VirtualNumberControl;
        }(FieldControls.VirtualControl));
        FieldControls.VirtualNumberControl = VirtualNumberControl;
    })(FieldControls = MscrmControls.FieldControls || (MscrmControls.FieldControls = {}));
})(MscrmControls || (MscrmControls = {}));
var MscrmControls;
(function (MscrmControls) {
    var FieldControls;
    (function (FieldControls) {
        'use strict';
        /**
         * Class with complete functionality of displaying, editing and
         * navigating to the URL as a virtual field control.
         */
        var VirtualActionControl = /** @class */ (function (_super) {
            __extends(VirtualActionControl, _super);
            /**
             * Constructor.
             */
            function VirtualActionControl() {
                var _this = _super.call(this) || this;
                // Initial control's state.
                _this._pointerEnd = false;
                // Input related event handlers.
                _this._focusInputHandler = _this.onInputFocus.bind(_this);
                _this._blurInputHandler = _this.onInputBlur.bind(_this);
                _this._changeInputHandler = _this.onInputChange.bind(_this);
                _this._keyDownInputHandler = _this.onInputKeyDown.bind(_this);
                // Action button related event handlers
                _this._clickButtonHandler = _this.onActionTrigger.bind(_this);
                _this._pointerDownButtonHandler = _this.onPointerDownButton.bind(_this);
                _this._focusButtonHandler = _this.onButtonFocus.bind(_this);
                _this._blurButtonHandler = _this.onButtonBlur.bind(_this);
                _this._keyDownButtonHandler = _this.onButtonKeyDown.bind(_this);
                // Container related event handlers
                _this._pointerEnterContainerHandler = _this.onContainerPointerEnter.bind(_this);
                _this._pointerLeaveContainerHandler = _this.onContainerPointerLeave.bind(_this);
                // Instantiate a mode manager.
                _this.modeManager = new FieldControls.ModeTransitionManager();
                _this.modeManager.resetManager(_this, _this);
                return _this;
            }
            /**
             * Initializes the control. This function has access to the property bag context that will contain your custom control properties and utility functions.
             * Predefinitions and initialisations can be done in this.
             *
             * @param context Dictionary containing custom control's context.
             * @param notifyOutputChanged Function to call when control changed its value, to propagate changes to redux state.
             * @param state The control's internal state. Has nothing to do with redux state tree.
             * @param container Wrapping div element.
             */
            VirtualActionControl.prototype.init = function (context, notifyOutputChanged, state, container) {
                var _this = this;
                _super.prototype.init.call(this, context, notifyOutputChanged, state, container);
                var outputChangedCallback = notifyOutputChanged || (function () { });
                this.notifyOutputChanged = function () {
                    _this.waitingForValueSaved = true;
                    outputChangedCallback();
                };
            };
            /**
             * Returns actual control's outputs to the framework
             * @return {null}
             */
            VirtualActionControl.prototype.getOutputs = function () {
                this.waitingForValueSaved = false;
                return null;
            };
            /**
             * Functionality of the cotnrol's action
             */
            VirtualActionControl.prototype.action = function () {
                // Supposed to be overriden in descendants.
            };
            /**
             * Composes bundle of the ids for the underlying elements of the controls.
             * @return {IActionControlIDBundle} Map with ids.
             */
            VirtualActionControl.prototype.idBundle = function () {
                // Override in descendants
                return {};
            };
            /**
             * Composes props of the action icon/button that should be overriden in descendants.
             * @return {IActionIconProps} Map with icon props.
             */
            VirtualActionControl.prototype.actionIconProps = function () {
                // Override in descendants
                return {};
            };
            /**
             * Description for the action button specific to the control.
             * @return {string} Aria description to be used for the action button.
             */
            VirtualActionControl.prototype.ariaDescription = function () {
                // Override in descendants
                return "";
            };
            /**
             * Placeholder text to show in the input when there is no value given.
             * Specific to the control.
             * @return {string} placeholder string.
             */
            VirtualActionControl.prototype.placeholder = function () {
                // Override in descendants.
                return "";
            };
            /**
             * Allows to save control's value in descendants.
             * @param candidate {string} actual value to save.
             */
            VirtualActionControl.prototype.setControlValue = function (candidate) {
                // Override.
            };
            /**
             * Composes proper value for the control in given mode.
             * @param mode IModeDescriptor for given mode.
             * @return {string} string representation of the control's value.
             */
            VirtualActionControl.prototype.valueForMode = function (mode) {
                // Override in descendants
                return "";
            };
            /**
             * Checks if control is in error state.
             * @return {boolean} `true` - if there is known error, `false` - otherwise.
             */
            VirtualActionControl.prototype.isError = function () {
                return this.context.parameters.value.error;
            };
            /**
             * Function forms proper dictionary with properties of the input
             * based on the given mode.
             *
             * @param mode Mode for which props should be composed.
             * @param ariaDescriptorId Id of an element which contains aria description of the input
             * @return Dictionary containing all necessary props for given mode.
             */
            VirtualActionControl.prototype.propsForMode = function (mode, ariaDescriptorId) {
                var style = this.styleForMode(mode);
                var describedByElementId = ariaDescriptorId ? this.context.accessibility.getUniqueId(ariaDescriptorId) : null;
                var disabled = this.isControlDisabled();
                if (this.context.parameters && this.context.parameters.describedByElementId) {
                    describedByElementId = !describedByElementId ? this.context.parameters.describedByElementId.raw : " " + this.context.parameters.describedByElementId.raw;
                }
                return {
                    id: this.idBundle().input,
                    key: this.idBundle().input,
                    value: this.valueForMode(mode),
                    placeholder: this.placeholder(),
                    readOnly: disabled,
                    disabled: disabled,
                    error: this.isError(),
                    describedByElementId: describedByElementId,
                    style: style,
                    selectValueOnFocus: true,
                    onFocus: (disabled) ? null : this._focusInputHandler,
                    onBlur: (disabled) ? null : this._blurInputHandler,
                    onChange: (disabled) ? null : this._changeInputHandler,
                    onKeyDown: this._keyDownInputHandler,
                    accessibilityRequired: (this.context.parameters.value.attributes.RequiredLevel === 1) || (this.context.parameters.value.attributes.RequiredLevel === 2) ? true : null
                };
            };
            /**
             * Composes proper dictionary object with styles for a particular control's mode.
             * @param mode Mode for which styles should be returned.
             * @returns {Mscrm.Dictionary} with proper styles for given control's mode.
             */
            VirtualActionControl.prototype.styleForMode = function (mode) {
                var theming = this.context.theming;
                var scope = this.context.parameters.scope;
                var deviceSizeMode = this.context.parameters.deviceSizeMode;
                switch (mode.id) {
                    case FieldControls.ModeDescriptorID.REST:
                        return this.restStyle(theming, deviceSizeMode, scope, this.isError());
                    case FieldControls.ModeDescriptorID.HOVER:
                        return this.hoverStyle(theming, deviceSizeMode, scope, this.isError());
                    case FieldControls.ModeDescriptorID.ACTIVE:
                        return this.activeStyle(theming, deviceSizeMode, scope, this.isError());
                    default:
                        break;
                }
                return {};
            };
            VirtualActionControl.prototype.isValueSet = function (mode) {
                var value = this.valueForMode({ id: mode });
                var isNullOrEmptyString = null;
                // Use utils definition of null/empty string, if available
                if (this.context.utils.isNullOrEmptyString && typeof this.context.utils.isNullOrEmptyString === 'function') {
                    isNullOrEmptyString = this.context.utils.isNullOrEmptyString(value);
                }
                else {
                    isNullOrEmptyString = value === null || value === undefined || !value.length;
                }
                return !isNullOrEmptyString && value.toString() !== VirtualActionControl.DEFAULT_VALUE_LABEL;
            };
            /**
             * Composes styles for control's REST mode.
             * @param theming Desired Theme styles, given to the control, to take stytles from.
             * @param deviceSizeMode
             * @param error Flag to compose styles for erroneous situation.
             * @returns {Mscrm.Dictionary} with proper styles for the REST mode.
             */
            VirtualActionControl.prototype.restStyle = function (theming, deviceSizeMode, scope, error) {
                var isValueSet = this.isValueSet(FieldControls.ModeDescriptorID.REST);
                var isRTL = this.context.userSettings.isRTL;
                return FieldControls.ThemingHelper.getReadModeStyle(theming, deviceSizeMode, scope, isRTL, error, this.isControlDisabled(), isValueSet);
            };
            /**
             * Composes styles for control's HOVER mode.
             * @param theming Desired Theme styles, given to the control, to take stytles from.
             * @param deviceSizeMode
             * @param error Flag to compose styles for erroneous situation.
             * @returns {Mscrm.Dictionary} with proper styles for the HOVER mode.
             */
            VirtualActionControl.prototype.hoverStyle = function (theming, deviceSizeMode, scope, error) {
                return this.activeStyle(theming, deviceSizeMode, scope, error);
            };
            /**
             * Composes styles for control's ACTIVE mode.
             * @param theming Desired Theme styles, given to the control, to take stytles from.
             * @param deviceSizeMode
             * @param error Flag to compose styles for erroneous situation.
             * @returns {Mscrm.Dictionary} with proper styles for the ACTIVE mode.
             */
            VirtualActionControl.prototype.activeStyle = function (theming, deviceSizeMode, scope, error) {
                var isValueSet = this.isValueSet(FieldControls.ModeDescriptorID.ACTIVE);
                var isRTL = this.context.userSettings.isRTL;
                var editStyle = FieldControls.ThemingHelper.getEditModeStyle(theming, deviceSizeMode, scope, isRTL, error, isValueSet);
                editStyle["border-radius"] = "0px";
                editStyle["-moz-appearance"] = "none";
                editStyle["-webkit-appearance"] = "none";
                editStyle["-appearance"] = "none";
                editStyle["borderStyle"] = "solid";
                return editStyle;
            };
            /**
             * Composes styles for control's action button.
             * @param theming Desired Theme styles, given to the control, to take stytles from.
             * @param mode mode control currently rendering.
             * @returns {Mscrm.Dictionary} with proper styles for action button.
             */
            VirtualActionControl.prototype.actionButtonStyle = function (theming, isRTL, error, mode) {
                var isRestMode = mode.id === FieldControls.ModeDescriptorID.REST;
                return FieldControls.ThemingHelper.getActionIconStyle(theming, isRTL, error, isRestMode);
            };
            /**
             * Function forms proper dictionary with properties of the live container
             * @return Dictionary containing all necessary props for given mode.
             */
            VirtualActionControl.prototype.getLiveContainerProps = function () {
                return {
                    style: {
                        position: "absolute",
                        clip: "rect(1px, 1px, 1px, 1px)"
                    },
                    role: "alert",
                    accessibilityLive: "assertive",
                    key: "aria-live-container"
                };
            };
            /**
             * Helper method to notify screen reader with some of info by resource key.
             * @param message to be set inside live container.
             */
            VirtualActionControl.prototype.setLiveContainerNotification = function (message) {
                this._accessibilityNotificationMessage = message;
                this.context.utils.requestRender();
            };
            /**
             * Returns the component name for action button. Default is MICROSOFTICON
             */
            VirtualActionControl.prototype.actionButtonType = function () {
                return "MICROSOFTICON";
            };
            /**
             * Creates hierarchy for the component in current mode.
             *
             * @return Complete component which can be rendered on the form.
             * @private
             */
            VirtualActionControl.prototype.component = function () {
                var disabled = this.isControlDisabled();
                var isValueSet = this.isValueSet(FieldControls.ModeDescriptorID.ACTIVE);
                var actionBtn = null;
                if (isValueSet) {
                    var _a = this.actionIconProps(), accessibilityLabel = _a.accessibilityLabel, type = _a.type;
                    var isError = this.context.parameters.value.error;
                    actionBtn = this.context.factory.createElement(this.actionButtonType(), {
                        id: this.idBundle().icon,
                        key: this.idBundle().icon,
                        role: "button",
                        accessibilityLabel: accessibilityLabel,
                        type: type,
                        tabIndex: 0,
                        onClick: (isError) ? null : this._clickButtonHandler,
                        onPointerDown: (isError) ? null : this._pointerDownButtonHandler,
                        onFocus: (isError) ? null : this._focusButtonHandler,
                        onBlur: (isError) ? null : this._blurButtonHandler,
                        onKeyDown: (isError) ? null : this._keyDownButtonHandler,
                        style: this.actionButtonStyle(this.context.theming, this.context.userSettings.isRTL, this.isError(), this.modeManager.mode())
                    });
                }
                // Create an element for accessibility, to describe the action of the control.
                var ariaDescriptor = this.context.factory.createElement("LABEL", {
                    id: this.idBundle().ariaDescriptor,
                    key: this.idBundle().ariaDescriptor,
                    style: {
                        display: "none"
                    }
                }, this.ariaDescription());
                var liveRegion = this.context.factory.createElement("CONTAINER", this.getLiveContainerProps(), this._accessibilityNotificationMessage || "");
                var input = this.context.factory.createElement("TEXTINPUT", this.propsForMode(this.modeManager.mode(), this.idBundle().ariaDescriptor));
                return this.context.factory.createElement("CONTAINER", {
                    id: this.idBundle().container,
                    key: this.idBundle().container,
                    onPointerEnter: (disabled) ? null : this._pointerEnterContainerHandler,
                    onPointerLeave: (disabled) ? null : this._pointerLeaveContainerHandler,
                    style: {
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        width: "100%"
                    }
                }, [liveRegion, input, ariaDescriptor, actionBtn]);
            };
            /**
             * View Rendering
             */
            /**
             * Renders the control with data from the a context properties currently assigned to the control's manifest parameters
             */
            VirtualActionControl.prototype.updateView = function (context) {
                // Update context with possible changes since initialization.
                this.context = context;
                // Return the component for the current state for rendering.
                return this.component();
            };
            /**
             * Event handlers
             */
            /**
             * Handles focus event in the input element
             */
            VirtualActionControl.prototype.onInputFocus = function () {
                var active = {
                    id: FieldControls.ModeDescriptorID.ACTIVE
                };
                this.modeManager.requestTransitionTo(active);
            };
            /**
             * Handler for the onblur event for the input element
             */
            VirtualActionControl.prototype.onInputBlur = function () {
                var rest = {
                    id: FieldControls.ModeDescriptorID.REST
                };
                this.modeManager.requestTransitionTo(rest, true);
            };
            /**
             * Handles a change value event for the input element.
             *
             * @params event The change event wrapper object
             */
            VirtualActionControl.prototype.onInputChange = function (event) {
                var candidate = event.target.value;
                this.setControlValue(candidate);
            };
            /**
             * Handles the keydown event for the input element.
             *
             * @param event The keydown event wrapper object.
             */
            VirtualActionControl.prototype.onInputKeyDown = function (event) {
                if (!event) {
                    return;
                }
                switch (event.keyCode) {
                    case 13 /* Enter */:/* ENTER */ 
                        if (event.ctrlKey) {
                            // CTRL + ENTER triggers the action
                            this.action();
                        }
                        break;
                    default:
                        break;
                }
            };
            /**
             * Handles pointerenter event for the container element.
             */
            VirtualActionControl.prototype.onContainerPointerEnter = function () {
                var hover = {
                    id: FieldControls.ModeDescriptorID.HOVER
                };
                this.modeManager.requestTransitionTo(hover);
            };
            /**
             * Handles pointerleave event for the container element.
             */
            VirtualActionControl.prototype.onContainerPointerLeave = function () {
                this._pointerEnd = true;
                var rest = {
                    id: FieldControls.ModeDescriptorID.REST
                };
                this.modeManager.requestTransitionTo(rest);
            };
            /**
             * This is a handler for control's main action.
             */
            VirtualActionControl.prototype.onActionTrigger = function () {
                this.action();
            };
            /**
             * Handler for pointer down event.
             */
            VirtualActionControl.prototype.onPointerDownButton = function () {
                // TODO: Remove this??
            };
            /**
             * Handles the focus event for the icon sub-element.
             */
            VirtualActionControl.prototype.onButtonFocus = function () {
                var active = {
                    id: FieldControls.ModeDescriptorID.ACTIVE
                };
                this.modeManager.requestTransitionTo(active);
            };
            /**
             * Handles the blur event for the icon sub-element.
             */
            VirtualActionControl.prototype.onButtonBlur = function () {
                var rest = {
                    id: FieldControls.ModeDescriptorID.REST
                };
                this.modeManager.requestTransitionTo(rest, true);
            };
            /**
             * Handles the keydown event for the icon sub-element.
             *
             * @param event The keydown event wrapper object.
             */
            VirtualActionControl.prototype.onButtonKeyDown = function (event) {
                if (!event) {
                    return;
                }
                switch (event.keyCode) {
                    case 13 /* Enter */:/* ENTER */ 
                        // trigger the action.
                        this.action();
                        break;
                    default:
                        break;
                }
            };
            /**
             * ModeTransitionDataSource.
             */
            /**
             * Function for initialization of the ModeTransitionManager.
             * @returns {IModeDescriptor} initial mode for the control to start with.
             */
            VirtualActionControl.prototype.defaultMode = function () {
                return { id: FieldControls.ModeDescriptorID.REST };
            };
            /**
             * ModeTransitionDelegate.
             */
            /**
             * Function is called before any requested transition happens. It determines
             * if pending transition from given state to another given state is actually possible.
             * @param from {IModeDescriptor} Current control's mode.
             * @param to {IModeDescriptor} Desired mode control wants to be in.
             * @return {boolean} `true` if transition between given modes is allowed, `false` - otherwise.
             */
            VirtualActionControl.prototype.isTransitionAllowed = function (from, to) {
                var allowed = false;
                switch (from.id) {
                    case FieldControls.ModeDescriptorID.REST:
                    case FieldControls.ModeDescriptorID.HOVER:
                        allowed = true;
                        break;
                    case FieldControls.ModeDescriptorID.ACTIVE:
                        allowed = !((to.id === FieldControls.ModeDescriptorID.REST && this._pointerEnd) || to.id === FieldControls.ModeDescriptorID.HOVER);
                        break;
                    default:
                        break;
                }
                this._pointerEnd = false;
                return allowed;
            };
            VirtualActionControl.prototype.transitionWillApply = function (from, to) {
                if (from.id === FieldControls.ModeDescriptorID.ACTIVE &&
                    to.id === FieldControls.ModeDescriptorID.REST) {
                    // Notify the framework about the value change.
                    this.notifyOutputChanged();
                }
            };
            VirtualActionControl.prototype.transitionDidApply = function (from, to) {
                // Transition just happened.
                // Update UI to reflect the changes.
                this.context.utils.requestRender();
            };
            /**
             * Returns true if control should be disabled
             * @returns {boolean|IPageBag}
             */
            VirtualActionControl.prototype.isControlDisabled = function () {
                return this.context.mode.isControlDisabled;
            };
            /**
             * Name of the event for updating label for the control
             */
            VirtualActionControl.UPDATE_LABEL_EVENT = "getLabelUniqueId";
            /**
             * Placeholder string to show in the input when value is not set.
             */
            VirtualActionControl.DEFAULT_VALUE_LABEL = "---";
            return VirtualActionControl;
        }(FieldControls.VirtualControl));
        FieldControls.VirtualActionControl = VirtualActionControl;
    })(FieldControls = MscrmControls.FieldControls || (MscrmControls.FieldControls = {}));
})(MscrmControls || (MscrmControls = {}));
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
var MscrmControls;
(function (MscrmControls) {
    var FieldControls;
    (function (FieldControls) {
        "use strict";
        var ModeDescriptorID;
        (function (ModeDescriptorID) {
            ModeDescriptorID[ModeDescriptorID["NONE"] = -1] = "NONE";
            ModeDescriptorID[ModeDescriptorID["REST"] = 1] = "REST";
            ModeDescriptorID[ModeDescriptorID["HOVER"] = 2] = "HOVER";
            ModeDescriptorID[ModeDescriptorID["ACTIVE"] = 3] = "ACTIVE";
        })(ModeDescriptorID = FieldControls.ModeDescriptorID || (FieldControls.ModeDescriptorID = {}));
        var ModeTransitionManager = /** @class */ (function () {
            /**
             * Creates instance of the ModeTransitionManager.
             */
            function ModeTransitionManager() {
            }
            /**
             * getter for the current mode.
             * @returns {IModeDescriptor}
             */
            ModeTransitionManager.prototype.mode = function () {
                return this._mode;
            };
            /**
             * Performs initial setup for the mode manager.
             * @param dataSource {IModeTransitionDataSource} Data source for the mode transition manger initialization.
             * @param delegate {IModeTransitionDelegate} Delegate for mode transition operations.
             */
            ModeTransitionManager.prototype.resetManager = function (dataSource, delegate) {
                // Store delegate for further usage.
                this._delegate = delegate;
                // initialize mode with EMPTY MODE.
                this._mode = ModeTransitionManager._EMPTY_MODE;
                // If the data source has been given - try to get default mode to start from.
                // Otherwise - just use _EMPTY_MODE.
                if (dataSource && dataSource.defaultMode) {
                    this._mode = dataSource.defaultMode() || ModeTransitionManager._EMPTY_MODE;
                }
                // initialize transition with EMPTY MODE (effectively - no pending transition).
                this._transition = ModeTransitionManager._EMPTY_MODE;
            };
            /**
             * Requests transition from current mode to given one.
             * @param to {IModeDescriptor} Desired mode to end up in.
             * @param forceAsync {boolean} In case of `true`
             * transition will be kicked out to the next tick (by setTimeout(0)),
             * which guarantees asyncronous behavior.
             * In case of `false` async behavior is not guaranteed and depends on React.
             * Default value is `false`.
             */
            ModeTransitionManager.prototype.requestTransitionTo = function (to, forceAsync) {
                var _this = this;
                if (forceAsync === void 0) { forceAsync = false; }
                // Store desired transition
                this._transition = to;
                if (forceAsync) {
                    // Flush transition asyncronously.
                    setTimeout(function () {
                        _this._flushTransition();
                    }, 0);
                }
                else {
                    // Flush transition.
                    this._flushTransition();
                }
            };
            /**
             * Checks if given mode might be count as EMPTY MODE.
             * @param candidate {IModeDescriptor} Mode to check for emptiness.
             * @returns {boolean} `true` when mode is count as EMPTY, `false` - otherwise.
             * @private
             */
            ModeTransitionManager._isEmptyMode = function (candidate) {
                return ModeTransitionManager._EMPTY_MODE.id === candidate.id;
            };
            /**
             * Tries to perform the pending mode transition. Asks the delegate if transition is allowed.
             * If transition is allowed - performs it and informs the delegate before and after, if possible.
             * Otherwise - just drops the pending transition and remains in the current mode.
             * @private
             */
            ModeTransitionManager.prototype._flushTransition = function () {
                if (!this._transition || /* No transition given OR */
                    ModeTransitionManager._isEmptyMode(this._transition) || /* Given transition is EMPTY OR */
                    this._mode.id === this._transition.id) {
                    // Nothing to flush.
                    // Drop the transition request (cause there is no more pending transition)
                    this._transition = ModeTransitionManager._EMPTY_MODE;
                    return;
                }
                // Ask the delegate if transition is allowed.
                // If there is no delegate or isTransitionAllowed not implemented
                // suppose that transition IS allowed.
                var transitionAllowed = true;
                if (this._delegate && this._delegate.isTransitionAllowed) {
                    transitionAllowed = this._delegate.isTransitionAllowed(this._mode, this._transition);
                }
                // If transition is not allowed by the control
                if (!transitionAllowed) {
                    // Drop the transition request (cause there is no more pending transition)
                    this._transition = ModeTransitionManager._EMPTY_MODE;
                    // nothing to flush.
                    return;
                }
                // Inform the delegate (if necessary) that transition will happen soon.
                if (this._delegate && this._delegate.transitionWillApply) {
                    this._delegate.transitionWillApply(this._mode, this._transition);
                }
                // Store previous values locally
                var to = this._transition;
                var from = this._mode;
                // Perform the transition
                this._mode = this._transition;
                // Drop the transition request (cause there is no more pending transition)
                this._transition = ModeTransitionManager._EMPTY_MODE;
                // Inform the delegate (if necessary) that transition just happened.
                if (this._delegate && this._delegate.transitionDidApply) {
                    this._delegate.transitionDidApply(from, to);
                }
            };
            /**
             * Contains empty mode for specific cases.
             */
            ModeTransitionManager._EMPTY_MODE = { id: ModeDescriptorID.NONE };
            return ModeTransitionManager;
        }());
        FieldControls.ModeTransitionManager = ModeTransitionManager;
    })(FieldControls = MscrmControls.FieldControls || (MscrmControls.FieldControls = {}));
})(MscrmControls || (MscrmControls = {}));
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
var MscrmControls;
(function (MscrmControls) {
    var FieldControls;
    (function (FieldControls) {
        "use strict";
        /**
         * Enum for device size modes
         */
        var SizeMode;
        (function (SizeMode) {
            SizeMode[SizeMode["Fullmode"] = 0] = "Fullmode";
            SizeMode[SizeMode["Sbreakpoint"] = 1] = "Sbreakpoint";
            SizeMode[SizeMode["Mbreakpoint"] = 2] = "Mbreakpoint";
        })(SizeMode || (SizeMode = {}));
        /**
         * Enum for control's scope
         *
         * Represents control's rendering scope
         */
        var CellScope;
        (function (CellScope) {
            CellScope[CellScope["Header"] = 0] = "Header";
            CellScope[CellScope["EditForm"] = 1] = "EditForm";
            CellScope[CellScope["Footer"] = 2] = "Footer";
        })(CellScope || (CellScope = {}));
        var ThemingHelper = /** @class */ (function () {
            function ThemingHelper() {
            }
            ThemingHelper.isHeaderCell = function (scope) {
                return scope && scope.raw === CellScope.Header;
            };
            ThemingHelper.isFooterCell = function (scope) {
                return scope && scope.raw === CellScope.Footer;
            };
            ThemingHelper.getCommonStyle = function (theming, deviceSizeMode, scope, isRTL, error, isIconAvailable) {
                var _a = theming.textbox, contentfontweight = _a.contentfontweight, linethickness = _a.linethickness, errorlinethickness = _a.errorlinethickness, solidborderstyle = theming.solidborderstyle, _b = theming.measures, measure050 = _b.measure050, measure075 = _b.measure075, measure250 = _b.measure250, font100 = theming.fontsizes.font100, _c = theming.colors.basecolor, red = _c.red, black = _c.black;
                var isHeader = ThemingHelper.isHeaderCell(scope);
                // Control should always fill all parent's width
                var width = "100%";
                // Meet the redline requirements
                var marginLeft = "0px";
                var marginRight = "0px";
                var paddingLeft = measure050;
                var paddingRight = measure050;
                if (deviceSizeMode.raw === SizeMode.Mbreakpoint || deviceSizeMode.raw === SizeMode.Sbreakpoint) {
                    // When control is rendered under it's label we need to vertically align control's inner text and label
                    // To achieve that we use negative margin values
                    marginRight = isRTL ? (isHeader ? "-" + measure075 : "-" + measure050) : marginRight;
                    marginLeft = isRTL ? marginLeft : (isHeader ? "-" + measure075 : "-" + measure050);
                    // And adjust control's width to properly fit parent's width
                    width = "calc(" + width + " + " + (isHeader ? measure075 : measure050) + ")";
                }
                if (isIconAvailable) {
                    // Some controls have action icons at the right side (left for RTL)
                    // In this case we set inner padding to properly truncate text inside of control
                    var iconWidth = ThemingHelper.getActionIconWidth(theming);
                    paddingLeft = isRTL ? iconWidth : paddingLeft;
                    paddingRight = isRTL ? paddingRight : iconWidth;
                }
                return {
                    // Apply width and height to control's content, the padding and the borders.
                    boxSizing: "border-box",
                    // Set line-height equal to control's height allows us to exclude vertical padding
                    height: measure250,
                    lineHeight: measure250,
                    width: width,
                    textOverflow: "ellipsis",
                    fontSize: font100,
                    fontWeight: contentfontweight,
                    color: error ? red.red3 : black,
                    paddingLeft: paddingLeft,
                    paddingRight: paddingRight,
                    paddingTop: "0px",
                    paddingBottom: "0px",
                    marginLeft: marginLeft,
                    marginRight: marginRight,
                    borderStyle: solidborderstyle,
                    borderWidth: error ? errorlinethickness : linethickness
                };
            };
            /**
             * Return style for disabled input control
             * @param theming
             * @returns {{border: string, color: string, cursor: string, fontSize: string, fontFamily: string, textDecoration: string, ':hover': {backgroundColor: string}}
             */
            ThemingHelper.getDisableStyle = function (theming) {
                return {
                    borderWidth: theming.textbox.linethickness,
                    borderStyle: theming.solidborderstyle,
                    borderColor: "transparent",
                    color: theming.colors.basecolor.grey.grey7,
                    backgroundColor: theming.textbox.backgroundcolor,
                    // Override iOS default styles for disabled inputs
                    opacity: 1,
                    "-webkit-text-fill-color": this.getHighContrastEnabled() ? "" : theming.colors.basecolor.grey.grey7,
                    cursor: "default",
                    fontSize: theming.fontsizes.font100,
                    fontFamily: theming.fontfamilies.regular,
                    textDecoration: "none",
                    ":hover": {
                        backgroundColor: theming.colors.basecolor.grey.grey2,
                        borderColor: theming.colors.basecolor.grey.grey2
                    }
                };
            };
            /**
             * Returns styles for input element in edit mode
             * @params the context which contains theming
             * @returns style - collected styles for input
             */
            ThemingHelper.getEditModeStyle = function (theming, deviceSizeMode, scope, isRTL, error, isIconAvailable) {
                var commonStyles = ThemingHelper.getCommonStyle(theming, deviceSizeMode, scope, isRTL, error, isIconAvailable);
                var _a = theming.textbox, redcolor = _a.redcolor, hoverboxcolor = _a.hoverboxcolor, errorbackgroundcolor = _a.errorbackgroundcolor, backgroundcolor = _a.backgroundcolor, fontweight = _a.fontweight, contentfontweight = _a.contentfontweight;
                var editModeStyles = {
                    fontWeight: error ? contentfontweight : fontweight,
                    backgroundColor: error ? errorbackgroundcolor : backgroundcolor,
                    borderColor: error ? redcolor : hoverboxcolor,
                    ":hover": {}
                };
                // TODO: Remove this section after migrating all controls to :hover styles
                var headerStyles = ThemingHelper.isHeaderCell(scope) ? ThemingHelper.getHeaderStyle(theming) : undefined;
                var footerStyles = ThemingHelper.isFooterCell(scope) ? ThemingHelper.getFooterStyle(theming) : undefined;
                return Object.assign({}, commonStyles, editModeStyles, headerStyles, footerStyles);
            };
            /**
             * Returns styles for input element in read mode
             * @params the context which contains theming
             * @returns style - collected styles for input
             */
            ThemingHelper.getReadModeStyle = function (theming, deviceSizeMode, scope, isRTL, error, isControlDisabled, isIconAvailable) {
                var commonStyles = ThemingHelper.getCommonStyle(theming, deviceSizeMode, scope, isRTL, error, isIconAvailable);
                var disableStyles = isControlDisabled ? ThemingHelper.getDisableStyle(theming) : undefined;
                var headerStyles = ThemingHelper.isHeaderCell(scope) ? ThemingHelper.getHeaderStyle(theming) : undefined;
                var footerStyles = ThemingHelper.isFooterCell(scope) ? ThemingHelper.getFooterStyle(theming) : undefined;
                var readModeStyle = {
                    borderColor: "transparent",
                    ":hover": !isControlDisabled ? ThemingHelper.getEditModeStyle(theming, deviceSizeMode, scope, isRTL, error) : {}
                };
                return Object.assign({}, commonStyles, readModeStyle, disableStyles, headerStyles, footerStyles);
            };
            ThemingHelper.getHeaderStyle = function (theming) {
                var font125 = theming.fontsizes.font125, grey = theming.colors.basecolor.grey, semilight = theming.fontfamilies.semilight, fontweight = theming.textbox.fontweight;
                return {
                    color: grey.grey7,
                    fontSize: font125,
                    fontFamily: semilight,
                    fontWeight: fontweight
                };
            };
            ThemingHelper.getFooterStyle = function (theming) {
                var font085 = theming.fontsizes.font085, grey = theming.colors.basecolor.grey, regular = theming.fontfamilies.regular, fontweight = theming.textbox.fontweight;
                return {
                    fontWeight: fontweight,
                    color: grey.grey7,
                    fontSize: font085,
                    fontFamily: regular,
                    backgroundColor: grey.grey3,
                    ":hover": {
                        backgroundColor: grey.grey3,
                        borderColor: "transparent"
                    }
                };
            };
            /**
             * Returns styles for input's action icon
             * @params theming - the context which contains theming
             * @params isRestMode - boolean flag for control's rest mode
             * @returns style - collected styles for icon
             */
            ThemingHelper.getActionIconStyle = function (theming, isRTL, error, isRestMode) {
                var _a = theming.textbox, lineheight = _a.lineheight, horizontalpadding = _a.horizontalpadding, verticalpadding = _a.verticalpadding, linethickness = _a.linethickness, errorlinethickness = _a.errorlinethickness;
                var iconSpace = lineheight + " + " + horizontalpadding + " + " + horizontalpadding;
                var borderWidth = error ? errorlinethickness : linethickness;
                var right = "0px";
                var left = "0px";
                var widthDeficit = "(" + iconSpace + " + " + borderWidth + ")";
                if (isRTL) {
                    left = linethickness;
                    right = "calc(100% - " + widthDeficit + ")";
                }
                else {
                    left = "calc(100% - " + widthDeficit + ")";
                    right = linethickness;
                }
                return {
                    position: "absolute",
                    top: linethickness,
                    right: right,
                    left: left,
                    bottom: linethickness,
                    cursor: "pointer",
                    color: isRestMode ? "" : theming.colors.basecolor.grey.grey7,
                    background: isRestMode ? "" : theming.colors.basecolor.grey.grey3,
                    lineHeight: lineheight,
                    width: lineheight,
                    textAlign: "center",
                    paddingLeft: horizontalpadding,
                    paddingRight: horizontalpadding,
                    paddingTop: verticalpadding,
                    paddingBottom: verticalpadding
                };
            };
            /**
             * Returns width of input's action icon
             * @params theming - the context which contains theming
             * @returns string that contains calculated width of icon
             */
            ThemingHelper.getActionIconWidth = function (theming) {
                var _a = theming.textbox, lineheight = _a.lineheight, horizontalpadding = _a.horizontalpadding;
                return "calc(" + lineheight + " + " + horizontalpadding + " + " + horizontalpadding + ")";
            };
            /**
             * Return outline styles for controls, that do not support border styles (checkbox)
             * @param theming
             * @returns {{outlineColor: string, outlineWidth: string, outlineStyle: string}}
             */
            ThemingHelper.getOutlineStyle = function (theming) {
                var solidborderstyle = theming.solidborderstyle;
                var _a = theming.textbox, hoverboxcolor = _a.hoverboxcolor, linethickness = _a.linethickness;
                return {
                    outlineColor: hoverboxcolor,
                    outlineWidth: linethickness,
                    outlineStyle: solidborderstyle
                };
            };
            /**
             * Selector for the HighContrastEnabled setting.
             * @returns the isHighContrastEnabled for the application user.
             */
            ThemingHelper.getHighContrastEnabled = function () {
                var isHighContrastEnabled = false;
                var highContrastMediaFeatue = "(-ms-high-contrast: active)";
                var mediaQuery = window.matchMedia(highContrastMediaFeatue);
                if (mediaQuery.matches)
                    return true;
                var htmlTag = document.getElementsByTagName("html");
                isHighContrastEnabled = (htmlTag[0].getAttribute("hc") != null);
                return isHighContrastEnabled;
            };
            return ThemingHelper;
        }());
        FieldControls.ThemingHelper = ThemingHelper;
    })(FieldControls = MscrmControls.FieldControls || (MscrmControls.FieldControls = {}));
})(MscrmControls || (MscrmControls = {}));
