import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect all /admin routes except /admin/login
  if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
    const token = request.cookies.get('eco_admin_token')?.value;
    const validToken = process.env.ADMIN_SECRET_TOKEN;

    if (!token || token !== validToken) {
      const loginUrl = new URL('/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  // If already logged in and visiting /admin/login, redirect to dashboard
  if (pathname === '/admin/login') {
    const token = request.cookies.get('eco_admin_token')?.value;
    const validToken = process.env.ADMIN_SECRET_TOKEN;
    if (token && token === validToken) {
      return NextResponse.redirect(new URL('/admin', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
