import Contenedor from "../../contenedores/ContainerFS.js";

class ProductosDaoFs extends Contenedor {
    constructor () {
        super('./src/files/productos.json')
    }
}

export default ProductosDaoFs