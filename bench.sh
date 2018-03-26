#!/usr/bin/env bash

regular_results=$(npx concurrently --names server,bench -r -k 'node index.js' 'autocannon -j -c 100 -d 5 -p 10 localhost:2000/regular')

async_results=$(npx concurrently --names server,bench -r -k 'node index.js' 'autocannon -j -c 100 -d 5 -p 10 localhost:2000/async')

read -r -d '' script <<EOF
const compare = require('autocannon-compare')
console.log(
  compare(${regular_results}, ${async_results})
)
EOF

node - < <(echo "${script}")
