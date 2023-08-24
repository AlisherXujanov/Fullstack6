import { configureStore } from '@reduxjs/toolkit';
import { createContext } from 'react';

const context = createContext()
const initialState = {
    darkTheme: false,
    count: 0,
}

export {
    context, 
    initialState
};

