import { useRef, useState } from 'react';
import {styled} from 'styled-components'

const ProjectDiv = styled.div`
height : 100vh;
width : 50vw;
border : 1px solid black;
padding-left : 20px;
margin-left : 20px;

 & hr {
    height : 2px;
    background-color : black;
 }

  & h1 {
    display : flex;
    justify-content : space-between;
    border : 1px solid pink;
  }

 & #delete {
    margin-right: 20px;
    border : none;
    background-color : white;
    color : black;
    cursor : pointer;
 }

 & .Tasks-div h2{
 font-weight : 600;
 }

 & input {
 height : 5vh ;
 width : 20vw;
 background-color : #ededed;
 margin-right : 15px;
 }

 & #task {
  border : none;
  color : black;
  background-color : white;
  cursor : pointer;
 }

 & .show-tasks {
    width : 40vw;
    background-color : #ededed;
    margin-top : 30px;
    padding : 20px;
 }

 & .div1 {
    display : flex;
    justify-content : space-between;
 }

 & .div1 button {
    border : none;
    background-color : #ededed;
    cursor : pointer;
 }
 

`

export default function MyProject({projects,index,tasksArray,setTasksArray}){
    const ref = useRef(null);
    //const [tasksArray,setTasksArray] = useState([]);


    
    function handleTask(myTitle) {
    const newTaskValue = ref.current.value;

    setTasksArray((prevTasks) => { // Always use the functional update form
        const projectExists = prevTasks.some(project => project.Title === myTitle);

        if (projectExists) {
            
            return prevTasks.map((project) => {
                if (project.Title === myTitle) { 
                    return {
                        ...project,
                        TaskName: [...project.TaskName, newTaskValue] 
                    };
                }
                return project; 
            });
        } else {
            return [
                ...prevTasks, 
                {
                    Title: myTitle,
                    TaskName: [newTaskValue],
                },
            ];
        }
        
    });
    ref.current.value = ''
}

    function handleDelete(myTitle,myTask){
        let myObj = tasksArray.find((ele) => ele.Title === myTitle);
        let newTasks = myObj.TaskName.filter((ele) => ele!== myTask);
        console.log(newTasks);
        setTasksArray((prevTasks) => (
            prevTasks.map((project) => {
                if(project.Title === myTitle){
                    return {
                        ...project,
                        TaskName : newTasks,
                    }
                }
                return project;
            }) 
        ))
        
    }

    function handleRemove(){
        
    }

    let a ;
    if (index >= 0) {
        a = index ;
    }
    else{
        a = projects.length - 1;
    }


    return(
        <ProjectDiv>
            <h1>{projects[a].Title} <button id='delete' onClick={() => handleRemove(projects[a].Title)}>Delete</button></h1>
            <h4>{projects[a].Due}</h4>
            <h2>{projects[a].Description}</h2>
            <hr />
            <div className='Tasks-div'>
                <h2>Tasks</h2>
                <input type="text" ref={ref} />
                <button id='task' onClick={() => handleTask(projects[a].Title)} >Add Task</button>
            </div>
            <div className='show-tasks'>
                {
                    (() => { // Start of the IIFE
                        let targetProject = tasksArray.find((ele) => ele.Title === projects[a].Title); // Re-find here if not already outside

                        if (targetProject && targetProject.TaskName) {
                        return targetProject.TaskName.map((e, index) => (
                            <div className='div1' key={index}>{e}<button onClick={() => handleDelete(projects[a].Title,e)}>clear</button></div>
                        ));
                        } else {
                        return null; // Or your placeholder message
                        }
                    })() // End of the IIFE and immediately invoked
                }
            </div>
        </ProjectDiv>
    )
}