

//API CALL
document.getElementById('getImages').addEventListener('click', getImages);

function getImages() {
  console.log('hello world!');

  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'http://127.0.0.1:3000/cards?_start=1&_end=10', true);

  xhr.onload = function () {
    if (this.status = 200) {
      const response = this.responseText;
      console.log(response);
    }
  }

}

//CAROUSEL LOAD


// CAROUSEL
carousel = (function () {
  // Variables
  var box = document.querySelector('.carouselbox');
  var next = box.querySelector('.next');
  var prev = box.querySelector('.prev');
  var items = box.querySelectorAll('.content li');
  var counter = 0;
  var amount = items.length;
  var current = items[0];
  box.classList.add('active');

  // Navigation functions for buttons
  function navigate(direction) {
    current.classList.remove('current');
    counter = counter + direction;
    if (direction === -1 &&
      counter < 0) {
      counter = amount - 1;
    }
    if (direction === 1 &&
      !items[counter]) {
      counter = 0;
    }
    current = items[counter];
    current.classList.add('current');
  }

  // Event Listener for the next button
  next.addEventListener('click', function (ev) {
    navigate(1);
  });

  // Event Listener for the previous button
  prev.addEventListener('click', function (ev) {
    navigate(-1);
  });

  navigate(0);
})();