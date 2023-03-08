import "./card.css";
import { useState } from "react";
import { list } from "./questionsAndAnswers";

const Card = () => {
  const [question, setQuestion] = useState(list[0].question);
  const [answer, setAnswer] = useState(list[0].answer);
  const [difficulty, setDifficulty] = useState(list[0].difficulty);

  return (
    <div>
      <div onClick={toggleFlipped} id="carddiv" className="card">
        <div className="visibility">
          <div className="front">{question}</div>
          <div className="back">{answer}</div>
        </div>
      </div>
      <button onClick={getQandA}>-></button>
    </div>
  );

  function getQandA() {
    let questionNum = Math.floor(Math.random() * 11);
    setQuestion(list[questionNum].question);
    setAnswer(list[questionNum].answer);
    setDifficulty(list[questionNum].difficulty);

    var element = document.getElementById("carddiv");
    if (element.classList.contains("flipped")) {
      element.classList.toggle("flipped");
    }
  }

  function toggleFlipped() {
    var element = document.getElementById("carddiv");
    element.classList.toggle("flipped");
  }
};

export default Card;
