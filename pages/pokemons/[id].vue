<template>
  <div class="p-4">
    <Head>
      <Title>Vue-Nuxt Pokemon | {{ pokemonData.name }}</Title>
    </Head>
    <VnPageHeader
      text="Pokemon Information"
      :show-button="true"
      @back="handleBack"
    />
    <VnLoading :loading="loading" />
    <div v-show="!loading" class="group-card-col-3">
      <div class="card-2 animate-fade-left animate-ease-in-out">
        <div class="container-5">
          <img class="w-40 h-40" src="../../assets/pok-mon-go-logo-png-30.png">
        </div>
      </div>
      <div class="card-1 animate-fade-right animate-delay-[1000ms] animate-ease-in-out">
        <div class="container-1">
          <img class="w-80 h-80" :src="`${pokemonImg}${id}.png`">
          <div class="text-title-primary">
            {{ pokemonData.name }}
          </div>
          <p class="pr-1 m-4">
            <span
              v-for="(item, index) in pokemonTypes"
              :key="index"
            >
              <VnBadge :text="item.name"></VnBadge>
            </span>
          </p>
        </div>
        <div class="container-2 text-subtitle-default">
          <i>
            {{ pokemonSpecies.text }}
          </i>
          <i v-if="pokemonSpecies.formDescriptions">
            {{ pokemonSpecies.formDescriptions }}
          </i>
        </div>
      </div>
      <div class="card-1 animate-fade-right animate-delay-[2000ms] animate-ease-in-out">
        <div class="container-3 text-head-title-default">
          <p class="px-4">Details</p>
          <!-- <img class="w-20 h-20" :src="`${pokemonShinyImg}${id}.png`"> -->
        </div>
        <div class="container-4 text-subtitle-default">
          <p>
            <b>Evolve From Species:</b> {{ pokemonSpecies.evolvesFromSpecies }}
          </p>
          <p>
            <b>Habitat:</b> {{ pokemonSpecies.habitat }}
          </p>
          <p>
            <b>Shape:</b> {{ pokemonSpecies.shape }}
          </p>
          <p>
            <b>Abilities:</b>
            <span
              class="pr-1"
              v-for="(item, index) in pokemonData.abilities"
              :key="index"
            >
              {{ index > 0 ? ',' : '' }} {{ item.ability.name }}
            </span>
          </p>
          <p>
            <b>Color:</b> {{ pokemonSpecies.color }}
          </p>
          <p>
            <b>Weight:</b> {{ pokemonData.weight }}
          </p>
          <p>
            <b>Height:</b> {{ pokemonData.height }}
          </p>
          <p>
            <b>Egg Groups:</b>
            <span
              class="pr-1"
              v-for="(group, index) in pokemonSpecies.eggGroups"
              :key="index"
            >
              {{ index > 0 ? ',' : '' }} {{ group.name }}
            </span>
          </p>
          <p>
            <b>Generation:</b> {{ pokemonSpecies.generation  }}
          </p>
          <p>
            <b>Growth Rate:</b> {{ pokemonSpecies.growthRate  }}
          </p>
          <p>
            <b>Base Experience:</b> {{ pokemonData.base_experience  }}
          </p>
          <p>
            <b>Base Happiness:</b> {{ pokemonSpecies.baseHappiness }}
          </p>
          <p>
            <b>Capture Rate:</b> {{ pokemonSpecies.captureRate }}
          </p>
          <p>
            <b>Gender Rate:</b> {{ pokemonSpecies.genderRate }}
          </p>
          <p>
            <b>Hatch Counter:</b> {{ pokemonSpecies.hatchCounter }}
          </p>
          <p>
            <b>Is Baby?</b> {{ pokemonSpecies.isBaby ? 'Yes' : 'No' }}
          </p>
          <p>
            <b>Is Legendary?</b> {{ pokemonSpecies.isLegendary ? 'Yes' : 'No' }}
          </p>
          <p>
            <b>Is Mythical?</b> {{ pokemonSpecies.isMythical ? 'Yes' : 'No' }}
          </p>
          <p>
            <b>Has Gender Differences:</b> {{ pokemonSpecies.hasGenderDifferences ? 'Yes' : 'No' }}
          </p>
          <p>
            <b>Form Switchable:</b> {{ pokemonSpecies.formSwitchable ? 'Yes' : 'No' }}
          </p>
        </div>
      </div>
    </div>
    <div v-show="!loading" class="group-card-col-2">
      <div class="card-3 animate-flip-down animate-delay-[1000ms] animate-ease-in-out">
        <div class="container-3 text-head-title-default">
          <p class="px-4">Type</p>
        </div>
        <div class="container-4 text-subtitle-default">
          <p
            class="pr-1 m-4"
            v-for="(item, index) in pokemonTypes"
            :key="index"
          >
            <b class="text-xl pb-2">{{ item.name }} Type</b>
            <p>
              <b>Double Damage From:</b>
              <span
                class="pr-1"
                v-for="(value, index) in item.damage_relations.double_damage_from"
                :key="index"
              >
                {{ index > 0 ? ',' : '' }} {{ value.name }}
              </span>
            </p>
            <p>
              <b>Double Damage To:</b>
              <span
                class="pr-1"
                v-for="(value, index) in item.damage_relations.double_damage_to"
                :key="index"
              >
                {{ index > 0 ? ',' : '' }} {{ value.name }}
              </span>
            </p>
            <p>
              <b>Half Damage From:</b>
              <span
                class="pr-1"
                v-for="(value, index) in item.damage_relations.half_damage_from"
                :key="index"
              >
                {{ index > 0 ? ',' : '' }} {{ value.name }}
              </span>
            </p>
            <p>
              <b>Half Damage To:</b>
              <span
                class="pr-1"
                v-for="(value, index) in item.damage_relations.half_damage_to"
                :key="index"
              >
                {{ index > 0 ? ',' : '' }} {{ value.name }}
              </span>
            </p>
            <p>
              <b>No Damage From:</b>
              <span v-if="item.damage_relations.no_damage_from.length > 0">
                <span
                  class="pr-1"
                  v-for="(value, index) in item.damage_relations.no_damage_from"
                  :key="index"
                >
                  {{ index > 0 ? ',' : '' }} {{ value.name }}
                </span>
              </span>
              <span v-else class="pl-2">-</span>
            </p>
            <p>
              <b>No Damage To:</b>
              <span v-if="item.damage_relations.no_damage_to.length > 0">
                <span
                  class="pr-1"
                  v-for="(value, index) in item.damage_relations.no_damage_to"
                  :key="index"
                >
                  {{ index > 0 ? ',' : '' }} {{ value.name }}
                </span>
              </span>
              <span v-else class="pl-2">-</span>
            </p>
          </p>
        </div>
      </div>
      <div class="card-3 animate-flip-down animate-delay-[2000ms] animate-ease-in-out">
        <div class="container-3 text-head-title-default">
          <p class="px-4">Moves</p>
        </div>
        <div class="container-4 text-subtitle-default">
          <p
            class="pr-1 m-4"
            v-for="(item, index) in pokemonTypes"
            :key="index"
          >
            <b class="text-xl pb-2">{{ item.name }} Type Moves</b>
            <div class="grid grid-cols-2">
              <p
                v-for="(value, index) in item.moves"
                :key="index"
              >
                {{ value.name }}
              </p>
            </div>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VnLoading from '~/components/elements/VnLoading.vue';
