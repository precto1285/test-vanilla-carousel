
//API CALL
document.getElementById('getImages').addEventListener('click', getImages);

function getImages() {
  console.log('hello world!');

  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'http://localhost:3000/cards', true);

  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      console.log(response);
      let output = '';

      // Loop through Array data
      response.forEach(function (card) {
        output += `<div class="quoteCard"><div class="card"><img src="${card.image_url}"alt="image" width="100%" height="30%"/>
       <div class="card-body"><h3><strong>${card.title}</strong></h3>
       <p>${card.text}</p>
       <h4>${card.author}</h4>
       </div></div></div>`
      })

      document.querySelector('.cards').innerHTML = output;
    }
  }

  xhr.send();

}

//CAROUSEL LOAD



/*--------------------------------------------------------------------------*/

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