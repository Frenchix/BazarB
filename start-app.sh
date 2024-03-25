#!/bin/bash

echo $serviceAccountKey | base64 -d > ./serviceAccountKey.json
# Start default script for NodeJS apps
npm start
