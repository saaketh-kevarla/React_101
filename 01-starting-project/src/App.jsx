import {CORE_CONCEPTS} from './data.js'
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';


function App() {
  function SelectHandler(){
        console.log(`You clicked this button - selected`);
    }
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
        <TabButton onSelect= {SelectHandler}>Components</TabButton>
        <TabButton onSelect= {SelectHandler}>JSX</TabButton>
        <TabButton onSelect= {SelectHandler}>Props</TabButton>
        <TabButton onSelect= {SelectHandler}>State</TabButton>
      </menu>
      </section>
    </div>
  );
}

export default App;
