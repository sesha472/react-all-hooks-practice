import React, { useContext,useState } from 'react'
import ComponentB from './ComponentB';
import { createContext } from 'react';

export const Firstcontext=createContext();
export const useDetails=()=>{
    return useContext(Firstcontext)
}

const ComponentA = () => {
    const [username, setusername] = useState("seshasai")
  return (
    <div style={{backgroundColor:"yellow",padding:"10px"}}>
        this is component A
        <Firstcontext.Provider value={{username,setusername}}>
        <ComponentB/>
          
        </Firstcontext.Provider>
        
      
    </div>
  )
}

export default ComponentA
