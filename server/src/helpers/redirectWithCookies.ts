export type CookieData = {
  name: string
  value: string
  maxAge: number
}
export function redirectWithCookies(location: string, cookies: CookieData[]) { //para redirigir a una pagina con cookies asignadas al usuario
  const headers = new Headers()
  headers.append('Location', location) //se le pone un header de location con la url a la que se redirige

  for (const cookie of cookies) { //se le asigna una cookie al usuario con el nombre, valor y tiempo de vida 
    headers.append('Set-Cookie', `${cookie.name}=${cookie.value}; HttpOnly; SameSite=Strict; Path=/; Max-Age=${cookie.maxAge}`)
  } 
  //el httpOnlly es para que no se pueda leer desde el javascript del cliente, el SameSite=Strict es para que no se pueda acceder a la cookie desde otro sitio y 
  //el Path=/ es para que la cookie sea accesible desde cualquier ruta a partir de / y el Max-Age es el tiempo de vida de la cookie que a esta se le dio 1 dia

  return new Response(null, {
    status: 302,
    headers: headers
  })
}