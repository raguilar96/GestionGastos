//const crud = require('controllers/crud');
const sidebarToggle = document.querySelector("#toggle-btn");
sidebarToggle.addEventListener("click",function(){
    document.querySelector("#sidebar").classList.toggle("collapsed");
});

document.querySelector(".theme-toggle").addEventListener("click",() => {
    toggleLocalStorage();
    toggleRootClass();
});

function toggleRootClass(){
    const current = document.documentElement.getAttribute('data-bs-theme');
    const inverted = current == 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme',inverted);
}

function toggleLocalStorage(){
    if(isLight()){
        localStorage.removeItem("light");
    }else{
        localStorage.setItem("light","set");
    }
}

function isLight(){
    return localStorage.getItem("light");
}

if(isLight()){
    toggleRootClass();
}

/*
const botonMenu = document.querySelector("#toggle-btn");

botonMenu.addEventListener("click", function(){
    document.querySelector("#sidebar").classList.toggle("expand");

})

*/

$(".sidebar-nav li").on('click',function(){ 
    $(this).addClass("active").siblings().removeClass("active"); 
});


/*
const linkcolor = document.querySelectorAll(".sidebar-nav li");
function colorLink() {
  linkcolor.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
linkcolor.forEach((item) => item.addEventListener("click", colorLink));
*/



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

$('#tabla-inversiones').DataTable({
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

$('#tabla-flujoFondos').DataTable({
    order: [[0, "desc"]], //or asc
    "columnDefs": [
        {"className": "text-center", "targets": [0,1,2,3,4,5,6,7,8]}
    ],
    pageLength: 12,
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


//----------FUNCIONES INVERSIONES---------------------//
//Funcion editar

function EditarInversion(e){
    let tabla = document.getElementById("tabla-inversiones");
    let nro_Fila =  e.parentNode.parentNode.rowIndex;
    document.getElementById("idInversion").value = e.id;
    document.getElementById("idTipoInversion").value = tabla.rows[nro_Fila].cells[1].innerHTML;
    document.getElementById("descripcion").value = tabla.rows[nro_Fila].cells[2].innerHTML
    document.getElementById("cantidad").value = tabla.rows[nro_Fila].cells[3].innerHTML;
    document.getElementById("fecha").value = tabla.rows[nro_Fila].cells[4].innerHTML;
}

//Funcion eliminar

function BorrarInversion(e){
    let tabla = document.getElementById("tabla-inversiones");
    let nro_Fila =  e.parentNode.parentNode.rowIndex;
    let idInversion =  e.id;
    document.getElementById("Id_borrar").value = idInversion;
    document.getElementById("Nombre_borrar").value = tabla.rows[nro_Fila].cells[1].innerHTML;
}