const express = require("express");
const cors = require("cors");
const path = require("path");
const basePath = "/sokos-mikrofrontend-template";
const buildPath = path.resolve(__dirname, "../dist");
const server = express();
const corsAllowedOrigin = process.env.CORS_ALLOWED_ORIGIN || "http://localhost:5173";

server.use(cors({ origin: corsAllowedOrigin }));

const expressStaticGzip = require("express-static-gzip");

server.use(
  basePath,
  expressStaticGzip(buildPath, {
    enableBrotli: true,
    orderPreference: ["br"],
  })
);

server.get(`${basePath}/internal/isAlive`, (req, res) => {
  res.sendStatus(200);
});

server.get(`${basePath}/internal/isReady`, (req, res) => {
  res.sendStatus(200);
});

server.listen(7100, () => console.log("Server listening on port 7100"));
