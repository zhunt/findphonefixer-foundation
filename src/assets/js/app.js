


$(document).foundation();


      $(function() {
        var $yeti = $('#homepage-logo');
        $('#homepage-logo').removeClass('almost-hidden');
        //var $transitionList = $('#transitionList');
       // $('#homepage-logo').click(function() {
          var value = 'hinge-in-from-middle-y'; //$transitionList.val();
        //  if (value.match(/-in/)) {
            Foundation.Motion.animateIn($yeti, value);
        //  }
        //  else {
        //    Foundation.Motion.animateOut($yeti, value, function() {
        //      $yeti.show();
        //    });
        //  }
       // });
      });


$(function() {

	var map;

	if ( !!document.getElementById("profile-map") ) {

	    map = new GMaps({
		    el: '#profile-map',
		    lat: geoCord[0],
		    lng: geoCord[1],
		    zoomControl : true,
		    zoomControlOpt: {
		        style : 'SMALL',
		        position: 'TOP_LEFT'
		    },
		    panControl : false,
		    streetViewControl : false,
		    mapTypeControl: false,
		    overviewMapControl: false
	  });

	}

});


/*START SLICK CAROUSEL*/
$(document).ready(function(){






	
	//$('#homepage-logo').addClass('logo-animation');

/*
	$(".slider").slick({

		dots: true,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 3,

responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
]
	});

*/

});


/*END SLICK CAROUSEL*/