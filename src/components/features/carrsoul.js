import Slider from "react-slick";

import React from 'react';
import slide_one from '../../resources/images/slide_one.jpg';
import slide_three from '../../resources/images/slide_three.jpg';
import slide_two from '../../resources/images/slide_two.jpg';

const Carrsoul = () => {

const settings ={
    
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 100

};

    return (
        <div className="carrousel_wrapper"
        style={{
          overflow:'hidden',
          height: `${window.innerHeight}px`

        }}
        >
        <Slider {...settings}>
        <div>
            <div
                className="carrousel_image"
                style={{
                    background:`url(${slide_one})`,
                    height: `${window.innerHeight}px`
                }}
            >
            </div>
        </div>
        <div>
        <div
                className="carrousel_image"
                style={{
                    background:`url(${slide_two})`,
                    height: `${window.innerHeight}px`
                }}
            >
            </div>
        </div>
        <div>
        <div
                className="carrousel_image"
                style={{
                    background:`url(${slide_three})`,
                    height: `${window.innerHeight}px`
                }}
            >
            </div>
        </div>

        
        </Slider>
            
        </div>
    );
};

export default Carrsoul;