// -----------------  EXPRESS --------------------- //

const express = require('express')
const app = express()
const { Router } = require('express')

// --------------------- FILESYSTEM ------------- //
const fs = require('fs')

// -------------------- CLASE --------- //

class Contenedor {
    constructor(ruta) {
        this.ruta = ruta
    }

    async getAll() {
        try {
            const load = JSON.parse(await fs.promises.readFile(this.ruta, 'utf-8'))
            return load;
        } catch (error) {
            console.log(`Hubo un error ${error}`);
        }
    }

    async getById(numero) {
        try {
            const contenido = JSON.parse(await fs.promises.readFile(this.ruta, 'utf-8'))
            const object = contenido.find(o => o.id === numero)
            if (object === undefined) {
                return (`No se encuentra un objeto con el ID ${numero}`)
            } else {
                return object;
            }
        } catch (error) {
            console.log(`Hubo un error ${error}`);
        }
    }

    async newProduct(objeto) {
        try {
            let itemnuevo = objeto
            const contents = await fs.promises.readFile(this.ruta, 'utf-8')
            const agregar = JSON.parse(contents)
            let valor = agregar.slice(-1).pop()
            let numero = valor.id + 1
            agregar.push({ ...itemnuevo, id: numero })
            await fs.promises.writeFile(this.ruta, JSON.stringify(agregar, null, 2))
            return (`El nuevo ID es ${numero}`)
        } catch (error) {
            console.log(`Hubo un error ${error}`);
        }
    }

    async updateProduct(numero, objeto) {
        try {
            const contenido = JSON.parse(await fs.promises.readFile(this.ruta, 'utf-8'))
            const object = contenido.find(o => o.id === numero)
            
            if (object === undefined) {
                return (`No se encuentra un objeto con el ID ${numero}`)
            } else {
                const target = contenido.find((obj) => obj.id === numero);
                Object.assign(target,objeto)
                await fs.promises.writeFile(this.ruta, JSON.stringify(contenido,null,2))      
                return contenido;
            }
        } catch (error) {
            console.log(`Hubo un error ${error}`);
        }
    }

    async deleteById(numero) {
        try {
            const array = JSON.parse(await fs.promises.readFile(this.ruta, 'utf-8'))
            const filtered = array.filter((item) => item.id !== numero);
            await fs.promises.writeFile(this.ruta, JSON.stringify(filtered, null, 2))  
            return filtered;          
        } catch (error) {
            console.log(`Hubo un error ${error}`);
        } 
    }
}

// -------------------------------- RUTAS ------------------------- //

const routerProductos = Router()

app.use('/api', routerProductos)

routerProductos.use(express.json())
routerProductos.use(express.urlencoded({ extended: true }))
app.use(express.static('public'));



// ------------------------------- PRODUCTOS ------------------- //

let usuario = new Contenedor('./productos.txt')

routerProductos.get('/productos', async (req, res) => {

    let answer = await usuario.getAll()
    res.json(answer)

})

routerProductos.get('/productos/:id', async (req, res) => {

    const { id } = req.params
    const numero = parseInt(id)
    let answer = await usuario.getById(numero)
    res.json(answer)

})

routerProductos.post('/productos', async (req, res) => {

    const objeto = req.body
    let answer = await usuario.newProduct(objeto)
    res.json(answer)

})

routerProductos.put('/productos/:id', async (req, res) => {

    const objeto = req.body
    const { id } = req.params
    const numero = parseInt(id)
    let answer = await usuario.updateProduct(numero, objeto)
    res.json (answer)
})

routerProductos.delete('/productos/:id', async (req, res) => {

    const { id } = req.params
    const numero = parseInt(id)
    let answer = await usuario.deleteById(numero)
    res.json (answer)

})



// ---------------------------------------- SERVER --------------------------------------// 
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))


