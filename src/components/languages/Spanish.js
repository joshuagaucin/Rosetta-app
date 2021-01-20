import React from "react";
import "./spanish.css";
import "./language.css";
import SpanishQuestions from "../Questions/SpanishQuestions";
class Spanish extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Hola Mundo</h1>

        <p className="intro">
          Mi nombre es Joshua Gaucin, soy un ingeniero de softwares apasionado
          de los idiomas, ya sean de computadora o humanos. Pon a prueba tus
          habilidades en inglés, Japonés, español y árabe..
        </p>
        <p>Por favor disfruta este divertido cuestionario</p>
        <SpanishQuestions />
      </div>
    );
  }
}
export default Spanish;
