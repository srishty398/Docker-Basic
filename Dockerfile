FROM node:9-slim

WORKDIR /app

COPY package.json ./index

RUN npm install

COPY . /app

EXPOSE 9000

CMD ["npm", "start "]

 