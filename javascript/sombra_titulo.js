$(function (){
	/*obtener objeto de JQuery para manipula el titulo*/
	var titulo= $("#titulo");
	/*alert(titulo.html());
	titulo.html("oTRA CONSULTORA");
	alert(titulo.html());*/
	titulo.click(function(){
		//alert("hola");
		titulo.addClass("texto_sombreado");
	});
});
