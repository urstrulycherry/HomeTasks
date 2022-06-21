import React from 'react';
import Img from './assets/images/img.png'
import C1 from './C1';
import C2 from './C2';
import C3 from './C3';
import './assets/styles/style.sass'
export default () => {
    return (
        <>
            <h1>Webpack and Babel</h1>
            <C1 />
            <C2 />
            <C3 />
            <img src={Img} />
        </>
    )
}
