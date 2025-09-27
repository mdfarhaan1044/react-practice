// rfce
import { useState, useCallback, useEffect } from 'react'

function PasswordGenerator() {

    // password state
    const [password, setPassword] = useState('')
    // length state
    const [length, setLength] = useState(8)
    // number state
    const [numAllowed, setNumAllowed] = useState(false)
    // character state
    const [charAllowed, setCharAllowed] = useState(false)

    // password generator function
    // useCallback is used to memoize the passwordGenerator function
    const passwordGenerator = useCallback(() => {
        // password variable
        let pass = ''
        // string variable
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

        // if number is allowed
        if (numAllowed) str += '0123456789'
        // if character is allowed
        if (charAllowed) str += '!@#$%^&*()_+~`|}{[]:;?><,./-='

        // for loop
        for (let i = 1; i <= length; i++) {
            // random character
            let char = Math.floor(Math.random() * str.length + 1)
            // add character to password
            pass += str.charAt(char)
        }
        // set password
        setPassword(pass)

    }, [length, numAllowed, charAllowed, setPassword])


    // useEffect is used to run the passwordGenerator function when the length, numAllowed, charAllowed, passwordGenerator changes
    useEffect(() => {
        // run passwordGenerator function
        passwordGenerator()
    }, [length, numAllowed, charAllowed, passwordGenerator])



    return (
        <div className='mb-5'>
            <h1 className='text-2xl font-bold'>Generate Password</h1>
            <div className='w-full max-w-xl mx-auto shadow-md rounded-lg p-4 m-8 text-orange-500 bg-gray-700'>
                <div className='flex shadow rounded-lg overflow-hidden m-4'>
                    {/* password input */}
                    <input type='text' value={password} readOnly
                        placeholder='password' className='w-full p-4' />
                    {/* copy button */}
                    <button className='p-4 bg-orange-500 text-white' onClick={() =>
                        // copy password to clipboard
                        navigator.clipboard.writeText(password)}>Copy</button>
                </div>
                <div className='flex gap-2 justify-between'>
                    <div className='flex gap-2'>
                        {/* length input */}
                        <input type="range" min={6} max={40} value={length} onChange={(e) => setLength(e.target.value)} />
                        {/* length label */}
                        <label>Length : {length}</label>
                    </div>
                    <div className='flex gap-2'>
                        {/* number input */}
                        <input type="checkbox" defaultChecked={numAllowed} id='numInput'
                            onChange={() => setNumAllowed((prev) => !prev)} />
                        <label htmlFor='numInput'>Numbers</label>
                    </div>
                    <div className='flex gap-2'>
                        {/* character input */}
                        <input type="checkbox" defaultChecked={charAllowed} id='charInput'
                            onChange={() => setCharAllowed((prev) => !prev)} />
                        <label htmlFor='charInput'>Characters</label>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PasswordGenerator