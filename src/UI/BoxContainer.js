import React from 'react';
import Box from './Box'
import '../Style/Boxes.css'

const BoxContainer = (props) => (
    <div className={"Box-container "+props.className}>
        {props.BoxData.map((BD) => {
            return <Box BoxModal={BD.BoxModal} key={BD.BoxTitle} BoxTitle={BD.BoxTitle} BoxBlurb={BD.BoxBlurb} BoxImage={BD.BoxImage} />
        })}
    </div>
);


export default BoxContainer;
