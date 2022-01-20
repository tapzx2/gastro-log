#!/bin/zsh

# to do
# resize images to optimize for web

# only works for HEIC to jpg!
# looks for unconverted HEIC images and converts them to jgp

echo "converting HEIC images..."

echo "" > converted
echo "" > to_convert
echo "" > not_converted

jpgs=$(ls jpgs)
apple=$(ls images)

for VALUE in $jpgs; do
  CONVERTED=`echo "$VALUE" | cut -d'.' -f1`
  echo $CONVERTED >> converted
done;

for VALUE in $apple; do
  TO_CONVERT=`echo "$VALUE" | cut -d'.' -f1`
  echo $TO_CONVERT >> to_convert
done;

diff --changed-group-format='%<' --unchanged-group-format='' to_convert converted | tr ' ' '\n' > not_converted

while read p; do
  echo "converting images/$p.HEIC"
  magick convert "images/$p.HEIC" "jpgs/$p.jpg"
done <not_converted

echo "done, all images converted to jpg"

rm converted to_convert not_converted