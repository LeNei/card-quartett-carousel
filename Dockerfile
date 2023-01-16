FROM node:16-alpine as build
# set working directory
WORKDIR /app
# install and cache app dependencies
COPY package.json package-lock.json ./
RUN npm ci
# build app
COPY . .
RUN npm run build

# copy build content into nginx container
FROM nginx:1.23.3-alpine-slim
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
