let productos = []


fetch('http://localhost:8080/api/productos/')
            .then(res=>res.json())
            .then(json=> { 
                productos.push(...json)
            })

// console.log(productos)

// let obj = productos.find(o => o.id === 2);

// console.log(obj);
