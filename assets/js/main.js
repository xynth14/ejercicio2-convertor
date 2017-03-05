//Convertir de Farenheit a Celsius
function convertirCelsius(){
	var farenheit = parseInt(document.getElementById("farenheit").value);
	if(isNaN(farenheit)){
		alert("Ingrese Farenheit");
	}else{	
		var celsius = (farenheit - 32) * 5/9;
		document.getElementById("celsius").value = celsius.toFixed(2);
	}
}

//Convertir de Celsius a Farenheit
function convertirFarenheit(){
	var celsius = parseInt(document.getElementById("celsius").value);
	if(isNaN(celsius)){
		alert("Ingrese Celsius");
	}else{	
		var farenheit = (9/5 * celsius) + 32;
		document.getElementById("farenheit").value = (farenheit).toFixed(2);
	}
}