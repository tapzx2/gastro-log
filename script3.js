// thank you stack overflow
// https://stackoverflow.com/questions/11071314/javascript-execute-after-all-images-have-loaded

var imgs = document.images,
  len = imgs.length,
  counter = 0;

[].forEach.call(imgs, function (img) {
  if (img.complete) {
    incrementCounter();
  } else {
    img.addEventListener("load", incrementCounter, false);
  }
});

function incrementCounter() {
  counter++;
  if (counter === len) {
    console.log("All images loaded!");
    //change_photo_location();
    set_image_locations();
  }
}

// my code

// locs = {} // parameterized format: {photo_num:[top_val,bottom_val,left_val,right_val]}

// get all photos
// for photo in photos:
//   for loc in setlocs:
//     if intercept(photo.location, loc):
//         photo.style.left = 10 + current.x + previous.width + "px"; // margin!
//   setlocs.add(key=photos index value, value=photo.location)
//


function set_image_locations() {
    // data structure
    let photos = document.querySelectorAll("img");
    locs = {}
    for (let i = 0; i < photos.length; i++) {
        locs[i] = []
    }
    // build adjusted locations
    for (let i = 0; i < photos.length; i++) {
        var inital = get_coordinates(photos[i])
        console.log("initial: " + inital)
        for (let j=0; j<photos.length; j++) {
            console.log("    locs[j]" + locs[j])
            if (intersects(inital, locs[j])) {
                var width = inital[3] - inital[2]
                inital[2] += 10 + (locs[j][3] - locs[j][2]) // shift left value over
                inital[3] = inital[2] + width // shift right value over
            }
        }
        locs[i] = inital
        console.log("inital update: " + inital)
    }
    // set locations
    for (let i=0; i<photos.length; i++) {
        photos[i].style.top = locs[i][0] + "px"
        photos[i].style.bottom = locs[i][1] + "px"
        photos[i].style.left = locs[i][2] + "px"
    }
    //photos[1].style.top = 100+"px"
}

// true = intersects, false = does not
// takes lists of values: top bottom left right
function intersects( RectA, RectB) {
    if (
      RectA[2] < RectB[3] &&
      RectA[3] > RectB[2] &&
      RectA[0] < RectB[1] &&
      RectA[1] > RectB[0]
    ) {
      console.log("returns true, RectA intersects with RectB");
      return true;
    } else {
      //console.log("returns false, no intersection");
      return false;
    }
}

function get_coordinates(box) {
  let scale = box.naturalWidth / box.width;
  let top = parseInt(box.attributes["data-top"].value.slice(0, -2));
  let bottom = top + box.naturalHeight / scale; // is there a better way to find image height?
  let left = box.x;
  let right = box.x + box.width;
  //console.log([top, bottom, left, right]);
  return [top, bottom, left, right];
}
