import React from 'react'
import { Helmet } from 'react-helmet-async'

export const HelmetUser = () => {
    return (
        <Helmet>
            <title>My Store</title>
            <meta name="description" content="My Store" />



            <link href='https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700' rel='stylesheet' type='text/css' />
            <link href="/user-assets/catalog/view/javascript/font-awesome/css/font-awesome.min.css" rel="stylesheet"
                type="text/css" />

            <link href="/user-assets/catalog/view/javascript/jquery/owl-carousel/owl.carousel.css" rel="stylesheet"
                media="screen" />
            <link href="/user-assets/catalog/view/theme/OPC040_15/stylesheet/TemplateTrip/bootstrap.min.css"
                rel="stylesheet" media="screen" />
            <link href="/user-assets/catalog/view/theme/OPC040_15/stylesheet/stylesheet.css" rel="stylesheet" />
            <link href="/user-assets/catalog/view/theme/OPC040_15/stylesheet/TemplateTrip/ttblogstyle.css"
                rel="stylesheet" type="text/css" />

            <link href="/user-assets/catalog/view/theme/OPC040_15/stylesheet/TemplateTrip/lightbox.css"
                rel="stylesheet" type="text/css" />

            <link href="/user-assets/catalog/view/javascript/jquery/swiper/css/swiper.min.css" type="text/css"
                rel="stylesheet" media="screen" />
            <link href="/user-assets/catalog/view/javascript/jquery/swiper/css/opencart.css" type="text/css"
                rel="stylesheet" media="screen" />
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />



            {/* <script src="/user-assets/catalog/view/javascript/jquery/owl-carousel/owl.carousel.min.js"
                type="text/javascript"></script> */}


            <link href="https://opencart.templatetrip.com/OPC02/OPC040/OPC15/" rel="canonical" />
            <link href="/user-assets/image/catalog/cart.png" rel="icon" />


        </Helmet>
    )
}
