import React, { useState } from "react";
import Restart from "./utlties/Restart";

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

export default Music;
