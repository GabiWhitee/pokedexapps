import type { APIRoute } from "astro"
import { authenticateUser } from "../../services/users"
import { redirectWithCookies } from "../../helpers/redirectWithCookies"
import { signJWT } from "../../helpers/jwt"

export const POST: APIRoute = async (context) => { //para autenticar un usuario
  const data = await context.request.formData() 

  const email = data.get('email') as string
  const password = data.get('password') as string

  try { 
    const user = await authenticateUser({ email, password }) 
    const jwt = signJWT(user)
    return redirectWithCookies('/admin', [{ name: 'user', value: jwt, maxAge: 60 * 60 * 24 }]) //redirige al usuario a la pagina de admin y le asigna una cookie con el jwt
  } catch (error) {
    return context.redirect('/login?error=true')
  }

}