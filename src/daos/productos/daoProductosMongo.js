import ContenedorMongoDB from "../../contenedores/ContainerMongo.js";

class ProductosDaoMongo extends ContenedorMongoDB {
    constructor() {
        super('productos', {
            nombre: { type: String, require: true, max: 100 },
            precio: { type: Number, require: true },
            img: { type: String, require: true, max: 200 },
            descripcion: { type: String, require: true, max: 300 },
            codigo: { type: String, require: true, max: 300 },
            stock: { type: Number, require: true },
            hora: { type: String, require: true },
            id: false
        })
    }
}

export default ProductosDaoMongo