console.log ("Hi Bookshelf");

var Airtable = require("airtable");
console.log(Airtable);

// use the airtable librar to get a variable that represents one of our bases
var base = new Airtable({ apiKey: "keyLcTgqOkYLvbG5V" }).base(
  "appRRvbmfdP970T4U"
);

//get the "books" table from the base, select ALL the records, and specify the functions that will receive the data
base("table").select({}).eachPage(gotPageOfBooks, gotAllBooks);

// an empty array to hold our book data
const books = [];

// callback function that receives our data
function gotPageOfBooks(records, fetchNextPage) {
  console.log("gotPageOfBooks()");
  // add the records from this page to our books array
  books.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllBooks(err) {
  console.log("gotAllBooks()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading books");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  consoleLogBooks();
  showBooks();
}

// just loop through the books and console.log them
function consoleLogBooks() {
  console.log("consoleLogBooks()");
  books.forEach((book) => {
    console.log("Book:", book);
  });
}


// loop through the books, create an h2 for each one, and add it to the page
function showBooks() {
  console.log("showBooks()");
  books.forEach((book) => {
    const h2 = document.createElement("h2");
    h2.innerText = book.fields.credit;
    document.body.appendChild(h2);

      });
}

/* (IMAGES)
// create a container for the images
    var imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");
    imageContainer.style.right = (90 * Math.random()) + '%';
    imageContainer.style.top = (2000 * Math.random()) + '%';
    document.querySelector(".container").append(imageContainer);


// add images in containers
    var handImage = document.createElement("img");
    handImage.classList.add("hand-image");
    handImage.src = book.fields.hand_image[0].url;
    imageContainer.append(handImage);
*/

