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
    if (!newName.ismaybe ||!newName.name ){
        return
    }
    // console.log(newName.name);
    // console.log(newName.nameDef);


    console.log(newName);

    // Appending new element
    // $(".name").text(newName.name);
    // $(".name-definition").text(newName.nameDef);
    newCard(newName);

});

function newCard (newName){
    var html= `<div class="card white z-depth-3 hoverable" id="${newName.name}">
    <div class="card-content">
      <p class="brief">${newName.nameDesc}</p>
      <span class="name">${newName.name}</span>
      <p class="name-definition">${newName.nameDef}</p>
      <a target="_blank" href="https://en.wikipedia.org/wiki/${newName.name}">Learn More</a>
    </div>
    
    <div class="card-action">
        <a class="like-button" id="like-value" likes=0 href="#"><i class="fas fa-thumbs-up" style="color:#3AB58B" ></i> ${newName.nameLike}</a>
        <a class="dislike-button" id="dislike-value" dislikes=0 href="#"> <i class="fas fa-thumbs-down" style="color:#3AB58B" ></i>  ${newName.nameDislike} </a>  
        <a class="trash-button" name="${newName.name}" href="#" " > <i class="fas fa-trash" style="color:rgb(98, 98, 98)" ></i> <p> Remove From List</p> </a>        
        
    
    </div>
  </div>` 
  var element= $("<div>") // codument.createElement("div")
  element.html(html)
  $("#card-list").prepend(element)
  console.log(element);


  var id;

$(".trash-button").on("click", function (event) {

id = $(this).attr("name");
$("#"+ id+ "").hide();

});




}



