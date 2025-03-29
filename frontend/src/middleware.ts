import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { cookies } from 'next/headers';

export async function middleware(request: NextRequest) {
	const cookieStore = await cookies()
	console.log(cookieStore.get("fashionTokenRefresh"))
	const response = NextResponse.next()
	return response
}

export const config = {
	matcher: [
		"/",
		"/auth",
		"/profile",
		"/profile/:path",
	]
}