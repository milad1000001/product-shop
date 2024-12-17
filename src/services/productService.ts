import { Product } from '@/types/Product';
import axiosInstance from '@/plugins/axios';

export async function fetchProducts(): Promise<Product[]> {
  const { data } = await axiosInstance.get<Product[]>('/products');
  return data;
}

export async function addProduct(title: string): Promise<Product> {
  const newProduct: Product = {
    id: crypto.randomUUID(),
    base64Image: 'https://via.placeholder.com/120',
    description: '',
    price: 0,
    strikePrice: 0,
    title: title
  };
  const { data } = await axiosInstance.post<Product>('/products', newProduct);
  return data;
}

export async function deleteProductsByIds(ids: string[]): Promise<void> {
  await Promise.all(ids.map(id => axiosInstance.delete(`/products/${id}`)));
}