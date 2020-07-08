FROM python:3-alpine

WORKDIR /usr/src/app

COPY . .

RUN apk update

RUN apk add nodejs

RUN apk add npm

RUN npm install --prefix frontend && npm run build --prefix frontend

RUN pip install --no-cache-dir -r requirements.txt

CMD [ "python", "./backend/main.py" ]
