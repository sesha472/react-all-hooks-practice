import Componentc from './Componentc';
import { Firstcontext } from './ComponentA';
import { getValue } from '@testing-library/user-event/dist/utils';


const ComponentB = () => {
    
  return (
    <div style={{backgroundColor:"blue",padding:"10px"}}>
        
        <Firstcontext.Consumer>
            {value=><p>his city is : {value.city}</p>}

        </Firstcontext.Consumer>
        this is component B
        <Componentc/>

      
    </div>
  )
}

export default ComponentB
