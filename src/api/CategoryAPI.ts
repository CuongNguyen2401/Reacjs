import { ApiResponse } from "../Model/APIResponse";
import { CategoryRequest } from "../Model/Category";
import publicApi from "./publicAPI";

export async function getCategoryData(): Promise<ApiResponse<CategoryRequest[]> | null> {

    try {
        const response = await publicApi.get<ApiResponse<CategoryRequest[]>>("/api/v1/categories");

        if (response.data.code === 1000) {
            return response.data;
        } else {
            console.error('Error fetching category data. Unexpected response:', response);
            return null;
        }
    } catch (error) {
        console.error('Error fetching category data:', error);
        return null;
    }
}
