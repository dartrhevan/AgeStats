import * as actionTypes from "./actionTypes";

export function setPeople(people, statistics) {
    return {
        type: actionTypes.SET_PEOPLE,
        people,
        statistics
    }
}

export function setState() {
    return {
        type: actionTypes.SET_STATE
    }
}
