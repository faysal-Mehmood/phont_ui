import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define the protected routes
const protectedRoutes = ['/basics'];

export function middleware(req: NextRequest) {
  // Get the current URL path
  const { pathname } = req.nextUrl;

  // Check if the user is authenticated (e.g., by checking a cookie or token)
  const isAuthenticated = localStorage.getItem('auth_token'); // Adjust this line based on your authentication logic

  // If the user is not authenticated and is trying to access a protected route, redirect to the login page
  if (protectedRoutes.includes(pathname) && !isAuthenticated) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // Allow the request to proceed
  return NextResponse.next();
}

export const config = {
  matcher: ['/basics',],
};
