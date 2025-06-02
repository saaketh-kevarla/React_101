import { useState } from "react";

export default function Input({val}) {
    const [hover,setHover]= useState('number');

    

    return  <>
                <label htmlFor={val}>{val}</label>
                <input type={hover} name = {val} onChange={}/>
            </>
                
}