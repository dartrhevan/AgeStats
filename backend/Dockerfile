FROM python:3.6

WORKDIR /usr/src/app

COPY . ./backend

WORKDIR /usr/src/app/backend

RUN python3 -m pip install --no-cache-dir -r requirements.txt 

CMD uwsgi --socket-timeout=65 \
	  --wsgi-file main.py \
	  --callable app \
	  --socket /var/app/s.sock 