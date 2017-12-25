import React, { Component } from 'react';
import '../Style/TheatreImage.css'
import Menus from './Menus'

class App extends Component {
    render() {
        return (
<div>
    <Menus/>
            <div className="Theatre-image">
                <div className="Intro-text">
                    <h4><b>Hey there!</b></h4>
                    Scroll down to learn a bit more about me, Saif
                </div>
            </div>
</div>
        );
    }
}

export default App;
