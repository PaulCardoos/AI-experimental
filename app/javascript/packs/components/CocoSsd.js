import React from 'react'
import {Image} from 'react-bootstrap'

const CocoSsd = () => {
    return (
        <div className="container">

        <h3>COCO-SSD (Single Shot MultiBox Detection) </h3>
        <p>COCO-SSD is an object detection model powered pre-trained by tensorflow. COCO is a large scale object detection segmentation, and captioning dataset.  SSD stands for single-shot multibox dimension. This model can detect 90 objects with relatively high accuracy. The SSD works by extracting feature maps and subsequently applying convolution filter to detect objects </p>
        <Image className='mb-3' fluid src="#"/>
        <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

    </div>
    )
}

export default CocoSsd
