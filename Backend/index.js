const express = require('express');
const conectarDB = require('./config/db');
//conectar base de datos
conectarDB();


const app = express();

app.listen(4000, () => {
    console.log("Servidor corriendo en el puerto 4000 G13")
});
// mongodb+srv://FelipeUnab:<password>@cluster0.ntbsaja.mongodb.net/?retryWrites=true&w=majority