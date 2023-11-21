import { defineComponent, ref, mergeProps, unref, useSSRContext, reactive, withCtx, createTextVNode, toDisplayString, createVNode } from "vue";
import { u as useHead } from "./index-6a088328.js";
import "hookable";
import { u as useRoute, a as useRouter } from "../server.mjs";
import "destr";
import "devalue";
import "defu";
import "klona";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { _ as _imports_0 } from "./pok-mon-go-logo-png-30-bcee7037.js";
import { _ as _sfc_main$2, a as _sfc_main$3 } from "./VnPageHeader-cb535641.js";
import "@unhead/shared";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "unhead";
import "vue-router";
import "h3";
import "ufo";
const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  useHead(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => {
    var _a, _b;
    return renderChild ? (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a) : null;
  };
};
const Title = /* @__PURE__ */ defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Title",
  inheritAttrs: false,
  setup: setupForUseMeta((_, { slots }) => {
    var _a, _b, _c;
    return {
      title: ((_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children) || null
    };
  })
});
const Head = /* @__PURE__ */ defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => () => {
    var _a, _b;
    return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "VnBadge",
  __ssrInlineRender: true,
  props: {
    text: {
      type: String,
      default: "normal"
    }
  },
  setup(__props) {
    let badgeClass = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({ class: unref(badgeClass) }, _attrs))}>${ssrInterpolate(__props.text.toUpperCase())}</span>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/VnBadge.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const { id } = useRoute().params;
    const router = useRouter();
    let loading = ref(true);
    let pokemonData = reactive({});
    let pokemonSpecies = reactive({
      text: "",
      color: "",
      evolvesFromSpecies: "",
      eggGroups: [],
      baseHappiness: "",
      captureRate: "",
      formDescriptions: "",
      formSwitchable: false,
      genderRate: "",
      generation: "",
      growthRate: "",
      habitat: "",
      hasGenderDifferences: false,
      hatchCounter: "",
      isBaby: false,
      isLegendary: false,
      isMythical: false,
      shape: ""
    });
    let pokemonTypes = reactive([]);
    let pokemonImg = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
    const handleBack = () => {
      router.back();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      const _component_Title = Title;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Title, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Vue-Nuxt Pokemon | ${ssrInterpolate(unref(pokemonData).name)}`);
                } else {
                  return [
                    createTextVNode("Vue-Nuxt Pokemon | " + toDisplayString(unref(pokemonData).name), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => [
                  createTextVNode("Vue-Nuxt Pokemon | " + toDisplayString(unref(pokemonData).name), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        text: "Pokemon Information",
        "show-button": true,
        onBack: handleBack
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, { loading: unref(loading) }, null, _parent));
      _push(`<div style="${ssrRenderStyle(!unref(loading) ? null : { display: "none" })}" class="group-card-col-3"><div class="card-2 animate-fade-left animate-ease-in-out"><div class="container-5"><img class="w-40 h-40"${ssrRenderAttr("src", _imports_0)}></div></div><div class="card-1 animate-fade-right animate-delay-[1000ms] animate-ease-in-out"><div class="container-1"><img class="w-80 h-80"${ssrRenderAttr("src", `${unref(pokemonImg)}${unref(id)}.png`)}><div class="text-title-primary">${ssrInterpolate(unref(pokemonData).name)}</div><p class="pr-1 m-4"><!--[-->`);
      ssrRenderList(unref(pokemonTypes), (item, index) => {
        _push(`<span>`);
        _push(ssrRenderComponent(_sfc_main$1, {
          text: item.name
        }, null, _parent));
        _push(`</span>`);
      });
      _push(`<!--]--></p></div><div class="container-2 text-subtitle-default"><i>${ssrInterpolate(unref(pokemonSpecies).text)}</i>`);
      if (unref(pokemonSpecies).formDescriptions) {
        _push(`<i>${ssrInterpolate(unref(pokemonSpecies).formDescriptions)}</i>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="card-1 animate-fade-right animate-delay-[2000ms] animate-ease-in-out"><div class="container-3 text-head-title-default"><p class="px-4">Details</p></div><div class="container-4 text-subtitle-default"><p><b>Evolve From Species:</b> ${ssrInterpolate(unref(pokemonSpecies).evolvesFromSpecies)}</p><p><b>Habitat:</b> ${ssrInterpolate(unref(pokemonSpecies).habitat)}</p><p><b>Shape:</b> ${ssrInterpolate(unref(pokemonSpecies).shape)}</p><p><b>Abilities:</b><!--[-->`);
      ssrRenderList(unref(pokemonData).abilities, (item, index) => {
        _push(`<span class="pr-1">${ssrInterpolate(index > 0 ? "," : "")} ${ssrInterpolate(item.ability.name)}</span>`);
      });
      _push(`<!--]--></p><p><b>Color:</b> ${ssrInterpolate(unref(pokemonSpecies).color)}</p><p><b>Weight:</b> ${ssrInterpolate(unref(pokemonData).weight)}</p><p><b>Height:</b> ${ssrInterpolate(unref(pokemonData).height)}</p><p><b>Egg Groups:</b><!--[-->`);
      ssrRenderList(unref(pokemonSpecies).eggGroups, (group, index) => {
        _push(`<span class="pr-1">${ssrInterpolate(index > 0 ? "," : "")} ${ssrInterpolate(group.name)}</span>`);
      });
      _push(`<!--]--></p><p><b>Generation:</b> ${ssrInterpolate(unref(pokemonSpecies).generation)}</p><p><b>Growth Rate:</b> ${ssrInterpolate(unref(pokemonSpecies).growthRate)}</p><p><b>Base Experience:</b> ${ssrInterpolate(unref(pokemonData).base_experience)}</p><p><b>Base Happiness:</b> ${ssrInterpolate(unref(pokemonSpecies).baseHappiness)}</p><p><b>Capture Rate:</b> ${ssrInterpolate(unref(pokemonSpecies).captureRate)}</p><p><b>Gender Rate:</b> ${ssrInterpolate(unref(pokemonSpecies).genderRate)}</p><p><b>Hatch Counter:</b> ${ssrInterpolate(unref(pokemonSpecies).hatchCounter)}</p><p><b>Is Baby?</b> ${ssrInterpolate(unref(pokemonSpecies).isBaby ? "Yes" : "No")}</p><p><b>Is Legendary?</b> ${ssrInterpolate(unref(pokemonSpecies).isLegendary ? "Yes" : "No")}</p><p><b>Is Mythical?</b> ${ssrInterpolate(unref(pokemonSpecies).isMythical ? "Yes" : "No")}</p><p><b>Has Gender Differences:</b> ${ssrInterpolate(unref(pokemonSpecies).hasGenderDifferences ? "Yes" : "No")}</p><p><b>Form Switchable:</b> ${ssrInterpolate(unref(pokemonSpecies).formSwitchable ? "Yes" : "No")}</p></div></div></div><div style="${ssrRenderStyle(!unref(loading) ? null : { display: "none" })}" class="group-card-col-2"><div class="card-3 animate-flip-down animate-delay-[1000ms] animate-ease-in-out"><div class="container-3 text-head-title-default"><p class="px-4">Type</p></div><div class="container-4 text-subtitle-default"><!--[-->`);
      ssrRenderList(unref(pokemonTypes), (item, index) => {
        _push(`<p class="pr-1 m-4"><b class="text-xl pb-2">${ssrInterpolate(item.name)} Type</b><p><b>Double Damage From:</b><!--[-->`);
        ssrRenderList(item.damage_relations.double_damage_from, (value, index2) => {
          _push(`<span class="pr-1">${ssrInterpolate(index2 > 0 ? "," : "")} ${ssrInterpolate(value.name)}</span>`);
        });
        _push(`<!--]--></p><p><b>Double Damage To:</b><!--[-->`);
        ssrRenderList(item.damage_relations.double_damage_to, (value, index2) => {
          _push(`<span class="pr-1">${ssrInterpolate(index2 > 0 ? "," : "")} ${ssrInterpolate(value.name)}</span>`);
        });
        _push(`<!--]--></p><p><b>Half Damage From:</b><!--[-->`);
        ssrRenderList(item.damage_relations.half_damage_from, (value, index2) => {
          _push(`<span class="pr-1">${ssrInterpolate(index2 > 0 ? "," : "")} ${ssrInterpolate(value.name)}</span>`);
        });
        _push(`<!--]--></p><p><b>Half Damage To:</b><!--[-->`);
        ssrRenderList(item.damage_relations.half_damage_to, (value, index2) => {
          _push(`<span class="pr-1">${ssrInterpolate(index2 > 0 ? "," : "")} ${ssrInterpolate(value.name)}</span>`);
        });
        _push(`<!--]--></p><p><b>No Damage From:</b>`);
        if (item.damage_relations.no_damage_from.length > 0) {
          _push(`<span><!--[-->`);
          ssrRenderList(item.damage_relations.no_damage_from, (value, index2) => {
            _push(`<span class="pr-1">${ssrInterpolate(index2 > 0 ? "," : "")} ${ssrInterpolate(value.name)}</span>`);
          });
          _push(`<!--]--></span>`);
        } else {
          _push(`<span class="pl-2">-</span>`);
        }
        _push(`</p><p><b>No Damage To:</b>`);
        if (item.damage_relations.no_damage_to.length > 0) {
          _push(`<span><!--[-->`);
          ssrRenderList(item.damage_relations.no_damage_to, (value, index2) => {
            _push(`<span class="pr-1">${ssrInterpolate(index2 > 0 ? "," : "")} ${ssrInterpolate(value.name)}</span>`);
          });
          _push(`<!--]--></span>`);
        } else {
          _push(`<span class="pl-2">-</span>`);
        }
        _push(`</p></p>`);
      });
      _push(`<!--]--></div></div><div class="card-3 animate-flip-down animate-delay-[2000ms] animate-ease-in-out"><div class="container-3 text-head-title-default"><p class="px-4">Moves</p></div><div class="container-4 text-subtitle-default"><!--[-->`);
      ssrRenderList(unref(pokemonTypes), (item, index) => {
        _push(`<p class="pr-1 m-4"><b class="text-xl pb-2">${ssrInterpolate(item.name)} Type Moves</b><div class="grid grid-cols-2"><!--[-->`);
        ssrRenderList(item.moves, (value, index2) => {
          _push(`<p>${ssrInterpolate(value.name)}</p>`);
        });
        _push(`<!--]--></div></p>`);
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pokemons/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-24340e1f.js.map
