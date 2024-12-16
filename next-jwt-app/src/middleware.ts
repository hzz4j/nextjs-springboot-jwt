import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { verifySessionToken } from '@/lib/session'

export default async function middleware(request: NextRequest) {
  const token = (await cookies()).get('session')?.value
  let payload: any = null
  if (token) {
    payload = await verifySessionToken(token)
  }

  return NextResponse.next()
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
