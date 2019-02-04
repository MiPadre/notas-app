/**database.js es para poder conectar a una base de datos, y va a ser utilizada por index.js */
const mongoose = require('mongoose')

/**Utilizaremos el metodo connect que me permite conectarme a una direccion de internet. En este caso mongodb
 * esta instalado en mi maquina local, asi que le diremos que se conecte a localhost y al nombre de la base
 * de datos notes-db-app. Finalmente le voy a dar un objeto para configurarlo y no de error
 */
mongoose.connect('mongodb://localhost/notes-db-app', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
    .then(db => console.log('DB esta conectada'))
    .catch(err => console.log(err))