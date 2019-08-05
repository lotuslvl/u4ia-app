
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


// Global name variable

var trueName;
var selectedGender;




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
}, function (errorObject) {
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
// Whenever a user clicks the click button we store their login info in firebase
$("#submit-info").on("click", function (event) {
  event.preventDefault();

  // Get the input values
  var firstName = $("#first_name").val();
  var userEmail = $("#email").val().trim();
  var userPassword = $("#password").val().trim();

  // Log the Bidder and Price (Even if not the highest)
  console.log(firstName);
  console.log(userEmail);
  console.log(userPassword);

  // if (bidderPrice > highPrice) {

  //   // Alert
  //   alert("You are now the highest bidder.");

  // Save the new price in Firebase
  database.ref().push({
    firstName: firstName,
    userEmail: userEmail,
    userPassword: userPassword

  });


  //collected the click of the maybe/maybenot button


  //   // Log the new High Price
  //   console.log("New High Price!");
  //   console.log(bidderName);
  //   console.log(bidderPrice);


  //   // Store the new high price and bidder name as a local variable (could have also used the Firebase variable)
  //   highBidder = bidderName;
  //   highPrice = parseInt(bidderPrice);

  //   // Change the HTML to reflect the new high price and bidder
  //   $("#highest-bidder").text(bidderName);
  //   $("#highest-price").text("$" + bidderPrice);
  // } else {

  //   // Alert
  //   alert("Sorry that bid is too low. Try again.");
  // }
});




//API Code



//lookup
// var queryURL = "https://www.behindthename.com/api/lookup.json?name=joe&key=jo289062920";
// console.log(queryURL);

// //related names
// var queryURL = "https://www.behindthename.com/api/related.json?name=joe&key=jo289062920";
// console.log(queryURL);

// //random names
// var queryURL = "https://www.behindthename.com/api/random.json?name=joe&key=jo289062920";
// console.log(queryURL);

// //gender name probability 
// var queryURL = "https://api.genderize.io?name=taylor&apikey=d29a290e5cddfa95a00b07b0457d64f6";
// console.log(queryURL);

//   var queryURL = "https://www.behindthename.com/api/lookup.json?name=joe&key=jo289062920";
//   console.log(queryURL);

//   var queryURL = "https://www.behindthename.com/api/lookup.json?name=joe&key=jo289062920";
//   console.log(queryURL)

// info secdtion = "http://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=" + results[0] +"&rvsection=0"


var getRandomNameFacts = function () {

  var newName = {
    nameDesc: "",
    name: "",
    nameDef: "",
  }
 

  var queryURL;
  var selectedCountry = $("#country :selected").attr("code");


  selectedGender = $("#genderexpression :selected").attr("code");
  var selectedGenderShort = $("#genderexpression :selected").attr("shortcode");

 if (selectedCountry===undefined) {

  queryURL = "https://www.behindthename.com/api/random.json?&gender=&number=6&key=jo289062920";


}

else {

  queryURL = "https://www.behindthename.com/api/random.json?usage="+ selectedCountry+"&gender="+ selectedGenderShort+ "&number=1&key=jo289062920";

}






  $.ajax({
    url: queryURL,
    method: 'GET'
  })
    .done(function (response) {
      // grabs the data
      var results = response.names;
      // console.log(results);
      //empties the div before adding more gifs

      newName.name=(results[0]);
      trueName= results[0];
      console.log(results[0]);
     

      // var queryURL3 = "https://en.wikipedia.org/wiki/" + results[0];
      // console.log(queryURL3);
      // $.ajax({url: queryURL3, 
      // method: 'GET'})
      // .done(function(response) {
      //       // grabs the data
      //     // var results = response.names;
      //     // console.log(results);
      //     //empties the div before adding more gifs

      //     console.log (results[0]);
      //     // $('#name-1').text(results[0]);

      var queryURL5 = "https://api.genderize.io?name=" + results[0] + "&apikey=d29a290e5cddfa95a00b07b0457d64f6";
      // console.log(queryURL);
      $.ajax({
        url: queryURL5,
        method: 'GET'
      })
        .done(function (response) {
          console.log(response);

          
        
            newName.nameDesc = selectedGender;
            
   




        })

      var queryURL2 = "https://en.wikipedia.org/api/rest_v1/page/summary/" + results[0] + "?redirect=true";
      // console.log(queryURL);
      $.ajax({
        url: queryURL2,
        method: 'GET'
      })
        .done(function (response) {
         
          // grabs the data
          var results = "noresults"
          
          results= response.extract;
          

          newName.nameDef = results;

       
          
          if (results && results.length >= 50) {


            $(".name-definition").text(results);
            
            $(".learnmore").attr("href", "https://en.wikipedia.org/wiki/"+ newName.name);
            // newCard(newName)
            $(".brief").text(selectedGender);
            $('#name-1').text(trueName);
                     
          }
          
          else {
            getRandomNameFacts();

          }

        })


    }).catch(function (error) {

      console.log(error);
      getRandomNameFacts();
    })

}

getRandomNameFacts();
//collect info into firebase if maybe not is clicked
//declare variables
var displayedName;
var nameDesc;
var nameDef;
var ismaybe;

$(".maybe-button").on("click", function (event) {
  event.preventDefault();

  displayedName = $(".name").text();
  nameDesc = $(".brief").text();
  nameDef = $("#def1").text();

  ismaybe = true;

  console.log(displayedName);


  database.ref().push({
    name: displayedName,
    nameDesc: nameDesc,
    nameDef: nameDef,
    ismaybe: ismaybe


  });

  getRandomNameFacts();
});


$("#maybenot-button").on("click", function (event) {
  event.preventDefault();

  displayedName = $(".name").text();
  nameDesc = $(".brief").text();
  nameDef = $("#def1").text();
  ismaybe = false;

  console.log(displayedName);


  database.ref().push({
    name: displayedName,
    nameDesc: nameDesc,
    nameDef: nameDef,
    ismaybe: ismaybe


  });

  getRandomNameFacts();

});





