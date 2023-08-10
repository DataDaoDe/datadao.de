#!/bin/sh
# see: https://littlebigtech.net/posts/static-site-hosting-using-linode-bucket-storage/

BUCKET_NAME="s3://www.datadao.de"

# build
npm run build

cd build/ && s3cmd --no-mime-magic --acl-public --delete-removed --delete-after sync . $BUCKET_NAME