import VnPageHeader from '~/components/elements/VnPageHeader.vue'
import VnBadge from '~/components/elements/VnBadge.vue'

const { id } = useRoute().params
const router = useRouter()
let loading = ref<boolean>(true)
let pokemonData = reactive<any>({})
let pokemonSpecies = reactive<any>({
  text: '',
  color: '',
  evolvesFromSpecies: '',
  eggGroups: [],
  baseHappiness: '',
  captureRate: '',
  formDescriptions: '',
  formSwitchable: false,
  genderRate: '',
  generation: '',
  growthRate: '',
  habitat: '',
  hasGenderDifferences: false,
  hatchCounter: '',
  isBaby: false,
  isLegendary: false,
  isMythical: false,
  shape: ''
})
let pokemonTypes = reactive<any>([])
let pokemonShinyImg = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/'
let pokemonImg = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'

onBeforeMount(() => {
  getPokemonSpecies()
})

onMounted(() => {
  loading.value = true
  setTimeout(() => {
    getPokemonData()
  }, 2000)
})

const getPokemonData = async () => {

  const { data, refresh } : any = await useFetch(`/api/pokemon?id=${id}`, { query: { type: 'pokemon' } })
  if (data.value === null) {
    await refresh()
  }
  Object.assign(pokemonData, data.value)
  Object.assign(pokemonTypes, [])
  pokemonData.types.map((item : any) => {
    getPokemonTypes(item.type.url)
  })
  loading.value = false
}

