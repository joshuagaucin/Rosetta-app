import React, { useState } from "react";

export default function App() {
  const questions = [
    {
      questionText: "What greeting is appropriate in the morning?",
    
      answerOptions: [
        { answerText: "Goodbye", isCorrect: false },
        { answerText: "Good night", isCorrect: false },
        { answerText: "Good evening", isCorrect: false },
        { answerText: "Good morning", isCorrect: true },
      ],
    },
    {
      questionText: "Which sentence is not correct?",
     
      answerOptions: [
        { answerText: "I love dogs!", isCorrect: false },
        { answerText: "How you are?", isCorrect: true },
        { answerText: "I have one brother.", isCorrect: false },
        { answerText: "I am hungry.", isCorrect: false },
      ],
    },
    {
      questionText: "What is ten minus seven?",
      answerOptions: [
        { answerText: "three", isCorrect: true },
        { answerText: "four", isCorrect: false },
        { answerText: "seventeen", isCorrect: false },
        { answerText: "zero", isCorrect: false },
      ],
    },
    {
      questionText: "Would I be an amazing employee?",
      answerOptions: [
        { answerText: "yes.", isCorrect: true },
        { answerText: "Absolutely", isCorrect: true },
        { answerText: "Without a doubt", isCorrect: true },
        { answerText: "Most definitely", isCorrect: true },
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
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
              
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
