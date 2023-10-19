import React,{useEffect,useState} from "react"

const Index=()=>{
    const[count,setCount]=useState(0);
    // const[toggle,setToggle]=useState(true);
    const[pageWidth,setPageWidth]=useState(window.innerWidth);
    useEffect(()=>{
        const reSizeHandler=()=>{
            setPageWidth(window.innerWidth);
        }
        window.addEventListener("resize",()=>{
            setPageWidth(window.innerWidth);
        })
        console.log("Hello i am coming form useEffect",count);
        return()=>{
            console.log("iam removing");
            window.removeEventListener("resize",reSizeHandler)
        }
    },[count]);
    return(
        <div>
            <h1>Learn useEffect</h1>
            {/* <h1 onClick={()=>setToggle(!toggle)}>{toggle ? "open":"close"}</h1> */}
            <h1>{pageWidth}</h1>
            <h1>{count}</h1>
            <button onClick={()=>{setCount(count+1)}}>+</button>
        </div>
    )
}
export default Index;