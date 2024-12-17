  FROM node:18-alpine AS build
  RUN npm install -g pnpm
  WORKDIR /app
  COPY package.json pnpm-lock.yaml ./
  RUN pnpm install
  COPY . .
  RUN pnpm run build
  
  FROM nginx:stable-alpine
  RUN rm -rf /usr/share/nginx/html/*
  COPY --from=build /app/dist /usr/share/nginx/html
  EXPOSE 80  
  CMD ["nginx", "-g", "daemon off;"]