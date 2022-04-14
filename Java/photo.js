var b1 = document.getElementById("grand")
var b2 = document.getElementById("sedona")
var b3 = document.getElementById("plane")
var b4 = document.getElementById("bird")
var b5 = document.getElementById("dog1")
var b6 = document.getElementById("dog2")
var b7 = document.getElementById("duluth")
var b8 = document.getElementById("frog")
var b9 = document.getElementById("golf")
var b10 = document.getElementById("redmoon")

var image = document.getElementById("image")

function changeG(){
	image.src = "Images/grand.jpg"
}
function changeS(){
	image.src = "Images/Hiking Photo.jpg"
}
function changeP(){
	image.src = "Images/plane.jpg"
}
function changeB(){
	image.src = "Images/bird.jpg"
}
function changeDo(){
	image.src = "Images/dog1.jpg"
}
function changeDt(){
	image.src = "Images/dog2.jpg"
}
function changeDu(){
	image.src = "Images/duluth.jpg"
}
function changeF(){
	image.src = "Images/frog.jpg"
}
function changeGo(){
	image.src = "Images/golf.jpg"
}
function changeR(){
	image.src = "Images/red moon.jpg"
}

b1.addEventListener("click", changeG)
b2.addEventListener("click", changeS)
b3.addEventListener("click", changeP)
b4.addEventListener("click", changeB)
b5.addEventListener("click", changeDo)
b6.addEventListener("click", changeDt)
b7.addEventListener("click", changeDu)
b8.addEventListener("click", changeF)
b9.addEventListener("click", changeGo)
b10.addEventListener("click", changeR)