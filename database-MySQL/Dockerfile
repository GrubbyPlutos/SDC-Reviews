FROM mysql:5.7

COPY ./schema.sql /docker-entrypoint-initdb.d/

ENV MYSQL_ROOT_PASSWORD=password

ENV MYSQL_DATABASE='grubhub'
