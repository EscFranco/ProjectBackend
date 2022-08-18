import Contenedor from "../../contenedores/ContainerFS.js";

class CarritoDaoFs extends Contenedor {
    constructor () {
        super('./src/files/carrito.json')
    }
}

export default CarritoDaoFs