import {
    NLP_MODEL_REQ,
    NLP_MODEL_SUCCESS,
    NLP_MODEL_FAILURE,
    NLP_ANSWER_REQ,
    NLP_ANSWER_SUCCESS,
    NLP_ANSWER_FAILURE,
    COCO_MODEL_REQ,
    COCO_MODEL_SUCCESS,
    COCO_MODEL_FAILURE,
    COCO_PREDICTION_REQ,
    COCO_PREDICTION_SUCCESS,
    COCO_PREDICTION_FAILURE
} from '../constants/modelsConstant'


export const nlpModelAction = () => async(dispatch) => {
    try{
        dispatch({
            type : NLP_MODEL_REQ
        })

        const model = await qna.load();

        dispatch({
            type : NLP_MODEL_SUCCESS,
            payload : model 
        })

    } catch (e) {

        dispatch({
            type : NLP_MODEL_FAILURE,
            payload : e
        })

    }
}

export const nlpModelAnswersAction = (passage, question, model) => async(dispatch) => {
    
    try{
        dispatch({
            type : NLP_ANSWER_REQ
        })

        const answers = await model.findAnswers(question, passage)
        if(answers === []){
            answers.push("I did not understand the question")
        }

        dispatch({
            type : NLP_ANSWER_SUCCESS,
            payload : answers
        })

    } catch (e) {

        dispatch({
            type : NLP_ANSWER_FAILURE,
            payload : e
        })

    }
}

export const cocoModelAction = () => async(dispatch) => {
    try{
        dispatch({
            type : COCO_MODEL_REQ
        })

        const model = await cocoSsd.load({});

        dispatch({
            type : COCO_MODEL_SUCCESS,
            payload : model 
        })

    } catch (e) {

        dispatch({
            type : COCO_MODEL_FAILURE,
            payload : e
        })

    }
}

export const cocoPredictionAction = (imgDiv, model) => async(dispatch) => {
    
    try{
        dispatch({
            type : COCO_PREDICTION_REQ
        })

        const predictions = await model.detect(imgDiv, 8);

        dispatch({
            type : COCO_PREDICTION_SUCCESS,
            payload : predictions
        })

    } catch (e) {

        dispatch({
            type : COCO_PREDICTION_FAILURE,
            payload : e
        })

    }
}