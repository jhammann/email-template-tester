FROM node:20 AS builder

WORKDIR /
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build:ts

FROM nginx:alpine

COPY --from=builder /dist /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
