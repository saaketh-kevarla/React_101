import Sidebar from "./components/Sidebar";
import ProjectContainer from "./components/ProjectContainer";
import { useState } from "react";

function App() {
  const [projData,setProjData] = useState([])
  return (
    <>
      <div id='main-container'>
        <Sidebar arr = {projData}/>
        <ProjectContainer projData={projData} setProjData = {setProjData}/>
      </div>
    </>
  );
}

export default App;
