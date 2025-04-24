    document.addEventListener('DOMContentLoaded', function() {
    const surftouchLink = document.querySelector('.products-menu-item .products-dropdown .product-column ul li:first-child a');
    const surftouchDetails = document.getElementById('surftouch-details');
    const surfprintLink = document.querySelector('.products-menu-item .products-dropdown .product-column ul li:nth-child(2) a');
    const surfprintDetails = document.getElementById('surfprint-details');
    const surfpadLink = document.querySelector('.products-menu-item .products-dropdown .product-column ul li:nth-child(3) a');
    const surfpadDetails = document.getElementById('surfpad-details');
    const surfaloneLink = document.querySelector('.products-menu-item .products-dropdown .product-column ul li:nth-child(4) a');
    const surfaloneDetails = document.getElementById('surfalone-details');
    const surfminiLink = document.querySelector('.products-menu-item .products-dropdown .product-column ul li:nth-child(5) a');
    const surfminiDetails = document.getElementById('surfmini-details');
    const surfxpressLink = document.querySelector('.products-menu-item .products-dropdown .product-column ul li:nth-child(6) a');
    const surfxpressDetails = document.getElementById('surfxpress-details');
    const tapToPayiPhoneLink = document.querySelector('.products-menu-item .products-dropdown .product-column ul li:nth-child(7) a');
    const tapToPayiPhoneDetails = document.getElementById('tap-to-pay-iphone-details');
    const checkoutxsoftposLink = document.querySelector('.products-menu-item .products-dropdown .product-column ul li:nth-child(8) a');
    const checkoutxsoftposDetails = document.getElementById('checkoutx softpos');
    const bannerSection = document.querySelector('.banner');
    const homeLink = document.getElementById('home-link');


    if (surftouchLink && surftouchDetails && bannerSection) {
        surftouchLink.addEventListener('click', function(event) {
            event.preventDefault();
            bannerSection.style.display = 'none';
            surftouchDetails.style.display = 'block';
             history.pushState({ page: 'surftouch' }, 'SurfTouch', '/products/surftouch');
             });
             }
              if (surfprintLink && surfprintDetails && bannerSection) {
                     surfprintLink.addEventListener('click', function(event) {
                         event.preventDefault();
                         bannerSection.style.display = 'none';
                         surftouchDetails.style.display = 'none';
                         surfprintDetails.style.display = 'block';
                         history.pushState({ page: 'surfprint' }, 'SurfPrint', '/products/surfprint');
                     });
                 }
                  if (surfpadLink && surfpadDetails && bannerSection) {
                         surfpadLink.addEventListener('click', function(event) {
                             event.preventDefault();
                             bannerSection.style.display = 'none';
                             surftouchDetails.style.display = 'none';
                             surfprintDetails.style.display = 'none';
                             surfpadDetails.style.display = 'block';
                             history.pushState({ page: 'surfpad' }, 'SurfPad', '/products/surfpad');
                         });
                     }
                      if (surfaloneLink && surfaloneDetails && bannerSection) {
                             surfaloneLink.addEventListener('click', function(event) {
                                 event.preventDefault();
                                 bannerSection.style.display = 'none';
                                 surftouchDetails.style.display = 'none';
                                 surfprintDetails.style.display = 'none';
                                 surfpadDetails.style.display = 'none';
                                 surfaloneDetails.style.display = 'block';
                                 history.pushState({ page: 'surfalone' }, 'SurfAlone', '/products/surfalone');
                             });
                         }
                          if (surfminiLink && surfminiDetails && bannerSection) {
                              surfminiLink.addEventListener('click', function(event) {
                                  event.preventDefault();
                                  bannerSection.style.display = 'none';
                                  surftouchDetails.style.display = 'none';
                                  surfprintDetails.style.display = 'none';
                                  surfpadDetails.style.display = 'none';
                                  surfaloneDetails.style.display = 'none';
                                  surfminiDetails.style.display = 'block';
                                  history.pushState({ page: 'surfmini' }, 'SurfMini', '/products/surfmini');
                              });
                          }
                           if (surfxpressLink && surfxpressDetails && bannerSection) {
                                  surfxpressLink.addEventListener('click', function(event) {
                                      event.preventDefault();
                                      bannerSection.style.display = 'none';
                                      surftouchDetails.style.display = 'none';
                                      surfprintDetails.style.display = 'none';
                                      surfpadDetails.style.display = 'none';
                                      surfaloneDetails.style.display = 'none';
                                      surfminiDetails.style.display = 'none';
                                      surfxpressDetails.style.display = 'block';
                                      history.pushState({ page: 'surfexpress' }, 'SurfXpress', '/products/surfexpress');
                                  });
                              }
                             if (tapToPayiPhoneLink && tapToPayiPhoneDetails && bannerSection) {
                                    tapToPayiPhoneLink.addEventListener('click', function(event) {
                                        event.preventDefault();
                                        bannerSection.style.display = 'none';
                                        surftouchDetails.style.display = 'none';
                                        surfprintDetails.style.display = 'none';
                                        surfpadDetails.style.display = 'none';
                                        surfaloneDetails.style.display = 'none';
                                        surfminiDetails.style.display = 'none';
                                        surfxpressDetails.style.display = 'none';
                                        tapToPayiPhoneDetails.style.display = 'block';
                                        history.pushState({ page: 'tap-to-pay-iphone' }, 'Tap to Pay on iPhone', '/products/tap-to-pay-on-iphone');
                                    });
                                }
                             if (checkoutxsoftposLink && checkoutxsoftposDetails && bannerSection) {
                                     checkoutxsoftposLink.addEventListener('click', function(event) {
                                         event.preventDefault();
                                         bannerSection.style.display = 'none';
                                         surftouchDetails.style.display = 'none';
                                         surfprintDetails.style.display = 'none';
                                         surfpadDetails.style.display = 'none';
                                         surfaloneDetails.style.display = 'none';
                                         surfminiDetails.style.display = 'none';
                                         surfxpressDetails.style.display = 'none';
                                         tapToPayiPhoneDetails.style.display = 'none';
                                         checkoutxsoftposDetails.style.display = 'block';
                                         history.pushState({ page: 'checkoutx softpos' }, 'CheckoutX SoftPOS ID', '/products/checkoutx softpos');
                                     });
                                 }
                                homeLink.addEventListener('click', function(event) {
                                event.preventDefault();
                                surftouchDetails.style.display = 'none';
                                surfprintDetails.style.display = 'none';
                                surfpadDetails.style.display = 'none';
                                surfaloneDetails.style.display = 'none';
                                surfminiDetails.style.display = 'none';
                                surfxpressDetails.style.display = 'none';
                                tapToPayiPhoneDetails.style.display = 'none';
                                checkoutxsoftposDetails.style.display = 'none';
                                bannerSection.style.display = 'block';
                                history.pushState(null, 'My Project', '/');
                            });
                             window.addEventListener('popstate', function(event) {
                                        if (event.state && event.state.page === 'surftouch') {
                                            bannerSection.style.display = 'none';
                                            surfprintDetails.style.display = 'none';
                                            surftouchDetails.style.display = 'block';
                                            } else if (event.state && event.state.page === 'surfprint') {
                                                        bannerSection.style.display = 'none';
                                                        surftouchDetails.style.display = 'none';
                                                        surfprintDetails.style.display = 'block';
                                                        } else if (event.state && event.state.page === 'surfpad') {
                                                                    bannerSection.style.display = 'none';
                                                                    surftouchDetails.style.display = 'none';
                                                                    surfprintDetails.style.display = 'none';
                                                                    surfpadDetails.style.display = 'block';
                                                        } else if (event.state && event.state.page === 'surfalone') {
                                                                    bannerSection.style.display = 'none';
                                                                    surftouchDetails.style.display = 'none';
                                                                    surfprintDetails.style.display = 'none';
                                                                    surfpadDetails.style.display = 'none';
                                                                    surfaloneDetails.style.display = 'block';
                                                        } else if (event.state && event.state.page === 'surfmini') {
                                                                    bannerSection.style.display = 'none';
                                                                    surftouchDetails.style.display = 'none';
                                                                    surfprintDetails.style.display = 'none';
                                                                    surfpadDetails.style.display = 'none';
                                                                    surfaloneDetails.style.display = 'none';
                                                                    surfminiDetails.style.display = 'block';
                                                        } else if (event.state && event.state.page === 'surfxpress') {
                                                                    bannerSection.style.display = 'none';
                                                                    surftouchDetails.style.display = 'none';
                                                                    surfprintDetails.style.display = 'none';
                                                                    surfpadDetails.style.display = 'none';
                                                                    surfaloneDetails.style.display = 'none';
                                                                    surfminiDetails.style.display = 'none';
                                                                    surfxpressDetails.style.display = 'block';
                                                        } else if (event.state && event.state.page === 'tap-to-pay-iphone') {
                                                                    bannerSection.style.display = 'none';
                                                                    surftouchDetails.style.display = 'none';
                                                                    surfprintDetails.style.display = 'none';
                                                                    surfpadDetails.style.display = 'none';
                                                                    surfaloneDetails.style.display = 'none';
                                                                    surfminiDetails.style.display = 'none';
                                                                    surfexpressDetails.style.display = 'none';
                                                                    tapToPayiPhoneDetails.style.display = 'block';
                                                        } else if (event.state && event.state.page === 'checkoutx softpos') {
                                                                    bannerSection.style.display = 'none';
                                                                    surftouchDetails.style.display = 'none';
                                                                    surfprintDetails.style.display = 'none';
                                                                    surfpadDetails.style.display = 'none';
                                                                    surfaloneDetails.style.display = 'none';
                                                                    surfminiDetails.style.display = 'none';
                                                                    surfxpressDetails.style.display = 'none';
                                                                    tapToPayiPhoneDetails.style.display = 'none';
                                                                    checkoutxsoftposDetails.style.display = 'block';


                                            } else {
                                            surftouchDetails.style.display = 'none';
                                            surfprintDetails.style.display = 'none';
                                            surfpadDetails.style.display = 'none';
                                            surfaloneDetails.style.display = 'none';
                                            surfminiDetails.style.display = 'none';
                                            surfxpressDetails.style.display = 'none';
                                            tapToPayiPhoneDetails.style.display = 'none';
                                            checkoutxsoftposDetails.style.display = 'none';
                                            bannerSection.style.display = 'block';
                                        }
                                    });

});
