/*  IMPORTACION DE DEPENDENCIAS */
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const router = require('./routes/router');
const PORT = 3000;
const expressLayouts=require("express-ejs-layouts");

const app = express();





/*  SETEAMOS MOTOR DE PLANTILLAS    */
app.use(expressLayouts);
app.set('layout', './layouts/layout1');
app.set('view engine', 'ejs');

/*  SETEAMOS LA CARPETA PUBLIC PARA ARCHIVOS ESTATICOS  */
app.use(express.static(path.join(__dirname, 'public')));

/*  CONFIGURAMOS PARA QUE NODE PROCESE DATOS DE FORMULARIOS */
app.use(express.urlencoded({extended:false}));
app.use(express.json());

/*  SETEAMOS LAS VARIABLES DE ENTORNO   */
dotenv.config({path: './env/.env'} );

/*  SETEAMOS PARA PODER TRABAJAR CON LAS COOKIES    */
app.use(cookieParser());

/*  UTILIZAMOS LAS RUTAS DEFINIDAS EN ROUTER    */
app.use(router.routes);

/* para eliminar la cache y que se pueda volver con el boton de back luego de hacer logout */
/* no esta funcionando */
app.use(function(req, res, next){
    if(!req.user){
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
        res.header('Pragma', 'no-cache');
        res.header('Expires', 0);
    }
    next();
})

//SOLO PARA SABER SI ESTA EN FUNCIONAMIENTO EL PROGRAMA
app.listen(PORT, ()=>{
    console.log('Servidor ejecutandose en: http://localhost:' + PORT);
});