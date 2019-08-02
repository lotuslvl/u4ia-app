
//search

function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
 














// pull over the right FOR MOBILE
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.sidenav').sidenav();

   
 $(".trash-button").click(function(){
        alert("clicked!");
        var name= $(this).attr("name");
        $("#"+ name).hide();


        //toasts appear when maybe is clicked 
M.toast({html: 'Added to Maybe List!'})


//toasts appear when maybe not is clicked 
M.toast({html: 'Added to Maybe Not List!'})

//toasts appear when item is removed from maybe list
M.toast({html: 'Removed from list and now available in the BROWSE page.'})

$('.modal').modal();


      });













  });


  
        