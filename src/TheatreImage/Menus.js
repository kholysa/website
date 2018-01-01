import React, { Component } from 'react';
import { Link } from 'react-scroll'
import {ButtonGroup} from 'reactstrap';
import '../Style/Buttons.css';

class Menus extends Component {
    render() {
        return (
            <ButtonGroup className="Menus">
                <WhoButton/>
                <WhereButton/>
            </ButtonGroup>
        );
    }
}

class WhoButton extends Component {
    render() {
        return (
            <Link className="button-menus btn btn-secondary" activeClass="active" to="who-element" spy={true} smooth={true} duration={1500} >
                <div>
                    <p>Who</p>
                </div>
            </Link>
        );
    }
}

class WhereButton extends Component {
    render() {
        return (
            <Link className="button-menus btn btn-secondary" activeClass="active" to="where-element" spy={true} smooth={true} duration={1500} >
                <div>
                    <p>Where</p>
                </div>
            </Link>
        );
    }
}
export default Menus;
