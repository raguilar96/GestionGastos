const conexion = require("../database/database");


//---------CONSULTAS INGRESOS ----------//

exports.Registrar_Ingreso = (req, res)=>{

    const idTipoIngreso = req.body.idTipoIngreso;
    const descripcion = req.body.descripcion;
    const cantidad = req.body.cantidad;
    const fecha = req.body.fecha;


    conexion.query('INSERT INTO ingreso SET ?',{idTipoIngreso: idTipoIngreso,descripcion:descripcion,cantidad:cantidad,fecha:fecha}, (error, results)=>{
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
    const idTipoIngreso = req.body.idTipoIngreso;
    const descripcion = req.body.descripcion;
    const cantidad = req.body.cantidad;
    const fecha = req.body.fecha;


    conexion.query('UPDATE ingreso SET ? WHERE idIngreso= ? ', [{idTipoIngreso: idTipoIngreso,descripcion:descripcion,cantidad:cantidad,fecha:fecha}, idIngreso], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/ingreso');
        }
    })
}

exports.Eliminar_Ingreso = (req,res) => {
    const idIngreso = req.body.idIngreso;
    console.log(idIngreso);
    conexion.query('DELETE FROM ingreso WHERE idIngreso = ?',[idIngreso], (error, results) =>{
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

    const idTipoEgreso = req.body.idTipoEgreso;
    const descripcion = req.body.descripcion;
    const cantidad = req.body.cantidad;
    const fecha = req.body.fecha;


    conexion.query('INSERT INTO egreso SET ?',{idTipoEgreso: idTipoEgreso,descripcion:descripcion,cantidad:cantidad,fecha:fecha}, (error, results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/egreso');
        }
    })
}

exports.Editar_Egreso = (req, res)=>{
    const idEgreso = req.body.idEgreso;
    const idTipoEgreso = req.body.idTipoEgreso;
    const descripcion = req.body.descripcion;
    const cantidad = req.body.cantidad;
    const fecha = req.body.fecha;


    conexion.query('UPDATE egreso SET ? WHERE idEgreso= ? ', [{idTipoEgreso: idTipoEgreso,descripcion:descripcion,cantidad:cantidad,fecha:fecha}, idEgreso], (error, results)=>{
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
    conexion.query('DELETE FROM egreso WHERE idEgreso = ?',[idEgreso], (error, results) =>{
        if(error){
            throw error;
        }else{
            console.log("Datos eliminados correctamente");  
            res.redirect('/egreso');
        }
    });
}
