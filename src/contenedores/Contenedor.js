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
            const hora = new Date().toLocaleString('es-AR')
            if (valor === undefined) {
                let id = 1
                agregar.push({ ...itemnuevo, hora, id })
                await fs.promises.writeFile(this.ruta, JSON.stringify(agregar, null, 2))
                return id
            } else {
            let numero = valor.id + 1
            agregar.push({ ...itemnuevo, id: numero, hora })
            await fs.promises.writeFile(this.ruta, JSON.stringify(agregar, null, 2))
            return numero
            }
        } catch (error) {
            console.log(`Hubo un error ${error}`);
        }
    }

    async updateProduct(numero, objeto) {
        try {
            const contenido = JSON.parse(await fs.promises.readFile(this.ruta, 'utf-8'))
            const object = contenido.find(o => o.id === numero)
            console.log(object)
            const hora = new Date().toLocaleString('es-AR')
            const timestamp = { hora } 
            
            if (object === undefined) {
                return (`No se encuentra un objeto con el ID ${numero}`)
            } else {
                const target = contenido.find((obj) => obj.id === numero);
                Object.assign(target,objeto,timestamp)
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
            return filtered
        } catch (error) {
            console.log(`Hubo un error ${error}`);
        } 
    }
}

module.exports = Contenedor