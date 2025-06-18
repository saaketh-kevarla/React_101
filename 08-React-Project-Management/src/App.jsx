import Sidebar from "./components/Sidebar";
import ProjectContainer from "./components/ProjectContainer";
import { useState } from "react";

function App() {
  const [projData,setProjData] = useState([]);  //arr for projects
  const [noProject,setNoProject] = useState(true);  //page for no project in ProjectContainer
  const [createProject,setCreateProject] = useState(false); // page for project form
  const [projectPage,setProjectPage] = useState(false); // page to view proj and add tasks
  const [index,setIndex] = useState(-1);
  const [tasksArray,setTasksArray] = useState([]);

  return (
    <>
      <div id='main-container'>
        <Sidebar arr = {projData} createProject = {createProject} setCreateProject={setCreateProject} 
        noProject = {noProject} setNoProject = {setNoProject} projectPage = {projectPage} setProjectPage = {setProjectPage} index={index} setIndex={setIndex}/>

        <ProjectContainer projData={projData} setProjData = {setProjData}  createProject = {createProject} setCreateProject={setCreateProject} 
        noProject = {noProject} setNoProject = {setNoProject} projectPage = {projectPage} setProjectPage = {setProjectPage} index={index} setIndex={setIndex} 
        tasksArray = {tasksArray} setTasksArray = {setTasksArray}/>
      </div>
    </>
  );
}

export default App;
