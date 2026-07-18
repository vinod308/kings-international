import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function GET(request: NextRequest) {
  const clientId = process.env.OAUTH_CLIENT_ID;

  if (!clientId) {
    return new NextResponse("Missing OAUTH_CLIENT_ID environment variable", { status: 500 });
  }

  const state = crypto.randomBytes(16).toString("hex");
  const redirectUri = new URL("/api/callback", request.url).toString();

  const authorizeUrl = new URL("https://github.com/login/oauth/authorize");
  authorizeUrl.searchParams.set("client_id", clientId);
  authorizeUrl.searchParams.set("redirect_uri", redirectUri);
  authorizeUrl.searchParams.set("scope", "repo,user");
  authorizeUrl.searchParams.set("state", state);

  const response = NextResponse.redirect(authorizeUrl.toString());
  response.cookies.set("oauth_state", state, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 600,
    path: "/",
  });
  return response;
}
