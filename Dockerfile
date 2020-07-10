FROM python:3-alpine

WORKDIR /usr/src/app

COPY . .

RUN apk update

#RUN apk add libpq && apk add libpq-dev

WORKDIR /usr/src/app/backend

RUN \
 apk add --no-cache postgresql-libs && \
 apk add --no-cache --virtual .build-deps gcc musl-dev postgresql-dev && \
 python3 -m pip install --no-cache-dir -r requirements.txt && \
 apk --purge del .build-deps


RUN apk add nodejs

RUN apk add npm

WORKDIR /usr/src/app/frontend

RUN npm install && npm run build

RUN mkdir ../backend/static && cp -r ./build/* ../backend/static

WORKDIR /usr/src/app/backend

#RUN pip install --no-cache-dir -r requirements.txt

CMD [ "python", "./main.py" ]
