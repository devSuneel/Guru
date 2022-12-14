  let slider = $('data-slider');
  slider.not('.slick-initialized').slick({ 	
    dots: false,
    arrows:true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }

    ]
  });