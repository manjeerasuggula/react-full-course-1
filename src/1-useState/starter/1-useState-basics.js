import React,{useState} from "react";

const Index=()=>{
  const [number,setNumber]=useState(0);
  const incrementCount=()=>{
          // setNumber(number+1);
          // setNumber(number+1);
          setNumber((prevCount)=>{
            return prevCount+1;
          })
          setNumber((prevCount)=>prevCount+1);
  }
  const decrementCount=()=>{
    setNumber((prevCount)=>prevCount-1);
    setNumber((prevCount)=>prevCount-1);
  }
  return(
    <div>
      <button onClick={decrementCount}>-</button>
      <span>number:{number}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  )
}
export default Index;