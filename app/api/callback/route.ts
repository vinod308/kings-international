import { NextRequest, NextResponse } from "next/server";

function renderPostMessagePage(message: string) {
  const html = `<!doctype html>
<html><body>
<script>
(function () {
  function receiveMessage(e) {
    window.opener.postMessage(
      ${JSON.stringify(message)},
      e.origin
    );
    window.removeEventListener("message", receiveMessage, false);
  }
  window.addEventListener("message", receiveMessage, false);
  window.opener.postMessage("authorizing:github", "*");
})();
</script>
</body></html>`;
  return new NextResponse(html, {
    headers: { "Content-Type": "text/html" },
  });
}

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const storedState = request.cookies.get("oauth_state")?.value;

  const clientId = process.env.OAUTH_CLIENT_ID;
  const clientSecret = process.env.OAUTH_CLIENT_SECRET;

  if (!code || !state || !storedState || state !== storedState) {
    return new NextResponse("Invalid OAuth state", { status: 400 });
  }

  if (!clientId || !clientSecret) {
    return new NextResponse("Missing OAuth environment variables", { status: 500 });
  }

  const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      code,
      redirect_uri: new URL("/api/callback", request.url).toString(),
    }),
  });

  const tokenData = await tokenResponse.json();

  if (tokenData.error || !tokenData.access_token) {
    return new NextResponse(`OAuth error: ${tokenData.error_description || tokenData.error}`, {
      status: 400,
    });
  }

  const message = `authorization:github:success:${JSON.stringify({
    token: tokenData.access_token,
    provider: "github",
  })}`;

  const response = renderPostMessagePage(message);
  response.cookies.delete("oauth_state");
  return response;
}
