// -----------------  EXPRESS --------------------- //

const express = require('express')
const app = express()
const { Router } = require('express')
const Contenedor = require('./contenedores/Contenedor')

// -------------------------------- RUTAS ------------------------- //

const routerProductos = new Router()
const routerCarrito = new Router();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'));
app.use('/api/productos', routerProductos)
app.use('/api/carrito', routerCarrito)

// HANDLER

const urlCheck = (req, res, next) => {
	if (req.url.includes('/api/carrito') || req.url.includes('/api/productos'))
		next()
	else
		res.json({
			error: -2,
			description: `ruta ${req.originalUrl} metodo ${req.method} no implementada`,
		});
};

app.use(urlCheck)


// ---------------------------- ADMINISTRADOR ---------------- // 

const checkAdmin = true

function errorAdmin(ruta, metodo) {
    const error = {
        error: -1
    }
    if (ruta && metodo) {
        error.descripcion = `ruta '${ruta}' metodo '${metodo}' no autorizado`
    } else {
        error.descripcion = 'no autorizado'
    }
    return error
}

function onlyAdmin(req, res, next) {
    if (!checkAdmin) {
        res.json(errorAdmin(req.originalUrl, req.method))
    } else {
        next()
    }
}

// ------------------------------- PRODUCTOS ------------------- //

const productosApi = new Contenedor('./src/files/productos.json')

routerProductos.get('/', async (req, res) => {
    let answer = await productosApi.getAll()
    res.json(answer)
})

routerProductos.get('/:id', async (req, res) => {
    const { id } = req.params
    const numero = parseInt(id)
    let answer = await productosApi.getById(numero)
    res.json(answer)
})

routerProductos.post('/', onlyAdmin, async (req, res) => {
    const objeto = req.body
    await productosApi.newProduct(objeto)
    let listaFinal = await productosApi.getAll()
    res.json(listaFinal)
})

routerProductos.put('/:id', onlyAdmin, async (req, res) => {
    const objeto = req.body
    const { id } = req.params
    const numero = parseInt(id)
    let answer = await productosApi.updateProduct(numero, objeto)
    res.json(answer)
})

routerProductos.delete('/:id', onlyAdmin, async (req, res) => {
    const { id } = req.params
    const numero = parseInt(id)
    let answer = await productosApi.deleteById(numero)
    res.json(answer)
})

// ------------------------------- CARRITO ------------------- //

const carritoApi = new Contenedor('./src/files/carrito.json')

routerCarrito.get('/', async (req, res) => {
    let answer = await carritoApi.getAll()
    res.json(answer)
})

routerCarrito.post('/', async (req, res) => {
    let answer = await carritoApi.newProduct({ productos: [] })
    res.json(`El nuevo carrito creado tiene el ID ${answer}`)
})

routerCarrito.delete('/:id', async (req, res) => {

    const { id } = req.params
    const numero = parseInt(id)
    let answer = await carritoApi.deleteById(numero)
    res.json(answer)
})

routerCarrito.get('/:id/productos', async (req, res) => {
    const { id } = req.params
    const numero = parseInt(id)
    let answer = await carritoApi.getById(numero)
    res.json(answer.productos)
})

routerCarrito.post('/:id/productos', async (req, res) => {
    const { id } = req.params
    const numero = parseInt(id)
    const carrito = await carritoApi.getById(numero)
    const producto = await productosApi.getById(req.body.id)
    carrito.productos.push(producto)
    const answer = await carritoApi.updateProduct(numero, carrito)
    res.json(answer)
})

routerCarrito.delete('/:id/productos/:id_prod', async (req, res) => {
    const { id } = req.params
    const numero = parseInt(id)
    const carrito = await carritoApi.getById(numero)
    const index = carrito.productos.findIndex(producto => producto.id == parseInt(req.params.id_prod))  
    if (index != -1) {
        carrito.productos.splice(index, 1) 
        await carritoApi.updateProduct(numero, carrito)
        res.end()
    } else {
        res.json('Este producto no se encuentra en el carrito')
    }
});



// ---------------------------------------- SERVER --------------------------------------// 

const PORT = 8080 || process.env.port
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))


