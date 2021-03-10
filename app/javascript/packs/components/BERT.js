import React from 'react'
import {Image} from 'react-bootstrap'
import BERTImage from '../imgs/BERTSlide.jpg'

const BERT = () => {
    return (
        <div className="container">

            <h3>BERT (Bidirectional Encoder Representations from Transformers)</h3>
            <p>Bert is a deep learning algorithm for Natural Language processing. It is used to try to help computers understand language as we humans do. BERT has a huge emphasis on bidirectionality. This lets the computer pick up on context on where phrases could mean more than one thing. The model I tested on this application was pretrained on wikipedia which is an estimated 2500 million words. </p>
            <Image className='mb-3' fluid src={BERTImage}/>
            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

        </div>
    )
}

export default BERT