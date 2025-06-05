FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm install

COPY App.js .

EXPOSE 5000

CMD ["node", "App.js"]
