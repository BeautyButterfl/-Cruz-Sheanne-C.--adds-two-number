import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [sum, setSum] = useState(null);

  const handleNum1Change = (event) => {
    setNum1(event.target.value);
  };

  const handleNum2Change = (event) => {
    setNum2(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const total = parseFloat(num1) + parseFloat(num2);
    setSum(total);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Sum Calculator</h1>
      <form className="input-form" onSubmit={handleSubmit}>
        <input
          type="number"
          value={num1}
          onChange={handleNum1Change}
          placeholder="Enter first number"
          className="input-field"
        />
        <input
          type="number"
          value={num2}
          onChange={handleNum2Change}
          placeholder="Enter second number"
          className="input-field"
        />
        <button type="submit" className="submit-button">Calculate Sum</button>
      </form>
      {sum !== null && (
        <div className="output-container">
          <h2 className="output-title">Result:</h2>
          <p className="output-text">{sum}</p>
        </div>
      )}
    </div>
  );
}

export default App;

