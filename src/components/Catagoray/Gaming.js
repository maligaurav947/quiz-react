import React, { useState } from "react";
import Restart from "./utlties/Restart";
import QuestionLayout from "./utlties/QuestionLayout";

function Gaming() {
  const Data = [
    {
      questionText:
        "What is the largest ever prize pool for a gaming tournament?",
      answerOptions: [
        { answerText: "$18.93 million", isCorrect: false },
        { answerText: "$24.54 million", isCorrect: false },
        { answerText: "$9.3 million", isCorrect: false },
        { answerText: "$40.01 million", isCorrect: true },
      ],
    },
    {
      questionText: "What year was the first Super Smash Bros. released?",
      answerOptions: [
        { answerText: "1998", isCorrect: false },
        { answerText: "1997", isCorrect: false },
        { answerText: "1999", isCorrect: true },
        { answerText: "1993", isCorrect: false },
      ],
    },
    {
      questionText:
        "How many Donkey Kong games have been released in the Home console video game format?",
      answerOptions: [
        { answerText: "22", isCorrect: false },
        { answerText: "14", isCorrect: true },
        { answerText: "10", isCorrect: false },
        { answerText: "31", isCorrect: false },
      ],
    },
    {
      questionText: "What is the strongest block you can find in Minecraft?",
      answerOptions: [
        { answerText: "Obsidian", isCorrect: true },
        { answerText: "Diamond", isCorrect: false },
        { answerText: "Ender chest", isCorrect: false },
        { answerText: "Ancient debris", isCorrect: false },
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

export default Gaming;
