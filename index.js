// api route, better auth catch-all for user interactions
// everything is handled internally by it

import { Hono } from "hono";
import { handle } from "hono/vercel";
import { auth } from "./lib/auth.js";
import { authMiddleware } from "./lib/middleware.js";

export const app = new Hono();

app.on(["POST", "GET"], "/api/auth/**", (c) => auth.handler(c.req.raw));

// queries that require auth, managed through middleware to access supabase
app.use("/api/nations/*", authMiddleware);

app.get("/api/nations/:id", async (c) => {
  const supabase = c.get("supabase");
  // get from middleware, pass request with error
  const { data, error } = await supabase
    .from("nations")
    .select("id")
    .eq("id", c.req.param("id"))
    .single();

  if (error) {
    console.error("error: ", error.message);
    return c.json({ error: error.message }, 500);
  }

  return c.json(data);
});

// error catcher for unlogged errors
app.onError((err, c) => {
  console.error(`logged error: ${err.message}`);
  return c.text("potentially unknown error", 500);
});
// TODO: diplomacy, wars, admin, and nation data endpoints
