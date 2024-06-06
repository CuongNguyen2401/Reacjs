import React from 'react'


export const DetailProduct = () => {
    return (
        <>
            <div className="row">
                <div className="product-block">
                    <div className="col-sm-5 product-images col-xs-12 col-md-6">
                        {/* <!-- Product Image thumbnails START --> */}
                        <div className="thumbnails">
                            <div className="product-image">
                                <a className="thumbnail">
                                    <img src="user-assets/image/cache/catalog/demo/product/09-800x800.jpg" title="perspiciatis unde omnis" data-zoom-image="https://opencart.templatetrip.com/OPC02/OPC040/OPC15/assets/image/cache/catalog/demo/product/09-800x800.jpg" alt="perspiciatis unde omnis"></img>
                                </a>
                            </div>

                            <div className="additional-images-container">
                                <div className="additional-images owl-carousel owl-theme" style={{ opacity: 1, display: "block" }}>
                                    <div className="owl-wrapper-outer"><div className="owl-wrapper" style={{ width: '1100px', left: '0px', display: 'block' }}><div className="owl-item" style={{ width: "110px" }}><div className="image-additional">
                                        <img src="user-assets/image/cache/catalog/demo/product/09-02-300x300.jpg" title="perspiciatis unde omnis" data-image="https://opencart.templatetrip.com/OPC02/OPC040/OPC15/assets/image/cache/catalog/demo/product/09-02-800x800.jpg" data-zoom-image="https://opencart.templatetrip.com/OPC02/OPC040/OPC15/assets/image/cache/catalog/demo/product/09-02-800x800.jpg" alt="perspiciatis unde omnis"></img>
                                    </div></div><div className="owl-item" style={{ width: "110px" }}><div className="image-additional">
                                        <img src="user-assets/image/cache/catalog/demo/product/05-300x300.jpg" title="perspiciatis unde omnis" data-image="https://opencart.templatetrip.com/OPC02/OPC040/OPC15/assets/image/cache/catalog/demo/product/05-800x800.jpg" data-zoom-image="https://opencart.templatetrip.com/OPC02/OPC040/OPC15/assets/image/cache/catalog/demo/product/05-800x800.jpg" alt="perspiciatis unde omnis"></img>
                                    </div></div><div className="owl-item" style={{ width: "110px" }}><div className="image-additional">
                                        <img src="user-assets/image/cache/catalog/demo/product/04-300x300.jpg" title="perspiciatis unde omnis" data-image="https://opencart.templatetrip.com/OPC02/OPC040/OPC15/assets/image/cache/catalog/demo/product/04-800x800.jpg" data-zoom-image="https://opencart.templatetrip.com/OPC02/OPC040/OPC15/assets/image/cache/catalog/demo/product/04-800x800.jpg" alt="perspiciatis unde omnis"></img>
                                    </div></div><div className="owl-item" style={{ width: "110px" }}><div className="image-additional">
                                        <img src="user-assets/image/cache/catalog/demo/product/03-300x300.jpg" title="perspiciatis unde omnis" data-image="https://opencart.templatetrip.com/OPC02/OPC040/OPC15/assets/image/cache/catalog/demo/product/03-800x800.jpg" data-zoom-image="https://opencart.templatetrip.com/OPC02/OPC040/OPC15/assets/image/cache/catalog/demo/product/03-800x800.jpg" alt="perspiciatis unde omnis"></img>
                                    </div></div><div className="owl-item" style={{ width: "110px" }}><div className="image-additional">
                                        <img src="user-assets/image/cache/catalog/demo/product/12-300x300.jpg" title="perspiciatis unde omnis" data-image="https://opencart.templatetrip.com/OPC02/OPC040/OPC15/assets/image/cache/catalog/demo/product/12-800x800.jpg" data-zoom-image="https://opencart.templatetrip.com/OPC02/OPC040/OPC15/assets/image/cache/catalog/demo/product/12-800x800.jpg" alt="perspiciatis unde omnis"></img>
                                    </div></div></div></div>




                                    <div className="owl-controls clickable"><div className="owl-buttons"><div className="owl-prev">prev</div><div className="owl-next">next</div></div></div></div>
                            </div>
                            {/* <!-- Product Image thumbnails END --> */}
                        </div>
                    </div>

                    <div className="col-sm-7 product-details col-xs-12 col-md-6">
                        <h1 className="product-name">perspiciatis unde omnis</h1>

                        <table className="product-info">
                            <tbody><tr><td>Brands</td><td className="product-info-value"><a href="index98fa.html?route=product/manufacturer/info&amp;manufacturer_id=8">Apple</a></td></tr>
                                <tr><td>Product Code:</td><td className="product-info-value">Product 16</td></tr>
                                <tr><td>Reward Points:</td><td className="product-info-value">600</td></tr>
                                <tr><td>Availability:</td><td className="product-info-value">In Stock</td></tr>
                            </tbody></table>

                        {/* <!-- Product Rating START --> */}
                        <div className="rating">
                            <div className="product-rating">
                                <span className="fa fa-stack"><i className="fa fa-star off fa-stack-1x"></i></span>
                                <span className="fa fa-stack"><i className="fa fa-star off fa-stack-1x"></i></span>
                                <span className="fa fa-stack"><i className="fa fa-star off fa-stack-1x"></i></span>
                                <span className="fa fa-stack"><i className="fa fa-star off fa-stack-1x"></i></span>
                                <span className="fa fa-stack"><i className="fa fa-star off fa-stack-1x"></i></span>
                            </div>
                            <a className="product-total-review" href="#"  ><i className="fa fa-comment"></i>0 reviews</a>
                            <a className="product-write-review" href="#"  ><i className="fa fa-pencil"></i>Write a review</a>
                        </div>
                        {/* <!-- Product Rating END --> */}

                        <ul className="list-unstyled product-price">
                            <li>
                                <h2>$14.00</h2>
                            </li>
                            <li className="product-tax">Ex Tax: $10.00</li>


                        </ul>

                        {/* <!-- Product Options START --> */}
                        <div id="product" className="product-options">


                            <div className="form-group product-quantity">
                                <label className="control-label" >Qty</label>
                                <input type="text" name="quantity" value="1" id="input-quantity" className="form-control"></input>
                                <input type="hidden" name="product_id" value="43"></input>
                                <button type="button" id="button-cart" data-loading-text="Loading..." className="btn btn-primary btn-lg btn-block">Add to Cart</button>
                            </div>
                        </div>
                        {/* <!-- Product Options END --> */}

                        {/* <!-- Product Wishlist Compare START --> */}
                        <div className="btn-group">
                            <button className="btn btn-default product-btn-wishlist" type="button" title="Add to Wish List" ><i className="fa fa-heart"></i>
                                Add to Wish List
                            </button>
                            <button className="btn btn-default product-btn-compare" type="button" title="Add to compare" ><i className="fa fa-exchange"></i>
                                Add to compare
                            </button>
                        </div>
                        {/* <!-- Product Wishlist Compare END -->


                            <!-- AddThis Button BEGIN --> */}
                        <div className="addthis_toolbox addthis_default_style" data-url="indexb8ca.html?route=product/product&amp;product_id=43"><a className="addthis_button_facebook_like" ></a> <a className="addthis_button_tweet"></a> <a className="addthis_button_pinterest_pinit"></a> <a className="addthis_counter addthis_pill_style"></a></div>
                        <script type="text/javascript" src="../../../../s7.addthis.com/js/300/addthis_widget.js#pubid=ra-515eeaf54693130e"></script>
                        {/* <!-- AddThis Button END --> */}
                    </div>
                    {/* <!-- Product option details END --> */}
                </div>
                {/* <!-- Product nav Tabs START --> */}
                <div className="col-sm-12 product-tabs">
                    <ul className="nav nav-tabs">
                        <li className="active"><a href="#tab-description" data-toggle="tab">Description</a></li>
                        <li><a href="#tab-specification" data-toggle="tab">Specification</a></li>
                        <li><a href="#tab-review" data-toggle="tab">Reviews (0)</a></li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane active" id="tab-description"><div>
                            <p>
                                <b>Intel Core 2 Duo processor</b></p>
                            <p>
                                Powered by an Intel Core 2 Duo processor at speeds up to 2.16GHz, the new MacBook is the fastest ever.</p>
                            <p>
                                <b>1GB memory, larger hard drives</b></p>
                            <p>
                                The new MacBook now comes with 1GB of memory standard and larger hard drives for the entire line perfect for running more of your favorite applications and storing growing media collections.</p>
                            <p>
                                <b>Sleek, 1.08-inch-thin design</b></p>
                            <p>
                                MacBook makes it easy to hit the road thanks to its tough polycarbonate case, built-in wireless technologies, and innovative MagSafe Power Adapter that releases automatically if someone accidentally trips on the cord.</p>
                            <p>
                                <b>Built-in iSight camera</b></p>
                            <p>
                                Right out of the box, you can have a video chat with friends or family,2 record a video at your desk, or take fun pictures with Photo Booth</p>
                        </div>
                        </div>
                        <div className="tab-pane" id="tab-specification">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <td colSpan={2}><strong>Memory</strong></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>test 1</td>
                                        <td>8gb</td>
                                    </tr>
                                </tbody>
                                <thead>
                                    <tr>
                                        <td colSpan={2}><strong>Processor</strong></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>No. of Cores</td>
                                        <td>1</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="tab-pane" id="tab-review">
                            <form className="form-horizontal" id="form-review">
                                <div id="review"><p>There are no reviews for this product.</p>
                                </div>
                                <h2>Write a review</h2>
                                <div className="form-group required">
                                    <div className="col-sm-12">
                                        <label className="control-label" htmlFor="input-name">Your Name</label>
                                        <input type="text" name="name" value="" id="input-name" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="form-group required">
                                    <div className="col-sm-12">
                                        <label className="control-label" htmlFor="input-review">Your Review</label>
                                        <textarea name="text" rows={5} id="input-review" className="form-control"></textarea>
                                        <div className="help-block"><span className="text-danger">Note:</span> HTML is not translated!</div>
                                    </div>
                                </div>
                                <div className="form-group required">
                                    <div className="col-sm-12">
                                        <label className="control-label">Rating</label>
                                        &nbsp;&nbsp;&nbsp; Bad&nbsp;
                                        <span className="radio-wrapper"><input type="radio" name="rating" value="1" className="radioid"></input></span>
                                        &nbsp;
                                        <span className="radio-wrapper"><input type="radio" name="rating" value="2" className="radioid"></input></span>
                                        &nbsp;
                                        <span className="radio-wrapper"><input type="radio" name="rating" value="3" className="radioid"></input></span>
                                        &nbsp;
                                        <span className="radio-wrapper"><input type="radio" name="rating" value="4" className="radioid"></input></span>
                                        &nbsp;
                                        <span className="radio-wrapper"><input type="radio" name="rating" value="5" className="radioid"></input></span>
                                        &nbsp;Good
                                    </div>
                                </div>
                                <fieldset>
                                    <legend>Captcha</legend>
                                    <div className="form-group required">
                                        <label className="col-sm-2 control-label" htmlFor="input-captcha">Enter the code in the box below</label>
                                        <div className="col-sm-10">
                                            <input type="text" name="captcha" id="input-captcha" className="form-control"></input>
                                            <img src="index2d42.jpg?route=extension/captcha/basic/captcha" alt=""></img>
                                        </div>
                                    </div>
                                </fieldset>

                                <div className="buttons clearfix">
                                    <div className="pull-right">
                                        <button type="button" id="button-review" data-loading-text="Loading..." className="btn btn-primary">Continue</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* <!-- Product tab END -->
                <!-- Related products START --> */}
            </div>
        </>
    )
}
