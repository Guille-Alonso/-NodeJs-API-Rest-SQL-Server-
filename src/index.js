//arranca la aplicacion

import app from './app' //importamos el servidor

app.listen(app.get('port')) 
 //app.get('port') esto es para q utilice la variable port q se definio en el archivo app.js

console.log('server on port',app.get('port'));