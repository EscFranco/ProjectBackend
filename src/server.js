import 'dotenv/config'

// -----------------  EXPRESS --------------------- //

import express from 'express'
const app = express()

// -------------------------------- RUTAS ------------------------- //

import routerProductos from './routes/routesProductos.js'
import routerCarrito from './routes/routesCarrito.js'
import urlCheck from './utils/checkURL.js'

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'));
app.use(urlCheck)
app.use('/api/productos', routerProductos)
app.use('/api/carrito', routerCarrito)

// ---------------------------------------- SERVER --------------------------------------// 

const PORT = 8080 || process.env.port
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))


