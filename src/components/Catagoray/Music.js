import React, { useState } from "react";
import Restart from "./utlties/Restart";
import QuestionLayout from "./utlties/QuestionLayout";

function Music() {
  const Data = [
    {
      questionText:
        "The interval between two ‘Shruties’, as compared to the interval between two ‘Swaras’ is ",
      answerOptions: [
        { answerText: "More", isCorrect: false },
        { answerText: "Less", isCorrect: true },
        { answerText: "Equal", isCorrect: false },
        { answerText: "None of the above", isCorrect: false },
      ],
    },
    {
      questionText:
        "A musical scale contains how many shruties according to the ancient scholars?",
      answerOptions: [
        { answerText: "20", isCorrect: false },
        { answerText: "24", isCorrect: false },
        { answerText: "22", isCorrect: true },
        { answerText: "21", isCorrect: false },
      ],
    },
    {
      questionText:
        "A special method of presenting ‘alap’ in the ancient times is known by which of the following name?",
      answerOptions: [
        { answerText: "Sargam", isCorrect: false },
        { answerText: "Ragmala", isCorrect: false },
        { answerText: "Sadra", isCorrect: false },
        { answerText: "Swasthan", isCorrect: true },
      ],
    },
    {
      questionText:
        "Tabla player, who composed music for films as A.R. Qureshee?",
      answerOptions: [
        { answerText: "UstadAllarakha", isCorrect: true },
        { answerText: "Ustad Abdul Kareem", isCorrect: false },
        { answerText: "UstadAhmedjanThirkawa", isCorrect: false },
        { answerText: "UstadAmeerHussain", isCorrect: false },
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

export default Music;
