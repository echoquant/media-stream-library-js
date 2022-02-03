#!/bin/sh

#docker run --rm -it --network=host -v $PWD/conf/simple-server.yml:/rtsp-simple-server.yml -p 8554:8554 aler9/rtsp-simple-server
docker run --name rtsp-stream-server -d --rm -it -p 554:8554 aler9/rtsp-simple-server
