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
        <div className='mb-5'>
            <h1 className='text-2xl font-bold'>Counter App</h1>
            <h2 className='text-xl font-semibold'>Count: {count}</h2>
            {/* Buttons to add and reset count */}
            <button className='px-2 py-1 bg-green-500 text-white' onClick={addCount}>Add +1</button>
            <button className='px-2 py-1 bg-red-500 text-white' onClick={removeCount}>Remove -1</button>
        </div>
    )
}

// Export the component
export default Counter