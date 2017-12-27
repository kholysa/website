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
        {/*<img src={props.BoxImage} alt={props.BD.BoxBlurb}/>*/}
    </div>
);

export default Box;
