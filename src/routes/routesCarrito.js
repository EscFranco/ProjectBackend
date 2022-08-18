import { Router } from 'express'
import { carritosDao } from '../daos/index.js';
import { productosApi } from './routesProductos.js';
// ------------------------------- CARRITO ------------------- //

const routerCarrito = new Router();
const carritoApi = carritosDao

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

export default routerCarrito