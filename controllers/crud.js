const conexion = require("../database/database");


//---------CONSULTAS INGRESOS ----------//

exports.Registrar_Ingreso = (req, res)=>{
    const idFilial = req.body.idFilial;
    const idTipoIngreso = req.body.idTipoIngreso;
    const idContribuyente = req.body.idContribuyente;
    const cantidad = req.body.cantidad;
    const fecha = req.body.fecha;


    conexion.query('INSERT INTO ingreso SET ?',{idFilial: idFilial, idTipoIngreso: idTipoIngreso, idContribuyente: idContribuyente,cantidad:cantidad,fecha:fecha}, (error, results)=>{
        if(error){
            throw error;
        }else{
            console.log("Guardado");
            res.redirect('/ingreso');
        }
    })
}

exports.Editar_Ingreso = (req, res)=>{
    const idIngreso = req.body.idIngreso
    const idZona = req.body.idZona;
    const idTipoIngreso = req.body.idTipoIngreso;
    const idContribuyente = req.body.idContribuyente;
    const cantidad = req.body.cantidad;
    const fechaIngreso = req.body.fechaIngreso;


    conexion.query('UPDATE ingreso SET ? WHERE Id= ? ', [{idZona: idZona, idTipoIngreso: idTipoIngreso, idContribuyente: idContribuyente,cantidad:cantidad,fechaIngreso:fechaIngreso}, idIngreso], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/ingreso');
        }
    })
}

exports.Eliminar_Ingreso = (req,res) => {
    const idIngreso = req.body.idIngreso
    console.log(idIngreso);
    conexion.query('DELETE FROM ingreso WHERE Id = ?',[idIngreso], (error, results) =>{
        if(error){
            throw error;
        }else{
            console.log("Datos eliminados correctamente");  
            res.redirect('/ingreso');
        }
    });
}

//---------CONSULTAS EGRESOS ----------//

exports.Registrar_Egreso = (req, res)=>{
    const idZona = req.body.idZona;
    const idTipoEgreso = req.body.idTipoEgreso;
    const cantidad = req.body.cantidad;
    const fechaEgreso = req.body.fechaEgreso;


    conexion.query('INSERT INTO egreso SET ?',{idZona: idZona, idTipoEgreso: idTipoEgreso,cantidad:cantidad,fechaEgreso:fechaEgreso}, (error, results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/egreso');
        }
    })
}

exports.Editar_Egreso = (req, res)=>{
    const idEgreso = req.body.idEgreso
    const idZona = req.body.idZona;
    const idTipoEgreso = req.body.idTipoEgreso;
    const cantidad = req.body.cantidad;
    const fechaEgreso = req.body.fechaEgreso;


    conexion.query('UPDATE egreso SET ? WHERE Id= ? ', [{idZona: idZona, idTipoEgreso: idTipoEgreso,cantidad:cantidad,fechaEgreso:fechaEgreso}, idEgreso], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/egreso');
        }
    })
}

exports.Eliminar_Egreso = (req,res) => {
    const idEgreso = req.body.idEgreso
    console.log(idEgreso);
    conexion.query('DELETE FROM egreso WHERE Id = ?',[idEgreso], (error, results) =>{
        if(error){
            throw error;
        }else{
            console.log("Datos eliminados correctamente");  
            res.redirect('/egreso');
        }
    });
}

//---------CONSULTAS CONTRIBUYENTES ----------//

exports.Registrar_Contribuyente = (req, res)=>{
    const apellido = req.body.apellido;
    const nombre = req.body.nombre;
    const DNI = req.body.DNI;


    conexion.query('INSERT INTO contribuyente SET ?',{apellido: apellido, nombre: nombre,DNI:DNI}, (error, results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/contribuyente');
        }
    })
}

exports.Editar_Contribuyente = (req, res)=>{
    const idContribuyente = req.body.idContribuyente
    const apellido = req.body.apellido;
    const nombre = req.body.nombre;
    const DNI = req.body.DNI;


    conexion.query('UPDATE contribuyente SET ? WHERE Id= ? ', [{apellido: apellido, nombre: nombre,DNI:DNI}, idContribuyente], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/contribuyente');
        }
    })
}

