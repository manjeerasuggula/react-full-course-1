import React, { useState } from "react";

const Index = () => {
  const [list, setList] = useState([]);
  const [message, setMessage] = useState({
    text: "",
    id: "",
  });
  const [editingItem,SetEditingItem]=useState({
    id:"",
    isEditing:false,
  })
  const changeMessage = (e) => {
    setMessage({
      ...message,
      text: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = {
      text: message.text,
      id: new Date().getTime().toString(),
    };
    // console.log(newTodo);
    setList([...list, newTodo]);
    setMessage({
      text: "",
      id: "",
    });
  };
  const handleDelete = (id) => {
    // console.log(id);
    let newTodos = list.filter((eachItem) => {
      return eachItem.id !== id;
    });
    // console.log(newTodos);
    setList(newTodos);
  };
  const changeEditState=(id)=>{
    // console.log(id);
    SetEditingItem({
        ...editingItem,
        id:id,
        isEditing:true,
    })
    let editableItem=list.find((eachItem)=>eachItem.id===id);
    setMessage({
        ...message,
        text:editableItem.text,
        id:editableItem.id,
    })
    // console.log(editableItem);
  }
  const handleEdit=(e)=>{
    e.preventDefault();
    console.log("previous Todos: ", list);
    let newTodos=list.map((eachItem)=>{
        if(eachItem.id===editingItem.id){
            return{
                text:message.text,
                id:editingItem.id,
            }} else {
             return eachItem;
        }
    });
    // console.log("current Todos:",newTodos);
    setList(newTodos);
    setMessage({
        text:"",
        id:"",
    })
    SetEditingItem({
        id:"",
        isEditing:false,
    })
  }

  return (
    <div>
      <form>
        <input
          type="text"
          name="message"
          id="message"
          placeholder="enter some text"
          value={message.text}
          onChange={changeMessage}
        />
        {
            editingItem.isEditing? <button type="Submit" onClick={handleEdit}>Edit</button> : <button type="Submit" onClick={handleSubmit}>add</button> 
        }
        {/* <button type="submit" onClick={handleSubmit}>
          add
        </button> */}
      </form>
      <hr />
      {list.length === 0 && <h4>There is no items in the list</h4>}
      <ul>
        {list.map((eachItem) => {
          const { text, id } = eachItem;
          return (
            <li key={id}>
              <span>{text}</span>
              <button onClick={()=>{changeEditState(id)}}>Edit</button>
              <button
                onClick={() => {
                  handleDelete(id);
                }}
              > delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Index;
