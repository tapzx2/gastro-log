#!/bin/zsh

# to do
# diff the lists and only convert unconverted images
# save jpgs in a different folder
# resize jpgs to appropriate web dimensions

for IMAGE in images/*; do
  magick convert $IMAGE $IMAGE.jpg;
done;