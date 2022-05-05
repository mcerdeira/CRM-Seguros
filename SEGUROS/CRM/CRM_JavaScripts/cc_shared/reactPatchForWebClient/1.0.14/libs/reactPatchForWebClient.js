/**
 * @license Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * Editable grid requires react to be available in order to load fabric.
 * In legacy web react is not available so stub enough of it so that fabric can load.
 */

var React = React || {};
React.Component =
	React.Component ||
	function () {
		return {};
	};
React.createContext =
	React.createContext ||
	function () {
		return {};
	};
React.createElement =
	React.createElement ||
	function () {
		return {};
	};
React.forwardRef =
	React.forwardRef ||
	function () {
		return {};
	};
React.memo =
	React.memo ||
	function () {
		return {};
	};
var ReactDOM = ReactDOM || {};
React.PureComponent = React.PureComponent || null;
