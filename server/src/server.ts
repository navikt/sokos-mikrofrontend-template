import cors from "cors";
import express, { Request, Response } from "express";
import expressStaticGzip from "express-static-gzip";
import path from "path";

const basePath = "/sokos-mikrofrontend-template";
const buildPath = path.resolve(__dirname, "../dist");
const server = express();
const corsAllowedOrigin =
  process.env.CORS_ALLOWED_ORIGIN_INTERN ||
  process.env.CORS_ALLOWED_ORIGIN_ANSATT ||
  "http://localhost:5173";

server.use(cors({ origin: corsAllowedOrigin }));

server.use(
  basePath,
  expressStaticGzip(buildPath, {
    enableBrotli: true,
    orderPreference: ["br"],
  }),
);

server.get(`${basePath}/internal/isAlive`, (_req: Request, res: Response) => {
  res.sendStatus(200);
});

server.get(`${basePath}/internal/isReady`, (_req: Request, res: Response) => {
  res.sendStatus(200);
});

// eslint-disable-next-line no-console
server.listen(8080, () => console.log("Server listening on port 8080"));
