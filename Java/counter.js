var count = 0;

function minus() {
  count = count - 1;
	document.getElementById("zero").innerHTML = count
}

function plus() {
  count = count + 1;
	document.getElementById("zero").innerHTML = count
	if (count == 69) {
		document.getElementById("zero").innerHTML = "NICE:)";
	}
}
function pluss() {
  count = count + 5;
	document.getElementById("zero").innerHTML = count
}
function plusss() {
  count = count + 100;
	document.getElementById("zero").innerHTML = count
}
function times() {
  count = count * 10;
	document.getElementById("zero").innerHTML = count
}
function minusThree() {
  count = count - 3;
	document.getElementById("zero").innerHTML = count
}
function minusHundo() {
  count = count - 100;
	document.getElementById("zero").innerHTML = count
}
function divide() {
  count = count / 2;
	document.getElementById("zero").innerHTML = count
}

	
document.getElementById("minus").addEventListener("click", minus);
document.getElementById("plus").addEventListener("click", plus);
document.getElementById("pluss").addEventListener("click", pluss);
document.getElementById("plusss").addEventListener("click", plusss);
document.getElementById("times").addEventListener("click", times);
document.getElementById("minuss").addEventListener("click", minusThree);
document.getElementById("minusss").addEventListener("click", minusHundo);
document.getElementById("divide").addEventListener("click", divide);
