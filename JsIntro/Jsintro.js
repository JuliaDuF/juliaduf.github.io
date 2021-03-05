/* Hi */
console.log("hi");

/* 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 */
var myname = "Julia";
console.log(myname);

/* integer */
var favnumber = 7; 
console.log(favnumber);

/* string */
const num = 7;
console.log(num.toString());

  /* also a string? but not correct */
  /* var q1number = '7px';
  var q1number = parseInt(q1number, 10); */

/* boolean */
console.log(null || 7);

/* array */
console.log('J','U','L','I','A');

/* array 3 values */
console.log(7, 'Julia', true);

  /* also an array? but not correct */
  /* var letters = ["J", "U", "L", "I", "A"];
  console.log(letters) */

  /* also an array? but not correct */
  /* var types = ["J", 26, false];
  console.log(types) */

/* string combination */
var firstname = 'Julia';
var lastname = 'Du';
console.log(firstname,lastname);

/* integers combination */
var favnumbers = 7 + 7; 
console.log(favnumbers);

  /* this also works */
  /* console.log(25 + 75) */


/* 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 */


/* only log firt & last items in an array */
var myname = "Julia";

function firstlast(array) {
  var first = myname[0];
  var last = myname [myname.length-1];

  var objOutput = {};
  objOutput[first] = last

  return objOutput;
}

  var display = firstlast(myname);
  console.log(display);


/* 3 */
/* number of string in length property ‘supercalifragilisticexpialidocious’ */
var lengthstring = 'supercalifragilisticexpialidocious';
console.log(lengthstring.length);

/* 4 */
/* first equal to last */
var first_name = 'Julia';
var last_name = 'Du';
console.log(first_name) == console.log(last_name);

/* 5 */
/*  loop the array */
var loopthearray = ['J', 'L', 'A'];
loopthearray.forEach(function(item) {
  console.log(item);
});

/* 6 */
/* conditional statement check time 7pm & 9:40pm. */
var time = new Date().getHours();
if (time >= 19 & time <=21.40) {
  console.log ("Not_Yet");
} 
else {
  console.log ("Evening_class_begins");
}

/* 7 */
/* check date & unique message for website each week. */
var today = new Date();

var date = today.getFullYear()+'pinterest.com'+(today.getMonth()+1)+'pinterest.com'+today.getDate(); /* not sure how this part works */

if (date = 2021 + 3 + 5) {
  console.log ("This week!");
} 
else {
  console.log ("Not this week");
}

if (window.location.hostname == 'pinterest.com') {
  console.log('Pin your ideas')
} else {
  console.log('Share next time')
}


/* 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8*/
/* 4 arrays consisting of the following items. Define variables */

/* fav 3 restaurants */
console.log("My favorite restaurants:");
var restaurant = ['Raku Ramen NYC', 'Baekjeong BBQ', '京兆尹'];
restaurant.forEach(function(item) {
  console.log(item);
});

  /* 3 things cant do in pandemic*/
console.log("Fav things cant do in pandemic:");
var cantdo = ['Visit other cities', 'Go to Central Park', 'Back in campus'];
cantdo.forEach(function(item) {
  console.log(item);
});

  /* fav 3 places in NYC */
console.log("Fav places in NYC:");
var places = ['Fall in Central Park', 'Winter in MoMA', 'Spring on The Highline'];
places.forEach(function(item) {
  console.log(item);
});

  // - Your favorite 3 movies : // 
console.log("Fav movies:");
var movies = ['BBC Documentaries', 'Amelie', 'The Grand Budapest Hotel'];
movies.forEach(function(item) {
  console.log(item);
});

/*

/* 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 */
/* An array of arrays. Define a var. */

var restaurant = ['My favorite restaurants:','Raku Ramen NYC', 'Baekjeong BBQ', '京兆尹'];
var cantdo = ['Fav things cant do in pandemic:','Visit other cities', 'Go to Central Park', 'Back in campus'];
var places = ['Fav places in NYC:','Fall in Central Park', 'Winter in MoMA', 'Spring on The Highline'];
var movies = ['Fav movies:','BBC Documentaries', 'Amelie', 'The Grand Budapest Hotel'];

var items = [[restaurant],[cantdo],[places],[movies]];
console.log(items);



/* 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10*/
/* Loop through array of arrays */

console.log("My favorite restaurants:");
var restaurant = ['Raku Ramen NYC', 'Baekjeong BBQ', '京兆尹'];
var arrayLength = restaurant.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(restaurant[i]);
}

console.log("Fav things cant do in pandemic:");
var cantdo = ['Visit other cities', 'Go to Central Park', 'Back in campus'];
var arrayLength = cantdo.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(cantdo[i]);
}

console.log("Fav places in NYC:");
var places = ['Fall in Central Park', 'Winter in MoMA', 'Spring on The Highline'];
var arrayLength = places.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(places[i]);
}

console.log("Fav movies:");
var movies = ['BBC Documentaries', 'Amelie', 'The Grand Budapest Hotel'];
var arrayLength = movies.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(movies[i]);
}



/* 11 */
//Create a nested for loop that loops through the array of your favorite items and logs each individual item. The first loop should log the category of the item, while the nested loop should log each individual item in that category.//

/*
console.log("My favorite restaurants:");

var queue1 = new Array();

queue1.push('Raku Ramen NYC');
queue1.push('Baekjeong BBQ');
queue1.push('京兆尹');

console.log(queue1.shift());  
console.log(queue1.shift());  
console.log(queue1.shift()); 


console.log("Fav things cant do in pandemic:");

var queue2 = new Array();

queue2.push('Visit other cities');
queue2.push('Go to Central Park');
queue2.push('Back in campus');

console.log(queue2.shift());  
console.log(queue2.shift());  
console.log(queue2.shift());


console.log("Fav places in NYC:");
var queue3 = new Array();

queue3.push('Fall in Central Park');
queue3.push('Winter in MoMA');
queue3.push('Spring on The Highline');

console.log(queue3.shift());  
console.log(queue3.shift());  
console.log(queue3.shift());


console.log("Fav movies:");
var queue4 = new Array();

queue4.push('BBC Documentaries');
queue4.push('Amelie');
queue4.push('The Grand Budapest Hotel');

console.log(queue4.shift());  
console.log(queue4.shift());  
console.log(queue4.shift()); 
*/


