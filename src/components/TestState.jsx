import { useState } from "react"

const TestState=()=>{
    const [nom,setNom]=useState("Ahmed")

return(
    <>
    <h2>
        {nom}
    </h2>

    <button onClick={()=>setNom("Karim")}>Changer le nom</button>
    </>
)
}
export default TestState;