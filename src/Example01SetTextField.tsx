import { useState } from "react";
export default function MyInput(){
    const[text,setText] = useState('hello');
    function handleChange(e){
        console.log(e.target.value);
        setText(e.target.value);
        //setText('123');
    }
    return (
        <>
            <input value={text} onChange={handleChange}></input>
            <p>You typed: {text}</p>
            <button onClick={()=>setText('hello')}>
                Reset
            </button>
        </>
    );
}