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

function run(interval, frames) {
  var int = 1;

  function func() {
    document.body.id = "b" + int;
    int++;
    if (int === frames) {
      int = 1;
    }
  }

  var swap = window.setInterval(func, interval);
}

run(7000, 19); //milliseconds, frames
