import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
	const authHeader = request.headers.get("Authorization")
	const response = NextResponse.next()
	return response
}

export const config = {
	matcher: [
		"/auth",
		"/profile",
		"/profile/:path",
	]
}