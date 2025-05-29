import { useState } from "react"

export default function Player({initialName,symbol,isActive}){
    const [isEditing,setisEditing] = useState(false);
    const [isName,setisName] = useState(initialName)

    function handleEdit(){
        setisEditing(someEdit => !someEdit)
        //setisEditing(someEdit => !someEdit) this helps with working with the latest state
    }

    function handleName(event){
        console.log(event);
        setisName(event.target.value)
    }

    let playername = <span className="player-name">{isName}</span> 
    if(isEditing){
        playername = <span className="player-name"><input type="text" required value = {isName} onChange={handleName}/></span>
    }

    return (
        <li className= {isActive ? 'active': undefined}>
          <span className="player">
            {playername}
            <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick = {handleEdit} >{isEditing?'SAVE':'EDIT'}</button>
        </li>
    )
}