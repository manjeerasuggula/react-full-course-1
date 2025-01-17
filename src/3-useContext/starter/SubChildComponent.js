import React,{useContext} from "react"
import {UserContext} from "../../context/userContext";
import { MainDataContext } from "../../context/mainDataContext";


const SubChildComponent=()=>{
    const data=useContext(UserContext);
    const mainData=useContext(MainDataContext);
    console.log(mainData);
    const {firstName,lastName,email}=data;
    return(
        <div>
            <h3>SubChildComponent </h3>
            <div>
                firstname:{firstName}
            </div>
            <div>
                lastName:{lastName}
            </div>
            <div>
                email:{email}
            </div>
        </div>
    )
}

export default SubChildComponent;