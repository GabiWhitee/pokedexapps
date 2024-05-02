import jwt from "jsonwebtoken"

const secret = 'mysecret'

export const signJWT = (payload: any) => { //para firmar un token jwt con un payload y un secreto 
  return jwt.sign(payload, secret) 
}

export const verifyJWT = (token: string) => { //para verificar un token
  return jwt.verify(token, secret)
}