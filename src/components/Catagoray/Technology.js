import React, { useState } from "react";
import Restart from "./utlties/Restart";
import QuestionLayout from "./utlties/QuestionLayout";

function Technology() {
  const Data = [
    {
      questionText:
        "In which decade was the American Institute of Electrical Engineers (AIEE) founded?",
      answerOptions: [
        { answerText: "1850s", isCorrect: false },
        { answerText: "1880s", isCorrect: true },
        { answerText: "1930s", isCorrect: false },
        { answerText: "1950s", isCorrect: false },
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
      questionText: "'.MOV' extension refers usually to what kind of file?",
      answerOptions: [
        { answerText: "Image file", isCorrect: false },
        { answerText: "Animation/movie file", isCorrect: true },
        { answerText: "Audio file", isCorrect: false },
        { answerText: "MS Office document", isCorrect: false },
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

export default Technology;
