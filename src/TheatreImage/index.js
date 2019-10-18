import React, { Component } from 'react';
import '../Style/TheatreImage.css'
import Menus from './Menus'

class TheatreImage extends Component {
    render() {
        return (
    <div>
        <div className="Menu-wrapper">
            <Menus/>
        </div>
            <div className="Theatre-image">
                <div className="Intro-text">
                    <h4><b>Hey there!</b></h4>
                    Scroll down to learn a bit more about me, Saif
                </div>
            </div>
        </div>
        );
    }
}

export default TheatreImage;
