FROM nginx:alpine

RUN apk update 

RUN apk add nodejs

RUN apk add npm

COPY . /usr/src/app/frontend

RUN rm /etc/nginx/conf.d/default.conf # <= This line solved my issue

COPY ./nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/src/app/frontend

RUN npm install && npm run build

RUN cp -r ./build/* /usr/share/nginx/html

