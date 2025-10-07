import { useState } from "react"

const ConteurState=()=>{
    const [nombre,setNombre]=useState(5)

return(
    <>
    <button onClick={()=>setNombre(nombre-1)}>-</button>
    <h2>
        {nombre}
    </h2>

    <button onClick={()=>setNombre(nombre+1)}>+</button>
    </>
)
}
export default ConteurState;