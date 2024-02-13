
FROM node:20.11.0-alpine3.19

RUN apk add --no-cache npm

RUN addgroup app && adduser -S -G app app

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN chown -R app:app /app

EXPOSE 5173

CMD ["npm", "start"]

