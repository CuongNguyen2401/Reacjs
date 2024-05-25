import React from 'react';
import { Helmet } from 'react-helmet-async';

export const HelmetAdmin = () => {
    return (
        <Helmet>
            <link rel="icon" type="image/png" sizes="16x16" href="/admin-assets/plugins/images/favicon.png" />
            <title>Admin Page!</title>
            {/* Bootstrap Core CSS */}
            <link href="/admin-assets/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet" />
            <link href="/admin-assets/plugins/bower_components/bootstrap-extension/css/bootstrap-extension.css" rel="stylesheet" />
            {/* Menu CSS */}
            <link href="/admin-assets/plugins/bower_components/sidebar-nav/dist/sidebar-nav.min.css" rel="stylesheet" />
            {/* toast CSS */}
            <link href="/admin-assets/plugins/bower_components/toast-master/css/jquery.toast.css" rel="stylesheet" />
            {/* morris CSS */}
            <link href="/admin-assets/plugins/bower_components/morrisjs/morris.css" rel="stylesheet" />
            {/* animation CSS */}
            <link href="/admin-assets/css/animate.css" rel="stylesheet" />
            <link href="/admin-assets/plugins/bower_components/css-chart/css-chart.css" rel="stylesheet" />
            {/* Custom CSS */}
            <link href="/admin-assets/css/style.css" rel="stylesheet" />
            {/* color CSS */}
            <link href="/admin-assets/css/colors/blue-dark.css" id="theme" rel="stylesheet" />
        </Helmet>

    );
};
