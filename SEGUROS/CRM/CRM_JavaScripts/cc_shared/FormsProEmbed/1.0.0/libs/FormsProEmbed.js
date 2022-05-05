"use strict";
/**
 * @copyright Copyright (c) Microsoft Corporation.  All rights reserved.
*/
var SurveyEmbed = function ()
{
    function e(e, t, r, n)
    {
        this._formId = e, this._baseUrl = t || "https://forms.office.com/formspro/", this._cdnUrl = r || "https://mfpembedcdnwus2.azureedge.net/mfpembedcontwus2/", this._compact = n || "false"
    }
    return e.prototype.renderInline = function (e, t)
    {
        if (!this._formId) throw new Error("form_id should be provided.");
        if (!e) throw new Error("parent_element_id should be provided");
        var r = document.getElementById(e);
        if (!r) throw new Error("Parent element with id '" + e + "' not found.");
        var n = document.createElement("iframe");
        n.src = this._generateUrl(t), n.id = "MfpEmbed_Iframe", r.innerHTML = "", r.appendChild(n)
    },
        e.prototype.renderPopup = function (e, t, r)
        {
        if (!this._formId) throw new Error("form_id should be provided.");
        var n = document.createElement("div");
        n.id = "MfpEmbed_Popup", n.style.width = t || "480px", n.style.height = r || "600px";
        var i = document.createElement("div");
        i.id = "mfpembed_overlayDiv";
        var o = document.createElement("div");
        o.id = "mfpembed_iconDiv";
        var d = document.createElement("img");
        d.src = this._cdnUrl + "cross.svg", d.id = "MfpEmbed_CrossButton", d.addEventListener("click", function () {
            i && (i.parentElement && i.parentElement.removeChild(i), i = null), n && (n.parentElement && n.parentElement.removeChild(n), n = null)
        }), o.appendChild(d), n.appendChild(o); var a = document.createElement("iframe");
        a.src = this._generateUrl(e), a.id = "MfpEmbed_Popup_Iframe", n.appendChild(a), document.body.appendChild(i), document.body.appendChild(n)
        }, e.prototype.renderButton = function (e, t, r, n, i) {
        var o = this; if (!this._formId) throw new Error("form_id should be provided.");
        var d = document.getElementById("MfpEmbed_Button");
        if (d) console.log("Button already added.");
        else {
            this.collapseHeight = n || "48px", this.expandHeight = i || "480px";
            var a = document.createElement("div");
            a.id = "MfpEmbed_Button_Container_Collapse", a.style.width = r || "320px", a.style.height = this.collapseHeight;
            var p = document.createElement("img");
            p.id = "MfpEmbed_Icon_Arrow", p.src = this._cdnUrl + "up.svg", (d = document.createElement("div")).id = "MfpEmbed_Button", d.style.height = this.collapseHeight; var m = document.createElement("span");
            m.id = "MfpEmbed_Span", m.textContent = "Provide feedback", t && (m.textContent = t), d.appendChild(m), d.addEventListener("click", function () {
                "MfpEmbed_Button_Container" == a.id ? (o.detachIframe(), a.id = "MfpEmbed_Button_Container_Collapse", a.style.height = o.collapseHeight, p.src = o._cdnUrl + "up.svg") : (o.attachIframe(a, e), a.id = "MfpEmbed_Button_Container", a.style.height = o.expandHeight, p.src = o._cdnUrl + "down.svg")
            }), d.appendChild(p), a.appendChild(d), document.body.appendChild(a)
        }
        }, e.prototype.detachIframe = function () {
            var e = document.getElementById("MfpEmbed_Button_Iframe"); e.parentElement && e.parentElement.removeChild(e)
        }, e.prototype.attachIframe = function (e, t) {
            var r = document.createElement("iframe"); r.src = this._generateUrl(t), r.id = "MfpEmbed_Button_Iframe"; var n = parseInt(this.expandHeight) - parseInt(this.collapseHeight); r.height = n.toString(), e.appendChild(r)
        }, e.prototype._generateUrl = function (e) {
        var t = this._baseUrl + "Pages/ResponsePage.aspx?";
        t += this._getQueryStringParameter("id", this._formId), t += "&" + this._getQueryStringParameter("embed", "true"), this._compact && (t += "&" + this._getQueryStringParameter("compact", this._compact)); var r = this._serializeContext(e);
        return r && (t += "&" + this._getQueryStringParameter("ctx", r)), e && e.hasOwnProperty("locale") && (t += "&lang=" + e.locale), e && e.hasOwnProperty("showmultilingual") && (t += "&showmultilingual=" + e.showmultilingual), t
        }, e.prototype._serializeContext = function (e) {
            var t = ""; return e && (t = JSON.stringify(e)), t
        }, e.prototype._getQueryStringParameter = function (e, t) { return encodeURIComponent(e) + "=" + encodeURIComponent(t) }, e
}();