import axios from "axios";
import { Product } from "../BLL/Product";


const PRODUCT_API_BASE_URL = "http://localhost:5232/api/v1/Products";

export const products: Product[] = [];

export async function getProductData(): Promise<Product[] | null> {
    try {
        const response = await axios.get<Product[]>(PRODUCT_API_BASE_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching product data:", error);
        return null;
    }
}

// Fetch data and populate products array
getProductData().then(data => {
    if (data) {
        products.push(...data);
        // console.log("Fetched product data:", products);
    } else {
        console.log("No data fetched");
    }
});
export async function addProduct(product: Product): Promise<Product | null> {
    try {
        const response = await axios.post<Product>(PRODUCT_API_BASE_URL, product);
        return response.data;
    } catch (error) {
        console.error("Error adding product:", error);
        return null;
    }
}
export async function deleteProduct(productId: number): Promise<boolean> {

    try {
        const response = await axios.delete(`${PRODUCT_API_BASE_URL}/${productId}`);
        return response.status === 204;
    } catch (error) {
        console.error("Error deleting product:", error);
        return false;
    }
}
export async function updateProduct(product: Product): Promise<Product | null> {
    try {
        const response = await axios.put<Product>(`${PRODUCT_API_BASE_URL}/${product.id}`, product);
        return response.data;
    } catch (error) {
        console.error("Error updating product:", error);
        return null;
    }
}

