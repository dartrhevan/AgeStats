import actionTypes from './actionTypes';

export default function reducer(state = {}, action) {
    switch (action.type) {
        case actionTypes.SET_PEOPLE:
            return {
                people: action.people,
                statistics: action.statistics
            };
        case actionTypes.SET_STATE:
            return {
                people: [],
                statistics: {}
            }
    }
}
