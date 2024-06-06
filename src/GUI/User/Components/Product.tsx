import React from 'react'

export const Product = () => {
    return (
        <>
            <div className="owl-item" style={{ width: "225px" }}>
                <div className="single-column">
                    <div className="product-layouts">
                        <div className="product-thumb transition">
                            <div className="image">
                                <a href="indexbb02.html?route=product/product&amp;product_id=42">
                                    {/* first picture */}
                                    <img className="image_thumb" src="user-assets/image/cache/catalog/demo/product/01-210x210.jpg" title="aliquam quaerat voluptatem" alt="aliquam quaerat voluptatem" />
                                    {/* second picture */}
                                    <img className="image_thumb_swap" src="user-assets/image/cache/catalog/demo/product/01-02-210x210.jpg" title="aliquam quaerat voluptatem" alt="aliquam quaerat voluptatem" />
                                </a>
                                <div className="button-group">
                                    <button className="btn-cart" type="button" title="Add to Cart"  >
                                        <i className="fa fa-shopping-cart"></i>
                                        <span className="hidden-xs hidden-sm hidden-md">Add to Cart</span>
                                    </button>
                                    <button className="btn-wishlist" title="Add to wishlist"  >
                                        <i className="fa fa-heart"></i>
                                        <span title="Add to wishlist">Add to wishlist</span>
                                    </button>
                                    {/* <button className="btn-compare" title="Add to Compare" >
                                        <i className="fa fa-exchange"></i>
                                        <span title="Add to Compare">Add to Compare</span>
                                    </button> */}
                                </div>
                            </div>
                            <div className="thumb-description">
                                <div className="caption">
                                    <h4><a href="indexbb02.html?route=product/product&amp;product_id=42">aliquam quaerat voluptatem</a></h4>
                                    <div className="rating">
                                        <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                        <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                        <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                        <span className="fa fa-stack"><i className="fa fa-star off fa-stack-2x"></i></span>
                                        <span className="fa fa-stack"><i className="fa fa-star off fa-stack-2x"></i></span>
                                    </div>
                                    <div className="price">
                                        $122.00
                                        <span className="price-tax">Without tax: $100.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}
