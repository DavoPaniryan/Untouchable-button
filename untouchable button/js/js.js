let button = document.getElementById("myButton");

button.addEventListener("mouseover", function () {
  let button = document.getElementById("myButton");

  let x = Math.floor(Math.random() * window.innerWidth - 100) + "px";
  let z = Math.floor(Math.random() * window.innerHeight - 100) + "px";
  button.style.left = x;
  button.style.top = z;
});

button.addEventListener("click", function () {
  console.log("daadaa");
});
