import { FETCH_COMPANIES } from "../types";

export const contentReducer = (state={}, action) =>{
    switch (action.type){
        case FETCH_COMPANIES:
            return { contentData: action.payload}
        default:
            return state
    }
}