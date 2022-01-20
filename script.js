

// check for overlap: https://stackoverflow.com/questions/306316/determine-if-two-rectangles-overlap-each-other
// See rect algo in action: https://silentmatt.com/rectangle-intersection/
// https://stackoverflow.com/questions/294250/how-do-i-retrieve-an-html-elements-actual-width-and-height

// sudo code

// let photos = location of all photos
// let previous = photos[0]
// let current = photos[1]
// for (let i=2; i<photos.length; i++}
//   if current.area intersects previous.area
//     current.x += previous.x
//   current = photos[i]
//   previous = photos[i-1]

console.log('it works')
let photos = document.querySelectorAll('img')
console.log(photos)
let previous = photos[0]
let current = photos[1]
console.log(previous.attributes["data-top"].value)
previous.style.top = previous.attributes["data-top"].value
// console.log('x')
// console.log(current.x)
// console.log('width')
// console.log(current.width)
// console.log('offset width')
// console.log(current.offsetWidth)
// console.log('bounding client rectangle')
// console.log(current.getBoundingClientRect() )
for (let i=2; i<photos.length; i++){
    console.log(i)
}
console.log(photos[0].x)