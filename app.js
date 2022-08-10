require('dotenv').config();
const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
app.set('view engine', 'ejs');

// Midlewares
app.use(expressLayouts);
app.use(express.static(__dirname + '/public')); //Si el archivo solicitado se encuentra dentro de public lo devuelvo
app.use(express.urlencoded({extended: false}));
app.use(require('./routers/productsRouters'));
app.use((req, res, next) => {
    res.status(404).send('Not Found');
}); // Si la ruta es inexistente muestra el mensaje

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`http://localhost:${port}`));