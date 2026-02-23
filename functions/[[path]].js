export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);

  // DEBUG: Deep Probe Health Check
  if (url.pathname === "/debug/health") {
    const prefix = "";
    let r2Status = "UNKNOWN";
    let errorDetails = "";
    let listedKeys = [];

    try {
      if (!env.MOOTMOAT_ASSETS) {
        return new Response("CRITICAL: env.MOOTMOAT_ASSETS is UNDEFINED. Check pages binding.", {
          status: 500,
        });
      }

      const listResult = await env.MOOTMOAT_ASSETS.list({ prefix: prefix, limit: 10 });
      listedKeys = listResult.objects.map((o) => o.key);

      if (listedKeys.length > 0) {
        r2Status = `FOUND ${listedKeys.length} items. First: '${listedKeys[0]}'`;
      } else {
        r2Status = "EMPTY LIST (Bucket appears empty to Worker)";
      }
    } catch (e) {
      r2Status = "ERROR";
      errorDetails = e.message;
    }

    const report = `
STATUS: RUNNING (Functions Mode)
BINDING: env.MOOTMOAT_ASSETS is ${env.MOOTMOAT_ASSETS ? "DEFINED" : "MISSING"}
RESULT: ${r2Status}
KEYS FOUND:
${listedKeys.join("\n")}
ERROR: ${errorDetails}
        `.trim();

    return new Response(report, { status: 200 });
  }

  // R2 Proxy Logic for /assets/*
  if (url.pathname.startsWith("/assets/")) {
    let key = url.pathname.replace("/assets/", "");

    // Handle legacy /assets/r2/ structure just in case
    if (url.pathname.startsWith("/assets/r2/")) {
      key = url.pathname.replace("/assets/r2/", "");
    }

    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    try {
      const object = await env.MOOTMOAT_ASSETS.get(key);

      if (!object) {
        return context.next();
      }

      const headers = new Headers();
      object.writeHttpMetadata(headers);
      headers.set("etag", object.httpEtag);
      headers.set("Cache-Control", "no-cache");
      headers.set("X-Debug-Key", key);

      return new Response(object.body, {
        headers,
      });
    } catch (e) {
      return new Response("Error fetching asset", { status: 500 });
    }
  }

  return context.next();
}
