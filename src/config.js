//guarda variables para la configuracion
import {config} from 'dotenv' //va a intentar leer las variables de entorno definidas en nuestra pc (es a nivel sistema operativo esto)
config(); //de esta manera ejecutamos lo importado

console.log(process.env.NICKNAME);
export default{
    port:4000 ,//si la variable port esta vacia, usa el puerto 3000 x defecto, puede usar cualquiera de los 2 x eso usamos ||
    dbUser: process.env.DB_USER || "",
    dbPassword: process.env.DB_PASSWORD || "",
    dbServer: process.env.DB_SERVER || "",
    dbDatabase: process.env.DB_DATABASE || ""

}