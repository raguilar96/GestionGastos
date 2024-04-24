const conexion = require("../database/database");
const auth = require('../controllers/authControllers');

vistaPrincipal = (req, res) =>{
    res.render('inicio', {layout: 'layouts/layout2'});
}

vistaInicio = (req, res) =>{
    res.render('inicio', {layout: 'layouts/layout2'});
}

vistaLogin = (req, res) => {
    res.render('login', {alert:false, layout: 'layouts/layout1'});
}

vistaRegistro = (req, res) => {
    res.render('registro', {layout: 'layouts/layout2'});
}

vistaIngreso = (req, res) => {
    var queries =['SELECT * FROM tipoIngreso','SELECT * FROM ingreso'];

    conexion.query(queries.join(';'),(error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.render('ingreso', {tipoIngreso:results[0],ingreso:results[1], layout: 'layouts/layout2'});
        }
    });
    
}

vistaEgreso = (req, res) => {
    var queries =['SELECT * FROM tipoEgreso','SELECT * FROM egreso'];

    conexion.query(queries.join(';'),(error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.render('egreso', {tipoEgreso:results[0],egreso:results[1], layout: 'layouts/layout2'});
        }
    });
}

vistaUsuario = (req, res) => {
    conexion.query('SELECT usuario.idUsuario, usuario.apellido, usuario.nombre, usuario.dni, usuario.direccion, usuario.localidad, usuario.correo, usuario.telefono, filial.nombreFilial, cargo.nombreCargo FROM usuario INNER JOIN filial ON filial.idFilial = usuario.idFilial INNER JOIN cargo ON cargo.idCargo = usuario.idCargo', (error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.render('usuario', {results: results, layout: 'layouts/layout2'});
        }
    });
    
}
module.exports = {
    vistaPrincipal,
    vistaInicio,
    vistaLogin,
    vistaRegistro,
    vistaIngreso,
    vistaUsuario,
    vistaEgreso
}