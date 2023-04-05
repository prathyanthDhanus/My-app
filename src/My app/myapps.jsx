import React ,{ useState } from "react";
const Manipulate = ()=>{
    const [current,start]=useState(" ")
    const [sec, third]=useState(0)
    const [ab,count]=useState(0)

    
    const caps = ()=>{
        start(current.toUpperCase())

    }
    const lower = ()=>{
        start( current.toLowerCase())
    }
return(
    <div>
    <textarea onChange={(k)=>{
        let a = k.target.value;
        start(a);
        third(a.split(/\s+/).join("").length)
        count(a.trim().split(/\s+/).length)
    }}  value={current}/>
    <br/><br/>
    <button onClick={caps}>To UpperCase</button>
    <button onClick={lower}>To ToLowerCase</button>
    <p>length{sec}</p>
    <p>Words{ab}</p>
    </div>
)





}
export default Manipulate

