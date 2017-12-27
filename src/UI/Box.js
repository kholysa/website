import React from 'react';
// import PropTypes from 'prop-types'
import '../Style/Boxes.css'

const Box = props => (
    <div className="Box">
        <div className="Box-title">
            <h4>{props.BoxTitle}</h4>
        </div>
        <br/>
        <div className="Box-blurb">
            {props.BoxBlurb}
        </div>
        <div className="Box-image">
            <img className="image" src={props.BoxImage} alt={props.BoxBlurb}/>
        </div>
    </div>
);

export default Box;