exports.Eliminar_Contribuyente = (req,res) => {
    const idContribuyente = req.body.idContribuyente
    console.log(idContribuyente);
    conexion.query('DELETE FROM contribuyente WHERE Id = ?',[idContribuyente], (error, results) =>{
        if(error){
            throw error;
        }else{
            console.log("Datos eliminados correctamente");  
            res.redirect('/contribuyente');
        }
    });
}

//---------CONSULTAS USUARIOS ----------//

exports.Registrar_Usuario = (req, res)=>{
    const idZona = req.body.idZona
    const idCargo = req.body.idCargo
    const apellido = req.body.apellido;
    const nombre = req.body.nombre;
    const DNI = req.body.DNI;
    const direccion = req.body.direccion;
    const localidad = req.body.localidad;
    const correo = req.body.correo;
    const telefono = req.body.telefono;
    const contrasenia = req.body.contrasenia;


    conexion.query('INSERT INTO usuario SET ?',{idZona:idZona, idCargo:idCargo, apellido: apellido, nombre: nombre, DNI:DNI, direccion:direccion, localidad:localidad, correo:correo, telefono:telefono, contrasenia:contrasenia}, (error, results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/registro');
        }
    })
}

exports.Editar_Contribuyente = (req, res)=>{
    const idUsuario = req.body.idUsuario
    const idZona = req.body.idZona
    const idCargo = req.body.idCargo
    const apellido = req.body.apellido;
    const nombre = req.body.nombre;
    const DNI = req.body.DNI;
    const direccion = req.body.direccion;
    const localidad = req.body.localidad;
    const correo = req.body.correo;
    const telefono = req.body.telefono;
    const contrasenia = req.body.contrasenia;


    conexion.query('UPDATE usuario SET ? WHERE Id= ? ', [{idZona:idZona, idCargo:idCargo, apellido: apellido, nombre: nombre, DNI:DNI, direccion:direccion, localidad:localidad, correo:correo, telefono:telefono, contrasenia:contrasenia}, idUsuario], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/registro');
        }
    })
}

exports.Eliminar_Usuario = (req,res) => {
    const idUsuario = req.body.idUsuario
    console.log(idUsuario);

    conexion.query('DELETE FROM usuario WHERE Id = ?',[idUsuario], (error, results) =>{
        if(error){
            throw error;
        }else{
            console.log("Datos eliminados correctamente");  
            res.redirect('/registro');
        }
    });
}

//---------CONSULTAS ZONAS (FILIALES Y CABECERAS) ----------//

exports.Registrar_Zona = (req, res)=>{
    const codigoIglesia = req.body.codigoIglesia;
    const nombreIglesia = req.body.nombreIglesia;
    const dominio = req.body.dominio;


    conexion.query('INSERT INTO zona SET ?',{codigoIglesia: codigoIglesia, nombreIglesia: nombreIglesia,dominio:dominio}, (error, results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/zona');
        }
    })
}

exports.Editar_Zona = (req, res)=>{
    const idZona = req.body.idZona
    const codigoIglesia = req.body.codigoIglesia;
    const nombreIglesia = req.body.nombreIglesia;
    const dominio = req.body.dominio;


    conexion.query('UPDATE zona SET ? WHERE Id= ? ', [{codigoIglesia: codigoIglesia, nombreIglesia: nombreIglesia,dominio:dominio}, idZona], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/zona');
        }
    })
}

exports.Eliminar_Zona = (req,res) => {
    const idZona = req.body.idZona
    console.log(idZona);

    conexion.query('DELETE FROM zona WHERE Id = ?',[idZona], (error, results) =>{
        if(error){
            throw error;
        }else{
            console.log("Datos eliminados correctamente");  
            res.redirect('/zona');
        }
    });
}

