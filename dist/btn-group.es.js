import { openBlock as i, createElementBlock as a, normalizeClass as u, renderSlot as l } from "vue";
const p = {
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
      return this.size && !!this.size.match(
        new RegExp(`^${this.sizeableClassPrefix}`)
      );
    },
    sizeableClass() {
      return this.size ? !this.sizeableClassPrefix || this.hasSizeablePrefix ? this.size : `${this.sizeableClassPrefix}-${this.size}` : "";
    }
  }
}, c = (e, s) => {
  const t = e.__vccOpts || e;
  for (const [o, r] of s)
    t[o] = r;
  return t;
}, g = {
  name: "BtnGroup",
  mixins: [
    p
  ],
  props: {
    sizePrefix: {
      type: String,
      default() {
        return "btn-group";
      }
    },
    toggle: Boolean,
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
}, f = ["data-toggle"];
function _(e, s, t, o, r, n) {
  return i(), a("div", {
    class: u(n.classes),
    "data-toggle": t.toggle ? "buttons" : !1,
    role: "group"
  }, [
    l(e.$slots, "default")
  ], 10, f);
}
const P = /* @__PURE__ */ c(g, [["render", _]]), d = {
  name: "BtnGroupToggle"
}, h = {
  class: "btn-group-toggle",
  "data-toggle": "buttons"
};
function $(e, s, t, o, r, n) {
  return i(), a("div", h, [
    l(e.$slots, "default")
  ]);
}
const B = /* @__PURE__ */ c(d, [["render", $]]), b = {
  name: "BtnToolbar"
}, z = {
  class: "btn-toolbar",
  role: "toolbar"
};
function m(e, s, t, o, r, n) {
  return i(), a("div", z, [
    l(e.$slots, "default")
  ]);
}
const v = /* @__PURE__ */ c(b, [["render", m]]);
export {
  P as BtnGroup,
  B as BtnGroupToggle,
  v as BtnToolbar
};
