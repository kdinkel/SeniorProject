import React from 'react';
import CSSModules from 'react-css-modules';
import Slider from 'react-slick';

import styles from './styles.css';

import queryString from 'query-string';

const parse = num => {
  const values = queryString.parse(num);
  return values.num;
}

var numba = parse(window.location.search);
if (numba == undefined) numba = "";

const Slideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
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
					<img  styleName="img-test" src={"./src/static/Slide1.jpg"}>
					</img>
					<button styleName="slide-button" className="btn btn-default"><a href='https://uas.ifas.ufl.edu/'>UASRP/IFAS</a></button>
				</div>
				<div className="text-center">
					<img  styleName="img-test" src={"./src/static/Slide4.jpg"}>
					</img>
					<button styleName="slide-button" className="btn btn-default"><a href='http://www.ehs.ufl.edu/programs/uas/'>UF UAS Safety</a></button>
				</div>
				<div className="text-center">
					<img  styleName="img-test" src={"./src/static/Slide3.jpg"}>
					</img>
					<button styleName="slide-button" className="btn btn-default"><a href='https://uas.ifas.ufl.edu/research/'>Research</a></button>
				</div>
				<div className="text-center">
					<img  styleName="img-test" src={"./src/static/Slide2.jpg"}>
					</img>
					<button styleName="slide-button" className="btn btn-default"><a href='https://uas.ifas.ufl.edu/team/'>Team</a></button>
				</div>
			</Slider>
  )
};

export default CSSModules(Slideshow, styles);
