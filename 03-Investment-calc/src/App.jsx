import { useState } from "react";
import InputGroup from "./components/InputGroup";
import Table from "./components/Table";
import { calculateInvestmentResults } from "./util/investment";


function App() {
  
  let myArr = [];

   const [A, setA] = useState('');
   const [B, setB] = useState('');
   const [C, setC] = useState('');
   const [D, setD] = useState('');

  function handleInputA(e) {
    let val = e.target.value;
    setA(parseInt(val))
  }

  function handleInputB(e) {
    let val = e.target.value;
    setB(parseInt(val))
  }

  function handleInputC(e) {
    let val = e.target.value;
    setC(parseInt(val))
  }

  function handleInputD(e) {
    let val = e.target.value;
    setD(parseInt(val))
  }

  let val = false
  if(A && B && C && D){ // checking if everything is truthy
    val = true;
    let obj1  = {
      initialInvestment : A,
      annualInvestment : B,
      expectedReturn : C,
      duration : D
    }
    myArr = calculateInvestmentResults(obj1);
  }
  let tableContent;
  if(val){
    tableContent = <Table valArr={myArr}/>
  }

 
  return (
    <>
    <header id='header'>
      <img src="investment-calculator-logo.png" alt="calc logo" />
      <h1 >Investment Calculator</h1>
    </header>
    <div id='user-input'>
      <InputGroup val1 = 'INITIAL INVESTMENT' val2 = 'ANNUAL INVESTMENT' h1 = {handleInputA} h2 = {handleInputB}/>
      <InputGroup val1 = 'EXPECTED RETURN' val2 = 'DURATION' h1 ={handleInputC} h2 = {handleInputD}/>
    </div>
    {/* conditional rendering based on input values/states */}
    {tableContent}
    </>
  )
}

export default App
