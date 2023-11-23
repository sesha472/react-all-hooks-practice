import React from 'react'
import ComponentB from './ComponentB';
import { createContext } from 'react';

export const Firstcontext=createContext();

const ComponentA = () => {
  return (
    <div style={{backgroundColor:"yellow",padding:"10px"}}>
        this is component A
        <Firstcontext.Provider value={{username:"sesha",city:"hyd"}}>
        <ComponentB/>
          
        </Firstcontext.Provider>
        
      
    </div>
  )
}

export default ComponentA
