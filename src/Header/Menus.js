import React, { Component } from 'react';
import {Button} from 'reactstrap';
import '../style/Buttons.css';

class Menus extends Component {
    render() {
        return (
            <div className="Menus">
                <WhoButton/>
                <WhatButton/>
                <WhereButton/>
            </div>
        );
    }
}

class WhoButton extends Component {
    render() {
        return (
            <Button className="button-menus">
                Who
            </Button>
        );
    }
}

class WhatButton extends Component {
    render() {
        return (
            <Button className="button-menus">
                What
            </Button>
        );
    }
}

class WhereButton extends Component {
    render() {
        return (
            <Button className="button-menus">
                Where
            </Button>
        );
    }
}
export default Menus;
