/**index.js es para poder arrancar nuestro servidor de express, requerimos express y la guardamos en una cosntante 
 * de mismo nombre para poder ejecutarlo express es una funcion y al ejecutarlo me devuelve un objeto que voy a 
 * almacenarlo en una constante app */

//path es un modulo para ubicar las rutas
//requerimos el modulo handlebars
const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const session = require('express-session')

//INICIALIZACIONES
const app = express()
require('./database')

//AJUSTES: seccion de configuracion. aqui iran todas nuestras configuraciones

/**Configuramos el puerto en el numero 3000. Los servicios en la nube tambien te puden dar un puerto, lo consideramos 
 * con process.env.PORT  Esto esta diciendo si existe un puerto en mi computador que lo tome, sino que coja 3000 */

app.set('port', process.env.PORT || 3000)

/**Le decimos donde esta la ruta a views mediante el metodo join() que me permite unir directorios. Hay una constante 
 * en nodejs __dirname que me devuelve la ruta de  donde se esta ejecutando determinado archivo. si ejecuto index.js 
 * __dirname me lleva a la carpeta src y la puedo concatenar con otra en este caso views */

app.set('views', path.join(__dirname, 'views'))

/**Configuramos el modulo express-handlebars. Utlizamos el metodo engine() de express() y para saber que es un archivo 
 * de handlebars ponemos la extension .hbs. al metodo exphbs le damos un objeto de configuracion que tiene propiedades 
 * como defaulLayout, layoustDir, partialsDir, extname para saber de que forma vamos a utilizar las vistas */

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}))
/**Hemos terminado la configuracion de handlebars pero no la estamos utilizan aun. Para hacerlo: app.set('view engine') 
 * para configurar el motor de plantillas, el motor de las vistas .hbs */

app.set('view engine', '.hbs')

/**MIDDLEWARES: donde iran todas las funciones que van a ser utilizadas antes que lleguen al servidor o de que se pasen 
 * a las rutas. Utilizo el metodo urlencoded() de express(), sirve para cuando un formulario quiera enviarme determinados 
 * datos yo pueda entenderlo. Cuando un usuario se quiera registrar me va a enviar su email y su contraseña, y yo quiero 
 * recibir esos datos. 
 * Le damos un objeto de configuracion, con la propiedad extended: false, ya que solo queremos sus datos, no otros tipos 
 * de archivos como imagenes, etc.
 * methodOverride() nos sirve para que los formularios nos puedan dar otros tipos de metodos, no solamente GET POST, sino 
 * otros como PUSH y DELETE y para hacerlo le enviamos un input oculto _method
 * A traves de session vamos a poder autentificar al usuario y almacenar estos datos temporalmente */

app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
}))

//GLOBAL VARIABLES: para colocar cietros datos que queremos que nuestra aplicacion tenga accesibles

//ROUTES: configuramos las rutas y le decimos que utilice los archivos de la carpeta routes.
//Le hacemos saber al servidor que aqui estan mis rutas de la aplicacion
app.use(require('./routes/index'))
app.use(require('./routes/notes'))
app.use(require('./routes/users'))

//ARCHIVOS ESTATICOS: donde estaran nuestros archivos estaticos

app.use(express.static(path.join(__dirname, 'public')))

//SERVIDOR ESCUCHANDO: para inicializar nuestro servidor

//utilizamos el puerto creado con app.get('port')
app.listen(app.get('port'), () => {
    console.log(`Servidor en el puerto ${app.get('port')}`)
})