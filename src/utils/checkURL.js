// HANDLER

const urlCheck = (req, res, next) => {
	if (req.url.includes('/api/carrito') || req.url.includes('/api/productos'))
		next()
	else
		res.json({
			error: -2,
			description: `ruta ${req.originalUrl} metodo ${req.method} no implementada`,
		});
};

export default urlCheck