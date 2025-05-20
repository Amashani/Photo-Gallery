// JavaScript Document
var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");
			
 function openfullImg(pic)
 {
	fullImgBox.style.display = "flex";
	fullImg.src = pic;
 }
 function closefullImgBox()
 {
	fullImgBox.style.display = "none";
 }