console.log ("Hi Bookshelf");

var Airtable = require("airtable");
console.log(Airtable);

// use the airtable librar to get a variable that represents one of our bases
var base = new Airtable({ apiKey: "patHkGiZNgu7NifgW.0c526adf64150e165ed2f6b662f571a2aa575e0f1cc01fec6be9ae26c054a1fc" }).base(
  "appRRvbmfdP970T4U"
);

//get the "books" table from the base, select ALL the records, and specify the functions that will receive the data
base("table").select({}).eachPage(gotPageOfHands, gotAllHands);

// an empty array to hold our book data
const hands = [];

// callback function that receives our data
function gotPageOfHands(records, fetchNextPage) {
  console.log("gotPageOfHands()");
  // add the records from this page to our books array
  hands.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllHands(err) {
  console.log("gotAllHands()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading books");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  consoleLogHands();
  showHands();
}

// just loop through the books and console.log them
function consoleLogHands() {
  console.log("consoleLogHands()");
  hands.forEach((hand) => {
    console.log("Hand:", hand);
  });
}


// loop through the images (books), create an h3 for each one, and add it to the page
function showHands() {
  console.log("showHands()");
    hands.forEach((hand) => {
   /* const h3 = document.createElement("h3");
    h3.innerText = hand.fields.genre;
    document.body.appendChild(h3); */


// create a container for the images
    var imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");
    imageContainer.style.right = (90 * Math.random()) + '%';
    imageContainer.style.top = (2000 * Math.random()) + '%';
    document.querySelector(".container").append(imageContainer);

// add images in containers
    var handImage = document.createElement("img");
    handImage.classList.add("hand-image");
    handImage.src = hand.fields.hand_image[0].url;
    imageContainer.append(handImage);




function hoverElement(event) {
  if (event.target.tagName == 'IMG') {
    event.target.classList.add('yellow');
  }
}
let poem = document.querySelector('.borges-poem');
poem.addEventListener('mouseover', hoverElement);


  });
}


/*
// create a container for the leftbar navigation
    var leftbarContainer = document.createElement("div");
    leftbarContainer.classList.add("leftbar-container");
    leftbarContainer.style.right = (90 * Math.random()) + '%';
    leftbarContainer.style.top = (90 * Math.random()) + '%';
    document.querySelector(".leftbarcontainer").append(leftbarContainer);

// add letter in containers
    var letterText = document.createElement("text");
    letterText.classList.add("letter-text");
    letterText.src = book.fields.Letter[0].url;
    imageContainer.append(letterText);

*/


/*

// create a container for the videos
    var videoContainer = document.createElement("div");
    videoContainer.classList.add("video-container");
    videoContainer.style.right = (90 * Math.random()) + '%';
    videoContainer.style.top = (2000 * Math.random()) + '%';
    document.querySelector(".container2").append(videoContainer);


// add videos in containers
    var handVideo = document.createElement("video");
    handVideo.classList.add("hand-video");
    handVideo.src = book.fields.hand_video[0].url;
    imageContainer.append(handVideo);
    
    */


/*
// create the book-spines on the shelf
function showBooks() {
  console.log("showBooks()");

  // find the shelf element
  const shelf = document.getElementById("shelf");

  // loop through the books loaded from the Airtable API
  books.forEach((book) => {
    // create the div, set its text and class
    const div = document.createElement("div");
    div.innerText = book.fields.title;
    div.classList.add("book-spine");
    // when the user clicks this book spine, call showBook and send the book data and this spine element
    div.addEventListener("click", () => {
      showBook(book, div);
    });
    // put the newly created book spine on the shelf
    shelf.appendChild(div);
  });
}

// show the detail info for a book, and highlight the active book-spine
function showBook(book, div) {
  console.log("showBook()", book);

  // find the book detail element
  const bookDetail = document.getElementById("book-detail");

  // populate the template with the data in the provided book
  bookDetail.getElementsByClassName("title")[0].innerText = book.fields.title; //
  bookDetail.getElementsByClassName("description")[0].innerText =
    book.fields.description;
  bookDetail.getElementsByClassName("more")[0].href = book.fields.more;
  bookDetail.getElementsByClassName("cover-image")[0].src =
    book.fields.cover_image[0].url;

  // remove the .active class from any book spines that have it...
  const shelf = document.getElementById("shelf");
  const bookSpines = shelf.getElementsByClassName("active");
  for (const bookSpine of bookSpines) {
    bookSpine.classList.remove("active");
  }
  // ...and set it on the one just clicked
  div.classList.add("active");

  // reveal the detail element, we only really need this the first time
  // but its not hurting to do it more than once
  bookDetail.classList.remove("hidden");
}
*/
