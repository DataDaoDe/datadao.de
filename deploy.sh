#!/bin/bash

APP_NAME="datadao_web"
TAG="v1"
APP_NAME_TAG="$APP_NAME:$TAG"

# get running container ID
CONTAINER_ID=$(docker ps | grep $APP_NAME_TAG | gawk '{print $1}')

# stop container
echo "[01]: Stopping Container: ${CONTAINER_ID}"
docker container stop $CONTAINER_ID

# remove image
IMAGE_ID=$(docker images | grep $APP_NAME | gawk '{print $3}')
echo "[02]: Removing image: ${IMAGE_ID}"
docker image rm $IMAGE_ID

# pull latest code
echo "[03]: Pulling latest code."
git pull

# build new image
echo "[04]: Building new image"
docker build --no-cache -t datadao_web:v1 .

# start docker
echo "[05]: Starting docker on port=80, for app=${APP_NAME_TAG}"
docker run -p 80:80 -d --restart=unless-stopped datadao_web:v1