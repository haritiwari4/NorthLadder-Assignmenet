import { Request, Response } from "express";
import { Product } from "../models/productModel";

const products: Product[] = [];

export function addProduct(req: Request, res: Response): void {
  const product = req.body as Product;
  products.push({ ...product, createdAt: new Date(), updatedAt: new Date() });
  res.sendStatus(201);
}

export function updateProduct(req: Request, res: Response): void {
  const productId = req.params.id;
  const updatedProduct = req.body as Partial<Product>;
  const productIndex = products.findIndex((p) => p.id === productId);
  if (productIndex !== -1) {
    const product = products[productIndex];
    products[productIndex] = {
      ...product,
      ...updatedProduct,
      updatedAt: new Date(),
    };
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
}

export function deleteProduct(req: Request, res: Response): void {
  const productId = req.params.id;
  const productIndex = products.findIndex((p) => p.id === productId);
  if (productIndex !== -1) {
    products.splice(productIndex, 1);
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
}

export function getProductById(req: Request, res: Response): void {
  const productId = req.params.id;
  const product = products.find((p) => p.id === productId);
  if (product) {
    res.json(product);
  } else {
    res.sendStatus(404);
  }
}

export function listProducts(req: Request, res: Response): void {
  const filters = req.query as Partial<Product>;
  const filteredProducts = products.filter((p) => {
    for (const key in filters) {
      if (filters[key as keyof Product] !== p[key as keyof Product]) {
        return false;
      }
    }
    return true;
  });
  res.json(filteredProducts);
}
