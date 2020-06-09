var formulario = document.getElementsByName('formulario')[0];
var elemen = formulario.elements;
var cui = document.getElementById('cui');
var clave = document.getElementById('clave');

var palabra =/[a-z]/;

(function (){
	var validarcui = function(e){
        if(formulario.cui.value == 0){
            alert("completa el campo cui");
            e.preventDefaulT();
        }
        else if(palabra.test(formulario.cui.value)){
            alert("solo pudes usar numeros en cui");
            e.preventDefaulT();
        }
    };
	
	var validarclave = function(e){
        if(formulario.clave.value == 0){
            alert("completa el campo contraseña");
            e.preventDefaulT();
        }
    };
	
	var validar = function(e){
        validarcui(e);
        validarclave(e);
    };
    formulario.addEventListener("submit",validar);
}())