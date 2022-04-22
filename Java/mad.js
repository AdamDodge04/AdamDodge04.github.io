	var q1 = document.getElementById("q1");
	var q2 = document.getElementById("q2");
	var q3 = document.getElementById("q3");
	var q4 = document.getElementById("q4");
	var q5 = document.getElementById("q5");	
	var q6 = document.getElementById("q6");	
	var q7 = document.getElementById("q7");	
	var q8 = document.getElementById("q8");	
	var q9 = document.getElementById("q9");	
	var q10 = document.getElementById("q10");	
	var q11= document.getElementById("q11");	
	var q12 = document.getElementById("q12");	
	var q13 = document.getElementById("q13");	
	var q14 = document.getElementById("q14");	
	var button = document.getElementById("butt");
	var done = document.getElementById("mad")
	
	
	function madLib() {
		mad.innerHTML = "American children are fascinated by " + q1.value + " stuff-like stories that scare the " + q2.value + " off them or make their " + q3.value + " stand on end. Scientists say this is because being frightened causes the " + q4.value + "  gland to function and puts" + q5.value + "into their blood. And everyone knows that makes kids feel " + q5.value + " when they are scared by a movie or a/an " + q6.value + ", boys laugh and holler and " + q7.value + ". But girls cover their eyes with their " + q8.value + " and keep screaming and " + q10.value + ". Most kids get over this by the time they are" + q11.value + " years old. Then they like movies about cars " + q12.value + " or cops shooting " + q13.value + ", or if they are girls they like movies about a boy meeting a/an " + q14.value + " and falling in love. Of course, that can be scary too."
	}

	button.addEventListener("click", madLib)