import React from "react";
import "./arabic.css";
import "./language.css";
import  ArabicQuestions from "../Questions/ArabicQuestions";
class Arabic extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>اهلا يا عالم</h1>

        <p className="intro">
          اهلا بكم في تعلم لغة الإنسان والحاسوب بكوني مهندس في تدريس اللغات
          وخصوصا لدى روسيطا ستون كأنه حلم يتحقق بالنسبة لي
        </p>

        <p>من فضلكم تمتع بهذا الامتحان الممتع</p>
        <ArabicQuestions />
      </div>
    );
  }
}
export default Arabic;
