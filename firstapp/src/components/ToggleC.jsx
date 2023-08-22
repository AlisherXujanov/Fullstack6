import React, { useState, useReducer } from 'react'
import Button from 'react-bootstrap/Button'
import Test from './Test.jsx'

export default function ToggleC() {
    const [count, setCounter] = useState(0)

    return (
        <div>
            <Test />
            <hr />


            <h2>Count: {count}</h2>
            <Button 
                variant='success'
                onClick={() => setCounter(count + 1)}
            >
                Increment +
            </Button>
            <Button 
                variant='danger'
                onClick={() => setCounter(count - 1)}
            >
                Decrement -
            </Button>
        </div>
    )
}
