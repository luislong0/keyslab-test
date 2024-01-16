/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const authToken = request.cookies.get('next-auth.session-token')?.value
  const secureAuthToken = request.cookies.get(
    '__Secure-next-auth.session-token',
  )?.value

  //   dev
  // if (authToken === undefined) {
  //   return NextResponse.redirect(new URL('/auth/login', request.url))
  // }

  //  prod
  if (secureAuthToken === undefined) {
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/', '/user/:path*'],
}
