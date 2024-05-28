import React from 'react'
import { TopBar } from '../Components/TopBar'
import { SideBar } from '../Components/SideBar'
import { Outlet } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { HelmetAdmin } from '../Components/HelmetAdmin';

import { ToastContainer } from 'react-toastify';



export const MainDashBoard = () => {
    return (
        <>
            <HelmetProvider>
                <HelmetAdmin />
                {/* <!-- Preloader -->
                <!-- <div className="preloader">
                <div className="cssload-speeding-wheel"></div>
                </div> -->  */}
                <div id="wrapper">
                    {/* <!-- Navigation --> */}
                    <TopBar />
                    {/* <!-- Left navbar-header --> */}
                    <SideBar />
                    <div id="page-wrapper">
                        <div className="container-fluid">
                            {/* Page */}
                            <Outlet />

                        </div>
                    </div>
                    <ToastContainer />
                </div>
                <script src="/admin-assets/plugins/bower_components/jquery/dist/jquery.min.js"></script>

                <script src="/admin-assets/bootstrap/dist/js/tether.min.js"></script>
                <script src="/admin-assets/bootstrap/dist/js/bootstrap.min.js"></script>

                <script src="/admin-assets/js/jquery.slimscroll.js"></script>

                <script src="/admin-assets/js/waves.js"></script>

                <script src="/admin-assets/plugins/bower_components/waypoints/lib/jquery.waypoints.js"></script>
                <script src="/admin-assets/plugins/bower_components/counterup/jquery.counterup.min.js"></script>

                <script src="/admin-assets/plugins/bower_components/raphael/raphael-min.js"></script>
                <script src="/admin-assets/plugins/bower_components/morrisjs/morris.js"></script>

                <script src="/admin-assets/plugins/bower_components/jquery-sparkline/jquery.sparkline.min.js"></script>
                <script src="/admin-assets/plugins/bower_components/jquery-sparkline/jquery.charts-sparkline.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></script>
                <script src="/admin-assets/js/jquery.app.js"></script>
                <script src="/admin-assets/js/custom.min.js"></script>
                <script src="/admin-assets/js/dashboard1.js"></script>
                <script src="/admin-assets/plugins/bower_components/toast-master/js/jquery.toast.js"></script>


            </HelmetProvider>

        </>
    )
}
