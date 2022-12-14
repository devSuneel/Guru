$(document).ready(function(){
  let slider = $('div.data-slider');
  console.log("slider",slider.attr('class'));
  slider.not('.slick-initialized').slick({ 	
    dots: false,
    arrows:true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }

    ]
  });
})