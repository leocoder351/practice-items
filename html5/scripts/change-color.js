window.onload = function() {
  console.log(window.localStorage);


  if (window.localStorage.bodyBackgroundColor) {
    document.body.style.backgroundColor = window.localStorage.bodyBackgroundColor;
  } else {

  }


  var colorSelect = document.querySelector("section.local-storage");

  document.querySelector("button[name='set-red']").onclick = function() {
    document.body.style.backgroundColor = "red";
    window.localStorage.setItem("bodyBackgroundColor", "red");
  }

  document.querySelector("button[name='set-blue']").onclick = function() {
    document.body.style.backgroundColor = "blue";
    window.localStorage.setItem("bodyBackgroundColor", "blue");
  }

  document.querySelector("button[name='set-green']").onclick = function() {
    document.body.style.backgroundColor = "green";
    window.localStorage.setItem("bodyBackgroundColor", "green");
  }



}
