//https://github.com/jurka/jsontree

// This was modified to wrap string output with <xmp> tags to render XML content

!function (a) { "use strict"; var b = function (c, d) { var e = a(d), f = 0, g = 0; for (var h in c) c.hasOwnProperty(h) && (g += 1); for (var h in c) if (c.hasOwnProperty(h)) { f += 1; var i = ""; if (f < g && (i = ","), null === c[h]) e.append('<li><span class="key">' + h + ':</span><span class="null"> null </span>' + i + "</li>"); else if ("boolean" == typeof c[h]) e.append('<li><span class="key">' + h + ':</span><span class="boolean">' + c[h] + "</span>" + i + "</li>"); else if ("number" == typeof c[h]) e.append('<li><span class="key">' + h + ':</span><span class="number">' + c[h] + "</span>" + i + "</li>"); else if ("string" == typeof c[h]) e.append('<li><span class="key">' + h + ':</span><span class="string"><xmp style="display:inline;white-space:pre-wrap; word-wrap:break-word;display:inline;">"' + c[h] + '"</xmp></span>' + i + "</li>"); else if (a.isArray(c[h])) { var j = a('<li><span class="key">' + h + ':</span><span class="fold">[</span><ul class="array"></ul><span>]</span>' + i + "</li>"); e.append(j), j.find(".unfold").data("card", b(c[h], j.find(".array"))) } else { var k = a('<li><span class="key">' + h + ':</span><span class="fold">{</span><ul class="object"></ul><span>}</span>' + i + "</li>"); e.append(k), k.find(".unfold").data("card", b(c[h], k.find(".object"))) } } return f }; a(document).on("click", ".jsontree .fold", function (b) { b.preventDefault(), a(this).addClass("folded").parent().find("ul").slideUp() }), a(document).on("click", ".jsontree .fold.folded", function (b) { b.preventDefault(), a(this).removeClass("folded").parent().find("ul").slideDown() }); var c = function (c) { var d = a.parseJSON(c.data("jsontree")); c.append('<ul class="jsontree"></ul>'), b([d], c.find(".jsontree")) }; a.fn.jsontree = function (b) { return this.each(function () { var d = a(this), e = d.data("jsontree"); e || ("string" == typeof b ? (e = b, d.data("jsontree", b)) : (e = {}, d.data("jsontree", ""))), new c(d) }) } }(window.jQuery);