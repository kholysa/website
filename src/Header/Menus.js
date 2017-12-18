import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

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
            <Button>
                Who
            </Button>
        );
    }
}

class WhatButton extends Component {
    render() {
        return (
            <Button>
                What
            </Button>
        );
    }
}

class WhereButton extends Component {
    render() {
        return (
            <Button>
                Where
            </Button>
        );
    }
}
export default Menus;
