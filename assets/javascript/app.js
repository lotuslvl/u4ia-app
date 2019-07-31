
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD-xaonkjtvgOwQz_Me7p7W9YGvkNONUG4",
    authDomain: "u4ia-fcb91.firebaseapp.com",
    databaseURL: "https://u4ia-fcb91.firebaseio.com",
    projectId: "u4ia-fcb91",
    storageBucket: "",
    messagingSenderId: "135347478276",
    appId: "1:135347478276:web:528ff3e38518ab79"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Create a variable to reference the database.
var database = firebase.database();

var nameLike = 0;
var nameDislike = 0;
var likeCounter = nameLike;
var dislikeCounter = 0;

// var clickCounter = initialValue;
// --------------------------------------------------------------
//SHOWS THE # OF LIKES

// At the initial load and on subsequent data value changes, get a snapshot of the current data. (I.E FIREBASE HERE)
// This callback keeps the page updated when a value changes in firebase.
database.ref().on("value", function likecount(snapshot) {
    // We are now inside our .on function...
  
    // Console.log the "snapshot" value (a point-in-time representation of the database)
    console.log(snapshot.val());
    // This "snapshot" allows the page to get the most current values in firebase.
  
    // Change the value of our likeCounter to match the value in the database
    likeCounter = snapshot.val().nameLike;
  
    // Console Log the value of the clickCounter
    console.log(likeCounter);
  
    // Change the HTML using jQuery to reflect the updated clickCounter value
    $("#like-value").text(likeCounter);
    // Alternate solution to the above line
    // $("#click-value").html(clickCounter);
  

  });
  
  //SHOWS THE # OF DISLIKES

// At the initial load and on subsequent data value changes, get a snapshot of the current data. (I.E FIREBASE HERE)
// This callback keeps the page updated when a value changes in firebase.
database.ref().on("value", function dislikecount(snapshot) {
    // We are now inside our .on function...
  
    // Console.log the "snapshot" value (a point-in-time representation of the database)
    console.log(snapshot.val());
    // This "snapshot" allows the page to get the most current values in firebase.
  
    // Change the value of our likeCounter to match the value in the database
    dislikeCounter = snapshot.val().nameDislike;
  
    // Console Log the value of the clickCounter
    console.log(dislikeCounter);
  
    // Change the HTML using jQuery to reflect the updated clickCounter value
    $("#dislike-value").text(dislikeCounter);
    // Alternate solution to the above line
    // $("#click-value").html(clickCounter);
  
  // If any errors are experienced, log them to console.
  }, function(errorObject) {
    console.log("The read failed: " + errorObject.code);
  });

// Functions
// ================================================================================
//SENDS THE # OF TIME THE LIKE BUTTON WAS PRESSED TO FIREBASE

// On Click
$("#like-button").on("click", function likecounter() {

    // Add 1 to nameLike
    nameLike++;
    
    console.log(nameLike);
    // **** Store Click Data to Firebase in a JSON property called clickCount *****
    // **** Note how we are using the Firebase .set() method ****
    // **** .ref() refers to the path you want to save your data to
    // **** Since we left .ref() blank, it will save to the root directory
    database.ref().update({
        nameLike: nameLike,

    });
  
        });

        //SENDS THE # OF TIME THE DISLIKE BUTTON WAS PRESSED TO FIREBASE

        $("#dislike-button").on("click", function dislikecounter() {

            // Add 1 to nameLike
            nameDislike++;
            
            console.log(nameDislike);
            // **** Store Click Data to Firebase in a JSON property called clickCount *****
            // **** Note how we are using the Firebase .set() method ****
            // **** .ref() refers to the path you want to save your data to
            // **** Since we left .ref() blank, it will save to the root directory
            database.ref().update({
                nameDislike: nameDislike
        
            });
          
                });

//API Code

$(document).ready(function() {
  //lookup
var queryURL = "https://www.behindthename.com/api/lookup.json?name=joe&key=jo289062920";
console.log(queryURL);

//related names
var queryURL = "https://www.behindthename.com/api/related.json?name=joe&key=jo289062920";
console.log(queryURL);

//random names
var queryURL = "https://www.behindthename.com/api/random.json?name=joe&key=jo289062920";
console.log(queryURL);

  var queryURL = "https://www.behindthename.com/api/lookup.json?name=joe&key=jo289062920";
  console.log(queryURL);

  $.ajax({url: queryURL, 
  method: 'GET'})
  .done(function(response) {
      // grabs the data
      console.log(response)
      var results = response.names
      console.log(results)
      // $("#names").html(results.join(' '));
  });
})

