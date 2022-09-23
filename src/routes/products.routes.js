import { Router } from "express";
import {createNewProduct, getProducts, getProductById, deleteProductById, getTotalProducts, updateProductById} from '../controllers/products.controller'
const router = Router();
router.get('/products',getProducts); //obtener
router.post('/products',createNewProduct); //esto es para crear un producto, para probar el post necesitamos un cliente rest (extension rest client)
router.get('/products/count',getTotalProducts);
router.get('/products/:id', getProductById) //obtener un solo producto x id
router.delete('/products/:id',deleteProductById)//borrar
router.put('/products/:id',updateProductById) //actualizar

export default router //creo q si no las exporto no puedo importarlas desde otro archivo