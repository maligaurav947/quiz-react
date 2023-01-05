import React, { useState } from "react";
import Restart from "./utlties/Restart";

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

export default Sport;
