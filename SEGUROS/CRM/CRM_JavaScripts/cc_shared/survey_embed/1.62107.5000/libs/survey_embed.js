"use strict";
/**
 * @copyright Copyright (c) Microsoft Corporation.  All rights reserved.
 */ var SurveyEmbed = (function () {
    function i(e, t, n, r) {
        (this._formId = e),
            (this._baseUrl = t || "https://forms.office.com/formspro"),
            "https://forms.office.com" === this._baseUrl.toLowerCase() &&
                (this._baseUrl = "https://forms.office.com/formspro"),
            (this._cdnUrl = n || "https://mfpembedcdnwus2.azureedge.net/mfpembedcontwus2"),
            (this._compact = r || "false");
    }
    return (
        (i.prototype.renderInline = function (e, t) {
            if (!this._formId) throw new Error("form_id should be provided.");
            if (!e) throw new Error("parent_element_id should be provided");
            var n = document.getElementById(e);
            if (!n) throw new Error("Parent element with id '" + e + "' not found.");
            e = document.createElement("iframe");
            (e.src = this._generateUrl(t)), (e.id = "MfpEmbed_Iframe"), (n.innerHTML = ""), n.appendChild(e);
        }),
        (i.prototype.renderPopup = function (e, t, n) {
            if (!this._formId) throw new Error("form_id should be provided.");
            var r = document.createElement("div");
            (r.id = "MfpEmbed_Popup"), (r.style.width = t || "480px"), (r.style.height = n || "600px");
            var o = document.createElement("div");
            o.id = "mfpembed_overlayDiv";
            t = document.createElement("div");
            t.id = "mfpembed_iconDiv";
            n = document.createElement("img");
            (n.src = this._cdnUrl + "cross.svg"),
                (n.id = "MfpEmbed_CrossButton"),
                (n.tabIndex = 0),
                n.setAttribute("aria-label", "Close"),
                n.addEventListener("click", function () {
                    i.removeFrame(o, r);
                }),
                this.setEscapeKeyEvent(o, r),
                t.appendChild(n),
                r.appendChild(t);
            t = document.createElement("iframe");
            (t.src = this._generateUrl(e)),
                (t.id = "MfpEmbed_Popup_Iframe"),
                r.appendChild(t),
                document.body.appendChild(o),
                document.body.appendChild(r);
        }),
        (i.removeFrame = function (e, t) {
            e && (e.parentElement && e.parentElement.removeChild(e), (e = null)),
                t && (t.parentElement && t.parentElement.removeChild(t), (t = null));
        }),
        (i.prototype.setEscapeKeyEvent = function (t, n) {
            window.addEventListener("keydown", function (e) {
                "Escape" === e.key && i.removeFrame(t, n);
            }),
                window.addEventListener("message", function (e) {
                    "keydown:escape" === e.data && i.removeFrame(t, n);
                });
        }),
        (i.prototype.renderInlineWithCancelButton = function (e, t) {
            if (!this._formId) throw new Error("form_id should be provided.");
            var n = document.createElement("div");
            if (((n.id = "MfpEmbed_InlineWithCancel"), (n.style.width = "100%"), (n.style.height = "100%"), !e))
                throw new Error("parent_element_id should be provided");
            var r = document.getElementById(e);
            if (!r) throw new Error("Parent element with id '" + e + "' not found.");
            var o = document.createElement("div");
            o.id = "mfpembed_iconDiv";
            e = document.createElement("img");
            (e.src = "https://mfpembedcdnwus2.azureedge.net/mfpembedcontwus2/close-icon.svg"),
                (e.id = "MfpEmbed_CrossButton"),
                (e.tabIndex = 0),
                e.setAttribute("aria-label", "Close"),
                e.addEventListener("click", function () {
                    window.parent.postMessage({ msgType: "closeNpsDialog" }, "*");
                }),
                o.appendChild(e),
                n.appendChild(o);
            o = document.createElement("iframe");
            (o.src = this._generateUrl(t)),
                (o.id = "MfpEmbed_Iframe"),
                n.appendChild(o),
                (r.innerHTML = ""),
                r.appendChild(n),
                window.addEventListener(
                    "message",
                    function (e) {
                        e &&
                            "FormResponseSubmitted" === e.data &&
                            window.parent.postMessage({ msgType: "thankyouNpsDialog" }, "*");
                    },
                    !1
                );
        }),
        (i.prototype.renderButton = function (e, t, n, r, o) {
            var i = this;
            if (!this._formId) throw new Error("form_id should be provided.");
            var d,
                a,
                s = document.getElementById("MfpEmbed_Button");
            s
                ? console.log("Button already added.")
                : ((this.collapseHeight = r || "48px"),
                  (this.expandHeight = o || "480px"),
                  ((d = document.createElement("div")).id = "MfpEmbed_Button_Container_Collapse"),
                  (d.style.width = n || "320px"),
                  (d.style.height = this.collapseHeight),
                  ((a = document.createElement("img")).id = "MfpEmbed_Icon_Arrow"),
                  (a.src = this._cdnUrl + "up.svg"),
                  ((s = document.createElement("div")).id = "MfpEmbed_Button"),
                  (s.style.height = this.collapseHeight),
                  ((n = document.createElement("span")).id = "MfpEmbed_Span"),
                  (n.textContent = "Provide feedback"),
                  t && (n.textContent = t),
                  s.appendChild(n),
                  s.addEventListener("click", function () {
                      "MfpEmbed_Button_Container" == d.id
                          ? (i.detachIframe(),
                            (d.id = "MfpEmbed_Button_Container_Collapse"),
                            (d.style.height = i.collapseHeight),
                            (a.src = i._cdnUrl + "up.svg"))
                          : (i.attachIframe(d, e),
                            (d.id = "MfpEmbed_Button_Container"),
                            (d.style.height = i.expandHeight),
                            (a.src = i._cdnUrl + "down.svg"));
                  }),
                  s.appendChild(a),
                  d.appendChild(s),
                  document.body.appendChild(d));
        }),
        (i.prototype.detachIframe = function () {
            var e = document.getElementById("MfpEmbed_Button_Iframe");
            e.parentElement && e.parentElement.removeChild(e);
        }),
        (i.prototype.attachIframe = function (e, t) {
            var n = document.createElement("iframe");
            (n.src = this._generateUrl(t)), (n.id = "MfpEmbed_Button_Iframe");
            t = parseInt(this.expandHeight) - parseInt(this.collapseHeight);
            (n.height = t.toString()), e.appendChild(n);
        }),
        (i.prototype._generateUrl = function (e) {
            var t = this._baseUrl + "Pages/ResponsePage.aspx?";
            (t += this._getQueryStringParameter("id", this._formId)),
                (t += "&" + this._getQueryStringParameter("embed", "true")),
                this._compact && (t += "&" + this._getQueryStringParameter("compact", this._compact));
            var n = this._serializeContext(e);
            return (
                n && (t += "&" + this._getQueryStringParameter("ctx", n)),
                e && e.hasOwnProperty("locale") && (t += "&lang=" + e.locale),
                e && e.hasOwnProperty("showmultilingual") && (t += "&showmultilingual=" + e.showmultilingual),
                e && e.hasOwnProperty("showoriginalheader") && (t += "&showoriginalheader=" + e.showoriginalheader),
                t
            );
        }),
        (i.prototype._serializeContext = function (e) {
            var t = "";
            return (t = e ? JSON.stringify(e) : t);
        }),
        (i.prototype._getQueryStringParameter = function (e, t) {
            return encodeURIComponent(e) + "=" + encodeURIComponent(t);
        }),
        i
    );
})();
