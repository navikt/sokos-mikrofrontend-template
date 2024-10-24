FROM gcr.io/distroless/nodejs20-debian12@sha256:7500372171c136d2076c18cd19c6d44ab61d16c182920b179786815a2d7bcc11

WORKDIR /usr/src/app
COPY dist dist/
COPY server/build server/
COPY server/node_modules server/node_modules/

WORKDIR /usr/src/app/server

CMD ["server.js"]