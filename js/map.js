 /******************************************
    File Name: map.js
    Template Name: Engines
    Created By: PSD Convert HTML Team
    Envato Profile: http://themeforest.net/user/psdconverthtml
    Website: https://psdconverthtml.com
    Version: 1.0
    Support: support@psdconverthtml.com
/******************************************/

(function($) {
    "use strict";
    var locations = [
    ['<div class="infobox"><div class="agent"><div class="image"><img class="img-thumbnail img-responsive" src="upload/testi_01.png" alt=""></div><div class="agent_desc"><h3 class="title"><a href="#">Carolina Keegan</a></h3><small>$10.00/hr</small><a class="readmore" href="#">View Profile</a></div></div></div>', 
    42.856614,
    13.352222,
    1],
    ['<div class="infobox"><div class="agent"><div class="image"><img class="img-thumbnail img-responsive" src="upload/testi_02.png" alt=""></div><div class="agent_desc"><h3 class="title"><a href="#">Carolina Keegan</a></h3><small>$10.00/hr</small><a class="readmore" href="#">View Profile</a></div></div></div>', 
    42.856614,
    12.352222,
    2],
    ['<div class="infobox"><div class="agent"><div class="image"><img class="img-thumbnail img-responsive" src="upload/testi_03.png" alt=""></div><div class="agent_desc"><h3 class="title"><a href="#">Carolina Keegan</a></h3><small>$10.00/hr</small><a class="readmore" href="#">View Profile</a></div></div></div>', 
    43.056614,
    11.352222,
    3]
    ];

    /* ==============================================
    MAP -->
    =============================================== */
    
    var map=new google.maps.Map(document.getElementById('map'), {
        zoom: 9, scrollwheel: false, navigationControl: true, mapTypeControl: false, scaleControl: false, draggable: true, styles: [ {
            "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{"featureType":"poi.business","elementType":"geometry.fill","stylers":[{"visibility":"on"}]}]
        }
        ], center: new google.maps.LatLng(42.856614, 12.352222), mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    
    );
    var infowindow=new google.maps.InfoWindow();
    var marker,
    i;
    for (i=0;
    i < locations.length;
    i++) {
        marker=new google.maps.Marker( {
            position: new google.maps.LatLng(locations[i][1], locations[i][2]), map: map, icon: 'images/marker.png'
        }
        );
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        }
        )(marker, i));
    }
})(jQuery);