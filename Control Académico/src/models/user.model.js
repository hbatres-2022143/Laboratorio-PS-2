import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'El nombre del estudiante es obligatorio']
    },
    surname: {
        type: String,
        required: [true, 'El apellido del estudiante es obligatorio'],
    },
    email: {
        type: String,
        required: [true, 'El correo del estudiante es obligatorio'],
    },
    username: {
        type: String,
        unique: true,
        lowercase: true,
        required: [true, 'El usuario del estudiante es obligatorio'],
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    degree: {
        type: String,
        required: true,
        enum: ["SEXTO", "QUINTO", "CUARTO"]
    },
    card: {
        type: String,
        required: [true, 'El estudiante necesita su carnet'],
        uniqued: true
    },
    workingday: {
        type: String,
        required: [true, 'La jornada del estudiante es obligatorio']
    },
    role: {
        type: String,
        required: true,
        enum: ["TEACHER_ROLE", "STUDENT_ROLE"]
    },
})

export default mongoose.model('user', userSchema)