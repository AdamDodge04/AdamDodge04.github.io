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
	
	if (pick1.value == "5"){
		result = result + 1;
	}
	if (pick2.value == "Elden Ring"){
		result = result + 1;
	}
	if (pick3.value == "Watermelon"){
		result = result + 1;
	}
	if (pick4.value == "FromSoft"){
		result = result + 1;
	}
	if (pick5.value == "2004"){
		result = result + 1;
	}
	if (pick6.value == "Here"){
		result = result + 1;
	}
	if (pick7.value == "True"){
		result = result + 1;
	}
	if (pick8.value == "Personal Computer"){
		result = result + 1;
	}
	if (pick9.value == "Skiing"){
		result = result + 1;
	}
	if (pick10.value == "17 years"){
		result = result + 1;
	}
	
	score.innerHTML = result;
}

submit.addEventListener("click", calculate)