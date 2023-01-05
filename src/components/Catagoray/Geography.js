import React, { useState } from "react";
import Restart from "./utlties/Restart";

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
      <section
        className="grid justify-center items-center text-white"
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
              <span className="text-4xl">
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
                <div className="text-5xl mt-3 question-text">
                  {Data[currentQuestion].questionText}
                </div>
              </div>
              <div className="grid grid-cols-2 mt-10 gap-4">
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

export default Geography;
