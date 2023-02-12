#!/bin/bash

if [ "$1" == "build" ]; then
    tsc src/github-api.ts
    tsc src/graphql.ts
    tsc src/npmjs-api.ts
    tsc src/scorecard.ts

elif [ "$1" == "install" ]; then
    npm install

elif [ "$1" == "test" ]; then
    exit 0

else
    python3 src/CLI.py $1
fi