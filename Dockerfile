FROM oven/bun

WORKDIR /usr/src/app

COPY package*.json ./
RUN bun i npm -g
RUN npm i --omit=dev
COPY . .
RUN bun run build

CMD [ "bun", "start" ]
