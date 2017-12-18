import React, { Component } from 'react';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import {Button, ButtonGroup} from 'reactstrap';
import '../style/Buttons.css';

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
                    Who
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
                    What
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
                    Where
                </div>
            </Link>
        );
    }
}
export default Menus;
