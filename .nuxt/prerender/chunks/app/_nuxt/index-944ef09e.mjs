import { b as buildAssetsURL } from '../../renderer.mjs';
import { u as useHead } from './index-6a088328.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr } from 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/vue/server-renderer/index.mjs';
import 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/devalue/index.js';
import 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/@unhead/ssr/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/defu/dist/defu.mjs';
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
import 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/@unhead/shared/dist/index.mjs';
import '../server.mjs';
import 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/vue-router/dist/vue-router.node.mjs';

const _imports_0 = "" + buildAssetsURL("pokemon-logo-text-png-7.57f137c7.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Vue-Nuxt Pokemon | Home"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full flex justify-center items-center bg-gradient-to-r from-red-500 to-yellow-500" }, _attrs))}><img class="w-2/6 h-1/6"${ssrRenderAttr("src", _imports_0)}></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-944ef09e.mjs.map
