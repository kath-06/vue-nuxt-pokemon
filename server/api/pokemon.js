const { apiUrl } = useRuntimeConfig()

export default defineEventHandler((event) => {
  const { type } = getQuery(event)
  let data = []

  if (type === 'getList') {
    data = getPokemonList(event)
  } else if (type === 'species') {
    data = getSpecies(event)
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