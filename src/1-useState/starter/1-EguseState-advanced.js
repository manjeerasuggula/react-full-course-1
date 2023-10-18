import React,{useState} from 'react'

const Index = () => {
    // const initialObj={
    //     firstName:"emma",
    //     lastName:"watson",
    //     age:31,
    // }
    function initialData(){
        return{
            firstName:"emma",
            lastName:"watson",
            age:31,
        }
    }
    const[data,setData]=useState(initialData);
    const changeFirstName=()=>{
        setData({
            ...data,
            firstName:"manjeera",
        })
    }
    const changeLastName=()=>{
        setData({
            ...data,
            lastName:"lakshmi",
        })
    }
  return (
    <div>
        <h1>My first name is {data.firstName}.</h1><button onClick={changeFirstName}>change the first name</button>
        <button onClick={changeFirstName}>change</button>
        <h2>My last name is {data.lastName}.</h2><button onClick={changeLastName}>change the last name</button>
        <h3>My age is {data.age}.</h3>
    </div>
  )
}

export default Index