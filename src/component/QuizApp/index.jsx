import React, { useState } from "react";
import "./style.css";

const QuizApp = () => {
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];
  const [currentQu, setCurentQu]=useState(0);
  const [showScore, setShowScore ]= useState(false);
  const [score, setScore] = useState(0)
  const handleButton = (isCor)=>{
    if(isCor === true){
      setScore(score + 1);
    }

    const nextQu = currentQu +1;
    if(nextQu < questions.length){
      setCurentQu(nextQu)
    }
    else{
      setShowScore(true)
    }
  }
  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQu + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQu].questionText}
            </div>
          </div>
          <div className="answer-section">
           {
            questions[currentQu].answerOptions.map((an)=><button className="buttons" onClick={()=>handleButton(an.isCorrect)}>
              {
                an.answerText
              }
            </button>)
           }
          </div>
        </>
      )}
    </div>
  );
};

export default QuizApp;
