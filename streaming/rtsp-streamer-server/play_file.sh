#!/bin/sh

rtsp_uri=$1

ffplay -rtsp_transport tcp ${rtsp_uri}
