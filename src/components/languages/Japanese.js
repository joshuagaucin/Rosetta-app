import React from "react";
import "./japanese.css";
import "./language.css";
import JapaneseQuestions from "../Questions/JapaneseQuestions";
class Japanese extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>こんにちは世界！</h1>

        <p className="intro">
          私の名前はジョシュアガウシアンです。私はソフトウェアエンジニアで、語学、人間、コンピューターが大好きです。
          英語であなたのスキルをテストし、 日本語、スペイン語、アラビア語
        </p>
        <p>この楽しいクイズをお楽しみください</p>
        <JapaneseQuestions />
      </div>
    );
  }
}
export default Japanese;
