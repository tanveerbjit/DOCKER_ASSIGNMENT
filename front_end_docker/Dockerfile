FROM node:20.8.1-slim

WORKDIR  /app
COPY ./package*.json .
RUN npm install
COPY . .

EXPOSE 5173

CMD [ "npm", "run", "dev" ]


