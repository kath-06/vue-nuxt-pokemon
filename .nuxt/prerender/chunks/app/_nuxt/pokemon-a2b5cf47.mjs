import { _ as __nuxt_component_0 } from './nuxt-link-a8dcf52a.mjs';
import { withCtx, createTextVNode, useSSRContext } from 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/vue/server-renderer/index.mjs';
import { e as _export_sfc } from '../server.mjs';
import 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/h3/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/unstorage/drivers/fs.mjs';
import 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/unstorage/drivers/memory.mjs';
import 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/pathe/dist/index.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}><header class="shadow-sm bg-yellow-500"><nav class="p-4 flex justify-between">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "font-bold text-red-800",
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
  _push(`<ul class="flex gap-4 text-red-900 font-semibold"><li>`);
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
  _push(`</li></ul></nav></header><div class="p-4">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/pokemon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pokemon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { pokemon as default };
//# sourceMappingURL=pokemon-a2b5cf47.mjs.map
