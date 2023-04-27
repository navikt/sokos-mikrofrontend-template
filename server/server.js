const express = require("express");
const cors = require("cors");
const path = require("path");
const basePath = "/sokos-mikrofrontend-template";
const buildPath = path.resolve(__dirname, "../dist");
const server = express();
const corsAllowedOrigin = process.env.CORS_ALLOWED_ORIGIN || "http://localhost:5173";

const PORT = process.env.SERVER_PORT || 7500;

server.use(cors({ origin: corsAllowedOrigin }));

const expressStaticGzip = require("express-static-gzip");

server.use(
  basePath,
  expressStaticGzip(buildPath, {
    enableBrotli: true,
    orderPreference: ["br"],
  })
);

server.get([`${basePath}/internal/isAlive`, `${basePath}/internal/isReady`], (_req, res) => res.sendStatus(200));

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
