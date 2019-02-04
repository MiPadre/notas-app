//Creamos el enrutador. Requerimos express con el metodo Router() que permite manejar y crear las rutas del servidor

const express = require('express')
const router = express.Router()

/**Cuando visites la pagina notes de mi aplicacion, vas a manejarlo con una funcion que maneje las peticiones y
las respuestas y vas a enviar de momento un mensaje que diga Notas desde la base de datos. En el futuro devolvera las 
notas de la base de datos */

router.get('/notes', (req, res) => {
    res.send('Notas desde la base de datos')
})

module.exports = router