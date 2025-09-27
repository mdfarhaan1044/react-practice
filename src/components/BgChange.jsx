import { useState } from 'react'
// This is the BgChange component. The componenet should be always start with uppercase
function BgChange() {
    // useState hooks to store the background color
    const [bgcolor, setBgcolor] = useState('black')
    // function to change the background color
    const changeBg = (color) => {
        setBgcolor(color)
    }

    return (
        <div className="flex justify-center gap-2 w-[90vw] items-center h-[20vh] m-3 border border-white mb-5" style={{ backgroundColor: bgcolor }}>

            {/* buttons to change the background color */}
            <button className="px-2 py-1 bg-red-500 text-black" onClick={() => changeBg('red')}>Red</button>
            <button className="px-2 py-1 bg-green-500 text-black" onClick={() => changeBg('green')}>Green</button>
            <button className="px-2 py-1 bg-blue-500 text-black" onClick={() => changeBg('blue')}>Blue</button>
            <button className="px-2 py-1 bg-yellow-500 text-black" onClick={() => changeBg('yellow')}>Yellow</button>
            <button className="px-2 py-1 bg-purple-500 text-black" onClick={() => changeBg('purple')}>Purple</button>
            <button className="px-2 py-1 bg-orange-500 text-black" onClick={() => changeBg('orange')}>Orange</button>
            <button className="px-2 py-1 bg-pink-500 text-black" onClick={() => changeBg('pink')}>Pink</button>
            <button className="px-2 py-1 bg-black text-white" onClick={() => changeBg('black')}>Black</button>
            <button className="px-2 py-1 bg-white text-black" onClick={() => changeBg('white')}>White</button>
        </div>
    )
}

export default BgChange