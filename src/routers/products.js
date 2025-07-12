import express from 'express';
import { getAllProducts, getProductById } from '../controllers/products.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = express.Router();

router.get('/', ctrlWrapper(getAllProducts));
router.get('/:id', ctrlWrapper(getProductById));

export default router;
