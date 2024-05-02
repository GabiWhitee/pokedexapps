export type Pokemon = { //tipo de objeto con id y nombre
  id: number
  name: string
}
const pokemonList: Pokemon[] = [ //lista de pokemones con id y nombre
  { id: 1, name: 'Bulbasaur' },
  { id: 2, name: 'Ivysaur' },
  { id: 3, name: 'Venusaur' },
  { id: 4, name: 'Charmander' },
  { id: 5, name: 'Charmeleon' },
  { id: 6, name: 'Charizard' },
  { id: 7, name: 'Squirtle' },
  { id: 8, name: 'Wartortle' },
  { id: 9, name: 'Blastoise' },
]

export const findPokemonById = async (id: number) => { //funcion para buscar pokemon por id y devuelva el pokemon que tenga el id que se le pase
  return pokemonList.find(p => p.id === id)
}

export const findPokemonByName = async (name: string) => { //funcion para buscar pokemon por nombre y devuelva el pokemon que tenga el nombre que se le pase
  return pokemonList.find(p => p.name === name)
}

export const getPokemonList = async (page?: number): Promise<{ list: Pokemon[], count: number}> => { //funcion para obtener la lista de pokemones y la cantidad de pokemones
  if (!page) { return { list: pokemonList, count: pokemonList.length } } //si no se le pasa un numero de pagina, devolvera la lista completa de pokemones y la cantidad de pokemones
  return { list: pokemonList.slice((page - 1) * 5, page * 5), count: pokemonList.length } //si se le pasa un numero de pagina, devolvera la lista de pokemones de 5 en 5 y la cantidad de pokemones
}

export const addPokemon = async (pokemon: Pokemon) => { //funcion para agregar un pokemon a la lista de pokemones
  if (pokemonList.some((p) => p.id === pokemon.id)) {
    throw new Error('Pokemon already exists') //si el pokemon ya existe, devolvera un error
  }
  pokemonList.push(pokemon) //si el pokemon no existe, se agregara a la lista de pokemones
  return pokemon //devolvera el pokemon que se agrego
}

export const deletePokemon = async (pokemonId: number) => { //funcion para eliminar un pokemon de la lista de pokemones
  const index = pokemonList.findIndex((pokemon) => pokemon.id === pokemonId) //busca el pokemon por id
  if (index === -1) { 
    throw new Error('Pokemon not found') //si el pokemon no existe, devolvera un error
  }
  return pokemonList.splice(index, 1)[0] //si el pokemon existe, se eliminara de la lista de pokemones y se devolvera el pokemon eliminado
}