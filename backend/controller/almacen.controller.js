import conexion from "../database/connection.js";
import { ObjectId } from "mongodb";


const getPedidos = async (req, res) => {
    try {
        const db = await conexion();
        const result = await db.collection("pedidos").aggregate([
            {$lookup:{
                from: "videojuegos",
                localField: "producto",
                foreignField: 'nombre',
                as: 'VideoJuegos'
            }},
            {$lookup:{
                from: "clientes",
                localField: "cliente",
                foreignField: 'nit',
                as: 'Clientes'
            }}
        ]).toArray();
        res.json(result)
    } catch (error) {
        res.status(404).json(error.message);
    }
};

async function getData (nombreColeccion) {
    try {
        const db = await conexion();
        const collection =  await db.collection(nombreColeccion).find().toArray();
        return collection
    } catch (error) {
        console.error(error.message);
        throw error;
    }
}

async function postData(nombreColeccion, data){
    try {
        const db = await conexion();
        const collection = await db.collection(nombreColeccion).insertOne(data);
        return collection
    } catch (error) {
        console.error(error);
    }
}

async function deleteData(nombreColeccion, itemId){
    try {
        const db = await conexion();
        const collection = await db.collection(nombreColeccion).findOneAndDelete({_id: new ObjectId(itemId)});
        
        if (collection.value) {
            return { message: `Elemento con ID ${itemId} no encontrado en ${nombreColeccion}` };
        }
        else{
            return {message: `Elemento con ID ${itemId} eliminado correctamente`}
        }

    } catch (error) {
        console.error(error.message);
    }
}

async function putData(nombreColeccion, itemId, nuevaData){
    try {
        const db = await conexion();
        const result = await db.collection(nombreColeccion).findOneAndUpdate({_id: new ObjectId(itemId)}, {$set: nuevaData}, {new: true});
        
        if (result.matchedCount === 0) {
            throw new Error(`Elemento con ID ${itemId} no encontrado en ${nombreColeccion}`);
        }

        return nuevaData;
    } catch (error) {
        console.error(error.message);
        throw error;
    }
}


const getOnePelicula = async (req, res) => {
    try {
        const db = await conexion();
        const result = await db.collection("peliculas").find({_id: new ObjectId(req.params.id)}).toArray();
        res.json(result);
    } catch (error) {
        res.status(404).json(error.message);
    }
};


export {
    getOnePelicula,
    getPedidos,
    getData,
    postData,
    deleteData,
    putData
}
