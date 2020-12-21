import React, { useState } from "react";
import "./questions.css"
export default function App() {
  const questions = [
    {
      questionText: "Que saludo es apropiado para la mañana?",

      answerOptions: [
        { answerText: "Adiós", isCorrect: false },
        { answerText: "Buenas noches", isCorrect: false },
        { answerText: "Buena noches　", isCorrect: false },
        { answerText: "Buenos días", isCorrect: true },
      ],
    },
    {
      questionText: "Que frase es incorrecto?",

      answerOptions: [
        { answerText: "Yo amo los perros", isCorrect: false },
        { answerText: "Estás cómo ", isCorrect: true },
        { answerText: "Tengo un hermano", isCorrect: false },
        { answerText: "Tengo hambre", isCorrect: false },
      ],
    },
    {
      questionText: "Que es diez menos siete?",
      answerOptions: [
        { answerText: "Tres", isCorrect: true },
        { answerText: "Quatoro", isCorrect: false },
        { answerText: "Diecisiete", isCorrect: false },
        { answerText: "Cero", isCorrect: false },
      ],
    },
    {
      questionText: "Yo seria un excelente empleado?",
      answerOptions: [
        { answerText: "Si", isCorrect: true },
        { answerText: "Absoltamente", isCorrect: true },
        { answerText: "Sin ninguna duda", isCorrect: true },
        { answerText: "Definitivamente", isCorrect: true },
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
          Tu puntuacion {score} fuera de {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Pregunta　{currentQuestion + 1}</span>/{questions.length}
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
