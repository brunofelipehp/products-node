FROM node:lts-alpine3.18

WORKDIR /product/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start"]