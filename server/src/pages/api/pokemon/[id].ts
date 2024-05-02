import type { APIRoute } from "astro";
import { deletePokemon } from "../../../services/pokemon";

export const POST: APIRoute = async (context) => { //eliminar un pokemon de la lista de pokemones
  const id = parseInt(context.params.id!, 10) //obtiene el id del pokemon a eliminar

  await deletePokemon(id) //elimina el pokemon de la lista de pokemones

  return context.redirect('/') //para ir a la pagina principal
}