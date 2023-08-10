#!/bin/sh

# see: https://www.linode.com/docs/products/storage/object-storage/guides/custom-domain/
# outputs: 
#   /etc/letsencrypt/live/www.datadao.de/fullchain.pem
#   /etc/letsencrypt/live/www.datadao.de/privkey.pem

sudo certbot certonly --manual