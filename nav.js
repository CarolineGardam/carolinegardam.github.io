//this is a single line comment

//e.g what's below shouuld create an alert
alert('Gday!!!');

/*
this is the format for comments
that go on
multiple lines
*/


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function openMenu() {
    var x = document.getElementById("portfolioTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
