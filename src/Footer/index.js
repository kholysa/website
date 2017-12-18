import React, { Component } from 'react';
import { Element } from 'react-scroll'

class Footer extends Component {
    render() {
        return (
            <Element name="where-element">
                <div className="App-footer">
                    Hi Hello
                    <br/>
                    Call me bb
                    <br/>
                    Or email me pls
                </div>
            </Element>
        );
    }
}

export default Footer;
