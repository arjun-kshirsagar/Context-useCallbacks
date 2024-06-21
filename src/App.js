import logo from './logo.svg';
import './App.css';
import React, {useState, useCallback} from 'react';

function App() {
  const[input, setInput] = useState("");
  const[count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1);

  return (
    <div className="App">
      <input 
      type="text" 
      value={input} 
      onChange={(e) => setInput(e.target.value)} />

      <button onClick={incrementCount}>Increment Counter</button>
      <h3>Input Text: {input}</h3>
      <h3>Count: {count}</h3>
      <hr/>
      <ChildComponent count={count} onClick = {incrementCount}/>
    </div>
  );
}

const ChildComponent = React.memo(function({count, onClick}) {
  console.log("ChildComponent Rendered");
  return(
    <div>
      <button onClick={onClick}>Increment Counter</button>
      <h3>Child Component</h3>
      <h4>Count: {count}</h4>
    </div>
  );
});
export default App;
