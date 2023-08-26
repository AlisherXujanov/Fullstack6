import { configureStore } from '@reduxjs/toolkit';
import { createContext } from 'react';

const context = createContext()
const initialState = {
    darkTheme: false,
    count: 0
}

function globalReducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + 1 }
        case 'decrement':
            return { ...state, count: state.count - 1 }
        case 'toggleTheme':
            return state
        default:
            throw new Error("Unexpected action")
    }
}

export {
    context,
    initialState,
    globalReducer
};

