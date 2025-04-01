import { useState } from "react";

export default function CheckBoxDemo01(){
    const [checked, setChecked] = useState(false);
    return (
        <>
            <h1>Checkbox Demo</h1>
            <input type="checkbox" value={checked} onChange={()=>setChecked(!checked)}/>
            <p>Checkbox is{ checked?" Checked":" Not Checked "}</p>
        </>
    );
}