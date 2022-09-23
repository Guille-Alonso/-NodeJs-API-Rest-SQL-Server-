//esto es para configurar la aplicacion de express

import express from 'express' //importamos el modulo express
import config from './config'
import productsRoutes from './routes/products.routes'

const app = express() //ejecutamos el modulo importado anteriormente para luego poder configurar el servidor. 
//app es el objeto q me permite manejarlo

//settings, esta seccion es para configurar el puerto
app.set('port', config.port || 3000)
//middlewares para aceptar datos en json y de formularios q vienen de un html. Es para entender lo q el cliente le envia al back
app.use(express.json())
app.use(express.urlencoded({extended:false}));
//debe ir antes de usar las rutas

app.use(productsRoutes);
export default app //exportamos el servidor