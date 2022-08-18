import ContainerMem from '../../contenedores/ContainerMem.js';

class CarritoDaoMem extends ContainerMem {
	constructor() {
		super([
			{
				"productos": [
					{
						id: 1,
						nombre: "Agua",
						precio: 220,
						img: "https://http2.mlstatic.com/D_Q_NP_777853-MLA44632277984_012021-R.webp",
						descripcion: "Bebida sin Alcohol",
						codigo: "AG01",
						stock: 30,
						hora: "27/7/2022 20:29:38"
					}
				],
				hora: "2/8/2022 20:59:06",
				id: 1
			},
			{
				"productos": [],
				id: 2,
				hora: "17/8/2022 21:21:56"
			},
			{
				"productos": [
					{
						id: 1,
						nombre: "Agua",
						precio: 220,
						img: "https://http2.mlstatic.com/D_Q_NP_777853-MLA44632277984_012021-R.webp",
						descripcion: "Bebida sin Alcohol",
						codigo: "AG01",
						stock: 30,
						hora: "27/7/2022 20:29:38"
					}
				],
				id: 3,
				hora: "2/8/2022 21:00:04"
			}
		]);
	}
}

export default CarritoDaoMem;