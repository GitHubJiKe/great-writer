(function () {
    const i = document.createElement("link").relList;
    if (i && i.supports && i.supports("modulepreload")) return;
    for (const f of document.querySelectorAll('link[rel="modulepreload"]'))
        a(f);
    new MutationObserver((f) => {
        for (const d of f)
            if (d.type === "childList")
                for (const m of d.addedNodes)
                    m.tagName === "LINK" && m.rel === "modulepreload" && a(m);
    }).observe(document, { childList: !0, subtree: !0 });
    function s(f) {
        const d = {};
        return (
            f.integrity && (d.integrity = f.integrity),
            f.referrerPolicy && (d.referrerPolicy = f.referrerPolicy),
            f.crossOrigin === "use-credentials"
                ? (d.credentials = "include")
                : f.crossOrigin === "anonymous"
                ? (d.credentials = "omit")
                : (d.credentials = "same-origin"),
            d
        );
    }
    function a(f) {
        if (f.ep) return;
        f.ep = !0;
        const d = s(f);
        fetch(f.href, d);
    }
})();
function ff(o) {
    return o &&
        o.__esModule &&
        Object.prototype.hasOwnProperty.call(o, "default")
        ? o.default
        : o;
}
var ds = { exports: {} },
    Ur = {},
    ps = { exports: {} },
    re = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ac;
function Xp() {
    if (Ac) return re;
    Ac = 1;
    var o = Symbol.for("react.element"),
        i = Symbol.for("react.portal"),
        s = Symbol.for("react.fragment"),
        a = Symbol.for("react.strict_mode"),
        f = Symbol.for("react.profiler"),
        d = Symbol.for("react.provider"),
        m = Symbol.for("react.context"),
        w = Symbol.for("react.forward_ref"),
        p = Symbol.for("react.suspense"),
        h = Symbol.for("react.memo"),
        y = Symbol.for("react.lazy"),
        S = Symbol.iterator;
    function P(C) {
        return C === null || typeof C != "object"
            ? null
            : ((C = (S && C[S]) || C["@@iterator"]),
              typeof C == "function" ? C : null);
    }
    var D = {
            isMounted: function () {
                return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
        },
        _ = Object.assign,
        O = {};
    function N(C, L, te) {
        (this.props = C),
            (this.context = L),
            (this.refs = O),
            (this.updater = te || D);
    }
    (N.prototype.isReactComponent = {}),
        (N.prototype.setState = function (C, L) {
            if (typeof C != "object" && typeof C != "function" && C != null)
                throw Error(
                    "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
                );
            this.updater.enqueueSetState(this, C, L, "setState");
        }),
        (N.prototype.forceUpdate = function (C) {
            this.updater.enqueueForceUpdate(this, C, "forceUpdate");
        });
    function X() {}
    X.prototype = N.prototype;
    function Q(C, L, te) {
        (this.props = C),
            (this.context = L),
            (this.refs = O),
            (this.updater = te || D);
    }
    var U = (Q.prototype = new X());
    (U.constructor = Q), _(U, N.prototype), (U.isPureReactComponent = !0);
    var Y = Array.isArray,
        ee = Object.prototype.hasOwnProperty,
        le = { current: null },
        Z = { key: !0, ref: !0, __self: !0, __source: !0 };
    function ce(C, L, te) {
        var ne,
            se = {},
            ue = null,
            he = null;
        if (L != null)
            for (ne in (L.ref !== void 0 && (he = L.ref),
            L.key !== void 0 && (ue = "" + L.key),
            L))
                ee.call(L, ne) && !Z.hasOwnProperty(ne) && (se[ne] = L[ne]);
        var fe = arguments.length - 2;
        if (fe === 1) se.children = te;
        else if (1 < fe) {
            for (var ve = Array(fe), it = 0; it < fe; it++)
                ve[it] = arguments[it + 2];
            se.children = ve;
        }
        if (C && C.defaultProps)
            for (ne in ((fe = C.defaultProps), fe))
                se[ne] === void 0 && (se[ne] = fe[ne]);
        return {
            $$typeof: o,
            type: C,
            key: ue,
            ref: he,
            props: se,
            _owner: le.current,
        };
    }
    function _e(C, L) {
        return {
            $$typeof: o,
            type: C.type,
            key: L,
            ref: C.ref,
            props: C.props,
            _owner: C._owner,
        };
    }
    function Ge(C) {
        return typeof C == "object" && C !== null && C.$$typeof === o;
    }
    function Ce(C) {
        var L = { "=": "=0", ":": "=2" };
        return (
            "$" +
            C.replace(/[=:]/g, function (te) {
                return L[te];
            })
        );
    }
    var Xe = /\/+/g;
    function ke(C, L) {
        return typeof C == "object" && C !== null && C.key != null
            ? Ce("" + C.key)
            : L.toString(36);
    }
    function Re(C, L, te, ne, se) {
        var ue = typeof C;
        (ue === "undefined" || ue === "boolean") && (C = null);
        var he = !1;
        if (C === null) he = !0;
        else
            switch (ue) {
                case "string":
                case "number":
                    he = !0;
                    break;
                case "object":
                    switch (C.$$typeof) {
                        case o:
                        case i:
                            he = !0;
                    }
            }
        if (he)
            return (
                (he = C),
                (se = se(he)),
                (C = ne === "" ? "." + ke(he, 0) : ne),
                Y(se)
                    ? ((te = ""),
                      C != null && (te = C.replace(Xe, "$&/") + "/"),
                      Re(se, L, te, "", function (it) {
                          return it;
                      }))
                    : se != null &&
                      (Ge(se) &&
                          (se = _e(
                              se,
                              te +
                                  (!se.key || (he && he.key === se.key)
                                      ? ""
                                      : ("" + se.key).replace(Xe, "$&/") +
                                        "/") +
                                  C,
                          )),
                      L.push(se)),
                1
            );
        if (((he = 0), (ne = ne === "" ? "." : ne + ":"), Y(C)))
            for (var fe = 0; fe < C.length; fe++) {
                ue = C[fe];
                var ve = ne + ke(ue, fe);
                he += Re(ue, L, te, ve, se);
            }
        else if (((ve = P(C)), typeof ve == "function"))
            for (C = ve.call(C), fe = 0; !(ue = C.next()).done; )
                (ue = ue.value),
                    (ve = ne + ke(ue, fe++)),
                    (he += Re(ue, L, te, ve, se));
        else if (ue === "object")
            throw (
                ((L = String(C)),
                Error(
                    "Objects are not valid as a React child (found: " +
                        (L === "[object Object]"
                            ? "object with keys {" +
                              Object.keys(C).join(", ") +
                              "}"
                            : L) +
                        "). If you meant to render a collection of children, use an array instead.",
                ))
            );
        return he;
    }
    function Oe(C, L, te) {
        if (C == null) return C;
        var ne = [],
            se = 0;
        return (
            Re(C, ne, "", "", function (ue) {
                return L.call(te, ue, se++);
            }),
            ne
        );
    }
    function Be(C) {
        if (C._status === -1) {
            var L = C._result;
            (L = L()),
                L.then(
                    function (te) {
                        (C._status === 0 || C._status === -1) &&
                            ((C._status = 1), (C._result = te));
                    },
                    function (te) {
                        (C._status === 0 || C._status === -1) &&
                            ((C._status = 2), (C._result = te));
                    },
                ),
                C._status === -1 && ((C._status = 0), (C._result = L));
        }
        if (C._status === 1) return C._result.default;
        throw C._result;
    }
    var pe = { current: null },
        I = { transition: null },
        K = {
            ReactCurrentDispatcher: pe,
            ReactCurrentBatchConfig: I,
            ReactCurrentOwner: le,
        };
    function B() {
        throw Error("act(...) is not supported in production builds of React.");
    }
    return (
        (re.Children = {
            map: Oe,
            forEach: function (C, L, te) {
                Oe(
                    C,
                    function () {
                        L.apply(this, arguments);
                    },
                    te,
                );
            },
            count: function (C) {
                var L = 0;
                return (
                    Oe(C, function () {
                        L++;
                    }),
                    L
                );
            },
            toArray: function (C) {
                return (
                    Oe(C, function (L) {
                        return L;
                    }) || []
                );
            },
            only: function (C) {
                if (!Ge(C))
                    throw Error(
                        "React.Children.only expected to receive a single React element child.",
                    );
                return C;
            },
        }),
        (re.Component = N),
        (re.Fragment = s),
        (re.Profiler = f),
        (re.PureComponent = Q),
        (re.StrictMode = a),
        (re.Suspense = p),
        (re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = K),
        (re.act = B),
        (re.cloneElement = function (C, L, te) {
            if (C == null)
                throw Error(
                    "React.cloneElement(...): The argument must be a React element, but you passed " +
                        C +
                        ".",
                );
            var ne = _({}, C.props),
                se = C.key,
                ue = C.ref,
                he = C._owner;
            if (L != null) {
                if (
                    (L.ref !== void 0 && ((ue = L.ref), (he = le.current)),
                    L.key !== void 0 && (se = "" + L.key),
                    C.type && C.type.defaultProps)
                )
                    var fe = C.type.defaultProps;
                for (ve in L)
                    ee.call(L, ve) &&
                        !Z.hasOwnProperty(ve) &&
                        (ne[ve] =
                            L[ve] === void 0 && fe !== void 0 ? fe[ve] : L[ve]);
            }
            var ve = arguments.length - 2;
            if (ve === 1) ne.children = te;
            else if (1 < ve) {
                fe = Array(ve);
                for (var it = 0; it < ve; it++) fe[it] = arguments[it + 2];
                ne.children = fe;
            }
            return {
                $$typeof: o,
                type: C.type,
                key: se,
                ref: ue,
                props: ne,
                _owner: he,
            };
        }),
        (re.createContext = function (C) {
            return (
                (C = {
                    $$typeof: m,
                    _currentValue: C,
                    _currentValue2: C,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null,
                    _defaultValue: null,
                    _globalName: null,
                }),
                (C.Provider = { $$typeof: d, _context: C }),
                (C.Consumer = C)
            );
        }),
        (re.createElement = ce),
        (re.createFactory = function (C) {
            var L = ce.bind(null, C);
            return (L.type = C), L;
        }),
        (re.createRef = function () {
            return { current: null };
        }),
        (re.forwardRef = function (C) {
            return { $$typeof: w, render: C };
        }),
        (re.isValidElement = Ge),
        (re.lazy = function (C) {
            return {
                $$typeof: y,
                _payload: { _status: -1, _result: C },
                _init: Be,
            };
        }),
        (re.memo = function (C, L) {
            return { $$typeof: h, type: C, compare: L === void 0 ? null : L };
        }),
        (re.startTransition = function (C) {
            var L = I.transition;
            I.transition = {};
            try {
                C();
            } finally {
                I.transition = L;
            }
        }),
        (re.unstable_act = B),
        (re.useCallback = function (C, L) {
            return pe.current.useCallback(C, L);
        }),
        (re.useContext = function (C) {
            return pe.current.useContext(C);
        }),
        (re.useDebugValue = function () {}),
        (re.useDeferredValue = function (C) {
            return pe.current.useDeferredValue(C);
        }),
        (re.useEffect = function (C, L) {
            return pe.current.useEffect(C, L);
        }),
        (re.useId = function () {
            return pe.current.useId();
        }),
        (re.useImperativeHandle = function (C, L, te) {
            return pe.current.useImperativeHandle(C, L, te);
        }),
        (re.useInsertionEffect = function (C, L) {
            return pe.current.useInsertionEffect(C, L);
        }),
        (re.useLayoutEffect = function (C, L) {
            return pe.current.useLayoutEffect(C, L);
        }),
        (re.useMemo = function (C, L) {
            return pe.current.useMemo(C, L);
        }),
        (re.useReducer = function (C, L, te) {
            return pe.current.useReducer(C, L, te);
        }),
        (re.useRef = function (C) {
            return pe.current.useRef(C);
        }),
        (re.useState = function (C) {
            return pe.current.useState(C);
        }),
        (re.useSyncExternalStore = function (C, L, te) {
            return pe.current.useSyncExternalStore(C, L, te);
        }),
        (re.useTransition = function () {
            return pe.current.useTransition();
        }),
        (re.version = "18.3.1"),
        re
    );
}
var Mc;
function Ls() {
    return Mc || ((Mc = 1), (ps.exports = Xp())), ps.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zc;
function Yp() {
    if (zc) return Ur;
    zc = 1;
    var o = Ls(),
        i = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        f =
            o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                .ReactCurrentOwner,
        d = { key: !0, ref: !0, __self: !0, __source: !0 };
    function m(w, p, h) {
        var y,
            S = {},
            P = null,
            D = null;
        h !== void 0 && (P = "" + h),
            p.key !== void 0 && (P = "" + p.key),
            p.ref !== void 0 && (D = p.ref);
        for (y in p) a.call(p, y) && !d.hasOwnProperty(y) && (S[y] = p[y]);
        if (w && w.defaultProps)
            for (y in ((p = w.defaultProps), p))
                S[y] === void 0 && (S[y] = p[y]);
        return {
            $$typeof: i,
            type: w,
            key: P,
            ref: D,
            props: S,
            _owner: f.current,
        };
    }
    return (Ur.Fragment = s), (Ur.jsx = m), (Ur.jsxs = m), Ur;
}
var Dc;
function Jp() {
    return Dc || ((Dc = 1), (ds.exports = Yp())), ds.exports;
}
var Fe = Jp(),
    Br = Ls();
const De = ff(Br);
var tl = {},
    hs = { exports: {} },
    rt = {},
    ms = { exports: {} },
    ys = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fc;
function Zp() {
    return (
        Fc ||
            ((Fc = 1),
            (function (o) {
                function i(I, K) {
                    var B = I.length;
                    I.push(K);
                    e: for (; 0 < B; ) {
                        var C = (B - 1) >>> 1,
                            L = I[C];
                        if (0 < f(L, K)) (I[C] = K), (I[B] = L), (B = C);
                        else break e;
                    }
                }
                function s(I) {
                    return I.length === 0 ? null : I[0];
                }
                function a(I) {
                    if (I.length === 0) return null;
                    var K = I[0],
                        B = I.pop();
                    if (B !== K) {
                        I[0] = B;
                        e: for (
                            var C = 0, L = I.length, te = L >>> 1;
                            C < te;

                        ) {
                            var ne = 2 * (C + 1) - 1,
                                se = I[ne],
                                ue = ne + 1,
                                he = I[ue];
                            if (0 > f(se, B))
                                ue < L && 0 > f(he, se)
                                    ? ((I[C] = he), (I[ue] = B), (C = ue))
                                    : ((I[C] = se), (I[ne] = B), (C = ne));
                            else if (ue < L && 0 > f(he, B))
                                (I[C] = he), (I[ue] = B), (C = ue);
                            else break e;
                        }
                    }
                    return K;
                }
                function f(I, K) {
                    var B = I.sortIndex - K.sortIndex;
                    return B !== 0 ? B : I.id - K.id;
                }
                if (
                    typeof performance == "object" &&
                    typeof performance.now == "function"
                ) {
                    var d = performance;
                    o.unstable_now = function () {
                        return d.now();
                    };
                } else {
                    var m = Date,
                        w = m.now();
                    o.unstable_now = function () {
                        return m.now() - w;
                    };
                }
                var p = [],
                    h = [],
                    y = 1,
                    S = null,
                    P = 3,
                    D = !1,
                    _ = !1,
                    O = !1,
                    N = typeof setTimeout == "function" ? setTimeout : null,
                    X = typeof clearTimeout == "function" ? clearTimeout : null,
                    Q = typeof setImmediate < "u" ? setImmediate : null;
                typeof navigator < "u" &&
                    navigator.scheduling !== void 0 &&
                    navigator.scheduling.isInputPending !== void 0 &&
                    navigator.scheduling.isInputPending.bind(
                        navigator.scheduling,
                    );
                function U(I) {
                    for (var K = s(h); K !== null; ) {
                        if (K.callback === null) a(h);
                        else if (K.startTime <= I)
                            a(h), (K.sortIndex = K.expirationTime), i(p, K);
                        else break;
                        K = s(h);
                    }
                }
                function Y(I) {
                    if (((O = !1), U(I), !_))
                        if (s(p) !== null) (_ = !0), Be(ee);
                        else {
                            var K = s(h);
                            K !== null && pe(Y, K.startTime - I);
                        }
                }
                function ee(I, K) {
                    (_ = !1), O && ((O = !1), X(ce), (ce = -1)), (D = !0);
                    var B = P;
                    try {
                        for (
                            U(K), S = s(p);
                            S !== null &&
                            (!(S.expirationTime > K) || (I && !Ce()));

                        ) {
                            var C = S.callback;
                            if (typeof C == "function") {
                                (S.callback = null), (P = S.priorityLevel);
                                var L = C(S.expirationTime <= K);
                                (K = o.unstable_now()),
                                    typeof L == "function"
                                        ? (S.callback = L)
                                        : S === s(p) && a(p),
                                    U(K);
                            } else a(p);
                            S = s(p);
                        }
                        if (S !== null) var te = !0;
                        else {
                            var ne = s(h);
                            ne !== null && pe(Y, ne.startTime - K), (te = !1);
                        }
                        return te;
                    } finally {
                        (S = null), (P = B), (D = !1);
                    }
                }
                var le = !1,
                    Z = null,
                    ce = -1,
                    _e = 5,
                    Ge = -1;
                function Ce() {
                    return !(o.unstable_now() - Ge < _e);
                }
                function Xe() {
                    if (Z !== null) {
                        var I = o.unstable_now();
                        Ge = I;
                        var K = !0;
                        try {
                            K = Z(!0, I);
                        } finally {
                            K ? ke() : ((le = !1), (Z = null));
                        }
                    } else le = !1;
                }
                var ke;
                if (typeof Q == "function")
                    ke = function () {
                        Q(Xe);
                    };
                else if (typeof MessageChannel < "u") {
                    var Re = new MessageChannel(),
                        Oe = Re.port2;
                    (Re.port1.onmessage = Xe),
                        (ke = function () {
                            Oe.postMessage(null);
                        });
                } else
                    ke = function () {
                        N(Xe, 0);
                    };
                function Be(I) {
                    (Z = I), le || ((le = !0), ke());
                }
                function pe(I, K) {
                    ce = N(function () {
                        I(o.unstable_now());
                    }, K);
                }
                (o.unstable_IdlePriority = 5),
                    (o.unstable_ImmediatePriority = 1),
                    (o.unstable_LowPriority = 4),
                    (o.unstable_NormalPriority = 3),
                    (o.unstable_Profiling = null),
                    (o.unstable_UserBlockingPriority = 2),
                    (o.unstable_cancelCallback = function (I) {
                        I.callback = null;
                    }),
                    (o.unstable_continueExecution = function () {
                        _ || D || ((_ = !0), Be(ee));
                    }),
                    (o.unstable_forceFrameRate = function (I) {
                        0 > I || 125 < I
                            ? console.error(
                                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                              )
                            : (_e = 0 < I ? Math.floor(1e3 / I) : 5);
                    }),
                    (o.unstable_getCurrentPriorityLevel = function () {
                        return P;
                    }),
                    (o.unstable_getFirstCallbackNode = function () {
                        return s(p);
                    }),
                    (o.unstable_next = function (I) {
                        switch (P) {
                            case 1:
                            case 2:
                            case 3:
                                var K = 3;
                                break;
                            default:
                                K = P;
                        }
                        var B = P;
                        P = K;
                        try {
                            return I();
                        } finally {
                            P = B;
                        }
                    }),
                    (o.unstable_pauseExecution = function () {}),
                    (o.unstable_requestPaint = function () {}),
                    (o.unstable_runWithPriority = function (I, K) {
                        switch (I) {
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                                break;
                            default:
                                I = 3;
                        }
                        var B = P;
                        P = I;
                        try {
                            return K();
                        } finally {
                            P = B;
                        }
                    }),
                    (o.unstable_scheduleCallback = function (I, K, B) {
                        var C = o.unstable_now();
                        switch (
                            (typeof B == "object" && B !== null
                                ? ((B = B.delay),
                                  (B =
                                      typeof B == "number" && 0 < B
                                          ? C + B
                                          : C))
                                : (B = C),
                            I)
                        ) {
                            case 1:
                                var L = -1;
                                break;
                            case 2:
                                L = 250;
                                break;
                            case 5:
                                L = 1073741823;
                                break;
                            case 4:
                                L = 1e4;
                                break;
                            default:
                                L = 5e3;
                        }
                        return (
                            (L = B + L),
                            (I = {
                                id: y++,
                                callback: K,
                                priorityLevel: I,
                                startTime: B,
                                expirationTime: L,
                                sortIndex: -1,
                            }),
                            B > C
                                ? ((I.sortIndex = B),
                                  i(h, I),
                                  s(p) === null &&
                                      I === s(h) &&
                                      (O ? (X(ce), (ce = -1)) : (O = !0),
                                      pe(Y, B - C)))
                                : ((I.sortIndex = L),
                                  i(p, I),
                                  _ || D || ((_ = !0), Be(ee))),
                            I
                        );
                    }),
                    (o.unstable_shouldYield = Ce),
                    (o.unstable_wrapCallback = function (I) {
                        var K = P;
                        return function () {
                            var B = P;
                            P = K;
                            try {
                                return I.apply(this, arguments);
                            } finally {
                                P = B;
                            }
                        };
                    });
            })(ys)),
        ys
    );
}
var Ic;
function bp() {
    return Ic || ((Ic = 1), (ms.exports = Zp())), ms.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Uc;
function eh() {
    if (Uc) return rt;
    Uc = 1;
    var o = Ls(),
        i = bp();
    function s(e) {
        for (
            var t =
                    "https://reactjs.org/docs/error-decoder.html?invariant=" +
                    e,
                n = 1;
            n < arguments.length;
            n++
        )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
        return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        );
    }
    var a = new Set(),
        f = {};
    function d(e, t) {
        m(e, t), m(e + "Capture", t);
    }
    function m(e, t) {
        for (f[e] = t, e = 0; e < t.length; e++) a.add(t[e]);
    }
    var w = !(
            typeof window > "u" ||
            typeof window.document > "u" ||
            typeof window.document.createElement > "u"
        ),
        p = Object.prototype.hasOwnProperty,
        h =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        y = {},
        S = {};
    function P(e) {
        return p.call(S, e)
            ? !0
            : p.call(y, e)
            ? !1
            : h.test(e)
            ? (S[e] = !0)
            : ((y[e] = !0), !1);
    }
    function D(e, t, n, r) {
        if (n !== null && n.type === 0) return !1;
        switch (typeof t) {
            case "function":
            case "symbol":
                return !0;
            case "boolean":
                return r
                    ? !1
                    : n !== null
                    ? !n.acceptsBooleans
                    : ((e = e.toLowerCase().slice(0, 5)),
                      e !== "data-" && e !== "aria-");
            default:
                return !1;
        }
    }
    function _(e, t, n, r) {
        if (t === null || typeof t > "u" || D(e, t, n, r)) return !0;
        if (r) return !1;
        if (n !== null)
            switch (n.type) {
                case 3:
                    return !t;
                case 4:
                    return t === !1;
                case 5:
                    return isNaN(t);
                case 6:
                    return isNaN(t) || 1 > t;
            }
        return !1;
    }
    function O(e, t, n, r, l, u, c) {
        (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
            (this.attributeName = r),
            (this.attributeNamespace = l),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = u),
            (this.removeEmptyString = c);
    }
    var N = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
        .split(" ")
        .forEach(function (e) {
            N[e] = new O(e, 0, !1, e, null, !1, !1);
        }),
        [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
        ].forEach(function (e) {
            var t = e[0];
            N[t] = new O(t, 1, !1, e[1], null, !1, !1);
        }),
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
                N[e] = new O(e, 2, !1, e.toLowerCase(), null, !1, !1);
            },
        ),
        [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
        ].forEach(function (e) {
            N[e] = new O(e, 2, !1, e, null, !1, !1);
        }),
        "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
                N[e] = new O(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
        ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            N[e] = new O(e, 3, !0, e, null, !1, !1);
        }),
        ["capture", "download"].forEach(function (e) {
            N[e] = new O(e, 4, !1, e, null, !1, !1);
        }),
        ["cols", "rows", "size", "span"].forEach(function (e) {
            N[e] = new O(e, 6, !1, e, null, !1, !1);
        }),
        ["rowSpan", "start"].forEach(function (e) {
            N[e] = new O(e, 5, !1, e.toLowerCase(), null, !1, !1);
        });
    var X = /[\-:]([a-z])/g;
    function Q(e) {
        return e[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
        .split(" ")
        .forEach(function (e) {
            var t = e.replace(X, Q);
            N[t] = new O(t, 1, !1, e, null, !1, !1);
        }),
        "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
                var t = e.replace(X, Q);
                N[t] = new O(
                    t,
                    1,
                    !1,
                    e,
                    "http://www.w3.org/1999/xlink",
                    !1,
                    !1,
                );
            }),
        ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(X, Q);
            N[t] = new O(
                t,
                1,
                !1,
                e,
                "http://www.w3.org/XML/1998/namespace",
                !1,
                !1,
            );
        }),
        ["tabIndex", "crossOrigin"].forEach(function (e) {
            N[e] = new O(e, 1, !1, e.toLowerCase(), null, !1, !1);
        }),
        (N.xlinkHref = new O(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1,
        )),
        ["src", "href", "action", "formAction"].forEach(function (e) {
            N[e] = new O(e, 1, !1, e.toLowerCase(), null, !0, !0);
        });
    function U(e, t, n, r) {
        var l = N.hasOwnProperty(t) ? N[t] : null;
        (l !== null
            ? l.type !== 0
            : r ||
              !(2 < t.length) ||
              (t[0] !== "o" && t[0] !== "O") ||
              (t[1] !== "n" && t[1] !== "N")) &&
            (_(t, n, l, r) && (n = null),
            r || l === null
                ? P(t) &&
                  (n === null
                      ? e.removeAttribute(t)
                      : e.setAttribute(t, "" + n))
                : l.mustUseProperty
                ? (e[l.propertyName] =
                      n === null ? (l.type === 3 ? !1 : "") : n)
                : ((t = l.attributeName),
                  (r = l.attributeNamespace),
                  n === null
                      ? e.removeAttribute(t)
                      : ((l = l.type),
                        (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
                        r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
    }
    var Y = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        ee = Symbol.for("react.element"),
        le = Symbol.for("react.portal"),
        Z = Symbol.for("react.fragment"),
        ce = Symbol.for("react.strict_mode"),
        _e = Symbol.for("react.profiler"),
        Ge = Symbol.for("react.provider"),
        Ce = Symbol.for("react.context"),
        Xe = Symbol.for("react.forward_ref"),
        ke = Symbol.for("react.suspense"),
        Re = Symbol.for("react.suspense_list"),
        Oe = Symbol.for("react.memo"),
        Be = Symbol.for("react.lazy"),
        pe = Symbol.for("react.offscreen"),
        I = Symbol.iterator;
    function K(e) {
        return e === null || typeof e != "object"
            ? null
            : ((e = (I && e[I]) || e["@@iterator"]),
              typeof e == "function" ? e : null);
    }
    var B = Object.assign,
        C;
    function L(e) {
        if (C === void 0)
            try {
                throw Error();
            } catch (n) {
                var t = n.stack.trim().match(/\n( *(at )?)/);
                C = (t && t[1]) || "";
            }
        return (
            `
` +
            C +
            e
        );
    }
    var te = !1;
    function ne(e, t) {
        if (!e || te) return "";
        te = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (t)
                if (
                    ((t = function () {
                        throw Error();
                    }),
                    Object.defineProperty(t.prototype, "props", {
                        set: function () {
                            throw Error();
                        },
                    }),
                    typeof Reflect == "object" && Reflect.construct)
                ) {
                    try {
                        Reflect.construct(t, []);
                    } catch (x) {
                        var r = x;
                    }
                    Reflect.construct(e, [], t);
                } else {
                    try {
                        t.call();
                    } catch (x) {
                        r = x;
                    }
                    e.call(t.prototype);
                }
            else {
                try {
                    throw Error();
                } catch (x) {
                    r = x;
                }
                e();
            }
        } catch (x) {
            if (x && r && typeof x.stack == "string") {
                for (
                    var l = x.stack.split(`
`),
                        u = r.stack.split(`
`),
                        c = l.length - 1,
                        g = u.length - 1;
                    1 <= c && 0 <= g && l[c] !== u[g];

                )
                    g--;
                for (; 1 <= c && 0 <= g; c--, g--)
                    if (l[c] !== u[g]) {
                        if (c !== 1 || g !== 1)
                            do
                                if ((c--, g--, 0 > g || l[c] !== u[g])) {
                                    var v =
                                        `
` + l[c].replace(" at new ", " at ");
                                    return (
                                        e.displayName &&
                                            v.includes("<anonymous>") &&
                                            (v = v.replace(
                                                "<anonymous>",
                                                e.displayName,
                                            )),
                                        v
                                    );
                                }
                            while (1 <= c && 0 <= g);
                        break;
                    }
            }
        } finally {
            (te = !1), (Error.prepareStackTrace = n);
        }
        return (e = e ? e.displayName || e.name : "") ? L(e) : "";
    }
    function se(e) {
        switch (e.tag) {
            case 5:
                return L(e.type);
            case 16:
                return L("Lazy");
            case 13:
                return L("Suspense");
            case 19:
                return L("SuspenseList");
            case 0:
            case 2:
            case 15:
                return (e = ne(e.type, !1)), e;
            case 11:
                return (e = ne(e.type.render, !1)), e;
            case 1:
                return (e = ne(e.type, !0)), e;
            default:
                return "";
        }
    }
    function ue(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
            case Z:
                return "Fragment";
            case le:
                return "Portal";
            case _e:
                return "Profiler";
            case ce:
                return "StrictMode";
            case ke:
                return "Suspense";
            case Re:
                return "SuspenseList";
        }
        if (typeof e == "object")
            switch (e.$$typeof) {
                case Ce:
                    return (e.displayName || "Context") + ".Consumer";
                case Ge:
                    return (e._context.displayName || "Context") + ".Provider";
                case Xe:
                    var t = e.render;
                    return (
                        (e = e.displayName),
                        e ||
                            ((e = t.displayName || t.name || ""),
                            (e =
                                e !== ""
                                    ? "ForwardRef(" + e + ")"
                                    : "ForwardRef")),
                        e
                    );
                case Oe:
                    return (
                        (t = e.displayName || null),
                        t !== null ? t : ue(e.type) || "Memo"
                    );
                case Be:
                    (t = e._payload), (e = e._init);
                    try {
                        return ue(e(t));
                    } catch {}
            }
        return null;
    }
    function he(e) {
        var t = e.type;
        switch (e.tag) {
            case 24:
                return "Cache";
            case 9:
                return (t.displayName || "Context") + ".Consumer";
            case 10:
                return (t._context.displayName || "Context") + ".Provider";
            case 18:
                return "DehydratedFragment";
            case 11:
                return (
                    (e = t.render),
                    (e = e.displayName || e.name || ""),
                    t.displayName ||
                        (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
                );
            case 7:
                return "Fragment";
            case 5:
                return t;
            case 4:
                return "Portal";
            case 3:
                return "Root";
            case 6:
                return "Text";
            case 16:
                return ue(t);
            case 8:
                return t === ce ? "StrictMode" : "Mode";
            case 22:
                return "Offscreen";
            case 12:
                return "Profiler";
            case 21:
                return "Scope";
            case 13:
                return "Suspense";
            case 19:
                return "SuspenseList";
            case 25:
                return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
                if (typeof t == "function")
                    return t.displayName || t.name || null;
                if (typeof t == "string") return t;
        }
        return null;
    }
    function fe(e) {
        switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return e;
            case "object":
                return e;
            default:
                return "";
        }
    }
    function ve(e) {
        var t = e.type;
        return (
            (e = e.nodeName) &&
            e.toLowerCase() === "input" &&
            (t === "checkbox" || t === "radio")
        );
    }
    function it(e) {
        var t = ve(e) ? "checked" : "value",
            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            r = "" + e[t];
        if (
            !e.hasOwnProperty(t) &&
            typeof n < "u" &&
            typeof n.get == "function" &&
            typeof n.set == "function"
        ) {
            var l = n.get,
                u = n.set;
            return (
                Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                        return l.call(this);
                    },
                    set: function (c) {
                        (r = "" + c), u.call(this, c);
                    },
                }),
                Object.defineProperty(e, t, { enumerable: n.enumerable }),
                {
                    getValue: function () {
                        return r;
                    },
                    setValue: function (c) {
                        r = "" + c;
                    },
                    stopTracking: function () {
                        (e._valueTracker = null), delete e[t];
                    },
                }
            );
        }
    }
    function Wr(e) {
        e._valueTracker || (e._valueTracker = it(e));
    }
    function Us(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(),
            r = "";
        return (
            e && (r = ve(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r),
            e !== n ? (t.setValue(e), !0) : !1
        );
    }
    function Qr(e) {
        if (
            ((e = e || (typeof document < "u" ? document : void 0)),
            typeof e > "u")
        )
            return null;
        try {
            return e.activeElement || e.body;
        } catch {
            return e.body;
        }
    }
    function wl(e, t) {
        var n = t.checked;
        return B({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: n ?? e._wrapperState.initialChecked,
        });
    }
    function js(e, t) {
        var n = t.defaultValue == null ? "" : t.defaultValue,
            r = t.checked != null ? t.checked : t.defaultChecked;
        (n = fe(t.value != null ? t.value : n)),
            (e._wrapperState = {
                initialChecked: r,
                initialValue: n,
                controlled:
                    t.type === "checkbox" || t.type === "radio"
                        ? t.checked != null
                        : t.value != null,
            });
    }
    function Bs(e, t) {
        (t = t.checked), t != null && U(e, "checked", t, !1);
    }
    function Sl(e, t) {
        Bs(e, t);
        var n = fe(t.value),
            r = t.type;
        if (n != null)
            r === "number"
                ? ((n === 0 && e.value === "") || e.value != n) &&
                  (e.value = "" + n)
                : e.value !== "" + n && (e.value = "" + n);
        else if (r === "submit" || r === "reset") {
            e.removeAttribute("value");
            return;
        }
        t.hasOwnProperty("value")
            ? El(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              El(e, t.type, fe(t.defaultValue)),
            t.checked == null &&
                t.defaultChecked != null &&
                (e.defaultChecked = !!t.defaultChecked);
    }
    function Hs(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
                !(
                    (r !== "submit" && r !== "reset") ||
                    (t.value !== void 0 && t.value !== null)
                )
            )
                return;
            (t = "" + e._wrapperState.initialValue),
                n || t === e.value || (e.value = t),
                (e.defaultValue = t);
        }
        (n = e.name),
            n !== "" && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            n !== "" && (e.name = n);
    }
    function El(e, t, n) {
        (t !== "number" || Qr(e.ownerDocument) !== e) &&
            (n == null
                ? (e.defaultValue = "" + e._wrapperState.initialValue)
                : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
    }
    var bn = Array.isArray;
    function xn(e, t, n, r) {
        if (((e = e.options), t)) {
            t = {};
            for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
            for (n = 0; n < e.length; n++)
                (l = t.hasOwnProperty("$" + e[n].value)),
                    e[n].selected !== l && (e[n].selected = l),
                    l && r && (e[n].defaultSelected = !0);
        } else {
            for (n = "" + fe(n), t = null, l = 0; l < e.length; l++) {
                if (e[l].value === n) {
                    (e[l].selected = !0), r && (e[l].defaultSelected = !0);
                    return;
                }
                t !== null || e[l].disabled || (t = e[l]);
            }
            t !== null && (t.selected = !0);
        }
    }
    function Cl(e, t) {
        if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
        return B({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
        });
    }
    function $s(e, t) {
        var n = t.value;
        if (n == null) {
            if (((n = t.children), (t = t.defaultValue), n != null)) {
                if (t != null) throw Error(s(92));
                if (bn(n)) {
                    if (1 < n.length) throw Error(s(93));
                    n = n[0];
                }
                t = n;
            }
            t == null && (t = ""), (n = t);
        }
        e._wrapperState = { initialValue: fe(n) };
    }
    function Vs(e, t) {
        var n = fe(t.value),
            r = fe(t.defaultValue);
        n != null &&
            ((n = "" + n),
            n !== e.value && (e.value = n),
            t.defaultValue == null &&
                e.defaultValue !== n &&
                (e.defaultValue = n)),
            r != null && (e.defaultValue = "" + r);
    }
    function Ws(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue &&
            t !== "" &&
            t !== null &&
            (e.value = t);
    }
    function Qs(e) {
        switch (e) {
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml";
        }
    }
    function kl(e, t) {
        return e == null || e === "http://www.w3.org/1999/xhtml"
            ? Qs(t)
            : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
            ? "http://www.w3.org/1999/xhtml"
            : e;
    }
    var Kr,
        Ks = (function (e) {
            return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
                ? function (t, n, r, l) {
                      MSApp.execUnsafeLocalFunction(function () {
                          return e(t, n, r, l);
                      });
                  }
                : e;
        })(function (e, t) {
            if (
                e.namespaceURI !== "http://www.w3.org/2000/svg" ||
                "innerHTML" in e
            )
                e.innerHTML = t;
            else {
                for (
                    Kr = Kr || document.createElement("div"),
                        Kr.innerHTML =
                            "<svg>" + t.valueOf().toString() + "</svg>",
                        t = Kr.firstChild;
                    e.firstChild;

                )
                    e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
            }
        });
    function er(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && n.nodeType === 3) {
                n.nodeValue = t;
                return;
            }
        }
        e.textContent = t;
    }
    var tr = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
        },
        ed = ["Webkit", "ms", "Moz", "O"];
    Object.keys(tr).forEach(function (e) {
        ed.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
                (tr[t] = tr[e]);
        });
    });
    function qs(e, t, n) {
        return t == null || typeof t == "boolean" || t === ""
            ? ""
            : n ||
              typeof t != "number" ||
              t === 0 ||
              (tr.hasOwnProperty(e) && tr[e])
            ? ("" + t).trim()
            : t + "px";
    }
    function Gs(e, t) {
        e = e.style;
        for (var n in t)
            if (t.hasOwnProperty(n)) {
                var r = n.indexOf("--") === 0,
                    l = qs(n, t[n], r);
                n === "float" && (n = "cssFloat"),
                    r ? e.setProperty(n, l) : (e[n] = l);
            }
    }
    var td = B(
        { menuitem: !0 },
        {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
        },
    );
    function Rl(e, t) {
        if (t) {
            if (
                td[e] &&
                (t.children != null || t.dangerouslySetInnerHTML != null)
            )
                throw Error(s(137, e));
            if (t.dangerouslySetInnerHTML != null) {
                if (t.children != null) throw Error(s(60));
                if (
                    typeof t.dangerouslySetInnerHTML != "object" ||
                    !("__html" in t.dangerouslySetInnerHTML)
                )
                    throw Error(s(61));
            }
            if (t.style != null && typeof t.style != "object")
                throw Error(s(62));
        }
    }
    function xl(e, t) {
        if (e.indexOf("-") === -1) return typeof t.is == "string";
        switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0;
        }
    }
    var Pl = null;
    function _l(e) {
        return (
            (e = e.target || e.srcElement || window),
            e.correspondingUseElement && (e = e.correspondingUseElement),
            e.nodeType === 3 ? e.parentNode : e
        );
    }
    var Tl = null,
        Pn = null,
        _n = null;
    function Xs(e) {
        if ((e = kr(e))) {
            if (typeof Tl != "function") throw Error(s(280));
            var t = e.stateNode;
            t && ((t = yo(t)), Tl(e.stateNode, e.type, t));
        }
    }
    function Ys(e) {
        Pn ? (_n ? _n.push(e) : (_n = [e])) : (Pn = e);
    }
    function Js() {
        if (Pn) {
            var e = Pn,
                t = _n;
            if (((_n = Pn = null), Xs(e), t))
                for (e = 0; e < t.length; e++) Xs(t[e]);
        }
    }
    function Zs(e, t) {
        return e(t);
    }
    function bs() {}
    var Nl = !1;
    function eu(e, t, n) {
        if (Nl) return e(t, n);
        Nl = !0;
        try {
            return Zs(e, t, n);
        } finally {
            (Nl = !1), (Pn !== null || _n !== null) && (bs(), Js());
        }
    }
    function nr(e, t) {
        var n = e.stateNode;
        if (n === null) return null;
        var r = yo(n);
        if (r === null) return null;
        n = r[t];
        e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (r = !r.disabled) ||
                    ((e = e.type),
                    (r = !(
                        e === "button" ||
                        e === "input" ||
                        e === "select" ||
                        e === "textarea"
                    ))),
                    (e = !r);
                break e;
            default:
                e = !1;
        }
        if (e) return null;
        if (n && typeof n != "function") throw Error(s(231, t, typeof n));
        return n;
    }
    var Ol = !1;
    if (w)
        try {
            var rr = {};
            Object.defineProperty(rr, "passive", {
                get: function () {
                    Ol = !0;
                },
            }),
                window.addEventListener("test", rr, rr),
                window.removeEventListener("test", rr, rr);
        } catch {
            Ol = !1;
        }
    function nd(e, t, n, r, l, u, c, g, v) {
        var x = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(n, x);
        } catch (M) {
            this.onError(M);
        }
    }
    var or = !1,
        qr = null,
        Gr = !1,
        Ll = null,
        rd = {
            onError: function (e) {
                (or = !0), (qr = e);
            },
        };
    function od(e, t, n, r, l, u, c, g, v) {
        (or = !1), (qr = null), nd.apply(rd, arguments);
    }
    function ld(e, t, n, r, l, u, c, g, v) {
        if ((od.apply(this, arguments), or)) {
            if (or) {
                var x = qr;
                (or = !1), (qr = null);
            } else throw Error(s(198));
            Gr || ((Gr = !0), (Ll = x));
        }
    }
    function un(e) {
        var t = e,
            n = e;
        if (e.alternate) for (; t.return; ) t = t.return;
        else {
            e = t;
            do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
            while (e);
        }
        return t.tag === 3 ? n : null;
    }
    function tu(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (
                (t === null &&
                    ((e = e.alternate), e !== null && (t = e.memoizedState)),
                t !== null)
            )
                return t.dehydrated;
        }
        return null;
    }
    function nu(e) {
        if (un(e) !== e) throw Error(s(188));
    }
    function id(e) {
        var t = e.alternate;
        if (!t) {
            if (((t = un(e)), t === null)) throw Error(s(188));
            return t !== e ? null : e;
        }
        for (var n = e, r = t; ; ) {
            var l = n.return;
            if (l === null) break;
            var u = l.alternate;
            if (u === null) {
                if (((r = l.return), r !== null)) {
                    n = r;
                    continue;
                }
                break;
            }
            if (l.child === u.child) {
                for (u = l.child; u; ) {
                    if (u === n) return nu(l), e;
                    if (u === r) return nu(l), t;
                    u = u.sibling;
                }
                throw Error(s(188));
            }
            if (n.return !== r.return) (n = l), (r = u);
            else {
                for (var c = !1, g = l.child; g; ) {
                    if (g === n) {
                        (c = !0), (n = l), (r = u);
                        break;
                    }
                    if (g === r) {
                        (c = !0), (r = l), (n = u);
                        break;
                    }
                    g = g.sibling;
                }
                if (!c) {
                    for (g = u.child; g; ) {
                        if (g === n) {
                            (c = !0), (n = u), (r = l);
                            break;
                        }
                        if (g === r) {
                            (c = !0), (r = u), (n = l);
                            break;
                        }
                        g = g.sibling;
                    }
                    if (!c) throw Error(s(189));
                }
            }
            if (n.alternate !== r) throw Error(s(190));
        }
        if (n.tag !== 3) throw Error(s(188));
        return n.stateNode.current === n ? e : t;
    }
    function ru(e) {
        return (e = id(e)), e !== null ? ou(e) : null;
    }
    function ou(e) {
        if (e.tag === 5 || e.tag === 6) return e;
        for (e = e.child; e !== null; ) {
            var t = ou(e);
            if (t !== null) return t;
            e = e.sibling;
        }
        return null;
    }
    var lu = i.unstable_scheduleCallback,
        iu = i.unstable_cancelCallback,
        sd = i.unstable_shouldYield,
        ud = i.unstable_requestPaint,
        Te = i.unstable_now,
        ad = i.unstable_getCurrentPriorityLevel,
        Al = i.unstable_ImmediatePriority,
        su = i.unstable_UserBlockingPriority,
        Xr = i.unstable_NormalPriority,
        cd = i.unstable_LowPriority,
        uu = i.unstable_IdlePriority,
        Yr = null,
        _t = null;
    function fd(e) {
        if (_t && typeof _t.onCommitFiberRoot == "function")
            try {
                _t.onCommitFiberRoot(
                    Yr,
                    e,
                    void 0,
                    (e.current.flags & 128) === 128,
                );
            } catch {}
    }
    var wt = Math.clz32 ? Math.clz32 : hd,
        dd = Math.log,
        pd = Math.LN2;
    function hd(e) {
        return (e >>>= 0), e === 0 ? 32 : (31 - ((dd(e) / pd) | 0)) | 0;
    }
    var Jr = 64,
        Zr = 4194304;
    function lr(e) {
        switch (e & -e) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return e & 4194240;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return e & 130023424;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 1073741824;
            default:
                return e;
        }
    }
    function br(e, t) {
        var n = e.pendingLanes;
        if (n === 0) return 0;
        var r = 0,
            l = e.suspendedLanes,
            u = e.pingedLanes,
            c = n & 268435455;
        if (c !== 0) {
            var g = c & ~l;
            g !== 0 ? (r = lr(g)) : ((u &= c), u !== 0 && (r = lr(u)));
        } else (c = n & ~l), c !== 0 ? (r = lr(c)) : u !== 0 && (r = lr(u));
        if (r === 0) return 0;
        if (
            t !== 0 &&
            t !== r &&
            !(t & l) &&
            ((l = r & -r),
            (u = t & -t),
            l >= u || (l === 16 && (u & 4194240) !== 0))
        )
            return t;
        if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
            for (e = e.entanglements, t &= r; 0 < t; )
                (n = 31 - wt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
        return r;
    }
    function md(e, t) {
        switch (e) {
            case 1:
            case 2:
            case 4:
                return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return -1;
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1;
        }
    }
    function yd(e, t) {
        for (
            var n = e.suspendedLanes,
                r = e.pingedLanes,
                l = e.expirationTimes,
                u = e.pendingLanes;
            0 < u;

        ) {
            var c = 31 - wt(u),
                g = 1 << c,
                v = l[c];
            v === -1
                ? (!(g & n) || g & r) && (l[c] = md(g, t))
                : v <= t && (e.expiredLanes |= g),
                (u &= ~g);
        }
    }
    function Ml(e) {
        return (
            (e = e.pendingLanes & -1073741825),
            e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
        );
    }
    function au() {
        var e = Jr;
        return (Jr <<= 1), !(Jr & 4194240) && (Jr = 64), e;
    }
    function zl(e) {
        for (var t = [], n = 0; 31 > n; n++) t.push(e);
        return t;
    }
    function ir(e, t, n) {
        (e.pendingLanes |= t),
            t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            (e = e.eventTimes),
            (t = 31 - wt(t)),
            (e[t] = n);
    }
    function gd(e, t) {
        var n = e.pendingLanes & ~t;
        (e.pendingLanes = t),
            (e.suspendedLanes = 0),
            (e.pingedLanes = 0),
            (e.expiredLanes &= t),
            (e.mutableReadLanes &= t),
            (e.entangledLanes &= t),
            (t = e.entanglements);
        var r = e.eventTimes;
        for (e = e.expirationTimes; 0 < n; ) {
            var l = 31 - wt(n),
                u = 1 << l;
            (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~u);
        }
    }
    function Dl(e, t) {
        var n = (e.entangledLanes |= t);
        for (e = e.entanglements; n; ) {
            var r = 31 - wt(n),
                l = 1 << r;
            (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
        }
    }
    var de = 0;
    function cu(e) {
        return (
            (e &= -e),
            1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
        );
    }
    var fu,
        Fl,
        du,
        pu,
        hu,
        Il = !1,
        eo = [],
        $t = null,
        Vt = null,
        Wt = null,
        sr = new Map(),
        ur = new Map(),
        Qt = [],
        vd =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
                " ",
            );
    function mu(e, t) {
        switch (e) {
            case "focusin":
            case "focusout":
                $t = null;
                break;
            case "dragenter":
            case "dragleave":
                Vt = null;
                break;
            case "mouseover":
            case "mouseout":
                Wt = null;
                break;
            case "pointerover":
            case "pointerout":
                sr.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                ur.delete(t.pointerId);
        }
    }
    function ar(e, t, n, r, l, u) {
        return e === null || e.nativeEvent !== u
            ? ((e = {
                  blockedOn: t,
                  domEventName: n,
                  eventSystemFlags: r,
                  nativeEvent: u,
                  targetContainers: [l],
              }),
              t !== null && ((t = kr(t)), t !== null && Fl(t)),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              l !== null && t.indexOf(l) === -1 && t.push(l),
              e);
    }
    function wd(e, t, n, r, l) {
        switch (t) {
            case "focusin":
                return ($t = ar($t, e, t, n, r, l)), !0;
            case "dragenter":
                return (Vt = ar(Vt, e, t, n, r, l)), !0;
            case "mouseover":
                return (Wt = ar(Wt, e, t, n, r, l)), !0;
            case "pointerover":
                var u = l.pointerId;
                return sr.set(u, ar(sr.get(u) || null, e, t, n, r, l)), !0;
            case "gotpointercapture":
                return (
                    (u = l.pointerId),
                    ur.set(u, ar(ur.get(u) || null, e, t, n, r, l)),
                    !0
                );
        }
        return !1;
    }
    function yu(e) {
        var t = an(e.target);
        if (t !== null) {
            var n = un(t);
            if (n !== null) {
                if (((t = n.tag), t === 13)) {
                    if (((t = tu(n)), t !== null)) {
                        (e.blockedOn = t),
                            hu(e.priority, function () {
                                du(n);
                            });
                        return;
                    }
                } else if (
                    t === 3 &&
                    n.stateNode.current.memoizedState.isDehydrated
                ) {
                    e.blockedOn =
                        n.tag === 3 ? n.stateNode.containerInfo : null;
                    return;
                }
            }
        }
        e.blockedOn = null;
    }
    function to(e) {
        if (e.blockedOn !== null) return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
            var n = jl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (n === null) {
                n = e.nativeEvent;
                var r = new n.constructor(n.type, n);
                (Pl = r), n.target.dispatchEvent(r), (Pl = null);
            } else
                return (t = kr(n)), t !== null && Fl(t), (e.blockedOn = n), !1;
            t.shift();
        }
        return !0;
    }
    function gu(e, t, n) {
        to(e) && n.delete(t);
    }
    function Sd() {
        (Il = !1),
            $t !== null && to($t) && ($t = null),
            Vt !== null && to(Vt) && (Vt = null),
            Wt !== null && to(Wt) && (Wt = null),
            sr.forEach(gu),
            ur.forEach(gu);
    }
    function cr(e, t) {
        e.blockedOn === t &&
            ((e.blockedOn = null),
            Il ||
                ((Il = !0),
                i.unstable_scheduleCallback(i.unstable_NormalPriority, Sd)));
    }
    function fr(e) {
        function t(l) {
            return cr(l, e);
        }
        if (0 < eo.length) {
            cr(eo[0], e);
            for (var n = 1; n < eo.length; n++) {
                var r = eo[n];
                r.blockedOn === e && (r.blockedOn = null);
            }
        }
        for (
            $t !== null && cr($t, e),
                Vt !== null && cr(Vt, e),
                Wt !== null && cr(Wt, e),
                sr.forEach(t),
                ur.forEach(t),
                n = 0;
            n < Qt.length;
            n++
        )
            (r = Qt[n]), r.blockedOn === e && (r.blockedOn = null);
        for (; 0 < Qt.length && ((n = Qt[0]), n.blockedOn === null); )
            yu(n), n.blockedOn === null && Qt.shift();
    }
    var Tn = Y.ReactCurrentBatchConfig,
        no = !0;
    function Ed(e, t, n, r) {
        var l = de,
            u = Tn.transition;
        Tn.transition = null;
        try {
            (de = 1), Ul(e, t, n, r);
        } finally {
            (de = l), (Tn.transition = u);
        }
    }
    function Cd(e, t, n, r) {
        var l = de,
            u = Tn.transition;
        Tn.transition = null;
        try {
            (de = 4), Ul(e, t, n, r);
        } finally {
            (de = l), (Tn.transition = u);
        }
    }
    function Ul(e, t, n, r) {
        if (no) {
            var l = jl(e, t, n, r);
            if (l === null) ni(e, t, r, ro, n), mu(e, r);
            else if (wd(l, e, t, n, r)) r.stopPropagation();
            else if ((mu(e, r), t & 4 && -1 < vd.indexOf(e))) {
                for (; l !== null; ) {
                    var u = kr(l);
                    if (
                        (u !== null && fu(u),
                        (u = jl(e, t, n, r)),
                        u === null && ni(e, t, r, ro, n),
                        u === l)
                    )
                        break;
                    l = u;
                }
                l !== null && r.stopPropagation();
            } else ni(e, t, r, null, n);
        }
    }
    var ro = null;
    function jl(e, t, n, r) {
        if (((ro = null), (e = _l(r)), (e = an(e)), e !== null))
            if (((t = un(e)), t === null)) e = null;
            else if (((n = t.tag), n === 13)) {
                if (((e = tu(t)), e !== null)) return e;
                e = null;
            } else if (n === 3) {
                if (t.stateNode.current.memoizedState.isDehydrated)
                    return t.tag === 3 ? t.stateNode.containerInfo : null;
                e = null;
            } else t !== e && (e = null);
        return (ro = e), null;
    }
    function vu(e) {
        switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 4;
            case "message":
                switch (ad()) {
                    case Al:
                        return 1;
                    case su:
                        return 4;
                    case Xr:
                    case cd:
                        return 16;
                    case uu:
                        return 536870912;
                    default:
                        return 16;
                }
            default:
                return 16;
        }
    }
    var Kt = null,
        Bl = null,
        oo = null;
    function wu() {
        if (oo) return oo;
        var e,
            t = Bl,
            n = t.length,
            r,
            l = "value" in Kt ? Kt.value : Kt.textContent,
            u = l.length;
        for (e = 0; e < n && t[e] === l[e]; e++);
        var c = n - e;
        for (r = 1; r <= c && t[n - r] === l[u - r]; r++);
        return (oo = l.slice(e, 1 < r ? 1 - r : void 0));
    }
    function lo(e) {
        var t = e.keyCode;
        return (
            "charCode" in e
                ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
                : (e = t),
            e === 10 && (e = 13),
            32 <= e || e === 13 ? e : 0
        );
    }
    function io() {
        return !0;
    }
    function Su() {
        return !1;
    }
    function st(e) {
        function t(n, r, l, u, c) {
            (this._reactName = n),
                (this._targetInst = l),
                (this.type = r),
                (this.nativeEvent = u),
                (this.target = c),
                (this.currentTarget = null);
            for (var g in e)
                e.hasOwnProperty(g) &&
                    ((n = e[g]), (this[g] = n ? n(u) : u[g]));
            return (
                (this.isDefaultPrevented = (
                    u.defaultPrevented != null
                        ? u.defaultPrevented
                        : u.returnValue === !1
                )
                    ? io
                    : Su),
                (this.isPropagationStopped = Su),
                this
            );
        }
        return (
            B(t.prototype, {
                preventDefault: function () {
                    this.defaultPrevented = !0;
                    var n = this.nativeEvent;
                    n &&
                        (n.preventDefault
                            ? n.preventDefault()
                            : typeof n.returnValue != "unknown" &&
                              (n.returnValue = !1),
                        (this.isDefaultPrevented = io));
                },
                stopPropagation: function () {
                    var n = this.nativeEvent;
                    n &&
                        (n.stopPropagation
                            ? n.stopPropagation()
                            : typeof n.cancelBubble != "unknown" &&
                              (n.cancelBubble = !0),
                        (this.isPropagationStopped = io));
                },
                persist: function () {},
                isPersistent: io,
            }),
            t
        );
    }
    var Nn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
                return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
        },
        Hl = st(Nn),
        dr = B({}, Nn, { view: 0, detail: 0 }),
        kd = st(dr),
        $l,
        Vl,
        pr,
        so = B({}, dr, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Ql,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
                return e.relatedTarget === void 0
                    ? e.fromElement === e.srcElement
                        ? e.toElement
                        : e.fromElement
                    : e.relatedTarget;
            },
            movementX: function (e) {
                return "movementX" in e
                    ? e.movementX
                    : (e !== pr &&
                          (pr && e.type === "mousemove"
                              ? (($l = e.screenX - pr.screenX),
                                (Vl = e.screenY - pr.screenY))
                              : (Vl = $l = 0),
                          (pr = e)),
                      $l);
            },
            movementY: function (e) {
                return "movementY" in e ? e.movementY : Vl;
            },
        }),
        Eu = st(so),
        Rd = B({}, so, { dataTransfer: 0 }),
        xd = st(Rd),
        Pd = B({}, dr, { relatedTarget: 0 }),
        Wl = st(Pd),
        _d = B({}, Nn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
        Td = st(_d),
        Nd = B({}, Nn, {
            clipboardData: function (e) {
                return "clipboardData" in e
                    ? e.clipboardData
                    : window.clipboardData;
            },
        }),
        Od = st(Nd),
        Ld = B({}, Nn, { data: 0 }),
        Cu = st(Ld),
        Ad = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
        },
        Md = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
        },
        zd = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
        };
    function Dd(e) {
        var t = this.nativeEvent;
        return t.getModifierState
            ? t.getModifierState(e)
            : (e = zd[e])
            ? !!t[e]
            : !1;
    }
    function Ql() {
        return Dd;
    }
    var Fd = B({}, dr, {
            key: function (e) {
                if (e.key) {
                    var t = Ad[e.key] || e.key;
                    if (t !== "Unidentified") return t;
                }
                return e.type === "keypress"
                    ? ((e = lo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
                    : e.type === "keydown" || e.type === "keyup"
                    ? Md[e.keyCode] || "Unidentified"
                    : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Ql,
            charCode: function (e) {
                return e.type === "keypress" ? lo(e) : 0;
            },
            keyCode: function (e) {
                return e.type === "keydown" || e.type === "keyup"
                    ? e.keyCode
                    : 0;
            },
            which: function (e) {
                return e.type === "keypress"
                    ? lo(e)
                    : e.type === "keydown" || e.type === "keyup"
                    ? e.keyCode
                    : 0;
            },
        }),
        Id = st(Fd),
        Ud = B({}, so, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0,
        }),
        ku = st(Ud),
        jd = B({}, dr, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Ql,
        }),
        Bd = st(jd),
        Hd = B({}, Nn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
        $d = st(Hd),
        Vd = B({}, so, {
            deltaX: function (e) {
                return "deltaX" in e
                    ? e.deltaX
                    : "wheelDeltaX" in e
                    ? -e.wheelDeltaX
                    : 0;
            },
            deltaY: function (e) {
                return "deltaY" in e
                    ? e.deltaY
                    : "wheelDeltaY" in e
                    ? -e.wheelDeltaY
                    : "wheelDelta" in e
                    ? -e.wheelDelta
                    : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
        }),
        Wd = st(Vd),
        Qd = [9, 13, 27, 32],
        Kl = w && "CompositionEvent" in window,
        hr = null;
    w && "documentMode" in document && (hr = document.documentMode);
    var Kd = w && "TextEvent" in window && !hr,
        Ru = w && (!Kl || (hr && 8 < hr && 11 >= hr)),
        xu = " ",
        Pu = !1;
    function _u(e, t) {
        switch (e) {
            case "keyup":
                return Qd.indexOf(t.keyCode) !== -1;
            case "keydown":
                return t.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1;
        }
    }
    function Tu(e) {
        return (
            (e = e.detail), typeof e == "object" && "data" in e ? e.data : null
        );
    }
    var On = !1;
    function qd(e, t) {
        switch (e) {
            case "compositionend":
                return Tu(t);
            case "keypress":
                return t.which !== 32 ? null : ((Pu = !0), xu);
            case "textInput":
                return (e = t.data), e === xu && Pu ? null : e;
            default:
                return null;
        }
    }
    function Gd(e, t) {
        if (On)
            return e === "compositionend" || (!Kl && _u(e, t))
                ? ((e = wu()), (oo = Bl = Kt = null), (On = !1), e)
                : null;
        switch (e) {
            case "paste":
                return null;
            case "keypress":
                if (
                    !(t.ctrlKey || t.altKey || t.metaKey) ||
                    (t.ctrlKey && t.altKey)
                ) {
                    if (t.char && 1 < t.char.length) return t.char;
                    if (t.which) return String.fromCharCode(t.which);
                }
                return null;
            case "compositionend":
                return Ru && t.locale !== "ko" ? null : t.data;
            default:
                return null;
        }
    }
    var Xd = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0,
    };
    function Nu(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!Xd[e.type] : t === "textarea";
    }
    function Ou(e, t, n, r) {
        Ys(r),
            (t = po(t, "onChange")),
            0 < t.length &&
                ((n = new Hl("onChange", "change", null, n, r)),
                e.push({ event: n, listeners: t }));
    }
    var mr = null,
        yr = null;
    function Yd(e) {
        Gu(e, 0);
    }
    function uo(e) {
        var t = Dn(e);
        if (Us(t)) return e;
    }
    function Jd(e, t) {
        if (e === "change") return t;
    }
    var Lu = !1;
    if (w) {
        var ql;
        if (w) {
            var Gl = "oninput" in document;
            if (!Gl) {
                var Au = document.createElement("div");
                Au.setAttribute("oninput", "return;"),
                    (Gl = typeof Au.oninput == "function");
            }
            ql = Gl;
        } else ql = !1;
        Lu = ql && (!document.documentMode || 9 < document.documentMode);
    }
    function Mu() {
        mr && (mr.detachEvent("onpropertychange", zu), (yr = mr = null));
    }
    function zu(e) {
        if (e.propertyName === "value" && uo(yr)) {
            var t = [];
            Ou(t, yr, e, _l(e)), eu(Yd, t);
        }
    }
    function Zd(e, t, n) {
        e === "focusin"
            ? (Mu(), (mr = t), (yr = n), mr.attachEvent("onpropertychange", zu))
            : e === "focusout" && Mu();
    }
    function bd(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown")
            return uo(yr);
    }
    function ep(e, t) {
        if (e === "click") return uo(t);
    }
    function tp(e, t) {
        if (e === "input" || e === "change") return uo(t);
    }
    function np(e, t) {
        return (
            (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
        );
    }
    var St = typeof Object.is == "function" ? Object.is : np;
    function gr(e, t) {
        if (St(e, t)) return !0;
        if (
            typeof e != "object" ||
            e === null ||
            typeof t != "object" ||
            t === null
        )
            return !1;
        var n = Object.keys(e),
            r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (r = 0; r < n.length; r++) {
            var l = n[r];
            if (!p.call(t, l) || !St(e[l], t[l])) return !1;
        }
        return !0;
    }
    function Du(e) {
        for (; e && e.firstChild; ) e = e.firstChild;
        return e;
    }
    function Fu(e, t) {
        var n = Du(e);
        e = 0;
        for (var r; n; ) {
            if (n.nodeType === 3) {
                if (((r = e + n.textContent.length), e <= t && r >= t))
                    return { node: n, offset: t - e };
                e = r;
            }
            e: {
                for (; n; ) {
                    if (n.nextSibling) {
                        n = n.nextSibling;
                        break e;
                    }
                    n = n.parentNode;
                }
                n = void 0;
            }
            n = Du(n);
        }
    }
    function Iu(e, t) {
        return e && t
            ? e === t
                ? !0
                : e && e.nodeType === 3
                ? !1
                : t && t.nodeType === 3
                ? Iu(e, t.parentNode)
                : "contains" in e
                ? e.contains(t)
                : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
            : !1;
    }
    function Uu() {
        for (var e = window, t = Qr(); t instanceof e.HTMLIFrameElement; ) {
            try {
                var n = typeof t.contentWindow.location.href == "string";
            } catch {
                n = !1;
            }
            if (n) e = t.contentWindow;
            else break;
            t = Qr(e.document);
        }
        return t;
    }
    function Xl(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return (
            t &&
            ((t === "input" &&
                (e.type === "text" ||
                    e.type === "search" ||
                    e.type === "tel" ||
                    e.type === "url" ||
                    e.type === "password")) ||
                t === "textarea" ||
                e.contentEditable === "true")
        );
    }
    function rp(e) {
        var t = Uu(),
            n = e.focusedElem,
            r = e.selectionRange;
        if (
            t !== n &&
            n &&
            n.ownerDocument &&
            Iu(n.ownerDocument.documentElement, n)
        ) {
            if (r !== null && Xl(n)) {
                if (
                    ((t = r.start),
                    (e = r.end),
                    e === void 0 && (e = t),
                    "selectionStart" in n)
                )
                    (n.selectionStart = t),
                        (n.selectionEnd = Math.min(e, n.value.length));
                else if (
                    ((e =
                        ((t = n.ownerDocument || document) && t.defaultView) ||
                        window),
                    e.getSelection)
                ) {
                    e = e.getSelection();
                    var l = n.textContent.length,
                        u = Math.min(r.start, l);
                    (r = r.end === void 0 ? u : Math.min(r.end, l)),
                        !e.extend && u > r && ((l = r), (r = u), (u = l)),
                        (l = Fu(n, u));
                    var c = Fu(n, r);
                    l &&
                        c &&
                        (e.rangeCount !== 1 ||
                            e.anchorNode !== l.node ||
                            e.anchorOffset !== l.offset ||
                            e.focusNode !== c.node ||
                            e.focusOffset !== c.offset) &&
                        ((t = t.createRange()),
                        t.setStart(l.node, l.offset),
                        e.removeAllRanges(),
                        u > r
                            ? (e.addRange(t), e.extend(c.node, c.offset))
                            : (t.setEnd(c.node, c.offset), e.addRange(t)));
                }
            }
            for (t = [], e = n; (e = e.parentNode); )
                e.nodeType === 1 &&
                    t.push({
                        element: e,
                        left: e.scrollLeft,
                        top: e.scrollTop,
                    });
            for (
                typeof n.focus == "function" && n.focus(), n = 0;
                n < t.length;
                n++
            )
                (e = t[n]),
                    (e.element.scrollLeft = e.left),
                    (e.element.scrollTop = e.top);
        }
    }
    var op = w && "documentMode" in document && 11 >= document.documentMode,
        Ln = null,
        Yl = null,
        vr = null,
        Jl = !1;
    function ju(e, t, n) {
        var r =
            n.window === n
                ? n.document
                : n.nodeType === 9
                ? n
                : n.ownerDocument;
        Jl ||
            Ln == null ||
            Ln !== Qr(r) ||
            ((r = Ln),
            "selectionStart" in r && Xl(r)
                ? (r = { start: r.selectionStart, end: r.selectionEnd })
                : ((r = (
                      (r.ownerDocument && r.ownerDocument.defaultView) ||
                      window
                  ).getSelection()),
                  (r = {
                      anchorNode: r.anchorNode,
                      anchorOffset: r.anchorOffset,
                      focusNode: r.focusNode,
                      focusOffset: r.focusOffset,
                  })),
            (vr && gr(vr, r)) ||
                ((vr = r),
                (r = po(Yl, "onSelect")),
                0 < r.length &&
                    ((t = new Hl("onSelect", "select", null, t, n)),
                    e.push({ event: t, listeners: r }),
                    (t.target = Ln))));
    }
    function ao(e, t) {
        var n = {};
        return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
        );
    }
    var An = {
            animationend: ao("Animation", "AnimationEnd"),
            animationiteration: ao("Animation", "AnimationIteration"),
            animationstart: ao("Animation", "AnimationStart"),
            transitionend: ao("Transition", "TransitionEnd"),
        },
        Zl = {},
        Bu = {};
    w &&
        ((Bu = document.createElement("div").style),
        "AnimationEvent" in window ||
            (delete An.animationend.animation,
            delete An.animationiteration.animation,
            delete An.animationstart.animation),
        "TransitionEvent" in window || delete An.transitionend.transition);
    function co(e) {
        if (Zl[e]) return Zl[e];
        if (!An[e]) return e;
        var t = An[e],
            n;
        for (n in t) if (t.hasOwnProperty(n) && n in Bu) return (Zl[e] = t[n]);
        return e;
    }
    var Hu = co("animationend"),
        $u = co("animationiteration"),
        Vu = co("animationstart"),
        Wu = co("transitionend"),
        Qu = new Map(),
        Ku =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
                " ",
            );
    function qt(e, t) {
        Qu.set(e, t), d(t, [e]);
    }
    for (var bl = 0; bl < Ku.length; bl++) {
        var ei = Ku[bl],
            lp = ei.toLowerCase(),
            ip = ei[0].toUpperCase() + ei.slice(1);
        qt(lp, "on" + ip);
    }
    qt(Hu, "onAnimationEnd"),
        qt($u, "onAnimationIteration"),
        qt(Vu, "onAnimationStart"),
        qt("dblclick", "onDoubleClick"),
        qt("focusin", "onFocus"),
        qt("focusout", "onBlur"),
        qt(Wu, "onTransitionEnd"),
        m("onMouseEnter", ["mouseout", "mouseover"]),
        m("onMouseLeave", ["mouseout", "mouseover"]),
        m("onPointerEnter", ["pointerout", "pointerover"]),
        m("onPointerLeave", ["pointerout", "pointerover"]),
        d(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
                " ",
            ),
        ),
        d(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
                " ",
            ),
        ),
        d("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
        ]),
        d(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
                " ",
            ),
        ),
        d(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
                " ",
            ),
        ),
        d(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
                " ",
            ),
        );
    var wr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
                " ",
            ),
        sp = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(wr),
        );
    function qu(e, t, n) {
        var r = e.type || "unknown-event";
        (e.currentTarget = n), ld(r, t, void 0, e), (e.currentTarget = null);
    }
    function Gu(e, t) {
        t = (t & 4) !== 0;
        for (var n = 0; n < e.length; n++) {
            var r = e[n],
                l = r.event;
            r = r.listeners;
            e: {
                var u = void 0;
                if (t)
                    for (var c = r.length - 1; 0 <= c; c--) {
                        var g = r[c],
                            v = g.instance,
                            x = g.currentTarget;
                        if (
                            ((g = g.listener),
                            v !== u && l.isPropagationStopped())
                        )
                            break e;
                        qu(l, g, x), (u = v);
                    }
                else
                    for (c = 0; c < r.length; c++) {
                        if (
                            ((g = r[c]),
                            (v = g.instance),
                            (x = g.currentTarget),
                            (g = g.listener),
                            v !== u && l.isPropagationStopped())
                        )
                            break e;
                        qu(l, g, x), (u = v);
                    }
            }
        }
        if (Gr) throw ((e = Ll), (Gr = !1), (Ll = null), e);
    }
    function ye(e, t) {
        var n = t[ui];
        n === void 0 && (n = t[ui] = new Set());
        var r = e + "__bubble";
        n.has(r) || (Xu(t, e, 2, !1), n.add(r));
    }
    function ti(e, t, n) {
        var r = 0;
        t && (r |= 4), Xu(n, e, r, t);
    }
    var fo = "_reactListening" + Math.random().toString(36).slice(2);
    function Sr(e) {
        if (!e[fo]) {
            (e[fo] = !0),
                a.forEach(function (n) {
                    n !== "selectionchange" &&
                        (sp.has(n) || ti(n, !1, e), ti(n, !0, e));
                });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[fo] || ((t[fo] = !0), ti("selectionchange", !1, t));
        }
    }
    function Xu(e, t, n, r) {
        switch (vu(t)) {
            case 1:
                var l = Ed;
                break;
            case 4:
                l = Cd;
                break;
            default:
                l = Ul;
        }
        (n = l.bind(null, t, n, e)),
            (l = void 0),
            !Ol ||
                (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
                (l = !0),
            r
                ? l !== void 0
                    ? e.addEventListener(t, n, { capture: !0, passive: l })
                    : e.addEventListener(t, n, !0)
                : l !== void 0
                ? e.addEventListener(t, n, { passive: l })
                : e.addEventListener(t, n, !1);
    }
    function ni(e, t, n, r, l) {
        var u = r;
        if (!(t & 1) && !(t & 2) && r !== null)
            e: for (;;) {
                if (r === null) return;
                var c = r.tag;
                if (c === 3 || c === 4) {
                    var g = r.stateNode.containerInfo;
                    if (g === l || (g.nodeType === 8 && g.parentNode === l))
                        break;
                    if (c === 4)
                        for (c = r.return; c !== null; ) {
                            var v = c.tag;
                            if (
                                (v === 3 || v === 4) &&
                                ((v = c.stateNode.containerInfo),
                                v === l ||
                                    (v.nodeType === 8 && v.parentNode === l))
                            )
                                return;
                            c = c.return;
                        }
                    for (; g !== null; ) {
                        if (((c = an(g)), c === null)) return;
                        if (((v = c.tag), v === 5 || v === 6)) {
                            r = u = c;
                            continue e;
                        }
                        g = g.parentNode;
                    }
                }
                r = r.return;
            }
        eu(function () {
            var x = u,
                M = _l(n),
                z = [];
            e: {
                var A = Qu.get(e);
                if (A !== void 0) {
                    var j = Hl,
                        $ = e;
                    switch (e) {
                        case "keypress":
                            if (lo(n) === 0) break e;
                        case "keydown":
                        case "keyup":
                            j = Id;
                            break;
                        case "focusin":
                            ($ = "focus"), (j = Wl);
                            break;
                        case "focusout":
                            ($ = "blur"), (j = Wl);
                            break;
                        case "beforeblur":
                        case "afterblur":
                            j = Wl;
                            break;
                        case "click":
                            if (n.button === 2) break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            j = Eu;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            j = xd;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            j = Bd;
                            break;
                        case Hu:
                        case $u:
                        case Vu:
                            j = Td;
                            break;
                        case Wu:
                            j = $d;
                            break;
                        case "scroll":
                            j = kd;
                            break;
                        case "wheel":
                            j = Wd;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            j = Od;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            j = ku;
                    }
                    var V = (t & 4) !== 0,
                        Ne = !V && e === "scroll",
                        k = V ? (A !== null ? A + "Capture" : null) : A;
                    V = [];
                    for (var E = x, R; E !== null; ) {
                        R = E;
                        var F = R.stateNode;
                        if (
                            (R.tag === 5 &&
                                F !== null &&
                                ((R = F),
                                k !== null &&
                                    ((F = nr(E, k)),
                                    F != null && V.push(Er(E, F, R)))),
                            Ne)
                        )
                            break;
                        E = E.return;
                    }
                    0 < V.length &&
                        ((A = new j(A, $, null, n, M)),
                        z.push({ event: A, listeners: V }));
                }
            }
            if (!(t & 7)) {
                e: {
                    if (
                        ((A = e === "mouseover" || e === "pointerover"),
                        (j = e === "mouseout" || e === "pointerout"),
                        A &&
                            n !== Pl &&
                            ($ = n.relatedTarget || n.fromElement) &&
                            (an($) || $[Mt]))
                    )
                        break e;
                    if (
                        (j || A) &&
                        ((A =
                            M.window === M
                                ? M
                                : (A = M.ownerDocument)
                                ? A.defaultView || A.parentWindow
                                : window),
                        j
                            ? (($ = n.relatedTarget || n.toElement),
                              (j = x),
                              ($ = $ ? an($) : null),
                              $ !== null &&
                                  ((Ne = un($)),
                                  $ !== Ne || ($.tag !== 5 && $.tag !== 6)) &&
                                  ($ = null))
                            : ((j = null), ($ = x)),
                        j !== $)
                    ) {
                        if (
                            ((V = Eu),
                            (F = "onMouseLeave"),
                            (k = "onMouseEnter"),
                            (E = "mouse"),
                            (e === "pointerout" || e === "pointerover") &&
                                ((V = ku),
                                (F = "onPointerLeave"),
                                (k = "onPointerEnter"),
                                (E = "pointer")),
                            (Ne = j == null ? A : Dn(j)),
                            (R = $ == null ? A : Dn($)),
                            (A = new V(F, E + "leave", j, n, M)),
                            (A.target = Ne),
                            (A.relatedTarget = R),
                            (F = null),
                            an(M) === x &&
                                ((V = new V(k, E + "enter", $, n, M)),
                                (V.target = R),
                                (V.relatedTarget = Ne),
                                (F = V)),
                            (Ne = F),
                            j && $)
                        )
                            t: {
                                for (V = j, k = $, E = 0, R = V; R; R = Mn(R))
                                    E++;
                                for (R = 0, F = k; F; F = Mn(F)) R++;
                                for (; 0 < E - R; ) (V = Mn(V)), E--;
                                for (; 0 < R - E; ) (k = Mn(k)), R--;
                                for (; E--; ) {
                                    if (
                                        V === k ||
                                        (k !== null && V === k.alternate)
                                    )
                                        break t;
                                    (V = Mn(V)), (k = Mn(k));
                                }
                                V = null;
                            }
                        else V = null;
                        j !== null && Yu(z, A, j, V, !1),
                            $ !== null && Ne !== null && Yu(z, Ne, $, V, !0);
                    }
                }
                e: {
                    if (
                        ((A = x ? Dn(x) : window),
                        (j = A.nodeName && A.nodeName.toLowerCase()),
                        j === "select" || (j === "input" && A.type === "file"))
                    )
                        var W = Jd;
                    else if (Nu(A))
                        if (Lu) W = tp;
                        else {
                            W = bd;
                            var q = Zd;
                        }
                    else
                        (j = A.nodeName) &&
                            j.toLowerCase() === "input" &&
                            (A.type === "checkbox" || A.type === "radio") &&
                            (W = ep);
                    if (W && (W = W(e, x))) {
                        Ou(z, W, n, M);
                        break e;
                    }
                    q && q(e, A, x),
                        e === "focusout" &&
                            (q = A._wrapperState) &&
                            q.controlled &&
                            A.type === "number" &&
                            El(A, "number", A.value);
                }
                switch (((q = x ? Dn(x) : window), e)) {
                    case "focusin":
                        (Nu(q) || q.contentEditable === "true") &&
                            ((Ln = q), (Yl = x), (vr = null));
                        break;
                    case "focusout":
                        vr = Yl = Ln = null;
                        break;
                    case "mousedown":
                        Jl = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        (Jl = !1), ju(z, n, M);
                        break;
                    case "selectionchange":
                        if (op) break;
                    case "keydown":
                    case "keyup":
                        ju(z, n, M);
                }
                var G;
                if (Kl)
                    e: {
                        switch (e) {
                            case "compositionstart":
                                var J = "onCompositionStart";
                                break e;
                            case "compositionend":
                                J = "onCompositionEnd";
                                break e;
                            case "compositionupdate":
                                J = "onCompositionUpdate";
                                break e;
                        }
                        J = void 0;
                    }
                else
                    On
                        ? _u(e, n) && (J = "onCompositionEnd")
                        : e === "keydown" &&
                          n.keyCode === 229 &&
                          (J = "onCompositionStart");
                J &&
                    (Ru &&
                        n.locale !== "ko" &&
                        (On || J !== "onCompositionStart"
                            ? J === "onCompositionEnd" && On && (G = wu())
                            : ((Kt = M),
                              (Bl = "value" in Kt ? Kt.value : Kt.textContent),
                              (On = !0))),
                    (q = po(x, J)),
                    0 < q.length &&
                        ((J = new Cu(J, e, null, n, M)),
                        z.push({ event: J, listeners: q }),
                        G
                            ? (J.data = G)
                            : ((G = Tu(n)), G !== null && (J.data = G)))),
                    (G = Kd ? qd(e, n) : Gd(e, n)) &&
                        ((x = po(x, "onBeforeInput")),
                        0 < x.length &&
                            ((M = new Cu(
                                "onBeforeInput",
                                "beforeinput",
                                null,
                                n,
                                M,
                            )),
                            z.push({ event: M, listeners: x }),
                            (M.data = G)));
            }
            Gu(z, t);
        });
    }
    function Er(e, t, n) {
        return { instance: e, listener: t, currentTarget: n };
    }
    function po(e, t) {
        for (var n = t + "Capture", r = []; e !== null; ) {
            var l = e,
                u = l.stateNode;
            l.tag === 5 &&
                u !== null &&
                ((l = u),
                (u = nr(e, n)),
                u != null && r.unshift(Er(e, u, l)),
                (u = nr(e, t)),
                u != null && r.push(Er(e, u, l))),
                (e = e.return);
        }
        return r;
    }
    function Mn(e) {
        if (e === null) return null;
        do e = e.return;
        while (e && e.tag !== 5);
        return e || null;
    }
    function Yu(e, t, n, r, l) {
        for (var u = t._reactName, c = []; n !== null && n !== r; ) {
            var g = n,
                v = g.alternate,
                x = g.stateNode;
            if (v !== null && v === r) break;
            g.tag === 5 &&
                x !== null &&
                ((g = x),
                l
                    ? ((v = nr(n, u)), v != null && c.unshift(Er(n, v, g)))
                    : l || ((v = nr(n, u)), v != null && c.push(Er(n, v, g)))),
                (n = n.return);
        }
        c.length !== 0 && e.push({ event: t, listeners: c });
    }
    var up = /\r\n?/g,
        ap = /\u0000|\uFFFD/g;
    function Ju(e) {
        return (typeof e == "string" ? e : "" + e)
            .replace(
                up,
                `
`,
            )
            .replace(ap, "");
    }
    function ho(e, t, n) {
        if (((t = Ju(t)), Ju(e) !== t && n)) throw Error(s(425));
    }
    function mo() {}
    var ri = null,
        oi = null;
    function li(e, t) {
        return (
            e === "textarea" ||
            e === "noscript" ||
            typeof t.children == "string" ||
            typeof t.children == "number" ||
            (typeof t.dangerouslySetInnerHTML == "object" &&
                t.dangerouslySetInnerHTML !== null &&
                t.dangerouslySetInnerHTML.__html != null)
        );
    }
    var ii = typeof setTimeout == "function" ? setTimeout : void 0,
        cp = typeof clearTimeout == "function" ? clearTimeout : void 0,
        Zu = typeof Promise == "function" ? Promise : void 0,
        fp =
            typeof queueMicrotask == "function"
                ? queueMicrotask
                : typeof Zu < "u"
                ? function (e) {
                      return Zu.resolve(null).then(e).catch(dp);
                  }
                : ii;
    function dp(e) {
        setTimeout(function () {
            throw e;
        });
    }
    function si(e, t) {
        var n = t,
            r = 0;
        do {
            var l = n.nextSibling;
            if ((e.removeChild(n), l && l.nodeType === 8))
                if (((n = l.data), n === "/$")) {
                    if (r === 0) {
                        e.removeChild(l), fr(t);
                        return;
                    }
                    r--;
                } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
            n = l;
        } while (n);
        fr(t);
    }
    function Gt(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3) break;
            if (t === 8) {
                if (((t = e.data), t === "$" || t === "$!" || t === "$?"))
                    break;
                if (t === "/$") return null;
            }
        }
        return e;
    }
    function bu(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var n = e.data;
                if (n === "$" || n === "$!" || n === "$?") {
                    if (t === 0) return e;
                    t--;
                } else n === "/$" && t++;
            }
            e = e.previousSibling;
        }
        return null;
    }
    var zn = Math.random().toString(36).slice(2),
        Tt = "__reactFiber$" + zn,
        Cr = "__reactProps$" + zn,
        Mt = "__reactContainer$" + zn,
        ui = "__reactEvents$" + zn,
        pp = "__reactListeners$" + zn,
        hp = "__reactHandles$" + zn;
    function an(e) {
        var t = e[Tt];
        if (t) return t;
        for (var n = e.parentNode; n; ) {
            if ((t = n[Mt] || n[Tt])) {
                if (
                    ((n = t.alternate),
                    t.child !== null || (n !== null && n.child !== null))
                )
                    for (e = bu(e); e !== null; ) {
                        if ((n = e[Tt])) return n;
                        e = bu(e);
                    }
                return t;
            }
            (e = n), (n = e.parentNode);
        }
        return null;
    }
    function kr(e) {
        return (
            (e = e[Tt] || e[Mt]),
            !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
                ? null
                : e
        );
    }
    function Dn(e) {
        if (e.tag === 5 || e.tag === 6) return e.stateNode;
        throw Error(s(33));
    }
    function yo(e) {
        return e[Cr] || null;
    }
    var ai = [],
        Fn = -1;
    function Xt(e) {
        return { current: e };
    }
    function ge(e) {
        0 > Fn || ((e.current = ai[Fn]), (ai[Fn] = null), Fn--);
    }
    function me(e, t) {
        Fn++, (ai[Fn] = e.current), (e.current = t);
    }
    var Yt = {},
        Ve = Xt(Yt),
        Ze = Xt(!1),
        cn = Yt;
    function In(e, t) {
        var n = e.type.contextTypes;
        if (!n) return Yt;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
        var l = {},
            u;
        for (u in n) l[u] = t[u];
        return (
            r &&
                ((e = e.stateNode),
                (e.__reactInternalMemoizedUnmaskedChildContext = t),
                (e.__reactInternalMemoizedMaskedChildContext = l)),
            l
        );
    }
    function be(e) {
        return (e = e.childContextTypes), e != null;
    }
    function go() {
        ge(Ze), ge(Ve);
    }
    function ea(e, t, n) {
        if (Ve.current !== Yt) throw Error(s(168));
        me(Ve, t), me(Ze, n);
    }
    function ta(e, t, n) {
        var r = e.stateNode;
        if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
            return n;
        r = r.getChildContext();
        for (var l in r)
            if (!(l in t)) throw Error(s(108, he(e) || "Unknown", l));
        return B({}, n, r);
    }
    function vo(e) {
        return (
            (e =
                ((e = e.stateNode) &&
                    e.__reactInternalMemoizedMergedChildContext) ||
                Yt),
            (cn = Ve.current),
            me(Ve, e),
            me(Ze, Ze.current),
            !0
        );
    }
    function na(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(s(169));
        n
            ? ((e = ta(e, t, cn)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              ge(Ze),
              ge(Ve),
              me(Ve, e))
            : ge(Ze),
            me(Ze, n);
    }
    var zt = null,
        wo = !1,
        ci = !1;
    function ra(e) {
        zt === null ? (zt = [e]) : zt.push(e);
    }
    function mp(e) {
        (wo = !0), ra(e);
    }
    function Jt() {
        if (!ci && zt !== null) {
            ci = !0;
            var e = 0,
                t = de;
            try {
                var n = zt;
                for (de = 1; e < n.length; e++) {
                    var r = n[e];
                    do r = r(!0);
                    while (r !== null);
                }
                (zt = null), (wo = !1);
            } catch (l) {
                throw (zt !== null && (zt = zt.slice(e + 1)), lu(Al, Jt), l);
            } finally {
                (de = t), (ci = !1);
            }
        }
        return null;
    }
    var Un = [],
        jn = 0,
        So = null,
        Eo = 0,
        pt = [],
        ht = 0,
        fn = null,
        Dt = 1,
        Ft = "";
    function dn(e, t) {
        (Un[jn++] = Eo), (Un[jn++] = So), (So = e), (Eo = t);
    }
    function oa(e, t, n) {
        (pt[ht++] = Dt), (pt[ht++] = Ft), (pt[ht++] = fn), (fn = e);
        var r = Dt;
        e = Ft;
        var l = 32 - wt(r) - 1;
        (r &= ~(1 << l)), (n += 1);
        var u = 32 - wt(t) + l;
        if (30 < u) {
            var c = l - (l % 5);
            (u = (r & ((1 << c) - 1)).toString(32)),
                (r >>= c),
                (l -= c),
                (Dt = (1 << (32 - wt(t) + l)) | (n << l) | r),
                (Ft = u + e);
        } else (Dt = (1 << u) | (n << l) | r), (Ft = e);
    }
    function fi(e) {
        e.return !== null && (dn(e, 1), oa(e, 1, 0));
    }
    function di(e) {
        for (; e === So; )
            (So = Un[--jn]), (Un[jn] = null), (Eo = Un[--jn]), (Un[jn] = null);
        for (; e === fn; )
            (fn = pt[--ht]),
                (pt[ht] = null),
                (Ft = pt[--ht]),
                (pt[ht] = null),
                (Dt = pt[--ht]),
                (pt[ht] = null);
    }
    var ut = null,
        at = null,
        we = !1,
        Et = null;
    function la(e, t) {
        var n = vt(5, null, null, 0);
        (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            (t = e.deletions),
            t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
    }
    function ia(e, t) {
        switch (e.tag) {
            case 5:
                var n = e.type;
                return (
                    (t =
                        t.nodeType !== 1 ||
                        n.toLowerCase() !== t.nodeName.toLowerCase()
                            ? null
                            : t),
                    t !== null
                        ? ((e.stateNode = t),
                          (ut = e),
                          (at = Gt(t.firstChild)),
                          !0)
                        : !1
                );
            case 6:
                return (
                    (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
                    t !== null
                        ? ((e.stateNode = t), (ut = e), (at = null), !0)
                        : !1
                );
            case 13:
                return (
                    (t = t.nodeType !== 8 ? null : t),
                    t !== null
                        ? ((n = fn !== null ? { id: Dt, overflow: Ft } : null),
                          (e.memoizedState = {
                              dehydrated: t,
                              treeContext: n,
                              retryLane: 1073741824,
                          }),
                          (n = vt(18, null, null, 0)),
                          (n.stateNode = t),
                          (n.return = e),
                          (e.child = n),
                          (ut = e),
                          (at = null),
                          !0)
                        : !1
                );
            default:
                return !1;
        }
    }
    function pi(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
    }
    function hi(e) {
        if (we) {
            var t = at;
            if (t) {
                var n = t;
                if (!ia(e, t)) {
                    if (pi(e)) throw Error(s(418));
                    t = Gt(n.nextSibling);
                    var r = ut;
                    t && ia(e, t)
                        ? la(r, n)
                        : ((e.flags = (e.flags & -4097) | 2),
                          (we = !1),
                          (ut = e));
                }
            } else {
                if (pi(e)) throw Error(s(418));
                (e.flags = (e.flags & -4097) | 2), (we = !1), (ut = e);
            }
        }
    }
    function sa(e) {
        for (
            e = e.return;
            e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

        )
            e = e.return;
        ut = e;
    }
    function Co(e) {
        if (e !== ut) return !1;
        if (!we) return sa(e), (we = !0), !1;
        var t;
        if (
            ((t = e.tag !== 3) &&
                !(t = e.tag !== 5) &&
                ((t = e.type),
                (t =
                    t !== "head" &&
                    t !== "body" &&
                    !li(e.type, e.memoizedProps))),
            t && (t = at))
        ) {
            if (pi(e)) throw (ua(), Error(s(418)));
            for (; t; ) la(e, t), (t = Gt(t.nextSibling));
        }
        if ((sa(e), e.tag === 13)) {
            if (
                ((e = e.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
            )
                throw Error(s(317));
            e: {
                for (e = e.nextSibling, t = 0; e; ) {
                    if (e.nodeType === 8) {
                        var n = e.data;
                        if (n === "/$") {
                            if (t === 0) {
                                at = Gt(e.nextSibling);
                                break e;
                            }
                            t--;
                        } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
                    }
                    e = e.nextSibling;
                }
                at = null;
            }
        } else at = ut ? Gt(e.stateNode.nextSibling) : null;
        return !0;
    }
    function ua() {
        for (var e = at; e; ) e = Gt(e.nextSibling);
    }
    function Bn() {
        (at = ut = null), (we = !1);
    }
    function mi(e) {
        Et === null ? (Et = [e]) : Et.push(e);
    }
    var yp = Y.ReactCurrentBatchConfig;
    function Rr(e, t, n) {
        if (
            ((e = n.ref),
            e !== null && typeof e != "function" && typeof e != "object")
        ) {
            if (n._owner) {
                if (((n = n._owner), n)) {
                    if (n.tag !== 1) throw Error(s(309));
                    var r = n.stateNode;
                }
                if (!r) throw Error(s(147, e));
                var l = r,
                    u = "" + e;
                return t !== null &&
                    t.ref !== null &&
                    typeof t.ref == "function" &&
                    t.ref._stringRef === u
                    ? t.ref
                    : ((t = function (c) {
                          var g = l.refs;
                          c === null ? delete g[u] : (g[u] = c);
                      }),
                      (t._stringRef = u),
                      t);
            }
            if (typeof e != "string") throw Error(s(284));
            if (!n._owner) throw Error(s(290, e));
        }
        return e;
    }
    function ko(e, t) {
        throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
                s(
                    31,
                    e === "[object Object]"
                        ? "object with keys {" + Object.keys(t).join(", ") + "}"
                        : e,
                ),
            ))
        );
    }
    function aa(e) {
        var t = e._init;
        return t(e._payload);
    }
    function ca(e) {
        function t(k, E) {
            if (e) {
                var R = k.deletions;
                R === null ? ((k.deletions = [E]), (k.flags |= 16)) : R.push(E);
            }
        }
        function n(k, E) {
            if (!e) return null;
            for (; E !== null; ) t(k, E), (E = E.sibling);
            return null;
        }
        function r(k, E) {
            for (k = new Map(); E !== null; )
                E.key !== null ? k.set(E.key, E) : k.set(E.index, E),
                    (E = E.sibling);
            return k;
        }
        function l(k, E) {
            return (k = ln(k, E)), (k.index = 0), (k.sibling = null), k;
        }
        function u(k, E, R) {
            return (
                (k.index = R),
                e
                    ? ((R = k.alternate),
                      R !== null
                          ? ((R = R.index), R < E ? ((k.flags |= 2), E) : R)
                          : ((k.flags |= 2), E))
                    : ((k.flags |= 1048576), E)
            );
        }
        function c(k) {
            return e && k.alternate === null && (k.flags |= 2), k;
        }
        function g(k, E, R, F) {
            return E === null || E.tag !== 6
                ? ((E = is(R, k.mode, F)), (E.return = k), E)
                : ((E = l(E, R)), (E.return = k), E);
        }
        function v(k, E, R, F) {
            var W = R.type;
            return W === Z
                ? M(k, E, R.props.children, F, R.key)
                : E !== null &&
                  (E.elementType === W ||
                      (typeof W == "object" &&
                          W !== null &&
                          W.$$typeof === Be &&
                          aa(W) === E.type))
                ? ((F = l(E, R.props)),
                  (F.ref = Rr(k, E, R)),
                  (F.return = k),
                  F)
                : ((F = qo(R.type, R.key, R.props, null, k.mode, F)),
                  (F.ref = Rr(k, E, R)),
                  (F.return = k),
                  F);
        }
        function x(k, E, R, F) {
            return E === null ||
                E.tag !== 4 ||
                E.stateNode.containerInfo !== R.containerInfo ||
                E.stateNode.implementation !== R.implementation
                ? ((E = ss(R, k.mode, F)), (E.return = k), E)
                : ((E = l(E, R.children || [])), (E.return = k), E);
        }
        function M(k, E, R, F, W) {
            return E === null || E.tag !== 7
                ? ((E = Sn(R, k.mode, F, W)), (E.return = k), E)
                : ((E = l(E, R)), (E.return = k), E);
        }
        function z(k, E, R) {
            if ((typeof E == "string" && E !== "") || typeof E == "number")
                return (E = is("" + E, k.mode, R)), (E.return = k), E;
            if (typeof E == "object" && E !== null) {
                switch (E.$$typeof) {
                    case ee:
                        return (
                            (R = qo(E.type, E.key, E.props, null, k.mode, R)),
                            (R.ref = Rr(k, null, E)),
                            (R.return = k),
                            R
                        );
                    case le:
                        return (E = ss(E, k.mode, R)), (E.return = k), E;
                    case Be:
                        var F = E._init;
                        return z(k, F(E._payload), R);
                }
                if (bn(E) || K(E))
                    return (E = Sn(E, k.mode, R, null)), (E.return = k), E;
                ko(k, E);
            }
            return null;
        }
        function A(k, E, R, F) {
            var W = E !== null ? E.key : null;
            if ((typeof R == "string" && R !== "") || typeof R == "number")
                return W !== null ? null : g(k, E, "" + R, F);
            if (typeof R == "object" && R !== null) {
                switch (R.$$typeof) {
                    case ee:
                        return R.key === W ? v(k, E, R, F) : null;
                    case le:
                        return R.key === W ? x(k, E, R, F) : null;
                    case Be:
                        return (W = R._init), A(k, E, W(R._payload), F);
                }
                if (bn(R) || K(R))
                    return W !== null ? null : M(k, E, R, F, null);
                ko(k, R);
            }
            return null;
        }
        function j(k, E, R, F, W) {
            if ((typeof F == "string" && F !== "") || typeof F == "number")
                return (k = k.get(R) || null), g(E, k, "" + F, W);
            if (typeof F == "object" && F !== null) {
                switch (F.$$typeof) {
                    case ee:
                        return (
                            (k = k.get(F.key === null ? R : F.key) || null),
                            v(E, k, F, W)
                        );
                    case le:
                        return (
                            (k = k.get(F.key === null ? R : F.key) || null),
                            x(E, k, F, W)
                        );
                    case Be:
                        var q = F._init;
                        return j(k, E, R, q(F._payload), W);
                }
                if (bn(F) || K(F))
                    return (k = k.get(R) || null), M(E, k, F, W, null);
                ko(E, F);
            }
            return null;
        }
        function $(k, E, R, F) {
            for (
                var W = null, q = null, G = E, J = (E = 0), je = null;
                G !== null && J < R.length;
                J++
            ) {
                G.index > J ? ((je = G), (G = null)) : (je = G.sibling);
                var ae = A(k, G, R[J], F);
                if (ae === null) {
                    G === null && (G = je);
                    break;
                }
                e && G && ae.alternate === null && t(k, G),
                    (E = u(ae, E, J)),
                    q === null ? (W = ae) : (q.sibling = ae),
                    (q = ae),
                    (G = je);
            }
            if (J === R.length) return n(k, G), we && dn(k, J), W;
            if (G === null) {
                for (; J < R.length; J++)
                    (G = z(k, R[J], F)),
                        G !== null &&
                            ((E = u(G, E, J)),
                            q === null ? (W = G) : (q.sibling = G),
                            (q = G));
                return we && dn(k, J), W;
            }
            for (G = r(k, G); J < R.length; J++)
                (je = j(G, k, J, R[J], F)),
                    je !== null &&
                        (e &&
                            je.alternate !== null &&
                            G.delete(je.key === null ? J : je.key),
                        (E = u(je, E, J)),
                        q === null ? (W = je) : (q.sibling = je),
                        (q = je));
            return (
                e &&
                    G.forEach(function (sn) {
                        return t(k, sn);
                    }),
                we && dn(k, J),
                W
            );
        }
        function V(k, E, R, F) {
            var W = K(R);
            if (typeof W != "function") throw Error(s(150));
            if (((R = W.call(R)), R == null)) throw Error(s(151));
            for (
                var q = (W = null),
                    G = E,
                    J = (E = 0),
                    je = null,
                    ae = R.next();
                G !== null && !ae.done;
                J++, ae = R.next()
            ) {
                G.index > J ? ((je = G), (G = null)) : (je = G.sibling);
                var sn = A(k, G, ae.value, F);
                if (sn === null) {
                    G === null && (G = je);
                    break;
                }
                e && G && sn.alternate === null && t(k, G),
                    (E = u(sn, E, J)),
                    q === null ? (W = sn) : (q.sibling = sn),
                    (q = sn),
                    (G = je);
            }
            if (ae.done) return n(k, G), we && dn(k, J), W;
            if (G === null) {
                for (; !ae.done; J++, ae = R.next())
                    (ae = z(k, ae.value, F)),
                        ae !== null &&
                            ((E = u(ae, E, J)),
                            q === null ? (W = ae) : (q.sibling = ae),
                            (q = ae));
                return we && dn(k, J), W;
            }
            for (G = r(k, G); !ae.done; J++, ae = R.next())
                (ae = j(G, k, J, ae.value, F)),
                    ae !== null &&
                        (e &&
                            ae.alternate !== null &&
                            G.delete(ae.key === null ? J : ae.key),
                        (E = u(ae, E, J)),
                        q === null ? (W = ae) : (q.sibling = ae),
                        (q = ae));
            return (
                e &&
                    G.forEach(function (Gp) {
                        return t(k, Gp);
                    }),
                we && dn(k, J),
                W
            );
        }
        function Ne(k, E, R, F) {
            if (
                (typeof R == "object" &&
                    R !== null &&
                    R.type === Z &&
                    R.key === null &&
                    (R = R.props.children),
                typeof R == "object" && R !== null)
            ) {
                switch (R.$$typeof) {
                    case ee:
                        e: {
                            for (var W = R.key, q = E; q !== null; ) {
                                if (q.key === W) {
                                    if (((W = R.type), W === Z)) {
                                        if (q.tag === 7) {
                                            n(k, q.sibling),
                                                (E = l(q, R.props.children)),
                                                (E.return = k),
                                                (k = E);
                                            break e;
                                        }
                                    } else if (
                                        q.elementType === W ||
                                        (typeof W == "object" &&
                                            W !== null &&
                                            W.$$typeof === Be &&
                                            aa(W) === q.type)
                                    ) {
                                        n(k, q.sibling),
                                            (E = l(q, R.props)),
                                            (E.ref = Rr(k, q, R)),
                                            (E.return = k),
                                            (k = E);
                                        break e;
                                    }
                                    n(k, q);
                                    break;
                                } else t(k, q);
                                q = q.sibling;
                            }
                            R.type === Z
                                ? ((E = Sn(R.props.children, k.mode, F, R.key)),
                                  (E.return = k),
                                  (k = E))
                                : ((F = qo(
                                      R.type,
                                      R.key,
                                      R.props,
                                      null,
                                      k.mode,
                                      F,
                                  )),
                                  (F.ref = Rr(k, E, R)),
                                  (F.return = k),
                                  (k = F));
                        }
                        return c(k);
                    case le:
                        e: {
                            for (q = R.key; E !== null; ) {
                                if (E.key === q)
                                    if (
                                        E.tag === 4 &&
                                        E.stateNode.containerInfo ===
                                            R.containerInfo &&
                                        E.stateNode.implementation ===
                                            R.implementation
                                    ) {
                                        n(k, E.sibling),
                                            (E = l(E, R.children || [])),
                                            (E.return = k),
                                            (k = E);
                                        break e;
                                    } else {
                                        n(k, E);
                                        break;
                                    }
                                else t(k, E);
                                E = E.sibling;
                            }
                            (E = ss(R, k.mode, F)), (E.return = k), (k = E);
                        }
                        return c(k);
                    case Be:
                        return (q = R._init), Ne(k, E, q(R._payload), F);
                }
                if (bn(R)) return $(k, E, R, F);
                if (K(R)) return V(k, E, R, F);
                ko(k, R);
            }
            return (typeof R == "string" && R !== "") || typeof R == "number"
                ? ((R = "" + R),
                  E !== null && E.tag === 6
                      ? (n(k, E.sibling),
                        (E = l(E, R)),
                        (E.return = k),
                        (k = E))
                      : (n(k, E),
                        (E = is(R, k.mode, F)),
                        (E.return = k),
                        (k = E)),
                  c(k))
                : n(k, E);
        }
        return Ne;
    }
    var Hn = ca(!0),
        fa = ca(!1),
        Ro = Xt(null),
        xo = null,
        $n = null,
        yi = null;
    function gi() {
        yi = $n = xo = null;
    }
    function vi(e) {
        var t = Ro.current;
        ge(Ro), (e._currentValue = t);
    }
    function wi(e, t, n) {
        for (; e !== null; ) {
            var r = e.alternate;
            if (
                ((e.childLanes & t) !== t
                    ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
                    : r !== null &&
                      (r.childLanes & t) !== t &&
                      (r.childLanes |= t),
                e === n)
            )
                break;
            e = e.return;
        }
    }
    function Vn(e, t) {
        (xo = e),
            (yi = $n = null),
            (e = e.dependencies),
            e !== null &&
                e.firstContext !== null &&
                (e.lanes & t && (et = !0), (e.firstContext = null));
    }
    function mt(e) {
        var t = e._currentValue;
        if (yi !== e)
            if (
                ((e = { context: e, memoizedValue: t, next: null }),
                $n === null)
            ) {
                if (xo === null) throw Error(s(308));
                ($n = e), (xo.dependencies = { lanes: 0, firstContext: e });
            } else $n = $n.next = e;
        return t;
    }
    var pn = null;
    function Si(e) {
        pn === null ? (pn = [e]) : pn.push(e);
    }
    function da(e, t, n, r) {
        var l = t.interleaved;
        return (
            l === null
                ? ((n.next = n), Si(t))
                : ((n.next = l.next), (l.next = n)),
            (t.interleaved = n),
            It(e, r)
        );
    }
    function It(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
            (e.childLanes |= t),
                (n = e.alternate),
                n !== null && (n.childLanes |= t),
                (n = e),
                (e = e.return);
        return n.tag === 3 ? n.stateNode : null;
    }
    var Zt = !1;
    function Ei(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
        };
    }
    function pa(e, t) {
        (e = e.updateQueue),
            t.updateQueue === e &&
                (t.updateQueue = {
                    baseState: e.baseState,
                    firstBaseUpdate: e.firstBaseUpdate,
                    lastBaseUpdate: e.lastBaseUpdate,
                    shared: e.shared,
                    effects: e.effects,
                });
    }
    function Ut(e, t) {
        return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
        };
    }
    function bt(e, t, n) {
        var r = e.updateQueue;
        if (r === null) return null;
        if (((r = r.shared), ie & 2)) {
            var l = r.pending;
            return (
                l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
                (r.pending = t),
                It(e, n)
            );
        }
        return (
            (l = r.interleaved),
            l === null
                ? ((t.next = t), Si(r))
                : ((t.next = l.next), (l.next = t)),
            (r.interleaved = t),
            It(e, n)
        );
    }
    function Po(e, t, n) {
        if (
            ((t = t.updateQueue),
            t !== null && ((t = t.shared), (n & 4194240) !== 0))
        ) {
            var r = t.lanes;
            (r &= e.pendingLanes), (n |= r), (t.lanes = n), Dl(e, n);
        }
    }
    function ha(e, t) {
        var n = e.updateQueue,
            r = e.alternate;
        if (r !== null && ((r = r.updateQueue), n === r)) {
            var l = null,
                u = null;
            if (((n = n.firstBaseUpdate), n !== null)) {
                do {
                    var c = {
                        eventTime: n.eventTime,
                        lane: n.lane,
                        tag: n.tag,
                        payload: n.payload,
                        callback: n.callback,
                        next: null,
                    };
                    u === null ? (l = u = c) : (u = u.next = c), (n = n.next);
                } while (n !== null);
                u === null ? (l = u = t) : (u = u.next = t);
            } else l = u = t;
            (n = {
                baseState: r.baseState,
                firstBaseUpdate: l,
                lastBaseUpdate: u,
                shared: r.shared,
                effects: r.effects,
            }),
                (e.updateQueue = n);
            return;
        }
        (e = n.lastBaseUpdate),
            e === null ? (n.firstBaseUpdate = t) : (e.next = t),
            (n.lastBaseUpdate = t);
    }
    function _o(e, t, n, r) {
        var l = e.updateQueue;
        Zt = !1;
        var u = l.firstBaseUpdate,
            c = l.lastBaseUpdate,
            g = l.shared.pending;
        if (g !== null) {
            l.shared.pending = null;
            var v = g,
                x = v.next;
            (v.next = null), c === null ? (u = x) : (c.next = x), (c = v);
            var M = e.alternate;
            M !== null &&
                ((M = M.updateQueue),
                (g = M.lastBaseUpdate),
                g !== c &&
                    (g === null ? (M.firstBaseUpdate = x) : (g.next = x),
                    (M.lastBaseUpdate = v)));
        }
        if (u !== null) {
            var z = l.baseState;
            (c = 0), (M = x = v = null), (g = u);
            do {
                var A = g.lane,
                    j = g.eventTime;
                if ((r & A) === A) {
                    M !== null &&
                        (M = M.next =
                            {
                                eventTime: j,
                                lane: 0,
                                tag: g.tag,
                                payload: g.payload,
                                callback: g.callback,
                                next: null,
                            });
                    e: {
                        var $ = e,
                            V = g;
                        switch (((A = t), (j = n), V.tag)) {
                            case 1:
                                if ((($ = V.payload), typeof $ == "function")) {
                                    z = $.call(j, z, A);
                                    break e;
                                }
                                z = $;
                                break e;
                            case 3:
                                $.flags = ($.flags & -65537) | 128;
                            case 0:
                                if (
                                    (($ = V.payload),
                                    (A =
                                        typeof $ == "function"
                                            ? $.call(j, z, A)
                                            : $),
                                    A == null)
                                )
                                    break e;
                                z = B({}, z, A);
                                break e;
                            case 2:
                                Zt = !0;
                        }
                    }
                    g.callback !== null &&
                        g.lane !== 0 &&
                        ((e.flags |= 64),
                        (A = l.effects),
                        A === null ? (l.effects = [g]) : A.push(g));
                } else
                    (j = {
                        eventTime: j,
                        lane: A,
                        tag: g.tag,
                        payload: g.payload,
                        callback: g.callback,
                        next: null,
                    }),
                        M === null ? ((x = M = j), (v = z)) : (M = M.next = j),
                        (c |= A);
                if (((g = g.next), g === null)) {
                    if (((g = l.shared.pending), g === null)) break;
                    (A = g),
                        (g = A.next),
                        (A.next = null),
                        (l.lastBaseUpdate = A),
                        (l.shared.pending = null);
                }
            } while (!0);
            if (
                (M === null && (v = z),
                (l.baseState = v),
                (l.firstBaseUpdate = x),
                (l.lastBaseUpdate = M),
                (t = l.shared.interleaved),
                t !== null)
            ) {
                l = t;
                do (c |= l.lane), (l = l.next);
                while (l !== t);
            } else u === null && (l.shared.lanes = 0);
            (yn |= c), (e.lanes = c), (e.memoizedState = z);
        }
    }
    function ma(e, t, n) {
        if (((e = t.effects), (t.effects = null), e !== null))
            for (t = 0; t < e.length; t++) {
                var r = e[t],
                    l = r.callback;
                if (l !== null) {
                    if (((r.callback = null), (r = n), typeof l != "function"))
                        throw Error(s(191, l));
                    l.call(r);
                }
            }
    }
    var xr = {},
        Nt = Xt(xr),
        Pr = Xt(xr),
        _r = Xt(xr);
    function hn(e) {
        if (e === xr) throw Error(s(174));
        return e;
    }
    function Ci(e, t) {
        switch ((me(_r, t), me(Pr, e), me(Nt, xr), (e = t.nodeType), e)) {
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : kl(null, "");
                break;
            default:
                (e = e === 8 ? t.parentNode : t),
                    (t = e.namespaceURI || null),
                    (e = e.tagName),
                    (t = kl(t, e));
        }
        ge(Nt), me(Nt, t);
    }
    function Wn() {
        ge(Nt), ge(Pr), ge(_r);
    }
    function ya(e) {
        hn(_r.current);
        var t = hn(Nt.current),
            n = kl(t, e.type);
        t !== n && (me(Pr, e), me(Nt, n));
    }
    function ki(e) {
        Pr.current === e && (ge(Nt), ge(Pr));
    }
    var Se = Xt(0);
    function To(e) {
        for (var t = e; t !== null; ) {
            if (t.tag === 13) {
                var n = t.memoizedState;
                if (
                    n !== null &&
                    ((n = n.dehydrated),
                    n === null || n.data === "$?" || n.data === "$!")
                )
                    return t;
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if (t.flags & 128) return t;
            } else if (t.child !== null) {
                (t.child.return = t), (t = t.child);
                continue;
            }
            if (t === e) break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) return null;
                t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
        }
        return null;
    }
    var Ri = [];
    function xi() {
        for (var e = 0; e < Ri.length; e++)
            Ri[e]._workInProgressVersionPrimary = null;
        Ri.length = 0;
    }
    var No = Y.ReactCurrentDispatcher,
        Pi = Y.ReactCurrentBatchConfig,
        mn = 0,
        Ee = null,
        Me = null,
        Ie = null,
        Oo = !1,
        Tr = !1,
        Nr = 0,
        gp = 0;
    function We() {
        throw Error(s(321));
    }
    function _i(e, t) {
        if (t === null) return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
            if (!St(e[n], t[n])) return !1;
        return !0;
    }
    function Ti(e, t, n, r, l, u) {
        if (
            ((mn = u),
            (Ee = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (No.current = e === null || e.memoizedState === null ? Ep : Cp),
            (e = n(r, l)),
            Tr)
        ) {
            u = 0;
            do {
                if (((Tr = !1), (Nr = 0), 25 <= u)) throw Error(s(301));
                (u += 1),
                    (Ie = Me = null),
                    (t.updateQueue = null),
                    (No.current = kp),
                    (e = n(r, l));
            } while (Tr);
        }
        if (
            ((No.current = Mo),
            (t = Me !== null && Me.next !== null),
            (mn = 0),
            (Ie = Me = Ee = null),
            (Oo = !1),
            t)
        )
            throw Error(s(300));
        return e;
    }
    function Ni() {
        var e = Nr !== 0;
        return (Nr = 0), e;
    }
    function Ot() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
        };
        return (
            Ie === null ? (Ee.memoizedState = Ie = e) : (Ie = Ie.next = e), Ie
        );
    }
    function yt() {
        if (Me === null) {
            var e = Ee.alternate;
            e = e !== null ? e.memoizedState : null;
        } else e = Me.next;
        var t = Ie === null ? Ee.memoizedState : Ie.next;
        if (t !== null) (Ie = t), (Me = e);
        else {
            if (e === null) throw Error(s(310));
            (Me = e),
                (e = {
                    memoizedState: Me.memoizedState,
                    baseState: Me.baseState,
                    baseQueue: Me.baseQueue,
                    queue: Me.queue,
                    next: null,
                }),
                Ie === null ? (Ee.memoizedState = Ie = e) : (Ie = Ie.next = e);
        }
        return Ie;
    }
    function Or(e, t) {
        return typeof t == "function" ? t(e) : t;
    }
    function Oi(e) {
        var t = yt(),
            n = t.queue;
        if (n === null) throw Error(s(311));
        n.lastRenderedReducer = e;
        var r = Me,
            l = r.baseQueue,
            u = n.pending;
        if (u !== null) {
            if (l !== null) {
                var c = l.next;
                (l.next = u.next), (u.next = c);
            }
            (r.baseQueue = l = u), (n.pending = null);
        }
        if (l !== null) {
            (u = l.next), (r = r.baseState);
            var g = (c = null),
                v = null,
                x = u;
            do {
                var M = x.lane;
                if ((mn & M) === M)
                    v !== null &&
                        (v = v.next =
                            {
                                lane: 0,
                                action: x.action,
                                hasEagerState: x.hasEagerState,
                                eagerState: x.eagerState,
                                next: null,
                            }),
                        (r = x.hasEagerState ? x.eagerState : e(r, x.action));
                else {
                    var z = {
                        lane: M,
                        action: x.action,
                        hasEagerState: x.hasEagerState,
                        eagerState: x.eagerState,
                        next: null,
                    };
                    v === null ? ((g = v = z), (c = r)) : (v = v.next = z),
                        (Ee.lanes |= M),
                        (yn |= M);
                }
                x = x.next;
            } while (x !== null && x !== u);
            v === null ? (c = r) : (v.next = g),
                St(r, t.memoizedState) || (et = !0),
                (t.memoizedState = r),
                (t.baseState = c),
                (t.baseQueue = v),
                (n.lastRenderedState = r);
        }
        if (((e = n.interleaved), e !== null)) {
            l = e;
            do (u = l.lane), (Ee.lanes |= u), (yn |= u), (l = l.next);
            while (l !== e);
        } else l === null && (n.lanes = 0);
        return [t.memoizedState, n.dispatch];
    }
    function Li(e) {
        var t = yt(),
            n = t.queue;
        if (n === null) throw Error(s(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch,
            l = n.pending,
            u = t.memoizedState;
        if (l !== null) {
            n.pending = null;
            var c = (l = l.next);
            do (u = e(u, c.action)), (c = c.next);
            while (c !== l);
            St(u, t.memoizedState) || (et = !0),
                (t.memoizedState = u),
                t.baseQueue === null && (t.baseState = u),
                (n.lastRenderedState = u);
        }
        return [u, r];
    }
    function ga() {}
    function va(e, t) {
        var n = Ee,
            r = yt(),
            l = t(),
            u = !St(r.memoizedState, l);
        if (
            (u && ((r.memoizedState = l), (et = !0)),
            (r = r.queue),
            Ai(Ea.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
                u ||
                (Ie !== null && Ie.memoizedState.tag & 1))
        ) {
            if (
                ((n.flags |= 2048),
                Lr(9, Sa.bind(null, n, r, l, t), void 0, null),
                Ue === null)
            )
                throw Error(s(349));
            mn & 30 || wa(n, t, l);
        }
        return l;
    }
    function wa(e, t, n) {
        (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            (t = Ee.updateQueue),
            t === null
                ? ((t = { lastEffect: null, stores: null }),
                  (Ee.updateQueue = t),
                  (t.stores = [e]))
                : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
    }
    function Sa(e, t, n, r) {
        (t.value = n), (t.getSnapshot = r), Ca(t) && ka(e);
    }
    function Ea(e, t, n) {
        return n(function () {
            Ca(t) && ka(e);
        });
    }
    function Ca(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !St(e, n);
        } catch {
            return !0;
        }
    }
    function ka(e) {
        var t = It(e, 1);
        t !== null && xt(t, e, 1, -1);
    }
    function Ra(e) {
        var t = Ot();
        return (
            typeof e == "function" && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Or,
                lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = Sp.bind(null, Ee, e)),
            [t.memoizedState, e]
        );
    }
    function Lr(e, t, n, r) {
        return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            (t = Ee.updateQueue),
            t === null
                ? ((t = { lastEffect: null, stores: null }),
                  (Ee.updateQueue = t),
                  (t.lastEffect = e.next = e))
                : ((n = t.lastEffect),
                  n === null
                      ? (t.lastEffect = e.next = e)
                      : ((r = n.next),
                        (n.next = e),
                        (e.next = r),
                        (t.lastEffect = e))),
            e
        );
    }
    function xa() {
        return yt().memoizedState;
    }
    function Lo(e, t, n, r) {
        var l = Ot();
        (Ee.flags |= e),
            (l.memoizedState = Lr(1 | t, n, void 0, r === void 0 ? null : r));
    }
    function Ao(e, t, n, r) {
        var l = yt();
        r = r === void 0 ? null : r;
        var u = void 0;
        if (Me !== null) {
            var c = Me.memoizedState;
            if (((u = c.destroy), r !== null && _i(r, c.deps))) {
                l.memoizedState = Lr(t, n, u, r);
                return;
            }
        }
        (Ee.flags |= e), (l.memoizedState = Lr(1 | t, n, u, r));
    }
    function Pa(e, t) {
        return Lo(8390656, 8, e, t);
    }
    function Ai(e, t) {
        return Ao(2048, 8, e, t);
    }
    function _a(e, t) {
        return Ao(4, 2, e, t);
    }
    function Ta(e, t) {
        return Ao(4, 4, e, t);
    }
    function Na(e, t) {
        if (typeof t == "function")
            return (
                (e = e()),
                t(e),
                function () {
                    t(null);
                }
            );
        if (t != null)
            return (
                (e = e()),
                (t.current = e),
                function () {
                    t.current = null;
                }
            );
    }
    function Oa(e, t, n) {
        return (
            (n = n != null ? n.concat([e]) : null),
            Ao(4, 4, Na.bind(null, t, e), n)
        );
    }
    function Mi() {}
    function La(e, t) {
        var n = yt();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && _i(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
    }
    function Aa(e, t) {
        var n = yt();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && _i(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
    }
    function Ma(e, t, n) {
        return mn & 21
            ? (St(n, t) ||
                  ((n = au()), (Ee.lanes |= n), (yn |= n), (e.baseState = !0)),
              t)
            : (e.baseState && ((e.baseState = !1), (et = !0)),
              (e.memoizedState = n));
    }
    function vp(e, t) {
        var n = de;
        (de = n !== 0 && 4 > n ? n : 4), e(!0);
        var r = Pi.transition;
        Pi.transition = {};
        try {
            e(!1), t();
        } finally {
            (de = n), (Pi.transition = r);
        }
    }
    function za() {
        return yt().memoizedState;
    }
    function wp(e, t, n) {
        var r = rn(e);
        if (
            ((n = {
                lane: r,
                action: n,
                hasEagerState: !1,
                eagerState: null,
                next: null,
            }),
            Da(e))
        )
            Fa(t, n);
        else if (((n = da(e, t, n, r)), n !== null)) {
            var l = Je();
            xt(n, e, r, l), Ia(n, t, r);
        }
    }
    function Sp(e, t, n) {
        var r = rn(e),
            l = {
                lane: r,
                action: n,
                hasEagerState: !1,
                eagerState: null,
                next: null,
            };
        if (Da(e)) Fa(t, l);
        else {
            var u = e.alternate;
            if (
                e.lanes === 0 &&
                (u === null || u.lanes === 0) &&
                ((u = t.lastRenderedReducer), u !== null)
            )
                try {
                    var c = t.lastRenderedState,
                        g = u(c, n);
                    if (
                        ((l.hasEagerState = !0), (l.eagerState = g), St(g, c))
                    ) {
                        var v = t.interleaved;
                        v === null
                            ? ((l.next = l), Si(t))
                            : ((l.next = v.next), (v.next = l)),
                            (t.interleaved = l);
                        return;
                    }
                } catch {
                } finally {
                }
            (n = da(e, t, l, r)),
                n !== null && ((l = Je()), xt(n, e, r, l), Ia(n, t, r));
        }
    }
    function Da(e) {
        var t = e.alternate;
        return e === Ee || (t !== null && t === Ee);
    }
    function Fa(e, t) {
        Tr = Oo = !0;
        var n = e.pending;
        n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
    }
    function Ia(e, t, n) {
        if (n & 4194240) {
            var r = t.lanes;
            (r &= e.pendingLanes), (n |= r), (t.lanes = n), Dl(e, n);
        }
    }
    var Mo = {
            readContext: mt,
            useCallback: We,
            useContext: We,
            useEffect: We,
            useImperativeHandle: We,
            useInsertionEffect: We,
            useLayoutEffect: We,
            useMemo: We,
            useReducer: We,
            useRef: We,
            useState: We,
            useDebugValue: We,
            useDeferredValue: We,
            useTransition: We,
            useMutableSource: We,
            useSyncExternalStore: We,
            useId: We,
            unstable_isNewReconciler: !1,
        },
        Ep = {
            readContext: mt,
            useCallback: function (e, t) {
                return (Ot().memoizedState = [e, t === void 0 ? null : t]), e;
            },
            useContext: mt,
            useEffect: Pa,
            useImperativeHandle: function (e, t, n) {
                return (
                    (n = n != null ? n.concat([e]) : null),
                    Lo(4194308, 4, Na.bind(null, t, e), n)
                );
            },
            useLayoutEffect: function (e, t) {
                return Lo(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
                return Lo(4, 2, e, t);
            },
            useMemo: function (e, t) {
                var n = Ot();
                return (
                    (t = t === void 0 ? null : t),
                    (e = e()),
                    (n.memoizedState = [e, t]),
                    e
                );
            },
            useReducer: function (e, t, n) {
                var r = Ot();
                return (
                    (t = n !== void 0 ? n(t) : t),
                    (r.memoizedState = r.baseState = t),
                    (e = {
                        pending: null,
                        interleaved: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: e,
                        lastRenderedState: t,
                    }),
                    (r.queue = e),
                    (e = e.dispatch = wp.bind(null, Ee, e)),
                    [r.memoizedState, e]
                );
            },
            useRef: function (e) {
                var t = Ot();
                return (e = { current: e }), (t.memoizedState = e);
            },
            useState: Ra,
            useDebugValue: Mi,
            useDeferredValue: function (e) {
                return (Ot().memoizedState = e);
            },
            useTransition: function () {
                var e = Ra(!1),
                    t = e[0];
                return (
                    (e = vp.bind(null, e[1])), (Ot().memoizedState = e), [t, e]
                );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
                var r = Ee,
                    l = Ot();
                if (we) {
                    if (n === void 0) throw Error(s(407));
                    n = n();
                } else {
                    if (((n = t()), Ue === null)) throw Error(s(349));
                    mn & 30 || wa(r, t, n);
                }
                l.memoizedState = n;
                var u = { value: n, getSnapshot: t };
                return (
                    (l.queue = u),
                    Pa(Ea.bind(null, r, u, e), [e]),
                    (r.flags |= 2048),
                    Lr(9, Sa.bind(null, r, u, n, t), void 0, null),
                    n
                );
            },
            useId: function () {
                var e = Ot(),
                    t = Ue.identifierPrefix;
                if (we) {
                    var n = Ft,
                        r = Dt;
                    (n = (r & ~(1 << (32 - wt(r) - 1))).toString(32) + n),
                        (t = ":" + t + "R" + n),
                        (n = Nr++),
                        0 < n && (t += "H" + n.toString(32)),
                        (t += ":");
                } else (n = gp++), (t = ":" + t + "r" + n.toString(32) + ":");
                return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
        },
        Cp = {
            readContext: mt,
            useCallback: La,
            useContext: mt,
            useEffect: Ai,
            useImperativeHandle: Oa,
            useInsertionEffect: _a,
            useLayoutEffect: Ta,
            useMemo: Aa,
            useReducer: Oi,
            useRef: xa,
            useState: function () {
                return Oi(Or);
            },
            useDebugValue: Mi,
            useDeferredValue: function (e) {
                var t = yt();
                return Ma(t, Me.memoizedState, e);
            },
            useTransition: function () {
                var e = Oi(Or)[0],
                    t = yt().memoizedState;
                return [e, t];
            },
            useMutableSource: ga,
            useSyncExternalStore: va,
            useId: za,
            unstable_isNewReconciler: !1,
        },
        kp = {
            readContext: mt,
            useCallback: La,
            useContext: mt,
            useEffect: Ai,
            useImperativeHandle: Oa,
            useInsertionEffect: _a,
            useLayoutEffect: Ta,
            useMemo: Aa,
            useReducer: Li,
            useRef: xa,
            useState: function () {
                return Li(Or);
            },
            useDebugValue: Mi,
            useDeferredValue: function (e) {
                var t = yt();
                return Me === null
                    ? (t.memoizedState = e)
                    : Ma(t, Me.memoizedState, e);
            },
            useTransition: function () {
                var e = Li(Or)[0],
                    t = yt().memoizedState;
                return [e, t];
            },
            useMutableSource: ga,
            useSyncExternalStore: va,
            useId: za,
            unstable_isNewReconciler: !1,
        };
    function Ct(e, t) {
        if (e && e.defaultProps) {
            (t = B({}, t)), (e = e.defaultProps);
            for (var n in e) t[n] === void 0 && (t[n] = e[n]);
            return t;
        }
        return t;
    }
    function zi(e, t, n, r) {
        (t = e.memoizedState),
            (n = n(r, t)),
            (n = n == null ? t : B({}, t, n)),
            (e.memoizedState = n),
            e.lanes === 0 && (e.updateQueue.baseState = n);
    }
    var zo = {
        isMounted: function (e) {
            return (e = e._reactInternals) ? un(e) === e : !1;
        },
        enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = Je(),
                l = rn(e),
                u = Ut(r, l);
            (u.payload = t),
                n != null && (u.callback = n),
                (t = bt(e, u, l)),
                t !== null && (xt(t, e, l, r), Po(t, e, l));
        },
        enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = Je(),
                l = rn(e),
                u = Ut(r, l);
            (u.tag = 1),
                (u.payload = t),
                n != null && (u.callback = n),
                (t = bt(e, u, l)),
                t !== null && (xt(t, e, l, r), Po(t, e, l));
        },
        enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = Je(),
                r = rn(e),
                l = Ut(n, r);
            (l.tag = 2),
                t != null && (l.callback = t),
                (t = bt(e, l, r)),
                t !== null && (xt(t, e, r, n), Po(t, e, r));
        },
    };
    function Ua(e, t, n, r, l, u, c) {
        return (
            (e = e.stateNode),
            typeof e.shouldComponentUpdate == "function"
                ? e.shouldComponentUpdate(r, u, c)
                : t.prototype && t.prototype.isPureReactComponent
                ? !gr(n, r) || !gr(l, u)
                : !0
        );
    }
    function ja(e, t, n) {
        var r = !1,
            l = Yt,
            u = t.contextType;
        return (
            typeof u == "object" && u !== null
                ? (u = mt(u))
                : ((l = be(t) ? cn : Ve.current),
                  (r = t.contextTypes),
                  (u = (r = r != null) ? In(e, l) : Yt)),
            (t = new t(n, u)),
            (e.memoizedState =
                t.state !== null && t.state !== void 0 ? t.state : null),
            (t.updater = zo),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
                ((e = e.stateNode),
                (e.__reactInternalMemoizedUnmaskedChildContext = l),
                (e.__reactInternalMemoizedMaskedChildContext = u)),
            t
        );
    }
    function Ba(e, t, n, r) {
        (e = t.state),
            typeof t.componentWillReceiveProps == "function" &&
                t.componentWillReceiveProps(n, r),
            typeof t.UNSAFE_componentWillReceiveProps == "function" &&
                t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && zo.enqueueReplaceState(t, t.state, null);
    }
    function Di(e, t, n, r) {
        var l = e.stateNode;
        (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Ei(e);
        var u = t.contextType;
        typeof u == "object" && u !== null
            ? (l.context = mt(u))
            : ((u = be(t) ? cn : Ve.current), (l.context = In(e, u))),
            (l.state = e.memoizedState),
            (u = t.getDerivedStateFromProps),
            typeof u == "function" &&
                (zi(e, t, u, n), (l.state = e.memoizedState)),
            typeof t.getDerivedStateFromProps == "function" ||
                typeof l.getSnapshotBeforeUpdate == "function" ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                    typeof l.componentWillMount != "function") ||
                ((t = l.state),
                typeof l.componentWillMount == "function" &&
                    l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                    l.UNSAFE_componentWillMount(),
                t !== l.state && zo.enqueueReplaceState(l, l.state, null),
                _o(e, n, l, r),
                (l.state = e.memoizedState)),
            typeof l.componentDidMount == "function" && (e.flags |= 4194308);
    }
    function Qn(e, t) {
        try {
            var n = "",
                r = t;
            do (n += se(r)), (r = r.return);
            while (r);
            var l = n;
        } catch (u) {
            l =
                `
Error generating stack: ` +
                u.message +
                `
` +
                u.stack;
        }
        return { value: e, source: t, stack: l, digest: null };
    }
    function Fi(e, t, n) {
        return { value: e, source: null, stack: n ?? null, digest: t ?? null };
    }
    function Ii(e, t) {
        try {
            console.error(t.value);
        } catch (n) {
            setTimeout(function () {
                throw n;
            });
        }
    }
    var Rp = typeof WeakMap == "function" ? WeakMap : Map;
    function Ha(e, t, n) {
        (n = Ut(-1, n)), (n.tag = 3), (n.payload = { element: null });
        var r = t.value;
        return (
            (n.callback = function () {
                Ho || ((Ho = !0), (Zi = r)), Ii(e, t);
            }),
            n
        );
    }
    function $a(e, t, n) {
        (n = Ut(-1, n)), (n.tag = 3);
        var r = e.type.getDerivedStateFromError;
        if (typeof r == "function") {
            var l = t.value;
            (n.payload = function () {
                return r(l);
            }),
                (n.callback = function () {
                    Ii(e, t);
                });
        }
        var u = e.stateNode;
        return (
            u !== null &&
                typeof u.componentDidCatch == "function" &&
                (n.callback = function () {
                    Ii(e, t),
                        typeof r != "function" &&
                            (tn === null
                                ? (tn = new Set([this]))
                                : tn.add(this));
                    var c = t.stack;
                    this.componentDidCatch(t.value, {
                        componentStack: c !== null ? c : "",
                    });
                }),
            n
        );
    }
    function Va(e, t, n) {
        var r = e.pingCache;
        if (r === null) {
            r = e.pingCache = new Rp();
            var l = new Set();
            r.set(t, l);
        } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
        l.has(n) || (l.add(n), (e = Up.bind(null, e, t, n)), t.then(e, e));
    }
    function Wa(e) {
        do {
            var t;
            if (
                ((t = e.tag === 13) &&
                    ((t = e.memoizedState),
                    (t = t !== null ? t.dehydrated !== null : !0)),
                t)
            )
                return e;
            e = e.return;
        } while (e !== null);
        return null;
    }
    function Qa(e, t, n, r, l) {
        return e.mode & 1
            ? ((e.flags |= 65536), (e.lanes = l), e)
            : (e === t
                  ? (e.flags |= 65536)
                  : ((e.flags |= 128),
                    (n.flags |= 131072),
                    (n.flags &= -52805),
                    n.tag === 1 &&
                        (n.alternate === null
                            ? (n.tag = 17)
                            : ((t = Ut(-1, 1)), (t.tag = 2), bt(n, t, 1))),
                    (n.lanes |= 1)),
              e);
    }
    var xp = Y.ReactCurrentOwner,
        et = !1;
    function Ye(e, t, n, r) {
        t.child = e === null ? fa(t, null, n, r) : Hn(t, e.child, n, r);
    }
    function Ka(e, t, n, r, l) {
        n = n.render;
        var u = t.ref;
        return (
            Vn(t, l),
            (r = Ti(e, t, n, r, u, l)),
            (n = Ni()),
            e !== null && !et
                ? ((t.updateQueue = e.updateQueue),
                  (t.flags &= -2053),
                  (e.lanes &= ~l),
                  jt(e, t, l))
                : (we && n && fi(t), (t.flags |= 1), Ye(e, t, r, l), t.child)
        );
    }
    function qa(e, t, n, r, l) {
        if (e === null) {
            var u = n.type;
            return typeof u == "function" &&
                !ls(u) &&
                u.defaultProps === void 0 &&
                n.compare === null &&
                n.defaultProps === void 0
                ? ((t.tag = 15), (t.type = u), Ga(e, t, u, r, l))
                : ((e = qo(n.type, null, r, t, t.mode, l)),
                  (e.ref = t.ref),
                  (e.return = t),
                  (t.child = e));
        }
        if (((u = e.child), !(e.lanes & l))) {
            var c = u.memoizedProps;
            if (
                ((n = n.compare),
                (n = n !== null ? n : gr),
                n(c, r) && e.ref === t.ref)
            )
                return jt(e, t, l);
        }
        return (
            (t.flags |= 1),
            (e = ln(u, r)),
            (e.ref = t.ref),
            (e.return = t),
            (t.child = e)
        );
    }
    function Ga(e, t, n, r, l) {
        if (e !== null) {
            var u = e.memoizedProps;
            if (gr(u, r) && e.ref === t.ref)
                if (((et = !1), (t.pendingProps = r = u), (e.lanes & l) !== 0))
                    e.flags & 131072 && (et = !0);
                else return (t.lanes = e.lanes), jt(e, t, l);
        }
        return Ui(e, t, n, r, l);
    }
    function Xa(e, t, n) {
        var r = t.pendingProps,
            l = r.children,
            u = e !== null ? e.memoizedState : null;
        if (r.mode === "hidden")
            if (!(t.mode & 1))
                (t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null,
                }),
                    me(qn, ct),
                    (ct |= n);
            else {
                if (!(n & 1073741824))
                    return (
                        (e = u !== null ? u.baseLanes | n : n),
                        (t.lanes = t.childLanes = 1073741824),
                        (t.memoizedState = {
                            baseLanes: e,
                            cachePool: null,
                            transitions: null,
                        }),
                        (t.updateQueue = null),
                        me(qn, ct),
                        (ct |= e),
                        null
                    );
                (t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null,
                }),
                    (r = u !== null ? u.baseLanes : n),
                    me(qn, ct),
                    (ct |= r);
            }
        else
            u !== null
                ? ((r = u.baseLanes | n), (t.memoizedState = null))
                : (r = n),
                me(qn, ct),
                (ct |= r);
        return Ye(e, t, l, n), t.child;
    }
    function Ya(e, t) {
        var n = t.ref;
        ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
    }
    function Ui(e, t, n, r, l) {
        var u = be(n) ? cn : Ve.current;
        return (
            (u = In(t, u)),
            Vn(t, l),
            (n = Ti(e, t, n, r, u, l)),
            (r = Ni()),
            e !== null && !et
                ? ((t.updateQueue = e.updateQueue),
                  (t.flags &= -2053),
                  (e.lanes &= ~l),
                  jt(e, t, l))
                : (we && r && fi(t), (t.flags |= 1), Ye(e, t, n, l), t.child)
        );
    }
    function Ja(e, t, n, r, l) {
        if (be(n)) {
            var u = !0;
            vo(t);
        } else u = !1;
        if ((Vn(t, l), t.stateNode === null))
            Fo(e, t), ja(t, n, r), Di(t, n, r, l), (r = !0);
        else if (e === null) {
            var c = t.stateNode,
                g = t.memoizedProps;
            c.props = g;
            var v = c.context,
                x = n.contextType;
            typeof x == "object" && x !== null
                ? (x = mt(x))
                : ((x = be(n) ? cn : Ve.current), (x = In(t, x)));
            var M = n.getDerivedStateFromProps,
                z =
                    typeof M == "function" ||
                    typeof c.getSnapshotBeforeUpdate == "function";
            z ||
                (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
                    typeof c.componentWillReceiveProps != "function") ||
                ((g !== r || v !== x) && Ba(t, c, r, x)),
                (Zt = !1);
            var A = t.memoizedState;
            (c.state = A),
                _o(t, r, c, l),
                (v = t.memoizedState),
                g !== r || A !== v || Ze.current || Zt
                    ? (typeof M == "function" &&
                          (zi(t, n, M, r), (v = t.memoizedState)),
                      (g = Zt || Ua(t, n, g, r, A, v, x))
                          ? (z ||
                                (typeof c.UNSAFE_componentWillMount !=
                                    "function" &&
                                    typeof c.componentWillMount !=
                                        "function") ||
                                (typeof c.componentWillMount == "function" &&
                                    c.componentWillMount(),
                                typeof c.UNSAFE_componentWillMount ==
                                    "function" &&
                                    c.UNSAFE_componentWillMount()),
                            typeof c.componentDidMount == "function" &&
                                (t.flags |= 4194308))
                          : (typeof c.componentDidMount == "function" &&
                                (t.flags |= 4194308),
                            (t.memoizedProps = r),
                            (t.memoizedState = v)),
                      (c.props = r),
                      (c.state = v),
                      (c.context = x),
                      (r = g))
                    : (typeof c.componentDidMount == "function" &&
                          (t.flags |= 4194308),
                      (r = !1));
        } else {
            (c = t.stateNode),
                pa(e, t),
                (g = t.memoizedProps),
                (x = t.type === t.elementType ? g : Ct(t.type, g)),
                (c.props = x),
                (z = t.pendingProps),
                (A = c.context),
                (v = n.contextType),
                typeof v == "object" && v !== null
                    ? (v = mt(v))
                    : ((v = be(n) ? cn : Ve.current), (v = In(t, v)));
            var j = n.getDerivedStateFromProps;
            (M =
                typeof j == "function" ||
                typeof c.getSnapshotBeforeUpdate == "function") ||
                (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
                    typeof c.componentWillReceiveProps != "function") ||
                ((g !== z || A !== v) && Ba(t, c, r, v)),
                (Zt = !1),
                (A = t.memoizedState),
                (c.state = A),
                _o(t, r, c, l);
            var $ = t.memoizedState;
            g !== z || A !== $ || Ze.current || Zt
                ? (typeof j == "function" &&
                      (zi(t, n, j, r), ($ = t.memoizedState)),
                  (x = Zt || Ua(t, n, x, r, A, $, v) || !1)
                      ? (M ||
                            (typeof c.UNSAFE_componentWillUpdate !=
                                "function" &&
                                typeof c.componentWillUpdate != "function") ||
                            (typeof c.componentWillUpdate == "function" &&
                                c.componentWillUpdate(r, $, v),
                            typeof c.UNSAFE_componentWillUpdate == "function" &&
                                c.UNSAFE_componentWillUpdate(r, $, v)),
                        typeof c.componentDidUpdate == "function" &&
                            (t.flags |= 4),
                        typeof c.getSnapshotBeforeUpdate == "function" &&
                            (t.flags |= 1024))
                      : (typeof c.componentDidUpdate != "function" ||
                            (g === e.memoizedProps && A === e.memoizedState) ||
                            (t.flags |= 4),
                        typeof c.getSnapshotBeforeUpdate != "function" ||
                            (g === e.memoizedProps && A === e.memoizedState) ||
                            (t.flags |= 1024),
                        (t.memoizedProps = r),
                        (t.memoizedState = $)),
                  (c.props = r),
                  (c.state = $),
                  (c.context = v),
                  (r = x))
                : (typeof c.componentDidUpdate != "function" ||
                      (g === e.memoizedProps && A === e.memoizedState) ||
                      (t.flags |= 4),
                  typeof c.getSnapshotBeforeUpdate != "function" ||
                      (g === e.memoizedProps && A === e.memoizedState) ||
                      (t.flags |= 1024),
                  (r = !1));
        }
        return ji(e, t, n, r, u, l);
    }
    function ji(e, t, n, r, l, u) {
        Ya(e, t);
        var c = (t.flags & 128) !== 0;
        if (!r && !c) return l && na(t, n, !1), jt(e, t, u);
        (r = t.stateNode), (xp.current = t);
        var g =
            c && typeof n.getDerivedStateFromError != "function"
                ? null
                : r.render();
        return (
            (t.flags |= 1),
            e !== null && c
                ? ((t.child = Hn(t, e.child, null, u)),
                  (t.child = Hn(t, null, g, u)))
                : Ye(e, t, g, u),
            (t.memoizedState = r.state),
            l && na(t, n, !0),
            t.child
        );
    }
    function Za(e) {
        var t = e.stateNode;
        t.pendingContext
            ? ea(e, t.pendingContext, t.pendingContext !== t.context)
            : t.context && ea(e, t.context, !1),
            Ci(e, t.containerInfo);
    }
    function ba(e, t, n, r, l) {
        return Bn(), mi(l), (t.flags |= 256), Ye(e, t, n, r), t.child;
    }
    var Bi = { dehydrated: null, treeContext: null, retryLane: 0 };
    function Hi(e) {
        return { baseLanes: e, cachePool: null, transitions: null };
    }
    function ec(e, t, n) {
        var r = t.pendingProps,
            l = Se.current,
            u = !1,
            c = (t.flags & 128) !== 0,
            g;
        if (
            ((g = c) ||
                (g =
                    e !== null && e.memoizedState === null
                        ? !1
                        : (l & 2) !== 0),
            g
                ? ((u = !0), (t.flags &= -129))
                : (e === null || e.memoizedState !== null) && (l |= 1),
            me(Se, l & 1),
            e === null)
        )
            return (
                hi(t),
                (e = t.memoizedState),
                e !== null && ((e = e.dehydrated), e !== null)
                    ? (t.mode & 1
                          ? e.data === "$!"
                              ? (t.lanes = 8)
                              : (t.lanes = 1073741824)
                          : (t.lanes = 1),
                      null)
                    : ((c = r.children),
                      (e = r.fallback),
                      u
                          ? ((r = t.mode),
                            (u = t.child),
                            (c = { mode: "hidden", children: c }),
                            !(r & 1) && u !== null
                                ? ((u.childLanes = 0), (u.pendingProps = c))
                                : (u = Go(c, r, 0, null)),
                            (e = Sn(e, r, n, null)),
                            (u.return = t),
                            (e.return = t),
                            (u.sibling = e),
                            (t.child = u),
                            (t.child.memoizedState = Hi(n)),
                            (t.memoizedState = Bi),
                            e)
                          : $i(t, c))
            );
        if (
            ((l = e.memoizedState),
            l !== null && ((g = l.dehydrated), g !== null))
        )
            return Pp(e, t, c, r, g, l, n);
        if (u) {
            (u = r.fallback), (c = t.mode), (l = e.child), (g = l.sibling);
            var v = { mode: "hidden", children: r.children };
            return (
                !(c & 1) && t.child !== l
                    ? ((r = t.child),
                      (r.childLanes = 0),
                      (r.pendingProps = v),
                      (t.deletions = null))
                    : ((r = ln(l, v)),
                      (r.subtreeFlags = l.subtreeFlags & 14680064)),
                g !== null
                    ? (u = ln(g, u))
                    : ((u = Sn(u, c, n, null)), (u.flags |= 2)),
                (u.return = t),
                (r.return = t),
                (r.sibling = u),
                (t.child = r),
                (r = u),
                (u = t.child),
                (c = e.child.memoizedState),
                (c =
                    c === null
                        ? Hi(n)
                        : {
                              baseLanes: c.baseLanes | n,
                              cachePool: null,
                              transitions: c.transitions,
                          }),
                (u.memoizedState = c),
                (u.childLanes = e.childLanes & ~n),
                (t.memoizedState = Bi),
                r
            );
        }
        return (
            (u = e.child),
            (e = u.sibling),
            (r = ln(u, { mode: "visible", children: r.children })),
            !(t.mode & 1) && (r.lanes = n),
            (r.return = t),
            (r.sibling = null),
            e !== null &&
                ((n = t.deletions),
                n === null
                    ? ((t.deletions = [e]), (t.flags |= 16))
                    : n.push(e)),
            (t.child = r),
            (t.memoizedState = null),
            r
        );
    }
    function $i(e, t) {
        return (
            (t = Go({ mode: "visible", children: t }, e.mode, 0, null)),
            (t.return = e),
            (e.child = t)
        );
    }
    function Do(e, t, n, r) {
        return (
            r !== null && mi(r),
            Hn(t, e.child, null, n),
            (e = $i(t, t.pendingProps.children)),
            (e.flags |= 2),
            (t.memoizedState = null),
            e
        );
    }
    function Pp(e, t, n, r, l, u, c) {
        if (n)
            return t.flags & 256
                ? ((t.flags &= -257), (r = Fi(Error(s(422)))), Do(e, t, c, r))
                : t.memoizedState !== null
                ? ((t.child = e.child), (t.flags |= 128), null)
                : ((u = r.fallback),
                  (l = t.mode),
                  (r = Go(
                      { mode: "visible", children: r.children },
                      l,
                      0,
                      null,
                  )),
                  (u = Sn(u, l, c, null)),
                  (u.flags |= 2),
                  (r.return = t),
                  (u.return = t),
                  (r.sibling = u),
                  (t.child = r),
                  t.mode & 1 && Hn(t, e.child, null, c),
                  (t.child.memoizedState = Hi(c)),
                  (t.memoizedState = Bi),
                  u);
        if (!(t.mode & 1)) return Do(e, t, c, null);
        if (l.data === "$!") {
            if (((r = l.nextSibling && l.nextSibling.dataset), r))
                var g = r.dgst;
            return (
                (r = g),
                (u = Error(s(419))),
                (r = Fi(u, r, void 0)),
                Do(e, t, c, r)
            );
        }
        if (((g = (c & e.childLanes) !== 0), et || g)) {
            if (((r = Ue), r !== null)) {
                switch (c & -c) {
                    case 4:
                        l = 2;
                        break;
                    case 16:
                        l = 8;
                        break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                        l = 32;
                        break;
                    case 536870912:
                        l = 268435456;
                        break;
                    default:
                        l = 0;
                }
                (l = l & (r.suspendedLanes | c) ? 0 : l),
                    l !== 0 &&
                        l !== u.retryLane &&
                        ((u.retryLane = l), It(e, l), xt(r, e, l, -1));
            }
            return os(), (r = Fi(Error(s(421)))), Do(e, t, c, r);
        }
        return l.data === "$?"
            ? ((t.flags |= 128),
              (t.child = e.child),
              (t = jp.bind(null, e)),
              (l._reactRetry = t),
              null)
            : ((e = u.treeContext),
              (at = Gt(l.nextSibling)),
              (ut = t),
              (we = !0),
              (Et = null),
              e !== null &&
                  ((pt[ht++] = Dt),
                  (pt[ht++] = Ft),
                  (pt[ht++] = fn),
                  (Dt = e.id),
                  (Ft = e.overflow),
                  (fn = t)),
              (t = $i(t, r.children)),
              (t.flags |= 4096),
              t);
    }
    function tc(e, t, n) {
        e.lanes |= t;
        var r = e.alternate;
        r !== null && (r.lanes |= t), wi(e.return, t, n);
    }
    function Vi(e, t, n, r, l) {
        var u = e.memoizedState;
        u === null
            ? (e.memoizedState = {
                  isBackwards: t,
                  rendering: null,
                  renderingStartTime: 0,
                  last: r,
                  tail: n,
                  tailMode: l,
              })
            : ((u.isBackwards = t),
              (u.rendering = null),
              (u.renderingStartTime = 0),
              (u.last = r),
              (u.tail = n),
              (u.tailMode = l));
    }
    function nc(e, t, n) {
        var r = t.pendingProps,
            l = r.revealOrder,
            u = r.tail;
        if ((Ye(e, t, r.children, n), (r = Se.current), r & 2))
            (r = (r & 1) | 2), (t.flags |= 128);
        else {
            if (e !== null && e.flags & 128)
                e: for (e = t.child; e !== null; ) {
                    if (e.tag === 13) e.memoizedState !== null && tc(e, n, t);
                    else if (e.tag === 19) tc(e, n, t);
                    else if (e.child !== null) {
                        (e.child.return = e), (e = e.child);
                        continue;
                    }
                    if (e === t) break e;
                    for (; e.sibling === null; ) {
                        if (e.return === null || e.return === t) break e;
                        e = e.return;
                    }
                    (e.sibling.return = e.return), (e = e.sibling);
                }
            r &= 1;
        }
        if ((me(Se, r), !(t.mode & 1))) t.memoizedState = null;
        else
            switch (l) {
                case "forwards":
                    for (n = t.child, l = null; n !== null; )
                        (e = n.alternate),
                            e !== null && To(e) === null && (l = n),
                            (n = n.sibling);
                    (n = l),
                        n === null
                            ? ((l = t.child), (t.child = null))
                            : ((l = n.sibling), (n.sibling = null)),
                        Vi(t, !1, l, n, u);
                    break;
                case "backwards":
                    for (n = null, l = t.child, t.child = null; l !== null; ) {
                        if (((e = l.alternate), e !== null && To(e) === null)) {
                            t.child = l;
                            break;
                        }
                        (e = l.sibling), (l.sibling = n), (n = l), (l = e);
                    }
                    Vi(t, !0, n, null, u);
                    break;
                case "together":
                    Vi(t, !1, null, null, void 0);
                    break;
                default:
                    t.memoizedState = null;
            }
        return t.child;
    }
    function Fo(e, t) {
        !(t.mode & 1) &&
            e !== null &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
    }
    function jt(e, t, n) {
        if (
            (e !== null && (t.dependencies = e.dependencies),
            (yn |= t.lanes),
            !(n & t.childLanes))
        )
            return null;
        if (e !== null && t.child !== e.child) throw Error(s(153));
        if (t.child !== null) {
            for (
                e = t.child,
                    n = ln(e, e.pendingProps),
                    t.child = n,
                    n.return = t;
                e.sibling !== null;

            )
                (e = e.sibling),
                    (n = n.sibling = ln(e, e.pendingProps)),
                    (n.return = t);
            n.sibling = null;
        }
        return t.child;
    }
    function _p(e, t, n) {
        switch (t.tag) {
            case 3:
                Za(t), Bn();
                break;
            case 5:
                ya(t);
                break;
            case 1:
                be(t.type) && vo(t);
                break;
            case 4:
                Ci(t, t.stateNode.containerInfo);
                break;
            case 10:
                var r = t.type._context,
                    l = t.memoizedProps.value;
                me(Ro, r._currentValue), (r._currentValue = l);
                break;
            case 13:
                if (((r = t.memoizedState), r !== null))
                    return r.dehydrated !== null
                        ? (me(Se, Se.current & 1), (t.flags |= 128), null)
                        : n & t.child.childLanes
                        ? ec(e, t, n)
                        : (me(Se, Se.current & 1),
                          (e = jt(e, t, n)),
                          e !== null ? e.sibling : null);
                me(Se, Se.current & 1);
                break;
            case 19:
                if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
                    if (r) return nc(e, t, n);
                    t.flags |= 128;
                }
                if (
                    ((l = t.memoizedState),
                    l !== null &&
                        ((l.rendering = null),
                        (l.tail = null),
                        (l.lastEffect = null)),
                    me(Se, Se.current),
                    r)
                )
                    break;
                return null;
            case 22:
            case 23:
                return (t.lanes = 0), Xa(e, t, n);
        }
        return jt(e, t, n);
    }
    var rc, Wi, oc, lc;
    (rc = function (e, t) {
        for (var n = t.child; n !== null; ) {
            if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
            else if (n.tag !== 4 && n.child !== null) {
                (n.child.return = n), (n = n.child);
                continue;
            }
            if (n === t) break;
            for (; n.sibling === null; ) {
                if (n.return === null || n.return === t) return;
                n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
        }
    }),
        (Wi = function () {}),
        (oc = function (e, t, n, r) {
            var l = e.memoizedProps;
            if (l !== r) {
                (e = t.stateNode), hn(Nt.current);
                var u = null;
                switch (n) {
                    case "input":
                        (l = wl(e, l)), (r = wl(e, r)), (u = []);
                        break;
                    case "select":
                        (l = B({}, l, { value: void 0 })),
                            (r = B({}, r, { value: void 0 })),
                            (u = []);
                        break;
                    case "textarea":
                        (l = Cl(e, l)), (r = Cl(e, r)), (u = []);
                        break;
                    default:
                        typeof l.onClick != "function" &&
                            typeof r.onClick == "function" &&
                            (e.onclick = mo);
                }
                Rl(n, r);
                var c;
                n = null;
                for (x in l)
                    if (
                        !r.hasOwnProperty(x) &&
                        l.hasOwnProperty(x) &&
                        l[x] != null
                    )
                        if (x === "style") {
                            var g = l[x];
                            for (c in g)
                                g.hasOwnProperty(c) &&
                                    (n || (n = {}), (n[c] = ""));
                        } else
                            x !== "dangerouslySetInnerHTML" &&
                                x !== "children" &&
                                x !== "suppressContentEditableWarning" &&
                                x !== "suppressHydrationWarning" &&
                                x !== "autoFocus" &&
                                (f.hasOwnProperty(x)
                                    ? u || (u = [])
                                    : (u = u || []).push(x, null));
                for (x in r) {
                    var v = r[x];
                    if (
                        ((g = l != null ? l[x] : void 0),
                        r.hasOwnProperty(x) &&
                            v !== g &&
                            (v != null || g != null))
                    )
                        if (x === "style")
                            if (g) {
                                for (c in g)
                                    !g.hasOwnProperty(c) ||
                                        (v && v.hasOwnProperty(c)) ||
                                        (n || (n = {}), (n[c] = ""));
                                for (c in v)
                                    v.hasOwnProperty(c) &&
                                        g[c] !== v[c] &&
                                        (n || (n = {}), (n[c] = v[c]));
                            } else n || (u || (u = []), u.push(x, n)), (n = v);
                        else
                            x === "dangerouslySetInnerHTML"
                                ? ((v = v ? v.__html : void 0),
                                  (g = g ? g.__html : void 0),
                                  v != null &&
                                      g !== v &&
                                      (u = u || []).push(x, v))
                                : x === "children"
                                ? (typeof v != "string" &&
                                      typeof v != "number") ||
                                  (u = u || []).push(x, "" + v)
                                : x !== "suppressContentEditableWarning" &&
                                  x !== "suppressHydrationWarning" &&
                                  (f.hasOwnProperty(x)
                                      ? (v != null &&
                                            x === "onScroll" &&
                                            ye("scroll", e),
                                        u || g === v || (u = []))
                                      : (u = u || []).push(x, v));
                }
                n && (u = u || []).push("style", n);
                var x = u;
                (t.updateQueue = x) && (t.flags |= 4);
            }
        }),
        (lc = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
        });
    function Ar(e, t) {
        if (!we)
            switch (e.tailMode) {
                case "hidden":
                    t = e.tail;
                    for (var n = null; t !== null; )
                        t.alternate !== null && (n = t), (t = t.sibling);
                    n === null ? (e.tail = null) : (n.sibling = null);
                    break;
                case "collapsed":
                    n = e.tail;
                    for (var r = null; n !== null; )
                        n.alternate !== null && (r = n), (n = n.sibling);
                    r === null
                        ? t || e.tail === null
                            ? (e.tail = null)
                            : (e.tail.sibling = null)
                        : (r.sibling = null);
            }
    }
    function Qe(e) {
        var t = e.alternate !== null && e.alternate.child === e.child,
            n = 0,
            r = 0;
        if (t)
            for (var l = e.child; l !== null; )
                (n |= l.lanes | l.childLanes),
                    (r |= l.subtreeFlags & 14680064),
                    (r |= l.flags & 14680064),
                    (l.return = e),
                    (l = l.sibling);
        else
            for (l = e.child; l !== null; )
                (n |= l.lanes | l.childLanes),
                    (r |= l.subtreeFlags),
                    (r |= l.flags),
                    (l.return = e),
                    (l = l.sibling);
        return (e.subtreeFlags |= r), (e.childLanes = n), t;
    }
    function Tp(e, t, n) {
        var r = t.pendingProps;
        switch ((di(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return Qe(t), null;
            case 1:
                return be(t.type) && go(), Qe(t), null;
            case 3:
                return (
                    (r = t.stateNode),
                    Wn(),
                    ge(Ze),
                    ge(Ve),
                    xi(),
                    r.pendingContext &&
                        ((r.context = r.pendingContext),
                        (r.pendingContext = null)),
                    (e === null || e.child === null) &&
                        (Co(t)
                            ? (t.flags |= 4)
                            : e === null ||
                              (e.memoizedState.isDehydrated &&
                                  !(t.flags & 256)) ||
                              ((t.flags |= 1024),
                              Et !== null && (ts(Et), (Et = null)))),
                    Wi(e, t),
                    Qe(t),
                    null
                );
            case 5:
                ki(t);
                var l = hn(_r.current);
                if (((n = t.type), e !== null && t.stateNode != null))
                    oc(e, t, n, r, l),
                        e.ref !== t.ref &&
                            ((t.flags |= 512), (t.flags |= 2097152));
                else {
                    if (!r) {
                        if (t.stateNode === null) throw Error(s(166));
                        return Qe(t), null;
                    }
                    if (((e = hn(Nt.current)), Co(t))) {
                        (r = t.stateNode), (n = t.type);
                        var u = t.memoizedProps;
                        switch (
                            ((r[Tt] = t),
                            (r[Cr] = u),
                            (e = (t.mode & 1) !== 0),
                            n)
                        ) {
                            case "dialog":
                                ye("cancel", r), ye("close", r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                ye("load", r);
                                break;
                            case "video":
                            case "audio":
                                for (l = 0; l < wr.length; l++) ye(wr[l], r);
                                break;
                            case "source":
                                ye("error", r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                ye("error", r), ye("load", r);
                                break;
                            case "details":
                                ye("toggle", r);
                                break;
                            case "input":
                                js(r, u), ye("invalid", r);
                                break;
                            case "select":
                                (r._wrapperState = {
                                    wasMultiple: !!u.multiple,
                                }),
                                    ye("invalid", r);
                                break;
                            case "textarea":
                                $s(r, u), ye("invalid", r);
                        }
                        Rl(n, u), (l = null);
                        for (var c in u)
                            if (u.hasOwnProperty(c)) {
                                var g = u[c];
                                c === "children"
                                    ? typeof g == "string"
                                        ? r.textContent !== g &&
                                          (u.suppressHydrationWarning !== !0 &&
                                              ho(r.textContent, g, e),
                                          (l = ["children", g]))
                                        : typeof g == "number" &&
                                          r.textContent !== "" + g &&
                                          (u.suppressHydrationWarning !== !0 &&
                                              ho(r.textContent, g, e),
                                          (l = ["children", "" + g]))
                                    : f.hasOwnProperty(c) &&
                                      g != null &&
                                      c === "onScroll" &&
                                      ye("scroll", r);
                            }
                        switch (n) {
                            case "input":
                                Wr(r), Hs(r, u, !0);
                                break;
                            case "textarea":
                                Wr(r), Ws(r);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                typeof u.onClick == "function" &&
                                    (r.onclick = mo);
                        }
                        (r = l),
                            (t.updateQueue = r),
                            r !== null && (t.flags |= 4);
                    } else {
                        (c = l.nodeType === 9 ? l : l.ownerDocument),
                            e === "http://www.w3.org/1999/xhtml" && (e = Qs(n)),
                            e === "http://www.w3.org/1999/xhtml"
                                ? n === "script"
                                    ? ((e = c.createElement("div")),
                                      (e.innerHTML = "<script></script>"),
                                      (e = e.removeChild(e.firstChild)))
                                    : typeof r.is == "string"
                                    ? (e = c.createElement(n, { is: r.is }))
                                    : ((e = c.createElement(n)),
                                      n === "select" &&
                                          ((c = e),
                                          r.multiple
                                              ? (c.multiple = !0)
                                              : r.size && (c.size = r.size)))
                                : (e = c.createElementNS(e, n)),
                            (e[Tt] = t),
                            (e[Cr] = r),
                            rc(e, t, !1, !1),
                            (t.stateNode = e);
                        e: {
                            switch (((c = xl(n, r)), n)) {
                                case "dialog":
                                    ye("cancel", e), ye("close", e), (l = r);
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    ye("load", e), (l = r);
                                    break;
                                case "video":
                                case "audio":
                                    for (l = 0; l < wr.length; l++)
                                        ye(wr[l], e);
                                    l = r;
                                    break;
                                case "source":
                                    ye("error", e), (l = r);
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    ye("error", e), ye("load", e), (l = r);
                                    break;
                                case "details":
                                    ye("toggle", e), (l = r);
                                    break;
                                case "input":
                                    js(e, r), (l = wl(e, r)), ye("invalid", e);
                                    break;
                                case "option":
                                    l = r;
                                    break;
                                case "select":
                                    (e._wrapperState = {
                                        wasMultiple: !!r.multiple,
                                    }),
                                        (l = B({}, r, { value: void 0 })),
                                        ye("invalid", e);
                                    break;
                                case "textarea":
                                    $s(e, r), (l = Cl(e, r)), ye("invalid", e);
                                    break;
                                default:
                                    l = r;
                            }
                            Rl(n, l), (g = l);
                            for (u in g)
                                if (g.hasOwnProperty(u)) {
                                    var v = g[u];
                                    u === "style"
                                        ? Gs(e, v)
                                        : u === "dangerouslySetInnerHTML"
                                        ? ((v = v ? v.__html : void 0),
                                          v != null && Ks(e, v))
                                        : u === "children"
                                        ? typeof v == "string"
                                            ? (n !== "textarea" || v !== "") &&
                                              er(e, v)
                                            : typeof v == "number" &&
                                              er(e, "" + v)
                                        : u !==
                                              "suppressContentEditableWarning" &&
                                          u !== "suppressHydrationWarning" &&
                                          u !== "autoFocus" &&
                                          (f.hasOwnProperty(u)
                                              ? v != null &&
                                                u === "onScroll" &&
                                                ye("scroll", e)
                                              : v != null && U(e, u, v, c));
                                }
                            switch (n) {
                                case "input":
                                    Wr(e), Hs(e, r, !1);
                                    break;
                                case "textarea":
                                    Wr(e), Ws(e);
                                    break;
                                case "option":
                                    r.value != null &&
                                        e.setAttribute(
                                            "value",
                                            "" + fe(r.value),
                                        );
                                    break;
                                case "select":
                                    (e.multiple = !!r.multiple),
                                        (u = r.value),
                                        u != null
                                            ? xn(e, !!r.multiple, u, !1)
                                            : r.defaultValue != null &&
                                              xn(
                                                  e,
                                                  !!r.multiple,
                                                  r.defaultValue,
                                                  !0,
                                              );
                                    break;
                                default:
                                    typeof l.onClick == "function" &&
                                        (e.onclick = mo);
                            }
                            switch (n) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    r = !!r.autoFocus;
                                    break e;
                                case "img":
                                    r = !0;
                                    break e;
                                default:
                                    r = !1;
                            }
                        }
                        r && (t.flags |= 4);
                    }
                    t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
                }
                return Qe(t), null;
            case 6:
                if (e && t.stateNode != null) lc(e, t, e.memoizedProps, r);
                else {
                    if (typeof r != "string" && t.stateNode === null)
                        throw Error(s(166));
                    if (((n = hn(_r.current)), hn(Nt.current), Co(t))) {
                        if (
                            ((r = t.stateNode),
                            (n = t.memoizedProps),
                            (r[Tt] = t),
                            (u = r.nodeValue !== n) && ((e = ut), e !== null))
                        )
                            switch (e.tag) {
                                case 3:
                                    ho(r.nodeValue, n, (e.mode & 1) !== 0);
                                    break;
                                case 5:
                                    e.memoizedProps.suppressHydrationWarning !==
                                        !0 &&
                                        ho(r.nodeValue, n, (e.mode & 1) !== 0);
                            }
                        u && (t.flags |= 4);
                    } else
                        (r = (
                            n.nodeType === 9 ? n : n.ownerDocument
                        ).createTextNode(r)),
                            (r[Tt] = t),
                            (t.stateNode = r);
                }
                return Qe(t), null;
            case 13:
                if (
                    (ge(Se),
                    (r = t.memoizedState),
                    e === null ||
                        (e.memoizedState !== null &&
                            e.memoizedState.dehydrated !== null))
                ) {
                    if (we && at !== null && t.mode & 1 && !(t.flags & 128))
                        ua(), Bn(), (t.flags |= 98560), (u = !1);
                    else if (
                        ((u = Co(t)), r !== null && r.dehydrated !== null)
                    ) {
                        if (e === null) {
                            if (!u) throw Error(s(318));
                            if (
                                ((u = t.memoizedState),
                                (u = u !== null ? u.dehydrated : null),
                                !u)
                            )
                                throw Error(s(317));
                            u[Tt] = t;
                        } else
                            Bn(),
                                !(t.flags & 128) && (t.memoizedState = null),
                                (t.flags |= 4);
                        Qe(t), (u = !1);
                    } else Et !== null && (ts(Et), (Et = null)), (u = !0);
                    if (!u) return t.flags & 65536 ? t : null;
                }
                return t.flags & 128
                    ? ((t.lanes = n), t)
                    : ((r = r !== null),
                      r !== (e !== null && e.memoizedState !== null) &&
                          r &&
                          ((t.child.flags |= 8192),
                          t.mode & 1 &&
                              (e === null || Se.current & 1
                                  ? ze === 0 && (ze = 3)
                                  : os())),
                      t.updateQueue !== null && (t.flags |= 4),
                      Qe(t),
                      null);
            case 4:
                return (
                    Wn(),
                    Wi(e, t),
                    e === null && Sr(t.stateNode.containerInfo),
                    Qe(t),
                    null
                );
            case 10:
                return vi(t.type._context), Qe(t), null;
            case 17:
                return be(t.type) && go(), Qe(t), null;
            case 19:
                if ((ge(Se), (u = t.memoizedState), u === null))
                    return Qe(t), null;
                if (
                    ((r = (t.flags & 128) !== 0), (c = u.rendering), c === null)
                )
                    if (r) Ar(u, !1);
                    else {
                        if (ze !== 0 || (e !== null && e.flags & 128))
                            for (e = t.child; e !== null; ) {
                                if (((c = To(e)), c !== null)) {
                                    for (
                                        t.flags |= 128,
                                            Ar(u, !1),
                                            r = c.updateQueue,
                                            r !== null &&
                                                ((t.updateQueue = r),
                                                (t.flags |= 4)),
                                            t.subtreeFlags = 0,
                                            r = n,
                                            n = t.child;
                                        n !== null;

                                    )
                                        (u = n),
                                            (e = r),
                                            (u.flags &= 14680066),
                                            (c = u.alternate),
                                            c === null
                                                ? ((u.childLanes = 0),
                                                  (u.lanes = e),
                                                  (u.child = null),
                                                  (u.subtreeFlags = 0),
                                                  (u.memoizedProps = null),
                                                  (u.memoizedState = null),
                                                  (u.updateQueue = null),
                                                  (u.dependencies = null),
                                                  (u.stateNode = null))
                                                : ((u.childLanes =
                                                      c.childLanes),
                                                  (u.lanes = c.lanes),
                                                  (u.child = c.child),
                                                  (u.subtreeFlags = 0),
                                                  (u.deletions = null),
                                                  (u.memoizedProps =
                                                      c.memoizedProps),
                                                  (u.memoizedState =
                                                      c.memoizedState),
                                                  (u.updateQueue =
                                                      c.updateQueue),
                                                  (u.type = c.type),
                                                  (e = c.dependencies),
                                                  (u.dependencies =
                                                      e === null
                                                          ? null
                                                          : {
                                                                lanes: e.lanes,
                                                                firstContext:
                                                                    e.firstContext,
                                                            })),
                                            (n = n.sibling);
                                    return (
                                        me(Se, (Se.current & 1) | 2), t.child
                                    );
                                }
                                e = e.sibling;
                            }
                        u.tail !== null &&
                            Te() > Gn &&
                            ((t.flags |= 128),
                            (r = !0),
                            Ar(u, !1),
                            (t.lanes = 4194304));
                    }
                else {
                    if (!r)
                        if (((e = To(c)), e !== null)) {
                            if (
                                ((t.flags |= 128),
                                (r = !0),
                                (n = e.updateQueue),
                                n !== null &&
                                    ((t.updateQueue = n), (t.flags |= 4)),
                                Ar(u, !0),
                                u.tail === null &&
                                    u.tailMode === "hidden" &&
                                    !c.alternate &&
                                    !we)
                            )
                                return Qe(t), null;
                        } else
                            2 * Te() - u.renderingStartTime > Gn &&
                                n !== 1073741824 &&
                                ((t.flags |= 128),
                                (r = !0),
                                Ar(u, !1),
                                (t.lanes = 4194304));
                    u.isBackwards
                        ? ((c.sibling = t.child), (t.child = c))
                        : ((n = u.last),
                          n !== null ? (n.sibling = c) : (t.child = c),
                          (u.last = c));
                }
                return u.tail !== null
                    ? ((t = u.tail),
                      (u.rendering = t),
                      (u.tail = t.sibling),
                      (u.renderingStartTime = Te()),
                      (t.sibling = null),
                      (n = Se.current),
                      me(Se, r ? (n & 1) | 2 : n & 1),
                      t)
                    : (Qe(t), null);
            case 22:
            case 23:
                return (
                    rs(),
                    (r = t.memoizedState !== null),
                    e !== null &&
                        (e.memoizedState !== null) !== r &&
                        (t.flags |= 8192),
                    r && t.mode & 1
                        ? ct & 1073741824 &&
                          (Qe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
                        : Qe(t),
                    null
                );
            case 24:
                return null;
            case 25:
                return null;
        }
        throw Error(s(156, t.tag));
    }
    function Np(e, t) {
        switch ((di(t), t.tag)) {
            case 1:
                return (
                    be(t.type) && go(),
                    (e = t.flags),
                    e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
                );
            case 3:
                return (
                    Wn(),
                    ge(Ze),
                    ge(Ve),
                    xi(),
                    (e = t.flags),
                    e & 65536 && !(e & 128)
                        ? ((t.flags = (e & -65537) | 128), t)
                        : null
                );
            case 5:
                return ki(t), null;
            case 13:
                if (
                    (ge(Se),
                    (e = t.memoizedState),
                    e !== null && e.dehydrated !== null)
                ) {
                    if (t.alternate === null) throw Error(s(340));
                    Bn();
                }
                return (
                    (e = t.flags),
                    e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
                );
            case 19:
                return ge(Se), null;
            case 4:
                return Wn(), null;
            case 10:
                return vi(t.type._context), null;
            case 22:
            case 23:
                return rs(), null;
            case 24:
                return null;
            default:
                return null;
        }
    }
    var Io = !1,
        Ke = !1,
        Op = typeof WeakSet == "function" ? WeakSet : Set,
        H = null;
    function Kn(e, t) {
        var n = e.ref;
        if (n !== null)
            if (typeof n == "function")
                try {
                    n(null);
                } catch (r) {
                    xe(e, t, r);
                }
            else n.current = null;
    }
    function Qi(e, t, n) {
        try {
            n();
        } catch (r) {
            xe(e, t, r);
        }
    }
    var ic = !1;
    function Lp(e, t) {
        if (((ri = no), (e = Uu()), Xl(e))) {
            if ("selectionStart" in e)
                var n = { start: e.selectionStart, end: e.selectionEnd };
            else
                e: {
                    n = ((n = e.ownerDocument) && n.defaultView) || window;
                    var r = n.getSelection && n.getSelection();
                    if (r && r.rangeCount !== 0) {
                        n = r.anchorNode;
                        var l = r.anchorOffset,
                            u = r.focusNode;
                        r = r.focusOffset;
                        try {
                            n.nodeType, u.nodeType;
                        } catch {
                            n = null;
                            break e;
                        }
                        var c = 0,
                            g = -1,
                            v = -1,
                            x = 0,
                            M = 0,
                            z = e,
                            A = null;
                        t: for (;;) {
                            for (
                                var j;
                                z !== n ||
                                    (l !== 0 && z.nodeType !== 3) ||
                                    (g = c + l),
                                    z !== u ||
                                        (r !== 0 && z.nodeType !== 3) ||
                                        (v = c + r),
                                    z.nodeType === 3 &&
                                        (c += z.nodeValue.length),
                                    (j = z.firstChild) !== null;

                            )
                                (A = z), (z = j);
                            for (;;) {
                                if (z === e) break t;
                                if (
                                    (A === n && ++x === l && (g = c),
                                    A === u && ++M === r && (v = c),
                                    (j = z.nextSibling) !== null)
                                )
                                    break;
                                (z = A), (A = z.parentNode);
                            }
                            z = j;
                        }
                        n = g === -1 || v === -1 ? null : { start: g, end: v };
                    } else n = null;
                }
            n = n || { start: 0, end: 0 };
        } else n = null;
        for (
            oi = { focusedElem: e, selectionRange: n }, no = !1, H = t;
            H !== null;

        )
            if (
                ((t = H),
                (e = t.child),
                (t.subtreeFlags & 1028) !== 0 && e !== null)
            )
                (e.return = t), (H = e);
            else
                for (; H !== null; ) {
                    t = H;
                    try {
                        var $ = t.alternate;
                        if (t.flags & 1024)
                            switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    break;
                                case 1:
                                    if ($ !== null) {
                                        var V = $.memoizedProps,
                                            Ne = $.memoizedState,
                                            k = t.stateNode,
                                            E = k.getSnapshotBeforeUpdate(
                                                t.elementType === t.type
                                                    ? V
                                                    : Ct(t.type, V),
                                                Ne,
                                            );
                                        k.__reactInternalSnapshotBeforeUpdate =
                                            E;
                                    }
                                    break;
                                case 3:
                                    var R = t.stateNode.containerInfo;
                                    R.nodeType === 1
                                        ? (R.textContent = "")
                                        : R.nodeType === 9 &&
                                          R.documentElement &&
                                          R.removeChild(R.documentElement);
                                    break;
                                case 5:
                                case 6:
                                case 4:
                                case 17:
                                    break;
                                default:
                                    throw Error(s(163));
                            }
                    } catch (F) {
                        xe(t, t.return, F);
                    }
                    if (((e = t.sibling), e !== null)) {
                        (e.return = t.return), (H = e);
                        break;
                    }
                    H = t.return;
                }
        return ($ = ic), (ic = !1), $;
    }
    function Mr(e, t, n) {
        var r = t.updateQueue;
        if (((r = r !== null ? r.lastEffect : null), r !== null)) {
            var l = (r = r.next);
            do {
                if ((l.tag & e) === e) {
                    var u = l.destroy;
                    (l.destroy = void 0), u !== void 0 && Qi(t, n, u);
                }
                l = l.next;
            } while (l !== r);
        }
    }
    function Uo(e, t) {
        if (
            ((t = t.updateQueue),
            (t = t !== null ? t.lastEffect : null),
            t !== null)
        ) {
            var n = (t = t.next);
            do {
                if ((n.tag & e) === e) {
                    var r = n.create;
                    n.destroy = r();
                }
                n = n.next;
            } while (n !== t);
        }
    }
    function Ki(e) {
        var t = e.ref;
        if (t !== null) {
            var n = e.stateNode;
            switch (e.tag) {
                case 5:
                    e = n;
                    break;
                default:
                    e = n;
            }
            typeof t == "function" ? t(e) : (t.current = e);
        }
    }
    function sc(e) {
        var t = e.alternate;
        t !== null && ((e.alternate = null), sc(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            e.tag === 5 &&
                ((t = e.stateNode),
                t !== null &&
                    (delete t[Tt],
                    delete t[Cr],
                    delete t[ui],
                    delete t[pp],
                    delete t[hp])),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
    }
    function uc(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function ac(e) {
        e: for (;;) {
            for (; e.sibling === null; ) {
                if (e.return === null || uc(e.return)) return null;
                e = e.return;
            }
            for (
                e.sibling.return = e.return, e = e.sibling;
                e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

            ) {
                if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
                (e.child.return = e), (e = e.child);
            }
            if (!(e.flags & 2)) return e.stateNode;
        }
    }
    function qi(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6)
            (e = e.stateNode),
                t
                    ? n.nodeType === 8
                        ? n.parentNode.insertBefore(e, t)
                        : n.insertBefore(e, t)
                    : (n.nodeType === 8
                          ? ((t = n.parentNode), t.insertBefore(e, n))
                          : ((t = n), t.appendChild(e)),
                      (n = n._reactRootContainer),
                      n != null || t.onclick !== null || (t.onclick = mo));
        else if (r !== 4 && ((e = e.child), e !== null))
            for (qi(e, t, n), e = e.sibling; e !== null; )
                qi(e, t, n), (e = e.sibling);
    }
    function Gi(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (r !== 4 && ((e = e.child), e !== null))
            for (Gi(e, t, n), e = e.sibling; e !== null; )
                Gi(e, t, n), (e = e.sibling);
    }
    var He = null,
        kt = !1;
    function en(e, t, n) {
        for (n = n.child; n !== null; ) cc(e, t, n), (n = n.sibling);
    }
    function cc(e, t, n) {
        if (_t && typeof _t.onCommitFiberUnmount == "function")
            try {
                _t.onCommitFiberUnmount(Yr, n);
            } catch {}
        switch (n.tag) {
            case 5:
                Ke || Kn(n, t);
            case 6:
                var r = He,
                    l = kt;
                (He = null),
                    en(e, t, n),
                    (He = r),
                    (kt = l),
                    He !== null &&
                        (kt
                            ? ((e = He),
                              (n = n.stateNode),
                              e.nodeType === 8
                                  ? e.parentNode.removeChild(n)
                                  : e.removeChild(n))
                            : He.removeChild(n.stateNode));
                break;
            case 18:
                He !== null &&
                    (kt
                        ? ((e = He),
                          (n = n.stateNode),
                          e.nodeType === 8
                              ? si(e.parentNode, n)
                              : e.nodeType === 1 && si(e, n),
                          fr(e))
                        : si(He, n.stateNode));
                break;
            case 4:
                (r = He),
                    (l = kt),
                    (He = n.stateNode.containerInfo),
                    (kt = !0),
                    en(e, t, n),
                    (He = r),
                    (kt = l);
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (
                    !Ke &&
                    ((r = n.updateQueue),
                    r !== null && ((r = r.lastEffect), r !== null))
                ) {
                    l = r = r.next;
                    do {
                        var u = l,
                            c = u.destroy;
                        (u = u.tag),
                            c !== void 0 && (u & 2 || u & 4) && Qi(n, t, c),
                            (l = l.next);
                    } while (l !== r);
                }
                en(e, t, n);
                break;
            case 1:
                if (
                    !Ke &&
                    (Kn(n, t),
                    (r = n.stateNode),
                    typeof r.componentWillUnmount == "function")
                )
                    try {
                        (r.props = n.memoizedProps),
                            (r.state = n.memoizedState),
                            r.componentWillUnmount();
                    } catch (g) {
                        xe(n, t, g);
                    }
                en(e, t, n);
                break;
            case 21:
                en(e, t, n);
                break;
            case 22:
                n.mode & 1
                    ? ((Ke = (r = Ke) || n.memoizedState !== null),
                      en(e, t, n),
                      (Ke = r))
                    : en(e, t, n);
                break;
            default:
                en(e, t, n);
        }
    }
    function fc(e) {
        var t = e.updateQueue;
        if (t !== null) {
            e.updateQueue = null;
            var n = e.stateNode;
            n === null && (n = e.stateNode = new Op()),
                t.forEach(function (r) {
                    var l = Bp.bind(null, e, r);
                    n.has(r) || (n.add(r), r.then(l, l));
                });
        }
    }
    function Rt(e, t) {
        var n = t.deletions;
        if (n !== null)
            for (var r = 0; r < n.length; r++) {
                var l = n[r];
                try {
                    var u = e,
                        c = t,
                        g = c;
                    e: for (; g !== null; ) {
                        switch (g.tag) {
                            case 5:
                                (He = g.stateNode), (kt = !1);
                                break e;
                            case 3:
                                (He = g.stateNode.containerInfo), (kt = !0);
                                break e;
                            case 4:
                                (He = g.stateNode.containerInfo), (kt = !0);
                                break e;
                        }
                        g = g.return;
                    }
                    if (He === null) throw Error(s(160));
                    cc(u, c, l), (He = null), (kt = !1);
                    var v = l.alternate;
                    v !== null && (v.return = null), (l.return = null);
                } catch (x) {
                    xe(l, t, x);
                }
            }
        if (t.subtreeFlags & 12854)
            for (t = t.child; t !== null; ) dc(t, e), (t = t.sibling);
    }
    function dc(e, t) {
        var n = e.alternate,
            r = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                if ((Rt(t, e), Lt(e), r & 4)) {
                    try {
                        Mr(3, e, e.return), Uo(3, e);
                    } catch (V) {
                        xe(e, e.return, V);
                    }
                    try {
                        Mr(5, e, e.return);
                    } catch (V) {
                        xe(e, e.return, V);
                    }
                }
                break;
            case 1:
                Rt(t, e), Lt(e), r & 512 && n !== null && Kn(n, n.return);
                break;
            case 5:
                if (
                    (Rt(t, e),
                    Lt(e),
                    r & 512 && n !== null && Kn(n, n.return),
                    e.flags & 32)
                ) {
                    var l = e.stateNode;
                    try {
                        er(l, "");
                    } catch (V) {
                        xe(e, e.return, V);
                    }
                }
                if (r & 4 && ((l = e.stateNode), l != null)) {
                    var u = e.memoizedProps,
                        c = n !== null ? n.memoizedProps : u,
                        g = e.type,
                        v = e.updateQueue;
                    if (((e.updateQueue = null), v !== null))
                        try {
                            g === "input" &&
                                u.type === "radio" &&
                                u.name != null &&
                                Bs(l, u),
                                xl(g, c);
                            var x = xl(g, u);
                            for (c = 0; c < v.length; c += 2) {
                                var M = v[c],
                                    z = v[c + 1];
                                M === "style"
                                    ? Gs(l, z)
                                    : M === "dangerouslySetInnerHTML"
                                    ? Ks(l, z)
                                    : M === "children"
                                    ? er(l, z)
                                    : U(l, M, z, x);
                            }
                            switch (g) {
                                case "input":
                                    Sl(l, u);
                                    break;
                                case "textarea":
                                    Vs(l, u);
                                    break;
                                case "select":
                                    var A = l._wrapperState.wasMultiple;
                                    l._wrapperState.wasMultiple = !!u.multiple;
                                    var j = u.value;
                                    j != null
                                        ? xn(l, !!u.multiple, j, !1)
                                        : A !== !!u.multiple &&
                                          (u.defaultValue != null
                                              ? xn(
                                                    l,
                                                    !!u.multiple,
                                                    u.defaultValue,
                                                    !0,
                                                )
                                              : xn(
                                                    l,
                                                    !!u.multiple,
                                                    u.multiple ? [] : "",
                                                    !1,
                                                ));
                            }
                            l[Cr] = u;
                        } catch (V) {
                            xe(e, e.return, V);
                        }
                }
                break;
            case 6:
                if ((Rt(t, e), Lt(e), r & 4)) {
                    if (e.stateNode === null) throw Error(s(162));
                    (l = e.stateNode), (u = e.memoizedProps);
                    try {
                        l.nodeValue = u;
                    } catch (V) {
                        xe(e, e.return, V);
                    }
                }
                break;
            case 3:
                if (
                    (Rt(t, e),
                    Lt(e),
                    r & 4 && n !== null && n.memoizedState.isDehydrated)
                )
                    try {
                        fr(t.containerInfo);
                    } catch (V) {
                        xe(e, e.return, V);
                    }
                break;
            case 4:
                Rt(t, e), Lt(e);
                break;
            case 13:
                Rt(t, e),
                    Lt(e),
                    (l = e.child),
                    l.flags & 8192 &&
                        ((u = l.memoizedState !== null),
                        (l.stateNode.isHidden = u),
                        !u ||
                            (l.alternate !== null &&
                                l.alternate.memoizedState !== null) ||
                            (Ji = Te())),
                    r & 4 && fc(e);
                break;
            case 22:
                if (
                    ((M = n !== null && n.memoizedState !== null),
                    e.mode & 1
                        ? ((Ke = (x = Ke) || M), Rt(t, e), (Ke = x))
                        : Rt(t, e),
                    Lt(e),
                    r & 8192)
                ) {
                    if (
                        ((x = e.memoizedState !== null),
                        (e.stateNode.isHidden = x) && !M && e.mode & 1)
                    )
                        for (H = e, M = e.child; M !== null; ) {
                            for (z = H = M; H !== null; ) {
                                switch (((A = H), (j = A.child), A.tag)) {
                                    case 0:
                                    case 11:
                                    case 14:
                                    case 15:
                                        Mr(4, A, A.return);
                                        break;
                                    case 1:
                                        Kn(A, A.return);
                                        var $ = A.stateNode;
                                        if (
                                            typeof $.componentWillUnmount ==
                                            "function"
                                        ) {
                                            (r = A), (n = A.return);
                                            try {
                                                (t = r),
                                                    ($.props = t.memoizedProps),
                                                    ($.state = t.memoizedState),
                                                    $.componentWillUnmount();
                                            } catch (V) {
                                                xe(r, n, V);
                                            }
                                        }
                                        break;
                                    case 5:
                                        Kn(A, A.return);
                                        break;
                                    case 22:
                                        if (A.memoizedState !== null) {
                                            mc(z);
                                            continue;
                                        }
                                }
                                j !== null ? ((j.return = A), (H = j)) : mc(z);
                            }
                            M = M.sibling;
                        }
                    e: for (M = null, z = e; ; ) {
                        if (z.tag === 5) {
                            if (M === null) {
                                M = z;
                                try {
                                    (l = z.stateNode),
                                        x
                                            ? ((u = l.style),
                                              typeof u.setProperty == "function"
                                                  ? u.setProperty(
                                                        "display",
                                                        "none",
                                                        "important",
                                                    )
                                                  : (u.display = "none"))
                                            : ((g = z.stateNode),
                                              (v = z.memoizedProps.style),
                                              (c =
                                                  v != null &&
                                                  v.hasOwnProperty("display")
                                                      ? v.display
                                                      : null),
                                              (g.style.display = qs(
                                                  "display",
                                                  c,
                                              )));
                                } catch (V) {
                                    xe(e, e.return, V);
                                }
                            }
                        } else if (z.tag === 6) {
                            if (M === null)
                                try {
                                    z.stateNode.nodeValue = x
                                        ? ""
                                        : z.memoizedProps;
                                } catch (V) {
                                    xe(e, e.return, V);
                                }
                        } else if (
                            ((z.tag !== 22 && z.tag !== 23) ||
                                z.memoizedState === null ||
                                z === e) &&
                            z.child !== null
                        ) {
                            (z.child.return = z), (z = z.child);
                            continue;
                        }
                        if (z === e) break e;
                        for (; z.sibling === null; ) {
                            if (z.return === null || z.return === e) break e;
                            M === z && (M = null), (z = z.return);
                        }
                        M === z && (M = null),
                            (z.sibling.return = z.return),
                            (z = z.sibling);
                    }
                }
                break;
            case 19:
                Rt(t, e), Lt(e), r & 4 && fc(e);
                break;
            case 21:
                break;
            default:
                Rt(t, e), Lt(e);
        }
    }
    function Lt(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                e: {
                    for (var n = e.return; n !== null; ) {
                        if (uc(n)) {
                            var r = n;
                            break e;
                        }
                        n = n.return;
                    }
                    throw Error(s(160));
                }
                switch (r.tag) {
                    case 5:
                        var l = r.stateNode;
                        r.flags & 32 && (er(l, ""), (r.flags &= -33));
                        var u = ac(e);
                        Gi(e, u, l);
                        break;
                    case 3:
                    case 4:
                        var c = r.stateNode.containerInfo,
                            g = ac(e);
                        qi(e, g, c);
                        break;
                    default:
                        throw Error(s(161));
                }
            } catch (v) {
                xe(e, e.return, v);
            }
            e.flags &= -3;
        }
        t & 4096 && (e.flags &= -4097);
    }
    function Ap(e, t, n) {
        (H = e), pc(e);
    }
    function pc(e, t, n) {
        for (var r = (e.mode & 1) !== 0; H !== null; ) {
            var l = H,
                u = l.child;
            if (l.tag === 22 && r) {
                var c = l.memoizedState !== null || Io;
                if (!c) {
                    var g = l.alternate,
                        v = (g !== null && g.memoizedState !== null) || Ke;
                    g = Io;
                    var x = Ke;
                    if (((Io = c), (Ke = v) && !x))
                        for (H = l; H !== null; )
                            (c = H),
                                (v = c.child),
                                c.tag === 22 && c.memoizedState !== null
                                    ? yc(l)
                                    : v !== null
                                    ? ((v.return = c), (H = v))
                                    : yc(l);
                    for (; u !== null; ) (H = u), pc(u), (u = u.sibling);
                    (H = l), (Io = g), (Ke = x);
                }
                hc(e);
            } else
                l.subtreeFlags & 8772 && u !== null
                    ? ((u.return = l), (H = u))
                    : hc(e);
        }
    }
    function hc(e) {
        for (; H !== null; ) {
            var t = H;
            if (t.flags & 8772) {
                var n = t.alternate;
                try {
                    if (t.flags & 8772)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Ke || Uo(5, t);
                                break;
                            case 1:
                                var r = t.stateNode;
                                if (t.flags & 4 && !Ke)
                                    if (n === null) r.componentDidMount();
                                    else {
                                        var l =
                                            t.elementType === t.type
                                                ? n.memoizedProps
                                                : Ct(t.type, n.memoizedProps);
                                        r.componentDidUpdate(
                                            l,
                                            n.memoizedState,
                                            r.__reactInternalSnapshotBeforeUpdate,
                                        );
                                    }
                                var u = t.updateQueue;
                                u !== null && ma(t, u, r);
                                break;
                            case 3:
                                var c = t.updateQueue;
                                if (c !== null) {
                                    if (((n = null), t.child !== null))
                                        switch (t.child.tag) {
                                            case 5:
                                                n = t.child.stateNode;
                                                break;
                                            case 1:
                                                n = t.child.stateNode;
                                        }
                                    ma(t, c, n);
                                }
                                break;
                            case 5:
                                var g = t.stateNode;
                                if (n === null && t.flags & 4) {
                                    n = g;
                                    var v = t.memoizedProps;
                                    switch (t.type) {
                                        case "button":
                                        case "input":
                                        case "select":
                                        case "textarea":
                                            v.autoFocus && n.focus();
                                            break;
                                        case "img":
                                            v.src && (n.src = v.src);
                                    }
                                }
                                break;
                            case 6:
                                break;
                            case 4:
                                break;
                            case 12:
                                break;
                            case 13:
                                if (t.memoizedState === null) {
                                    var x = t.alternate;
                                    if (x !== null) {
                                        var M = x.memoizedState;
                                        if (M !== null) {
                                            var z = M.dehydrated;
                                            z !== null && fr(z);
                                        }
                                    }
                                }
                                break;
                            case 19:
                            case 17:
                            case 21:
                            case 22:
                            case 23:
                            case 25:
                                break;
                            default:
                                throw Error(s(163));
                        }
                    Ke || (t.flags & 512 && Ki(t));
                } catch (A) {
                    xe(t, t.return, A);
                }
            }
            if (t === e) {
                H = null;
                break;
            }
            if (((n = t.sibling), n !== null)) {
                (n.return = t.return), (H = n);
                break;
            }
            H = t.return;
        }
    }
    function mc(e) {
        for (; H !== null; ) {
            var t = H;
            if (t === e) {
                H = null;
                break;
            }
            var n = t.sibling;
            if (n !== null) {
                (n.return = t.return), (H = n);
                break;
            }
            H = t.return;
        }
    }
    function yc(e) {
        for (; H !== null; ) {
            var t = H;
            try {
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        var n = t.return;
                        try {
                            Uo(4, t);
                        } catch (v) {
                            xe(t, n, v);
                        }
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (typeof r.componentDidMount == "function") {
                            var l = t.return;
                            try {
                                r.componentDidMount();
                            } catch (v) {
                                xe(t, l, v);
                            }
                        }
                        var u = t.return;
                        try {
                            Ki(t);
                        } catch (v) {
                            xe(t, u, v);
                        }
                        break;
                    case 5:
                        var c = t.return;
                        try {
                            Ki(t);
                        } catch (v) {
                            xe(t, c, v);
                        }
                }
            } catch (v) {
                xe(t, t.return, v);
            }
            if (t === e) {
                H = null;
                break;
            }
            var g = t.sibling;
            if (g !== null) {
                (g.return = t.return), (H = g);
                break;
            }
            H = t.return;
        }
    }
    var Mp = Math.ceil,
        jo = Y.ReactCurrentDispatcher,
        Xi = Y.ReactCurrentOwner,
        gt = Y.ReactCurrentBatchConfig,
        ie = 0,
        Ue = null,
        Le = null,
        $e = 0,
        ct = 0,
        qn = Xt(0),
        ze = 0,
        zr = null,
        yn = 0,
        Bo = 0,
        Yi = 0,
        Dr = null,
        tt = null,
        Ji = 0,
        Gn = 1 / 0,
        Bt = null,
        Ho = !1,
        Zi = null,
        tn = null,
        $o = !1,
        nn = null,
        Vo = 0,
        Fr = 0,
        bi = null,
        Wo = -1,
        Qo = 0;
    function Je() {
        return ie & 6 ? Te() : Wo !== -1 ? Wo : (Wo = Te());
    }
    function rn(e) {
        return e.mode & 1
            ? ie & 2 && $e !== 0
                ? $e & -$e
                : yp.transition !== null
                ? (Qo === 0 && (Qo = au()), Qo)
                : ((e = de),
                  e !== 0 ||
                      ((e = window.event),
                      (e = e === void 0 ? 16 : vu(e.type))),
                  e)
            : 1;
    }
    function xt(e, t, n, r) {
        if (50 < Fr) throw ((Fr = 0), (bi = null), Error(s(185)));
        ir(e, n, r),
            (!(ie & 2) || e !== Ue) &&
                (e === Ue && (!(ie & 2) && (Bo |= n), ze === 4 && on(e, $e)),
                nt(e, r),
                n === 1 &&
                    ie === 0 &&
                    !(t.mode & 1) &&
                    ((Gn = Te() + 500), wo && Jt()));
    }
    function nt(e, t) {
        var n = e.callbackNode;
        yd(e, t);
        var r = br(e, e === Ue ? $e : 0);
        if (r === 0)
            n !== null && iu(n),
                (e.callbackNode = null),
                (e.callbackPriority = 0);
        else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((n != null && iu(n), t === 1))
                e.tag === 0 ? mp(vc.bind(null, e)) : ra(vc.bind(null, e)),
                    fp(function () {
                        !(ie & 6) && Jt();
                    }),
                    (n = null);
            else {
                switch (cu(r)) {
                    case 1:
                        n = Al;
                        break;
                    case 4:
                        n = su;
                        break;
                    case 16:
                        n = Xr;
                        break;
                    case 536870912:
                        n = uu;
                        break;
                    default:
                        n = Xr;
                }
                n = Pc(n, gc.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
        }
    }
    function gc(e, t) {
        if (((Wo = -1), (Qo = 0), ie & 6)) throw Error(s(327));
        var n = e.callbackNode;
        if (Xn() && e.callbackNode !== n) return null;
        var r = br(e, e === Ue ? $e : 0);
        if (r === 0) return null;
        if (r & 30 || r & e.expiredLanes || t) t = Ko(e, r);
        else {
            t = r;
            var l = ie;
            ie |= 2;
            var u = Sc();
            (Ue !== e || $e !== t) &&
                ((Bt = null), (Gn = Te() + 500), vn(e, t));
            do
                try {
                    Fp();
                    break;
                } catch (g) {
                    wc(e, g);
                }
            while (!0);
            gi(),
                (jo.current = u),
                (ie = l),
                Le !== null ? (t = 0) : ((Ue = null), ($e = 0), (t = ze));
        }
        if (t !== 0) {
            if (
                (t === 2 && ((l = Ml(e)), l !== 0 && ((r = l), (t = es(e, l)))),
                t === 1)
            )
                throw ((n = zr), vn(e, 0), on(e, r), nt(e, Te()), n);
            if (t === 6) on(e, r);
            else {
                if (
                    ((l = e.current.alternate),
                    !(r & 30) &&
                        !zp(l) &&
                        ((t = Ko(e, r)),
                        t === 2 &&
                            ((u = Ml(e)), u !== 0 && ((r = u), (t = es(e, u)))),
                        t === 1))
                )
                    throw ((n = zr), vn(e, 0), on(e, r), nt(e, Te()), n);
                switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
                    case 0:
                    case 1:
                        throw Error(s(345));
                    case 2:
                        wn(e, tt, Bt);
                        break;
                    case 3:
                        if (
                            (on(e, r),
                            (r & 130023424) === r &&
                                ((t = Ji + 500 - Te()), 10 < t))
                        ) {
                            if (br(e, 0) !== 0) break;
                            if (((l = e.suspendedLanes), (l & r) !== r)) {
                                Je(), (e.pingedLanes |= e.suspendedLanes & l);
                                break;
                            }
                            e.timeoutHandle = ii(wn.bind(null, e, tt, Bt), t);
                            break;
                        }
                        wn(e, tt, Bt);
                        break;
                    case 4:
                        if ((on(e, r), (r & 4194240) === r)) break;
                        for (t = e.eventTimes, l = -1; 0 < r; ) {
                            var c = 31 - wt(r);
                            (u = 1 << c),
                                (c = t[c]),
                                c > l && (l = c),
                                (r &= ~u);
                        }
                        if (
                            ((r = l),
                            (r = Te() - r),
                            (r =
                                (120 > r
                                    ? 120
                                    : 480 > r
                                    ? 480
                                    : 1080 > r
                                    ? 1080
                                    : 1920 > r
                                    ? 1920
                                    : 3e3 > r
                                    ? 3e3
                                    : 4320 > r
                                    ? 4320
                                    : 1960 * Mp(r / 1960)) - r),
                            10 < r)
                        ) {
                            e.timeoutHandle = ii(wn.bind(null, e, tt, Bt), r);
                            break;
                        }
                        wn(e, tt, Bt);
                        break;
                    case 5:
                        wn(e, tt, Bt);
                        break;
                    default:
                        throw Error(s(329));
                }
            }
        }
        return nt(e, Te()), e.callbackNode === n ? gc.bind(null, e) : null;
    }
    function es(e, t) {
        var n = Dr;
        return (
            e.current.memoizedState.isDehydrated && (vn(e, t).flags |= 256),
            (e = Ko(e, t)),
            e !== 2 && ((t = tt), (tt = n), t !== null && ts(t)),
            e
        );
    }
    function ts(e) {
        tt === null ? (tt = e) : tt.push.apply(tt, e);
    }
    function zp(e) {
        for (var t = e; ; ) {
            if (t.flags & 16384) {
                var n = t.updateQueue;
                if (n !== null && ((n = n.stores), n !== null))
                    for (var r = 0; r < n.length; r++) {
                        var l = n[r],
                            u = l.getSnapshot;
                        l = l.value;
                        try {
                            if (!St(u(), l)) return !1;
                        } catch {
                            return !1;
                        }
                    }
            }
            if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
                (n.return = t), (t = n);
            else {
                if (t === e) break;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e) return !0;
                    t = t.return;
                }
                (t.sibling.return = t.return), (t = t.sibling);
            }
        }
        return !0;
    }
    function on(e, t) {
        for (
            t &= ~Yi,
                t &= ~Bo,
                e.suspendedLanes |= t,
                e.pingedLanes &= ~t,
                e = e.expirationTimes;
            0 < t;

        ) {
            var n = 31 - wt(t),
                r = 1 << n;
            (e[n] = -1), (t &= ~r);
        }
    }
    function vc(e) {
        if (ie & 6) throw Error(s(327));
        Xn();
        var t = br(e, 0);
        if (!(t & 1)) return nt(e, Te()), null;
        var n = Ko(e, t);
        if (e.tag !== 0 && n === 2) {
            var r = Ml(e);
            r !== 0 && ((t = r), (n = es(e, r)));
        }
        if (n === 1) throw ((n = zr), vn(e, 0), on(e, t), nt(e, Te()), n);
        if (n === 6) throw Error(s(345));
        return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            wn(e, tt, Bt),
            nt(e, Te()),
            null
        );
    }
    function ns(e, t) {
        var n = ie;
        ie |= 1;
        try {
            return e(t);
        } finally {
            (ie = n), ie === 0 && ((Gn = Te() + 500), wo && Jt());
        }
    }
    function gn(e) {
        nn !== null && nn.tag === 0 && !(ie & 6) && Xn();
        var t = ie;
        ie |= 1;
        var n = gt.transition,
            r = de;
        try {
            if (((gt.transition = null), (de = 1), e)) return e();
        } finally {
            (de = r), (gt.transition = n), (ie = t), !(ie & 6) && Jt();
        }
    }
    function rs() {
        (ct = qn.current), ge(qn);
    }
    function vn(e, t) {
        (e.finishedWork = null), (e.finishedLanes = 0);
        var n = e.timeoutHandle;
        if ((n !== -1 && ((e.timeoutHandle = -1), cp(n)), Le !== null))
            for (n = Le.return; n !== null; ) {
                var r = n;
                switch ((di(r), r.tag)) {
                    case 1:
                        (r = r.type.childContextTypes), r != null && go();
                        break;
                    case 3:
                        Wn(), ge(Ze), ge(Ve), xi();
                        break;
                    case 5:
                        ki(r);
                        break;
                    case 4:
                        Wn();
                        break;
                    case 13:
                        ge(Se);
                        break;
                    case 19:
                        ge(Se);
                        break;
                    case 10:
                        vi(r.type._context);
                        break;
                    case 22:
                    case 23:
                        rs();
                }
                n = n.return;
            }
        if (
            ((Ue = e),
            (Le = e = ln(e.current, null)),
            ($e = ct = t),
            (ze = 0),
            (zr = null),
            (Yi = Bo = yn = 0),
            (tt = Dr = null),
            pn !== null)
        ) {
            for (t = 0; t < pn.length; t++)
                if (((n = pn[t]), (r = n.interleaved), r !== null)) {
                    n.interleaved = null;
                    var l = r.next,
                        u = n.pending;
                    if (u !== null) {
                        var c = u.next;
                        (u.next = l), (r.next = c);
                    }
                    n.pending = r;
                }
            pn = null;
        }
        return e;
    }
    function wc(e, t) {
        do {
            var n = Le;
            try {
                if ((gi(), (No.current = Mo), Oo)) {
                    for (var r = Ee.memoizedState; r !== null; ) {
                        var l = r.queue;
                        l !== null && (l.pending = null), (r = r.next);
                    }
                    Oo = !1;
                }
                if (
                    ((mn = 0),
                    (Ie = Me = Ee = null),
                    (Tr = !1),
                    (Nr = 0),
                    (Xi.current = null),
                    n === null || n.return === null)
                ) {
                    (ze = 1), (zr = t), (Le = null);
                    break;
                }
                e: {
                    var u = e,
                        c = n.return,
                        g = n,
                        v = t;
                    if (
                        ((t = $e),
                        (g.flags |= 32768),
                        v !== null &&
                            typeof v == "object" &&
                            typeof v.then == "function")
                    ) {
                        var x = v,
                            M = g,
                            z = M.tag;
                        if (
                            !(M.mode & 1) &&
                            (z === 0 || z === 11 || z === 15)
                        ) {
                            var A = M.alternate;
                            A
                                ? ((M.updateQueue = A.updateQueue),
                                  (M.memoizedState = A.memoizedState),
                                  (M.lanes = A.lanes))
                                : ((M.updateQueue = null),
                                  (M.memoizedState = null));
                        }
                        var j = Wa(c);
                        if (j !== null) {
                            (j.flags &= -257),
                                Qa(j, c, g, u, t),
                                j.mode & 1 && Va(u, x, t),
                                (t = j),
                                (v = x);
                            var $ = t.updateQueue;
                            if ($ === null) {
                                var V = new Set();
                                V.add(v), (t.updateQueue = V);
                            } else $.add(v);
                            break e;
                        } else {
                            if (!(t & 1)) {
                                Va(u, x, t), os();
                                break e;
                            }
                            v = Error(s(426));
                        }
                    } else if (we && g.mode & 1) {
                        var Ne = Wa(c);
                        if (Ne !== null) {
                            !(Ne.flags & 65536) && (Ne.flags |= 256),
                                Qa(Ne, c, g, u, t),
                                mi(Qn(v, g));
                            break e;
                        }
                    }
                    (u = v = Qn(v, g)),
                        ze !== 4 && (ze = 2),
                        Dr === null ? (Dr = [u]) : Dr.push(u),
                        (u = c);
                    do {
                        switch (u.tag) {
                            case 3:
                                (u.flags |= 65536), (t &= -t), (u.lanes |= t);
                                var k = Ha(u, v, t);
                                ha(u, k);
                                break e;
                            case 1:
                                g = v;
                                var E = u.type,
                                    R = u.stateNode;
                                if (
                                    !(u.flags & 128) &&
                                    (typeof E.getDerivedStateFromError ==
                                        "function" ||
                                        (R !== null &&
                                            typeof R.componentDidCatch ==
                                                "function" &&
                                            (tn === null || !tn.has(R))))
                                ) {
                                    (u.flags |= 65536),
                                        (t &= -t),
                                        (u.lanes |= t);
                                    var F = $a(u, g, t);
                                    ha(u, F);
                                    break e;
                                }
                        }
                        u = u.return;
                    } while (u !== null);
                }
                Cc(n);
            } catch (W) {
                (t = W), Le === n && n !== null && (Le = n = n.return);
                continue;
            }
            break;
        } while (!0);
    }
    function Sc() {
        var e = jo.current;
        return (jo.current = Mo), e === null ? Mo : e;
    }
    function os() {
        (ze === 0 || ze === 3 || ze === 2) && (ze = 4),
            Ue === null ||
                (!(yn & 268435455) && !(Bo & 268435455)) ||
                on(Ue, $e);
    }
    function Ko(e, t) {
        var n = ie;
        ie |= 2;
        var r = Sc();
        (Ue !== e || $e !== t) && ((Bt = null), vn(e, t));
        do
            try {
                Dp();
                break;
            } catch (l) {
                wc(e, l);
            }
        while (!0);
        if ((gi(), (ie = n), (jo.current = r), Le !== null))
            throw Error(s(261));
        return (Ue = null), ($e = 0), ze;
    }
    function Dp() {
        for (; Le !== null; ) Ec(Le);
    }
    function Fp() {
        for (; Le !== null && !sd(); ) Ec(Le);
    }
    function Ec(e) {
        var t = xc(e.alternate, e, ct);
        (e.memoizedProps = e.pendingProps),
            t === null ? Cc(e) : (Le = t),
            (Xi.current = null);
    }
    function Cc(e) {
        var t = e;
        do {
            var n = t.alternate;
            if (((e = t.return), t.flags & 32768)) {
                if (((n = Np(n, t)), n !== null)) {
                    (n.flags &= 32767), (Le = n);
                    return;
                }
                if (e !== null)
                    (e.flags |= 32768),
                        (e.subtreeFlags = 0),
                        (e.deletions = null);
                else {
                    (ze = 6), (Le = null);
                    return;
                }
            } else if (((n = Tp(n, t, ct)), n !== null)) {
                Le = n;
                return;
            }
            if (((t = t.sibling), t !== null)) {
                Le = t;
                return;
            }
            Le = t = e;
        } while (t !== null);
        ze === 0 && (ze = 5);
    }
    function wn(e, t, n) {
        var r = de,
            l = gt.transition;
        try {
            (gt.transition = null), (de = 1), Ip(e, t, n, r);
        } finally {
            (gt.transition = l), (de = r);
        }
        return null;
    }
    function Ip(e, t, n, r) {
        do Xn();
        while (nn !== null);
        if (ie & 6) throw Error(s(327));
        n = e.finishedWork;
        var l = e.finishedLanes;
        if (n === null) return null;
        if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
            throw Error(s(177));
        (e.callbackNode = null), (e.callbackPriority = 0);
        var u = n.lanes | n.childLanes;
        if (
            (gd(e, u),
            e === Ue && ((Le = Ue = null), ($e = 0)),
            (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
                $o ||
                (($o = !0),
                Pc(Xr, function () {
                    return Xn(), null;
                })),
            (u = (n.flags & 15990) !== 0),
            n.subtreeFlags & 15990 || u)
        ) {
            (u = gt.transition), (gt.transition = null);
            var c = de;
            de = 1;
            var g = ie;
            (ie |= 4),
                (Xi.current = null),
                Lp(e, n),
                dc(n, e),
                rp(oi),
                (no = !!ri),
                (oi = ri = null),
                (e.current = n),
                Ap(n),
                ud(),
                (ie = g),
                (de = c),
                (gt.transition = u);
        } else e.current = n;
        if (
            ($o && (($o = !1), (nn = e), (Vo = l)),
            (u = e.pendingLanes),
            u === 0 && (tn = null),
            fd(n.stateNode),
            nt(e, Te()),
            t !== null)
        )
            for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                (l = t[n]),
                    r(l.value, { componentStack: l.stack, digest: l.digest });
        if (Ho) throw ((Ho = !1), (e = Zi), (Zi = null), e);
        return (
            Vo & 1 && e.tag !== 0 && Xn(),
            (u = e.pendingLanes),
            u & 1 ? (e === bi ? Fr++ : ((Fr = 0), (bi = e))) : (Fr = 0),
            Jt(),
            null
        );
    }
    function Xn() {
        if (nn !== null) {
            var e = cu(Vo),
                t = gt.transition,
                n = de;
            try {
                if (
                    ((gt.transition = null),
                    (de = 16 > e ? 16 : e),
                    nn === null)
                )
                    var r = !1;
                else {
                    if (((e = nn), (nn = null), (Vo = 0), ie & 6))
                        throw Error(s(331));
                    var l = ie;
                    for (ie |= 4, H = e.current; H !== null; ) {
                        var u = H,
                            c = u.child;
                        if (H.flags & 16) {
                            var g = u.deletions;
                            if (g !== null) {
                                for (var v = 0; v < g.length; v++) {
                                    var x = g[v];
                                    for (H = x; H !== null; ) {
                                        var M = H;
                                        switch (M.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                Mr(8, M, u);
                                        }
                                        var z = M.child;
                                        if (z !== null) (z.return = M), (H = z);
                                        else
                                            for (; H !== null; ) {
                                                M = H;
                                                var A = M.sibling,
                                                    j = M.return;
                                                if ((sc(M), M === x)) {
                                                    H = null;
                                                    break;
                                                }
                                                if (A !== null) {
                                                    (A.return = j), (H = A);
                                                    break;
                                                }
                                                H = j;
                                            }
                                    }
                                }
                                var $ = u.alternate;
                                if ($ !== null) {
                                    var V = $.child;
                                    if (V !== null) {
                                        $.child = null;
                                        do {
                                            var Ne = V.sibling;
                                            (V.sibling = null), (V = Ne);
                                        } while (V !== null);
                                    }
                                }
                                H = u;
                            }
                        }
                        if (u.subtreeFlags & 2064 && c !== null)
                            (c.return = u), (H = c);
                        else
                            e: for (; H !== null; ) {
                                if (((u = H), u.flags & 2048))
                                    switch (u.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Mr(9, u, u.return);
                                    }
                                var k = u.sibling;
                                if (k !== null) {
                                    (k.return = u.return), (H = k);
                                    break e;
                                }
                                H = u.return;
                            }
                    }
                    var E = e.current;
                    for (H = E; H !== null; ) {
                        c = H;
                        var R = c.child;
                        if (c.subtreeFlags & 2064 && R !== null)
                            (R.return = c), (H = R);
                        else
                            e: for (c = E; H !== null; ) {
                                if (((g = H), g.flags & 2048))
                                    try {
                                        switch (g.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                Uo(9, g);
                                        }
                                    } catch (W) {
                                        xe(g, g.return, W);
                                    }
                                if (g === c) {
                                    H = null;
                                    break e;
                                }
                                var F = g.sibling;
                                if (F !== null) {
                                    (F.return = g.return), (H = F);
                                    break e;
                                }
                                H = g.return;
                            }
                    }
                    if (
                        ((ie = l),
                        Jt(),
                        _t && typeof _t.onPostCommitFiberRoot == "function")
                    )
                        try {
                            _t.onPostCommitFiberRoot(Yr, e);
                        } catch {}
                    r = !0;
                }
                return r;
            } finally {
                (de = n), (gt.transition = t);
            }
        }
        return !1;
    }
    function kc(e, t, n) {
        (t = Qn(n, t)),
            (t = Ha(e, t, 1)),
            (e = bt(e, t, 1)),
            (t = Je()),
            e !== null && (ir(e, 1, t), nt(e, t));
    }
    function xe(e, t, n) {
        if (e.tag === 3) kc(e, e, n);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    kc(t, e, n);
                    break;
                } else if (t.tag === 1) {
                    var r = t.stateNode;
                    if (
                        typeof t.type.getDerivedStateFromError == "function" ||
                        (typeof r.componentDidCatch == "function" &&
                            (tn === null || !tn.has(r)))
                    ) {
                        (e = Qn(n, e)),
                            (e = $a(t, e, 1)),
                            (t = bt(t, e, 1)),
                            (e = Je()),
                            t !== null && (ir(t, 1, e), nt(t, e));
                        break;
                    }
                }
                t = t.return;
            }
    }
    function Up(e, t, n) {
        var r = e.pingCache;
        r !== null && r.delete(t),
            (t = Je()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Ue === e &&
                ($e & n) === n &&
                (ze === 4 ||
                (ze === 3 && ($e & 130023424) === $e && 500 > Te() - Ji)
                    ? vn(e, 0)
                    : (Yi |= n)),
            nt(e, t);
    }
    function Rc(e, t) {
        t === 0 &&
            (e.mode & 1
                ? ((t = Zr), (Zr <<= 1), !(Zr & 130023424) && (Zr = 4194304))
                : (t = 1));
        var n = Je();
        (e = It(e, t)), e !== null && (ir(e, t, n), nt(e, n));
    }
    function jp(e) {
        var t = e.memoizedState,
            n = 0;
        t !== null && (n = t.retryLane), Rc(e, n);
    }
    function Bp(e, t) {
        var n = 0;
        switch (e.tag) {
            case 13:
                var r = e.stateNode,
                    l = e.memoizedState;
                l !== null && (n = l.retryLane);
                break;
            case 19:
                r = e.stateNode;
                break;
            default:
                throw Error(s(314));
        }
        r !== null && r.delete(t), Rc(e, n);
    }
    var xc;
    xc = function (e, t, n) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps || Ze.current) et = !0;
            else {
                if (!(e.lanes & n) && !(t.flags & 128))
                    return (et = !1), _p(e, t, n);
                et = !!(e.flags & 131072);
            }
        else (et = !1), we && t.flags & 1048576 && oa(t, Eo, t.index);
        switch (((t.lanes = 0), t.tag)) {
            case 2:
                var r = t.type;
                Fo(e, t), (e = t.pendingProps);
                var l = In(t, Ve.current);
                Vn(t, n), (l = Ti(null, t, r, e, l, n));
                var u = Ni();
                return (
                    (t.flags |= 1),
                    typeof l == "object" &&
                    l !== null &&
                    typeof l.render == "function" &&
                    l.$$typeof === void 0
                        ? ((t.tag = 1),
                          (t.memoizedState = null),
                          (t.updateQueue = null),
                          be(r) ? ((u = !0), vo(t)) : (u = !1),
                          (t.memoizedState =
                              l.state !== null && l.state !== void 0
                                  ? l.state
                                  : null),
                          Ei(t),
                          (l.updater = zo),
                          (t.stateNode = l),
                          (l._reactInternals = t),
                          Di(t, r, e, n),
                          (t = ji(null, t, r, !0, u, n)))
                        : ((t.tag = 0),
                          we && u && fi(t),
                          Ye(null, t, l, n),
                          (t = t.child)),
                    t
                );
            case 16:
                r = t.elementType;
                e: {
                    switch (
                        (Fo(e, t),
                        (e = t.pendingProps),
                        (l = r._init),
                        (r = l(r._payload)),
                        (t.type = r),
                        (l = t.tag = $p(r)),
                        (e = Ct(r, e)),
                        l)
                    ) {
                        case 0:
                            t = Ui(null, t, r, e, n);
                            break e;
                        case 1:
                            t = Ja(null, t, r, e, n);
                            break e;
                        case 11:
                            t = Ka(null, t, r, e, n);
                            break e;
                        case 14:
                            t = qa(null, t, r, Ct(r.type, e), n);
                            break e;
                    }
                    throw Error(s(306, r, ""));
                }
                return t;
            case 0:
                return (
                    (r = t.type),
                    (l = t.pendingProps),
                    (l = t.elementType === r ? l : Ct(r, l)),
                    Ui(e, t, r, l, n)
                );
            case 1:
                return (
                    (r = t.type),
                    (l = t.pendingProps),
                    (l = t.elementType === r ? l : Ct(r, l)),
                    Ja(e, t, r, l, n)
                );
            case 3:
                e: {
                    if ((Za(t), e === null)) throw Error(s(387));
                    (r = t.pendingProps),
                        (u = t.memoizedState),
                        (l = u.element),
                        pa(e, t),
                        _o(t, r, null, n);
                    var c = t.memoizedState;
                    if (((r = c.element), u.isDehydrated))
                        if (
                            ((u = {
                                element: r,
                                isDehydrated: !1,
                                cache: c.cache,
                                pendingSuspenseBoundaries:
                                    c.pendingSuspenseBoundaries,
                                transitions: c.transitions,
                            }),
                            (t.updateQueue.baseState = u),
                            (t.memoizedState = u),
                            t.flags & 256)
                        ) {
                            (l = Qn(Error(s(423)), t)), (t = ba(e, t, r, n, l));
                            break e;
                        } else if (r !== l) {
                            (l = Qn(Error(s(424)), t)), (t = ba(e, t, r, n, l));
                            break e;
                        } else
                            for (
                                at = Gt(t.stateNode.containerInfo.firstChild),
                                    ut = t,
                                    we = !0,
                                    Et = null,
                                    n = fa(t, null, r, n),
                                    t.child = n;
                                n;

                            )
                                (n.flags = (n.flags & -3) | 4096),
                                    (n = n.sibling);
                    else {
                        if ((Bn(), r === l)) {
                            t = jt(e, t, n);
                            break e;
                        }
                        Ye(e, t, r, n);
                    }
                    t = t.child;
                }
                return t;
            case 5:
                return (
                    ya(t),
                    e === null && hi(t),
                    (r = t.type),
                    (l = t.pendingProps),
                    (u = e !== null ? e.memoizedProps : null),
                    (c = l.children),
                    li(r, l)
                        ? (c = null)
                        : u !== null && li(r, u) && (t.flags |= 32),
                    Ya(e, t),
                    Ye(e, t, c, n),
                    t.child
                );
            case 6:
                return e === null && hi(t), null;
            case 13:
                return ec(e, t, n);
            case 4:
                return (
                    Ci(t, t.stateNode.containerInfo),
                    (r = t.pendingProps),
                    e === null ? (t.child = Hn(t, null, r, n)) : Ye(e, t, r, n),
                    t.child
                );
            case 11:
                return (
                    (r = t.type),
                    (l = t.pendingProps),
                    (l = t.elementType === r ? l : Ct(r, l)),
                    Ka(e, t, r, l, n)
                );
            case 7:
                return Ye(e, t, t.pendingProps, n), t.child;
            case 8:
                return Ye(e, t, t.pendingProps.children, n), t.child;
            case 12:
                return Ye(e, t, t.pendingProps.children, n), t.child;
            case 10:
                e: {
                    if (
                        ((r = t.type._context),
                        (l = t.pendingProps),
                        (u = t.memoizedProps),
                        (c = l.value),
                        me(Ro, r._currentValue),
                        (r._currentValue = c),
                        u !== null)
                    )
                        if (St(u.value, c)) {
                            if (u.children === l.children && !Ze.current) {
                                t = jt(e, t, n);
                                break e;
                            }
                        } else
                            for (
                                u = t.child, u !== null && (u.return = t);
                                u !== null;

                            ) {
                                var g = u.dependencies;
                                if (g !== null) {
                                    c = u.child;
                                    for (var v = g.firstContext; v !== null; ) {
                                        if (v.context === r) {
                                            if (u.tag === 1) {
                                                (v = Ut(-1, n & -n)),
                                                    (v.tag = 2);
                                                var x = u.updateQueue;
                                                if (x !== null) {
                                                    x = x.shared;
                                                    var M = x.pending;
                                                    M === null
                                                        ? (v.next = v)
                                                        : ((v.next = M.next),
                                                          (M.next = v)),
                                                        (x.pending = v);
                                                }
                                            }
                                            (u.lanes |= n),
                                                (v = u.alternate),
                                                v !== null && (v.lanes |= n),
                                                wi(u.return, n, t),
                                                (g.lanes |= n);
                                            break;
                                        }
                                        v = v.next;
                                    }
                                } else if (u.tag === 10)
                                    c = u.type === t.type ? null : u.child;
                                else if (u.tag === 18) {
                                    if (((c = u.return), c === null))
                                        throw Error(s(341));
                                    (c.lanes |= n),
                                        (g = c.alternate),
                                        g !== null && (g.lanes |= n),
                                        wi(c, n, t),
                                        (c = u.sibling);
                                } else c = u.child;
                                if (c !== null) c.return = u;
                                else
                                    for (c = u; c !== null; ) {
                                        if (c === t) {
                                            c = null;
                                            break;
                                        }
                                        if (((u = c.sibling), u !== null)) {
                                            (u.return = c.return), (c = u);
                                            break;
                                        }
                                        c = c.return;
                                    }
                                u = c;
                            }
                    Ye(e, t, l.children, n), (t = t.child);
                }
                return t;
            case 9:
                return (
                    (l = t.type),
                    (r = t.pendingProps.children),
                    Vn(t, n),
                    (l = mt(l)),
                    (r = r(l)),
                    (t.flags |= 1),
                    Ye(e, t, r, n),
                    t.child
                );
            case 14:
                return (
                    (r = t.type),
                    (l = Ct(r, t.pendingProps)),
                    (l = Ct(r.type, l)),
                    qa(e, t, r, l, n)
                );
            case 15:
                return Ga(e, t, t.type, t.pendingProps, n);
            case 17:
                return (
                    (r = t.type),
                    (l = t.pendingProps),
                    (l = t.elementType === r ? l : Ct(r, l)),
                    Fo(e, t),
                    (t.tag = 1),
                    be(r) ? ((e = !0), vo(t)) : (e = !1),
                    Vn(t, n),
                    ja(t, r, l),
                    Di(t, r, l, n),
                    ji(null, t, r, !0, e, n)
                );
            case 19:
                return nc(e, t, n);
            case 22:
                return Xa(e, t, n);
        }
        throw Error(s(156, t.tag));
    };
    function Pc(e, t) {
        return lu(e, t);
    }
    function Hp(e, t, n, r) {
        (this.tag = e),
            (this.key = n),
            (this.sibling =
                this.child =
                this.return =
                this.stateNode =
                this.type =
                this.elementType =
                    null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
                this.memoizedState =
                this.updateQueue =
                this.memoizedProps =
                    null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
    }
    function vt(e, t, n, r) {
        return new Hp(e, t, n, r);
    }
    function ls(e) {
        return (e = e.prototype), !(!e || !e.isReactComponent);
    }
    function $p(e) {
        if (typeof e == "function") return ls(e) ? 1 : 0;
        if (e != null) {
            if (((e = e.$$typeof), e === Xe)) return 11;
            if (e === Oe) return 14;
        }
        return 2;
    }
    function ln(e, t) {
        var n = e.alternate;
        return (
            n === null
                ? ((n = vt(e.tag, t, e.key, e.mode)),
                  (n.elementType = e.elementType),
                  (n.type = e.type),
                  (n.stateNode = e.stateNode),
                  (n.alternate = e),
                  (e.alternate = n))
                : ((n.pendingProps = t),
                  (n.type = e.type),
                  (n.flags = 0),
                  (n.subtreeFlags = 0),
                  (n.deletions = null)),
            (n.flags = e.flags & 14680064),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
                t === null
                    ? null
                    : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
        );
    }
    function qo(e, t, n, r, l, u) {
        var c = 2;
        if (((r = e), typeof e == "function")) ls(e) && (c = 1);
        else if (typeof e == "string") c = 5;
        else
            e: switch (e) {
                case Z:
                    return Sn(n.children, l, u, t);
                case ce:
                    (c = 8), (l |= 8);
                    break;
                case _e:
                    return (
                        (e = vt(12, n, t, l | 2)),
                        (e.elementType = _e),
                        (e.lanes = u),
                        e
                    );
                case ke:
                    return (
                        (e = vt(13, n, t, l)),
                        (e.elementType = ke),
                        (e.lanes = u),
                        e
                    );
                case Re:
                    return (
                        (e = vt(19, n, t, l)),
                        (e.elementType = Re),
                        (e.lanes = u),
                        e
                    );
                case pe:
                    return Go(n, l, u, t);
                default:
                    if (typeof e == "object" && e !== null)
                        switch (e.$$typeof) {
                            case Ge:
                                c = 10;
                                break e;
                            case Ce:
                                c = 9;
                                break e;
                            case Xe:
                                c = 11;
                                break e;
                            case Oe:
                                c = 14;
                                break e;
                            case Be:
                                (c = 16), (r = null);
                                break e;
                        }
                    throw Error(s(130, e == null ? e : typeof e, ""));
            }
        return (
            (t = vt(c, n, t, l)),
            (t.elementType = e),
            (t.type = r),
            (t.lanes = u),
            t
        );
    }
    function Sn(e, t, n, r) {
        return (e = vt(7, e, r, t)), (e.lanes = n), e;
    }
    function Go(e, t, n, r) {
        return (
            (e = vt(22, e, r, t)),
            (e.elementType = pe),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
        );
    }
    function is(e, t, n) {
        return (e = vt(6, e, null, t)), (e.lanes = n), e;
    }
    function ss(e, t, n) {
        return (
            (t = vt(4, e.children !== null ? e.children : [], e.key, t)),
            (t.lanes = n),
            (t.stateNode = {
                containerInfo: e.containerInfo,
                pendingChildren: null,
                implementation: e.implementation,
            }),
            t
        );
    }
    function Vp(e, t, n, r, l) {
        (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
                this.pingCache =
                this.current =
                this.pendingChildren =
                    null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = zl(0)),
            (this.expirationTimes = zl(-1)),
            (this.entangledLanes =
                this.finishedLanes =
                this.mutableReadLanes =
                this.expiredLanes =
                this.pingedLanes =
                this.suspendedLanes =
                this.pendingLanes =
                    0),
            (this.entanglements = zl(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = l),
            (this.mutableSourceEagerHydrationData = null);
    }
    function us(e, t, n, r, l, u, c, g, v) {
        return (
            (e = new Vp(e, t, n, g, v)),
            t === 1 ? ((t = 1), u === !0 && (t |= 8)) : (t = 0),
            (u = vt(3, null, null, t)),
            (e.current = u),
            (u.stateNode = e),
            (u.memoizedState = {
                element: r,
                isDehydrated: n,
                cache: null,
                transitions: null,
                pendingSuspenseBoundaries: null,
            }),
            Ei(u),
            e
        );
    }
    function Wp(e, t, n) {
        var r =
            3 < arguments.length && arguments[3] !== void 0
                ? arguments[3]
                : null;
        return {
            $$typeof: le,
            key: r == null ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n,
        };
    }
    function _c(e) {
        if (!e) return Yt;
        e = e._reactInternals;
        e: {
            if (un(e) !== e || e.tag !== 1) throw Error(s(170));
            var t = e;
            do {
                switch (t.tag) {
                    case 3:
                        t = t.stateNode.context;
                        break e;
                    case 1:
                        if (be(t.type)) {
                            t =
                                t.stateNode
                                    .__reactInternalMemoizedMergedChildContext;
                            break e;
                        }
                }
                t = t.return;
            } while (t !== null);
            throw Error(s(171));
        }
        if (e.tag === 1) {
            var n = e.type;
            if (be(n)) return ta(e, n, t);
        }
        return t;
    }
    function Tc(e, t, n, r, l, u, c, g, v) {
        return (
            (e = us(n, r, !0, e, l, u, c, g, v)),
            (e.context = _c(null)),
            (n = e.current),
            (r = Je()),
            (l = rn(n)),
            (u = Ut(r, l)),
            (u.callback = t ?? null),
            bt(n, u, l),
            (e.current.lanes = l),
            ir(e, l, r),
            nt(e, r),
            e
        );
    }
    function Xo(e, t, n, r) {
        var l = t.current,
            u = Je(),
            c = rn(l);
        return (
            (n = _c(n)),
            t.context === null ? (t.context = n) : (t.pendingContext = n),
            (t = Ut(u, c)),
            (t.payload = { element: e }),
            (r = r === void 0 ? null : r),
            r !== null && (t.callback = r),
            (e = bt(l, t, c)),
            e !== null && (xt(e, l, c, u), Po(e, l, c)),
            c
        );
    }
    function Yo(e) {
        if (((e = e.current), !e.child)) return null;
        switch (e.child.tag) {
            case 5:
                return e.child.stateNode;
            default:
                return e.child.stateNode;
        }
    }
    function Nc(e, t) {
        if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t;
        }
    }
    function as(e, t) {
        Nc(e, t), (e = e.alternate) && Nc(e, t);
    }
    var Oc =
        typeof reportError == "function"
            ? reportError
            : function (e) {
                  console.error(e);
              };
    function cs(e) {
        this._internalRoot = e;
    }
    (Jo.prototype.render = cs.prototype.render =
        function (e) {
            var t = this._internalRoot;
            if (t === null) throw Error(s(409));
            Xo(e, t, null, null);
        }),
        (Jo.prototype.unmount = cs.prototype.unmount =
            function () {
                var e = this._internalRoot;
                if (e !== null) {
                    this._internalRoot = null;
                    var t = e.containerInfo;
                    gn(function () {
                        Xo(null, e, null, null);
                    }),
                        (t[Mt] = null);
                }
            });
    function Jo(e) {
        this._internalRoot = e;
    }
    Jo.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
            var t = pu();
            e = { blockedOn: null, target: e, priority: t };
            for (
                var n = 0;
                n < Qt.length && t !== 0 && t < Qt[n].priority;
                n++
            );
            Qt.splice(n, 0, e), n === 0 && yu(e);
        }
    };
    function fs(e) {
        return !(
            !e ||
            (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
        );
    }
    function Zo(e) {
        return !(
            !e ||
            (e.nodeType !== 1 &&
                e.nodeType !== 9 &&
                e.nodeType !== 11 &&
                (e.nodeType !== 8 ||
                    e.nodeValue !== " react-mount-point-unstable "))
        );
    }
    function Lc() {}
    function Qp(e, t, n, r, l) {
        if (l) {
            if (typeof r == "function") {
                var u = r;
                r = function () {
                    var x = Yo(c);
                    u.call(x);
                };
            }
            var c = Tc(t, r, e, 0, null, !1, !1, "", Lc);
            return (
                (e._reactRootContainer = c),
                (e[Mt] = c.current),
                Sr(e.nodeType === 8 ? e.parentNode : e),
                gn(),
                c
            );
        }
        for (; (l = e.lastChild); ) e.removeChild(l);
        if (typeof r == "function") {
            var g = r;
            r = function () {
                var x = Yo(v);
                g.call(x);
            };
        }
        var v = us(e, 0, !1, null, null, !1, !1, "", Lc);
        return (
            (e._reactRootContainer = v),
            (e[Mt] = v.current),
            Sr(e.nodeType === 8 ? e.parentNode : e),
            gn(function () {
                Xo(t, v, n, r);
            }),
            v
        );
    }
    function bo(e, t, n, r, l) {
        var u = n._reactRootContainer;
        if (u) {
            var c = u;
            if (typeof l == "function") {
                var g = l;
                l = function () {
                    var v = Yo(c);
                    g.call(v);
                };
            }
            Xo(t, c, e, l);
        } else c = Qp(n, t, e, l, r);
        return Yo(c);
    }
    (fu = function (e) {
        switch (e.tag) {
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var n = lr(t.pendingLanes);
                    n !== 0 &&
                        (Dl(t, n | 1),
                        nt(t, Te()),
                        !(ie & 6) && ((Gn = Te() + 500), Jt()));
                }
                break;
            case 13:
                gn(function () {
                    var r = It(e, 1);
                    if (r !== null) {
                        var l = Je();
                        xt(r, e, 1, l);
                    }
                }),
                    as(e, 1);
        }
    }),
        (Fl = function (e) {
            if (e.tag === 13) {
                var t = It(e, 134217728);
                if (t !== null) {
                    var n = Je();
                    xt(t, e, 134217728, n);
                }
                as(e, 134217728);
            }
        }),
        (du = function (e) {
            if (e.tag === 13) {
                var t = rn(e),
                    n = It(e, t);
                if (n !== null) {
                    var r = Je();
                    xt(n, e, t, r);
                }
                as(e, t);
            }
        }),
        (pu = function () {
            return de;
        }),
        (hu = function (e, t) {
            var n = de;
            try {
                return (de = e), t();
            } finally {
                de = n;
            }
        }),
        (Tl = function (e, t, n) {
            switch (t) {
                case "input":
                    if (
                        (Sl(e, n),
                        (t = n.name),
                        n.type === "radio" && t != null)
                    ) {
                        for (n = e; n.parentNode; ) n = n.parentNode;
                        for (
                            n = n.querySelectorAll(
                                "input[name=" +
                                    JSON.stringify("" + t) +
                                    '][type="radio"]',
                            ),
                                t = 0;
                            t < n.length;
                            t++
                        ) {
                            var r = n[t];
                            if (r !== e && r.form === e.form) {
                                var l = yo(r);
                                if (!l) throw Error(s(90));
                                Us(r), Sl(r, l);
                            }
                        }
                    }
                    break;
                case "textarea":
                    Vs(e, n);
                    break;
                case "select":
                    (t = n.value), t != null && xn(e, !!n.multiple, t, !1);
            }
        }),
        (Zs = ns),
        (bs = gn);
    var Kp = { usingClientEntryPoint: !1, Events: [kr, Dn, yo, Ys, Js, ns] },
        Ir = {
            findFiberByHostInstance: an,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom",
        },
        qp = {
            bundleType: Ir.bundleType,
            version: Ir.version,
            rendererPackageName: Ir.rendererPackageName,
            rendererConfig: Ir.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: Y.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
                return (e = ru(e)), e === null ? null : e.stateNode;
            },
            findFiberByHostInstance: Ir.findFiberByHostInstance,
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
        };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var el = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!el.isDisabled && el.supportsFiber)
            try {
                (Yr = el.inject(qp)), (_t = el);
            } catch {}
    }
    return (
        (rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Kp),
        (rt.createPortal = function (e, t) {
            var n =
                2 < arguments.length && arguments[2] !== void 0
                    ? arguments[2]
                    : null;
            if (!fs(t)) throw Error(s(200));
            return Wp(e, t, null, n);
        }),
        (rt.createRoot = function (e, t) {
            if (!fs(e)) throw Error(s(299));
            var n = !1,
                r = "",
                l = Oc;
            return (
                t != null &&
                    (t.unstable_strictMode === !0 && (n = !0),
                    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
                    t.onRecoverableError !== void 0 &&
                        (l = t.onRecoverableError)),
                (t = us(e, 1, !1, null, null, n, !1, r, l)),
                (e[Mt] = t.current),
                Sr(e.nodeType === 8 ? e.parentNode : e),
                new cs(t)
            );
        }),
        (rt.findDOMNode = function (e) {
            if (e == null) return null;
            if (e.nodeType === 1) return e;
            var t = e._reactInternals;
            if (t === void 0)
                throw typeof e.render == "function"
                    ? Error(s(188))
                    : ((e = Object.keys(e).join(",")), Error(s(268, e)));
            return (e = ru(t)), (e = e === null ? null : e.stateNode), e;
        }),
        (rt.flushSync = function (e) {
            return gn(e);
        }),
        (rt.hydrate = function (e, t, n) {
            if (!Zo(t)) throw Error(s(200));
            return bo(null, e, t, !0, n);
        }),
        (rt.hydrateRoot = function (e, t, n) {
            if (!fs(e)) throw Error(s(405));
            var r = (n != null && n.hydratedSources) || null,
                l = !1,
                u = "",
                c = Oc;
            if (
                (n != null &&
                    (n.unstable_strictMode === !0 && (l = !0),
                    n.identifierPrefix !== void 0 && (u = n.identifierPrefix),
                    n.onRecoverableError !== void 0 &&
                        (c = n.onRecoverableError)),
                (t = Tc(t, null, e, 1, n ?? null, l, !1, u, c)),
                (e[Mt] = t.current),
                Sr(e),
                r)
            )
                for (e = 0; e < r.length; e++)
                    (n = r[e]),
                        (l = n._getVersion),
                        (l = l(n._source)),
                        t.mutableSourceEagerHydrationData == null
                            ? (t.mutableSourceEagerHydrationData = [n, l])
                            : t.mutableSourceEagerHydrationData.push(n, l);
            return new Jo(t);
        }),
        (rt.render = function (e, t, n) {
            if (!Zo(t)) throw Error(s(200));
            return bo(null, e, t, !1, n);
        }),
        (rt.unmountComponentAtNode = function (e) {
            if (!Zo(e)) throw Error(s(40));
            return e._reactRootContainer
                ? (gn(function () {
                      bo(null, null, e, !1, function () {
                          (e._reactRootContainer = null), (e[Mt] = null);
                      });
                  }),
                  !0)
                : !1;
        }),
        (rt.unstable_batchedUpdates = ns),
        (rt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Zo(n)) throw Error(s(200));
            if (e == null || e._reactInternals === void 0) throw Error(s(38));
            return bo(e, t, n, !1, r);
        }),
        (rt.version = "18.3.1-next-f1338f8080-20240426"),
        rt
    );
}
var jc;
function th() {
    if (jc) return hs.exports;
    jc = 1;
    function o() {
        if (
            !(
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
            )
        )
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
            } catch (i) {
                console.error(i);
            }
    }
    return o(), (hs.exports = eh()), hs.exports;
}
var Bc;
function nh() {
    if (Bc) return tl;
    Bc = 1;
    var o = th();
    return (tl.createRoot = o.createRoot), (tl.hydrateRoot = o.hydrateRoot), tl;
}
var rh = nh();
const oh = "/great-writer/pencil-DKN8y-nh.png";
var lh = Object.defineProperty,
    sl = Object.getOwnPropertySymbols,
    df = Object.prototype.hasOwnProperty,
    pf = Object.prototype.propertyIsEnumerable,
    Hc = (o, i, s) =>
        i in o
            ? lh(o, i, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: s,
              })
            : (o[i] = s),
    Cs = (o, i) => {
        for (var s in i || (i = {})) df.call(i, s) && Hc(o, s, i[s]);
        if (sl) for (var s of sl(i)) pf.call(i, s) && Hc(o, s, i[s]);
        return o;
    },
    ks = (o, i) => {
        var s = {};
        for (var a in o) df.call(o, a) && i.indexOf(a) < 0 && (s[a] = o[a]);
        if (o != null && sl)
            for (var a of sl(o))
                i.indexOf(a) < 0 && pf.call(o, a) && (s[a] = o[a]);
        return s;
    };
/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */ var kn;
((o) => {
    const i = class oe {
        constructor(p, h, y, S) {
            if (
                ((this.version = p),
                (this.errorCorrectionLevel = h),
                (this.modules = []),
                (this.isFunction = []),
                p < oe.MIN_VERSION || p > oe.MAX_VERSION)
            )
                throw new RangeError("Version value out of range");
            if (S < -1 || S > 7)
                throw new RangeError("Mask value out of range");
            this.size = p * 4 + 17;
            let P = [];
            for (let _ = 0; _ < this.size; _++) P.push(!1);
            for (let _ = 0; _ < this.size; _++)
                this.modules.push(P.slice()), this.isFunction.push(P.slice());
            this.drawFunctionPatterns();
            const D = this.addEccAndInterleave(y);
            if ((this.drawCodewords(D), S == -1)) {
                let _ = 1e9;
                for (let O = 0; O < 8; O++) {
                    this.applyMask(O), this.drawFormatBits(O);
                    const N = this.getPenaltyScore();
                    N < _ && ((S = O), (_ = N)), this.applyMask(O);
                }
            }
            f(0 <= S && S <= 7),
                (this.mask = S),
                this.applyMask(S),
                this.drawFormatBits(S),
                (this.isFunction = []);
        }
        static encodeText(p, h) {
            const y = o.QrSegment.makeSegments(p);
            return oe.encodeSegments(y, h);
        }
        static encodeBinary(p, h) {
            const y = o.QrSegment.makeBytes(p);
            return oe.encodeSegments([y], h);
        }
        static encodeSegments(p, h, y = 1, S = 40, P = -1, D = !0) {
            if (
                !(oe.MIN_VERSION <= y && y <= S && S <= oe.MAX_VERSION) ||
                P < -1 ||
                P > 7
            )
                throw new RangeError("Invalid value");
            let _, O;
            for (_ = y; ; _++) {
                const U = oe.getNumDataCodewords(_, h) * 8,
                    Y = m.getTotalBits(p, _);
                if (Y <= U) {
                    O = Y;
                    break;
                }
                if (_ >= S) throw new RangeError("Data too long");
            }
            for (const U of [oe.Ecc.MEDIUM, oe.Ecc.QUARTILE, oe.Ecc.HIGH])
                D && O <= oe.getNumDataCodewords(_, U) * 8 && (h = U);
            let N = [];
            for (const U of p) {
                s(U.mode.modeBits, 4, N),
                    s(U.numChars, U.mode.numCharCountBits(_), N);
                for (const Y of U.getData()) N.push(Y);
            }
            f(N.length == O);
            const X = oe.getNumDataCodewords(_, h) * 8;
            f(N.length <= X),
                s(0, Math.min(4, X - N.length), N),
                s(0, (8 - (N.length % 8)) % 8, N),
                f(N.length % 8 == 0);
            for (let U = 236; N.length < X; U ^= 253) s(U, 8, N);
            let Q = [];
            for (; Q.length * 8 < N.length; ) Q.push(0);
            return (
                N.forEach((U, Y) => (Q[Y >>> 3] |= U << (7 - (Y & 7)))),
                new oe(_, h, Q, P)
            );
        }
        getModule(p, h) {
            return (
                0 <= p &&
                p < this.size &&
                0 <= h &&
                h < this.size &&
                this.modules[h][p]
            );
        }
        getModules() {
            return this.modules;
        }
        drawFunctionPatterns() {
            for (let y = 0; y < this.size; y++)
                this.setFunctionModule(6, y, y % 2 == 0),
                    this.setFunctionModule(y, 6, y % 2 == 0);
            this.drawFinderPattern(3, 3),
                this.drawFinderPattern(this.size - 4, 3),
                this.drawFinderPattern(3, this.size - 4);
            const p = this.getAlignmentPatternPositions(),
                h = p.length;
            for (let y = 0; y < h; y++)
                for (let S = 0; S < h; S++)
                    (y == 0 && S == 0) ||
                        (y == 0 && S == h - 1) ||
                        (y == h - 1 && S == 0) ||
                        this.drawAlignmentPattern(p[y], p[S]);
            this.drawFormatBits(0), this.drawVersion();
        }
        drawFormatBits(p) {
            const h = (this.errorCorrectionLevel.formatBits << 3) | p;
            let y = h;
            for (let P = 0; P < 10; P++) y = (y << 1) ^ ((y >>> 9) * 1335);
            const S = ((h << 10) | y) ^ 21522;
            f(S >>> 15 == 0);
            for (let P = 0; P <= 5; P++) this.setFunctionModule(8, P, a(S, P));
            this.setFunctionModule(8, 7, a(S, 6)),
                this.setFunctionModule(8, 8, a(S, 7)),
                this.setFunctionModule(7, 8, a(S, 8));
            for (let P = 9; P < 15; P++)
                this.setFunctionModule(14 - P, 8, a(S, P));
            for (let P = 0; P < 8; P++)
                this.setFunctionModule(this.size - 1 - P, 8, a(S, P));
            for (let P = 8; P < 15; P++)
                this.setFunctionModule(8, this.size - 15 + P, a(S, P));
            this.setFunctionModule(8, this.size - 8, !0);
        }
        drawVersion() {
            if (this.version < 7) return;
            let p = this.version;
            for (let y = 0; y < 12; y++) p = (p << 1) ^ ((p >>> 11) * 7973);
            const h = (this.version << 12) | p;
            f(h >>> 18 == 0);
            for (let y = 0; y < 18; y++) {
                const S = a(h, y),
                    P = this.size - 11 + (y % 3),
                    D = Math.floor(y / 3);
                this.setFunctionModule(P, D, S),
                    this.setFunctionModule(D, P, S);
            }
        }
        drawFinderPattern(p, h) {
            for (let y = -4; y <= 4; y++)
                for (let S = -4; S <= 4; S++) {
                    const P = Math.max(Math.abs(S), Math.abs(y)),
                        D = p + S,
                        _ = h + y;
                    0 <= D &&
                        D < this.size &&
                        0 <= _ &&
                        _ < this.size &&
                        this.setFunctionModule(D, _, P != 2 && P != 4);
                }
        }
        drawAlignmentPattern(p, h) {
            for (let y = -2; y <= 2; y++)
                for (let S = -2; S <= 2; S++)
                    this.setFunctionModule(
                        p + S,
                        h + y,
                        Math.max(Math.abs(S), Math.abs(y)) != 1,
                    );
        }
        setFunctionModule(p, h, y) {
            (this.modules[h][p] = y), (this.isFunction[h][p] = !0);
        }
        addEccAndInterleave(p) {
            const h = this.version,
                y = this.errorCorrectionLevel;
            if (p.length != oe.getNumDataCodewords(h, y))
                throw new RangeError("Invalid argument");
            const S = oe.NUM_ERROR_CORRECTION_BLOCKS[y.ordinal][h],
                P = oe.ECC_CODEWORDS_PER_BLOCK[y.ordinal][h],
                D = Math.floor(oe.getNumRawDataModules(h) / 8),
                _ = S - (D % S),
                O = Math.floor(D / S);
            let N = [];
            const X = oe.reedSolomonComputeDivisor(P);
            for (let U = 0, Y = 0; U < S; U++) {
                let ee = p.slice(Y, Y + O - P + (U < _ ? 0 : 1));
                Y += ee.length;
                const le = oe.reedSolomonComputeRemainder(ee, X);
                U < _ && ee.push(0), N.push(ee.concat(le));
            }
            let Q = [];
            for (let U = 0; U < N[0].length; U++)
                N.forEach((Y, ee) => {
                    (U != O - P || ee >= _) && Q.push(Y[U]);
                });
            return f(Q.length == D), Q;
        }
        drawCodewords(p) {
            if (
                p.length !=
                Math.floor(oe.getNumRawDataModules(this.version) / 8)
            )
                throw new RangeError("Invalid argument");
            let h = 0;
            for (let y = this.size - 1; y >= 1; y -= 2) {
                y == 6 && (y = 5);
                for (let S = 0; S < this.size; S++)
                    for (let P = 0; P < 2; P++) {
                        const D = y - P,
                            O = ((y + 1) & 2) == 0 ? this.size - 1 - S : S;
                        !this.isFunction[O][D] &&
                            h < p.length * 8 &&
                            ((this.modules[O][D] = a(p[h >>> 3], 7 - (h & 7))),
                            h++);
                    }
            }
            f(h == p.length * 8);
        }
        applyMask(p) {
            if (p < 0 || p > 7) throw new RangeError("Mask value out of range");
            for (let h = 0; h < this.size; h++)
                for (let y = 0; y < this.size; y++) {
                    let S;
                    switch (p) {
                        case 0:
                            S = (y + h) % 2 == 0;
                            break;
                        case 1:
                            S = h % 2 == 0;
                            break;
                        case 2:
                            S = y % 3 == 0;
                            break;
                        case 3:
                            S = (y + h) % 3 == 0;
                            break;
                        case 4:
                            S =
                                (Math.floor(y / 3) + Math.floor(h / 2)) % 2 ==
                                0;
                            break;
                        case 5:
                            S = ((y * h) % 2) + ((y * h) % 3) == 0;
                            break;
                        case 6:
                            S = (((y * h) % 2) + ((y * h) % 3)) % 2 == 0;
                            break;
                        case 7:
                            S = (((y + h) % 2) + ((y * h) % 3)) % 2 == 0;
                            break;
                        default:
                            throw new Error("Unreachable");
                    }
                    !this.isFunction[h][y] &&
                        S &&
                        (this.modules[h][y] = !this.modules[h][y]);
                }
        }
        getPenaltyScore() {
            let p = 0;
            for (let P = 0; P < this.size; P++) {
                let D = !1,
                    _ = 0,
                    O = [0, 0, 0, 0, 0, 0, 0];
                for (let N = 0; N < this.size; N++)
                    this.modules[P][N] == D
                        ? (_++, _ == 5 ? (p += oe.PENALTY_N1) : _ > 5 && p++)
                        : (this.finderPenaltyAddHistory(_, O),
                          D ||
                              (p +=
                                  this.finderPenaltyCountPatterns(O) *
                                  oe.PENALTY_N3),
                          (D = this.modules[P][N]),
                          (_ = 1));
                p +=
                    this.finderPenaltyTerminateAndCount(D, _, O) *
                    oe.PENALTY_N3;
            }
            for (let P = 0; P < this.size; P++) {
                let D = !1,
                    _ = 0,
                    O = [0, 0, 0, 0, 0, 0, 0];
                for (let N = 0; N < this.size; N++)
                    this.modules[N][P] == D
                        ? (_++, _ == 5 ? (p += oe.PENALTY_N1) : _ > 5 && p++)
                        : (this.finderPenaltyAddHistory(_, O),
                          D ||
                              (p +=
                                  this.finderPenaltyCountPatterns(O) *
                                  oe.PENALTY_N3),
                          (D = this.modules[N][P]),
                          (_ = 1));
                p +=
                    this.finderPenaltyTerminateAndCount(D, _, O) *
                    oe.PENALTY_N3;
            }
            for (let P = 0; P < this.size - 1; P++)
                for (let D = 0; D < this.size - 1; D++) {
                    const _ = this.modules[P][D];
                    _ == this.modules[P][D + 1] &&
                        _ == this.modules[P + 1][D] &&
                        _ == this.modules[P + 1][D + 1] &&
                        (p += oe.PENALTY_N2);
                }
            let h = 0;
            for (const P of this.modules)
                h = P.reduce((D, _) => D + (_ ? 1 : 0), h);
            const y = this.size * this.size,
                S = Math.ceil(Math.abs(h * 20 - y * 10) / y) - 1;
            return (
                f(0 <= S && S <= 9),
                (p += S * oe.PENALTY_N4),
                f(0 <= p && p <= 2568888),
                p
            );
        }
        getAlignmentPatternPositions() {
            if (this.version == 1) return [];
            {
                const p = Math.floor(this.version / 7) + 2,
                    h =
                        this.version == 32
                            ? 26
                            : Math.ceil((this.version * 4 + 4) / (p * 2 - 2)) *
                              2;
                let y = [6];
                for (let S = this.size - 7; y.length < p; S -= h)
                    y.splice(1, 0, S);
                return y;
            }
        }
        static getNumRawDataModules(p) {
            if (p < oe.MIN_VERSION || p > oe.MAX_VERSION)
                throw new RangeError("Version number out of range");
            let h = (16 * p + 128) * p + 64;
            if (p >= 2) {
                const y = Math.floor(p / 7) + 2;
                (h -= (25 * y - 10) * y - 55), p >= 7 && (h -= 36);
            }
            return f(208 <= h && h <= 29648), h;
        }
        static getNumDataCodewords(p, h) {
            return (
                Math.floor(oe.getNumRawDataModules(p) / 8) -
                oe.ECC_CODEWORDS_PER_BLOCK[h.ordinal][p] *
                    oe.NUM_ERROR_CORRECTION_BLOCKS[h.ordinal][p]
            );
        }
        static reedSolomonComputeDivisor(p) {
            if (p < 1 || p > 255) throw new RangeError("Degree out of range");
            let h = [];
            for (let S = 0; S < p - 1; S++) h.push(0);
            h.push(1);
            let y = 1;
            for (let S = 0; S < p; S++) {
                for (let P = 0; P < h.length; P++)
                    (h[P] = oe.reedSolomonMultiply(h[P], y)),
                        P + 1 < h.length && (h[P] ^= h[P + 1]);
                y = oe.reedSolomonMultiply(y, 2);
            }
            return h;
        }
        static reedSolomonComputeRemainder(p, h) {
            let y = h.map((S) => 0);
            for (const S of p) {
                const P = S ^ y.shift();
                y.push(0),
                    h.forEach((D, _) => (y[_] ^= oe.reedSolomonMultiply(D, P)));
            }
            return y;
        }
        static reedSolomonMultiply(p, h) {
            if (p >>> 8 || h >>> 8) throw new RangeError("Byte out of range");
            let y = 0;
            for (let S = 7; S >= 0; S--)
                (y = (y << 1) ^ ((y >>> 7) * 285)), (y ^= ((h >>> S) & 1) * p);
            return f(y >>> 8 == 0), y;
        }
        finderPenaltyCountPatterns(p) {
            const h = p[1];
            f(h <= this.size * 3);
            const y =
                h > 0 && p[2] == h && p[3] == h * 3 && p[4] == h && p[5] == h;
            return (
                (y && p[0] >= h * 4 && p[6] >= h ? 1 : 0) +
                (y && p[6] >= h * 4 && p[0] >= h ? 1 : 0)
            );
        }
        finderPenaltyTerminateAndCount(p, h, y) {
            return (
                p && (this.finderPenaltyAddHistory(h, y), (h = 0)),
                (h += this.size),
                this.finderPenaltyAddHistory(h, y),
                this.finderPenaltyCountPatterns(y)
            );
        }
        finderPenaltyAddHistory(p, h) {
            h[0] == 0 && (p += this.size), h.pop(), h.unshift(p);
        }
    };
    (i.MIN_VERSION = 1),
        (i.MAX_VERSION = 40),
        (i.PENALTY_N1 = 3),
        (i.PENALTY_N2 = 3),
        (i.PENALTY_N3 = 40),
        (i.PENALTY_N4 = 10),
        (i.ECC_CODEWORDS_PER_BLOCK = [
            [
                -1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22,
                24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30,
                30, 30, 30, 30, 30, 30, 30, 30, 30,
            ],
            [
                -1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24,
                28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28,
                28, 28, 28, 28, 28, 28, 28, 28, 28,
            ],
            [
                -1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30,
                24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30,
                30, 30, 30, 30, 30, 30, 30, 30, 30,
            ],
            [
                -1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24,
                30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30,
                30, 30, 30, 30, 30, 30, 30, 30, 30,
            ],
        ]),
        (i.NUM_ERROR_CORRECTION_BLOCKS = [
            [
                -1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8,
                8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21,
                22, 24, 25,
            ],
            [
                -1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13,
                14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37,
                38, 40, 43, 45, 47, 49,
            ],
            [
                -1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18,
                21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51,
                53, 56, 59, 62, 65, 68,
            ],
            [
                -1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19,
                21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57,
                60, 63, 66, 70, 74, 77, 81,
            ],
        ]),
        (o.QrCode = i);
    function s(w, p, h) {
        if (p < 0 || p > 31 || w >>> p)
            throw new RangeError("Value out of range");
        for (let y = p - 1; y >= 0; y--) h.push((w >>> y) & 1);
    }
    function a(w, p) {
        return ((w >>> p) & 1) != 0;
    }
    function f(w) {
        if (!w) throw new Error("Assertion error");
    }
    const d = class Pe {
        constructor(p, h, y) {
            if (
                ((this.mode = p),
                (this.numChars = h),
                (this.bitData = y),
                h < 0)
            )
                throw new RangeError("Invalid argument");
            this.bitData = y.slice();
        }
        static makeBytes(p) {
            let h = [];
            for (const y of p) s(y, 8, h);
            return new Pe(Pe.Mode.BYTE, p.length, h);
        }
        static makeNumeric(p) {
            if (!Pe.isNumeric(p))
                throw new RangeError("String contains non-numeric characters");
            let h = [];
            for (let y = 0; y < p.length; ) {
                const S = Math.min(p.length - y, 3);
                s(parseInt(p.substring(y, y + S), 10), S * 3 + 1, h), (y += S);
            }
            return new Pe(Pe.Mode.NUMERIC, p.length, h);
        }
        static makeAlphanumeric(p) {
            if (!Pe.isAlphanumeric(p))
                throw new RangeError(
                    "String contains unencodable characters in alphanumeric mode",
                );
            let h = [],
                y;
            for (y = 0; y + 2 <= p.length; y += 2) {
                let S = Pe.ALPHANUMERIC_CHARSET.indexOf(p.charAt(y)) * 45;
                (S += Pe.ALPHANUMERIC_CHARSET.indexOf(p.charAt(y + 1))),
                    s(S, 11, h);
            }
            return (
                y < p.length &&
                    s(Pe.ALPHANUMERIC_CHARSET.indexOf(p.charAt(y)), 6, h),
                new Pe(Pe.Mode.ALPHANUMERIC, p.length, h)
            );
        }
        static makeSegments(p) {
            return p == ""
                ? []
                : Pe.isNumeric(p)
                ? [Pe.makeNumeric(p)]
                : Pe.isAlphanumeric(p)
                ? [Pe.makeAlphanumeric(p)]
                : [Pe.makeBytes(Pe.toUtf8ByteArray(p))];
        }
        static makeEci(p) {
            let h = [];
            if (p < 0)
                throw new RangeError("ECI assignment value out of range");
            if (p < 128) s(p, 8, h);
            else if (p < 16384) s(2, 2, h), s(p, 14, h);
            else if (p < 1e6) s(6, 3, h), s(p, 21, h);
            else throw new RangeError("ECI assignment value out of range");
            return new Pe(Pe.Mode.ECI, 0, h);
        }
        static isNumeric(p) {
            return Pe.NUMERIC_REGEX.test(p);
        }
        static isAlphanumeric(p) {
            return Pe.ALPHANUMERIC_REGEX.test(p);
        }
        getData() {
            return this.bitData.slice();
        }
        static getTotalBits(p, h) {
            let y = 0;
            for (const S of p) {
                const P = S.mode.numCharCountBits(h);
                if (S.numChars >= 1 << P) return 1 / 0;
                y += 4 + P + S.bitData.length;
            }
            return y;
        }
        static toUtf8ByteArray(p) {
            p = encodeURI(p);
            let h = [];
            for (let y = 0; y < p.length; y++)
                p.charAt(y) != "%"
                    ? h.push(p.charCodeAt(y))
                    : (h.push(parseInt(p.substring(y + 1, y + 3), 16)),
                      (y += 2));
            return h;
        }
    };
    (d.NUMERIC_REGEX = /^[0-9]*$/),
        (d.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/),
        (d.ALPHANUMERIC_CHARSET =
            "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:");
    let m = d;
    o.QrSegment = d;
})(kn || (kn = {}));
((o) => {
    ((i) => {
        const s = class {
            constructor(f, d) {
                (this.ordinal = f), (this.formatBits = d);
            }
        };
        (s.LOW = new s(0, 1)),
            (s.MEDIUM = new s(1, 0)),
            (s.QUARTILE = new s(2, 3)),
            (s.HIGH = new s(3, 2)),
            (i.Ecc = s);
    })(o.QrCode || (o.QrCode = {}));
})(kn || (kn = {}));
((o) => {
    ((i) => {
        const s = class {
            constructor(f, d) {
                (this.modeBits = f), (this.numBitsCharCount = d);
            }
            numCharCountBits(f) {
                return this.numBitsCharCount[Math.floor((f + 7) / 17)];
            }
        };
        (s.NUMERIC = new s(1, [10, 12, 14])),
            (s.ALPHANUMERIC = new s(2, [9, 11, 13])),
            (s.BYTE = new s(4, [8, 16, 16])),
            (s.KANJI = new s(8, [8, 10, 12])),
            (s.ECI = new s(7, [0, 0, 0])),
            (i.Mode = s);
    })(o.QrSegment || (o.QrSegment = {}));
})(kn || (kn = {}));
var Yn = kn;
/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */ var ih = {
        L: Yn.QrCode.Ecc.LOW,
        M: Yn.QrCode.Ecc.MEDIUM,
        Q: Yn.QrCode.Ecc.QUARTILE,
        H: Yn.QrCode.Ecc.HIGH,
    },
    hf = 128,
    mf = "L",
    yf = "#FFFFFF",
    gf = "#000000",
    vf = !1,
    wf = 1,
    sh = 4,
    uh = 0,
    ah = 0.1;
function Sf(o, i = 0) {
    const s = [];
    return (
        o.forEach(function (a, f) {
            let d = null;
            a.forEach(function (m, w) {
                if (!m && d !== null) {
                    s.push(`M${d + i} ${f + i}h${w - d}v1H${d + i}z`),
                        (d = null);
                    return;
                }
                if (w === a.length - 1) {
                    if (!m) return;
                    d === null
                        ? s.push(`M${w + i},${f + i} h1v1H${w + i}z`)
                        : s.push(
                              `M${d + i},${f + i} h${w + 1 - d}v1H${d + i}z`,
                          );
                    return;
                }
                m && d === null && (d = w);
            });
        }),
        s.join("")
    );
}
function Ef(o, i) {
    return o
        .slice()
        .map((s, a) =>
            a < i.y || a >= i.y + i.h
                ? s
                : s.map((f, d) => (d < i.x || d >= i.x + i.w ? f : !1)),
        );
}
function ch(o, i, s, a) {
    if (a == null) return null;
    const f = o.length + s * 2,
        d = Math.floor(i * ah),
        m = f / i,
        w = (a.width || d) * m,
        p = (a.height || d) * m,
        h = a.x == null ? o.length / 2 - w / 2 : a.x * m,
        y = a.y == null ? o.length / 2 - p / 2 : a.y * m,
        S = a.opacity == null ? 1 : a.opacity;
    let P = null;
    if (a.excavate) {
        let _ = Math.floor(h),
            O = Math.floor(y),
            N = Math.ceil(w + h - _),
            X = Math.ceil(p + y - O);
        P = { x: _, y: O, w: N, h: X };
    }
    const D = a.crossOrigin;
    return { x: h, y, h: p, w, excavation: P, opacity: S, crossOrigin: D };
}
function fh(o, i) {
    return i != null ? Math.max(Math.floor(i), 0) : o ? sh : uh;
}
function Cf({
    value: o,
    level: i,
    minVersion: s,
    includeMargin: a,
    marginSize: f,
    imageSettings: d,
    size: m,
    boostLevel: w,
}) {
    let p = De.useMemo(() => {
        const _ = (Array.isArray(o) ? o : [o]).reduce(
            (O, N) => (O.push(...Yn.QrSegment.makeSegments(N)), O),
            [],
        );
        return Yn.QrCode.encodeSegments(_, ih[i], s, void 0, void 0, w);
    }, [o, i, s, w]);
    const {
        cells: h,
        margin: y,
        numCells: S,
        calculatedImageSettings: P,
    } = De.useMemo(() => {
        let D = p.getModules();
        const _ = fh(a, f),
            O = D.length + _ * 2,
            N = ch(D, m, _, d);
        return { cells: D, margin: _, numCells: O, calculatedImageSettings: N };
    }, [p, m, d, a, f]);
    return {
        qrcode: p,
        margin: y,
        cells: h,
        numCells: S,
        calculatedImageSettings: P,
    };
}
var dh = (function () {
        try {
            new Path2D().addPath(new Path2D());
        } catch {
            return !1;
        }
        return !0;
    })(),
    kf = De.forwardRef(function (i, s) {
        const a = i,
            {
                value: f,
                size: d = hf,
                level: m = mf,
                bgColor: w = yf,
                fgColor: p = gf,
                includeMargin: h = vf,
                minVersion: y = wf,
                boostLevel: S,
                marginSize: P,
                imageSettings: D,
            } = a,
            O = ks(a, [
                "value",
                "size",
                "level",
                "bgColor",
                "fgColor",
                "includeMargin",
                "minVersion",
                "boostLevel",
                "marginSize",
                "imageSettings",
            ]),
            { style: N } = O,
            X = ks(O, ["style"]),
            Q = D == null ? void 0 : D.src,
            U = De.useRef(null),
            Y = De.useRef(null),
            ee = De.useCallback(
                (Re) => {
                    (U.current = Re),
                        typeof s == "function" ? s(Re) : s && (s.current = Re);
                },
                [s],
            ),
            [le, Z] = De.useState(!1),
            {
                margin: ce,
                cells: _e,
                numCells: Ge,
                calculatedImageSettings: Ce,
            } = Cf({
                value: f,
                level: m,
                minVersion: y,
                boostLevel: S,
                includeMargin: h,
                marginSize: P,
                imageSettings: D,
                size: d,
            });
        De.useEffect(() => {
            if (U.current != null) {
                const Re = U.current,
                    Oe = Re.getContext("2d");
                if (!Oe) return;
                let Be = _e;
                const pe = Y.current,
                    I =
                        Ce != null &&
                        pe !== null &&
                        pe.complete &&
                        pe.naturalHeight !== 0 &&
                        pe.naturalWidth !== 0;
                I && Ce.excavation != null && (Be = Ef(_e, Ce.excavation));
                const K = window.devicePixelRatio || 1;
                Re.height = Re.width = d * K;
                const B = (d / Ge) * K;
                Oe.scale(B, B),
                    (Oe.fillStyle = w),
                    Oe.fillRect(0, 0, Ge, Ge),
                    (Oe.fillStyle = p),
                    dh
                        ? Oe.fill(new Path2D(Sf(Be, ce)))
                        : _e.forEach(function (C, L) {
                              C.forEach(function (te, ne) {
                                  te && Oe.fillRect(ne + ce, L + ce, 1, 1);
                              });
                          }),
                    Ce && (Oe.globalAlpha = Ce.opacity),
                    I && Oe.drawImage(pe, Ce.x + ce, Ce.y + ce, Ce.w, Ce.h);
            }
        }),
            De.useEffect(() => {
                Z(!1);
            }, [Q]);
        const Xe = Cs({ height: d, width: d }, N);
        let ke = null;
        return (
            Q != null &&
                (ke = De.createElement("img", {
                    src: Q,
                    key: Q,
                    style: { display: "none" },
                    onLoad: () => {
                        Z(!0);
                    },
                    ref: Y,
                    crossOrigin: Ce == null ? void 0 : Ce.crossOrigin,
                })),
            De.createElement(
                De.Fragment,
                null,
                De.createElement(
                    "canvas",
                    Cs(
                        {
                            style: Xe,
                            height: d,
                            width: d,
                            ref: ee,
                            role: "img",
                        },
                        X,
                    ),
                ),
                ke,
            )
        );
    });
kf.displayName = "QRCodeCanvas";
var ph = De.forwardRef(function (i, s) {
    const a = i,
        {
            value: f,
            size: d = hf,
            level: m = mf,
            bgColor: w = yf,
            fgColor: p = gf,
            includeMargin: h = vf,
            minVersion: y = wf,
            boostLevel: S,
            title: P,
            marginSize: D,
            imageSettings: _,
        } = a,
        O = ks(a, [
            "value",
            "size",
            "level",
            "bgColor",
            "fgColor",
            "includeMargin",
            "minVersion",
            "boostLevel",
            "title",
            "marginSize",
            "imageSettings",
        ]),
        {
            margin: N,
            cells: X,
            numCells: Q,
            calculatedImageSettings: U,
        } = Cf({
            value: f,
            level: m,
            minVersion: y,
            boostLevel: S,
            includeMargin: h,
            marginSize: D,
            imageSettings: _,
            size: d,
        });
    let Y = X,
        ee = null;
    _ != null &&
        U != null &&
        (U.excavation != null && (Y = Ef(X, U.excavation)),
        (ee = De.createElement("image", {
            href: _.src,
            height: U.h,
            width: U.w,
            x: U.x + N,
            y: U.y + N,
            preserveAspectRatio: "none",
            opacity: U.opacity,
            crossOrigin: U.crossOrigin,
        })));
    const le = Sf(Y, N);
    return De.createElement(
        "svg",
        Cs(
            {
                height: d,
                width: d,
                viewBox: `0 0 ${Q} ${Q}`,
                ref: s,
                role: "img",
            },
            O,
        ),
        !!P && De.createElement("title", null, P),
        De.createElement("path", {
            fill: w,
            d: `M0,0 h${Q}v${Q}H0z`,
            shapeRendering: "crispEdges",
        }),
        De.createElement("path", {
            fill: p,
            d: le,
            shapeRendering: "crispEdges",
        }),
        ee,
    );
});
ph.displayName = "QRCodeSVG";
function hh({ content: o, footer: i }) {
    return Fe.jsxs("div", {
        className: "card",
        children: [
            Fe.jsx("div", { className: "content", children: o }),
            Fe.jsxs("div", {
                className: "footer",
                children: [
                    Fe.jsxs("label", {
                        className: "footer-author-name",
                        children: ["仿 · ", i],
                    }),
                    Fe.jsx("div", {
                        className: "pencil-container",
                        children: Fe.jsx("img", {
                            src: oh,
                            alt: "pencil",
                            width: 60,
                            height: 30,
                        }),
                    }),
                ],
            }),
            Fe.jsx(kf, {
                value: window.location.href,
                style: {
                    width: 40,
                    height: 40,
                    position: "absolute",
                    bottom: "1rem",
                },
            }),
            Fe.jsx("div", {
                className: "footer-author",
                children: "@妙笔生花",
            }),
        ],
    });
}
function mh(o, i) {
    if (o.match(/^[a-z]+:\/\//i)) return o;
    if (o.match(/^\/\//)) return window.location.protocol + o;
    if (o.match(/^[a-z]+:/i)) return o;
    const s = document.implementation.createHTMLDocument(),
        a = s.createElement("base"),
        f = s.createElement("a");
    return (
        s.head.appendChild(a),
        s.body.appendChild(f),
        i && (a.href = i),
        (f.href = o),
        f.href
    );
}
const yh = (() => {
    let o = 0;
    const i = () =>
        `0000${((Math.random() * 36 ** 4) << 0).toString(36)}`.slice(-4);
    return () => ((o += 1), `u${i()}${o}`);
})();
function Ht(o) {
    const i = [];
    for (let s = 0, a = o.length; s < a; s++) i.push(o[s]);
    return i;
}
function ul(o, i) {
    const a = (o.ownerDocument.defaultView || window)
        .getComputedStyle(o)
        .getPropertyValue(i);
    return a ? parseFloat(a.replace("px", "")) : 0;
}
function gh(o) {
    const i = ul(o, "border-left-width"),
        s = ul(o, "border-right-width");
    return o.clientWidth + i + s;
}
function vh(o) {
    const i = ul(o, "border-top-width"),
        s = ul(o, "border-bottom-width");
    return o.clientHeight + i + s;
}
function Rf(o, i = {}) {
    const s = i.width || gh(o),
        a = i.height || vh(o);
    return { width: s, height: a };
}
function wh() {
    let o, i;
    try {
        i = process;
    } catch {}
    const s = i && i.env ? i.env.devicePixelRatio : null;
    return (
        s && ((o = parseInt(s, 10)), Number.isNaN(o) && (o = 1)),
        o || window.devicePixelRatio || 1
    );
}
const ft = 16384;
function Sh(o) {
    (o.width > ft || o.height > ft) &&
        (o.width > ft && o.height > ft
            ? o.width > o.height
                ? ((o.height *= ft / o.width), (o.width = ft))
                : ((o.width *= ft / o.height), (o.height = ft))
            : o.width > ft
            ? ((o.height *= ft / o.width), (o.width = ft))
            : ((o.width *= ft / o.height), (o.height = ft)));
}
function al(o) {
    return new Promise((i, s) => {
        const a = new Image();
        (a.decode = () => i(a)),
            (a.onload = () => i(a)),
            (a.onerror = s),
            (a.crossOrigin = "anonymous"),
            (a.decoding = "async"),
            (a.src = o);
    });
}
async function Eh(o) {
    return Promise.resolve()
        .then(() => new XMLSerializer().serializeToString(o))
        .then(encodeURIComponent)
        .then((i) => `data:image/svg+xml;charset=utf-8,${i}`);
}
async function Ch(o, i, s) {
    const a = "http://www.w3.org/2000/svg",
        f = document.createElementNS(a, "svg"),
        d = document.createElementNS(a, "foreignObject");
    return (
        f.setAttribute("width", `${i}`),
        f.setAttribute("height", `${s}`),
        f.setAttribute("viewBox", `0 0 ${i} ${s}`),
        d.setAttribute("width", "100%"),
        d.setAttribute("height", "100%"),
        d.setAttribute("x", "0"),
        d.setAttribute("y", "0"),
        d.setAttribute("externalResourcesRequired", "true"),
        f.appendChild(d),
        d.appendChild(o),
        Eh(f)
    );
}
const ot = (o, i) => {
    if (o instanceof i) return !0;
    const s = Object.getPrototypeOf(o);
    return s === null ? !1 : s.constructor.name === i.name || ot(s, i);
};
function kh(o) {
    const i = o.getPropertyValue("content");
    return `${o.cssText} content: '${i.replace(/'|"/g, "")}';`;
}
function Rh(o) {
    return Ht(o)
        .map((i) => {
            const s = o.getPropertyValue(i),
                a = o.getPropertyPriority(i);
            return `${i}: ${s}${a ? " !important" : ""};`;
        })
        .join(" ");
}
function xh(o, i, s) {
    const a = `.${o}:${i}`,
        f = s.cssText ? kh(s) : Rh(s);
    return document.createTextNode(`${a}{${f}}`);
}
function $c(o, i, s) {
    const a = window.getComputedStyle(o, s),
        f = a.getPropertyValue("content");
    if (f === "" || f === "none") return;
    const d = yh();
    try {
        i.className = `${i.className} ${d}`;
    } catch {
        return;
    }
    const m = document.createElement("style");
    m.appendChild(xh(d, s, a)), i.appendChild(m);
}
function Ph(o, i) {
    $c(o, i, ":before"), $c(o, i, ":after");
}
const Vc = "application/font-woff",
    Wc = "image/jpeg",
    _h = {
        woff: Vc,
        woff2: Vc,
        ttf: "application/font-truetype",
        eot: "application/vnd.ms-fontobject",
        png: "image/png",
        jpg: Wc,
        jpeg: Wc,
        gif: "image/gif",
        tiff: "image/tiff",
        svg: "image/svg+xml",
        webp: "image/webp",
    };
function Th(o) {
    const i = /\.([^./]*?)$/g.exec(o);
    return i ? i[1] : "";
}
function As(o) {
    const i = Th(o).toLowerCase();
    return _h[i] || "";
}
function Nh(o) {
    return o.split(/,/)[1];
}
function Rs(o) {
    return o.search(/^(data:)/) !== -1;
}
function Oh(o, i) {
    return `data:${i};base64,${o}`;
}
async function xf(o, i, s) {
    const a = await fetch(o, i);
    if (a.status === 404) throw new Error(`Resource "${a.url}" not found`);
    const f = await a.blob();
    return new Promise((d, m) => {
        const w = new FileReader();
        (w.onerror = m),
            (w.onloadend = () => {
                try {
                    d(s({ res: a, result: w.result }));
                } catch (p) {
                    m(p);
                }
            }),
            w.readAsDataURL(f);
    });
}
const gs = {};
function Lh(o, i, s) {
    let a = o.replace(/\?.*/, "");
    return (
        s && (a = o),
        /ttf|otf|eot|woff2?/i.test(a) && (a = a.replace(/.*\//, "")),
        i ? `[${i}]${a}` : a
    );
}
async function Ms(o, i, s) {
    const a = Lh(o, i, s.includeQueryParams);
    if (gs[a] != null) return gs[a];
    s.cacheBust && (o += (/\?/.test(o) ? "&" : "?") + new Date().getTime());
    let f;
    try {
        const d = await xf(
            o,
            s.fetchRequestInit,
            ({ res: m, result: w }) => (
                i || (i = m.headers.get("Content-Type") || ""), Nh(w)
            ),
        );
        f = Oh(d, i);
    } catch (d) {
        f = s.imagePlaceholder || "";
        let m = `Failed to fetch resource: ${o}`;
        d && (m = typeof d == "string" ? d : d.message), m && console.warn(m);
    }
    return (gs[a] = f), f;
}
async function Ah(o) {
    const i = o.toDataURL();
    return i === "data:," ? o.cloneNode(!1) : al(i);
}
async function Mh(o, i) {
    if (o.currentSrc) {
        const d = document.createElement("canvas"),
            m = d.getContext("2d");
        (d.width = o.clientWidth),
            (d.height = o.clientHeight),
            m == null || m.drawImage(o, 0, 0, d.width, d.height);
        const w = d.toDataURL();
        return al(w);
    }
    const s = o.poster,
        a = As(s),
        f = await Ms(s, a, i);
    return al(f);
}
async function zh(o) {
    var i;
    try {
        if (
            !(
                (i = o == null ? void 0 : o.contentDocument) === null ||
                i === void 0
            ) &&
            i.body
        )
            return await dl(o.contentDocument.body, {}, !0);
    } catch {}
    return o.cloneNode(!1);
}
async function Dh(o, i) {
    return ot(o, HTMLCanvasElement)
        ? Ah(o)
        : ot(o, HTMLVideoElement)
        ? Mh(o, i)
        : ot(o, HTMLIFrameElement)
        ? zh(o)
        : o.cloneNode(!1);
}
const Fh = (o) => o.tagName != null && o.tagName.toUpperCase() === "SLOT";
async function Ih(o, i, s) {
    var a, f;
    let d = [];
    return (
        Fh(o) && o.assignedNodes
            ? (d = Ht(o.assignedNodes()))
            : ot(o, HTMLIFrameElement) &&
              !((a = o.contentDocument) === null || a === void 0) &&
              a.body
            ? (d = Ht(o.contentDocument.body.childNodes))
            : (d = Ht(
                  ((f = o.shadowRoot) !== null && f !== void 0 ? f : o)
                      .childNodes,
              )),
        d.length === 0 ||
            ot(o, HTMLVideoElement) ||
            (await d.reduce(
                (m, w) =>
                    m
                        .then(() => dl(w, s))
                        .then((p) => {
                            p && i.appendChild(p);
                        }),
                Promise.resolve(),
            )),
        i
    );
}
function Uh(o, i) {
    const s = i.style;
    if (!s) return;
    const a = window.getComputedStyle(o);
    a.cssText
        ? ((s.cssText = a.cssText), (s.transformOrigin = a.transformOrigin))
        : Ht(a).forEach((f) => {
              let d = a.getPropertyValue(f);
              f === "font-size" &&
                  d.endsWith("px") &&
                  (d = `${
                      Math.floor(parseFloat(d.substring(0, d.length - 2))) - 0.1
                  }px`),
                  ot(o, HTMLIFrameElement) &&
                      f === "display" &&
                      d === "inline" &&
                      (d = "block"),
                  f === "d" &&
                      i.getAttribute("d") &&
                      (d = `path(${i.getAttribute("d")})`),
                  s.setProperty(f, d, a.getPropertyPriority(f));
          });
}
function jh(o, i) {
    ot(o, HTMLTextAreaElement) && (i.innerHTML = o.value),
        ot(o, HTMLInputElement) && i.setAttribute("value", o.value);
}
function Bh(o, i) {
    if (ot(o, HTMLSelectElement)) {
        const s = i,
            a = Array.from(s.children).find(
                (f) => o.value === f.getAttribute("value"),
            );
        a && a.setAttribute("selected", "");
    }
}
function Hh(o, i) {
    return ot(i, Element) && (Uh(o, i), Ph(o, i), jh(o, i), Bh(o, i)), i;
}
async function $h(o, i) {
    const s = o.querySelectorAll ? o.querySelectorAll("use") : [];
    if (s.length === 0) return o;
    const a = {};
    for (let d = 0; d < s.length; d++) {
        const w = s[d].getAttribute("xlink:href");
        if (w) {
            const p = o.querySelector(w),
                h = document.querySelector(w);
            !p && h && !a[w] && (a[w] = await dl(h, i, !0));
        }
    }
    const f = Object.values(a);
    if (f.length) {
        const d = "http://www.w3.org/1999/xhtml",
            m = document.createElementNS(d, "svg");
        m.setAttribute("xmlns", d),
            (m.style.position = "absolute"),
            (m.style.width = "0"),
            (m.style.height = "0"),
            (m.style.overflow = "hidden"),
            (m.style.display = "none");
        const w = document.createElementNS(d, "defs");
        m.appendChild(w);
        for (let p = 0; p < f.length; p++) w.appendChild(f[p]);
        o.appendChild(m);
    }
    return o;
}
async function dl(o, i, s) {
    return !s && i.filter && !i.filter(o)
        ? null
        : Promise.resolve(o)
              .then((a) => Dh(a, i))
              .then((a) => Ih(o, a, i))
              .then((a) => Hh(o, a))
              .then((a) => $h(a, i));
}
const Pf = /url\((['"]?)([^'"]+?)\1\)/g,
    Vh = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,
    Wh = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function Qh(o) {
    const i = o.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
    return new RegExp(`(url\\(['"]?)(${i})(['"]?\\))`, "g");
}
function Kh(o) {
    const i = [];
    return o.replace(Pf, (s, a, f) => (i.push(f), s)), i.filter((s) => !Rs(s));
}
async function qh(o, i, s, a, f) {
    try {
        const d = s ? mh(i, s) : i,
            m = As(i);
        let w;
        return f || (w = await Ms(d, m, a)), o.replace(Qh(i), `$1${w}$3`);
    } catch {}
    return o;
}
function Gh(o, { preferredFontFormat: i }) {
    return i
        ? o.replace(Wh, (s) => {
              for (;;) {
                  const [a, , f] = Vh.exec(s) || [];
                  if (!f) return "";
                  if (f === i) return `src: ${a};`;
              }
          })
        : o;
}
function _f(o) {
    return o.search(Pf) !== -1;
}
async function Tf(o, i, s) {
    if (!_f(o)) return o;
    const a = Gh(o, s);
    return Kh(a).reduce(
        (d, m) => d.then((w) => qh(w, m, i, s)),
        Promise.resolve(a),
    );
}
async function nl(o, i, s) {
    var a;
    const f =
        (a = i.style) === null || a === void 0 ? void 0 : a.getPropertyValue(o);
    if (f) {
        const d = await Tf(f, null, s);
        return i.style.setProperty(o, d, i.style.getPropertyPriority(o)), !0;
    }
    return !1;
}
async function Xh(o, i) {
    (await nl("background", o, i)) || (await nl("background-image", o, i)),
        (await nl("mask", o, i)) || (await nl("mask-image", o, i));
}
async function Yh(o, i) {
    const s = ot(o, HTMLImageElement);
    if (!(s && !Rs(o.src)) && !(ot(o, SVGImageElement) && !Rs(o.href.baseVal)))
        return;
    const a = s ? o.src : o.href.baseVal,
        f = await Ms(a, As(a), i);
    await new Promise((d, m) => {
        (o.onload = d), (o.onerror = m);
        const w = o;
        w.decode && (w.decode = d),
            w.loading === "lazy" && (w.loading = "eager"),
            s ? ((o.srcset = ""), (o.src = f)) : (o.href.baseVal = f);
    });
}
async function Jh(o, i) {
    const a = Ht(o.childNodes).map((f) => Nf(f, i));
    await Promise.all(a).then(() => o);
}
async function Nf(o, i) {
    ot(o, Element) && (await Xh(o, i), await Yh(o, i), await Jh(o, i));
}
function Zh(o, i) {
    const { style: s } = o;
    i.backgroundColor && (s.backgroundColor = i.backgroundColor),
        i.width && (s.width = `${i.width}px`),
        i.height && (s.height = `${i.height}px`);
    const a = i.style;
    return (
        a != null &&
            Object.keys(a).forEach((f) => {
                s[f] = a[f];
            }),
        o
    );
}
const Qc = {};
async function Kc(o) {
    let i = Qc[o];
    if (i != null) return i;
    const a = await (await fetch(o)).text();
    return (i = { url: o, cssText: a }), (Qc[o] = i), i;
}
async function qc(o, i) {
    let s = o.cssText;
    const a = /url\(["']?([^"')]+)["']?\)/g,
        d = (s.match(/url\([^)]+\)/g) || []).map(async (m) => {
            let w = m.replace(a, "$1");
            return (
                w.startsWith("https://") || (w = new URL(w, o.url).href),
                xf(
                    w,
                    i.fetchRequestInit,
                    ({ result: p }) => (
                        (s = s.replace(m, `url(${p})`)), [m, p]
                    ),
                )
            );
        });
    return Promise.all(d).then(() => s);
}
function Gc(o) {
    if (o == null) return [];
    const i = [],
        s = /(\/\*[\s\S]*?\*\/)/gi;
    let a = o.replace(s, "");
    const f = new RegExp(
        "((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})",
        "gi",
    );
    for (;;) {
        const p = f.exec(a);
        if (p === null) break;
        i.push(p[0]);
    }
    a = a.replace(f, "");
    const d = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,
        m =
            "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",
        w = new RegExp(m, "gi");
    for (;;) {
        let p = d.exec(a);
        if (p === null) {
            if (((p = w.exec(a)), p === null)) break;
            d.lastIndex = w.lastIndex;
        } else w.lastIndex = d.lastIndex;
        i.push(p[0]);
    }
    return i;
}
async function bh(o, i) {
    const s = [],
        a = [];
    return (
        o.forEach((f) => {
            if ("cssRules" in f)
                try {
                    Ht(f.cssRules || []).forEach((d, m) => {
                        if (d.type === CSSRule.IMPORT_RULE) {
                            let w = m + 1;
                            const p = d.href,
                                h = Kc(p)
                                    .then((y) => qc(y, i))
                                    .then((y) =>
                                        Gc(y).forEach((S) => {
                                            try {
                                                f.insertRule(
                                                    S,
                                                    S.startsWith("@import")
                                                        ? (w += 1)
                                                        : f.cssRules.length,
                                                );
                                            } catch (P) {
                                                console.error(
                                                    "Error inserting rule from remote css",
                                                    { rule: S, error: P },
                                                );
                                            }
                                        }),
                                    )
                                    .catch((y) => {
                                        console.error(
                                            "Error loading remote css",
                                            y.toString(),
                                        );
                                    });
                            a.push(h);
                        }
                    });
                } catch (d) {
                    const m =
                        o.find((w) => w.href == null) ||
                        document.styleSheets[0];
                    f.href != null &&
                        a.push(
                            Kc(f.href)
                                .then((w) => qc(w, i))
                                .then((w) =>
                                    Gc(w).forEach((p) => {
                                        m.insertRule(p, f.cssRules.length);
                                    }),
                                )
                                .catch((w) => {
                                    console.error(
                                        "Error loading remote stylesheet",
                                        w,
                                    );
                                }),
                        ),
                        console.error("Error inlining remote css file", d);
                }
        }),
        Promise.all(a).then(
            () => (
                o.forEach((f) => {
                    if ("cssRules" in f)
                        try {
                            Ht(f.cssRules || []).forEach((d) => {
                                s.push(d);
                            });
                        } catch (d) {
                            console.error(
                                `Error while reading CSS rules from ${f.href}`,
                                d,
                            );
                        }
                }),
                s
            ),
        )
    );
}
function em(o) {
    return o
        .filter((i) => i.type === CSSRule.FONT_FACE_RULE)
        .filter((i) => _f(i.style.getPropertyValue("src")));
}
async function tm(o, i) {
    if (o.ownerDocument == null)
        throw new Error("Provided element is not within a Document");
    const s = Ht(o.ownerDocument.styleSheets),
        a = await bh(s, i);
    return em(a);
}
async function nm(o, i) {
    const s = await tm(o, i);
    return (
        await Promise.all(
            s.map((f) => {
                const d = f.parentStyleSheet ? f.parentStyleSheet.href : null;
                return Tf(f.cssText, d, i);
            }),
        )
    ).join(`
`);
}
async function rm(o, i) {
    const s =
        i.fontEmbedCSS != null
            ? i.fontEmbedCSS
            : i.skipFonts
            ? null
            : await nm(o, i);
    if (s) {
        const a = document.createElement("style"),
            f = document.createTextNode(s);
        a.appendChild(f),
            o.firstChild ? o.insertBefore(a, o.firstChild) : o.appendChild(a);
    }
}
async function om(o, i = {}) {
    const { width: s, height: a } = Rf(o, i),
        f = await dl(o, i, !0);
    return await rm(f, i), await Nf(f, i), Zh(f, i), await Ch(f, s, a);
}
async function lm(o, i = {}) {
    const { width: s, height: a } = Rf(o, i),
        f = await om(o, i),
        d = await al(f),
        m = document.createElement("canvas"),
        w = m.getContext("2d"),
        p = i.pixelRatio || wh(),
        h = i.canvasWidth || s,
        y = i.canvasHeight || a;
    return (
        (m.width = h * p),
        (m.height = y * p),
        i.skipAutoScale || Sh(m),
        (m.style.width = `${h}`),
        (m.style.height = `${y}`),
        i.backgroundColor &&
            ((w.fillStyle = i.backgroundColor),
            w.fillRect(0, 0, m.width, m.height)),
        w.drawImage(d, 0, 0, m.width, m.height),
        m
    );
}
async function im(o, i = {}) {
    return (await lm(o, i)).toDataURL();
}
var rl = { exports: {} },
    sm = rl.exports,
    Xc;
function um() {
    return (
        Xc ||
            ((Xc = 1),
            (function (o, i) {
                (function (s, a) {
                    o.exports = a();
                })(sm, function () {
                    return function s(a, f, d) {
                        var m = window,
                            w = "application/octet-stream",
                            p = d || w,
                            h = a,
                            y = !f && !d && h,
                            S = document.createElement("a"),
                            P = function (Z) {
                                return String(Z);
                            },
                            D = m.Blob || m.MozBlob || m.WebKitBlob || P,
                            _ = f || "download",
                            O,
                            N;
                        if (
                            ((D = D.call ? D.bind(m) : Blob),
                            String(this) === "true" &&
                                ((h = [h, p]), (p = h[0]), (h = h[1])),
                            y &&
                                y.length < 2048 &&
                                ((_ = y.split("/").pop().split("?")[0]),
                                (S.href = y),
                                S.href.indexOf(y) !== -1))
                        ) {
                            var X = new XMLHttpRequest();
                            return (
                                X.open("GET", y, !0),
                                (X.responseType = "blob"),
                                (X.onload = function (Z) {
                                    s(Z.target.response, _, w);
                                }),
                                setTimeout(function () {
                                    X.send();
                                }, 0),
                                X
                            );
                        }
                        if (/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(h))
                            if (h.length > 1024 * 1024 * 1.999 && D !== P)
                                (h = ee(h)), (p = h.type || w);
                            else
                                return navigator.msSaveBlob
                                    ? navigator.msSaveBlob(ee(h), _)
                                    : le(h);
                        else if (/([\x80-\xff])/.test(h)) {
                            var Q = 0,
                                U = new Uint8Array(h.length),
                                Y = U.length;
                            for (Q; Q < Y; ++Q) U[Q] = h.charCodeAt(Q);
                            h = new D([U], { type: p });
                        }
                        O = h instanceof D ? h : new D([h], { type: p });
                        function ee(Z) {
                            var ce = Z.split(/[:;,]/),
                                _e = ce[1],
                                Ge =
                                    ce[2] == "base64"
                                        ? atob
                                        : decodeURIComponent,
                                Ce = Ge(ce.pop()),
                                Xe = Ce.length,
                                ke = 0,
                                Re = new Uint8Array(Xe);
                            for (ke; ke < Xe; ++ke) Re[ke] = Ce.charCodeAt(ke);
                            return new D([Re], { type: _e });
                        }
                        function le(Z, ce) {
                            if ("download" in S)
                                return (
                                    (S.href = Z),
                                    S.setAttribute("download", _),
                                    (S.className = "download-js-link"),
                                    (S.innerHTML = "downloading..."),
                                    (S.style.display = "none"),
                                    document.body.appendChild(S),
                                    setTimeout(function () {
                                        S.click(),
                                            document.body.removeChild(S),
                                            ce === !0 &&
                                                setTimeout(function () {
                                                    m.URL.revokeObjectURL(
                                                        S.href,
                                                    );
                                                }, 250);
                                    }, 66),
                                    !0
                                );
                            if (
                                /(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(
                                    navigator.userAgent,
                                )
                            )
                                return (
                                    /^data:/.test(Z) &&
                                        (Z =
                                            "data:" +
                                            Z.replace(
                                                /^data:([\w\/\-\+]+)/,
                                                w,
                                            )),
                                    window.open(Z) ||
                                        (confirm(`Displaying New Document

Use Save As... to download, then click back to return to this page.`) &&
                                            (location.href = Z)),
                                    !0
                                );
                            var _e = document.createElement("iframe");
                            document.body.appendChild(_e),
                                !ce &&
                                    /^data:/.test(Z) &&
                                    (Z =
                                        "data:" +
                                        Z.replace(/^data:([\w\/\-\+]+)/, w)),
                                (_e.src = Z),
                                setTimeout(function () {
                                    document.body.removeChild(_e);
                                }, 333);
                        }
                        if (navigator.msSaveBlob)
                            return navigator.msSaveBlob(O, _);
                        if (m.URL) le(m.URL.createObjectURL(O), !0);
                        else {
                            if (typeof O == "string" || O.constructor === P)
                                try {
                                    return le(
                                        "data:" + p + ";base64," + m.btoa(O),
                                    );
                                } catch {
                                    return le(
                                        "data:" +
                                            p +
                                            "," +
                                            encodeURIComponent(O),
                                    );
                                }
                            (N = new FileReader()),
                                (N.onload = function (Z) {
                                    le(this.result);
                                }),
                                N.readAsDataURL(O);
                        }
                        return !0;
                    };
                });
            })(rl)),
        rl.exports
    );
}
var am = um();
const cm = ff(am);
function Of(o, i) {
    return function () {
        return o.apply(i, arguments);
    };
}
const { toString: fm } = Object.prototype,
    { getPrototypeOf: zs } = Object,
    pl = ((o) => (i) => {
        const s = fm.call(i);
        return o[s] || (o[s] = s.slice(8, -1).toLowerCase());
    })(Object.create(null)),
    Pt = (o) => ((o = o.toLowerCase()), (i) => pl(i) === o),
    hl = (o) => (i) => typeof i === o,
    { isArray: Jn } = Array,
    Hr = hl("undefined");
function dm(o) {
    return (
        o !== null &&
        !Hr(o) &&
        o.constructor !== null &&
        !Hr(o.constructor) &&
        dt(o.constructor.isBuffer) &&
        o.constructor.isBuffer(o)
    );
}
const Lf = Pt("ArrayBuffer");
function pm(o) {
    let i;
    return (
        typeof ArrayBuffer < "u" && ArrayBuffer.isView
            ? (i = ArrayBuffer.isView(o))
            : (i = o && o.buffer && Lf(o.buffer)),
        i
    );
}
const hm = hl("string"),
    dt = hl("function"),
    Af = hl("number"),
    ml = (o) => o !== null && typeof o == "object",
    mm = (o) => o === !0 || o === !1,
    ol = (o) => {
        if (pl(o) !== "object") return !1;
        const i = zs(o);
        return (
            (i === null ||
                i === Object.prototype ||
                Object.getPrototypeOf(i) === null) &&
            !(Symbol.toStringTag in o) &&
            !(Symbol.iterator in o)
        );
    },
    ym = Pt("Date"),
    gm = Pt("File"),
    vm = Pt("Blob"),
    wm = Pt("FileList"),
    Sm = (o) => ml(o) && dt(o.pipe),
    Em = (o) => {
        let i;
        return (
            o &&
            ((typeof FormData == "function" && o instanceof FormData) ||
                (dt(o.append) &&
                    ((i = pl(o)) === "formdata" ||
                        (i === "object" &&
                            dt(o.toString) &&
                            o.toString() === "[object FormData]"))))
        );
    },
    Cm = Pt("URLSearchParams"),
    [km, Rm, xm, Pm] = ["ReadableStream", "Request", "Response", "Headers"].map(
        Pt,
    ),
    _m = (o) =>
        o.trim ? o.trim() : o.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function $r(o, i, { allOwnKeys: s = !1 } = {}) {
    if (o === null || typeof o > "u") return;
    let a, f;
    if ((typeof o != "object" && (o = [o]), Jn(o)))
        for (a = 0, f = o.length; a < f; a++) i.call(null, o[a], a, o);
    else {
        const d = s ? Object.getOwnPropertyNames(o) : Object.keys(o),
            m = d.length;
        let w;
        for (a = 0; a < m; a++) (w = d[a]), i.call(null, o[w], w, o);
    }
}
function Mf(o, i) {
    i = i.toLowerCase();
    const s = Object.keys(o);
    let a = s.length,
        f;
    for (; a-- > 0; ) if (((f = s[a]), i === f.toLowerCase())) return f;
    return null;
}
const En =
        typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
            ? self
            : typeof window < "u"
            ? window
            : global,
    zf = (o) => !Hr(o) && o !== En;
function xs() {
    const { caseless: o } = (zf(this) && this) || {},
        i = {},
        s = (a, f) => {
            const d = (o && Mf(i, f)) || f;
            ol(i[d]) && ol(a)
                ? (i[d] = xs(i[d], a))
                : ol(a)
                ? (i[d] = xs({}, a))
                : Jn(a)
                ? (i[d] = a.slice())
                : (i[d] = a);
        };
    for (let a = 0, f = arguments.length; a < f; a++)
        arguments[a] && $r(arguments[a], s);
    return i;
}
const Tm = (o, i, s, { allOwnKeys: a } = {}) => (
        $r(
            i,
            (f, d) => {
                s && dt(f) ? (o[d] = Of(f, s)) : (o[d] = f);
            },
            { allOwnKeys: a },
        ),
        o
    ),
    Nm = (o) => (o.charCodeAt(0) === 65279 && (o = o.slice(1)), o),
    Om = (o, i, s, a) => {
        (o.prototype = Object.create(i.prototype, a)),
            (o.prototype.constructor = o),
            Object.defineProperty(o, "super", { value: i.prototype }),
            s && Object.assign(o.prototype, s);
    },
    Lm = (o, i, s, a) => {
        let f, d, m;
        const w = {};
        if (((i = i || {}), o == null)) return i;
        do {
            for (f = Object.getOwnPropertyNames(o), d = f.length; d-- > 0; )
                (m = f[d]),
                    (!a || a(m, o, i)) && !w[m] && ((i[m] = o[m]), (w[m] = !0));
            o = s !== !1 && zs(o);
        } while (o && (!s || s(o, i)) && o !== Object.prototype);
        return i;
    },
    Am = (o, i, s) => {
        (o = String(o)),
            (s === void 0 || s > o.length) && (s = o.length),
            (s -= i.length);
        const a = o.indexOf(i, s);
        return a !== -1 && a === s;
    },
    Mm = (o) => {
        if (!o) return null;
        if (Jn(o)) return o;
        let i = o.length;
        if (!Af(i)) return null;
        const s = new Array(i);
        for (; i-- > 0; ) s[i] = o[i];
        return s;
    },
    zm = (
        (o) => (i) =>
            o && i instanceof o
    )(typeof Uint8Array < "u" && zs(Uint8Array)),
    Dm = (o, i) => {
        const a = (o && o[Symbol.iterator]).call(o);
        let f;
        for (; (f = a.next()) && !f.done; ) {
            const d = f.value;
            i.call(o, d[0], d[1]);
        }
    },
    Fm = (o, i) => {
        let s;
        const a = [];
        for (; (s = o.exec(i)) !== null; ) a.push(s);
        return a;
    },
    Im = Pt("HTMLFormElement"),
    Um = (o) =>
        o.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (s, a, f) {
            return a.toUpperCase() + f;
        }),
    Yc = (
        ({ hasOwnProperty: o }) =>
        (i, s) =>
            o.call(i, s)
    )(Object.prototype),
    jm = Pt("RegExp"),
    Df = (o, i) => {
        const s = Object.getOwnPropertyDescriptors(o),
            a = {};
        $r(s, (f, d) => {
            let m;
            (m = i(f, d, o)) !== !1 && (a[d] = m || f);
        }),
            Object.defineProperties(o, a);
    },
    Bm = (o) => {
        Df(o, (i, s) => {
            if (dt(o) && ["arguments", "caller", "callee"].indexOf(s) !== -1)
                return !1;
            const a = o[s];
            if (dt(a)) {
                if (((i.enumerable = !1), "writable" in i)) {
                    i.writable = !1;
                    return;
                }
                i.set ||
                    (i.set = () => {
                        throw Error(
                            "Can not rewrite read-only method '" + s + "'",
                        );
                    });
            }
        });
    },
    Hm = (o, i) => {
        const s = {},
            a = (f) => {
                f.forEach((d) => {
                    s[d] = !0;
                });
            };
        return Jn(o) ? a(o) : a(String(o).split(i)), s;
    },
    $m = () => {},
    Vm = (o, i) => (o != null && Number.isFinite((o = +o)) ? o : i),
    vs = "abcdefghijklmnopqrstuvwxyz",
    Jc = "0123456789",
    Ff = { DIGIT: Jc, ALPHA: vs, ALPHA_DIGIT: vs + vs.toUpperCase() + Jc },
    Wm = (o = 16, i = Ff.ALPHA_DIGIT) => {
        let s = "";
        const { length: a } = i;
        for (; o--; ) s += i[(Math.random() * a) | 0];
        return s;
    };
function Qm(o) {
    return !!(
        o &&
        dt(o.append) &&
        o[Symbol.toStringTag] === "FormData" &&
        o[Symbol.iterator]
    );
}
const Km = (o) => {
        const i = new Array(10),
            s = (a, f) => {
                if (ml(a)) {
                    if (i.indexOf(a) >= 0) return;
                    if (!("toJSON" in a)) {
                        i[f] = a;
                        const d = Jn(a) ? [] : {};
                        return (
                            $r(a, (m, w) => {
                                const p = s(m, f + 1);
                                !Hr(p) && (d[w] = p);
                            }),
                            (i[f] = void 0),
                            d
                        );
                    }
                }
                return a;
            };
        return s(o, 0);
    },
    qm = Pt("AsyncFunction"),
    Gm = (o) => o && (ml(o) || dt(o)) && dt(o.then) && dt(o.catch),
    If = ((o, i) =>
        o
            ? setImmediate
            : i
            ? ((s, a) => (
                  En.addEventListener(
                      "message",
                      ({ source: f, data: d }) => {
                          f === En && d === s && a.length && a.shift()();
                      },
                      !1,
                  ),
                  (f) => {
                      a.push(f), En.postMessage(s, "*");
                  }
              ))(`axios@${Math.random()}`, [])
            : (s) => setTimeout(s))(
        typeof setImmediate == "function",
        dt(En.postMessage),
    ),
    Xm =
        typeof queueMicrotask < "u"
            ? queueMicrotask.bind(En)
            : (typeof process < "u" && process.nextTick) || If,
    T = {
        isArray: Jn,
        isArrayBuffer: Lf,
        isBuffer: dm,
        isFormData: Em,
        isArrayBufferView: pm,
        isString: hm,
        isNumber: Af,
        isBoolean: mm,
        isObject: ml,
        isPlainObject: ol,
        isReadableStream: km,
        isRequest: Rm,
        isResponse: xm,
        isHeaders: Pm,
        isUndefined: Hr,
        isDate: ym,
        isFile: gm,
        isBlob: vm,
        isRegExp: jm,
        isFunction: dt,
        isStream: Sm,
        isURLSearchParams: Cm,
        isTypedArray: zm,
        isFileList: wm,
        forEach: $r,
        merge: xs,
        extend: Tm,
        trim: _m,
        stripBOM: Nm,
        inherits: Om,
        toFlatObject: Lm,
        kindOf: pl,
        kindOfTest: Pt,
        endsWith: Am,
        toArray: Mm,
        forEachEntry: Dm,
        matchAll: Fm,
        isHTMLForm: Im,
        hasOwnProperty: Yc,
        hasOwnProp: Yc,
        reduceDescriptors: Df,
        freezeMethods: Bm,
        toObjectSet: Hm,
        toCamelCase: Um,
        noop: $m,
        toFiniteNumber: Vm,
        findKey: Mf,
        global: En,
        isContextDefined: zf,
        ALPHABET: Ff,
        generateString: Wm,
        isSpecCompliantForm: Qm,
        toJSONObject: Km,
        isAsyncFn: qm,
        isThenable: Gm,
        setImmediate: If,
        asap: Xm,
    };
function b(o, i, s, a, f) {
    Error.call(this),
        Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = new Error().stack),
        (this.message = o),
        (this.name = "AxiosError"),
        i && (this.code = i),
        s && (this.config = s),
        a && (this.request = a),
        f && ((this.response = f), (this.status = f.status ? f.status : null));
}
T.inherits(b, Error, {
    toJSON: function () {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: T.toJSONObject(this.config),
            code: this.code,
            status: this.status,
        };
    },
});
const Uf = b.prototype,
    jf = {};
[
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL",
].forEach((o) => {
    jf[o] = { value: o };
});
Object.defineProperties(b, jf);
Object.defineProperty(Uf, "isAxiosError", { value: !0 });
b.from = (o, i, s, a, f, d) => {
    const m = Object.create(Uf);
    return (
        T.toFlatObject(
            o,
            m,
            function (p) {
                return p !== Error.prototype;
            },
            (w) => w !== "isAxiosError",
        ),
        b.call(m, o.message, i, s, a, f),
        (m.cause = o),
        (m.name = o.name),
        d && Object.assign(m, d),
        m
    );
};
const Ym = null;
function Ps(o) {
    return T.isPlainObject(o) || T.isArray(o);
}
function Bf(o) {
    return T.endsWith(o, "[]") ? o.slice(0, -2) : o;
}
function Zc(o, i, s) {
    return o
        ? o
              .concat(i)
              .map(function (f, d) {
                  return (f = Bf(f)), !s && d ? "[" + f + "]" : f;
              })
              .join(s ? "." : "")
        : i;
}
function Jm(o) {
    return T.isArray(o) && !o.some(Ps);
}
const Zm = T.toFlatObject(T, {}, null, function (i) {
    return /^is[A-Z]/.test(i);
});
function yl(o, i, s) {
    if (!T.isObject(o)) throw new TypeError("target must be an object");
    (i = i || new FormData()),
        (s = T.toFlatObject(
            s,
            { metaTokens: !0, dots: !1, indexes: !1 },
            !1,
            function (O, N) {
                return !T.isUndefined(N[O]);
            },
        ));
    const a = s.metaTokens,
        f = s.visitor || y,
        d = s.dots,
        m = s.indexes,
        p = (s.Blob || (typeof Blob < "u" && Blob)) && T.isSpecCompliantForm(i);
    if (!T.isFunction(f)) throw new TypeError("visitor must be a function");
    function h(_) {
        if (_ === null) return "";
        if (T.isDate(_)) return _.toISOString();
        if (!p && T.isBlob(_))
            throw new b("Blob is not supported. Use a Buffer instead.");
        return T.isArrayBuffer(_) || T.isTypedArray(_)
            ? p && typeof Blob == "function"
                ? new Blob([_])
                : Buffer.from(_)
            : _;
    }
    function y(_, O, N) {
        let X = _;
        if (_ && !N && typeof _ == "object") {
            if (T.endsWith(O, "{}"))
                (O = a ? O : O.slice(0, -2)), (_ = JSON.stringify(_));
            else if (
                (T.isArray(_) && Jm(_)) ||
                ((T.isFileList(_) || T.endsWith(O, "[]")) && (X = T.toArray(_)))
            )
                return (
                    (O = Bf(O)),
                    X.forEach(function (U, Y) {
                        !(T.isUndefined(U) || U === null) &&
                            i.append(
                                m === !0
                                    ? Zc([O], Y, d)
                                    : m === null
                                    ? O
                                    : O + "[]",
                                h(U),
                            );
                    }),
                    !1
                );
        }
        return Ps(_) ? !0 : (i.append(Zc(N, O, d), h(_)), !1);
    }
    const S = [],
        P = Object.assign(Zm, {
            defaultVisitor: y,
            convertValue: h,
            isVisitable: Ps,
        });
    function D(_, O) {
        if (!T.isUndefined(_)) {
            if (S.indexOf(_) !== -1)
                throw Error("Circular reference detected in " + O.join("."));
            S.push(_),
                T.forEach(_, function (X, Q) {
                    (!(T.isUndefined(X) || X === null) &&
                        f.call(i, X, T.isString(Q) ? Q.trim() : Q, O, P)) ===
                        !0 && D(X, O ? O.concat(Q) : [Q]);
                }),
                S.pop();
        }
    }
    if (!T.isObject(o)) throw new TypeError("data must be an object");
    return D(o), i;
}
function bc(o) {
    const i = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0",
    };
    return encodeURIComponent(o).replace(/[!'()~]|%20|%00/g, function (a) {
        return i[a];
    });
}
function Ds(o, i) {
    (this._pairs = []), o && yl(o, this, i);
}
const Hf = Ds.prototype;
Hf.append = function (i, s) {
    this._pairs.push([i, s]);
};
Hf.toString = function (i) {
    const s = i
        ? function (a) {
              return i.call(this, a, bc);
          }
        : bc;
    return this._pairs
        .map(function (f) {
            return s(f[0]) + "=" + s(f[1]);
        }, "")
        .join("&");
};
function bm(o) {
    return encodeURIComponent(o)
        .replace(/%3A/gi, ":")
        .replace(/%24/g, "$")
        .replace(/%2C/gi, ",")
        .replace(/%20/g, "+")
        .replace(/%5B/gi, "[")
        .replace(/%5D/gi, "]");
}
function $f(o, i, s) {
    if (!i) return o;
    const a = (s && s.encode) || bm;
    T.isFunction(s) && (s = { serialize: s });
    const f = s && s.serialize;
    let d;
    if (
        (f
            ? (d = f(i, s))
            : (d = T.isURLSearchParams(i)
                  ? i.toString()
                  : new Ds(i, s).toString(a)),
        d)
    ) {
        const m = o.indexOf("#");
        m !== -1 && (o = o.slice(0, m)),
            (o += (o.indexOf("?") === -1 ? "?" : "&") + d);
    }
    return o;
}
class ef {
    constructor() {
        this.handlers = [];
    }
    use(i, s, a) {
        return (
            this.handlers.push({
                fulfilled: i,
                rejected: s,
                synchronous: a ? a.synchronous : !1,
                runWhen: a ? a.runWhen : null,
            }),
            this.handlers.length - 1
        );
    }
    eject(i) {
        this.handlers[i] && (this.handlers[i] = null);
    }
    clear() {
        this.handlers && (this.handlers = []);
    }
    forEach(i) {
        T.forEach(this.handlers, function (a) {
            a !== null && i(a);
        });
    }
}
const Vf = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1,
    },
    e0 = typeof URLSearchParams < "u" ? URLSearchParams : Ds,
    t0 = typeof FormData < "u" ? FormData : null,
    n0 = typeof Blob < "u" ? Blob : null,
    r0 = {
        isBrowser: !0,
        classes: { URLSearchParams: e0, FormData: t0, Blob: n0 },
        protocols: ["http", "https", "file", "blob", "url", "data"],
    },
    Fs = typeof window < "u" && typeof document < "u",
    _s = (typeof navigator == "object" && navigator) || void 0,
    o0 =
        Fs &&
        (!_s || ["ReactNative", "NativeScript", "NS"].indexOf(_s.product) < 0),
    l0 =
        typeof WorkerGlobalScope < "u" &&
        self instanceof WorkerGlobalScope &&
        typeof self.importScripts == "function",
    i0 = (Fs && window.location.href) || "http://localhost",
    s0 = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                hasBrowserEnv: Fs,
                hasStandardBrowserEnv: o0,
                hasStandardBrowserWebWorkerEnv: l0,
                navigator: _s,
                origin: i0,
            },
            Symbol.toStringTag,
            { value: "Module" },
        ),
    ),
    qe = { ...s0, ...r0 };
function u0(o, i) {
    return yl(
        o,
        new qe.classes.URLSearchParams(),
        Object.assign(
            {
                visitor: function (s, a, f, d) {
                    return qe.isNode && T.isBuffer(s)
                        ? (this.append(a, s.toString("base64")), !1)
                        : d.defaultVisitor.apply(this, arguments);
                },
            },
            i,
        ),
    );
}
function a0(o) {
    return T.matchAll(/\w+|\[(\w*)]/g, o).map((i) =>
        i[0] === "[]" ? "" : i[1] || i[0],
    );
}
function c0(o) {
    const i = {},
        s = Object.keys(o);
    let a;
    const f = s.length;
    let d;
    for (a = 0; a < f; a++) (d = s[a]), (i[d] = o[d]);
    return i;
}
function Wf(o) {
    function i(s, a, f, d) {
        let m = s[d++];
        if (m === "__proto__") return !0;
        const w = Number.isFinite(+m),
            p = d >= s.length;
        return (
            (m = !m && T.isArray(f) ? f.length : m),
            p
                ? (T.hasOwnProp(f, m) ? (f[m] = [f[m], a]) : (f[m] = a), !w)
                : ((!f[m] || !T.isObject(f[m])) && (f[m] = []),
                  i(s, a, f[m], d) && T.isArray(f[m]) && (f[m] = c0(f[m])),
                  !w)
        );
    }
    if (T.isFormData(o) && T.isFunction(o.entries)) {
        const s = {};
        return (
            T.forEachEntry(o, (a, f) => {
                i(a0(a), f, s, 0);
            }),
            s
        );
    }
    return null;
}
function f0(o, i, s) {
    if (T.isString(o))
        try {
            return (i || JSON.parse)(o), T.trim(o);
        } catch (a) {
            if (a.name !== "SyntaxError") throw a;
        }
    return (0, JSON.stringify)(o);
}
const Vr = {
    transitional: Vf,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [
        function (i, s) {
            const a = s.getContentType() || "",
                f = a.indexOf("application/json") > -1,
                d = T.isObject(i);
            if (
                (d && T.isHTMLForm(i) && (i = new FormData(i)), T.isFormData(i))
            )
                return f ? JSON.stringify(Wf(i)) : i;
            if (
                T.isArrayBuffer(i) ||
                T.isBuffer(i) ||
                T.isStream(i) ||
                T.isFile(i) ||
                T.isBlob(i) ||
                T.isReadableStream(i)
            )
                return i;
            if (T.isArrayBufferView(i)) return i.buffer;
            if (T.isURLSearchParams(i))
                return (
                    s.setContentType(
                        "application/x-www-form-urlencoded;charset=utf-8",
                        !1,
                    ),
                    i.toString()
                );
            let w;
            if (d) {
                if (a.indexOf("application/x-www-form-urlencoded") > -1)
                    return u0(i, this.formSerializer).toString();
                if (
                    (w = T.isFileList(i)) ||
                    a.indexOf("multipart/form-data") > -1
                ) {
                    const p = this.env && this.env.FormData;
                    return yl(
                        w ? { "files[]": i } : i,
                        p && new p(),
                        this.formSerializer,
                    );
                }
            }
            return d || f
                ? (s.setContentType("application/json", !1), f0(i))
                : i;
        },
    ],
    transformResponse: [
        function (i) {
            const s = this.transitional || Vr.transitional,
                a = s && s.forcedJSONParsing,
                f = this.responseType === "json";
            if (T.isResponse(i) || T.isReadableStream(i)) return i;
            if (i && T.isString(i) && ((a && !this.responseType) || f)) {
                const m = !(s && s.silentJSONParsing) && f;
                try {
                    return JSON.parse(i);
                } catch (w) {
                    if (m)
                        throw w.name === "SyntaxError"
                            ? b.from(
                                  w,
                                  b.ERR_BAD_RESPONSE,
                                  this,
                                  null,
                                  this.response,
                              )
                            : w;
                }
            }
            return i;
        },
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: qe.classes.FormData, Blob: qe.classes.Blob },
    validateStatus: function (i) {
        return i >= 200 && i < 300;
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0,
        },
    },
};
T.forEach(["delete", "get", "head", "post", "put", "patch"], (o) => {
    Vr.headers[o] = {};
});
const d0 = T.toObjectSet([
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent",
    ]),
    p0 = (o) => {
        const i = {};
        let s, a, f;
        return (
            o &&
                o
                    .split(
                        `
`,
                    )
                    .forEach(function (m) {
                        (f = m.indexOf(":")),
                            (s = m.substring(0, f).trim().toLowerCase()),
                            (a = m.substring(f + 1).trim()),
                            !(!s || (i[s] && d0[s])) &&
                                (s === "set-cookie"
                                    ? i[s]
                                        ? i[s].push(a)
                                        : (i[s] = [a])
                                    : (i[s] = i[s] ? i[s] + ", " + a : a));
                    }),
            i
        );
    },
    tf = Symbol("internals");
function jr(o) {
    return o && String(o).trim().toLowerCase();
}
function ll(o) {
    return o === !1 || o == null ? o : T.isArray(o) ? o.map(ll) : String(o);
}
function h0(o) {
    const i = Object.create(null),
        s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let a;
    for (; (a = s.exec(o)); ) i[a[1]] = a[2];
    return i;
}
const m0 = (o) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(o.trim());
function ws(o, i, s, a, f) {
    if (T.isFunction(a)) return a.call(this, i, s);
    if ((f && (i = s), !!T.isString(i))) {
        if (T.isString(a)) return i.indexOf(a) !== -1;
        if (T.isRegExp(a)) return a.test(i);
    }
}
function y0(o) {
    return o
        .trim()
        .toLowerCase()
        .replace(/([a-z\d])(\w*)/g, (i, s, a) => s.toUpperCase() + a);
}
function g0(o, i) {
    const s = T.toCamelCase(" " + i);
    ["get", "set", "has"].forEach((a) => {
        Object.defineProperty(o, a + s, {
            value: function (f, d, m) {
                return this[a].call(this, i, f, d, m);
            },
            configurable: !0,
        });
    });
}
class lt {
    constructor(i) {
        i && this.set(i);
    }
    set(i, s, a) {
        const f = this;
        function d(w, p, h) {
            const y = jr(p);
            if (!y) throw new Error("header name must be a non-empty string");
            const S = T.findKey(f, y);
            (!S ||
                f[S] === void 0 ||
                h === !0 ||
                (h === void 0 && f[S] !== !1)) &&
                (f[S || p] = ll(w));
        }
        const m = (w, p) => T.forEach(w, (h, y) => d(h, y, p));
        if (T.isPlainObject(i) || i instanceof this.constructor) m(i, s);
        else if (T.isString(i) && (i = i.trim()) && !m0(i)) m(p0(i), s);
        else if (T.isHeaders(i)) for (const [w, p] of i.entries()) d(p, w, a);
        else i != null && d(s, i, a);
        return this;
    }
    get(i, s) {
        if (((i = jr(i)), i)) {
            const a = T.findKey(this, i);
            if (a) {
                const f = this[a];
                if (!s) return f;
                if (s === !0) return h0(f);
                if (T.isFunction(s)) return s.call(this, f, a);
                if (T.isRegExp(s)) return s.exec(f);
                throw new TypeError("parser must be boolean|regexp|function");
            }
        }
    }
    has(i, s) {
        if (((i = jr(i)), i)) {
            const a = T.findKey(this, i);
            return !!(
                a &&
                this[a] !== void 0 &&
                (!s || ws(this, this[a], a, s))
            );
        }
        return !1;
    }
    delete(i, s) {
        const a = this;
        let f = !1;
        function d(m) {
            if (((m = jr(m)), m)) {
                const w = T.findKey(a, m);
                w && (!s || ws(a, a[w], w, s)) && (delete a[w], (f = !0));
            }
        }
        return T.isArray(i) ? i.forEach(d) : d(i), f;
    }
    clear(i) {
        const s = Object.keys(this);
        let a = s.length,
            f = !1;
        for (; a--; ) {
            const d = s[a];
            (!i || ws(this, this[d], d, i, !0)) && (delete this[d], (f = !0));
        }
        return f;
    }
    normalize(i) {
        const s = this,
            a = {};
        return (
            T.forEach(this, (f, d) => {
                const m = T.findKey(a, d);
                if (m) {
                    (s[m] = ll(f)), delete s[d];
                    return;
                }
                const w = i ? y0(d) : String(d).trim();
                w !== d && delete s[d], (s[w] = ll(f)), (a[w] = !0);
            }),
            this
        );
    }
    concat(...i) {
        return this.constructor.concat(this, ...i);
    }
    toJSON(i) {
        const s = Object.create(null);
        return (
            T.forEach(this, (a, f) => {
                a != null &&
                    a !== !1 &&
                    (s[f] = i && T.isArray(a) ? a.join(", ") : a);
            }),
            s
        );
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
        return Object.entries(this.toJSON()).map(([i, s]) => i + ": " + s)
            .join(`
`);
    }
    get [Symbol.toStringTag]() {
        return "AxiosHeaders";
    }
    static from(i) {
        return i instanceof this ? i : new this(i);
    }
    static concat(i, ...s) {
        const a = new this(i);
        return s.forEach((f) => a.set(f)), a;
    }
    static accessor(i) {
        const a = (this[tf] = this[tf] = { accessors: {} }).accessors,
            f = this.prototype;
        function d(m) {
            const w = jr(m);
            a[w] || (g0(f, m), (a[w] = !0));
        }
        return T.isArray(i) ? i.forEach(d) : d(i), this;
    }
}
lt.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization",
]);
T.reduceDescriptors(lt.prototype, ({ value: o }, i) => {
    let s = i[0].toUpperCase() + i.slice(1);
    return {
        get: () => o,
        set(a) {
            this[s] = a;
        },
    };
});
T.freezeMethods(lt);
function Ss(o, i) {
    const s = this || Vr,
        a = i || s,
        f = lt.from(a.headers);
    let d = a.data;
    return (
        T.forEach(o, function (w) {
            d = w.call(s, d, f.normalize(), i ? i.status : void 0);
        }),
        f.normalize(),
        d
    );
}
function Qf(o) {
    return !!(o && o.__CANCEL__);
}
function Zn(o, i, s) {
    b.call(this, o ?? "canceled", b.ERR_CANCELED, i, s),
        (this.name = "CanceledError");
}
T.inherits(Zn, b, { __CANCEL__: !0 });
function Kf(o, i, s) {
    const a = s.config.validateStatus;
    !s.status || !a || a(s.status)
        ? o(s)
        : i(
              new b(
                  "Request failed with status code " + s.status,
                  [b.ERR_BAD_REQUEST, b.ERR_BAD_RESPONSE][
                      Math.floor(s.status / 100) - 4
                  ],
                  s.config,
                  s.request,
                  s,
              ),
          );
}
function v0(o) {
    const i = /^([-+\w]{1,25})(:?\/\/|:)/.exec(o);
    return (i && i[1]) || "";
}
function w0(o, i) {
    o = o || 10;
    const s = new Array(o),
        a = new Array(o);
    let f = 0,
        d = 0,
        m;
    return (
        (i = i !== void 0 ? i : 1e3),
        function (p) {
            const h = Date.now(),
                y = a[d];
            m || (m = h), (s[f] = p), (a[f] = h);
            let S = d,
                P = 0;
            for (; S !== f; ) (P += s[S++]), (S = S % o);
            if (((f = (f + 1) % o), f === d && (d = (d + 1) % o), h - m < i))
                return;
            const D = y && h - y;
            return D ? Math.round((P * 1e3) / D) : void 0;
        }
    );
}
function S0(o, i) {
    let s = 0,
        a = 1e3 / i,
        f,
        d;
    const m = (h, y = Date.now()) => {
        (s = y),
            (f = null),
            d && (clearTimeout(d), (d = null)),
            o.apply(null, h);
    };
    return [
        (...h) => {
            const y = Date.now(),
                S = y - s;
            S >= a
                ? m(h, y)
                : ((f = h),
                  d ||
                      (d = setTimeout(() => {
                          (d = null), m(f);
                      }, a - S)));
        },
        () => f && m(f),
    ];
}
const cl = (o, i, s = 3) => {
        let a = 0;
        const f = w0(50, 250);
        return S0((d) => {
            const m = d.loaded,
                w = d.lengthComputable ? d.total : void 0,
                p = m - a,
                h = f(p),
                y = m <= w;
            a = m;
            const S = {
                loaded: m,
                total: w,
                progress: w ? m / w : void 0,
                bytes: p,
                rate: h || void 0,
                estimated: h && w && y ? (w - m) / h : void 0,
                event: d,
                lengthComputable: w != null,
                [i ? "download" : "upload"]: !0,
            };
            o(S);
        }, s);
    },
    nf = (o, i) => {
        const s = o != null;
        return [
            (a) => i[0]({ lengthComputable: s, total: o, loaded: a }),
            i[1],
        ];
    },
    rf =
        (o) =>
        (...i) =>
            T.asap(() => o(...i)),
    E0 = qe.hasStandardBrowserEnv
        ? ((o, i) => (s) => (
              (s = new URL(s, qe.origin)),
              o.protocol === s.protocol &&
                  o.host === s.host &&
                  (i || o.port === s.port)
          ))(
              new URL(qe.origin),
              qe.navigator && /(msie|trident)/i.test(qe.navigator.userAgent),
          )
        : () => !0,
    C0 = qe.hasStandardBrowserEnv
        ? {
              write(o, i, s, a, f, d) {
                  const m = [o + "=" + encodeURIComponent(i)];
                  T.isNumber(s) &&
                      m.push("expires=" + new Date(s).toGMTString()),
                      T.isString(a) && m.push("path=" + a),
                      T.isString(f) && m.push("domain=" + f),
                      d === !0 && m.push("secure"),
                      (document.cookie = m.join("; "));
              },
              read(o) {
                  const i = document.cookie.match(
                      new RegExp("(^|;\\s*)(" + o + ")=([^;]*)"),
                  );
                  return i ? decodeURIComponent(i[3]) : null;
              },
              remove(o) {
                  this.write(o, "", Date.now() - 864e5);
              },
          }
        : {
              write() {},
              read() {
                  return null;
              },
              remove() {},
          };
function k0(o) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(o);
}
function R0(o, i) {
    return i ? o.replace(/\/?\/$/, "") + "/" + i.replace(/^\/+/, "") : o;
}
function qf(o, i) {
    return o && !k0(i) ? R0(o, i) : i;
}
const of = (o) => (o instanceof lt ? { ...o } : o);
function Rn(o, i) {
    i = i || {};
    const s = {};
    function a(h, y, S, P) {
        return T.isPlainObject(h) && T.isPlainObject(y)
            ? T.merge.call({ caseless: P }, h, y)
            : T.isPlainObject(y)
            ? T.merge({}, y)
            : T.isArray(y)
            ? y.slice()
            : y;
    }
    function f(h, y, S, P) {
        if (T.isUndefined(y)) {
            if (!T.isUndefined(h)) return a(void 0, h, S, P);
        } else return a(h, y, S, P);
    }
    function d(h, y) {
        if (!T.isUndefined(y)) return a(void 0, y);
    }
    function m(h, y) {
        if (T.isUndefined(y)) {
            if (!T.isUndefined(h)) return a(void 0, h);
        } else return a(void 0, y);
    }
    function w(h, y, S) {
        if (S in i) return a(h, y);
        if (S in o) return a(void 0, h);
    }
    const p = {
        url: d,
        method: d,
        data: d,
        baseURL: m,
        transformRequest: m,
        transformResponse: m,
        paramsSerializer: m,
        timeout: m,
        timeoutMessage: m,
        withCredentials: m,
        withXSRFToken: m,
        adapter: m,
        responseType: m,
        xsrfCookieName: m,
        xsrfHeaderName: m,
        onUploadProgress: m,
        onDownloadProgress: m,
        decompress: m,
        maxContentLength: m,
        maxBodyLength: m,
        beforeRedirect: m,
        transport: m,
        httpAgent: m,
        httpsAgent: m,
        cancelToken: m,
        socketPath: m,
        responseEncoding: m,
        validateStatus: w,
        headers: (h, y, S) => f(of(h), of(y), S, !0),
    };
    return (
        T.forEach(Object.keys(Object.assign({}, o, i)), function (y) {
            const S = p[y] || f,
                P = S(o[y], i[y], y);
            (T.isUndefined(P) && S !== w) || (s[y] = P);
        }),
        s
    );
}
const Gf = (o) => {
        const i = Rn({}, o);
        let {
            data: s,
            withXSRFToken: a,
            xsrfHeaderName: f,
            xsrfCookieName: d,
            headers: m,
            auth: w,
        } = i;
        (i.headers = m = lt.from(m)),
            (i.url = $f(qf(i.baseURL, i.url), o.params, o.paramsSerializer)),
            w &&
                m.set(
                    "Authorization",
                    "Basic " +
                        btoa(
                            (w.username || "") +
                                ":" +
                                (w.password
                                    ? unescape(encodeURIComponent(w.password))
                                    : ""),
                        ),
                );
        let p;
        if (T.isFormData(s)) {
            if (qe.hasStandardBrowserEnv || qe.hasStandardBrowserWebWorkerEnv)
                m.setContentType(void 0);
            else if ((p = m.getContentType()) !== !1) {
                const [h, ...y] = p
                    ? p
                          .split(";")
                          .map((S) => S.trim())
                          .filter(Boolean)
                    : [];
                m.setContentType([h || "multipart/form-data", ...y].join("; "));
            }
        }
        if (
            qe.hasStandardBrowserEnv &&
            (a && T.isFunction(a) && (a = a(i)), a || (a !== !1 && E0(i.url)))
        ) {
            const h = f && d && C0.read(d);
            h && m.set(f, h);
        }
        return i;
    },
    x0 = typeof XMLHttpRequest < "u",
    P0 =
        x0 &&
        function (o) {
            return new Promise(function (s, a) {
                const f = Gf(o);
                let d = f.data;
                const m = lt.from(f.headers).normalize();
                let {
                        responseType: w,
                        onUploadProgress: p,
                        onDownloadProgress: h,
                    } = f,
                    y,
                    S,
                    P,
                    D,
                    _;
                function O() {
                    D && D(),
                        _ && _(),
                        f.cancelToken && f.cancelToken.unsubscribe(y),
                        f.signal && f.signal.removeEventListener("abort", y);
                }
                let N = new XMLHttpRequest();
                N.open(f.method.toUpperCase(), f.url, !0),
                    (N.timeout = f.timeout);
                function X() {
                    if (!N) return;
                    const U = lt.from(
                            "getAllResponseHeaders" in N &&
                                N.getAllResponseHeaders(),
                        ),
                        ee = {
                            data:
                                !w || w === "text" || w === "json"
                                    ? N.responseText
                                    : N.response,
                            status: N.status,
                            statusText: N.statusText,
                            headers: U,
                            config: o,
                            request: N,
                        };
                    Kf(
                        function (Z) {
                            s(Z), O();
                        },
                        function (Z) {
                            a(Z), O();
                        },
                        ee,
                    ),
                        (N = null);
                }
                "onloadend" in N
                    ? (N.onloadend = X)
                    : (N.onreadystatechange = function () {
                          !N ||
                              N.readyState !== 4 ||
                              (N.status === 0 &&
                                  !(
                                      N.responseURL &&
                                      N.responseURL.indexOf("file:") === 0
                                  )) ||
                              setTimeout(X);
                      }),
                    (N.onabort = function () {
                        N &&
                            (a(new b("Request aborted", b.ECONNABORTED, o, N)),
                            (N = null));
                    }),
                    (N.onerror = function () {
                        a(new b("Network Error", b.ERR_NETWORK, o, N)),
                            (N = null);
                    }),
                    (N.ontimeout = function () {
                        let Y = f.timeout
                            ? "timeout of " + f.timeout + "ms exceeded"
                            : "timeout exceeded";
                        const ee = f.transitional || Vf;
                        f.timeoutErrorMessage && (Y = f.timeoutErrorMessage),
                            a(
                                new b(
                                    Y,
                                    ee.clarifyTimeoutError
                                        ? b.ETIMEDOUT
                                        : b.ECONNABORTED,
                                    o,
                                    N,
                                ),
                            ),
                            (N = null);
                    }),
                    d === void 0 && m.setContentType(null),
                    "setRequestHeader" in N &&
                        T.forEach(m.toJSON(), function (Y, ee) {
                            N.setRequestHeader(ee, Y);
                        }),
                    T.isUndefined(f.withCredentials) ||
                        (N.withCredentials = !!f.withCredentials),
                    w && w !== "json" && (N.responseType = f.responseType),
                    h &&
                        (([P, _] = cl(h, !0)),
                        N.addEventListener("progress", P)),
                    p &&
                        N.upload &&
                        (([S, D] = cl(p)),
                        N.upload.addEventListener("progress", S),
                        N.upload.addEventListener("loadend", D)),
                    (f.cancelToken || f.signal) &&
                        ((y = (U) => {
                            N &&
                                (a(!U || U.type ? new Zn(null, o, N) : U),
                                N.abort(),
                                (N = null));
                        }),
                        f.cancelToken && f.cancelToken.subscribe(y),
                        f.signal &&
                            (f.signal.aborted
                                ? y()
                                : f.signal.addEventListener("abort", y)));
                const Q = v0(f.url);
                if (Q && qe.protocols.indexOf(Q) === -1) {
                    a(
                        new b(
                            "Unsupported protocol " + Q + ":",
                            b.ERR_BAD_REQUEST,
                            o,
                        ),
                    );
                    return;
                }
                N.send(d || null);
            });
        },
    _0 = (o, i) => {
        const { length: s } = (o = o ? o.filter(Boolean) : []);
        if (i || s) {
            let a = new AbortController(),
                f;
            const d = function (h) {
                if (!f) {
                    (f = !0), w();
                    const y = h instanceof Error ? h : this.reason;
                    a.abort(
                        y instanceof b
                            ? y
                            : new Zn(y instanceof Error ? y.message : y),
                    );
                }
            };
            let m =
                i &&
                setTimeout(() => {
                    (m = null),
                        d(new b(`timeout ${i} of ms exceeded`, b.ETIMEDOUT));
                }, i);
            const w = () => {
                o &&
                    (m && clearTimeout(m),
                    (m = null),
                    o.forEach((h) => {
                        h.unsubscribe
                            ? h.unsubscribe(d)
                            : h.removeEventListener("abort", d);
                    }),
                    (o = null));
            };
            o.forEach((h) => h.addEventListener("abort", d));
            const { signal: p } = a;
            return (p.unsubscribe = () => T.asap(w)), p;
        }
    },
    T0 = function* (o, i) {
        let s = o.byteLength;
        if (s < i) {
            yield o;
            return;
        }
        let a = 0,
            f;
        for (; a < s; ) (f = a + i), yield o.slice(a, f), (a = f);
    },
    N0 = async function* (o, i) {
        for await (const s of O0(o)) yield* T0(s, i);
    },
    O0 = async function* (o) {
        if (o[Symbol.asyncIterator]) {
            yield* o;
            return;
        }
        const i = o.getReader();
        try {
            for (;;) {
                const { done: s, value: a } = await i.read();
                if (s) break;
                yield a;
            }
        } finally {
            await i.cancel();
        }
    },
    lf = (o, i, s, a) => {
        const f = N0(o, i);
        let d = 0,
            m,
            w = (p) => {
                m || ((m = !0), a && a(p));
            };
        return new ReadableStream(
            {
                async pull(p) {
                    try {
                        const { done: h, value: y } = await f.next();
                        if (h) {
                            w(), p.close();
                            return;
                        }
                        let S = y.byteLength;
                        if (s) {
                            let P = (d += S);
                            s(P);
                        }
                        p.enqueue(new Uint8Array(y));
                    } catch (h) {
                        throw (w(h), h);
                    }
                },
                cancel(p) {
                    return w(p), f.return();
                },
            },
            { highWaterMark: 2 },
        );
    },
    gl =
        typeof fetch == "function" &&
        typeof Request == "function" &&
        typeof Response == "function",
    Xf = gl && typeof ReadableStream == "function",
    L0 =
        gl &&
        (typeof TextEncoder == "function"
            ? (
                  (o) => (i) =>
                      o.encode(i)
              )(new TextEncoder())
            : async (o) => new Uint8Array(await new Response(o).arrayBuffer())),
    Yf = (o, ...i) => {
        try {
            return !!o(...i);
        } catch {
            return !1;
        }
    },
    A0 =
        Xf &&
        Yf(() => {
            let o = !1;
            const i = new Request(qe.origin, {
                body: new ReadableStream(),
                method: "POST",
                get duplex() {
                    return (o = !0), "half";
                },
            }).headers.has("Content-Type");
            return o && !i;
        }),
    sf = 64 * 1024,
    Ts = Xf && Yf(() => T.isReadableStream(new Response("").body)),
    fl = { stream: Ts && ((o) => o.body) };
gl &&
    ((o) => {
        ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((i) => {
            !fl[i] &&
                (fl[i] = T.isFunction(o[i])
                    ? (s) => s[i]()
                    : (s, a) => {
                          throw new b(
                              `Response type '${i}' is not supported`,
                              b.ERR_NOT_SUPPORT,
                              a,
                          );
                      });
        });
    })(new Response());
const M0 = async (o) => {
        if (o == null) return 0;
        if (T.isBlob(o)) return o.size;
        if (T.isSpecCompliantForm(o))
            return (
                await new Request(qe.origin, {
                    method: "POST",
                    body: o,
                }).arrayBuffer()
            ).byteLength;
        if (T.isArrayBufferView(o) || T.isArrayBuffer(o)) return o.byteLength;
        if ((T.isURLSearchParams(o) && (o = o + ""), T.isString(o)))
            return (await L0(o)).byteLength;
    },
    z0 = async (o, i) => {
        const s = T.toFiniteNumber(o.getContentLength());
        return s ?? M0(i);
    },
    D0 =
        gl &&
        (async (o) => {
            let {
                url: i,
                method: s,
                data: a,
                signal: f,
                cancelToken: d,
                timeout: m,
                onDownloadProgress: w,
                onUploadProgress: p,
                responseType: h,
                headers: y,
                withCredentials: S = "same-origin",
                fetchOptions: P,
            } = Gf(o);
            h = h ? (h + "").toLowerCase() : "text";
            let D = _0([f, d && d.toAbortSignal()], m),
                _;
            const O =
                D &&
                D.unsubscribe &&
                (() => {
                    D.unsubscribe();
                });
            let N;
            try {
                if (
                    p &&
                    A0 &&
                    s !== "get" &&
                    s !== "head" &&
                    (N = await z0(y, a)) !== 0
                ) {
                    let ee = new Request(i, {
                            method: "POST",
                            body: a,
                            duplex: "half",
                        }),
                        le;
                    if (
                        (T.isFormData(a) &&
                            (le = ee.headers.get("content-type")) &&
                            y.setContentType(le),
                        ee.body)
                    ) {
                        const [Z, ce] = nf(N, cl(rf(p)));
                        a = lf(ee.body, sf, Z, ce);
                    }
                }
                T.isString(S) || (S = S ? "include" : "omit");
                const X = "credentials" in Request.prototype;
                _ = new Request(i, {
                    ...P,
                    signal: D,
                    method: s.toUpperCase(),
                    headers: y.normalize().toJSON(),
                    body: a,
                    duplex: "half",
                    credentials: X ? S : void 0,
                });
                let Q = await fetch(_);
                const U = Ts && (h === "stream" || h === "response");
                if (Ts && (w || (U && O))) {
                    const ee = {};
                    ["status", "statusText", "headers"].forEach((_e) => {
                        ee[_e] = Q[_e];
                    });
                    const le = T.toFiniteNumber(
                            Q.headers.get("content-length"),
                        ),
                        [Z, ce] = (w && nf(le, cl(rf(w), !0))) || [];
                    Q = new Response(
                        lf(Q.body, sf, Z, () => {
                            ce && ce(), O && O();
                        }),
                        ee,
                    );
                }
                h = h || "text";
                let Y = await fl[T.findKey(fl, h) || "text"](Q, o);
                return (
                    !U && O && O(),
                    await new Promise((ee, le) => {
                        Kf(ee, le, {
                            data: Y,
                            headers: lt.from(Q.headers),
                            status: Q.status,
                            statusText: Q.statusText,
                            config: o,
                            request: _,
                        });
                    })
                );
            } catch (X) {
                throw (
                    (O && O(),
                    X && X.name === "TypeError" && /fetch/i.test(X.message)
                        ? Object.assign(
                              new b("Network Error", b.ERR_NETWORK, o, _),
                              { cause: X.cause || X },
                          )
                        : b.from(X, X && X.code, o, _))
                );
            }
        }),
    Ns = { http: Ym, xhr: P0, fetch: D0 };
T.forEach(Ns, (o, i) => {
    if (o) {
        try {
            Object.defineProperty(o, "name", { value: i });
        } catch {}
        Object.defineProperty(o, "adapterName", { value: i });
    }
});
const uf = (o) => `- ${o}`,
    F0 = (o) => T.isFunction(o) || o === null || o === !1,
    Jf = {
        getAdapter: (o) => {
            o = T.isArray(o) ? o : [o];
            const { length: i } = o;
            let s, a;
            const f = {};
            for (let d = 0; d < i; d++) {
                s = o[d];
                let m;
                if (
                    ((a = s),
                    !F0(s) &&
                        ((a = Ns[(m = String(s)).toLowerCase()]), a === void 0))
                )
                    throw new b(`Unknown adapter '${m}'`);
                if (a) break;
                f[m || "#" + d] = a;
            }
            if (!a) {
                const d = Object.entries(f).map(
                    ([w, p]) =>
                        `adapter ${w} ` +
                        (p === !1
                            ? "is not supported by the environment"
                            : "is not available in the build"),
                );
                let m = i
                    ? d.length > 1
                        ? `since :
` +
                          d.map(uf).join(`
`)
                        : " " + uf(d[0])
                    : "as no adapter specified";
                throw new b(
                    "There is no suitable adapter to dispatch the request " + m,
                    "ERR_NOT_SUPPORT",
                );
            }
            return a;
        },
        adapters: Ns,
    };
function Es(o) {
    if (
        (o.cancelToken && o.cancelToken.throwIfRequested(),
        o.signal && o.signal.aborted)
    )
        throw new Zn(null, o);
}
function af(o) {
    return (
        Es(o),
        (o.headers = lt.from(o.headers)),
        (o.data = Ss.call(o, o.transformRequest)),
        ["post", "put", "patch"].indexOf(o.method) !== -1 &&
            o.headers.setContentType("application/x-www-form-urlencoded", !1),
        Jf.getAdapter(o.adapter || Vr.adapter)(o).then(
            function (a) {
                return (
                    Es(o),
                    (a.data = Ss.call(o, o.transformResponse, a)),
                    (a.headers = lt.from(a.headers)),
                    a
                );
            },
            function (a) {
                return (
                    Qf(a) ||
                        (Es(o),
                        a &&
                            a.response &&
                            ((a.response.data = Ss.call(
                                o,
                                o.transformResponse,
                                a.response,
                            )),
                            (a.response.headers = lt.from(
                                a.response.headers,
                            )))),
                    Promise.reject(a)
                );
            },
        )
    );
}
const Zf = "1.7.9",
    vl = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
    (o, i) => {
        vl[o] = function (a) {
            return typeof a === o || "a" + (i < 1 ? "n " : " ") + o;
        };
    },
);
const cf = {};
vl.transitional = function (i, s, a) {
    function f(d, m) {
        return (
            "[Axios v" +
            Zf +
            "] Transitional option '" +
            d +
            "'" +
            m +
            (a ? ". " + a : "")
        );
    }
    return (d, m, w) => {
        if (i === !1)
            throw new b(
                f(m, " has been removed" + (s ? " in " + s : "")),
                b.ERR_DEPRECATED,
            );
        return (
            s &&
                !cf[m] &&
                ((cf[m] = !0),
                console.warn(
                    f(
                        m,
                        " has been deprecated since v" +
                            s +
                            " and will be removed in the near future",
                    ),
                )),
            i ? i(d, m, w) : !0
        );
    };
};
vl.spelling = function (i) {
    return (s, a) => (console.warn(`${a} is likely a misspelling of ${i}`), !0);
};
function I0(o, i, s) {
    if (typeof o != "object")
        throw new b("options must be an object", b.ERR_BAD_OPTION_VALUE);
    const a = Object.keys(o);
    let f = a.length;
    for (; f-- > 0; ) {
        const d = a[f],
            m = i[d];
        if (m) {
            const w = o[d],
                p = w === void 0 || m(w, d, o);
            if (p !== !0)
                throw new b(
                    "option " + d + " must be " + p,
                    b.ERR_BAD_OPTION_VALUE,
                );
            continue;
        }
        if (s !== !0) throw new b("Unknown option " + d, b.ERR_BAD_OPTION);
    }
}
const il = { assertOptions: I0, validators: vl },
    At = il.validators;
class Cn {
    constructor(i) {
        (this.defaults = i),
            (this.interceptors = { request: new ef(), response: new ef() });
    }
    async request(i, s) {
        try {
            return await this._request(i, s);
        } catch (a) {
            if (a instanceof Error) {
                let f = {};
                Error.captureStackTrace
                    ? Error.captureStackTrace(f)
                    : (f = new Error());
                const d = f.stack ? f.stack.replace(/^.+\n/, "") : "";
                try {
                    a.stack
                        ? d &&
                          !String(a.stack).endsWith(
                              d.replace(/^.+\n.+\n/, ""),
                          ) &&
                          (a.stack +=
                              `
` + d)
                        : (a.stack = d);
                } catch {}
            }
            throw a;
        }
    }
    _request(i, s) {
        typeof i == "string" ? ((s = s || {}), (s.url = i)) : (s = i || {}),
            (s = Rn(this.defaults, s));
        const { transitional: a, paramsSerializer: f, headers: d } = s;
        a !== void 0 &&
            il.assertOptions(
                a,
                {
                    silentJSONParsing: At.transitional(At.boolean),
                    forcedJSONParsing: At.transitional(At.boolean),
                    clarifyTimeoutError: At.transitional(At.boolean),
                },
                !1,
            ),
            f != null &&
                (T.isFunction(f)
                    ? (s.paramsSerializer = { serialize: f })
                    : il.assertOptions(
                          f,
                          { encode: At.function, serialize: At.function },
                          !0,
                      )),
            il.assertOptions(
                s,
                {
                    baseUrl: At.spelling("baseURL"),
                    withXsrfToken: At.spelling("withXSRFToken"),
                },
                !0,
            ),
            (s.method = (
                s.method ||
                this.defaults.method ||
                "get"
            ).toLowerCase());
        let m = d && T.merge(d.common, d[s.method]);
        d &&
            T.forEach(
                ["delete", "get", "head", "post", "put", "patch", "common"],
                (_) => {
                    delete d[_];
                },
            ),
            (s.headers = lt.concat(m, d));
        const w = [];
        let p = !0;
        this.interceptors.request.forEach(function (O) {
            (typeof O.runWhen == "function" && O.runWhen(s) === !1) ||
                ((p = p && O.synchronous), w.unshift(O.fulfilled, O.rejected));
        });
        const h = [];
        this.interceptors.response.forEach(function (O) {
            h.push(O.fulfilled, O.rejected);
        });
        let y,
            S = 0,
            P;
        if (!p) {
            const _ = [af.bind(this), void 0];
            for (
                _.unshift.apply(_, w),
                    _.push.apply(_, h),
                    P = _.length,
                    y = Promise.resolve(s);
                S < P;

            )
                y = y.then(_[S++], _[S++]);
            return y;
        }
        P = w.length;
        let D = s;
        for (S = 0; S < P; ) {
            const _ = w[S++],
                O = w[S++];
            try {
                D = _(D);
            } catch (N) {
                O.call(this, N);
                break;
            }
        }
        try {
            y = af.call(this, D);
        } catch (_) {
            return Promise.reject(_);
        }
        for (S = 0, P = h.length; S < P; ) y = y.then(h[S++], h[S++]);
        return y;
    }
    getUri(i) {
        i = Rn(this.defaults, i);
        const s = qf(i.baseURL, i.url);
        return $f(s, i.params, i.paramsSerializer);
    }
}
T.forEach(["delete", "get", "head", "options"], function (i) {
    Cn.prototype[i] = function (s, a) {
        return this.request(
            Rn(a || {}, { method: i, url: s, data: (a || {}).data }),
        );
    };
});
T.forEach(["post", "put", "patch"], function (i) {
    function s(a) {
        return function (d, m, w) {
            return this.request(
                Rn(w || {}, {
                    method: i,
                    headers: a ? { "Content-Type": "multipart/form-data" } : {},
                    url: d,
                    data: m,
                }),
            );
        };
    }
    (Cn.prototype[i] = s()), (Cn.prototype[i + "Form"] = s(!0));
});
class Is {
    constructor(i) {
        if (typeof i != "function")
            throw new TypeError("executor must be a function.");
        let s;
        this.promise = new Promise(function (d) {
            s = d;
        });
        const a = this;
        this.promise.then((f) => {
            if (!a._listeners) return;
            let d = a._listeners.length;
            for (; d-- > 0; ) a._listeners[d](f);
            a._listeners = null;
        }),
            (this.promise.then = (f) => {
                let d;
                const m = new Promise((w) => {
                    a.subscribe(w), (d = w);
                }).then(f);
                return (
                    (m.cancel = function () {
                        a.unsubscribe(d);
                    }),
                    m
                );
            }),
            i(function (d, m, w) {
                a.reason || ((a.reason = new Zn(d, m, w)), s(a.reason));
            });
    }
    throwIfRequested() {
        if (this.reason) throw this.reason;
    }
    subscribe(i) {
        if (this.reason) {
            i(this.reason);
            return;
        }
        this._listeners ? this._listeners.push(i) : (this._listeners = [i]);
    }
    unsubscribe(i) {
        if (!this._listeners) return;
        const s = this._listeners.indexOf(i);
        s !== -1 && this._listeners.splice(s, 1);
    }
    toAbortSignal() {
        const i = new AbortController(),
            s = (a) => {
                i.abort(a);
            };
        return (
            this.subscribe(s),
            (i.signal.unsubscribe = () => this.unsubscribe(s)),
            i.signal
        );
    }
    static source() {
        let i;
        return {
            token: new Is(function (f) {
                i = f;
            }),
            cancel: i,
        };
    }
}
function U0(o) {
    return function (s) {
        return o.apply(null, s);
    };
}
function j0(o) {
    return T.isObject(o) && o.isAxiosError === !0;
}
const Os = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
};
Object.entries(Os).forEach(([o, i]) => {
    Os[i] = o;
});
function bf(o) {
    const i = new Cn(o),
        s = Of(Cn.prototype.request, i);
    return (
        T.extend(s, Cn.prototype, i, { allOwnKeys: !0 }),
        T.extend(s, i, null, { allOwnKeys: !0 }),
        (s.create = function (f) {
            return bf(Rn(o, f));
        }),
        s
    );
}
const Ae = bf(Vr);
Ae.Axios = Cn;
Ae.CanceledError = Zn;
Ae.CancelToken = Is;
Ae.isCancel = Qf;
Ae.VERSION = Zf;
Ae.toFormData = yl;
Ae.AxiosError = b;
Ae.Cancel = Ae.CanceledError;
Ae.all = function (i) {
    return Promise.all(i);
};
Ae.spread = U0;
Ae.isAxiosError = j0;
Ae.mergeConfig = Rn;
Ae.AxiosHeaders = lt;
Ae.formToJSON = (o) => Wf(T.isHTMLForm(o) ? new FormData(o) : o);
Ae.getAdapter = Jf.getAdapter;
Ae.HttpStatusCode = Os;
Ae.default = Ae;
const B0 = "",
    H0 = "鲁迅",
    $0 =
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent",
    V0 = "AIzaSyAeGlCtRCNnck2UFyeCZrP1uf87onftjCg";
function W0() {
    const [o, i] = Br.useState(B0),
        [s, a] = Br.useState(H0),
        [f, d] = Br.useState(""),
        m = () => {
            im(document.querySelector(".card"))
                .then((p) => {
                    const h = window.prompt("请输入文件名", `${s}.png`);
                    cm(p, h);
                })
                .catch((p) => {
                    console.log(p);
                });
        },
        w = () => {
            if (o.length === 0) return alert("请输入内容");
            if (s.length === 0) return alert("请输入作家名");
            Ae.post(`${$0}?key=${V0}`, {
                contents: [
                    {
                        parts: [
                            {
                                text: `请将以下内容用作家${s}的笔迹仿写，内容如下：${o}`,
                            },
                        ],
                    },
                ],
            }).then((p) => {
                d(p.data.candidates[0].content.parts[0].text);
            });
        };
    return Fe.jsxs("div", {
        className: "app",
        children: [
            Fe.jsx(hh, { content: f, footer: s }),
            Fe.jsxs("div", {
                className: "textarea-container",
                children: [
                    Fe.jsx("textarea", {
                        className: "textarea",
                        placeholder: "请输入内容",
                        value: o,
                        onChange: (p) => {
                            if (p.target.value.length > 140)
                                return alert("最多140字");
                            i(p.target.value);
                        },
                    }),
                    o.length === 0 &&
                        Fe.jsx("label", {
                            className: "limit",
                            children: "最多140字",
                        }),
                    Fe.jsx("div", {
                        className: "author-input-container",
                        children: Fe.jsx("input", {
                            type: "text",
                            placeholder: "请输入作家名",
                            className: "author-input",
                            value: s,
                            onChange: (p) => {
                                a(p.target.value);
                            },
                        }),
                    }),
                ],
            }),
            Fe.jsx("button", {
                className: "generate-button",
                onClick: w,
                children: "生成",
            }),
            Fe.jsx("button", {
                className: "generate-button",
                onClick: m,
                children: "下载",
            }),
        ],
    });
}
rh.createRoot(document.getElementById("root")).render(
    Fe.jsx(Br.StrictMode, { children: Fe.jsx(W0, {}) }),
);
