let dragged = null;

let imgs = document.querySelectorAll(".imgs");
let dropBox = document.querySelectorAll(".box");

imgs.forEach((img) => {
  img.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("id", event.target.id);
  });
});
dropBox.forEach((dropping) => {
  dropping.addEventListener("dragover", function (event) {
    event.preventDefault();
  });
  dropping.addEventListener("drop", function (event) {
    let id = event.dataTransfer.getData("id");
    let Element = document.getElementById(id);
    this.append(Element);
  });
});
