import { defineComponent as i, openBlock as n, createElementBlock as a, normalizeClass as g, renderSlot as l } from "vue";
const u = i({
  props: {
    componentPrefix: String,
    size: String,
    sizePrefix: String
  },
  computed: {
    sizeableClassPrefix() {
      return this.sizePrefix || this.componentPrefix;
    },
    hasSizeablePrefix() {
      return this.size === void 0 ? !1 : !!this.size.match(new RegExp(`^${this.sizeableClassPrefix}`));
    },
    sizeableClass() {
      return this.size ? !this.sizeableClassPrefix || this.hasSizeablePrefix ? this.size : `${this.sizeableClassPrefix}-${this.size}` : "";
    }
  }
}), f = i({
  name: "BtnGroup",
  mixins: [
    u
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
}), c = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [o, r] of t)
    s[o] = r;
  return s;
}, d = ["data-toggle"];
function h(e, t, s, o, r, p) {
  return n(), a("div", {
    class: g(e.classes),
    "data-toggle": e.toggle ? "buttons" : !1,
    role: "group"
  }, [
    l(e.$slots, "default")
  ], 10, d);
}
const v = /* @__PURE__ */ c(f, [["render", h]]), _ = i({
  name: "BtnGroupToggle"
}), $ = {
  class: "btn-group-toggle",
  "data-toggle": "buttons"
};
function b(e, t, s, o, r, p) {
  return n(), a("div", $, [
    l(e.$slots, "default")
  ]);
}
const B = /* @__PURE__ */ c(_, [["render", b]]), z = {}, m = {
  class: "btn-toolbar",
  role: "toolbar"
};
function x(e, t) {
  return n(), a("div", m, [
    l(e.$slots, "default")
  ]);
}
const C = /* @__PURE__ */ c(z, [["render", x]]);
export {
  v as BtnGroup,
  B as BtnGroupToggle,
  C as BtnToolbar
};
