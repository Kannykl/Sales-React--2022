FROM node:12-alpine as builder
WORKDIR /sale
COPY package.json /app/package.json
RUN npm install --only=prod
COPY . /sale
RUN npm run build
CMD ["npm", "start"]