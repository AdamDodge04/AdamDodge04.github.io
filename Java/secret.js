
function secret() {	
	
	if (document.getElementById("password").value == "hello") {
		
	document.getElementById("pass").innerHTML = "ACCESS GRANTED"
		
	}
	
	if (document.getElementById("password").value != "hello") {
		
		document.getElementById("pass").innerHTML = "ACCESS DENIED"
		
	}
	
}
	
	

document.getElementById("press").addEventListener("click", secret)