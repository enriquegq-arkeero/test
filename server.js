// server.js
const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')))

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`)
})
