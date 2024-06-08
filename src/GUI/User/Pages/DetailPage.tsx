import React from 'react';
import { LeftAside } from '../Components/LeftAside';
import { DetailProduct } from '../Components/DetailProduct';
export const Detail = () => {
    return (
        <>
            <div id="page">
                <div className="page-title-wrapper"><div className="container"><h1 className="page-title">perspiciatis unde omnis </h1><ul className="breadcrumb">
                    <li><a href="index9328.html?route=common/home"><i className="fa fa-home"></i></a></li>
                    <li><a className="last-breadcrumb">perspiciatis unde omnis</a></li>
                </ul></div></div>
                <div className="container">
                    <div className="row">
                        <LeftAside />
                        <div id="Content" className="col-sm-9">
                            <DetailProduct />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
