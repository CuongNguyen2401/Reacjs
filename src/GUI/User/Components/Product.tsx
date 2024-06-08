


import React, { useEffect, useState } from 'react';
import { getProductData } from '../../../api/ProductAPI';
import { Product } from '../../../Model/Product';
import { getCategoryData } from '../../../api/CategoryAPI';

export const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);

    const fetchProducts = async () => {
        try {
            const productResponse = await getProductData();

            console.log('Fetched product data:', productResponse);

            if (productResponse && productResponse.result) {
                setProducts(productResponse.result);
            } else {
                console.error('Error fetching product data:', productResponse);
                setProducts([]);
            }

            const categoryResponse = await getCategoryData();
            console.log('Fetched category data:', categoryResponse);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            {products.map((product) => (
                product.productStatus === 'ACTIVE' &&
                <div key={product.id} className="owl-item" style={{ width: '225px' }}>
                    <div className="single-column">
                        <div className="product-layouts">
                            <div className="product-thumb transition">
                                <div className="image">
                                    <a href={`product/${product.id}`}>
                                        {/* first picture */}
                                        <img
                                            className="image_thumb img-fluid"
                                            src={product.image}
                                            title={product.name}
                                            alt={product.name}
                                        />
                                        {/* second picture */}
                                        <img
                                            className="image_thumb_swap"
                                            src={product.image}
                                            alt={product.name}
                                        />
                                    </a>
                                    <div className="button-group">
                                        <button className="btn-cart" type="button" title="Add to Cart">
                                            <i className="fa fa-shopping-cart"></i>
                                            <span className="hidden-xs hidden-sm hidden-md">Add to Cart</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="thumb-description">
                                    <div className="caption">
                                        <h4>
                                            <a href={`product/${product.id}`}>{product.name}</a>
                                        </h4>
                                        <div className="rating">
                                            <span className="fa fa-stack">
                                                <i className="fa fa-star fa-stack-2x"></i>
                                            </span>
                                            <span className="fa fa-stack">
                                                <i className="fa fa-star fa-stack-2x"></i>
                                            </span>
                                            <span className="fa fa-stack">
                                                <i className="fa fa-star fa-stack-2x"></i>
                                            </span>
                                            <span className="fa fa-stack">
                                                <i className="fa fa-star off fa-stack-2x"></i>
                                            </span>
                                            <span className="fa fa-stack">
                                                <i className="fa fa-star off fa-stack-2x"></i>
                                            </span>
                                        </div>
                                        <div className="price">
                                            ${product.salePrice}
                                            <span className="price-tax">Without tax: ${product.price}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Products;
