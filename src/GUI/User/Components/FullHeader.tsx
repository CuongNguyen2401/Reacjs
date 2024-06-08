import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/Store';

export const FullHeader = () => {

    const storedAuth = JSON.parse(localStorage.getItem('user') || '{}');
    const username = storedAuth?.username;



    return (
        <div className="full-header">
            <div className="container">
                <div className="header-left">
                    <div id="logo">
                        <a href="">
                            <img src="user-assets/image/catalog/logo.png" title="Your Store" alt="Your Store" className="img-responsive" />
                        </a>
                    </div>
                </div>
                <div className="header-right">
                    <div id="cart" className="btn-group">
                        <span className="cart-heading">Cart</span>
                        <button type="button" data-toggle="dropdown" data-loading-text="Loading..." className="btn btn-inverse btn-block btn-lg dropdown-toggle">
                            <i className="fa fa-shopping-cart"></i> <span id="cart-total">0</span>
                        </button>
                        <ul className="dropdown-menu pull-right header-cart-toggle">
                            <li>
                                <p className="text-center">Your shopping cart is empty!</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="header-right-cms">
                    <aside id="header-right">
                        <div className="html-content">
                            <div className="box-content">
                                <div id="ttcmsheaderservices" className="col-xs-12 col-sm-6 col-lg-2 ">
                                    <div className="ttcmsheaderservice col-xs-12 col-sm-12">
                                        <div className="ttsupport">
                                            <div className="ttcontent_inner">
                                                <div className="service">
                                                    <div className="service-content" style={{ paddingTop: '5px' }}>
                                                        <i className="fa fa-user fa-2x" aria-hidden="true" style={{ color: 'white' }}></i>
                                                        <div className="service-title" style={{ display: 'inline-block', paddingLeft: '10px' }}>{username ? username : "Hello, User"}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
                <div className="col-sm-7 header-middle">
                    <div id="header-search" className="input-group">
                        <input type="text" name="search" value="" placeholder="Search" className="form-control input-lg"></input>
                        {/* <div className="select-wrapper"><select name="category_id" className="form-control innner-search">
                            <option value="0">Categories</option>
                            <option value="20">soft toy</option>

                            <option value="26">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Santa Cloth</option>

                            <option value="85">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bed</option>
                            <option value="59">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chocolates
                            </option>
                            <option value="61">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mug</option>
                            <option value="60">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;table</option>
                            <option value="87">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Santa Toy</option>

                            <option value="91">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cake</option>
                            <option value="97">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clothes</option>
                            <option value="88">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Magics</option>
                            <option value="90">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;water bed
                            </option>
                            <option value="92">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plants</option>

                            <option value="93">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bullwhip
                            </option>
                            <option value="95">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clock</option>
                            <option value="96">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Flowers</option>
                            <option value="94">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gifts</option>
                            <option value="25">flowers</option>

                            <option value="98">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bar chair</option>

                            <option value="100">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;analog</option>
                            <option value="101">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;table</option>
                            <option value="102">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tuffet</option>
                            <option value="99">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Windsor chair</option>

                            <option value="103">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bench</option>
                            <option value="105">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cultivator
                            </option>
                            <option value="104">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;drower</option>
                            <option value="65">Chocolate</option>

                            <option value="114">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dolabra</option>

                            <option value="66">mug &amp; sippers</option>

                            <option value="118">plants</option>

                            <option value="67">wall clock</option>

                            <option value="115">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;clocks</option>

                            <option value="117">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bullwhip
                            </option>
                            <option value="116">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hope chest</option>

                            <option value="119">Cake</option>

                            <option value="120">Gift hamper</option>

                            <option value="121">jwellery</option>

                            <option value="122">Chocolate</option>

                            <option value="123">Candle</option>

                            <option value="124">Max Payne</option>

                            <option value="125">Gifts</option>

                            <option value="126">Mug</option>

                        </select></div> */}
                        <span className="input-group-btn">
                            <button type="button" className="btn btn-default btn-lg header-search-btn"><i className="fa fa-search"></i>
                                Search
                            </button>
                        </span>
                    </div>


                </div>
            </div>
        </div>
    )
}
