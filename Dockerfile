FROM node:latest

LABEL maintainer = 'Bayu Bimantara <bayubimantarar@gmail.com>'

COPY . /home

WORKDIR /home

CMD ['npm', 'start']
