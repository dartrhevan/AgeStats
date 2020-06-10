import * as actionTypes from "./actionTypes";

export function addMan(man) {
    return {
        type: actionTypes.ADD_MAN,
        man
    }
}

export function setPeople(people) {
    return {
        type: actionTypes.ADD_MAN,
        people
    }
}


export function setState() {
    return {
        type: actionTypes.SET_STATE
    }
}
