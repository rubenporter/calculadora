function agregarNumero(numero){
    document.getElementById('resultado').innerHTML+=numero;
}

function igual(){
    cadena = document.getElementById('resultado').innerHTML;
    resultado = eval(cadena);
    document.getElementById('resultado').innerHTML = resultado;
}

function borrar(){
    document.getElementById('resultado').innerHTML = "";
}

function acordeon(){
    clave = document.getElementById('resultado').innerHTML;
    if(clave == "666"){
        window.location.assign('acordeones.html');
    }
    if(clave == "777"){
        window.location.assign('nuevo.html');
    }
}

function guardar(){
    nuevo = document.getElementById('acordeon').value;
    localStorage.setItem('acordeon', nuevo);
    window.location.assign('index.html');
}

function cargarAcordeon(){
    acordeon = localStorage.getItem('acordeon');
    document.getElementById('acordeon').innerHTML = acordeon;
}

function regresar(){
    window.location.assign('index.html');
}    