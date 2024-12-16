import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { verifySessionToken } from '@/lib/session'

const publicPaths = ['/login']

export default async function middleware(request: NextRequest) {
  if (publicPaths.includes(request.nextUrl.pathname)) {
    return NextResponse.next()
  }
  const token = (await cookies()).get('session')?.value
  let payload: any = null
  if (token) {
    try {
      payload = await verifySessionToken(token)
    } catch (e) {
      return NextResponse.redirect(new URL('/login', request.nextUrl))
    }
  } else {
    return NextResponse.redirect(new URL('/login', request.nextUrl))
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'
  ]
}
