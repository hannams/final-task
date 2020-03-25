import { SEARCH_VALUE } from "./actionList";

export function searchValue(value){
    return {
        type: SEARCH_VALUE,
        payload: value
    }
}