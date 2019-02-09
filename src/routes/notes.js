//Creamos el enrutador. Requerimos express con el metodo Router() que permite manejar y crear las rutas del servidor

const express = require('express')
const router = express.Router()

/**Configuracion de las nuevas notas que introduzcamos */

router.get('/notes/add', (req, res) => {
    res.render('notes/new-note')
})

/**Ruta para recibir datos. El formulario me tiene que eviar a la ruta '/notes/new-note' para poder recibir los datos*/

router.post('/notes/new-note', (req, res) => {
    console.log('req.body')
    res.send('OK')
})

/**Cuando visites la pagina notes de mi aplicacion, vas a manejarlo con una funcion que maneje las peticiones y
las respuestas y vas a enviar de momento un mensaje que diga Notas desde la base de datos. En el futuro devolvera las 
notas de la base de datos */

router.get('/notes', (req, res) => {
    res.send('Notas desde la base de datos')
})

module.exports = router