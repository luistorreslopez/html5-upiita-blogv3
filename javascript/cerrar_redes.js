$(function(){
	var cajita= $("#siguenos div");
	var enlace= $("#cerrar");
	enlace.click(function(){
		alert("click!!");
		cajita.fadeToogle("slow");
		var estado = enlace.attr("data_estado");
		if(estado === "cerrar")
		{
			enlace.attr("data_estado","abrir");
			enlace.html("abrir");
		}
		else
		{
			enlace.html("data_estado","cerrar");
			enlace.html("cerrar");
		}
		return false;
	});
	
});
	

