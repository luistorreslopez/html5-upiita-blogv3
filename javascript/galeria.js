$(function(){
	var preview=$("#preview img");
	var principal=$("#principal img");
	
	preview.click(function(evento){
		//target identificador alobjeto que detona la caja
		var quienfue= $(evento.target);
		var ruta=quienfue.data("ruta-principal");
		/*oculta la caja */
		principal.slideUp("slow",function(){
			/*cambia la imagen*/
			principal.attr("src",ruta);
			/*muestar la imagen*/
			principal.slideDown(2000);	
		});
		
	});
});
