FROM node:18
WORKDIR /
COPY package*.json ./ 
COPY .env ./ 
COPY . .
RUN npm install 
CMD ["node", "server.js"]
EXPOSE 5000