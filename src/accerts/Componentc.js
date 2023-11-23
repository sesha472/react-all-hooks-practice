import React from 'react'
import { Firstcontext } from './ComponentA'

const Componentc = () => {
  return (
    <div style={{backgroundColor:"green"}}>
        <Firstcontext.Consumer>
            {value=><p> this is sate value form componnet a : {value.username}</p>}
        </Firstcontext.Consumer>
      this is component C
    </div>
  )
}

export default Componentc
