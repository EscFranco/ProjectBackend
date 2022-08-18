import mongoose from "mongoose";
import config from '../config.js'


await mongoose.connect(config.mongodb.cnxStr)

class ContenedorMongoDB {
    constructor(nombreCollection, schema) {
        this.collection = mongoose.model(nombreCollection, schema)
    }

    async getAll() {
        try {
            const docs = await this.collection.find({})
            return docs
        } catch (error) {
            console.log(`Hubo un error : ${error}`)
        }
    }

    async getById(numero) {
        try {
            const docs = await this.collection.findOne({'id' : numero})
            return docs
        } catch (error) {
            console.log(`Hubo un error : ${error}`)
        }
    }

    async newProduct(objeto) {
        try {
            const content = await this.collection.find({})
            let valor = content.slice(-1).pop()
            const hora = new Date().toLocaleString('es-AR')
            console.log(valor)
            if (valor === undefined) {
                let id = 1
                content.push({...objeto, hora, id})
                await this.collection.create( content , {id:false})
                return id
            } else {
                let numero = valor.id + 1
                content.push({...objeto, hora, id: numero})
                await this.collection.create( content , {id:false} ) 
                return numero
            }

        } catch (error) {
            console.log(`Hubo un error : ${error}`)
        }
    }

    async updateProduct(numero, objeto) {
        try {
            const content = await this.collection.find({})
            const object = content.find( o => o.id === numero)
            const hora = new Date().toLocaleString('es-AR')
            const timestamp = hora

            if ( object === undefined) {
                return (`No se encuentra un objeto con el ID ${numero}`)
            } else {
                const target = content.find((obj) => obj.id === numero)
                Object.assign(target,objeto)
                await this.collection.replaceOne({'id' : numero} , {...object.toObject(), hora:timestamp})
                return this.getAll()              
            }

        } catch (error) {
            console.log(`Hubo un error ${error}`);
        }
    }

    async deleteById(numero) {
        try {
            const docs = await this.collection.deleteOne({"id" : numero})
            return docs
        } catch (error) {
            console.log(`Hubo un error ${error}`);
        }
    }
}

export default ContenedorMongoDB
