/**Creamos el enrutador. Requerimos express con el metodo Router() que permite manejar y crear las rutas del servidor.
 * users.js va a servir para registrar y autentificar a los usuarios
 */

const express = require('express')
const router = express.Router()

/**Cuando visites la pagina de registro de mi aplicacion, vas a manejarlo con una funcion que maneje las peticiones y
las respuestas y vas a enviar los siguientes mensajes */
router.get('/users/signin', (req, res) => {
    res.send('Ingresando a la App')
})

router.get('/users/signup', (req, res) => {
    res.send('Formulario de Autentificacion')
})

module.exports = router