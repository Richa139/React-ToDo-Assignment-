import React from "react";
import CloseIcon from '@material-ui/icons/Close';
function Todoitem(props){
    
    return (
        <div >  
        <span className="check"> 
        <input type="checkbox" className="cb" />
        <li>{props.text}</li>
        <span className="sign"
        onClick={()=>{
           props.onChecked(props.id);
        }}
        ><CloseIcon/></span>
        </span>
        </div>
    )
     }
export default Todoitem;