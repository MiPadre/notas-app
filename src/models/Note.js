const mongoose = require('mongoose')

/**Vamos a decirle que desde mongoose queremos solo el esquema de datos */

const {Schema} = mongoose

/**Definimos como van a lucir mis notas, que propiedades van a tener. Mis notas van a tener 4 propiedades,
 * (campos en mongodb), un titulo que sera requerido, una descripcion de tipo string y tb sera requerido,
 * fecha de creacion de tipo date y una fecha de creacion por defecto si no le pasamos ningun parametro
 * Date.now
 */

const NoteSchema = new Schema ({
    title: {type: String, required: true},
    description: {type: String, required: true},
    date: {type: Date, default: Date.now}
})

/**Creamos el modelo. para utilizar el modelo necesitamos dos parametros, la nota que llamaremos Note y el schema */

module.exports = mongoose.model('Note', NoteSchema)