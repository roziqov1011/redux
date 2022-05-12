import { FETCH_REQUEST_USERS, FETCH_SUCCESS_USERS } from "../action/user"

const initialSate= {
    list: [],
    isLoading : false
}

export const userReducer = (state = initialSate, action)=> {
    switch (action.type){
        case FETCH_REQUEST_USERS:
            return  { ...state,isLoading: true }
        case FETCH_SUCCESS_USERS:
            return {...state, isLoading: false, list: action.payload}
        default:
            return state
    }
}