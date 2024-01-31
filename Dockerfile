FROM oven/bun

WORKDIR /usr/src/app

COPY package*.json ./
RUN bunx npm i --omit=dev
COPY . .
RUN bun run build

CMD [ "bun", "start" ]
