import { useState } from "react";
import { ChangeColor_Select, DisplaySelectedColor } from "./ChangeTextColor02";

export default function TestComponent(){
    const [myColor, setColor] = useState('red');
 
    return (
        <>
            <div>
                Select Color: <ChangeColor_Select selectedColor={myColor} setColorTo={setColor} ></ChangeColor_Select>
            </div>
            <div>
                <h3>Following is a preview of selected color</h3>
                <DisplaySelectedColor myColor={myColor} setColorTo={setColor}></DisplaySelectedColor>
            </div>
        </>

    );
}