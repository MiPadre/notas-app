//index.js es para poder arrancar nuestro servidor de express 
//requerimos express y la guardamos en una cosntante de mismo nombre para poder ejecutarlo
//express es una funcion y al ejecutarlo me devuelve un objeto que voy a lmacenarlo en una
//constante app
const express = require('express')

//Inicializaciones
const app = express()

//Settings seccion de configuracion. aqui iran todas nuestras configuraciones

//Middelwares donde iran todas las funciones que van a ser utilizadas antes que lleguen al servidor
// o de que se pasen a las rutas

//Global Variables para colocar cietros datos que queremos que nuestra aplicacion tenga accesibles

//Routes

//Static Files donde estaran nuestros archivos estaticos

//Server is listening para inicializar nuestro servidor