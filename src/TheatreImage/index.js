import React, { Component } from 'react';
import Particles from 'react-particles-js';
import '../Style/TheatreImage.css';
import Menus from './Menus'

class TheatreImage extends Component {
    render() {
        return (
    <div className="Theatre-image">
        <div className="Menu-wrapper">
            <Menus/>
        </div>
        <Particles
            params={{
                particles: {
                    line_linked: {
                        shadow: {
                            enable: true,
                            color: "#000",
                            blur: 1
                        }
                    },
                    number: {
                        value: 75
                    },

                }
            }}
            className="Particles-overlay"
        >


        </Particles>
        <div className="Intro-text">
            <h4><b>Hey there!</b></h4>
            Scroll down to learn a bit more about me, Saif
        </div>
    </div>
        );
    }
}

export default TheatreImage;
