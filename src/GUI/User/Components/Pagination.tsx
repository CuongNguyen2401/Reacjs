// import React, { useEffect } from 'react';
// import $ from 'jquery';

// const Pagination = () => {
//     useEffect(() => {
//         // Ensure jQuery and Owl Carousel are loaded
//         if (typeof $ !== 'undefined' && $.fn.owlCarousel !== undefined) {
//             // Wait for the DOM to be ready
//             $(document).ready(function () {
//                 $('.TTProduct-Tab .tab-box-heading > ul > li:first-child').addClass('active');
//                 $('.TTProduct-Tab .tab-content > .tab-pane:first-child').addClass('active');
//                 var tttrendingproducts = $(".TTProduct-Tab .products-carousel.owl-carousel");
//                 tttrendingproducts.owlCarousel({
//                     items: 4,
//                     itemsDesktop: [1170, 4],
//                     itemsDesktopSmall: [991, 3],
//                     itemsTablet: [767, 2],
//                     itemsMobile: [480, 1],
//                     navigation: true,
//                     pagination: false
//                 });
//             });
//         } else {
//             console.error('jQuery or Owl Carousel not loaded properly');
//         }
//     }, []);

//     return null;
// };

// export default Pagination;
import React from 'react'

export const Pagination = () => {
    return (
        <div>Pagination</div>
    )
}
