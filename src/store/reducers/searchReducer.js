import { SEARCH_VALUE } from "../actions/actionList";

export function searchReducer(state = '', action) {
    switch(action.type) {
        case SEARCH_VALUE:
            return action.payload
        default:
            return state;
    }
}