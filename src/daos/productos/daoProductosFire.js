import ContenedorFirebase from "../../contenedores/ContainerFire.js"

class ProductosDaoFire extends ContenedorFirebase {
    constructor () {
        super('productos')
    }
}

export default ProductosDaoFire