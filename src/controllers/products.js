import {
  getAllProducts as getAllProductsService,
  getProductById as getProductByIdService,
  createProduct as createProductService,
  updateProductById as updateProductByIdService,
  deleteProductById,
} from '../services/products.js';

export const getAllProducts = async (req, res) => {
  const products = await getAllProductsService();
  res.status(200).json({
    status: 200,
    message: 'Successfully found products!',
    data: products,
  });
};

export const getProductById = async (req, res) => {
  const { productId } = req.params;

  const product = await getProductByIdService(productId);

  res.status(200).json({
    status: 200,
    message: `Successfully found product with id ${productId}!`,
    data: product,
  });
};

export const createProduct = async (req, res) => {
  const { name, price, category, description } = req.body;

  const newProduct = await createProductService({
    name,
    price,
    category,
    description,
  });

  res.status(201).json({
    status: 201,
    message: 'Successfully created a product!',
    data: newProduct,
  });
};

export const updateProductById = async (req, res) => {
  const { productId } = req.params;
  const updatedProduct = await updateProductByIdService(productId, req.body);

  res.status(200).json({
    status: 200,
    message: 'Successfully patched a product!',
    data: updatedProduct,
  });
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  await deleteProductById(id);

  res.status(204).send();
};
