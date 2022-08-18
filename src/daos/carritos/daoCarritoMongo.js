import ContenedorMongoDB from "../../contenedores/ContainerMongo.js";

class CarritoDaoMongo extends ContenedorMongoDB {
    constructor() {
        super('carrito', {
            productos: {type:Array, require:true},
            hora: {type:String, require:true},
            id: false
        })
    }
}

export default CarritoDaoMongo