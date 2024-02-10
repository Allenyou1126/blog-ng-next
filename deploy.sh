#!/bin/bash

rm -rf deploy/_next

cp out/_next deploy/

cd -r deploy

git add .
git commit -m "CI Auto Push"
git push
