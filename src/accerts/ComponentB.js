import Componentc from './Componentc';
import { Firstcontext } from './ComponentA';


const ComponentB = () => {
    
  return (
    <div style={{backgroundColor:"blue",padding:"10px"}}>
        
        <Firstcontext.Consumer>
          
            {value=><p>his city is : {value.username}</p>}

        </Firstcontext.Consumer>
        this is component B
        <Componentc/>

      
    </div>
  )
}

export default ComponentB
