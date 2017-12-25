import React from 'react';
import PropTypes from 'prop-types'
import Box from './Box'
import '../Style/Boxes.css'

const BoxContainer = (props) => (
    <div className="Box-container">
        {props.BoxData.map((BD) => {
            return <Box BoxTitle={BD.BoxTitle} />
        })}
    </div>
);

// const props = {
//     BoxData: PropTypes.array()
// };

export default BoxContainer;
