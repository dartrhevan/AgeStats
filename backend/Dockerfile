FROM python:3-alpine

WORKDIR /usr/src/app

COPY . ./backend

RUN apk update

#RUN apk add libpq && apk add libpq-dev

WORKDIR /usr/src/app/backend

RUN \
 apk add --no-cache postgresql-libs && \
 apk add --no-cache --virtual .build-deps gcc musl-dev postgresql-dev && \
 python3 -m pip install --no-cache-dir -r requirements.txt && \
 apk --purge del .build-deps


#RUN mkdir ../backend/static && cp -r ./build/* ../backend/static

#WORKDIR /usr/src/app/backend

CMD [ "python", "./main.py" ]
