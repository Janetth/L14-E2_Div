var arreglo=[{nombre:"Arabela",apellido:"Rojas",rol:"T.A.",cumple:"23 de Enero"},
             {nombre:"Michelle",apellido:"Seguil",rol:"T.A.",cumple:"25 de Noviembre"},
             {nombre:"Meche",apellido:"Zubieta",rol:"T.A.",cumple:"02 de Marzo"},
             {nombre:"Papu",apellido:"Rivariola",rol:"Psicóloga",cumple:"10 de Octubre"},
             {nombre:"Gian",apellido:"Corzo",rol:"Profesor",cumple:"23 de Enero"}];
var texto="";
function imprimir() {
  var mostrar = document.getElementById('mostrar');
  for ( personal in arreglo){
    texto+="<div><li> Nombre: "+ arreglo[personal].nombre + "<br>"+
                "<li> Apellido: "+ arreglo[personal].apellido + "<br>"+
                "<li> Rol: "+ arreglo[personal].rol + "<br>"+
                "<li> cumpleaños: "+ arreglo[personal].cumple + "<br><br></div>";
  }
  mostrar.innerHTML = texto;
}
