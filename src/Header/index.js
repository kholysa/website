import React, { Component } from 'react';
import face from '../Images/me.jpg';
import Menus from "./Menus";

class Header extends Component {
    render() {
        return (
            <div className="App-Img">
                <div className="App-header">
                    <img src={face} className="App-logo" alt="logo" />
                    <Menus/>
                </div>
            </div>
        );
    }
}

export default Header;
