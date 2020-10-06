#!/bin/bash
yarn react-app:build
npm run build
cp packages/react-app/build/index.html packages/react-app/build/404.html 
surge packages/react-app/build/ https://election.finance
