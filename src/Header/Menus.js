import React, { Component } from 'react';
import { Link } from 'react-scroll'
import {ButtonGroup} from 'reactstrap';
import '../Style/Buttons.css';

class Menus extends Component {
    render() {
        return (
            <ButtonGroup className="Menus">
                <WhoButton/>
                <WhatButton/>
                <WhereButton/>
            </ButtonGroup>
        );
    }
}

class WhoButton extends Component {
    render() {
        return (
            <Link className="button-menus btn btn-secondary" activeClass="active" to="who-element" spy={true} smooth={true} offset={50} duration={500} >
                <div>
                    <h3>Who</h3>
                </div>
            </Link>
        );
    }
}

class WhatButton extends Component {
    render() {
        return (
            <Link className="button-menus btn btn-secondary" activeClass="active" to="what-element" spy={true} smooth={true} offset={50} duration={500} >
                <div>
                    <h3>What</h3>
                </div>
            </Link>
        );
    }
}

class WhereButton extends Component {
    render() {
        return (
            <Link className="button-menus btn btn-secondary" activeClass="active" to="where-element" spy={true} smooth={true} offset={50} duration={500} >
                <div>
                    <h3>Where</h3>
                </div>
            </Link>
        );
    }
}
export default Menus;
