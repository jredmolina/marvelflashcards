import "./card.css";
import { useState } from "react";
import { list } from "./questionsAndAnswers";
var currentIndex = 0;
const Card = () => {
  const [question, setQuestion] = useState(list[currentIndex].question);
  const [answer, setAnswer] = useState(list[currentIndex].answer);
  const [difficulty, setDifficulty] = useState(list[currentIndex].difficulty);
  const [guess, setGuess] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    checkInput();
  };

  return (
    <div>
      <div onClick={toggleFlipped} id="carddiv" className="card">
        <div className="visibility">
          <div className="front">{question}</div>
          <div className="back">{answer}</div>
        </div>
      </div>

      <form onSubmit={handleOnSubmit}>
        <label>
          Guess the answer here:
          <input
            id="inputBox"
            className="inputBox"
            type="text"
            placeholder="Place your answer here"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
          ></input>
        </label>
        <input type="submit" value="Submit"></input>
      </form>

      <div className="nextBackShuffle">
        <button onClick={backQuestion}>Back</button>
        <button onClick={nextQuestion}>Next</button>
        <button onClick={shuffle}>Shuffle Cards</button>
      </div>
    </div>
  );

  function nextQuestion() {
    if (currentIndex < 9) {
      currentIndex++;
      setQandA(
        list[currentIndex].question,
        list[currentIndex].answer,
        list[currentIndex].difficulty
      );
    } else if (currentIndex == 9) {
      currentIndex = 0;
      setQandA(
        list[currentIndex].question,
        list[currentIndex].answer,
        list[currentIndex].difficulty
      );
    }
  }

  function backQuestion() {
    if (currentIndex > 0) {
      --currentIndex;
      setQandA(
        list[currentIndex].question,
        list[currentIndex].answer,
        list[currentIndex].difficulty
      );
    } else if (currentIndex == 0) {
      currentIndex = 9;
      setQandA(
        list[currentIndex].question,
        list[currentIndex].answer,
        list[currentIndex].difficulty
      );
    }
  }

  function shuffle() {
    for (var i = list.length - 1; i > 0; i--) {
      // Generate random number
      var j = Math.floor(Math.random() * (i + 1));
      var temp = list[i];
      list[i] = list[j];
      list[j] = temp;
    }
    console.log(list);
    setQandA(list[0].question, list[0].answer, list[0].difficulty);
    currentIndex = 0;
  }

  function setQandA(question1, answer1, difficulty1) {
    console.log(currentIndex);
    setQuestion(question1);
    setAnswer(answer1);
    setDifficulty(difficulty1);

    var element = document.getElementById("carddiv");

    if (element.classList.contains("flipped")) {
      element.classList.toggle("flipped");
    }

    var inputBox = document.getElementById("inputBox");
    inputBox.classList.remove("correct");
    inputBox.classList.remove("wrong");
    setGuess("");
  }

  function toggleFlipped() {
    var element = document.getElementById("carddiv");
    element.classList.toggle("flipped");
  }

  function checkInput() {
    var element = document.getElementById("carddiv");
    var inputBox = document.getElementById("inputBox");
    if (!element.classList.contains("flipped")) {
      if (guess == answer) {
        if (inputBox.classList.contains("wrong")) {
          inputBox.classList.remove("wrong");
        }
        inputBox.classList.add("correct");
      } else {
        if (inputBox.classList.contains("correct")) {
          inputBox.classList.remove("correct");
        }
        inputBox.classList.add("wrong");
      }
    }
  }
};

export default Card;
