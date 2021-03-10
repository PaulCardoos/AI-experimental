import {
    ITEMS_REQ,
    ITEMS_SUCCESS,
    ITEMS_FAILURE
} from '../constants/dataConstants'
import axios from 'axios'


export const itemAction = () => async (dispatch) => {
    try{
        dispatch({
            type: ITEMS_REQ
        })

        const { data }  = await axios.get('http://localhost:3000/api/r/v1/items')

        dispatch({
            type : ITEMS_SUCCESS,
            payload : data
        })

    } catch (e) {

        dispatch({
            type: ITEMS_FAILURE,
            payload : e
        })

    }
}