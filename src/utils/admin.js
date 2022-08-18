// ---------------------------- ADMINISTRADOR ---------------- // 

const checkAdmin = true

function errorAdmin(ruta, metodo) {
    const error = {
        error: -1
    }
    if (ruta && metodo) {
        error.descripcion = `ruta '${ruta}' metodo '${metodo}' no autorizado`
    } else {
        error.descripcion = 'no autorizado'
    }
    return error
}

function onlyAdmin(req, res, next) {
    if (!checkAdmin) {
        res.json(errorAdmin(req.originalUrl, req.method))
    } else {
        next()
    }
}

export default onlyAdmin