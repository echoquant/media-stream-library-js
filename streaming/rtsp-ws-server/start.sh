#!/bin/sh

docker run -d \
  -v `pwd`/conf.d:/etc/nginx/conf.d \
  -v `pwd`/html:/usr/share/nginx/html \
  --name rtsp-ws-server --rm -p 8888:80 farmer1992/nginx-websockify
