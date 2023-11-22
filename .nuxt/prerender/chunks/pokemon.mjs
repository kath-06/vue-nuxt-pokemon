import { defineEventHandler, getQuery } from 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/h3/dist/index.mjs';
import { u as useRuntimeConfig } from './nitro/nitro-prerenderer.mjs';
import 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/unstorage/drivers/fs.mjs';
import 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/unstorage/drivers/memory.mjs';
import 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/pathe/dist/index.mjs';

const { apiUrl } = useRuntimeConfig();
const pokemon = defineEventHandler((event) => {
  const { type } = getQuery(event);
  let data = [];
  if (type === "getList") {
    data = getPokemonList(event);
  } else if (type === "species") {
    data = getSpecies(event);
  } else if (type === "pokemon") {
    data = getPokemon(event);
  } else if (type === "types") {
    data = getTypes(event);
  }
  return data;
});
const getPokemonList = async (event) => {
  const { limit, offset } = getQuery(event);
  const data = await $fetch(`${apiUrl}/pokemon?offset=${offset}&limit=${limit}`);
  return data;
};
const getSpecies = async (event) => {
  const { id } = getQuery(event);
  const data = await $fetch(`${apiUrl}/pokemon-species/${id}`);
  return data;
};
const getPokemon = async (event) => {
  const { id } = getQuery(event);
  const data = await $fetch(`${apiUrl}/pokemon/${id}`);
  return data;
};
const getTypes = async (event) => {
  const { id } = getQuery(event);
  const data = await $fetch(`${apiUrl}/type/${id}`);
  return data;
};

export { pokemon as default };
//# sourceMappingURL=pokemon.mjs.map
