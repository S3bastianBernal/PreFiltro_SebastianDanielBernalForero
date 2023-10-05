import {Router} from "express"
import { deleteData, getData, getOnePelicula, getPedidos, postData, putData,} from "../controller/almacen.controller.js";


const router = Router();



router.get('/:nombreColeccion', async (req, res) => {
    try {
        const {nombreColeccion} = req.params
        const result = await getData(nombreColeccion, {})
        res.json(result)
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Error al obtener las asignaturas' });
    }
})
router.post('/post/:nombreColeccion', async (req, res) => {
    const { nombreColeccion } = req.params;
    const data = req.body;

    try {
        const result = await postData(nombreColeccion, data);
        res.status(200).json(result);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: `Error al postear un elemento a ${nombreColeccion}` });
    }
})

router.delete('/delete/:nombreColeccion/:itemId', async (req, res) => {
    const { nombreColeccion, itemId } = req.params;
    try {
        const result = await deleteData(nombreColeccion, itemId);
        res.json(result);
    } catch (error) {
        console.error(error.message);
      res.status(500).json({ error: `Error al deletear el elemento de ${nombreColeccion}` });
    }
})


router.put('/update/:nombreColeccion/:itemId', async (req, res) => {
    const { nombreColeccion, itemId } = req.params;
    const nuevaData = req.body;

    try {
        const result = await putData(nombreColeccion, itemId, nuevaData);
        res.json(result);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: `Error al actualizar el elemento de ${nombreColeccion}` });

    }
})

router.get('/one/:id', getOnePelicula)

router.get("/pedidos/detalles", getPedidos)


export default router;