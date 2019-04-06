import React from 'react';
import CSSModules from 'react-css-modules';
import Slider from 'react-slick';

import styles from './styles.css';

const Slideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000 
  };
  return (
			<Slider {...settings}>
				<div className="text-center">
					<img  styleName="img-test" src={"./src/static/slide.png"}>
					</img>
					<button styleName="slide-button" className="btn btn-default">Button</button>
				</div>
				<div className="text-center">
					<img  styleName="img-test" src={"./src/static/slide.png"}>
					</img>
					<button styleName="slide-button" className="btn btn-default">Button</button>
				</div>
				<div className="text-center">
					<img  styleName="img-test" src={"./src/static/slide.png"}>
					</img>
					<button styleName="slide-button" className="btn btn-default">Button</button>
				</div>
				<div className="text-center">
					<img  styleName="img-test" src={"./src/static/slide.png"}>
					</img>
					<button styleName="slide-button" className="btn btn-default">Button</button>
				</div>
			</Slider>
  )
};

export default CSSModules(Slideshow, styles);
