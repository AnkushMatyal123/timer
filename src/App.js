import './App.css';
import React, {useState} from 'react'
function App() {
const [num, setNum] = useState(0)
const incValue=()=>{
setNum(num+1);
}
const decValue=()=>{
setNum(num-1);
}

  return(
<>
<div>
  <div className="centerDiv">
  <h1>{num}</h1>    
  <div >
    <button onClick={incValue} >+</button>
    <button onClick={decValue}>-</button>

  </div>
  </div>
</div>


</>


  );
  
}

export default App;
