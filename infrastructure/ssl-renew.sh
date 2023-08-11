#!/bin/sh

# see: https://www.linode.com/docs/products/storage/object-storage/guides/custom-domain/
# outputs: 
#   /etc/letsencrypt/live/www.datadao.de/fullchain.pem
#   /etc/letsencrypt/live/www.datadao.de/privkey.pem

# see: https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-22-04

sudo certbot certonly --manual