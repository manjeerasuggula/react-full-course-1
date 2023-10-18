import React,{useState} from 'react';
import "./../../index.css";
const Index = () => {
  const[firstName,setFirstName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");

  // const changeFirstName=(event)=>{
  //   console.log(event.target.value);
  //   setFirstName(event.target.value);
    
  // }
  // const changeEmail=(event)=>{
  //   console.log(event.target.value);
  //   setEmail(event.target.value);
  // }
  // const changePassword=(event)=>{
  //   // console.log(event);
  //   setPassword(event.target.value);
  // }

  // const handleInputChange=(e,name)=>{
  //   console.log(e.target.value);
  //   if(name==="firstName"){
  //     setFirstName(e.target.value);
  //   }
  //   else if(email==="email"){
  //     setEmail(e.target.value)
  //   }
  //   else if(password==="password"){
  //     setPassword(e.target.value);
  //   }
    
  // }


  const handleSubmit=(event)=>{
    event.preventDefault(); 
    let userObj={
      firstName:firstName,
      email:email,
      password:password,
    }
    console.log(userObj);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-content"><input type="text" name="firstname" id="firstname" value={firstName}  placeholder='enter your name' onChange={(e)=>setFirstName(e.target.value)} /></div>
      <div className="form-content"><input type="text" name="email" id="email" value={email} placeholder='enter your email' onChange={(e)=>setEmail(e.target.value)} /></div>
      <div className="form-content"><input type="password" name="password" id="password" value={password} placeholder='enter your password' onChange={(e)=>setPassword(e.target.value)} /></div>
      <div className="form-button"><button>submit</button></div>
    </form>
  )
}

export default Index;