const getPokemonSpecies = async () => {
  const species = {
    text: '',
    color: '-',
    evolvesFromSpecies: '-',
    eggGroups: [],
    baseHappiness: '-',
    captureRate: '-',
    formDescriptions: '',
    formSwitchable: false,
    genderRate: '-',
    generation: '-',
    growthRate: '-',
    habitat: '-',
    hasGenderDifferences: false,
    hatchCounter: '-',
    isBaby: false,
    isLegendary: false,
    isMythical: false,
    shape: '-'
  }
  const { data, refresh } : any = await useFetch(`/api/pokemon?id=${id}`, { query: { type: 'species' } })
  if (data.value === null) {
    await refresh()
  }
  if (data.value) {
    species.text = data.value.flavor_text_entries ? (`${data.value.flavor_text_entries[1].flavor_text} ${data.value.flavor_text_entries[6].flavor_text}`).replace(/[\n\f]/g, ' ') : ''
    species.formDescriptions = data.value.form_descriptions.length > 0 ? data.value.form_descriptions[0].description : ''
    species.color = data.value.color ? data.value.color.name : ''
    species.evolvesFromSpecies = data.value.evolves_from_species ? data.value.evolves_from_species.name : '-'
    species.eggGroups = data.value.egg_groups.length > 0 ? data.value.egg_groups : []
    species.baseHappiness = data.value.base_happiness || '-'
    species.captureRate = data.value.capture_rate || '-'
    species.formSwitchable = data.value.form_switchable || false
    species.genderRate = data.value.gender_rate || '-'
    species.generation = data.value.generation ? data.value.generation.name : '-',
    species.growthRate = data.value.growth_rate ? data.value.growth_rate.name : '-'
    species.habitat = data.value.habitat ? data.value.habitat.name : '-'
    species.hasGenderDifferences = data.value.has_gender_differences || false
    species.hatchCounter= data.value.hatch_counter || '-'
    species.isBaby= data.value.is_baby || false
    species.isLegendary = data.value.is_legendary || false
    species.isMythical = data.value.is_mythical || false
    species.shape = data.value.shape ? data.value.shape.name : '-'
  }
  Object.assign(pokemonSpecies, species)
}

const getPokemonTypes = async (url : any) => {
  const lastSlashindex = url.lastIndexOf('/')
  const secondLastSlashIndex = url.lastIndexOf('/', lastSlashindex - 1)
  const urlId = url.slice(secondLastSlashIndex + 1, lastSlashindex)

  const { data, refresh } : any = await useFetch(`/api/pokemon?id=${urlId}`, { query: { type: 'types' } })
  if (data.value === null) {
    await refresh()
  }
  pokemonTypes.push(data.value)
}

const handleBack = () => {
  router.back()
}
</script>