import { SEARCH_VALUE } from "../actions/actionList";

export function searchReducer(state = [], action) {
    switch(action.type) {
        case SEARCH_VALUE:
            return {
                ...state,
                value: action.payload
            }
        default:
            return state;
    }
}