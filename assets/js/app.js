
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


  // Save the new price in Firebase
  database.ref().push({
    firstName: firstName,
    userEmail: userEmail,
    userPassword: userPassword

  });

});





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
  selectedLength= $("#namelength :selected").attr("code");

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


      if (results === undefined || results.length == 0) {
        getRandomNameFacts();
        return
          }

    

      newName.name=(results[0]);
    
      trueName= results[0];
      
          //checks for short or long filters
      if (selectedLength==="short" && trueName.length >5) {
        getRandomNameFacts();
        return

      }

      else if (selectedLength==="long" && trueName.length <=5) {
        getRandomNameFacts();
        return

      }

      

      var queryURL2 = "https://en.wikipedia.org/api/rest_v1/page/summary/" + results[0] + "?redirect=true";
      // console.log(queryURL);
      $.ajax({
        url: queryURL2,
        method: 'GET'
      })
        .done(function (response) {
         
          // grabs the data
          var descResults = "noresults";
          if (descResults === undefined || descResults.length == 0) {
            getRandomNameFacts();
            return
              }

              descResults= response.extract;
          

          newName.nameDef = descResults;
          newName.nameDesc = selectedGender;
 
          
          if (descResults && descResults.length >= 50) {


            $(".name-definition").text(descResults);
            
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
    ismaybe: ismaybe,
    nameLike: 0,
    nameDislike: 0,


  });

  getRandomNameFacts();
});


$('#country').change(function(){
  getRandomNameFacts();
})

$('#namelength').change(function(){
  getRandomNameFacts();
})

$('#genderexpression').change(function(){
  getRandomNameFacts();
})


$(".skip-button").on("click", function (event) {
  event.preventDefault();

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
    ismaybe: ismaybe,


  });

  getRandomNameFacts();

});





