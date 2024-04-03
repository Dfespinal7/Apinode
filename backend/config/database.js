const mongoose=require('mongoose')
require('dotenv').config()

const URI='mongodb+srv://dfespinal7sena_:8WSx4gW77grYcUB2@clusteradsoficha2557466.nz5ztpn.mongodb.net/'

mongoose.connect(URI)
module.exports=mongoose