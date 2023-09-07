import React, { useState } from 'react'

function Test(props) {
    const [count, setCount] = useState(0)
    const [textColor, setColor] = useState('')

    return (
        <div style={{ textAlign: "center" }}>
            <h1 style={{color: textColor}}>
                {count}
            </h1>
            <hr />

            <button onClick={() => { setColor('red') }}>Red</button>
            <button onClick={() => { setColor('green') }}>Green</button>

            <hr />
            <button
                onClick={() => { setCount(count + 1) }}
            >
                Increment +
            </button>

            <button
                onClick={() => { setCount(count - 1) }}
            >
                Decrement -
            </button>
        </div>
    )
}

export default Test;


