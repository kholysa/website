import React, { Component } from 'react';
import face from '../me.jpg';
import Menus from "./Menus";

class Header extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={face} className="App-logo" alt="logo" />
                    <Menus/>
                </div>
            </div>
        );
    }
}

export default Header;
