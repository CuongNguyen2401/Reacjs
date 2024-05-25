export type Product = {
    make: string;
    model: string;
    price: number;
    electric: boolean;
    month?: string;
};

export const products: Product[] = [
    { make: 'Tesla', model: 'Model Y', price: 64950, electric: true, month: 'January' },
    { make: 'Ford', model: 'F-Series', price: 33850, electric: false, month: 'February' },
    { make: 'Toyota', model: 'Corolla', price: 29600, electric: false, month: 'March' },
    { make: 'Mercedes', model: 'EQA', price: 48890, electric: true, month: 'April' },
    { make: 'Fiat', model: '500', price: 15774, electric: false, month: 'May' },
    { make: 'Nissan', model: 'Juke', price: 20675, electric: false, month: 'June' },
];
