FROM nginx:alpine

#RUN sudo rm /etc/nginx/nginx.conf && sudo rm /var/www/html/*

RUN apk update 

RUN apk add nodejs

RUN apk add npm

COPY . /usr/src/app/frontend

RUN rm /etc/nginx/conf.d/default.conf # <= This line solved my issue
#COPY nginx.conf /etc/nginx/conf.d

COPY ./nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/src/app/frontend

RUN npm install && npm run build

RUN cp -r ./build/* /usr/share/nginx/html

#ENTRYPOINT [ "sudo service nginx start" ]
