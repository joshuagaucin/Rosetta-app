import React, { useState } from "react";

export default function App() {
  const questions = [
    {
      questionText: "朝はどんな挨拶がいいですか",

      answerOptions: [
        { answerText: "さようなら", isCorrect: false },
        { answerText: "おやすみなさい", isCorrect: false },
        { answerText: "こんばんわ", isCorrect: false },
        { answerText: "おはいよございます。", isCorrect: true },
      ],
    },
    {
      questionText: "どの文が正しくありません",

      answerOptions: [
        { answerText: "いぬがだいｓきですよ", isCorrect: false },
        { answerText: "ですか元気", isCorrect: true },
        { answerText: "一人の兄弟います.", isCorrect: false },
        { answerText: "お腹が空いた", isCorrect: false },
      ],
    },
    {
      questionText: "十マイナス七の結果は何ですか",
      answerOptions: [
        { answerText: "三", isCorrect: true },
        { answerText: "四", isCorrect: false },
        { answerText: "十七", isCorrect: false },
        { answerText: "〇", isCorrect: false },
      ],
    },
    {
      questionText: "素晴らしい従業員になりますか",
      answerOptions: [
        { answerText: "はい.", isCorrect: true },
        { answerText: "絶対に", isCorrect: true },
        { answerText: "間違いなく", isCorrect: true },
        { answerText: "確実に", isCorrect: true },
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
          得点した　{score} から {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>　質問　{currentQuestion + 1}</span>/{questions.length}
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
