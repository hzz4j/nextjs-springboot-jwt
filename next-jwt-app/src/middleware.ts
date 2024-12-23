import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { verifySessionToken } from '@/lib/jwt'

// 放行的路由，白名单
const publicPaths = ['/login', '/introduce']

export default async function middleware(request: NextRequest) {
  const isPublicPath = publicPaths.includes(request.nextUrl.pathname)
  const token = (await cookies()).get('session')?.value
  if (isPublicPath) {
    // 公共页面
    return NextResponse.next()
  }

  if (token) {
    // 处理登录过的用户
    try {
      await verifySessionToken(token)

      if (request.nextUrl.pathname === '/login') {
        // 如果用户已经登录，再次访问登录页面，直接调到首页
        return NextResponse.redirect(new URL('/', request.nextUrl))
      }

      return NextResponse.next()
    } catch (e) {
      return NextResponse.redirect(new URL('/login', request.nextUrl))
    }
  } else {
    // 处理未登录的用户
    if (isPublicPath) {
      // 公共页面
      return NextResponse.next()
    } else {
      // 访问受保护的页面，让用户去登录
      return NextResponse.redirect(new URL('/login', request.nextUrl))
    }
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
