import * as actionTypes from "./actionTypes";

export function setPeople(people, statistics, select= {max: 110, min: 0, pattern: ''}) {
    return {
        type: actionTypes.SET_PEOPLE,
        people,
        statistics,
        select
    }
}

export function setState() {
    return {
        type: actionTypes.SET_STATE
    }
}
/*
export function select(select) {
    return {
      type: actionTypes.SELECT,
      select
    };
}*/
