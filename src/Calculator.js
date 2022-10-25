import { useState } from 'react';

const Calculator = () => {
    const [num1, setNumber1] = useState(0);
    const [num2, setNumber2] = useState(0);
    const [result, setResult] = useState(0);
    


    const num1Change = (evt) => {
        const value1 = evt.target.value;
        setNumber1(value1);
    }
    const num2Change = (evt) => {
        const value2 = evt.target.value;
        setNumber2(value2);
    }
    const addNum = () =>{
        setResult(parseInt(num1) + parseInt(num2));
    }
    const subNum = () =>{
        setResult(num1 - num2);
    }
    const mulNum = () =>{
        setResult(num1 * num2);
    }
    const divNum = () =>{
        setResult(num1 / num2);
    }


    return(
        <>
        <h1>CALCULATOR</h1>
        
            <label htmlFor="1st Number"> First No: </label>
            <input 
                    type="text"
                    aria-label="1st Number"
                    id="1st Number"
                    name="1st Number"
                    onChange={num1Change} 
                    data-testid="1st Number"
                />
        <br></br>
        <label htmlFor="2nd Number"> Second No: </label>    
        <input 
				type="text"
				aria-label="2nd Number"
				id="2nd Number"
				name="2nd Number"
				onChange={num2Change} 
				data-testid="2nd Number"
			/>
            <br></br>
            <br />
            <div></div>
        <button 
                onClick={addNum}
				data-testid="add"
			>
				ADD +
			</button>
            <button 
                onClick={subNum}
				data-testid="subtract"
			>
				SUBTRACT -
			</button>
            <button 
                onClick={mulNum}
				data-testid="multiply"
			>   
				MULTIPLY x
			</button>
            <button 
                onClick={divNum}
				data-testid="divide"
			>
				DIVIDE /
			</button>
            <h2 data-testid="result">result: {result}</h2>
        </>
    );
};

export default Calculator;