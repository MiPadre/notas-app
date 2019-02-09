//Creamos el enrutador. Requerimos express con el metodo Router() que permite manejar y crear las rutas del servidor

const express = require('express')
const router = express.Router()

/**Configuracion de las nuevas notas que introduzcamos */

router.get('/notes/add', (req, res) => {
    res.render('notes/new-note')
})

/**Ruta para recibir datos. El formulario me tiene que enviar a la ruta '/notes/new-note' para poder recibir los datos.
 * Le decimos que de la respuesta del body quiero el titulo y la descripcion, y manejamos los errores en el caso de
 *  que no haya titulo o descripcion, mostrando el tipo de error
*/

router.post('/notes/new-note', (req, res) => {
    const {title, description} = req.body
    const errors = []
    if(!title){
        errors.push({text: 'Por favor introduzca un titulo'})
    }
    if(!description) {
        errors.push({text: 'Por favor introduzca una descripcion'})
    }
    if(errors.length > 0) {
        res.render('notes/new-note', {
            errors,
            title,
            description
        })
    }else {
        res.send('OK')
    }
})

/**Cuando visites la pagina notes de mi aplicacion, vas a manejarlo con una funcion que maneje las peticiones y
las respuestas y vas a enviar de momento un mensaje que diga Notas desde la base de datos. En el futuro devolvera las 
notas de la base de datos */

router.get('/notes', (req, res) => {
    res.send('Notas desde la base de datos')
})

module.exports = router