const hamburguesa = document.querySelector("#toggle-btn");

hamburguesa.addEventListener("click", function(){
    document.querySelector("#sidebar").classList.toggle("expand");
})


//Creo los datatables:

$('#tabla-ingresos').DataTable({
    order: [[0, "desc"]], //or asc
    "columnDefs": [
        {"className": "text-center", "targets": [0,3,4]},
        {"orderable": false,"targets": [5]}
    ],
    pageLength: 8,
    layout: {
        topStart: {
            buttons: [
                'copyHtml5', 'excelHtml5', 'pdfHtml5'
            ]
        }
    }
});

$('#tabla-egresos').DataTable({
    order: [[0, "desc"]], //or asc
    "columnDefs": [
        {"className": "text-center", "targets": [0,3,4]},
        {"orderable": false,"targets": [5]}
    ],
    pageLength: 8,
    layout: {
        topStart: {
            buttons: [
                'copyHtml5', 'excelHtml5', 'pdfHtml5'
            ]
        }
    }
});


//----------FUNCIONES INGRESOS---------------------//
//Funcion editar

function EditarIngreso(e){
    let tabla = document.getElementById("tabla-ingresos");
    let nro_Fila =  e.parentNode.parentNode.rowIndex;
    document.getElementById("idIngreso").value = e.id;
    document.getElementById("idTipoIngreso").value = tabla.rows[nro_Fila].cells[1].innerHTML;
    document.getElementById("descripcion").value = tabla.rows[nro_Fila].cells[2].innerHTML
    document.getElementById("cantidad").value = tabla.rows[nro_Fila].cells[3].innerHTML;
    document.getElementById("fecha").value = tabla.rows[nro_Fila].cells[4].innerHTML;
}

//Funcion eliminar

function BorrarIngreso(e){
    let tabla = document.getElementById("tabla-ingresos");
    let nro_Fila =  e.parentNode.parentNode.rowIndex;
    let idIngreso =  e.id;
    document.getElementById("Id_borrar").value = idIngreso;
    document.getElementById("Nombre_borrar").value = tabla.rows[nro_Fila].cells[1].innerHTML;
}


//----------FUNCIONES EGRESOS---------------------//
//Funcion editar

function EditarEgreso(e){
    let tabla = document.getElementById("tabla-egresos");
    let nro_Fila =  e.parentNode.parentNode.rowIndex;
    document.getElementById("idEgreso").value = e.id;
    document.getElementById("idTipoEgreso").value = tabla.rows[nro_Fila].cells[1].innerHTML;
    document.getElementById("descripcion").value = tabla.rows[nro_Fila].cells[2].innerHTML
    document.getElementById("cantidad").value = tabla.rows[nro_Fila].cells[3].innerHTML;
    document.getElementById("fecha").value = tabla.rows[nro_Fila].cells[4].innerHTML;
}

//Funcion eliminar

function BorrarEgreso(e){
    let tabla = document.getElementById("tabla-egresos");
    let nro_Fila =  e.parentNode.parentNode.rowIndex;
    let idEgreso =  e.id;
    document.getElementById("Id_borrar").value = idEgreso;
    document.getElementById("Nombre_borrar").value = tabla.rows[nro_Fila].cells[1].innerHTML;
}