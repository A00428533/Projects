import React from 'react';
import Carrsoul from './carrsoul';
import Counter from './counter';
const Features = () => {
    return (
        <div style={{position:"relative"}}>
        <Carrsoul/>
        <div className="artist_name">
            <div className="wrapper">
            Austin Grey
            </div>  
        </div>
        <Counter/>
        </div>
    );
};

export default Features;