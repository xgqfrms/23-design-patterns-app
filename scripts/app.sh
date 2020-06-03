#!/usr/bin/env bash

echo "^-v-^ app is running in production env!" && yarn app
# echo "^-v-^ app is running in production env!" && NODE_ENV=production && yarn app
# echo "^-v-^ app is running in production env!" && export NODE_ENV=production && yarn app
# echo "^-v-^ app is running in production env!" && export process.env.NODE_ENV=production && yarn app
