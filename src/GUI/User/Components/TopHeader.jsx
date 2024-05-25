import React from 'react'

export const TopHeader = () => {
    return (
        <nav id="top">
            <div className="container">
                <div className="header-top-left">
                    <div className="header-left-cms">
                        <aside id="header-left">
                            <div className="html-content">
                                <div className="box-content">
                                    <div id="ttcmsheader">
                                        <div className="ttheader-service">Wants to explore Upcoming Deals on Weekends?</div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
                <div className="header-top-right">
                    <div id="top-links" className="nav pull-right">
                        <ul className="list-inline">
                            <li>
                                <div className="pull-left">
                                    <form
                                        action="https://opencart.templatetrip.com/OPC02/OPC040/OPC15/index.php?route=common/language/language"
                                        method="post" encType="multipart/form-data" id="form-language">
                                        <div className="btn-group">
                                            <button className="btn btn-link dropdown-toggle" data-toggle="dropdown">
                                                <img src="user-assets/catalog/language/en-gb/en-gb.png" alt="English" title="English" />
                                                <span className="hidden-xs hidden-sm hidden-md">Language</span>&nbsp;
                                                <i className="fa fa-caret-down"></i>
                                            </button>
                                            <ul className="dropdown-menu language-toggle">
                                                <li>
                                                    <button className="btn btn-link btn-block language-select" type="button" name="en-gb">
                                                        <img src="user-assets/catalog/language/en-gb/en-gb.png" alt="English" title="English" />
                                                        English
                                                    </button>
                                                </li>
                                                <li>
                                                    <button className="btn btn-link btn-block language-select" type="button" name="ar-lb">
                                                        <img src="user-assets/catalog/language/ar-lb/ar-lb.png" alt="Arabic" title="Arabic" />
                                                        Arabic
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                        <input type="hidden" name="code" value="" />
                                        <input type="hidden" name="redirect" value="https://opencart.templatetrip.com/OPC02/OPC040/OPC15/index.php?route=common/home" />
                                    </form>
                                </div>
                            </li>
                            <li>
                                <div className="pull-left">
                                    <form
                                        action="https://opencart.templatetrip.com/OPC02/OPC040/OPC15/index.php?route=common/currency/currency"
                                        method="post" encType="multipart/form-data" id="form-currency">
                                        <div className="btn-group">
                                            <button className="btn btn-link dropdown-toggle" data-toggle="dropdown">
                                                <strong>$</strong> <span className="hidden-xs hidden-sm hidden-md">Currency</span>&nbsp;
                                                <i className="fa fa-caret-down"></i>
                                            </button>
                                            <ul className="dropdown-menu currency-toggle">
                                                <li>
                                                    <button className="currency-select btn btn-link btn-block" type="button" name="EUR">€ Euro</button>
                                                </li>
                                                <li>
                                                    <button className="currency-select btn btn-link btn-block" type="button" name="GBP">£ Pound Sterling</button>
                                                </li>
                                                <li>
                                                    <button className="currency-select btn btn-link btn-block" type="button" name="USD">$ US Dollar</button>
                                                </li>
                                            </ul>
                                        </div>
                                        <input type="hidden" name="code" value="" />
                                        <input type="hidden" name="redirect" value="https://opencart.templatetrip.com/OPC02/OPC040/OPC15/index.php?route=common/home" />
                                    </form>
                                </div>
                            </li>
                            <li>
                                <div className="dropdown">
                                    <a href="indexe223.html?route=account/account" title="My Account" className="dropdown-toggle" data-toggle="dropdown">
                                        <i className="fa fa-user"></i> <span className="ttuserheading">My Account</span>
                                        <i className="fa fa-caret-down"></i>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-right account-link-toggle">
                                        <li><a href="index5502.html?route=account/register"><i className='fa fa-user'></i> Register</a></li>
                                        <li><a href="indexe223.html?route=account/login"><i className='fa fa-sign-in'></i> Login</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="indexe223.html?route=account/wishlist" id="wishlist-total" title="Wish List (0)">
                                    <i className="fa fa-heart"></i> <span className="hidden-xs hidden-sm hidden-md">Wish List (0)</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

