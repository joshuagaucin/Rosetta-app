import React from "react";
import "./japanese.css";
import "./language.css";
import JapaneseQuestions from "../Questions/JapaneseQuestions";
class Japanese extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>こんにちわ世界！</h1>

        <p className="intro">
          名前がジョシュアガウシアンです。言語が大好きなソフトウェアエンジニアです。人間またはコンピューター。ロゼッタストーンで働きたい
        </p>
        <p>この楽しいクイズをお楽しみください</p>
        <JapaneseQuestions />
      </div>
    );
  }
}
export default Japanese;
