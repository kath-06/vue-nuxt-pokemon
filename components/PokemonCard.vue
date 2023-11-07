<template>
  <div class="flip-card card-primary">
    <div class="flip-card-inner preserve-3d">
      <div class="flip-card-front">
        <img
          class="w-3/4 h-1/2"
          v-show="pokemon.id !== '1013'"
          :src="`${imgUrl}${pokemon.id}.png`"
        />
        <p class="text-title-default">
          {{ pokemon.name }}
        </p>
      </div>
      <div class="flip-card-back">
        <div class="text-title-primary">
          {{ pokemon.name }}
        </div>
        <div class="p-2">
          <img
            v-if="parseInt(pokemon.id) < 650"
            :src="`${gifUrl}${pokemon.id}.gif`"
          />
          <img
            v-else
            :src="`${backImgUrl}${pokemon.id}.png`"
          />
        </div>
        <NuxtLink :to="`/pokemons/${pokemon.id}`" >
          <VnButton>View</VnButton>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VnButton from './elements/VnButton.vue';

const props = defineProps({
  pokemonData: {
    type: Object,
    default: () => {}
  }
})

let pokemon = reactive<any>({})
let imgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'
let backImgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
let gifUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/'

onBeforeMount(() => {
  Object.assign(pokemon, {})
  Object.assign(pokemon, props.pokemonData)
})

watch(() => toRefs(props.pokemonData), () => {
  Object.assign(pokemon, {})
  Object.assign(pokemon, props.pokemonData)
})

</script>

<style lang="scss">
  .preserve-3d {
    transform-style: preserve-3d;
  }

  .flip-card:hover {
    .flip-card-inner {
      transform: rotateY(180deg);
    }
  }

  .flip-card-front, .flip-card-back {
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
  }

   /* Style the back side */
   .flip-card-back {
    transform: rotateY(180deg);
  }

</style>