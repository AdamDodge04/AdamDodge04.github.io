
function secret() {	
	
	if (document.getElementById("password").value == "hello") {
		
	document.getElementById("pass").innerHTML = "ACCESS GRANTED"
	document.getElementById("pass").style.color = "green";
	window.location = "index.html"	
		
	}
	
	else {
		
		document.getElementById("pass").innerHTML = "ACCESS DENIED";
		document.getElementById("pass").style.color = "red";
	}
	
}
	
	

document.getElementById("press").addEventListener("click", secret)