import fetch from 'isomorphic-fetch';
import { useReducer } from 'react';
require('es6-promise').polyfill();

const STATUS = {
    FETCHING: 'FETCHING',
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR',
};

const initialState = {
    status: null,
    response: null,
};

const fetching = () => {
    return { type: STATUS.FETCHING };
};
const success = (response) => {
    return { type: STATUS.SUCCESS, response };
};
const error = (response) => {
    return { type: STATUS.ERROR, response }
};

const reducer = (state = initialState, { type, response } = {}) => {
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

const useApiRequest = (url, options) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const makeRequest = async () => {
        dispatch(fetching());

        try {
            const response = await fetch(url, options);
            const json = await response.json();

            dispatch(success(json));
        } catch(e) {
            dispatch(error(e));
        }
    };

    return [state, makeRequest];
};

export default useApiRequest;