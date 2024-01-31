import { serveStatic } from "hono/bun";
import { app } from "./app";

app.use("*", serveStatic({ root: "../build" }));

export default app;
