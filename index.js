//index.js es para poder arrancar nuestro servidor de express 
//requerimos express y la guardamos en una cosntante de mismo nombre para poder ejecutarlo
//express es una funcion y al ejecutarlo me devuelve un objeto que voy a lmacenarlo en una
//constante app
const express = require('express')

//INICIALIZACIONES
const app = express()

//AJUSTES: seccion de configuracion. aqui iran todas nuestras configuraciones

//Configuramos el puerto en el numero 3000
//Los servicios en la nube tambien te puden dar un puerto, lo consideramos con process.env.PORT
//Esto esta diciendo si existe un puerto en mi computador que lo tome, sino que coja 3000
app.set('port', process.env.PORT || 3000)

//MIDDLEWARES: donde iran todas las funciones que van a ser utilizadas antes que lleguen al servidor
// o de que se pasen a las rutas

//GLOBAL VARIABLES: para colocar cietros datos que queremos que nuestra aplicacion tenga accesibles

//ROUTES

//ARCHIVOS ESTATICOS: donde estaran nuestros archivos estaticos

//SERVIDOR ESCUCHANDO: para inicializar nuestro servidor

//utilizamos el puerto creado con app.get('port')
app.listen(app.get('port'))