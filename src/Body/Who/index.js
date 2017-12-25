import React, { Component } from 'react';
import { Element } from 'react-scroll'
import EngPicture from "../../Images/who.jpg";
import TheatrePicture from "../../Images/who_theatre.jpg"
import '../../style/Who.css';

class Who extends Component {
    render() {
        return (
            <Element name="who-element">
                <div className="Text-and-Picture">
                    <img alt="" src={EngPicture} className="Eng-picture"/>
                    <p className="text">
                        <h2><b>Oh hello!</b></h2>
                        <h3><b>I&#39;m saif elkholy</b></h3>
                        <h4>
                            I am an undergraduate student at McGill University.
                            <br/>
                            I enjoy dabbling and tinkering, with a heavy emphasis on hardware trifling
                        </h4>
                    </p>
                </div>
                <div className="Text-and-Picture">
                    <p className="text">
                        <h2><b>In my off time, I enjoy dilly-dallying with theatre productions.</b></h2>
                        <h4>
                            3 years and 5 productions later, I can safely say that I consider theatre tech work as fun
                            <br/>
                            <br/>
                            You can find out more in this nifty little website we set up <a href="http://autstheatre.ca">The Arts Undergraduate Theatre Society</a>
                        </h4>
                    </p>
                    <img alt="" src={TheatrePicture} className="Theatre-picture" />
                </div>
            </Element>
        );
    }
}

export default Who;
