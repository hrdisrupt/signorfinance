#FROM node:14.15.0-alpine
# FROM node:14.18.1-alpine
FROM node:14.18.1 as build

USER root

WORKDIR /app

COPY package*.json ./
#COPY package-lock.json ./
# RUN apk update && apk upgrade && apk add bash
RUN apt-get update
RUN apt-get upgrade -y
RUN npm install --silent
RUN npm install antd

COPY public ./public
COPY src ./src
COPY jsconfig.json ./
COPY config-overrides.js ./

#ENV NODE_ENV production
# ENTRYPOINT ["/app/copyFiles.sh"]
#CMD [ "npm run", "dev"]

ENV PROXY_PORT 5000
EXPOSE 3000
EXPOSE 5000

RUN npm run build

# production environment
FROM nginx:stable-alpine
# RUN rm -r /etc/nginx/sites-enabled/default
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
RUN chmod +x copyFiles.sh
EXPOSE 80

# FROM node:14.18.1 AS server
# WORKDIR /root
# COPY --from=build app/build ./build
# # COPY package*.json ./api/
# RUN npm install express
# COPY server.js ./
# COPY copyFiles.sh ./
# RUN chmod +x copyFiles.sh

CMD ["nginx", "-g", "daemon off;"]

# ENTRYPOINT ["/root/copyFiles.sh"]
