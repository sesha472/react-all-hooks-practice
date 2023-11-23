import React from 'react';
import { useDetails } from './ComponentA';

const Componentd = () => {

    const value=useDetails();
  return (
    <div style={{backgroundColor:"orange",padding:"10px"}} >
       <p>{value.username}</p>
       <button onClick={()=>{value.setusername("kumar")}}>click</button>
       <button onClick={()=>{value.setusername("seshasai")}}>click to old name</button>

        this is component D
      
    </div>
  )

}

export default Componentd
