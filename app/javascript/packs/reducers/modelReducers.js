import { 
    NLP_MODEL_REQ,
    NLP_MODEL_FAILURE,
    NLP_MODEL_SUCCESS,
    NLP_ANSWER_REQ,
    NLP_ANSWER_SUCCESS,
    NLP_ANSWER_FAILURE,
    COCO_MODEL_REQ,
    COCO_MODEL_SUCCESS,
    COCO_MODEL_FAILURE,
    COCO_PREDICTION_REQ,
    COCO_PREDICTION_SUCCESS
} from '../constants/modelsConstant'

//just basic redux
export const nlpModelReducer = (state =  { model : null }, action) => {

    switch(action.type){
        case NLP_MODEL_REQ:
            return {loading : true, model : null}
        case NLP_MODEL_SUCCESS: 
            return {loading : false, model : action.payload}
        case NLP_MODEL_FAILURE: 
            return {loading :false, error : action.payload }
        default: 
            return state
    }

}
export const nlpModelAnswerReducer = (state =  { answers : []  }, action) => {

    switch(action.type){
        case NLP_ANSWER_REQ:
            return {generating : true, answers : []}
        case NLP_ANSWER_SUCCESS: 
            return {generating : false, answers: action.payload}
        case NLP_ANSWER_FAILURE: 
            return {generating :false, e: action.payload }
        default: 
            return state
    }

}

export const cocoSsdModelReducer = (state =  { cocoModel : null  }, action) => {
    
    switch(action.type){
        case COCO_MODEL_REQ:
            return {loading : true, cocoModel : null}
        case COCO_MODEL_SUCCESS: 
            return {loading : false, cocoModel: action.payload}
        case COCO_MODEL_FAILURE: 
            return {loading :false, e: action.payload }
        default: 
            return state
    }
}
        
export const cocoModelPredictionReducer = (state =  { predictions : []  }, action) => {
    
    switch(action.type){
        case COCO_PREDICTION_REQ:
            return {generating : true, predictions : [] }
        case COCO_PREDICTION_SUCCESS: 
            return {generating : false, predictions : action.payload}
        case COCO_PREDICTION_SUCCESS: 
            return {generating :false, e: action.payload }
        default: 
            return state
    }
}
    
