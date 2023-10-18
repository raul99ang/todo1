import { useState } from "react";

function Checkboxes({text,onDelete}){
    const [checked, setChecked]=useState(false)

    const handleChecked = () => {
        setChecked(!checked)
    }

    return (
    <li className={`p-2 bg-indigo-500 ${checked ? 'text-green-400 line-through' : null}`}>{text} <input type="checkbox" checked={checked} onChange={handleChecked}/></li>
    )

}
export default Checkboxes;