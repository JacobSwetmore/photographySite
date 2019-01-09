let modal = document.getElementById("myModal");

let btn = document.getElementById("logoButton");

let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
};

span.onclick = function() {
  modal.style.display = "none";
};

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

run(7000, 19);
