const exp=require("express")
const app=exp()
const logger=require('morgan')
app.use(logger('dev'))
app.use(exp.urlencoded({extended:false}))
app.use(exp.json())

let modelProducto=require('./backend/models/products.model')

app.listen(process.env.PORT,()=>{
    console.log("servidor en linea")
})

