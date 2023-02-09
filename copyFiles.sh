#!/usr/bin/env bash

node $NODE_OPTIONS /app/server.js  --userDir $USER_DIR  --settings $SETTINGS $SAFE $FLOWS --port $PORT &
# python3 /app/api/webApi.py
# npm start
nginx -g daemon off;

#react-app-rewired start
#concurrently --kill-others \"react-app-rewired start\" \"node server.js\"

#while [ 1 ]
#do
#    echo 1
#    sleep 2
#done
