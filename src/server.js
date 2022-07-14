// -----------------  EXPRESS --------------------- //

const express = require('express');
const { engine } = require('express-handlebars');

const app = express();


// -----------------  HANDLEBARS --------------------- //

// app.engine('hbs', engine({ extname: "hbs", defaultLayout: "main.hbs", layoutsDir: "", }));
// app.set('view engine', 'hbs');
// app.set("views", "./views");
// app.use(express.urlencoded({ extended: true }));

// -----------------  PUG  --------------------- //

// app.set ('views', './views');
// app.set ('view engine', 'pug');
// app.use(express.urlencoded({ extended: true }));

// -----------------  EJS  --------------------- //

app.set ('views', './views');
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// --------------------- FILESYSTEM ------------- //
const fs = require('fs')

// -------------------- CLASE --------- //

class Contenedor {
    constructor(ruta) {
        this.ruta = ruta
    }

    async getAll() {
        try {
            const load = JSON.parse(await fs.promises.readFile(this.ruta, 'utf-8'))
            return load;
        } catch (error) {
            console.log(`Hubo un error ${error}`);
        }
    }

    async newProduct(objeto) {
        try {
            let itemnuevo = objeto
            const contents = await fs.promises.readFile(this.ruta, 'utf-8')
            const agregar = JSON.parse(contents)
            let valor = agregar.slice(-1).pop()
            let numero = valor.id + 1
            agregar.push({ ...itemnuevo, id: numero })
            await fs.promises.writeFile(this.ruta, JSON.stringify(agregar, null, 2))
        } catch (error) {
            console.log(`Hubo un error ${error}`);
        }
    }

}


// ------------------------------- PRODUCTOS ------------------- //

let usuario = new Contenedor('./productos.txt')

app.get('/', async (req, res) => {
    res.render('form')
})

app.get('/productos', async (req, res) => {
    let answer = await usuario.getAll()
    res.render('productos', { answer })
})


app.post('/productos', async (req, res) => {
    const objeto = req.body
    await usuario.newProduct(objeto)
    res.redirect('/')
})

// ---------------------------------------- SERVER --------------------------------------// 

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))


