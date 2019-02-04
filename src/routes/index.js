//Creamos el enrutador. Requerimos express con el metodo Router() que permite manejar y crear las rutas del servidor

const express = require('express')
const router = express.Router()

/**Cuando visites la pagina principal de mi aplicacion, vas a manejarlo con una funcion que maneje las peticiones y
las respuestas y vas a enviar un mensaje que diga Index */
router.get('/', (req, res) => {
    res.send('Index')
})

module.exports = router
