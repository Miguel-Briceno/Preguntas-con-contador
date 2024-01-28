var cuentaAtras=30;// variable global para que se vea en todas las funciones se inicializa 
function cargarTiempo(){    
    actualizarPantalla();// llamada a la funcion
    
    intervalo = setInterval(function(){
        cuentaAtras--;// contador cuanta atras menos uno        
        if (cuentaAtras >= 0){// si cuenta atras mayor o igual a 0 se sigue actualizando, no cumple cierra el intervalo.
            actualizarPantalla()}
        else{
            let audio = document.getElementById('audio');
            audio.play();
            alert("Game Over");
            clearInterval(intervalo);
        } 
    }, 1000); // se asignan intervalos de un segundo
} 
function actualizarPantalla(){   
    let tiempoFormateado = cuentaAtras.toString().padStart(2,'0');// formateo para que se muestros dos valores
    let segundero= document.getElementById('cronometro');// se toma el nodo 
    segundero.innerHTML="00:"+tiempoFormateado; // se asigna el valor al nodo
}

function salvar(){
    let primera = document.getElementById('primera').value;
    let segunda = document.getElementById('segunda').value;
    let tercera = document.getElementById('tercera').value;
    let cuarta = document.getElementById('cuarta').value;
    let quinta = document.getElementById('quinta').value;
    let fecha = new Date();
    fecha=fecha.toLocaleDateString('es-ES');    
    let mensaje = 'Las respuestas hechas el '+fecha+' son: \n 1º '
                    + primera +'\n 2º '
                    + segunda +'\n 3º '
                    + tercera +'\n 4º '
                    + cuarta +'\n 5º '
                    + quinta ;
    alert(mensaje);   
    clearInterval(intervalo);
}
function volverJugar(){
    location.reload();
}
