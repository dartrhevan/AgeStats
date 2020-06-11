import actionTypes from './actionTypes';

import {uploadData, getData} from '../api';

export default function reducer(state = {}, action) {
    switch (action.type) {
        case actionTypes.ADD_MAN:
            const state = {...state};
            state.people.add(action.man);
            return state;
        case actionTypes.SELECT_PEOPLE:
            const data = getData(action.select);
            return data;
            //return {...state, people: action.people};
        case actionTypes.SET_STATE:
            return {
                people: []
            };
        default:
            return {}
    }
}
