'use strict';


Pic.allPictures = [];
Pic.currentPictures = [];
Pic.currentRandomNum = [];
Pic.randomNumPrevious = [];

Pic.totalPicCounter = 0;

// global arrays for chart
var picNames = [];
var picShow = [];
var picVotes = [];

// constructor function for pictures
function Pic(filepath, name) {
  this.filepath = filepath;
  this.name = name;
  this.countShow = 0;
  this.countClick = 0;
  Pic.allPictures.push(this);
  picNames.push(this.name);
}

// function for creating new instances
function createNewInstances() {

  var picStorageString = localStorage.getItem('localPictures');
  var retrievedPics = JSON.parse(picStorageString);

  // use if function to check for data in local storage
  if (retrievedPics && retrievedPics.length) {
    Pic.allPictures = retrievedPics;
    console.log('retrieved pic data from LS');
    console.log (Pic.allPictures);
    for(var i in Pic.allPictures) {
      picNames[i] = Pic.allPictures[i].name;
    }
    return;
  }

  console.log('creating new instances');

  new Pic('img/bag.jpg', 'bag');
  new Pic('img/banana.jpg', 'banana');
  new Pic('img/bathroom.jpg', 'bathroom');
  new Pic('img/boots.jpg', 'boots');
  new Pic('img/breakfast.jpg', 'breakfast');
  new Pic('img/bubblegum.jpg', 'bubblegum');
  new Pic('img/chair.jpg', 'chari');
  new Pic('img/cthulhu.jpg', 'cthulhu');
  new Pic('img/dog-duck.jpg', 'dog-duck');
  new Pic('img/dragon.jpg', 'dragon');
  new Pic('img/pen.jpg', 'pen');
  new Pic('img/pet-sweep.jpg', 'pet-sweep');
  new Pic('img/scissors.jpg', 'scissors');
  new Pic('img/shark.jpg', 'shark');
  new Pic('img/sweep.png', 'sweep');
  new Pic('img/tauntaun.jpg', 'tauntaun');
  new Pic('img/unicorn.jpg', 'unicorn');
  new Pic('img/usb.gif', 'usb');
  new Pic('img/water-can.jpg', 'water-can');
  new Pic('img/wine-glass.jpg', 'wine-glass');

  console.log (Pic.allPictures);
}

createNewInstances();

// access element from DOM
var imgElementOne = document.getElementById('pic-one');
var imgElementTwo = document.getElementById('pic-two');
var imgElementThree = document.getElementById('pic-three');

var unorderedListElement = document.getElementById('results');

// add event listener
imgElementOne.addEventListener('click', clickHandler);
imgElementTwo.addEventListener('click', clickHandler);
imgElementThree.addEventListener('click', clickHandler);

// end event listener after 25 clicks
function clickHandler (event){

  // count up one on total times allowed to click
  Pic.totalPicCounter ++;
  // console.log('total pic counter: ' + Pic.totalPicCounter);

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
  // console.log(Pic.currentPictures);

  // check the click counter
  if (Pic.totalPicCounter > 4) {

    // Save to local storage
    var savePicInfo = JSON.stringify(Pic.allPictures);
    localStorage.setItem('localPictures', savePicInfo);

    // Turn off event listener
    imgElementOne.removeEventListener('click', clickHandler);
    imgElementTwo.removeEventListener('click', clickHandler);
    imgElementThree.removeEventListener('click', clickHandler);

    countTimesShown();
    countVotes();
    renderChart();
    // showResults();
  } else {
    randomPic();
  }
}

