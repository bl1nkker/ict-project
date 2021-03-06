import { FETCH_COMPANIES, FETCH_FREELANCERS } from "../types";

export const contentReducer = (state={}, action) =>{
    switch (action.type){
        case FETCH_COMPANIES:
            return {...state, contentData: action.payload}
        case FETCH_FREELANCERS:
            return {...state, contentData: action.payload}
        default:
            return state
    }
}