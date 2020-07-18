FROM python:3.6
#RUN pip install Flask uWSGI

WORKDIR /usr/src/app

COPY . ./backend

#RUN apk update

#RUN apk add libpq && apk add libpq-dev

WORKDIR /usr/src/app/backend

RUN python3 -m pip install --no-cache-dir -r requirements.txt 
#RUN \
 #apk add --no-cache postgresql-libs && \
 #apk add --no-cache --virtual .build-deps gcc musl-dev postgresql-dev && \
 #python3 -m pip install --no-cache-dir -r requirements.txt && \
 #apk --purge del .build-deps


#RUN mkdir ../backend/static && cp -r ./build/* ../backend/static

#WORKDIR /usr/src/app/backend

#CMD [ "python", "./main.py" ]

CMD uwsgi --socket-timeout=65 --wsgi-file main.py --callable app --socket /var/app/s.sock #--uid $(id -u www-data) --vacuum
