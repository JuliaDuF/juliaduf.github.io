
let button = document.querySelector('buttonClickHere');
let button2 = document.querySelector('buttonClickHereTwo');
let button3 = document.querySelector('buttonClickHereThree');
let button4 = document.querySelector('buttonClickHereFour');
let container = document.querySelector('#container');
let box1Id = document.querySelector('#box1Id');
let box2Id = document.querySelector('#box2Id');
let box3Id = document.querySelector('#box3Id');
let box4Id = document.querySelector('#box4Id');
let box5Id = document.querySelector('#box5Id');
let textCountId = document.querySelector('#textCountId');
let removeId = document.querySelector('#removeId');

/* click to add boba */
buttonClickHere.addEventListener('click', function(event) {
  let image = document.createElement('img');
  image.classList.add('new-content');
  image.src = './boba.png';
  image.style.right = (40 * Math.random()) + '%';
  image.style.top = (90 * Math.random()) + '%';
  container.appendChild(image);

  var counter = document.querySelectorAll('.new-content');
  var counterText = counter.length + ' ';
  if (counter.length > 1) {
    counterText += '* $0.5';
  }
  textCountId.innerHTML = counterText;
});


/* click to add pudding */
buttonClickHereTwo.addEventListener('click', function(event) {
  let image = document.createElement('img');
  image.classList.add('new-content');
  image.src = './pudding.png';
  image.style.right = (80 * Math.random()) + '%';
  image.style.top = (90 * Math.random()) + '%';
  container.appendChild(image);

  var counter = document.querySelectorAll('.new-content');
  var counterText = counter.length + ' ';
  if (counter.length > 1) {
    counterText += '* $0.5';
  }
  textCountId.innerHTML = counterText;
});

/* click to add lychee jelly */
buttonClickHereThree.addEventListener('click', function(event) {
  let image = document.createElement('img');
  image.classList.add('new-content');
  image.src = './lycheejelly.png';
  image.style.right = (80 * Math.random()) + '%';
  image.style.top = (90 * Math.random()) + '%';
  container.appendChild(image);

  var counter = document.querySelectorAll('.new-content');
  var counterText = counter.length + ' ';
  if (counter.length > 1) {
    counterText += '* $0.5';
  }
  textCountId.innerHTML = counterText;
});

/* click to add ice */
buttonClickHereFour.addEventListener('click', function(event) {
  let image = document.createElement('img');
  image.classList.add('new-content');
  image.src = './ice.png';
  image.style.right = (80 * Math.random()) + '%';
  image.style.top = (90 * Math.random()) + '%';
  container.appendChild(image);

  var counter = document.querySelectorAll('.new-content');
  var counterText = counter.length + ' ';
  if (counter.length > 1) {
    counterText += '* $0.5';
  }
  textCountId.innerHTML = counterText;
});

/* count the number */
container.addEventListener('click', function(event) {
  if (event.target.classList.contains('new-content') ) {
    event.target.remove();
  }

  var counter = document.querySelectorAll('.new-content');
  var counterText = counter.length + ' ';
  if (counter.length > 1) {
    counterText += '* $0.5';
  }
  textCountId.innerHTML = counterText;
});

/* change background color */
container.addEventListener('click', function(event) {
  var target = event.target;
  if (target.classList.contains('swatch')) {
    var color = getComputedStyle(target)['backgroundColor'];
    var boxes = document.querySelectorAll("BODY");

    boxes.forEach(function(box) {
      box.style.backgroundColor = color;
    });
  }
});

/* remove all items */
removeId.addEventListener('click', function(event) {
  var boxes = document.querySelectorAll('.new-content');
  boxes.forEach(function(box) {
    box.remove();
  })
});













