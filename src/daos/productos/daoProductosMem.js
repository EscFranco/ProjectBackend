import ContainerMem from '../../contenedores/ContainerMem.js';

class ProductosDaoMem extends ContainerMem {
	constructor() {
		super([
			{
				id: 1,
				nombre: "Agua",
				precio: 220,
				img: "https://http2.mlstatic.com/D_Q_NP_777853-MLA44632277984_012021-R.webp",
				descripcion: "Bebida sin Alcohol",
				codigo: "AG01",
				stock: 30,
				hora: "27/7/2022 20:29:38"
			},
			{
				id: 2,
				nombre: "Coca Cola",
				precio: 150,
				img: "https://http2.mlstatic.com/D_Q_NP_884493-MLA44280555845_122020-R.webp",
				descripcion: "Bebida sin Alcohol",
				codigo: "CC01",
				stock: 30,
				hora: "27/7/2022 20:35:38"
			}
		]);
	}
}

export default ProductosDaoMem;
