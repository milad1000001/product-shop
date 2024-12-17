import { ref, onMounted } from 'vue';
import { Product } from '@/types/Product';
import { fetchProducts, addProduct as addProductService, deleteProductsByIds } from '@/services/productService';

export function useProducts() {
  const products = ref<Product[]>([]);
  const loading = ref<boolean>(false);
  const error = ref<string | null>(null);

  const loadProducts = async () => {
    loading.value = true;
    error.value = null;
    try {
      const data = await fetchProducts();
      products.value = data.map(product => ({ ...product, selected: false }));
    } catch (err: any) {
      error.value = 'Failed to load products';
    } finally {
      loading.value = false;
    }
  };

  const addProduct = async (title: string) => {
    loading.value = true;
    error.value = null;
    try {
      const product = await addProductService(title);
      products.value.push({ ...product, selected: false });
    } catch (err: any) {
      error.value = 'Failed to add product';
    } finally {
      loading.value = false;
    }
  };

  const deleteSelectedProducts = async () => {
    loading.value = true;
    error.value = null;
    try {
      const selectedIds = products.value.filter(p => p.selected).map(p => p.id);
      await deleteProductsByIds(selectedIds);
      products.value = products.value.filter(p => !selectedIds.includes(p.id));
    } catch (err: any) {
      error.value = 'Failed to delete products';
    } finally {
      loading.value = false;
    }
  };

  onMounted(loadProducts);

  return {
    products,
    loading,
    error,
    addProduct,
    deleteSelectedProducts,
    loadProducts
  };
}