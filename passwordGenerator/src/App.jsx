import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllow, setNumAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllow) str += "1234567890"
    if (charAllow) str += "@#$%^&*~?/{}\|[]!"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numAllow, charAllow, setPassword])

  const copyPassword = useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  }, [length, numAllow, charAllow, passwordGenerator])

  return (
    
 <div className="w-full max-w mx-auto shadow-md text-yellow-600 bg-gray-700 px-4 rounded-lg my-8" >
       <h1 className='text-lime-400 m-4 text-center pt-4 text-4xl' >PasswordGenerator</h1>

       <div className='flex shadow-md'> 
          <input type="text"
            value={password}
            className='py-1 px-3 outline-none rounded m-8'
            readOnly
            placeholder='password'
            ref={passwordRef}
            />

            <button className='rounded bg-yellow-600 p-2 m-8 text-black'
            onClick={copyPassword}>copy</button>
       </div>



       
    <div>

        <div>
          <input type="range"
          min={6}
          max={20}
          value={length} 
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label className='rounded m-3 p-3 text-xl'>Length:{length}</label>
        </div>

        <div>
          <input type="checkbox"
          defaultChecked={numAllow}
          id='numberinput'
          className='cursor-pointer'
          onChange={()=>{setNumAllow((prev)=>!prev)}} />
          <label >Number</label>
        </div>

        <div>
          <input type="checkbox"
          defaultChecked={charAllow}
          id='charinput'
          className='cursor-pointer'
          onChange={()=>{setCharAllow((prev)=>!prev)}} />
          <label >character</label>
        </div>

    </div>
</div>
    
  )
}

export default App
