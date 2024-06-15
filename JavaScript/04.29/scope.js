
var n = this,
t = e.url,
o = e.config,
a = e.id,
u = e.callback,
s = e.loaded,
d = e.adUnitCode,
f = e.renderNow;
this.url = t,
this.config = o,
this.handlers = {},
this.id = a,
this.renderNow = f,
this.loaded = s,
this.cmd = [],
this.push = function (e) {
"function" == typeof e
    ? n.loaded
        ? e.call()
        : n
            .cmd
            .push(e)
    : (0, i.logError)(
        "Commands given to Renderer.push must be wrapped in a function"
    )
},
this.callback = u || function () {
n.loaded = !0,
n.process()
},
this.render = function () {
var e = this,
    n = arguments,
    o = function () {
        e._render
            ? e
                ._render
                .apply(e, n)
            : (0, i.logWarn)(
                "No render function was provided, please use .setRender on the renderer"
            )
    };
l(d)
    ? (
        (0, i.logWarn)(
            (
                "External Js not loaded by Renderer since renderer url and callback is already " +
                "defined on adUnit "
            ).concat(d)
        ),
        o()
    )
    : f
        ? o()
        : (this.cmd.unshift(o), (0, r.B)(t, c, this.callback, this.documentContext))
}.bind(this)
