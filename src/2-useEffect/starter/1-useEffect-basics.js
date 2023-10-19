import React, {useEffect,useState} from "react";

const Index=()=>{
  useEffect(()=>{
    console.log("Hello i am coming from useEffect", count);
  },[]);
  const[count, setCount]=useState(0);
  return(
    <div>
      <h1>Learn useEffect hello</h1>
      <h1>{count}</h1>
      <button onClick={()=>{
        setCount(count+1)}}>+</button>
    </div>
  )
}

export default Index;