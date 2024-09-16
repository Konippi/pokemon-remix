#!/bin/bash -eu

curl -H "Accept: application/vnd.github.v3.raw" \
  "https://api.github.com/repos/PokeAPI/pokeapi/contents/openapi.yml" >openapi.yaml

pnpm openapi-generator-cli generate \
  -g typescript-fetch \
  -i openapi.yaml \
  -o app/api/openapi-generated
