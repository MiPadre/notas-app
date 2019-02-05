//Creamos el enrutador. Requerimos express con el metodo Router() que permite manejar y crear las rutas del servidor

const express = require('express')
const router = express.Router()

/**Cuando visites la pagina principal de mi aplicacion, vas a manejarlo con una funcion que maneje las peticiones y
las respuestas y vas a enviar un mensaje que diga Index. Quitamos el mensaje que era para probar que funcionaba la ruta
y vamos a enviar (renderizar) los archivos de las vistas index.hbs y about.hbs. Si el usuario entra a la ruta '/' enviale
el archivo index.hbs, si entra a la ruta '/about' enviale el archivo about.hbs */
router.get('/', (req, res) => {
    res.render('index')
})

router.get('/about', (req, res) => {
    res.render('about')
})

module.exports = router
