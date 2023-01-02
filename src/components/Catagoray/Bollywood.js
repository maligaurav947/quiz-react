import React, { useState } from "react";
import Restart from "./utlties/Restart";
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
      <section
        className="grid justify-center items-center text-white align-middle"
        style={{
          height: "90vh",
        }}
      >
        <div
          className="p-2 max-w-4xl "
          style={{
            margin: "0 auto",
          }}
        >
          {showScore ? (
            <div className="score text-white grid gap-4">
              <h2 className="text-center text-5xl">
                {score} out of {Data.length}
              </h2>
              <span className="text-4xl text-center">
                {score <= 2
                  ? " You Need To Learn More"
                  : "Did You Know Your Are Smart"}
              </span>
            </div>
          ) : (
            <>
              <div className="grid gap-3">
                <div className="text-3xl">
                  <span>Question {currentQuestion + 1}</span>/{Data.length}
                </div>
                <div className="text-5xl mb-5 question-text">
                  {Data[currentQuestion].questionText}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {Data[currentQuestion].answerOptions.map((answerOption) => (
                  <button
                    onClick={() =>
                      handleAnswerOptionClick(answerOption.isCorrect)
                    }
                    className="button-54 text-xl"
                  >
                    {answerOption.answerText}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
      ;
    </>
  );
}

export default Bollywood;
