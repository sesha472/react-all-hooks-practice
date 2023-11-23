import React from 'react'
import { useDetails } from './ComponentA'
import Componentd from './Componentd';


const Componentc = () => {
const value=useDetails()

  return (
    <div style={{backgroundColor:"green",padding:"10px"}}>

            {value=><p> this is sate value form componnet a : {value.username}</p>}
            <button onClick={()=>{value.setusername("kumar")}}>click</button>
       <button onClick={()=>{value.setusername("seshasai")}}>click back</button>
      this is component C
      <Componentd/>
    </div>
  )
}

export default Componentc
