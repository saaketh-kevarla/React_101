import {styled} from 'styled-components'

const ProjectList = styled.div`
margin-top :30px;
padding-left : 20px;
color : yellow;

& .item {
  background-color : grey;
  width : 200px;
}
`

export default function Sidebar({arr}){

  function handleNewProject(){

  }

  function handleProject(){
    
  }

    return(
        <div id='side-bar'>
          <h1>Your Projects</h1>
          <button onClick={handleNewProject}>+ Add Project</button>
          <ProjectList>
            {
              arr.map((proj,index) => (
                <div className='item' key={index} onClick={() => handleProject(proj.Title)}>{proj.Title}</div>
              ))
            }
          </ProjectList>
        </div>
    )
}

