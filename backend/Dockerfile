FROM node:lts-alpine3.18

WORKDIR /product/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 7000

CMD [ "npm", "start"]