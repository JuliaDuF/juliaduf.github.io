console.log ("Hi Bookshelf");

var Airtable = require("airtable");
console.log(Airtable);

// use the airtable librar to get a variable that represents one of our bases
var base = new Airtable({ apiKey: "keyLcTgqOkYLvbG5V" }).base(
  "appVjMc2oHfSu0euG"
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
    imageContainer.style.top = (1400 * Math.random()) + '%';
    document.querySelector(".container").append(imageContainer);

// add images in containers
    var handImage = document.createElement("img");
    handImage.classList.add("hand-image");
    handImage.src = hand.fields.quotes_image[0].url;
    imageContainer.append(handImage);






/*

  //add detailed info & captions to pop up box
    var instaCaption = document.createElement("p");
    instaCaption.classList.add("insta-caption");
    instaCaption.innerText = hand.fields.insta_caption;
    imageContainer.append(instaCaption);

  //appear & disappear
  imageContainer.addEventListener("click", function(){
    instaCaption.classList.toggle("active");
    credit.classList.toggle("active");
  })

  //add detailed info & captions to pop up box
    var credit = document.createElement("p");
    credit.classList.add("credit");
    credit.innerText = hand.fields.credit;
    imageContainer.append(credit);


*/



  });
}


