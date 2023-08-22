import React, { useState, useReducer } from 'react'
import Button from 'react-bootstrap/Button'


const initialState = { 
    count: 0,
    loading: false,
    error: ''
}

function reducerFunction(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        default:
            throw new Error("Unexpected action")
    }
}


export default function ToggleC() {
    // const [count, setCounter] = useState(0)

    // Here we want to convert this useState counter into useReducer counter
    const [state, dispatch] = useReducer(reducerFunction, initialState)

    function increment() {
        dispatch({ type: 'increment' })
    }
    function decrement() {
        dispatch({ type: 'decrement' })
    }

    return (
        <div>
            <h2>Count: {state.count}</h2>
            <Button
                variant='success'
                onClick={increment}
            >
                Increment +
            </Button>
            <Button
                variant='danger'
                onClick={decrement}
            >
                Decrement -
            </Button>
        </div>
    )
}
