import { Hono } from "hono";

export const app = new Hono();

const api = app.basePath("/api");

api.post("/", async (c) => {
  const data = (await c.req.formData()).get("username");
  if (typeof data === "string") return c.json({ res: data.toUpperCase() });
});
