import React, { useState } from 'react'

function Counter() {

    // let count = 0; This is not a state variable so we cant update it we need to use useState hook 

    const [count, setCount] = useState(0);
    // This hooks is used to change the ui when the state changes and it changes every time when the state changes and everywhere it is used

    // Simple function to add count
    const addCount = () => {
        // Check if count is 20
        if (count === 20) {
            alert("Cant go above 20");
            return;
        }
        // Update the state
        setCount(count + 1);
    }

    // Simple function to remove count
    const removeCount = () => {
        // Check if count is 0
        if (count === 0) {
            alert("Cant go below 0");
            return;
        }
           // Update the state
        setCount(count - 1);
    }

    // Return statement
    return (
        <>
            <h1 className='text-red-700'>Counter App</h1>
            <h2>Count: {count}</h2>
            {/* Buttons to add and reset count */}
            <button onClick={addCount}>Add +1</button>
            <button onClick={removeCount}>Remove -1</button>
        </>
    )
}

// Export the component
export default Counter