import type { APIRoute } from "astro";
import { deletePokemon } from "../../../services/pokemon";

export const DELETE: APIRoute = async (context) => { //funcion para eliminar un pokemon de la lista de pokemones
  const id = parseInt(context.params.id ?? '0', 10) //obtiene el id del pokemon a eliminar
  const pokemon = await deletePokemon(id) //elimina el pokemon de la lista de pokemones
  return new Response(JSON.stringify(pokemon), { //devuelve el pokemon eliminado
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }
  })
}