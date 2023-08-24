import { configureStore } from '@reduxjs/toolkit';
import { createContext } from 'react';

const context = createContext()
const initialState = {
    darkTheme: false,
}

export {
    context, 
    initialState
};

