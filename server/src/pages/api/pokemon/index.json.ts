import type { APIRoute } from "astro"
import { addPokemon, getPokemonList } from "../../../services/pokemon"

export const GET: APIRoute = async (context) => { //para obtener la lista de pokemones
  const page = parseInt(context.url.searchParams.get('page') ?? '1', 10) //obtiene el numero de pagina para mostrar la lista de pokemones y si no se le pasa un numero de pagina, mostrara la primera pagina

  return new Response(JSON.stringify(await getPokemonList(page)), { //trae la lista de pokemones
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }
  })
}

export const POST: APIRoute = async (context) => { //para agregar un pokemon a la lista de pokemones
  const pokemon = await context.request.json() //trae el pokemon a agregar

  await addPokemon(pokemon)

  return new Response(JSON.stringify(pokemon), { //trae el pokemon agregado
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }
  })
}