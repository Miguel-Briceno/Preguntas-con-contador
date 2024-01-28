
function mostrarIntrucciones(){
    var nombreUsuario = document.getElementById("nombre").value;
    let usuario = document.getElementById("usuario");
    usuario.textContent = nombreUsuario+", ";
    esconderBloque('primeraParte');
    mostrarBloque('segundaParte');

    
    
}
function esconderBloque(id){
    document.getElementById(id).style.display='none';
}
function mostrarBloque(id){
    document.getElementById(id).style.display='block';
}