import React,{useState} from 'react';
import "./../../index.css";


const Index = () => {
  const [showData, setShowData]=useState(false)
  const handleChange=()=>{
    setShowData(!showData);
  }
  return (

    <div>
      <button onClick={handleChange}>{showData? "hide":"show"}</button>
      {/* {showData &&(<div className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore facere magnam quis optio quae delectus quam voluptatibus accusantium laboriosam deserunt, tempora, molestias quos, eius quaerat dignissimos! Pariatur iusto nisi quibusdam. Dolor expedita officia assumenda minus amet ipsam voluptatibus ipsum recusandae?</div>)} */}
      {showData ?<div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt similique nostrum tempora ratione necessitatibus facere dolore, voluptatem consequatur assumenda maxime quod ut, recusandae aliquid nesciunt, illo quas. Eaque, ullam sed.</div>:<div>data is hidden.</div>}
    </div>
  )
}

export default Index