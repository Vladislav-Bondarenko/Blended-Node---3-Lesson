import mongoose from 'mongoose';
import Product from '../db/models/Product.js';
import createError from 'http-errors';

export async function getAllProducts() {
  return await Product.find();
}

export async function getProductById(productId) {
  if (!mongoose.Types.ObjectId.isValid(productId)) {
    throw createError(400, 'Invalid product ID format');
  }

  const product = await Product.findById(productId);

  if (!product) {
    throw createError(404, 'Product not found');
  }

  return product;
}

export async function createProduct({ name, price, category, description }) {
  if (!name || !price || !category) {
    throw createError(400, 'Missing required fields: name, price, category');
  }

  const newProduct = await Product.create({
    name,
    price,
    category,
    description,
  });
  return newProduct;
}

export async function updateProductById(productId, updateData) {
  if (!mongoose.Types.ObjectId.isValid(productId)) {
    throw createError(400, 'Invalid product ID format');
  }

  const updatedProduct = await Product.findByIdAndUpdate(
    productId,
    updateData,
    {
      new: true,
      runValidators: true,
    },
  );

  if (!updatedProduct) {
    throw createError(404, 'Product not found');
  }

  return updatedProduct;
}

export async function deleteProductById(productId) {
  const product = await Product.findByIdAndDelete(productId);
  return product;
}
