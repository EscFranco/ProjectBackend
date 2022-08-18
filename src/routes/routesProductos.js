import { Router } from 'express'
import onlyAdmin from '../utils/admin.js'
import { productosDao } from '../daos/index.js'

// ------------------------------- PRODUCTOS ------------------- //

const routerProductos = new Router()

const productosApi = productosDao

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

export {productosApi}
export default routerProductos;
