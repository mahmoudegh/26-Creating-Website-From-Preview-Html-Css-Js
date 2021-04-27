// Get Slider Items | Array.from [ES6 Feature]
var sliderImages = Array.from(
  document.querySelectorAll('.slider-container .slide'),
);

// Get Numbers Of Slides
var slidesCount = sliderImages.length;

// Set Current Slider
var currentSlide = 1;

// Slide Number Element
var slideNumberElement = document.getElementById('slide-number');

// Previous & Next Buttons
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');

// Handel Click on Previous And Next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Creat The Main Ul Element
var paginationElement = document.createElement('ul');

// Set Id On Created Ul Element
paginationElement.setAttribute('id', 'pagination-ul');

// Creat List Items Based On Slides Count
for (var i = 1; i <= slidesCount; i++) {
  // Creat Li
  var paginationItem = document.createElement('li');

  // Set Custom Attribute
  paginationItem.setAttribute('data-index', i);

  // Set Item Content
  paginationItem.appendChild(document.createTextNode(i));

  // Append Items To The Main Ul List
  paginationElement.appendChild(paginationItem);
}

// Add The Created Ul Element To The Page
document.getElementById('indicators').appendChild(paginationElement);

// Get The New Created Ul
var paginationCreatedUl = document.getElementById('pagination-ul');

// Get pagination Items | Array.from [ES6 Feature]
var paginationBullets = Array.from(
  document.querySelectorAll('#pagination-ul li'),
);

// Loop Through All Bullets Items
for (var i = 0; i < paginationBullets.length; i++) {
  paginationBullets[i].onclick = function () {
    'use strict';
    currentSlide = parseInt(this.getAttribute('data-index'));
    theChecker();
  };
}

// Trigger The Checker Function;
theChecker();

// Next Slide Function
function nextSlide() {
  'use strict';
  if (nextButton.classList.contains('disabled')) {
    // Do Nothing
    return false;
  } else {
    currentSlide++;
    theChecker();
  }
}

// Previous Slide Function
function prevSlide() {
  'use strict';
  if (prevButton.classList.contains('disabled')) {
    // Do Nothing
    return false;
  } else {
    currentSlide--;
    theChecker();
  }
}

// Create The Checker function
function theChecker() {
  'use strict';

  // Set The Slide Number
  slideNumberElement.textContent =
    'Slide #' + currentSlide + ' of ' + slidesCount;

  // Remove All Active Classes
  removeAllActive();

  // Set Active Class On Current Slide
  sliderImages[currentSlide - 1].classList.add('active');

  // Set Active Class On Current pagination Item
  paginationCreatedUl.children[currentSlide - 1].classList.add('active');

  // Check If Current Slide Is The First
  if (currentSlide == 1) {
    // Add Disabled Class On Previous Button
    prevButton.classList.add('disabled');
  } else {
    // Remove Disabled Class From Previous Button
    prevButton.classList.remove('disabled');
  }

  // Check If Current Slide Is The Last
  if (currentSlide == slidesCount) {
    // Add Disabled Class On Next Button
    nextButton.classList.add('disabled');
  } else {
    // Remove Disabled Class From Next Button
    nextButton.classList.remove('disabled');
  }
}

// Remove All Active Classes From Images And pagination Bullets
function removeAllActive() {
  'use strict';

  // Loop Through Images
  sliderImages.forEach(function (img) {
    img.classList.remove('active');
  });

  // Loop Through pagination Bullets
  paginationBullets.forEach(function (bullet) {
    bullet.classList.remove('active');
  });
}
