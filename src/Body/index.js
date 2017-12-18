import React, { Component } from 'react';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class Body extends Component {
    render() {
        return (
            <div className="App-Body">
                <Element name="who-element">
                    Who
                </Element>
                <Element name="what-element">
                    What
                </Element>
                <Element name="where-element">
                    Where
                </Element>
                <p className="App-intro">

                </p>
            </div>
        );
    }
}

export default Body;
