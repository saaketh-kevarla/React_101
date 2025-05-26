import { useState } from 'react';
import {CORE_CONCEPTS} from './data.js'
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';


function App() {
  const [A,setA] = useState()

  function SelectHandler(selectedButton){
        setA(selectedButton)
        console.log(A);
        
    }
    console.log('APP component executing');
    

  return (
    <div>
      <Header />
      <section id='core-concepts'>
        <ul>
      <CoreConcept 
        image = {CORE_CONCEPTS[0].image}
        title = {CORE_CONCEPTS[0].title}
        description = {CORE_CONCEPTS[0].description}
        />
        <CoreConcept {...CORE_CONCEPTS[1]}/> 
        <CoreConcept {...CORE_CONCEPTS[2]}/>
        <CoreConcept {...CORE_CONCEPTS[3]}/>
        </ul>
        </section>
      <main>
        <h2>Time to get started!</h2>
      </main>
      <section id='examples'>
      <menu>
        <TabButton onSelect= {() => SelectHandler('components')} isSelected = {A === 'components'}>Components</TabButton>
        <TabButton onSelect= {() => SelectHandler('jsx')} isSelected = {A === 'jsx'}>JSX</TabButton>
        <TabButton onSelect= {() => SelectHandler('props')} isSelected = {A === 'props'}>Props</TabButton>
        <TabButton onSelect= {() => SelectHandler('state')} isSelected = {A === 'state'}>State</TabButton>
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
      </section>
    </div>
  );
}

export default App;
