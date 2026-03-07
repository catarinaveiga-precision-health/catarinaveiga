const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { query, params } = await req.json();

    const projectId = Deno.env.get("SANITY_PROJECT_ID");
    const token = Deno.env.get("SANITY_TOKEN");

    if (!projectId || !token) {
      return new Response(JSON.stringify({ error: "Sanity credentials not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const encodedQuery = encodeURIComponent(query);
    let url = `https://${projectId}.api.sanity.io/v2024-01-01/data/query/production?query=${encodedQuery}`;

    if (params) {
      for (const [key, value] of Object.entries(params)) {
        url += `&$${key}="${encodeURIComponent(String(value))}"`;
      }
    }

    const sanityRes = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const data = await sanityRes.json();

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
