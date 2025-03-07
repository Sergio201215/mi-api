const express = require('express');
const bodyParser = require('body-parser');
const productosRoutes = require('./routes/productos');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Agregar CORS middleware
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Permite cualquier origen (no recomendado para producción)
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use('/api/productos', productosRoutes);

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});