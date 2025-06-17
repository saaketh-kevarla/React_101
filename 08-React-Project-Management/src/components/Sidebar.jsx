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
    return(
        <div id='side-bar'>
          <h1>Your Projects</h1>
          <button>+ Add Project</button>
          <ProjectList>
            {
              arr.map((proj,index) => (
                <div className='item' key={index}>{proj.Title}</div>
              ))
            }
          </ProjectList>
        </div>
    )
}

