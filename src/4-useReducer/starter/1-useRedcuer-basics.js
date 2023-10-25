import React,{useReducer} from 'react'
const reducer=(state,action)=>{
    if(action.type==="DELETE_PERSON"){
        const newPersons=state.data.filter((eachPerson)=>{
            return eachPerson.id!==action.payload;
        })
        // console.log(newPersons);
        return{
            ...state,
            data:newPersons,
            length:state.length-1,
        }
    }
    throw new Error("action not found");

}
const Starter = () => {
    const initialState={
        data:[
            {id:"123554",firstName:"manjeera", email:"manjeera@gmail.com"},
            {id:"452454",firstName:"lakshmi", email:"lakshmi@gmail.com"},
        ],
        length:2,
    }
    const[state,dispatch]=useReducer(reducer, initialState);
    
    const handleDelete=(id)=>{
        dispatch({
            type:"DELETE_PERSON",
            payload:id,
        })
    }
    const handleEdit=(id)=>{
        dispatch({
            type:"UPDATE_PERSON",
            payload:id,
        })
    }
  return (
    <div>
        <h1>Current users length:{state.length}</h1>
      {
        state.data.map((eachItem)=>{
            const{id,firstName,email}=eachItem;
            return(
                <div key={id}>
                    <h3>{firstName}</h3>
                    <p>{email}</p>
                    <button onClick={()=>{handleDelete(id)}}>Delete</button>
                    <button onClick={()=>{handleEdit(id)}}>Edit</button>
                </div>
            )
        })
      }
    </div>
  )
}

export default Starter
