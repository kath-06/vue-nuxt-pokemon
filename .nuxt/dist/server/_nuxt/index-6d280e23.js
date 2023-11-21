import { _ as __nuxt_component_0 } from "./nuxt-link-a8dcf52a.js";
import { ref, shallowRef, toRef, getCurrentInstance, onServerPrefetch, unref, computed, reactive, defineComponent, watch, toRefs, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrIncludeBooleanAttr, ssrRenderClass } from "vue/server-renderer";
import { b as asyncDataDefaults, d as useNuxtApp, c as createError, f as fetchDefaults, _ as _sfc_main$3 } from "../server.mjs";
import { u as useHead } from "./index-6a088328.js";
import "hookable";
import { hash } from "ohash";
import "destr";
import "devalue";
import "defu";
import "klona";
import { _ as _sfc_main$4, a as _sfc_main$5 } from "./VnPageHeader-cb535641.js";
import "ufo";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
function useAsyncData(...args) {
  var _a;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  const nuxt = useNuxtApp();
  const getDefault = () => null;
  const getDefaultCachedData = () => nuxt.isHydrating ? nuxt.payload.data[key] : nuxt.static.data[key];
  options.server = options.server ?? true;
  options.default = options.default ?? getDefault;
  options.getCachedData = options.getCachedData ?? getDefaultCachedData;
  options.lazy = options.lazy ?? false;
  options.immediate = options.immediate ?? true;
  options.deep = options.deep ?? asyncDataDefaults.deep;
  const hasCachedData = () => ![null, void 0].includes(options.getCachedData(key));
  if (!nuxt._asyncData[key] || !options.immediate) {
    (_a = nuxt.payload._errors)[key] ?? (_a[key] = null);
    const _ref = options.deep ? ref : shallowRef;
    nuxt._asyncData[key] = {
      data: _ref(options.getCachedData(key) ?? options.default()),
      pending: ref(!hasCachedData()),
      error: toRef(nuxt.payload._errors, key),
      status: ref("idle")
    };
  }
  const asyncData = { ...nuxt._asyncData[key] };
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      if (opts.dedupe === false) {
        return nuxt._asyncDataPromises[key];
      }
      nuxt._asyncDataPromises[key].cancelled = true;
    }
    if ((opts._initial || nuxt.isHydrating && opts._initial !== false) && hasCachedData()) {
      return Promise.resolve(options.getCachedData(key));
    }
    asyncData.pending.value = true;
    asyncData.status.value = "pending";
    const promise = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxt));
        } catch (err) {
          reject(err);
        }
      }
    ).then((_result) => {
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      let result = _result;
      if (options.transform) {
        result = options.transform(_result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
      asyncData.status.value = "success";
    }).catch((error) => {
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      asyncData.error.value = error;
      asyncData.data.value = unref(options.default());
      asyncData.status.value = "error";
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = createError(asyncData.error.value);
      }
      delete nuxt._asyncDataPromises[key];
    });
    nuxt._asyncDataPromises[key] = promise;
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxt.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
function useRequestFetch() {
  var _a;
  const event = (_a = useNuxtApp().ssrContext) == null ? void 0 : _a.event;
  return (event == null ? void 0 : event.$fetch) || globalThis.$fetch;
}
function useFetch(request, arg1, arg2) {
  var _a;
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _request = computed(() => {
    let r = request;
    if (typeof r === "function") {
      r = r();
    }
    return unref(r);
  });
  const _key = opts.key || hash([autoKey, ((_a = unref(opts.method)) == null ? void 0 : _a.toUpperCase()) || "GET", unref(opts.baseURL), typeof _request.value === "string" ? _request.value : "", unref(opts.params || opts.query), unref(opts.headers)]);
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + _key);
  }
  if (!request) {
    throw new Error("[nuxt] [useFetch] request is missing.");
  }
  const key = _key === autoKey ? "$f" + _key : _key;
  if (!opts.baseURL && typeof _request.value === "string" && _request.value.startsWith("//")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    watch: watch2,
    immediate,
    getCachedData,
    deep,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchDefaults,
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    immediate,
    getCachedData,
    deep,
    watch: watch2 === false ? [] : [_fetchOptions, _request, ...watch2 || []]
  };
  let controller;
  const asyncData = useAsyncData(key, () => {
    var _a2;
    (_a2 = controller == null ? void 0 : controller.abort) == null ? void 0 : _a2.call(controller);
    controller = typeof AbortController !== "undefined" ? new AbortController() : {};
    const isLocalFetch = typeof _request.value === "string" && _request.value.startsWith("/");
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch && isLocalFetch) {
      _$fetch = useRequestFetch();
    }
    return _$fetch(_request.value, { signal: controller.signal, ..._fetchOptions });
  }, _asyncDataOptions);
  return asyncData;
}
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PokemonCard",
  __ssrInlineRender: true,
  props: {
    pokemonData: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    const props = __props;
    let pokemon = reactive({});
    let imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
    let backImgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
    let gifUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/";
    watch(() => toRefs(props.pokemonData), () => {
      Object.assign(pokemon, {});
      Object.assign(pokemon, props.pokemonData);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flip-card card-primary" }, _attrs))}><div class="flip-card-inner preserve-3d"><div class="flip-card-front"><img class="w-3/4 h-1/2" style="${ssrRenderStyle(unref(pokemon).id !== "1013" ? null : { display: "none" })}"${ssrRenderAttr("src", `${unref(imgUrl)}${unref(pokemon).id}.png`)}><p class="text-title-default">${ssrInterpolate(unref(pokemon).name)}</p></div><div class="flip-card-back"><div class="text-title-primary">${ssrInterpolate(unref(pokemon).name)}</div><div class="p-2">`);
      if (parseInt(unref(pokemon).id) < 650) {
        _push(`<img${ssrRenderAttr("src", `${unref(gifUrl)}${unref(pokemon).id}.gif`)}>`);
      } else {
        _push(`<img${ssrRenderAttr("src", `${unref(backImgUrl)}${unref(pokemon).id}.png`)}>`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/pokemons/${unref(pokemon).id}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$3, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`View`);
                } else {
                  return [
                    createTextVNode("View")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$3, null, {
                default: withCtx(() => [
                  createTextVNode("View")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const PokemonCard_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PokemonCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "VnPagination",
  __ssrInlineRender: true,
  props: {
    count: {
      type: Number,
      default: 0
    },
    itemPerPage: {
      type: Number,
      default: 120
    },
    showPrev: {
      type: Boolean,
      default: false
    },
    showNext: {
      type: Boolean,
      default: false
    },
    activePage: {
      type: Number,
      default: 0
    }
  },
  emits: ["prev", "next", "page"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    let pagesCount = ref(0);
    watch(() => props.count, () => {
      pagesCount.value = Math.ceil(props.count / props.itemPerPage);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-end" }, _attrs))}><button style="${ssrRenderStyle(__props.showPrev ? null : { display: "none" })}" class="pagination-prv-btn"> Prev </button><!--[-->`);
      ssrRenderList(unref(pagesCount), (page, index) => {
        _push(`<button${ssrIncludeBooleanAttr(__props.activePage === index ? true : false) ? " disabled" : ""} class="${ssrRenderClass(__props.activePage === index ? "disable-pagination-btn" : "pagination-btn")}">${ssrInterpolate(index + 1)}</button>`);
      });
      _push(`<!--]--><button style="${ssrRenderStyle(__props.showNext ? null : { display: "none" })}" class="pagination-nxt-btn"> Next </button></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/VnPagination.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Vue-Nuxt | Pokemon List"
    });
    let pokemons = reactive([]);
    let limit = ref(120);
    ref(0);
    let count = ref(0);
    let nextOffset = ref(0);
    let prevOffset = ref(0);
    let loading = ref(true);
    let showPrev = ref(true);
    let showNext = ref(true);
    let activePage = ref(0);
    let itemPerPage = ref(120);
    const getPokemon = async (offsetData) => {
      let dataResults = [];
      const { data, refresh } = await useFetch(`/api/pokemon?offset=${offsetData}&limit=${limit.value}`, { query: { type: "getList" } }, "$Uu84QUJyNM");
      if (data.value === null) {
        await refresh();
      }
      const nextUrl = data.value.next;
      const prevUrl = data.value.previous;
      if (nextUrl) {
        const nextUrlParams = new URL(nextUrl);
        nextOffset.value = nextUrlParams.searchParams.get("offset") || 0;
      }
      if (prevUrl) {
        const prevUrlParams = new URL(prevUrl);
        prevOffset.value = prevUrlParams.searchParams.get("offset") || 0;
      }
      dataResults = data.value.results;
      dataResults.map((item) => {
        const dataId = getId(item.url);
        Object.assign(item, { ...item, id: dataId });
      });
      count.value = 1017;
      showNext.value = nextOffset.value > count.value ? false : true;
      showPrev.value = prevUrl === null ? false : true;
      Object.assign(pokemons, dataResults);
      loading.value = false;
    };
    const getId = (url) => {
      const lastSlashindex = url.lastIndexOf("/");
      const secondLastSlashIndex = url.lastIndexOf("/", lastSlashindex - 1);
      const urlId = url.slice(secondLastSlashIndex + 1, lastSlashindex);
      return urlId;
    };
    const loadPage = (offset2) => {
      const localActivePage = localStorage.getItem("activePage");
      let offsetValue = offset2;
      loading.value = true;
      if (activePage.value === 0 && localActivePage) {
        setActivePage(parseInt(localActivePage));
        offsetValue = parseInt(localActivePage) * itemPerPage.value;
      }
      setTimeout(() => {
        getPokemon(offsetValue);
      }, 2e3);
    };
    const handlePrev = (pageNum) => {
      setActivePage(pageNum);
      loadPage(prevOffset.value);
    };
    const handleNext = (pageNum) => {
      setActivePage(pageNum);
      loadPage(nextOffset.value);
    };
    const handlePage = (pageOffset, pageNum) => {
      setActivePage(pageNum);
      loadPage(pageOffset);
    };
    const setActivePage = (pageNum) => {
      localStorage.setItem("activePage", pageNum.toString());
      activePage.value = pageNum;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PokemonCard = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$4, { text: "Pokemon List" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, { loading: unref(loading) }, null, _parent));
      _push(`<div style="${ssrRenderStyle(!unref(loading) ? null : { display: "none" })}"><div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5"><!--[-->`);
      ssrRenderList(unref(pokemons), (item, index) => {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_PokemonCard, { "pokemon-data": item }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        count: unref(count),
        "show-prev": unref(showPrev),
        "show-next": unref(showNext),
        "active-page": unref(activePage),
        itemPerPage: unref(itemPerPage),
        onPrev: handlePrev,
        onNext: handleNext,
        onPage: handlePage
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pokemons/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-6d280e23.js.map
