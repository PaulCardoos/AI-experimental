import {
    ITEMS_REQ,
    ITEMS_SUCCESS,
    ITEMS_FAILURE
} from '../constants/dataConstants'

//must be a pure function

export const itemsReducer = (state = {items : []} , action) => {
    switch(action.type){
        case ITEMS_REQ:
            return {loading : true, items : []}
        case ITEMS_SUCCESS:
            return {loading : false, items: action.payload}
        case ITEMS_FAILURE: 
            return {loading : false, error : action.payload}
        default:
            return state
    
    }
}