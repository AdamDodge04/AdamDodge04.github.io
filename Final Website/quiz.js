var pick1 = document.getElementById("pick1");
var pick2 = document.getElementById("pick2");
var pick3 = document.getElementById("pick3");
var pick4 = document.getElementById("pick4");
var pick5 = document.getElementById("pick5");
var pick6 = document.getElementById("pick6");
var pick7 = document.getElementById("pick7");
var pick8 = document.getElementById("pick8");
var pick9 = document.getElementById("pick9");
var pick10 = document.getElementById("pick10");
var submit = document.getElementById("submit");
var score = document.getElementById("score");
var result = 0;

function calculate() {
	
	result = 0;
	
	if (pick1.value == "6,852"){
		result = result + 1;
	}
	if (pick2.value == "Ryokan"){
		result = result + 1;
	}
	if (pick3.value == "Yokohama"){
		result = result + 1;
	}
	if (pick4.value == "Germany"){
		result = result + 1;
	}
	if (pick5.value == "Kyoto"){
		result = result + 1;
	}
	if (pick6.value == "3,776m"){
		result = result + 1;
	}
	if (pick7.value == "Yes"){
		result = result + 1;
	}
	if (pick8.value == "320kmph"){
		result = result + 1;
	}
	if (pick9.value == "Tempura"){
		result = result + 1;
	}
	if (pick10.value == "2001"){
		result = result + 1;
	}
	
	score.innerHTML = result;
}

submit.addEventListener("click", calculate)