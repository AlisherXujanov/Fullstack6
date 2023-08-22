import React, { memo } from 'react'

const Test = () => {
    console.log('Test component is rendered')

    return (
        <div>
            <h1>Test component</h1>
        </div>
    )
}
export default memo(Test)
