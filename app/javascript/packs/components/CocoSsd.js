import React from 'react'
import {Image} from 'react-bootstrap'
import Coco from '../imgs/cocoSsd.png'

const CocoSsd = () => {
    //COCOSSD info component for How it works page
    return (
        <div className="container">

        <h3>COCO-SSD (Single Shot MultiBox Detection) </h3>
        <p>COCO-SSD is an object detection model powered pre-trained by tensorflow. COCO is a large scale object detection segmentation, and captioning dataset.  SSD stands for single-shot multibox dimension. This model can detect 90 objects with relatively high accuracy. The SSD works by extracting feature maps and subsequently applying convolution filter to detect objects </p>
        <Image className='mb-3' fluid src={Coco}/>
        <p>SSD uses a matching phase while training, to match the appropriate anchor box with the bounding boxes of each ground truth object within an image. Essentially, the anchor box with the highest degree of overlap with an object is responsible for predicting that object’s class and its location. This property is used for training the network and for predicting the detected objects and their locations once the network has been trained. In practice, each anchor box is specified by an aspect ratio and a zoom level.</p>

    </div>
    )
}

export default CocoSsd
