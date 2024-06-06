import axios from 'axios';
import { Product } from '../Model/Product';
import publicApi from './publicAPI';
import exp from 'constants';
import { ApiResponse } from '../Model/APIResponse';


export async function getProductData(): Promise<ApiResponse<Product[]> | null> {
    try {
        const response = await publicApi.get<ApiResponse<Product[]>>("/api/v1/products");

        if (response.data.code === 1000) {
            return response.data;
        } else {
            console.error('Error fetching product data. Unexpected response:', response);
            return null;
        }
    } catch (error) {
        console.error('Error fetching product data:', error);
        return null;
    }
}

export async function getProductById(id: number): Promise<Product | null> {
    try {
        const response = await publicApi.get<ApiResponse<Product>>(`/api/v1/products/${id}`);

        if (response.status === 200 && response.data.code === 1000) {
            return response.data.result;
        } else {
            console.error('Error fetching product by ID. Unexpected response:', response);
            return null;
        }
    } catch (error) {
        console.error('Error fetching product by ID:', error);
        return null;
    }
}
// Add a new product
export async function addProduct(product: Product): Promise<Product | null> {
    try {
        const response = await publicApi.post<ApiResponse<Product>>(`/api/v1/products`, product);

        if (response.status === 200 && response.data.code === 1000) {
            return response.data.result;
        } else {
            console.error('Error adding product. Unexpected response:', response);
            return null;
        }
    } catch (error) {
        console.error('Error adding product:', error);
        return null;
    }
}

// Delete a product
export async function deleteProduct(productId: number): Promise<boolean> {
    try {
        const response = await publicApi.delete(`/api/v1/products/${productId}`);
        return response.status === 204;
    } catch (error) {
        console.error('Error deleting product:', error);
        return false;
    }
}

// Update an existing product
export async function updateProduct(product: Product): Promise<Product | null> {
    try {
        const response = await publicApi.put<ApiResponse<Product>>(`/api/v1/products`, product);

        if (response.status === 200 && response.data.code === 1000) {
            return response.data.result;
        } else {
            console.error('Error updating product. Unexpected response:', response);
            return null;
        }
    } catch (error) {
        console.error('Error updating product:', error);
        return null;
    }
}
