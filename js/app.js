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


// access element from DOM

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

// return img apperances after 25 selections
// return img selction count after 25 loops