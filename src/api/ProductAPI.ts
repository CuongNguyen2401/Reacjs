import axios from 'axios';
import { Product } from '../Model/Product';
import publicApi from './publicAPI';
import exp from 'constants';
import { ApiResponse } from '../Model/APIResponse';
import privateApi from './privateAPI';
import qs from 'qs';


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
export async function addProduct(formData: FormData): Promise<Product | null> {
    try {
        const response = await privateApi.post<ApiResponse<Product>>(`/api/v1/products`, formData);

        if (response.status === 200 && response.data.code === 1000) {
            return response.data.result;
        } else {
            console.error('Error adding product. Unexpected response:', response);
            throw new Error('Error adding product');
        }
    } catch (error) {
        console.error('Error adding product:', error);
        throw new Error('Error adding product');
    }
}

// Delete a product
export const deleteProducts = async (ids: number[]): Promise<ApiResponse<string> | { code: number; result: string; message: string; data: string; }> => {
    try {
        const response = await privateApi.delete<ApiResponse<string>>(`/api/v1/products`, {
            params: { ids },
            paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' })
        });
        if (response.data.code !== 1000) throw new Error("Error: " + response.data.message);

        return response.data.message ? response.data : { code: 1000, result: "Success", message: "", data: "" };
    } catch (error) {
        console.error(error);
        throw error;
    }
}
export const activeProducts = async (ids: number[]): Promise<ApiResponse<string> | { code: number; result: string; message: string; data: string; }> => {
    try {
        const response = await privateApi.put<ApiResponse<string>>(
            `/api/v1/products/active`,
            null, // No request body
            {
                params: { ids }, // Pass ids as query parameters
                paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' })
            }
        );
        if (response.data.code !== 1000) throw new Error("Error: " + response.data.message);

        return response.data.message ? response.data : { code: 1000, result: "Success", message: "", data: "" };
    } catch (error) {
        console.error(error);
        throw error;
    }
}



// Update an existing product
export async function updateProduct(formData: FormData): Promise<Product | null> {
    try {
        const response = await privateApi.put<ApiResponse<Product>>(`/api/v1/products`, formData);

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
