import Person from "./Person"

const Persons=({users})=>{
    return(
<>
{users.map((u)=>
    <Person user={u}/>
)}
</>
    )
}
export default Persons