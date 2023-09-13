import React, { useState } from "react";
import Restart from "./utlties/Restart";
import QuestionLayout from "./utlties/QuestionLayout";
function Bollywood() {
  const Data = [
    {
      questionText:
        "Which Bollywood actor was honoured with the 24th Crystal Award at the world Economic Forum meeting in january 2018?",
      answerOptions: [
        { answerText: "Shahrukh Khan", isCorrect: true },
        { answerText: "Aamir Khan", isCorrect: false },
        { answerText: "Salman Khan", isCorrect: false },
        { answerText: "Saif Ali Khan", isCorrect: false },
      ],
    },
    {
      questionText:
        "Which Bollywood actor has been declared as the ‘National Icon’ of Election Commission of India (ECI) in 2022?",
      answerOptions: [
        { answerText: "Pankaj Tripathi", isCorrect: false },
        { answerText: "Shah Rukh Khan", isCorrect: false },
        { answerText: "Ayushmann Khurana", isCorrect: true },
        { answerText: "Vidyut Jamwal", isCorrect: false },
      ],
    },
    {
      questionText:
        "Pritam Chakraborty signed his first song in Bollywood along with a friend. The friend is–",
      answerOptions: [
        { answerText: "Abhijit Bhattacharya", isCorrect: false },
        { answerText: "Jeet Ganguli", isCorrect: true },
        { answerText: "Shaan", isCorrect: false },
        { answerText: "Kumar Sanu", isCorrect: false },
      ],
    },
    {
      questionText: "Who was known as the King of Bollywood Music?",
      answerOptions: [
        { answerText: "Kishore Kumar", isCorrect: false },
        { answerText: "Sachin Dev Burman", isCorrect: false },
        { answerText: "Rahul Dev Burman", isCorrect: true },
        { answerText: "Muhammad Rafi", isCorrect: false },
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

export default Bollywood;
