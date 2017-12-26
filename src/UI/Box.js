import React from 'react';
// import PropTypes from 'prop-types'
import '../Style/Boxes.css'

const Box = props => (
    <div className="Box">
        {props.BoxTitle}
        <br/>
        {props.BoxBlurb}
        {/*<img src={props.BoxImage} alt={props.BD.BoxBlurb}/>*/}
    </div>
);

export default Box;
