function ChildCompopent({openStatus,onStatus}){
    return (
        <div>
        <p>Status is {openStatus?"Child statusBool is Open":"Child statusBool is Closed"}</p>
        <button onClick={()=>onStatus(!openStatus)}>Change status</button>
        </div>
 
    );
}
export default ChildCompopent;