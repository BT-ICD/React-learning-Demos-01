import { useEffect, useState } from "react";

export default function ApiAccessDemo01() {

    const [data, setData] = useState([]);

    useEffect(() => {
        
        fetch('https://api.github.com/users')
            .then((response) => response.json())
            .then(setData)
            .catch((error) => console.log('Error fetching users:', error));
    }, []
    );
    console.log('API Call');
            if(data){
                return (
                    <div>
                <ul>
                    {
                        data.map((user) => (
                            <li key={user.id} > {user.login}</li>))
                    }
                </ul>
                <button onClick={()=>setData([])}>Remove Data</button>
                </div>
             )  ; 
            }
            return <p>No users</p>
        
    
}