import mongoose from 'mongoose'

const coursesSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, 'El nombre de la materia es obligatorio']
    },
    duration: {
        type: String,
        required: [true, 'La materia tiene que tener una duracion']
    },
    description: {
        type: String,
        required: [true, 'La materia tiene que tener una descripcion para el alumno']
    },
    teacher: {
        type: String,
        required: [true, 'La materia neceista un profesor']
    },
    degree:{
        type: String,
        required: true,
        enum: ["SEXTO", "QUINTO", "CUARTO"]
    },
})

export default mongoose.model('courses', coursesSchema)