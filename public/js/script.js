const hamburguesa = document.querySelector("#toggle-btn");

hamburguesa.addEventListener("click", function(){
    document.querySelector("#sidebar").classList.toggle("expand");
})


//----------FUNCIONES INGRESOS---------------------//
//Funcion editar

function EditarIngreso(e){
    let tabla = document.getElementById("tabla-ingresos");
    let nro_Fila =  e.parentNode.parentNode.rowIndex;
    document.getElementById("idIngreso").value = e.id;
    document.getElementById("idTipoIngreso").value = tabla.rows[nro_Fila].cells[1].innerHTML;
    document.getElementById("cantidad").value = tabla.rows[nro_Fila].cells[2].innerHTML
    document.getElementById("fecha").value = tabla.rows[nro_Fila].cells[3].innerHTML;
}

//Funcion eliminar

function BorrarIngreso(e){
    let tabla = document.getElementById("tabla-ingresos");
    let nro_Fila =  e.parentNode.parentNode.rowIndex;
    let idIngreso =  e.id;
    document.getElementById("Id_borrar").value = idIngreso;
    document.getElementById("Nombre_borrar").value = tabla.rows[nro_Fila].cells[1].innerHTML;
}
