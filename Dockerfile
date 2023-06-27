FROM node:lts-alpine@sha256:2ffec31a58e85fbcd575c544a3584f6f4d128779e6b856153a04366b8dd01bb0
RUN apk add --no-cache bash
RUN npm i -g pnpm
ENV NODE_ENV production

WORKDIR usr/src/app
COPY server server/
COPY dist dist/

WORKDIR server
RUN pnpm install

CMD ["node", "./server.js"]

EXPOSE 7100
