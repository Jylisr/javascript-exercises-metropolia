let triggerElement = document.getElementById("trigger");
let targetImage = document.getElementById("target");

let originalImageSrc = "img/picA.jpg";
let alternativeImageSrc = "img/picB.jpg";

triggerElement.addEventListener("mouseover", function() {
  targetImage.src = alternativeImageSrc;
});

triggerElement.addEventListener("mouseout", function() {
  targetImage.src = originalImageSrc;
});