import React from 'react';
import Description from './Description.js';
import  Discount from './Discount.js';
const HighLights = () => {
    return (
        <div className="highlight_wrapper">
           <Description /> 
           <Discount /> 
        </div>
    );
};

export default HighLights;