'use strict';

// array to hold pic info
Pic.allPictures = [];

// constructor function for pictures
function Pic(filepath, name, countShow, countClick) {
  this.filepath = filepath;
  this.name = name;
  this.countShow = countShow;
  this.countClick = countClick;
  Pic.allPictures.push(this);
}

// new instances of pics
new Pic('img/bag.jpg', 'bag', 0, 0);
new Pic('img/banana.jpg', 'banana', 0, 0);
new Pic('img/bathroom.jpg', 'bathroom', 0, 0);
new Pic('img/boots.jpg', 'boots', 0, 0);
new Pic('img/breakfast.jpg', 'breakfast', 0, 0);
new Pic('img/bubblegum.jpg', 'bubblegum', 0, 0);
new Pic('img/chair.jpg', 'chari', 0, 0);
new Pic('img/cthulhu.jpg', 'cthulhu', 0, 0);
new Pic('img/dog-duck.jpg', 'dog-duck', 0, 0);
new Pic('img/dragon.jpg', 'dragon', 0, 0);
new Pic('img/pen.jpg', 'pen', 0, 0);
new Pic('img/pet-sweep.jpg', 'pet-sweep', 0, 0);
new Pic('img/scissors.jpg', 'scissors', 0, 0);
new Pic('img/shark.jpg', 'shark', 0, 0);
new Pic('img/sweep.png', 'sweep', 0, 0);
new Pic('img/tauntaun.jpg', 'tauntaun', 0, 0);
new Pic('img/unicorn.jpg', 'unicorn', 0, 0);
new Pic('img/usb.gif', 'usb', 0, 0);
new Pic('img/water-can.jpg', 'water-can', 0, 0);
new Pic('img/wine-glass.jpg', 'wine-glass', 0, 0);

console.log (Pic.allPictures);

// access element from DOM
var imgElementOne = document.getElementById('pic-one');
var imgElementTwo = document.getElementById('pic-two');
var imgElementThree = document.getElementById('pic-three');

// add event listener
// end event listener after 25 clicks

//callback function when image is clicked, generate new pics
// random number generator
// check if random number is same as prior
// use random numbers to set src and alt attributes of each pic
// no duplicates


// track image apperance

// track clicks

// render 3 images on page load
imgElementOne.src = Pic.allPictures[0].filepath;
imgElementTwo.src = Pic.allPictures[1].filepath;
imgElementThree.src = Pic.allPictures[2].filepath;

// return img apperances after 25 selections
// return img selction count after 25 loops