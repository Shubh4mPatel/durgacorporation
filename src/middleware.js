// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  // Redirect root to home page
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/home', request.url));
  }
}

export const config = {
  matcher: '/'
};