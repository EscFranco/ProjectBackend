let productosDao
let carritosDao

switch (process.env.PERS) {
    case 'json':
        const { default: ProductosDaoArchivo } = await import('./productos/daoProductosFS.js')
        const { default: CarritosDaoArchivo } = await import('./carritos/daoCarritoFS.js')

        productosDao = new ProductosDaoArchivo
        carritosDao = new CarritosDaoArchivo

        break;

    case 'mongoDB':
        const { default: ProductosDaoMongo } = await import('./productos/daoProductosMongo.js')
        const { default: CarritosDaoMongo } = await import('./carritos/daoCarritoMongo.js')

        productosDao = new ProductosDaoMongo
        carritosDao = new CarritosDaoMongo

        break;

    case 'firebase':
        const { default: ProductosDaoFire } = await import('./productos/daoProductosFire.js')
        const { default: CarritosDaoFire } = await import('./carritos/daoCarritoFire.js')

        productosDao = new ProductosDaoFire
        carritosDao = new CarritosDaoFire

        break;

    case 'memory':
        const { default: ProductosDaoMem } = await import('./productos/daoProductosMem.js')
        const { default: CarritosDaoMem } = await import('./carritos/daoCarritoMem.js')

        productosDao = new ProductosDaoMem
        carritosDao = new CarritosDaoMem

        break;

    default:
        break;
}

export { productosDao, carritosDao }