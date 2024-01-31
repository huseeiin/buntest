import { app } from "../../../api/app";

export const POST = (req) => app.fetch(req.request);
