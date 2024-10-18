import { NextRequest, NextResponse } from "next/server";
import authenticated from "@/app/(auth)/authenticated";
import { unauthenticatedRoutes, routes } from "@/app/routes";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isAuthenticated = authenticated();

  const isUnauthenticatedRoute = unauthenticatedRoutes.some((route) =>
    pathname.startsWith(route.path)
  );

  const isAuthenticatedRoute = routes.some((route) =>
    pathname.startsWith(route.path)
  );

  if (isAuthenticatedRoute && !isAuthenticated) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  if (isUnauthenticatedRoute || isAuthenticated) {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
