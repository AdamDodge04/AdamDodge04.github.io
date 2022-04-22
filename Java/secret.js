
var enteredPass



function secret() {	
	enteredPass = document.getElementById("password").value
	if (enteredPass == "hello") {
		
	document.getElementById("pass").innerHTML = "ACCESS GRANTED"
	document.getElementById("pass").style.color = "green";
	window.location = "index.html"	
		
	}
	
	else {
		
		document.getElementById("pass").innerHTML = "The password " + enteredPass + " was the wrong password.";
		document.getElementById("pass").style.color = "red";
	}
	
}
	
	

document.getElementById("press").addEventListener("click", secret)