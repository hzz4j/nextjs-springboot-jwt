import 'server-only'
import { SignJWT, jwtVerify } from 'jose'
export const slogan = process.env.SLOGAN

// 编码为 UTF-8 格式的字节数据，适合网络传输或存储
const encodedKey = new TextEncoder().encode(process.env.JWT_SECRET)

/**
 * JWT的编码在服务端springboot做
 * @param msg
 * @returns
 */
export async function createSessionToken(msg: string) {
  return new SignJWT({ msg }).setProtectedHeader({ alg: 'HS256' }).sign(encodedKey)
}

/**
 * 准备在middleware中验证服务端生成的token
 * @param token
 * @returns
 */
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
