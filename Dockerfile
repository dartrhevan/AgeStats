FROM python:3-alpine

WORKDIR /usr/src/app

COPY . .

RUN apk update

RUN apk add libpq && libpq-dev

RUN apk add nodejs

RUN apk add npm

WORKDIR /usr/src/app/frontend

RUN npm install && npm run build

RUN mkdir ../backend/static && cp -r ./build/* ../backend/static

WORKDIR /usr/src/app/backend

RUN pip install --no-cache-dir -r requirements.txt

CMD [ "python", "./backend/main.py" ]
