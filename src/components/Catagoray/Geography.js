import React, { useState } from "react";
import Restart from "./utlties/Restart";
import QuestionLayout from "./utlties/QuestionLayout";

function Geography() {
  const Data = [
    {
      questionText:
        "With which of the following countries of South East Asia, India shares a maritime boundary?",
      answerOptions: [
        { answerText: "Indonesia", isCorrect: true },
        { answerText: "Malaysia", isCorrect: false },
        { answerText: "Singapore", isCorrect: false },
        { answerText: "Vietnam", isCorrect: false },
      ],
    },
    {
      questionText: "In which state Talchar thermal power plant is located?",
      answerOptions: [
        { answerText: "Karnataka", isCorrect: false },
        { answerText: "Odisha", isCorrect: true },
        { answerText: "West Bengal", isCorrect: false },
        { answerText: "Himachal Pradesh", isCorrect: false },
      ],
    },
    {
      questionText:
        "The place “Noonmati” in India, is related to which among the following?",
      answerOptions: [
        { answerText: "Salt Industry", isCorrect: false },
        { answerText: "Petroleum Industry", isCorrect: true },
        { answerText: "Paper Industry", isCorrect: false },
        { answerText: "Textile Industry", isCorrect: false },
      ],
    },
    {
      questionText:
        "The India-Myanmar Friendship Road connects which among the following states of India with Myanmar?",
      answerOptions: [
        { answerText: "Assam", isCorrect: false },
        { answerText: "Manipur", isCorrect: true },
        { answerText: "Meghalaya", isCorrect: false },
        { answerText: "Nagaland", isCorrect: false },
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

export default Geography;
