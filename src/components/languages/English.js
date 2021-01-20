import React from "react"
import "./english.css"
import "./language.css"
import EnglishQuestions from "../Questions/EnglishQuestions"
class English extends React.Component {
    render(){
        return (
          <div className="container">
            <h1>Hello World!</h1>

            <p className="intro">
              My name is Joshua Gaucin, I am a Software Developer with a passion
              for languages, be it human or computer. Test your skills in English, 
              Japanese, Spanish, and Arabic. 
            </p>
            <p>Please enjoy this fun quiz!</p>
            <EnglishQuestions />
          </div>
        );
    }
}
export default English;