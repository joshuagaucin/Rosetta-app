import React, { useState } from "react";
import "./questions.css";
export default function App() {
  const questions = [
    {
      questionText: "ماهي تحية الصباح الصحيحة؟",

      answerOptions: [
        { answerText: "الى اللقاء", isCorrect: false },
        { answerText: "ليلة سعيدة", isCorrect: false },
        { answerText: "مساء الخير", isCorrect: false },
        { answerText: "صباح الخير", isCorrect: true },
      ],
    },
    {
      questionText: "ما هي الجملة الغير صحيحة",

      answerOptions: [
        { answerText: "احب الكلاب", isCorrect: false },
        { answerText: "حالك كيف؟", isCorrect: true },
        { answerText: "عندي أخ واحد", isCorrect: false },
        { answerText: "أنا جائع", isCorrect: false },
      ],
    },
    {
      questionText: " عشرة ناقص سبعة تساوي ",
      answerOptions: [
        { answerText: "ثلاثة", isCorrect: true },
        { answerText: "اربعة", isCorrect: false },
        { answerText: "سبعة عشرة", isCorrect: false },
        { answerText: "صفر", isCorrect: false },
      ],
    },
    {
      questionText: "هل سأكون عامل جيد؟",
      answerOptions: [
        { answerText: "نعم", isCorrect: true },
        { answerText: "بإطلاق", isCorrect: true },
        { answerText: "بكل تأكيد", isCorrect: true },
        
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
    <div className="quiz">
      {showScore ? (
        <div className="score-section">
          {questions.length} لقد أحرزت {score} من
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>سؤال {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                className="answerButton"
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
