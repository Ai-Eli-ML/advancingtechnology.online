import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// MAINTENANCE MODE - Set to 'true' to enable maintenance mode
const MAINTENANCE_MODE = process.env.MAINTENANCE_MODE === 'true'

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname

  // MAINTENANCE MODE CHECK - Redirect all traffic to maintenance page
  if (MAINTENANCE_MODE) {
    // Allow access to maintenance page, static assets, and API routes
    const isMaintenancePage = pathname === '/maintenance'
    const isStaticAsset = pathname.startsWith('/_next') ||
                          pathname.startsWith('/favicon') ||
                          pathname.includes('.')
    const isApiRoute = pathname.startsWith('/api')

    if (!isMaintenancePage && !isStaticAsset && !isApiRoute) {
      return NextResponse.redirect(new URL('/maintenance', req.url))
    }
  }

  return NextResponse.next()
}

// Configure which routes the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
}
