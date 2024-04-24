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
    var queries =['SELECT * FROM tipoIngreso',
    'SELECT * FROM ingreso INNER JOIN tipoIngreso ON tipoIngreso.idTipoIngreso = ingreso.idTipoIngreso'];

    conexion.query(queries.join(';'),(error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.render('ingreso', {tipoIngreso:results[0],ingreso:results[1], layout: 'layouts/layout2'});
        }
    });
    
}

vistaEgreso = (req, res) => {
    var queries =['SELECT * FROM tipoEgreso',
    'SELECT * FROM egreso INNER JOIN tipoEgreso ON tipoEgreso.idTipoEgreso = egreso.idTipoEgreso'];

    conexion.query(queries.join(';'),(error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.render('egreso', {tipoEgreso:results[0],egreso:results[1], layout: 'layouts/layout2'});
        }
    });
}


vistaInversiones  = (req, res) => {
    var queries =['SELECT * FROM tipoInversion',
    'SELECT * FROM inversion INNER JOIN tipoInversion ON tipoInversion.idTipoInversion = inversion.idTipoInversion'];

    conexion.query(queries.join(';'),(error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.render('inversiones', {tipoInversion:results[0],inversion:results[1], layout: 'layouts/layout2'});
        }
    });
}



vistaUsuario = (req, res) => {
    conexion.query('SELECT * FROM usuario', (error,results)=>{
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
    vistaEgreso,
    vistaInversiones
}