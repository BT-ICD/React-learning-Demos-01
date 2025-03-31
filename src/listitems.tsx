
function DisplayItems({dishes}){
    return(
        <ul>
            {
              dishes.map((dish)=>(<li key={dish.id} style={{listStyleType:"none"}}>{dish.title}</li>))  
            }
        </ul>
    );
}
export default DisplayItems;