//callback function when image is clicked, generate new pics
function randomPic () {

  //create array of random numbers to pass into picutre array position
  var randomIndexOne = Math.floor(Math.random() * Pic.allPictures.length);
  var randomIndexTwo = Math.floor(Math.random() * Pic.allPictures.length);
  var randomIndexThree = Math.floor(Math.random() * Pic.allPictures.length);

  // check variables and re-run if duplicates occur
  while (randomIndexOne === randomIndexTwo
    || randomIndexOne === randomIndexThree
    || randomIndexTwo === randomIndexThree
    || Pic.randomNumPrevious.includes(randomIndexOne)
    || Pic.randomNumPrevious.includes(randomIndexTwo)
    || Pic.randomNumPrevious.includes(randomIndexThree))
  {
    // console.log('found duplicate');
    randomIndexOne = Math.floor(Math.random() * Pic.allPictures.length);
    randomIndexTwo = Math.floor(Math.random() * Pic.allPictures.length);
    randomIndexThree = Math.floor(Math.random() * Pic.allPictures.length);
  }

  // console.log ('rand1: ' + randomIndexOne);
  // console.log ('rand 2: ' + randomIndexTwo);
  // console.log ('rand 3: ' + randomIndexThree);

  Pic.currentRandomNum[0] = randomIndexOne;
  Pic.currentRandomNum[1] = randomIndexTwo;
  Pic.currentRandomNum[2] = randomIndexThree;

  // console.log ('array of current rand num ' + Pic.currentRandomNum);

  Pic.currentPictures = [];
  Pic.currentPictures.push (Pic.allPictures[randomIndexOne],
    Pic.allPictures[randomIndexTwo],
    Pic.allPictures[randomIndexThree]);

  // console.log ('current array: ' + Pic.currentPictures);

  // use random numbers to set src and alt attributes of each pic
  imgElementOne.src = Pic.allPictures[randomIndexOne].filepath;
  imgElementTwo.src = Pic.allPictures[randomIndexTwo].filepath;
  imgElementThree.src = Pic.allPictures[randomIndexThree].filepath;

  // count times image is shown
  Pic.allPictures[randomIndexOne].countShow ++;
  Pic.allPictures[randomIndexTwo].countShow ++;
  Pic.allPictures[randomIndexThree].countShow ++;

  // update array of previous numbers for last used set of numbers
  Pic.randomNumPrevious[0] = randomIndexOne;
  Pic.randomNumPrevious[1] = randomIndexTwo;
  Pic.randomNumPrevious[2] = randomIndexThree;

  // console.log('array to store num: ' + Pic.randomNumPrevious);
}

function showResults() {
  for (var i in Pic.allPictures) {
    var listItemElement = document.createElement('li');

    listItemElement.textContent = Pic.allPictures[i].name + ' received ' + Pic.allPictures[i].countClick + ' votes and was shown ' + Pic.allPictures[i].countShow + ' times.';

    unorderedListElement.appendChild(listItemElement);
  }
}

// render 3 images on page load
randomPic();

// function to create times picture shown array for bar chart
function countTimesShown() {
  for (var j in Pic.allPictures) {
    picShow[j] = Pic.allPictures[j].countShow;
  }
}

// function to create vote array for bar chart
function countVotes() {
  for(var k in Pic.allPictures) {
    picVotes[k] = Pic.allPictures[k].countClick;
  }
}

// use Chart.js to create a bar chart
function renderChart() {
  // access canvas element from DOM
  var context = document.getElementById('click-chart').getContext('2d');

  var arrayOfColors = ['#c07b7b', '#59ac7c', '#0b5a8a', '#c67151', '#205153','#c07b7b', '#59ac7c', '#0b5a8a', '#c67151', '#205153','#c07b7b', '#59ac7c', '#0b5a8a', '#c67151', '#205153','#c07b7b', '#59ac7c', '#0b5a8a', '#c67151', '#205153'];

  var arrayOfColorsMuted = ['#ecd7d7', '#cde6d7', '#b5cddb', '#edd4ca', '#bccacb','#ecd7d7', '#cde6d7', '#b5cddb', '#edd4ca', '#bccacb','#ecd7d7', '#cde6d7', '#b5cddb', '#edd4ca', '#bccacb','#ecd7d7', '#cde6d7', '#b5cddb', '#edd4ca', '#bccacb',];

  new Chart(context, {
    type: 'bar',
    data: {
      labels: picNames,
      datasets: [{
        label: 'Votes per Picture',
        data: picVotes,
        backgroundColor: arrayOfColors,
      },
      {
        label: 'Times Picture Shown',
        data: picShow,
        backgroundColor: arrayOfColorsMuted,
      }]
    },
    options: {
      scales: {
        yAxes: [{
          stacked: false,
          ticks: {
            fontColor: '#c07b7b',
            beginAtZero: true,
            stepSize: 1,
          },
          scaleLabel: {display: true,
            labelString: 'Times Clicked vs. Times Shown',}
        }],
        xAxes: [{
          stacked: true,
          ticks: {
            autoSkip: false,
          }
        }]
      },
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'User Responses',
        fontColor: '#c67151',
        fontSize: 18,
        fontStyle: 'bold',
      }
    }
  });

  // // stacked chart
  // new Chart(context, {
  //   type: 'bar',
  //   data: picShow,
  //   options: {
  //     scales: {
  //       xAxes: [{
  //         stacked: true
  //       }],
  //       yAxes: [{
  //         stacked: true
  //       }]
  //     }
  //   }
  // });
}