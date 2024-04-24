const express = require('express');
const {vistaPrincipal, vistaLogin, vistaRegistro, vistaIngreso, vistaEgreso, vistaUsuario, vistaInicio} = require('../controllers/pageControllers');
const auth = require('../controllers/authControllers');
const crud = require('../controllers/crud');

const router = express.Router();


/*  RUTAS PARA LAS VISTAS */

router.get('/', vistaPrincipal);
router.get('/inicio', vistaInicio);
router.get('/index', vistaPrincipal);
router.get('/login', vistaLogin);
router.get('/registro', vistaRegistro);
router.get('/ingreso',  vistaIngreso);
router.get('/egreso',  vistaEgreso);
router.get('/usuario', vistaUsuario);



/*  RUTAS PARA METODOS DEL CONTROLADOR   */
router.post('/registrarUsuario', auth.registrarUsuario);
router.post('/login', auth.login);
router.get('/logout', auth.logout);

//INGRESOS
router.post('/registroIngreso', crud.Registrar_Ingreso);
router.post('/editarIngreso', crud.Editar_Ingreso);
router.post('/eliminarIngreso', crud.Eliminar_Ingreso);

module.exports = {routes: router};