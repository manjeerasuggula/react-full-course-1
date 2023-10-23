import SubChildComponent from "./SubChildComponent"
const ChildComponent=()=>{
    // console.log(props.userDetails);
    return(
        <div>
            <h2>ChildComponent</h2>
            <SubChildComponent/>
        </div>
    )
}
export default ChildComponent;