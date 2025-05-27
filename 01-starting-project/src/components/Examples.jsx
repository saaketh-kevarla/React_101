import { EXAMPLES } from "../data"
import TabButton from "./TabButton"
import { useState } from "react"
import Section from "./Section"

export default function Examples() {
    const [A,setA] = useState()

    function SelectHandler(selectedButton){
        setA(selectedButton)
    }
    return (
        <>
    <Section title = 'Examples' id = 'examples'>
      <menu>
        <TabButton onClick= {() => SelectHandler('components')} isSelected = {A === 'components'}>Components</TabButton>
        <TabButton onClick= {() => SelectHandler('jsx')} isSelected = {A === 'jsx'}>JSX</TabButton>
        <TabButton onClick= {() => SelectHandler('props')} isSelected = {A === 'props'}>Props</TabButton>
        <TabButton onClick= {() => SelectHandler('state')} isSelected = {A === 'state'}>State</TabButton>
      </menu>
      {!A ? <p>Please select a topic</p> : null}
      {A ? <div id='tab-content'>   
        <h3>{EXAMPLES[A].title}</h3>
        <p>{EXAMPLES[A].description}</p>
        <pre>
          <code>
            {EXAMPLES[A].code}
          </code>
        </pre>
      </div> : null}
      </Section>
        </>
    )
}