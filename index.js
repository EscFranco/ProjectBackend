const fs = require('fs')

class Contenedor {
    constructor(ruta) {
        this.ruta = ruta
    }

    async getAll() {
        try {
            const load = await fs.promises.readFile(this.ruta, 'utf-8')
            console.log(`Este es el array con todos los objetos presentes ${load}`)
        } catch (error) {
            console.log(`Hubo un error ${error}`);
        }
    }

    async save(objeto) {
        try {
            let itemnuevo = objeto
            const contents = await fs.promises.readFile(this.ruta, 'utf-8')
            const agregar = JSON.parse(contents)
            let valor = agregar.slice(-1).pop()
            let numero = valor.id + 1    
            agregar.push({...itemnuevo, id:numero})
            await fs.promises.writeFile(this.ruta, JSON.stringify(agregar, null, 2))
            console.log(`El id asignado es ${numero}`)
        } catch (error) {
            console.log(`Hubo un error ${error}`);
        }
    }

    async getById(numero) {
        try {
            const array = await fs.promises.readFile(this.ruta, 'utf-8')
            const contenido = JSON.parse(array)
            let obj = JSON.stringify(contenido.find(o => o.id === numero))
            if ( obj === undefined ) {
                console.log(`No hay nada ${obj}`);
            } else {
                console.log (`Este es el objeto ${obj}`)
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
        } catch (error) {
            console.log(`Hubo un error ${error}`);
        } 
    }

    async deleteAll() {
        try {
            let arrayVacio = []
            await fs.promises.writeFile(this.ruta, JSON.stringify(arrayVacio, null, 2))
        } catch (error) {
            console.log(`Hubo un error ${error}`);
        } 
    }

    async randomProduct() {
        try {
            const array = await fs.promises.readFile(this.ruta, 'utf-8')
            const contenido = JSON.parse(array)
            var item = contenido[Math.floor(Math.random()*contenido.length)];
            console.log(item)
        } catch (error) {
            console.log(`Hubo un error ${error}`);
        }
    }
}


let usuario = new Contenedor('./productos.txt')

// usuario.save({ "gusto": 'Sprite', "precio": 300 })
// usuario.getById(3)
// usuario.deleteById(1)
// usuario.getAll()
// usuario.deleteAll()
usuario.randomProduct()
