var pick = document.getElementById("pick");
var result = document.getElementById("result");
var s1 = document.getElementById("s1");

function check() {	
	
	if (pick.value == "5") {
		
	document.getElementById("result").innerHTML = "CORRECT";
		
	}
	
	else {
	result.innerHTML = "WRONG! BAD! YOU SUCK! IDIOT!";
	}
	
}
	
	

s1.addEventListener("click", check)