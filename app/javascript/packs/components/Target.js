import React from 'react'

const Target = ({reference, size, prediction}) => {
    //convert to size so that they fit on the image
    const l = (prediction.bbox[0] * reference.imgRefWidth) / size.imgWidth;
    const t = (prediction.bbox[1] * reference.imgRefHeight) / size.imgHeight;
    const w = (prediction.bbox[2] * reference.imgRefWidth ) / size.imgWidth;
    const h = (prediction.bbox[3] * reference.imgRefHeight ) / size.imgHeight;
    const predict = prediction.class

    //set style for the border around what model predicts
    const targetStyle = {
        left:l + "px",
        top: t + "px",
        width:w + "px",
        height:h + "px",
        border: "1px solid #00FF00",
        position : "absolute",
        backgroundColor : "transparent",
        zIndex: "20",
    
    }

    return (
         <div style={targetStyle}>
             <span style={{color:"red"}}>{predict}</span>
        </div>
    )
}

export default Target