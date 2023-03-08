import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h2>Guess that Marvel Superhero!</h2>
      <h4>How well do you know Marvel characters? Test your knowledge here!</h4>
      <h5>Number of cards:10</h5>
      <br></br>
      <Card />
    </div>
  );
}

export default App;
