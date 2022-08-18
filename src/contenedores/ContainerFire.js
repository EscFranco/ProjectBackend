import admin from 'firebase-admin'
import config from '../config.js'

admin.initializeApp({
    credential: admin.credential.cert(config.firebase)
})

const db = admin.firestore();

class ContenedorFirebase {
    constructor(nombreCollection) {
        this.collection = db.collection(nombreCollection)
    }

    async getAll() {
        try {
            const snapshot = await this.collection.get()
            return snapshot.docs.map(doc => doc.data());
        } catch (error) {
            console.log(`Hubo un error : ${error}`)
        }
    }

    async getById(numero) {
        try {
            const id = numero.toString()
            const objeto = await this.collection.doc(id).get();
            if (objeto.data() === undefined) {
                throw new Error(`Ocurrio un error, no se encontro el id ${id}`);
            } else {
                return objeto.data();
            }
        } catch (error) {
            console.log(`Hubo un error : ${error}`)
        }
    }

    async newProduct(objeto) {
        try {
            const snapshot = await this.collection.get()
            const check = snapshot.docs.map(doc => doc.data());
            let valor = check.slice(-1).pop()
            const hora = new Date().toLocaleString('es-AR')
            if ( valor === undefined ) {
                let id = 1
                let doc = this.collection.doc(`${id}`)
                await doc.create({...objeto, hora})
                await this.collection.doc(doc.id).update({ id: id })
                return id
            } else {
                let numero = valor.id + 1
                let doc = this.collection.doc(`${numero}`)
                await doc.create({...objeto, hora})
                await this.collection.doc(doc.id).update({ id: numero })
                return numero
            }

        } catch (error) {
            console.log(`Hubo un error : ${error}`)
        }
    }

    async updateProduct(numero, objeto) {
		try {
            const id = numero.toString()
            const element = await this.collection.doc(id).get();
            if ( element.data() === undefined) {
                return (`No se encuentra un objeto con el ID ${numero}`)
            } else {
                const hora = new Date().toLocaleString('es-AR');
                await this.collection.doc(id).update({ ...objeto, hora });
                return { ...objeto, hora , id: numero}           
            }

		} catch (error) {
			console.log(`Hubo un error : ${error}`)
		}
	}

    async deleteById(numero) {
		try {
            const id = numero.toString()
			await this.collection.doc(id).delete();
            return this.getAll()
		} catch (error) {
			console.log(`Hubo un error : ${error}`)
		}
	}
}

export default ContenedorFirebase