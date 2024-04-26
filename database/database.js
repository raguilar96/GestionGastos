const mysql = require('mysql');

// CONEXION BASE DE DATOS
const conexion = mysql.createConnection({
    host: process.env.DB_HOST,
    user: "root",
    password: "$eguro",
    database: "walletadmin",
    multipleStatements: true
})

conexion.connect((error) => {
    if(error){
        console.error('El error de conexion es: ' + error);
        return;
    }else{
        console.log('Conectado a la BD!');
    }
})

module.exports = conexion;