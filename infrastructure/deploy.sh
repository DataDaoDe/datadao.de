#!/bin/sh
# see: https://littlebigtech.net/posts/static-site-hosting-using-linode-bucket-storage/

# BUCKET STORAGE (S3) DEPLOY
# ============================
# BUCKET_NAME="s3://www.datadao.de"
# cd build/ && s3cmd --no-mime-magic --acl-public --delete-removed --delete-after sync . $BUCKET_NAME

# SCP DEPLOY
# ============================
# build
npm run build

scp -r build/* datadao.de:/var/www/datadao.de/