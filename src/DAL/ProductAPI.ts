import axios from "axios";

const PRODUCT_API_BASE_URL = "http://localhost:3000/api/1/products";

export default async function getProductData() {
    try {
        const response = await axios.get(PRODUCT_API_BASE_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching product data:", error);
        return null;
    }

}
