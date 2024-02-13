
FROM node:14.16.0-alpine3.13

# Set the working directory in the container
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "start"]
