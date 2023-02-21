var self = document.getElementById("self-photo");
var dditems = document.getElementById("dropdown-items");
var body = document.getElementById("body");

dditems.style.display = "none";

self.addEventListener("click", () => {
  if (dditems.style.display === "none") {
    dditems.style.display = "block";
  } else {
    dditems.style.display = "none";
  }
});