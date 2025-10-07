import { useState } from "react"

const Form=()=>{
    const [nom,setNom]=useState("")
    const [prenom,setPrenom]=useState("")
    const [age,setAge]=useState("")
    const [show,setShow]=useState(false);

    return(
    <>
    <form>
<input type="text" placeholder="Nom" onChange={(e)=>setNom(e.target.value)} />
<input type="text" placeholder="Prenom" onChange={(e)=>setPrenom(e.target.value)} />
<input type="number" placeholder="Age" onChange={(e)=>setAge(e.target.value)} />

<button onClick={(e)=>{e.preventDefault() ; setShow(!show)}}>{(show)?"Masquer":"Afficher"}</button>
    </form> 
    {(show)?<>je suis {nom + " " + prenom} j'ai {age} ans</>:null}
    </>
    )
}

export default Form;