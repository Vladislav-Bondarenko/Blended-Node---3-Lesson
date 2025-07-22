import express from 'express';
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProductById,
  deleteProduct,
} from '../controllers/products.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = express.Router();

router.get('/', ctrlWrapper(getAllProducts));
router.get('/:productId', ctrlWrapper(getProductById));
router.post('/', ctrlWrapper(createProduct));
router.patch('/:productId', ctrlWrapper(updateProductById));
router.delete('/:id', deleteProduct);

export default router;
