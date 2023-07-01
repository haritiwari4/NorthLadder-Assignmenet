import { Router } from 'express';
import {
  addProduct,
  updateProduct,
  deleteProduct,
  getProductById,
  listProducts,
} from '../controller/productController';

const router = Router();

router.post('/', addProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.get('/:id', getProductById);
router.get('/', listProducts);

export default router;
