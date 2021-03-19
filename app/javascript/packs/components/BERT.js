import React from 'react'
import {Image} from 'react-bootstrap'
import BERTImage from '../imgs/BERTSlide.jpg'

const BERT = () => {
    //BERT info component for How it works page
    return (
        <div className="container">

            <h3>BERT (Bidirectional Encoder Representations from Transformers)</h3>
            <p>Bert is a deep learning algorithm for Natural Language processing. It is used to try to help computers understand language as we humans do. BERT has a huge emphasis on bidirectionality. This lets the computer pick up on context on where phrases could mean more than one thing. The model I tested on this application was pretrained on wikipedia which is an estimated 2500 million words. </p>
            <Image className='mb-3' fluid src={BERTImage}/>
            <p>Now enters BERT, a language model which is bidirectionally trained (this is also its key technical innovation). This means we can now have a deeper sense of language context and flow compared to the single-direction language models.

             Instead of predicting the next word in a sequence, BERT makes use of a novel technique called Masked LM (MLM): it randomly masks words in the sentence and then it tries to predict them. Masking means that the model looks in both directions and it uses the full context of the sentence, both left and right surroundings, in order to predict the masked word. Unlike the previous language models, it takes both the previous and next tokens into account at the same time. The existing combined left-to-right and right-to-left LSTM based models were missing this “same-time part”. (It might be more accurate to say that BERT is non-directional though.)</p>

        </div>
    )
}

export default BERT