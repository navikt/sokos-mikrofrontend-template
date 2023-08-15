const express = require("express");
const cors = require("cors");
const path = require("path");

const server = express();
const corsAllowedOrigin = process.env.CORS_ALLOWED_ORIGIN || "http://localhost:5173";

const BASE_PATH = "/sokos-mikrofrontend-template";
const BUILD_PATH = path.resolve(__dirname, "../dist");

server.use(cors({ origin: corsAllowedOrigin }));

const expressStaticGzip = require("express-static-gzip");

server.use(
  BASE_PATH,
  expressStaticGzip(BUILD_PATH, {
    enableBrotli: true,
    orderPreference: ["br"],
  })
);

server.get([`${BASE_PATH}/internal/isAlive`, `${BASE_PATH}/internal/isReady`], (_req, res) => res.sendStatus(200));

server.listen(8080, () => console.log("Server listening on port 8080"));
