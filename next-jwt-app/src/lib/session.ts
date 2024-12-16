'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { verifySessionToken } from './jwt'
export async function createSession(token: string) {
  const cookieStore = await cookies()
  cookieStore.set('session', token, {
    httpOnly: true,
    path: '/'
  })
}

export async function deleteSession() {
  const cookieStore = await cookies()
  cookieStore.delete('session')
  redirect('/login')
}

export async function getCurrentUser() {
  const cookieStore = await cookies()
  const token = cookieStore.get('session')?.value
  if (token) {
    const payload = await verifySessionToken(token)
    return payload.usename as string
  }
  return ''
}
