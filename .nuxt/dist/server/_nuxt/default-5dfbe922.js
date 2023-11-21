import { _ as __nuxt_component_0 } from "./nuxt-link-a8dcf52a.js";
import { defineComponent, mergeProps, useSSRContext, ref, unref, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle, ssrRenderSlot } from "vue/server-renderer";
import { _ as _imports_0 } from "./pok-mon-go-logo-png-30-bcee7037.js";
import "ufo";
import "hookable";
import "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "destr";
import "devalue";
import "defu";
import "klona";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "VnHomeLoading",
  __ssrInlineRender: true,
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "w-full h-screen flex flex-col justify-center items-center",
        role: "status",
        style: __props.loading ? null : { display: "none" }
      }, _attrs))}><img class="w-40 h-40 animate-bounce animate-ease-in-out"${ssrRenderAttr("src", _imports_0)}><div class="text-2xl mt-4 font-bold text-yellow-500"> Loading </div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/VnHomeLoading.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    let loading = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$1, { loading: unref(loading) }, null, _parent));
      _push(`<header style="${ssrRenderStyle(!unref(loading) ? null : { display: "none" })}" class="shadow-sm bg-red-800 animate-fade-up animate-ease-in-out"><nav class="p-4 flex justify-between">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "font-bold text-yellow-400",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Vue-Nuxt-Pokemon `);
          } else {
            return [
              createTextVNode(" Vue-Nuxt-Pokemon ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<ul class="flex gap-4 text-yellow-500 font-semibold"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Home `);
          } else {
            return [
              createTextVNode(" Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/pokemons" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Pokemons `);
          } else {
            return [
              createTextVNode(" Pokemons ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></nav></header><div style="${ssrRenderStyle(!unref(loading) ? null : { display: "none" })}" class="h-full animate-fade-down animate-ease-in-out">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=default-5dfbe922.js.map
