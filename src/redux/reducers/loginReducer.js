import { LOG_IN } from "../types";

export const loginReducer = (state={}, action) =>{
    switch (action.type){
        case LOG_IN:
            return { currentUser: action.payload}
        default:
            return state
    }
}