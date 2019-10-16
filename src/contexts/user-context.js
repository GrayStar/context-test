import React, { createContext, useReducer } from 'react';

const UserContext = createContext();

const intialState = {
    firstName: 'John',
    lastName: 'Doe',
    age: 32,
};

const USER_ACTIONS = {
    SET_FIRST_NAME: 'SET_FIRST_NAME',
    SET_LAST_NAME: 'SET_LAST_NAME',
    SET_AGE: 'SET_AGE',
};

const reducer = (state, action) => {
    switch (action.type) {
        case USER_ACTIONS.SET_FIRST_NAME:
            return {...state, firstName: action.payload.firstName };
        case USER_ACTIONS.SET_LAST_NAME:
            return {...state, lastName: action.payload.lastName };
        case USER_ACTIONS.SET_AGE:
            return {...state, age: action.payload.age };
        default:
            return state;
    }
}

const UserProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, intialState);

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            { props.children }
        </UserContext.Provider>
    );
}

const UserConsumer = UserContext.Consumer;

export {
    UserContext,
    UserProvider,
    UserConsumer,
    USER_ACTIONS,
};