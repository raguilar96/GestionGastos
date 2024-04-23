const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const conexion = require('../database/database');
const {promisify} = require('util');


/* PROCEDIMIENTO PARA REGISTROS */
exports.registrarUsuario = async (req, res) =>{

    try {
        const apellido = req.body.apellido;
        const nombre = req.body.nombre;
        const DNI = req.body.dni;
        const direccion = req.body.direccion;
        const localidad = req.body.localidad;
        const correo = req.body.correo;
        const telefono = req.body.telefono;
        const filial = req.body.filial;
        const cargo = parseInt(req.body.cargo);
        const password = req.body.password;
        let passHash = await bcryptjs.hash(password, 8);

        conexion.query('INSERT INTO usuario SET ?',{apellido:apellido, nombre:nombre,dni:DNI,direccion:direccion,localidad:localidad,correo:correo,telefono:telefono,idFilial:filial,idCargo:cargo,pass:passHash},(error,results) =>{
            if(error){
                console.log(error);
            }else{
               res.redirect('/usuario'); 
            } 
        })
    } catch (error) {
        console.log(error);
    }
}

exports.login = async (req, res) => {
    try {
        const dni = req.body.dni;
        const password = req.body.password;

        if (!dni || !password){
            res.render('login',{
                alert: true,
                alertTitle: "Advertencia",
                alertMessage: "Debe ingresar su DNI y contraseña",
                alertIcon: 'info',
                showConfirmButton: true,
                timer: false,
                ruta: 'login'
            })
        }else{
            conexion.query('SELECT * FROM usuario WHERE dni = ?', [dni], async (error,results)=> {
                if(results.lenght == 0 || !(await bcryptjs.compare(password, results[0].password))){
                        res.render('login',{
                        alert: true,
                        alertTitle: "Advertencia",
                        alertMessage: "DNI y/o Contraseña son incorrectas",
                        alertIcon: 'error',
                        showConfirmButton: true,
                        timer: false,
                        ruta: 'login'
                    })
                }else{
                    //inicio de sesion validado
                    const id = results[0].idUsuario;
                    /*const token = jwt.sign({id:id}, process.env.JWT_SECRETO, {
                        expiresIn: process.env.JWT_TIEMPO_EXPIRA
                    })*/
                    //para generar token sin fecha de expiracion
                    const token = jwt.sign({id:id}, process.env.JWT_SECRETO);
                    

                    const cookiesOptions = {
                        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                        httpOnly: true
                    }
                    res.cookie('jwt', token, cookiesOptions);
                    res.render('login', {
                        alert: true,
                        alertTitle: "Conexión Exitosa",
                        alertMessage: "¡Bienvenido!",
                        alertIcon: 'sucess',
                        showConfirmButton: false,
                        timer: 800,
                        ruta: ''
                    })
                }
            })
        }
    } catch (error) {
        console.log(error);
    }
}

exports.isAuthenticated = async(req, res, next)=>{
    if(req.cookies.jwt){
        try {
            const decodificada = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRETO);
            conexion.query('SELECT * FROM usuario WHERE idUsuario = ?', [decodificada.id],(error,results)=>{
                if(!results){
                    return next()
                }
                req.usuario = results[0];
                return next();
            })
        } catch (error) {
            console.log(error);
            return next();
        }
    }else{
        res.redirect('/login');
        return next();
    }
}

exports.logout = (req, res) => {
    res.clearCookie('jwt');
    return res.redirect('/');
}