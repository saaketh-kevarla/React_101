import { useState } from "react";

export default function Input({val,h}) {

    return  <>  
                <div>
                    <label htmlFor={val}>{val}</label>
                    <input type = 'number'name = {val} onChange={h}/>
                </div>
            </>
                
}