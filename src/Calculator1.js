import React, {useState} from 'react'

const App = () => {

    const [firstNumber, setFirstNumber] = useState();
    const [secondNumber, setSecondNumber] = useState();
    const [result, setResult] = useState();

    const handleFirstInput = (e) => {
        setFirstNumber(Number(e.target.value));
    }

    const handleSecondInput = (e) => {
        setSecondNumber(Number(e.target.value));
    }

    function addNumbers (firstNumber, secondNumber){
        return (firstNumber + secondNumber);
    }

    function subtractNumbers (firstNumber, secondNumber){
        return (firstNumber - secondNumber);
    }

    function multiplyNumbers (firstNumber, secondNumber){
        return (firstNumber * secondNumber);
    }

    function divideNumbers (firstNumber, secondNumber){
        return (firstNumber/secondNumber);
    }

    return (
        <>  
            <div className = "wrapper">
                <h1 data-testid = "calculator-header">Simple Calculator</h1>
                <label htmlFor='first-Input' data-testid = "firstNum-label">First Number</label>
                <input 
                    name = "firstInput"
                    id = "firstInput"
                    aria-label= 'first-Input'
                    data-testid = "firstInput"
                    onChange = {handleFirstInput}
                    type = "text"
                ></input>
                <label htmlFor='second-Input' data-testid = "secondNum-label">Second Number</label>
                <input
                    name = "secondInput"
                    id = "secondInput"
                    aria-label= 'second-Input'
                    data-testid = "secondInput"
                    onChange = {handleSecondInput}
                ></input>
                <button name = "calcbutton" id = "addButton" data-testid = "addButton" onClick = {() => setResult(addNumbers(firstNumber, secondNumber))}>Add</button>
                <button name = "calcbutton" id = "subButton" data-testid = "subtractButton" onClick = {() => setResult(subtractNumbers(firstNumber, secondNumber))}>Subtract</button>
                <button name = "calcButton" id = "mulButton" data-testid = "multiplyButton" onClick = {() => setResult(multiplyNumbers(firstNumber, secondNumber))}>Multiply</button>
                <button name = "calcButton" id = "divButton" data-testid = "divisionButton" onClick = {() => setResult(divideNumbers(firstNumber, secondNumber))}>Divide</button>
                <label name = "resultLabel" data-testid = "result">Result: {result}</label>
            </div>
        </>
    );
}

export default App;