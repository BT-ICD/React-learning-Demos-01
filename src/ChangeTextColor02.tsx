export  function ChangeColor_Select({selectedColor,setColorTo}) {
    return (
        <>
            <div>
                <select value={selectedColor} onChange={(e)=>setColorTo(e.target.value)}  >
                    <option value="red" >red</option>
                    <option value="blue">blue</option>
                    <option value="green">green</option>
                </select>
            </div>
        </>
    );

}
export  function DisplaySelectedColor({myColor, setColorTo}){
    return <>
        <p>Select color is {myColor}  <button onClick={()=>{
            console.log('Reset color button clicked');
            setColorTo("red");

        }}>Reset Color to Red</button></p>
       
    </>
}

