const { apiUrl } = useRuntimeConfig()

export default defineEventHandler((event) => {
  const { type } = getQuery(event)
  let data = []

  if (type === 'getList') {
    data = getPokemonList(event)
  } else if (type === 'species') {
    data = getSpecies(event)
  } else if (type === 'pokemon') {
    data = getPokemon(event)
  } else if (type === 'types') {
    data = getTypes(event)
  }

  return data
})

const getPokemonList = async (event) => {
  const { limit, offset } = getQuery(event)
  const data = await $fetch(`${apiUrl}/pokemon?offset=${offset}&limit=${limit}`)

  return data
}
const getSpecies = async (event) => {
  const { id } = getQuery(event)
  const data = await $fetch(`${apiUrl}/pokemon-species/${id}`)

  return data
}

const getPokemon = async (event) => {
  const { id } = getQuery(event)
  const data = await $fetch(`${apiUrl}/pokemon/${id}`)

  return data
}

const getTypes = async (event) => {
  const { id } = getQuery(event)
  const data = await $fetch(`${apiUrl}/type/${id}`)

  return data
}
