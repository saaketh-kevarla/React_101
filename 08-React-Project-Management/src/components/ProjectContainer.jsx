import {useState} from "react"
import {styled} from 'styled-components'

const NewProject = styled.div`
display : flex;
flex-direction : column;
padding-top : 80px;
height : 100vh;
width : 50vw;
border : 2px solid brown;
margin : 0px 15vw;

& button{
  height : 40px;
  width : 80px;
  margin-right : 10px
}

& #button-div{
  margin-left : 65%;
  margin-bottom : 3vh;
}

& #input-div{
  display : flex;
  flex-direction : column;
  gap : 10px;
}

& input{
  height : 5vh;
}


`

export default function ProjectContainer(){
    const [createProject,setCreateProject] = useState(false);

    function handleClick(){
      setCreateProject(true);
    }

    return (
        <>
          {!createProject && (
            <div id='project-container'>
              <img src="logo.png" alt="paperboard image" />
              <h2>No Project selected</h2>
              <p>select a project or get started with new one</p>
              <button onClick={handleClick}>Create new project</button>
            </div>
        )}
          {createProject && (
            <>
              <NewProject>
                <div id='button-div'>
                  <button>cancel</button>
                  <button>Save</button>
                </div>
                <div id="input-div">
                  <label htmlFor="Title">TITLE</label>
                  <input type="text" id="Title"/>
                  <label htmlFor="Description">DESCRIPTION</label>
                  <input type="text" id="Description"/>
                  <label htmlFor="Due">DUE DATE</label>
                  <input type="text" id="Due"/>
                </div>
              </NewProject>
            </>
          )}
      </>   
    )

}