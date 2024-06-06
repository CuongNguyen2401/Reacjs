import { ProductStatus } from "./Enums/ProductStatus";

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    salePrice: number;
    quantity: number;
    categoryId: number;
    productStatus: ProductStatus;
}
