import React from 'react';
// import PropTypes from 'prop-types'
import Box from './Box'
import '../Style/Boxes.css'

const BoxContainer = (props) => (
    <div className="Box-container">
        {props.BoxData.map((BD) => {
            return <Box key={BD.BoxTitle} BoxTitle={BD.BoxTitle} BoxBlurb={BD.BoxBlurb} BoxImage={BD.BoxImage} />
        })}
    </div>
);


export default BoxContainer;
