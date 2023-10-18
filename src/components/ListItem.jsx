import { useState } from "react";

function ListItem({text, onDelet}){
    const [checked,setchecked]=useState(false)
    const handlecheck = () => {
        setchecked(!checked)
    }
    return (<li className={`bg-indigo-400 p-2 ${checked ?`line-through`:null}`} > 
    {text} <input type="checkbox"  checked={checked} onChange={handlecheck}/>
    </li>)
}
export default ListItem;