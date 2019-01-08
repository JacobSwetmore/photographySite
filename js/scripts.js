let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("logoButton");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

let header = document.getElementsByTagName("BODY")[0];

// var backgrounds = new Array("URL(bgimage1.jpg)", "URL(bgimage2.jpg)");

// var current = 0;

// function nextBackground() {
//   current = current % backgrounds.length;
//   //   document.body.style.backgroundImage = backgrounds[current];
//   document.body.classList.toggle("image2");
//   current++;
//   console.log("hi");
// }
// setInterval(nextBackground, 5000);

// document.body.style.backgroundImage = backgrounds[0];



function run(interval, frames) {
    var int = 1;
    
    function func() {
        document.body.id = "b"+int;
        int++;
        if(int === frames) { int = 1; }
    }
    
    var swap = window.setInterval(func, interval);
}

run(5000, 4); //milliseconds, frames