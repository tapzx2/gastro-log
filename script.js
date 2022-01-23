// check for overlap: https://stackoverflow.com/questions/306316/determine-if-two-rectangles-overlap-each-other
// See rect algo in action: https://silentmatt.com/rectangle-intersection/
// https://stackoverflow.com/questions/294250/how-do-i-retrieve-an-html-elements-actual-width-and-height

// sudo code

// let photos = location of all photos
// for (let i=i; i<photos.length; i++}\
//   let previous = photos[i-1]
//   let current = photos[i]
//   set top in dom
//   if current.area intersects previous.area
//     current.left += previous.left
// set top in dom of last photo

console.log("it works");
function change_photo_location() {
  let photos = document.querySelectorAll("img");
  for (let i = 1; i < photos.length; i++) {
    let previous = photos[i - 1];
    let current = photos[i];
    set_top_in_dom(previous);
    let [previousTop, previousBottom, previousLeft, previousRight] =
      get_coordinates(previous);
    let [currentTop, currentBottom, currentLeft, currentRight] =
      get_coordinates(current);
    if (
      check_intersect(
        previousTop,
        previousBottom,
        previousLeft,
        previousRight,
        currentTop,
        currentBottom,
        currentLeft,
        currentRight
      )
    ) {
      current.style.left = 10 + current.x + previous.width + "px"; // margin!
    }
  }
  set_top_in_dom(photos[photos.length - 1]);
}

/* functions */

function set_top_in_dom(box) {
  box.style.top = box.attributes["data-top"].value;
}

function check_intersect( // true = intersects, false = does
  RectATop,
  RectABottom,
  RectALeft,
  RectARight,
  RectBTop,
  RectBBottom,
  RectBLeft,
  RectBRight
) {
  if (
    RectALeft < RectBRight &&
    RectARight > RectBLeft &&
    RectATop < RectBBottom &&
    RectABottom > RectBTop
  ) {
    console.log("returns true, current intersects with previous");
    return true;
  } else {
    console.log("returns false, no intersection");
    return false;
  }
}

function get_coordinates(box) {
  let scale = box.naturalWidth / box.width;
  let top = parseInt(box.attributes["data-top"].value.slice(0, -2));
  let bottom = top + box.naturalHeight / scale; // is there a better way to find image height?
  let left = box.x;
  let right = box.x + box.width;
  console.log([top, bottom, left, right]);
  return [top, bottom, left, right];
}
