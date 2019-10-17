import fetch from 'isomorphic-fetch';
import { useReducer } from 'react';
require('es6-promise').polyfill();

export const STATUS = {
    FETCHING: 'FETCHING',
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR',
};

const initialState = {
    status: null,
    response: null,
};

const reducer = (state = initialState, { type, response }) => {
    switch (type) {
        case STATUS.FETCHING:
            return {
                ...initialState,
                status: STATUS.FETCHING,
            };
        case STATUS.SUCCESS:
            return {
                ...state,
                status: STATUS.SUCCESS,
                response,
            };
        case STATUS.ERROR:
            return {
                ...state,
                status: STATUS.ERROR,
                response,
            };
        default:
            return state;
    }
};

const useFetch = (url, options) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const makeRequest = async () => {
        dispatch({ type: STATUS.FETCHING });

        try {
            const response = await fetch(url, options);
            const json = await response.json();

            dispatch({
                type: STATUS.SUCCESS,
                response: json,
            });
        } catch(error) {
             dispatch({
                type: STATUS.ERROR,
                response: error,
            });
        }
    };

    return [state, makeRequest];
};

export default useFetch;