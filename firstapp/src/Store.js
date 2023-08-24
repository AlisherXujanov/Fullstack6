import { configureStore } from '@reduxjs/toolkit';
import { createContext } from 'react';

const context = createContext()
const initialState = {
    darkTheme: false,
    count: 0,
    imageMovements: {
        translateValue: 0,
        left: "-200px",
        right: "200px",
    }
}

export {
    context,
    initialState
};

