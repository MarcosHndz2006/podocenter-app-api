// Importar Express
const express = require('express');
const port = 3000
// Inicializar la aplicación Express
const app = express();

// Ruta principal
app.get('/prueba', (req, res) => {
    res.send('¡Hola Mundo con Node.js y Express!');
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
