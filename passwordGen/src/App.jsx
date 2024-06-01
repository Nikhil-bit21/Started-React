import { useCallback, useEffect, useRef, useState } from "react"

function App() {
  const [length , setLength] = useState(8);
  const [number , setNumber] = useState(false);
  const [char , setChar] = useState(false);
  const [password , setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGen = useCallback(()=>{
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(number){
      str += '0123456789';
    }
    if(char){
      str += '!@#$%^&*';
    }
    for(let i=0;i<length;i++){
      let ind = Math.floor(Math.random()*str.length+1);
      let ch = str.charAt(ind);
      pass += ch;
    }
    setPassword(pass);
  },[length , number , char , setPassword]);

  const copyPassword = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(()=>{
    passwordGen();
  },[length,number,char,passwordGen])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
      <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value={password} className="outline-none w-full py-1 px-3 "
          placeholder="password" readOnly ref={passwordRef}></input>
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" 
          onClick={copyPassword}>Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" min={6} max={12} value={length} className="cursor-pointer"
            onChange={(e)=>{setLength(e.target.value)}}></input>
            <label>Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={number} id="numberInput" onChange={()=>{setNumber((prev) => !prev)}} ></input>
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={char} id="charInput" onChange={()=>{setChar((prev) => !prev)}} ></input>
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
