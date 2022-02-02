const express = require('express');
const port = process.env.PORT || 4000;
var cors = require('cors')

//importar la base de datos
require('./database/db')

// import all routers
const user = require('./routes/user')
const teams = require('./routes/teams')

const app = express();

app.use(cors())

app.use( express.json())

//llama a las ruta
app.use('/user' , user );
app.use('/teams' , teams);

//escucha la app por el puerto 4000
app.listen( port , () => {
    console.log('listening on port ' + port );
})
