'use strict';

// array to hold pic info
Pic.allPictures = [];
Pic.currentPictures = [];

Pic.totalPicCounter = 0;

// constructor function for pictures
function Pic(filepath, name) {
  this.filepath = filepath;
  this.name = name;
  this.countShow = 0;
  this.countClick = 0;
  Pic.allPictures.push(this);
}

// new instances of pics
new Pic('img/bag.jpg', 'bag');
new Pic('img/banana.jpg', 'banana');
new Pic('img/bathroom.jpg', 'bathroom');
new Pic('img/boots.jpg', 'boots');
new Pic('img/breakfast.jpg', 'breakfast');
new Pic('img/bubblegum.jpg', 'bubblegum');
// new Pic('img/chair.jpg', 'chari');
// new Pic('img/cthulhu.jpg', 'cthulhu');
// new Pic('img/dog-duck.jpg', 'dog-duck');
// new Pic('img/dragon.jpg', 'dragon');
// new Pic('img/pen.jpg', 'pen');
// new Pic('img/pet-sweep.jpg', 'pet-sweep');
// new Pic('img/scissors.jpg', 'scissors');
// new Pic('img/shark.jpg', 'shark');
// new Pic('img/sweep.png', 'sweep');
// new Pic('img/tauntaun.jpg', 'tauntaun');
// new Pic('img/unicorn.jpg', 'unicorn');
// new Pic('img/usb.gif', 'usb');
// new Pic('img/water-can.jpg', 'water-can');
// new Pic('img/wine-glass.jpg', 'wine-glass');

console.log (Pic.allPictures);

// access element from DOM
var imgElementOne = document.getElementById('pic-one');
var imgElementTwo = document.getElementById('pic-two');
var imgElementThree = document.getElementById('pic-three');

// add event listener

imgElementOne.addEventListener('click', clickHandler);
imgElementTwo.addEventListener('click', clickHandler);
imgElementThree.addEventListener('click', clickHandler);

// end event listener after 25 clicks

function clickHandler (event){
  switch (event.target.id) {
    case 'pic-one':
      Pic.currentPictures[0].countClick++;
      break;
    case 'pic-two':
      Pic.currentPictures[1].countClick++;
      break;
    case 'pic-three':
      Pic.currentPictures[2].countClick++;
      break;
    default:
      return;
  }
  console.log(Pic.currentPictures);
  randomPic();
}

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

  while (randomIndexTwo === randomIndexOne) {
    randomIndexTwo = Math.floor(Math.random() * Pic.allPictures.length);
    console.log ('index two 1st if: ' + randomIndexTwo);
    randomIndexThree = parseInt(Math.floor(Math.random() * Pic.allPictures.length));
    console.log ('index three 1st if: ' + randomIndexThree);
  }

  // check if 3rd random number is equal to 1st or 2nd
  while (randomIndexThree === randomIndexOne || randomIndexThree === randomIndexTwo) {
    randomIndexThree = parseInt(Math.floor(Math.random() * Pic.allPictures.length));
    console.log ('index three 2nd if: ' + randomIndexThree);
  }

  Pic.currentPictures = [];
  Pic.currentPictures.push (Pic.allPictures[randomIndexOne],
    Pic.allPictures[randomIndexTwo],
    Pic.allPictures[randomIndexThree]);

  // use random numbers to set src and alt attributes of each pic
  imgElementOne.src = Pic.allPictures[randomIndexOne].filepath;
  imgElementTwo.src = Pic.allPictures[randomIndexTwo].filepath;
  imgElementThree.src = Pic.allPictures[randomIndexThree].filepath;

  // count times image is shown
  Pic.allPictures[randomIndexOne].countShow ++;
  Pic.allPictures[randomIndexTwo].countShow ++;
  Pic.allPictures[randomIndexThree].countShow ++;

  console.log('index one count show: ' + Pic.allPictures[randomIndexOne].countShow);

  Pic.totalPicCounter ++;
}


// track clicks

// render 3 images on page load
randomPic();


// return img apperances after 25 selections
// return img selction count after 25 loops