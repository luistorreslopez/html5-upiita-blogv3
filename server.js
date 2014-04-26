/*obtenermos un objeto que nos premita usra la libreria exoreess*/
var nunjucks= require("nunjucks");
var express= require("express");
/*app represenyta l aplicaciobn web*/
var app= express();
app.listen(8010);

console.log("servidor levantado...");

/* configurar el sistema de tamplates*/
nunjucks.configure(__dirname +"/vistas",{express:app});
app.get("/ruta", function(request, response){ 
  response.send("bienvenido a mi pagina");
});


console.log("sistema de templates configurado");

/* configurar rutas estaticasa*/
app.use("/css",express.static(__dirname + "/css"));
app.use("/imagenes",express.static(__dirname + "/imagenes"));
app.use("/javascript",express.static(__dirname + "/javascript"));
app.use("/videos",express.static(__dirname + "/videos"));

console.log("rutas estaticas configuiradas"); 

/*responder a petici0ones get*/

app.get("/home",function(request,response){
	response.render("index.html");
});


app.get("/superGaleria",function(request,response){
	response.render("galeria.html");
});