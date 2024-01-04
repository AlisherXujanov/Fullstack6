import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button'
import { context } from '../Store'


export default function ToggleC() {
    const state = useContext(context)

    function increment() { state.dispatch({ type: 'increment' }) }
    function decrement() { state.dispatch({ type: 'decrement' }) }

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
