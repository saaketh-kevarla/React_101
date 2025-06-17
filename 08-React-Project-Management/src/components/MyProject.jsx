import {styled} from 'styled-components'


export default function MyProject({projects}){
    let a = projects.length - 1;
    return(
        <>
            <h1>{projects[a].Title}</h1>
        </>
    )
}