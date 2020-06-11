import * as actionTypes from "./actionTypes";

export function addMan(man) {
    return {
        type: actionTypes.ADD_MAN,
        man
    }
}

export function selectPeople(pattern, min, max) {
    return {
        type: actionTypes.SELECT_PEOPLE,
        select: {
            pattern,
            min,
            max
        }
    }
}

export function setState() {
    return {
        type: actionTypes.SET_STATE
    }
}
