import React from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Header from '../Components/Header'

import { Footer } from '../Components/Footer'
import { HelmetProvider } from 'react-helmet-async';
import { HelmetUser } from '../Components/HelmetUser';
export const UserLayout = () => {
  return (
    <>
      <HelmetProvider>
        <HelmetUser />
      </HelmetProvider>
      <Header />

      <Outlet />
      <Footer />
      <script src="/user-assets/catalog/view/javascript/jquery/jquery-2.1.1.min.js"
        type="text/javascript"></script>
      <script src="/user-assets/catalog/view/javascript/TemplateTrip/addonScript.js"
        type="text/javascript"></script>
      <script src="/user-assets/catalog/view/javascript/TemplateTrip/lightbox-2.6.min.js"
        type="text/javascript"></script>
      <script src="/user-assets/catalog/view/javascript/TemplateTrip/waypoints.min.js"
        type="text/javascript"></script>
      <script src="/user-assets/catalog/view/javascript/jquery/swiper/js/swiper.jquery.js"
        type="text/javascript"></script>
      <script src="/user-assets/catalog/view/javascript/common.js" type="text/javascript"></script>
      <script src="/user-assets/catalog/view/javascript/bootstrap/js/bootstrap.min.js"
        type="text/javascript"></script>
    </>
  )
}
