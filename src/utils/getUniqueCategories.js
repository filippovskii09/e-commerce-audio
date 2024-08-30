import { products } from "@/assets/products";

export const uniqueCategories = [...new Set(products.map(product => product.category))];

