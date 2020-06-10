import actionTypes from './actionTypes';

export default function reducer(state = [], action) {
    switch (action.type) {
        case actionTypes.ADD_MAN:
            const state = {...state};
            state.people.add(action.man);
            return state;
        case actionTypes.SET_PEOPLE:
            return {...state, people: action.people};
        case actionTypes.SET_STATE:
            return {
                people: []
            };
    }
}
