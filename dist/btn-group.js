import { Sizeable as g } from "@vue-interface/sizeable";
import { defineComponent as i, openBlock as r, createElementBlock as a, normalizeClass as u, renderSlot as l } from "vue";
const d = i({
  name: "BtnGroup",
  mixins: [
    g
  ],
  props: {
    /**
     * The size prefix.
     *
     * @param {String}
     */
    sizePrefix: {
      type: String,
      default() {
        return "btn-group";
      }
    },
    /**
     * Denote the button group as toggle buttons
     *
     * @type {Boolean}
     */
    toggle: Boolean,
    /**
     * Display the buttons vertically
     *
     * @type {Boolean}
     */
    vertical: Boolean
  },
  computed: {
    classes() {
      return {
        "btn-group": !this.vertical,
        "btn-group-toggle": this.toggle,
        "btn-group-vertical": this.vertical,
        [this.sizeableClass]: !!this.size
      };
    }
  }
}), c = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [s, n] of o)
    e[s] = n;
  return e;
}, _ = ["data-toggle"];
function f(t, o, e, s, n, p) {
  return r(), a("div", {
    class: u(t.classes),
    "data-toggle": t.toggle ? "buttons" : !1,
    role: "group"
  }, [
    l(t.$slots, "default")
  ], 10, _);
}
const k = /* @__PURE__ */ c(d, [["render", f]]), $ = i({
  name: "BtnGroupToggle"
}), m = {
  class: "btn-group-toggle",
  "data-toggle": "buttons"
};
function b(t, o, e, s, n, p) {
  return r(), a("div", m, [
    l(t.$slots, "default")
  ]);
}
const C = /* @__PURE__ */ c($, [["render", b]]), h = {}, v = {
  class: "btn-toolbar",
  role: "toolbar"
};
function B(t, o) {
  return r(), a("div", v, [
    l(t.$slots, "default")
  ]);
}
const S = /* @__PURE__ */ c(h, [["render", B]]);
export {
  k as BtnGroup,
  C as BtnGroupToggle,
  S as BtnToolbar
};
