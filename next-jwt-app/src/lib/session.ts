import 'server-only'
import { SignJWT, jwtVerify } from 'jose'
export const slogan = process.env.SLOGAN

const encodedKey = new TextEncoder().encode(process.env.JWT_SECRET)
export async function createSessionToken(msg: string) {
  return new SignJWT({ msg }).setProtectedHeader({ alg: 'HS256' }).sign(encodedKey)
}

export async function verifySessionToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, encodedKey, {
      algorithms: ['HS256']
    })
    return payload
  } catch (error) {
    console.log('Failed to verify session')
  }
}
