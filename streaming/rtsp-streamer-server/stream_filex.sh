#!/bin/sh

source=$1
source_fn=`basename ${source}`
server=${2:-localhost:554}
rtsp_uri=rtsp://${server}/${source_fn}

ffmpeg -re -stream_loop -1 -i ${source} -f rtsp -rtsp_transport tcp ${rtsp_uri}
