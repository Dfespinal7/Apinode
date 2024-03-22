const mongoose=require("../config/database")

const schemaProducto= new mongoose.Schema({
    referencia:{
        type:String,
        required:[true,"la referencia es obligatoria"]
    },
    nombre:{
        type:String,
        required:[true,"asignar nombre es obligatoria"]
    },
    descripcion:{
        type:String,
        required:[true,"la decripcion es obligatoria es obligatoria"]
    },
    precio:{
        type:Number,
        default:[0,"el precio por defecto es 0"],
        min:[0,"el precio minimo es 0"]
    }
})