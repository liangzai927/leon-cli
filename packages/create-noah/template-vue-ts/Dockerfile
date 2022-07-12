FROM node:16.14-alpine3.14
RUN npm install pm2 -g
RUN apk add xdg-utils

RUN mkdir /usr/local/{project-name}
ADD . /usr/local/{project-name}

