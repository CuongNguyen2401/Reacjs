import React from 'react'
import { HeaderBottom } from '../Components/HeaderBottom';
import { LeftAside } from '../Components/LeftAside';
import { Product } from '../Components/Product';
import Pagination from '../Components/Pagination';

export const HomeUser = () => {
  return (
    <>
      <div id="page">
        <HeaderBottom />
        <div className="container">
          <div className="row">
            <LeftAside />
            <div id="content" className="col-sm-9">
              {/* Carousel  */}
              <div className="slideshow-panel">
                <div className="ttloading-bg"></div>
                <div className="swiper-viewport">
                  <div id="slideshow0" className="slideshow-main swiper-container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide text-center">
                        <a href="#">
                          <img src="/user-assets/image/cache/catalog/demo/banners/slider-01-930x420.jpg" alt="slider-01" className="img-responsive"></img>
                        </a>
                      </div>
                      <div className="swiper-slide text-center">
                        <a href="#">
                          <img src="/user-assets/image/cache/catalog/demo/banners/slider-02-930x420.jpg" alt="slider-02" className="img-responsive"></img>
                        </a>
                      </div>
                    </div>
                    <div className="swiper-pagination slideshow0"></div>
                    <div className="swiper-pager">
                      <div className="swiper-button-prev"></div>
                      <div className="swiper-button-next"></div>
                    </div>
                  </div>
                </div>

              </div>
              {/*  */}
              <div className="html-content">
                <div className="box-content">
                  <div id="ttcmsbottombanners">
                    <div className="ttbottombannerblock">
                      <div className="row">
                        <div className="ttbottombanner1 ttbottombanner col-xs-12 col-sm-12">
                          <div className="ttbottombanner-img"><a href="#"> <img src="/user-assets/image/catalog/demo/banners/bottombanner-1.jpg" alt="bottombanner-1"></img></a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* IMPORTANTTTTTTTTT */}
              <div className="ttproduct-main">
                <div className="TTProduct-Tab TT-product-carousel products-list">

                  <div className="box-heading tthometab-title">
                    <h3>Trending Products</h3>
                  </div>
                  <div id="TTPTab-0" className="tab-box-heading">
                    <ul className="nav nav-tabs">
                      <li className="active"><a href="#tab-featured-0" data-toggle="tab">Featured</a></li>
                      <li><a href="#tab-latest-0" data-toggle="tab">Latest</a></li>
                      <li><a href="#tab-bestseller-0" data-toggle="tab">Bestseller</a></li>
                    </ul>
                  </div>
                  <div className="tab-content">
                    <div className="tab-featured-0">
                      <div className="products-carousel owl-carousel owl-theme" style={{ opacity: 1, display: "block" }}>
                        <div className="owl-wrapper-outer">
                          <div className="owl-wrapper" style={{ width: "2250px", left: "0px", display: "block" }}>
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                          </div>
                        </div>
                        {/* dung der click */}
                        <div className="owl-controls clickable"><div className="owl-buttons"><div className="owl-prev">prev</div><div className="owl-next">next</div></div></div>

                        <script type="text/javascript">
                          <Pagination />
                        </script>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ADS */}
              <div className="html-content">
                <div className="box-content">
                  <div id="ttcmssubbanners">
                    <div className="ttsubbannerblock">
                      <div className="ttsubbanner1 ttsubbanner col-xs-4 col-sm-4">
                        <div className="ttsubbanner-img"><a href="#"><img
                          src="/user-assets/image/catalog/demo/banners/subbanner-1.jpg"
                          alt="subbanner-1.jpg"></img></a></div>
                      </div>
                      <div className="ttsubbanner2 ttsubbanner col-xs-4 col-sm-4">
                        <div className="ttsubbanner-img"><a href="#"><img
                          src="/user-assets/image/catalog/demo/banners/subbanner-2.jpg"
                          alt="subbanner-2.jpg"></img></a></div>
                      </div>
                      <div className="ttsubbanner3 ttsubbanner col-xs-4 col-sm-4">
                        <div className="ttsubbanner-img"><a href="#"><img
                          src="/user-assets/image/catalog/demo/banners/subbanner-3.jpg"
                          alt="subbanner-3.jpg"></img></a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* News */}
              <div id="blog_latest_new_home">
                <div className="box-heading title_block">
                  <h3><a className="ttblock-heading" href="indexf378.html?route=information/tt_blog/blogs">Latest News</a></h3>
                </div>
                <div className="customNavigation">
                  <a className="btn prev ttblog_prev"></a>
                  <a className="btn next ttblog_next"></a>
                </div>
                <div className="block_content">

                  <ul id="ttsmartblog-carousel" className="tt-carousel ttblog-content owl-carousel owl-theme" style={{ opacity: 1, display: 'block' }}>
                    <div className="owl-wrapper-outer"><div className="owl-wrapper" style={{ width: '3070px', left: '0px', display: 'block' }}><div className="owl-item" style={{ width: '307px' }}><li>
                      <div className="blog-content">
                        <div className="ttblog_image_holder blog_image_holder col-xs-12 col-sm-12">
                          <a href="index1fb8.html?route=information/tt_blog&amp;tt_blog_id=5">
                            <img className="image_thumb" src="/user-assets/image/cache/catalog/demo/banners/5-home-default-870x564.jpg" alt="Latest News" title="Latest News"></img>
                            <div className="blog-hover"></div>
                          </a>
                          <span className="bloglinks">
                            <a className="icon zoom" data-lightbox="example-set" href="user-assets/image/cache/catalog/demo/banners/5-home-default-870x564.jpg" title="Click to view Full Image">
                              <i className="fa fa-search"></i>
                            </a>
                          </span>
                        </div>

                        <div className="blog-caption blog-sub-content col-xs-12 col-sm-12">
                          <span className="blog-date">
                            <i className="fa fa-calendar"></i>
                            <span className="date">26</span>
                            <span className="month">Oct-2019</span>
                          </span>
                          <h5 className="post_title"><a href="index1fb8.html?route=information/tt_blog&amp;tt_blog_id=5">Lorem ipsum dolor site amet</a></h5>
                          <p className="blog-description"> Lorem Ipsum is simply dummy text of the printing an...</p>
                          <a href="index1fb8.html?route=information/tt_blog&amp;tt_blog_id=5" className="read-more">read more</a>
                          <div className="comment"> <a href="index1fb8.html?route=information/tt_blog&amp;tt_blog_id=5"> <i className="fa fa-comments-o"></i> 0 Comments</a> </div>
                        </div>
                      </div>
                    </li></div><div className="owl-item" style={{ width: '307px' }}><li>
                      <div className="blog-content">
                        <div className="ttblog_image_holder blog_image_holder col-xs-12 col-sm-12">
                          <a href="index518f.html?route=information/tt_blog&amp;tt_blog_id=4">
                            <img className="image_thumb" src="/user-assets/image/cache/catalog/demo/banners/4-home-default-870x564.jpg" alt="Latest News" title="Latest News"></img>
                            <div className="blog-hover"></div>
                          </a>
                          <span className="bloglinks">
                            <a className="icon zoom" data-lightbox="example-set" href="user-assets/image/cache/catalog/demo/banners/4-home-default-870x564.jpg" title="Click to view Full Image">
                              <i className="fa fa-search"></i>
                            </a>
                          </span>
                        </div>

                        <div className="blog-caption blog-sub-content col-xs-12 col-sm-12">
                          <span className="blog-date">
                            <i className="fa fa-calendar"></i>
                            <span className="date">26</span>
                            <span className="month">Oct-2019</span>
                          </span>
                          <h5 className="post_title"><a href="index518f.html?route=information/tt_blog&amp;tt_blog_id=4">tempora incidunt utlabore</a></h5>
                          <p className="blog-description"> Lorem Ipsum is simply dummy text of the printing an...</p>
                          <a href="index518f.html?route=information/tt_blog&amp;tt_blog_id=4" className="read-more">read more</a>
                          <div className="comment"> <a href="index518f.html?route=information/tt_blog&amp;tt_blog_id=4"> <i className="fa fa-comments-o"></i> 0 Comments</a> </div>
                        </div>
                      </div>
                    </li></div><div className="owl-item" style={{ width: '307px' }}><li>
                      <div className="blog-content">
                        <div className="ttblog_image_holder blog_image_holder col-xs-12 col-sm-12">
                          <a href="indexd651.html?route=information/tt_blog&amp;tt_blog_id=3">
                            <img className="image_thumb" src="/user-assets/image/cache/catalog/demo/banners/3-home-default-870x564.jpg" alt="Latest News" title="Latest News"></img>
                            <div className="blog-hover"></div>
                          </a>
                          <span className="bloglinks">
                            <a className="icon zoom" data-lightbox="example-set" href="user-assets/image/cache/catalog/demo/banners/3-home-default-870x564.jpg" title="Click to view Full Image">
                              <i className="fa fa-search"></i>
                            </a>
                          </span>
                        </div>

                        <div className="blog-caption blog-sub-content col-xs-12 col-sm-12">
                          <span className="blog-date">
                            <i className="fa fa-calendar"></i>
                            <span className="date">26</span>
                            <span className="month">Oct-2019</span>
                          </span>
                          <h5 className="post_title"><a href="indexd651.html?route=information/tt_blog&amp;tt_blog_id=3">aliquam quaerat voluptatem</a></h5>
                          <p className="blog-description"> Lorem Ipsum is simply dummy text of the printing an...</p>
                          <a href="indexd651.html?route=information/tt_blog&amp;tt_blog_id=3" className="read-more">read more</a>
                          <div className="comment"> <a href="indexd651.html?route=information/tt_blog&amp;tt_blog_id=3"> <i className="fa fa-comments-o"></i> 0 Comments</a> </div>
                        </div>
                      </div>
                    </li></div><div className="owl-item" style={{ width: '307px' }}><li>
                      <div className="blog-content">
                        <div className="ttblog_image_holder blog_image_holder col-xs-12 col-sm-12">
                          <a href="indexf2fc.html?route=information/tt_blog&amp;tt_blog_id=2">
                            <img className="image_thumb" src="/user-assets/image/cache/catalog/demo/banners/2-home-default-870x564.jpg" alt="Latest News" title="Latest News"></img>
                            <div className="blog-hover"></div>
                          </a>
                          <span className="bloglinks">
                            <a className="icon zoom" data-lightbox="example-set" href="user-assets/image/cache/catalog/demo/banners/2-home-default-870x564.jpg" title="Click to view Full Image">
                              <i className="fa fa-search"></i>
                            </a>
                          </span>
                        </div>

                        <div className="blog-caption blog-sub-content col-xs-12 col-sm-12">
                          <span className="blog-date">
                            <i className="fa fa-calendar"></i>
                            <span className="date">26</span>
                            <span className="month">Oct-2019</span>
                          </span>
                          <h5 className="post_title"><a href="indexf2fc.html?route=information/tt_blog&amp;tt_blog_id=2">suscipit laboriosam nisi</a></h5>
                          <p className="blog-description"> Lorem Ipsum is simply dummy text of the printing an...</p>
                          <a href="indexf2fc.html?route=information/tt_blog&amp;tt_blog_id=2" className="read-more">read more</a>
                          <div className="comment"> <a href="indexf2fc.html?route=information/tt_blog&amp;tt_blog_id=2"> <i className="fa fa-comments-o"></i> 0 Comments</a> </div>
                        </div>
                      </div>
                    </li></div><div className="owl-item" style={{ width: '307px' }}><li>
                      <div className="blog-content">
                        <div className="ttblog_image_holder blog_image_holder col-xs-12 col-sm-12">
                          <a href="indexe7be.html?route=information/tt_blog&amp;tt_blog_id=1">
                            <img className="image_thumb" src="/user-assets/image/cache/catalog/demo/banners/1-home-default-870x564.jpg" alt="Latest News" title="Latest News"></img>
                            <div className="blog-hover"></div>
                          </a>
                          <span className="bloglinks">
                            <a className="icon zoom" data-lightbox="example-set" href="user-assets/image/cache/catalog/demo/banners/1-home-default-870x564.jpg" title="Click to view Full Image">
                              <i className="fa fa-search"></i>
                            </a>
                          </span>
                        </div>

                        <div className="blog-caption blog-sub-content col-xs-12 col-sm-12">
                          <span className="blog-date">
                            <i className="fa fa-calendar"></i>
                            <span className="date">26</span>
                            <span className="month">Oct-2019</span>
                          </span>
                          <h5 className="post_title"><a href="indexe7be.html?route=information/tt_blog&amp;tt_blog_id=1">voluptate velit esse</a></h5>
                          <p className="blog-description"> Lorem Ipsum is simply dummy text of the printing an...</p>
                          <a href="indexe7be.html?route=information/tt_blog&amp;tt_blog_id=1" className="read-more">read more</a>
                          <div className="comment"> <a href="indexe7be.html?route=information/tt_blog&amp;tt_blog_id=1"> <i className="fa fa-comments-o"></i> 0 Comments</a> </div>
                        </div>
                      </div>
                    </li></div></div></div>

                    <div className="owl-controls clickable"><div className="owl-buttons"><div className="owl-prev">prev</div><div className="owl-next">next</div></div></div></ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
