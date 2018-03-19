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
imgElementOne.addEventListener('click', randomPic);
imgElementTwo.addEventListener('click', randomPic);
imgElementThree.addEventListener('click', randomPic);
// end event listener after 25 clicks

//callback function when image is clicked, generate new pics
function randomPic () {
  // random number generator
  var randomIndexOne = Math.floor(Math.random() * Pic.allPictures.length);

  console.log ('index one: ' +randomIndexOne);

  var randomIndexTwo = Math.floor(Math.random() * Pic.allPictures.length);
  console.log ('index two: ' + randomIndexTwo);

  var randomIndexThree = Math.floor(Math.random() * Pic.allPictures.length);
  console.log ('index three: ' + randomIndexThree);

  // check if 2nd random number is equal to 1st

  if (randomIndexTwo === randomIndexOne) {
    randomIndexTwo = Math.floor(Math.random() * Pic.allPictures.length);
    console.log ('index two 1st if: ' + randomIndexTwo);
    randomIndexThree = parseInt(Math.floor(Math.random() * Pic.allPictures.length));
    console.log ('index three 1st if: ' + randomIndexThree);
  }

  // check if 3rd random number is equal to 1st or 2nd
  if (randomIndexThree === randomIndexOne || randomIndexThree === randomIndexTwo) {
    randomIndexThree = parseInt(Math.floor(Math.random() * Pic.allPictures.length));
    console.log ('index three 2nd if: ' + randomIndexThree);
  }

  // use random numbers to set src and alt attributes of each pic
  imgElementOne.src = Pic.allPictures[randomIndexOne].filepath;
  imgElementTwo.src = Pic.allPictures[randomIndexTwo].filepath;
  imgElementThree.src = Pic.allPictures[randomIndexThree].filepath;


  // no duplicates
}

// track image apperances

// track clicks

// render 3 images on page load
randomPic();

// return img apperances after 25 selections
// return img selction count after 25 loops