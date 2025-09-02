import { useState } from "react";


const ListRender: React.FC = () =>{

    const users = [
       { id:1 , name:"Vijai"},
        { id:2 , name:"Gow"},
         { id:3 , name:"Manny"}
    ];
    const [listVal,setListVal] = useState(users);

    const onDelete = (id:number) =>{
       const filteredList = listVal.filter((indivUser)=> indivUser.id !== id)
        setListVal(filteredList);
    }


    return(
        <ul>
        {listVal &&
            listVal.map((indivUser) => (
            <li key={indivUser.id}>
                <label>{indivUser.name}</label>
                <button name={indivUser.name} onClick={()=>onDelete(indivUser.id)}>
                Delete
                </button>
            </li>
            ))}
        </ul>
    )
}

export default ListRender;