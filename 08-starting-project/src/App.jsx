import Input from "./components/Input"
import { useState } from "react"
import InputGroup from "./components/InputGroup"


function App() {
   const [A, setA] = useState({});
  function handleInput() {
    setA((prevState) => ({ ...prevState }));
  }

  return (
    <>
    <header id='header'>
      <img src="investment-calculator-logo.png" alt="calc logo" />
      <h1 >Investment Calculator</h1>
    </header>
    <div id='user-input'>
      <InputGroup val1 = 'INITIAL INVESTMENT' val2 = 'ANNUAL INVESTMENT'/>
      <InputGroup val1 = 'EXPECTED RETURN' val2 = 'DURATION'/>
    </div>
    <div id="result">
    </div>
    </>
  )
}

export default App
