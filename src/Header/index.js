import React, { Component } from 'react';
import BoxContainer from '../UI/BoxContainer';
import '../Style/Who.css';


class Header extends Component {
    render() {
        return <div className="App-Img">
            <div className="App-header">
                <h3 className="text">
                    <b>I am currently a Computer Engineering student at McGill University.</b>
                    <br/>
                    In my off time, I cycle, snowboard and work in theatre tech
                    <br/>
                    3 years and 5 productions later, I can safely say that I consider theatre tech work as fun
                </h3>
                <BoxContainer BoxData={[{BoxTitle: "Yupspsps"}, {BoxTitle:"boogidiboo"}]}/>
                <div className="text">
                    <h2><b>I've also participated in hackathons and coding competitions</b></h2>
                    <h4>
                    </h4>
                </div>
            </div>
        </div>;
    }
}

export default Header;
