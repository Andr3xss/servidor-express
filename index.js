// Importa el paquete de Express
const express = require('express');

// Crea una instancia de la aplicación de Express
const app = express();

// Define el puerto dinámicamente (usará el puerto de entorno o el 3000 por defecto)
const PORT = process.env.PORT || 3000;

// Define una ruta para la raíz del servidor
app.get('/', (req, res) => {
    res.send('Hola Mundo');
});

// Inicia el servidor y escucha en el puerto definido
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});