FROM gcr.io/distroless/nodejs20-debian12@sha256:0f5e6997a042dc3715dfae2a1197ef23f92d557b162a3a53cf3d3f469839eb64

WORKDIR /usr/src/app
COPY dist dist/
COPY server/build server/
COPY server/node_modules server/node_modules/

WORKDIR /usr/src/app/server

CMD ["server.js"]