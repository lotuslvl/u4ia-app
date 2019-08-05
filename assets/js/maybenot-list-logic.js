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

database.ref().on("child_added", function (snapshot) {
    var newName = snapshot.val();
    // console.log(newName.ismaybe);
    if (newName.ismaybe){
        return
    }
   


    console.log(newName);

    
    newCard(newName);

});

function newCard (newName){
    var html= `<div class="card white z-depth-3 hoverable">
    <div class="card-content">
      <p class="brief">${newName.nameDesc}</p>
      <span class="name">${newName.name}</span>
      <a class="trash-button-not" href="#" onclick="M.toast({html: 'Removed from list and now available in the BROWSE page.'})" > </i> <p> Remove From List</p> </a>
    </div>

  </div>` 
  var element= $("<div>") // codument.createElement("div")
  element.html(html)
  $("#card-list").prepend(element)
  console.log(element);


}