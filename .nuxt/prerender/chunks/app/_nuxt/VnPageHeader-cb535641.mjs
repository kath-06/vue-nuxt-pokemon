import { defineComponent, mergeProps, useSSRContext } from 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrInterpolate } from 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/vue/server-renderer/index.mjs';
import { _ as _sfc_main$2 } from '../server.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "VnLoading",
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
        class: "text-center",
        style: __props.loading ? null : { display: "none" }
      }, _attrs))}><div class="w-full h-screen flex justify-center items-center" role="status"><svg aria-hidden="true" class="w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path></svg><svg class="w-10 h-10 absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1333.34 1333.07" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><g id="Layer_x0020_1"><g id="_1473324886368"><path id="Down" class="fil0" d="M666.54 885.24c-105.31 0-193.15-74.56-214.01-173.61H102.19c24.77 288.04 266.41 514.04 560.7 514.04 294.3 0 536.2-226 560.7-514.04H880.55c-20.85 99.32-108.7 173.61-214.01 173.61z"></path><path id="Shadow_Down" d="M791.66 1211.07c233.56-54.74 411.08-254.68 431.94-499.44h-138.16c-13.81 222.09-130.34 410.3-293.78 499.44z" fill="#dfdfdf" fill-rule="nonzero"></path><path id="Center" class="fil0" d="M795.57 666.54c-.26 0-.26 0 0 0-.26-15.9-3.13-31.02-8.34-45.09-18.25-49.01-65.43-83.68-120.69-83.68-55.26 0-102.44 34.93-120.69 83.68a129.312 129.312 0 00-8.08 45.09h.26c0 15.9 2.87 31.02 8.08 45.09 18.25 49.01 65.43 83.68 120.69 83.68 55.26 0 102.44-34.93 120.69-83.68 5.21-13.82 8.08-29.19 8.08-45.09z"></path><path id="Up" d="M666.8 448.09c105.31 0 193.15 74.56 214.01 173.61h350.34c-24.76-288.3-266.41-514.3-560.96-514.3-294.56 0-535.94 226-560.7 514.04h343.3c20.85-99.06 108.7-173.35 214.01-173.35z" fill="#ff1c1c" fill-rule="nonzero"></path><path id="Shadow_Up" d="M1085.44 621.44h145.45C1209.52 372.5 1026 169.7 786.45 119.38c166.31 87.84 284.91 277.87 298.99 502.06z" fill="#df1818" fill-rule="nonzero"></path><path id="Line" d="M670.19 107.4c294.56 0 536.2 226 560.7 514.04H880.55c-20.85-99.06-108.7-173.61-214.02-173.61-105.31 0-193.15 74.56-214.01 173.61H109.48c24.76-288.05 266.41-514.04 560.7-514.04zm117.04 514.04c5.21 14.07 8.08 29.19 8.08 45.09h.26c0 15.9-2.87 31.02-8.08 45.09-18.24 49.01-65.43 83.68-120.69 83.68-55.26 0-102.44-34.93-120.69-83.68a129.312 129.312 0 01-8.08-45.09h-.26c0-15.9 2.87-31.02 8.08-45.09 18.24-49.01 65.43-83.68 120.69-83.68 55.26 0 102.44 34.93 120.69 83.68zm-124.34 604.49c-294.56 0-536.2-226-560.7-514.04h350.34c20.85 99.05 108.7 173.61 214.01 173.61 105.31 0 193.16-74.56 214.02-173.61h343.3c-24.76 287.78-266.41 514.04-560.96 514.04zM666.54 0C298.47 0 0 298.46 0 666.54c0 368.07 298.47 666.54 666.54 666.54 368.07 0 666.8-298.21 666.8-666.54S1034.87 0 666.54 0z" fill="#000" fill-rule="nonzero"></path></g></g></svg></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/VnLoading.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "VnPageHeader",
  __ssrInlineRender: true,
  props: {
    text: {
      type: String,
      default: "Header Title"
    },
    showButton: {
      type: Boolean,
      default: false
    }
  },
  emits: ["back"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const handleBack = () => {
      emits("back");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex text-title-default"><p style="${ssrRenderStyle(__props.showButton ? null : { display: "none" })}" class="mr-2">`);
      _push(ssrRenderComponent(_sfc_main$2, {
        type: "icon-only",
        icon: "keyboard_backspace",
        onClick: handleBack
      }, null, _parent));
      _push(`</p><p class="flex items-center">${ssrInterpolate(__props.text)}</p></div><hr class="my-4"></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/VnPageHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _, _sfc_main$1 as a };
//# sourceMappingURL=VnPageHeader-cb535641.mjs.map
