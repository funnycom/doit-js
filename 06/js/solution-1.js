const imgBox = document.querySelector("#container > img");

imgBox.addEventListener("mouseover", function() {
  imgBox.src = "images/pic-6.jpg";
});
imgBox.addEventListener("mouseout", function() {
  imgBox.src="images/pic-1.jpg";
});