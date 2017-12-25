import React, { Component } from 'react';
import '../Style/Who.css';


class Header extends Component {
    render() {
        return <div className="App-Img">
            <div className="App-header">
                <h3 className="text">
                    I am currently a Computer Engineering student at McGill University.
                    <br/>
                    In my off time, I enjoy cycling, snowboarding and working in theatre tech
                </h3>
                <div className="text">
                    <h2><b>In my off time, I enjoy dilly-dallying with theatre productions.</b></h2>
                    <h4>
                        3 years and 5 productions later, I can safely say that I consider theatre tech work as fun
                        <br/>
                        <br/>
                        You can find out more in this nifty little website we set up <a href="http://autstheatre.ca">The
                        Arts
                        Undergraduate Theatre Society</a>
                    </h4>
                </div>
            </div>
        </div>;
    }
}

export default Header;
