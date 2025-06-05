FROM node:18-alpine
WORKDIR /app
COPY App.js .
RUN npm install react react-dom
RUN echo "console.log('React app loaded');" >> index.js
CMD ["node"]
