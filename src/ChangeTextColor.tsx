import { useState } from "react";
/// Component to change color of Paragraph to the selected color

export default function ChangeColor1() {
    const [myColor, setColor] = useState('red');
    function handleChange(e) {
        console.log(e.target.value);
        setColor(e.target.value)

    }
    return (
        <>
            <div>
                <select value={myColor} onChange={handleChange}>
                    <option value="red">red</option>
                    <option value="blue">blue</option>
                    <option value="green">green</option>
                </select>
                <p style={{ backgroundColor: myColor }}>Selected Color is  {myColor}</p>
            </div>
        </>
    );

}