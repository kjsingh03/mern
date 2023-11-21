import {Router} from 'express';
import { getAllProducts,getProduct,removeProduct,updateProduct,createProduct } from '../controller/products.js';

const productRouter=Router();

productRouter
    .post('/',createProduct)
    .get('/',getAllProducts)
    .get('/:id',getProduct)
    .put('/:id',updateProduct)
    .delete('/:id',removeProduct);

export default productRouter;