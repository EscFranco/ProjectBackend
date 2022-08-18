export default class ContainerMem {
	constructor(objetos) {
		this.objetos = objetos;
	}
	
	getAll() {
		return this.objetos
	}

	getById(id) {
		const objeto = this.objetos.find((obj) => obj.id == id);
		if (objeto == undefined) {
			throw new Error(`Ocurrio un error, no se encontro el id ${id}`);
		} else {
			return objeto;
		}
	}

	async newProduct(objeto) {
		const idList = this.objetos.map((a) => a.id);
		const largestId = idList.reduce((a, b) => {
			return Math.max(a, b);
		}, 0);
		const newId = largestId + 1;
		const timestamp = new Date().toLocaleString('es-AR');
		this.objetos.push({ ...objeto, timestamp, id: newId || 1 });
		return newId;
	}

	async updateProduct(numero, objeto) {
		const index = this.objetos.findIndex((obj) => obj.id == numero);
		const hora = new Date().toLocaleString('es-AR');
		if (index == -1) {
			throw new Error(
				`Hubo un error al actualizar, no se encontro el id ${numero}`
			);
		} else {
			this.objetos[index] = { ...objeto, numero, hora };
		}
	}

	async deleteById(id) {
		const index = this.objetos.findIndex((obj) => obj.id == id);
		if (index == -1) {
			throw new Error(
				`Hubo un error al borrar el archivo, no se encontro el id ${id}`
			);
		} else {
			this.objetos.splice(index, 1);
		}
	}

}
