import actionTypes from './actionTypes';
import React from "react";

export default function reducer(state = {}, action) {
    switch (action.type) {
        case actionTypes.SET_PEOPLE:
            return {
                people: action.people,
                statistics: action.statistics,
                select: state.select
            };
        case actionTypes.SET_STATE:
            return {
                people: [],
                statistics: {
                    average: 0,
                    dispersion: 0,
                    deviation: 0,
                    mode: 0
                },
                select: {
                    max: 110,
                    min: 0,
                    pattern: ''
                }
            };/*
        case actionTypes.SELECT:
            return {
                ...state,
                select: action.select
            };*/
    }
}
