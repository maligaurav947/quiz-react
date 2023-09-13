import React, { useState } from "react";
import Restart from "./utlties/Restart";
import QuestionLayout from "./utlties/QuestionLayout";

function Sport() {
  const Data = [
    {
      questionText: "Grand Slam is used in which of the following games?",
      answerOptions: [
        { answerText: "Lawn Tennis", isCorrect: true },
        { answerText: "Football", isCorrect: false },
        { answerText: "Badminton", isCorrect: false },
        { answerText: "none of the above", isCorrect: false },
      ],
    },
    {
      questionText:
        "Jules Rimet Trophy is related to which of the following sports?",
      answerOptions: [
        { answerText: "Hockey", isCorrect: false },
        { answerText: "Cricket", isCorrect: false },
        { answerText: "Football", isCorrect: true },
        { answerText: "Volley ball", isCorrect: false },
      ],
    },
    {
      questionText:
        "Murugappa Gold Cup is related to which among the following sports?",
      answerOptions: [
        { answerText: "Football", isCorrect: false },
        { answerText: "Hockey", isCorrect: true },
        { answerText: "Cricket", isCorrect: false },
        { answerText: "Table Tennis", isCorrect: false },
      ],
    },
    {
      questionText:
        "Where are the headquarters of Swimming Federation of India?",
      answerOptions: [
        { answerText: "Kolkata", isCorrect: false },
        { answerText: "Ahmedabad", isCorrect: true },
        { answerText: "Chandigarh", isCorrect: false },
        { answerText: "New Delhi", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < Data.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <>
      <Restart />
      <QuestionLayout
        showScore={showScore}
        score={score}
        Data={Data}
        currentQuestion={currentQuestion}
        handleAnswerOptionClick={handleAnswerOptionClick}
      />
      ;
    </>
  );
}

export default Sport;
