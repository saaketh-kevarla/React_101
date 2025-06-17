import {useRef, useState} from "react"
import {styled} from 'styled-components'
import MyProject from "./MyProject";

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

export default function ProjectContainer({projData,setProjData}){
    const input1 = useRef(null);
    const textarea1 = useRef(null);
    const input2 = useRef(null);

    const [noProject,setNoProject] = useState(true);
    const [createProject,setCreateProject] = useState(false);
    const [projectPage,setProjectPage] = useState(false);
    


    function handleClick(){
      setNoProject(false);
      setCreateProject(true);
    }

    function handleSave(event){
      event.preventDefault(); 
      setProjData((prevData) => {
          const arr = [...prevData,
            {Title : input1.current.value,
            Description: textarea1.current.value,
            Due : input2.current.value
            }
        ]

          return arr;
      })
      setCreateProject(false);
      setProjectPage(true);
    }

    

    return (
        <>
          {noProject && (
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
                <form onSubmit={handleSave}>
                  <div id='button-div'>
                    <button>cancel</button>
                    <button type="submit">Save</button>
                  </div>
                  <div id="input-div">
                    <label htmlFor="Title" >TITLE</label>
                    <input type="text" id="Title" ref={input1}/>
                    <label htmlFor="Description">DESCRIPTION</label>
                    <textarea type="text" id="Description" ref={textarea1}/>
                    <label htmlFor="Due">DUE DATE</label>
                    <input type="date" id="Due" ref={input2}/>
                  </div>
                </form>
              </NewProject>
            </>
          )}
          {projectPage && (
            <>
            <MyProject projects = {projData}>
            
            </MyProject>
            </>
          )}
      </>   
    )

}