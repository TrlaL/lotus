FROM node:latest as build-stage

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:stable-alpine as final
COPY default.conf /etc/nginx/conf.d/default.conf
COPY ssl /etc/nginx/ssl
COPY --from=build-stage /app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
