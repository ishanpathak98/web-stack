FROM node:18-alpine
WORKDIR /app
COPY server.js .
RUN npm install express
EXPOSE 5000
CMD ["node", "server.js"]
