import { defineComponent as c, computed as p, openBlock as r, createElementBlock as a, normalizeClass as u, renderSlot as l } from "vue";
const _ = ["data-toggle"], h = /* @__PURE__ */ c({
  __name: "BtnGroup",
  props: {
    size: {},
    toggle: { type: Boolean },
    vertical: { type: Boolean }
  },
  setup(t) {
    const o = t, e = p(() => ({
      "btn-group": !0,
      "btn-group-toggle": o.toggle,
      "btn-group-vertical": o.vertical,
      [String(o.size)]: !!o.size
    }));
    return (n, s) => (r(), a("div", {
      class: u(e.value),
      "data-toggle": n.toggle ? "buttons" : !1,
      role: "group"
    }, [
      l(n.$slots, "default")
    ], 10, _));
  }
}), i = c({
  name: "BtnGroupToggle"
}), g = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [n, s] of o)
    e[n] = s;
  return e;
}, d = {
  class: "btn-group-toggle",
  "data-toggle": "buttons"
};
function f(t, o, e, n, s, v) {
  return r(), a("div", d, [
    l(t.$slots, "default")
  ]);
}
const z = /* @__PURE__ */ g(i, [["render", f]]), $ = {}, m = {
  class: "btn-toolbar",
  role: "toolbar"
};
function b(t, o) {
  return r(), a("div", m, [
    l(t.$slots, "default")
  ]);
}
const G = /* @__PURE__ */ g($, [["render", b]]);
export {
  h as BtnGroup,
  z as BtnGroupToggle,
  G as BtnToolbar
};
//# sourceMappingURL=btn-group.js.map
