import React, {useState} from 'react'

const Index = () => {
    const initialArray=[
        {
            id:12344578,
            firstName:"emma",
            lastName:"watson",
            age:28,
        },
        {
            id:458878784,
            firstName:"manjeera",
            lastName:"lakshmi",
            age:31,
        },
        {
            id:78788978,
            firstName:"ashok",
            lastName:"manjeera",
            age:36,
        },
    ]

    const [data,setData]=useState(initialArray);
    const Delete=(selectedId)=>{
        // console.log(selectedId);
        const filterData=data.filter((eachItem)=>{
            return eachItem.id !==selectedId;
        })
        setData(filterData);
    }
  return (
    <div>
        <ul>
            {data.map((eachItem,index)=>{
                const{firstName,lastName,age,id}=eachItem;
                // console.log(eachItem);
                return(
                    <li key={index}>
                        <div>My firstName is <strong>{firstName}</strong></div>
                        <div>My lastName is <strong>{lastName}</strong></div>
                        <div>My age is <strong>{age}</strong></div>
                        <button onClick={()=>{Delete(id)}}>Delete</button>
                    </li>

                )
            })}
        </ul>
    </div>
  )
}

export default Index;