import { Fragment } from 'react';
import Header from './components/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';



function App() {
  return (
    <Fragment>
      <Header />
      <CoreConcepts />
      <main>
        <h2>Time to get started!</h2>
      </main>
      <Examples />
    </Fragment>
  );
}

export default App;
