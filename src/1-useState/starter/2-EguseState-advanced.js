import React,{useState} from 'react'

const Index = () => {
  const [firstName,setFirstName]=useState("emma");
  const [lastName,setLastName]=useState("watson");
  const [age,setAge]=useState(31);

  const changeFirstName=()=>{
    setFirstName("manjeera");
  }
  const changeLastName=()=>{
    setLastName("lakshmi");
  }
  const changeage=()=>{
    setAge(32);
  }
  return (
    <div>
      <h1>My first name is {firstName}</h1>
      <button onClick={changeFirstName}>change</button>
      <h2>My last name is {lastName}</h2>
      <button onClick={changeLastName}>change</button>
      <h3>My age is {age}</h3>
      <button onClick={changeage}>change</button>
    </div>
  )
}

export default Index