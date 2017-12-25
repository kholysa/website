import React from 'react';
import PropTypes from 'prop-types'
import '../Style/Boxes.css'

const Box = props => (
    <div className="Box">
        {console.log("ola")}
        {props.BoxTitle}
    </div>
);

// Box.PropTypes = {
//     BoxImage: PropTypes.object(),
//     BoxTitle: PropTypes.string(),
//     BoxBlurb: PropTypes.string()
// };

export default Box;
