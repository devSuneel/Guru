  let slider = $('data-slider');
  console.log("slider",slider);
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