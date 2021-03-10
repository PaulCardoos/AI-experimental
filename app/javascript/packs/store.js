import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import {itemsReducer} from './reducers/dataReducers'
import {nlpModelReducer,
       nlpModelAnswerReducer,
       cocoSsdModelReducer,
       cocoModelPredictionReducer
    } from './reducers/modelReducers'

const reducers = combineReducers({
    fakeData : itemsReducer,
    nlpModel : nlpModelReducer,
    nlpAnswers : nlpModelAnswerReducer,
    cocoSsdModel : cocoSsdModelReducer,
    cocoPredictions : cocoModelPredictionReducer

})

const initialState = {}

const middleware = [thunk]

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store