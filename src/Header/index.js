import React from 'react';
import { Element } from 'react-scroll';
import BoxContainer from '../UI/BoxContainer';
import '../Style/Who.css';
import Hobbies, {coding} from './constants';


const Header = () => (
    <div className="App-header">
        <Element  name="who-element">


        <div className="text">
            <h3>
                <b>I am currently a Computer Engineering student at McGill University.</b>
                <br/>
                In my off time, I cycle, snowboard and work in theatre tech.
                <br/>
                3 years and 5 productions later, I can safely say that I consider theatre tech work as fun
            </h3>
        </div>
        <BoxContainer className="filter" BoxData={Hobbies}/>
        <div className="text">
            <h2><b>I've also participated in hackathons and coding competitions</b></h2>
            <h4>
            </h4>
        </div>
            <BoxContainer BoxData={coding}/>
        </Element>
    </div>);

export default Header;
