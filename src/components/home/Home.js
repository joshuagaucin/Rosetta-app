import React from "react"
import English from "../languages/English"
import Japanese from "../languages/Japanese"
import "./DropdownButt.css"
import Spanish from "../languages/Spanish";
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      language: "en",
    };
  }
  
  render() {

      
      
      if (this.state.language === "en") {
        return (
          <div>
            <English />
            <div class="dropdown">
              <button class="dropbtn">Languages</button>
              <div class="dropdown-content">
                <button
                  onClick={() => {
                    this.setState({ language: "es" });
                  }}
                >
                  Español
                </button>
                <button
                  onClick={() => {
                    this.setState({ language: "jap" });
                  }}
                >
                  日本語
                </button>
                
              </div>
            </div>
          </div>
        );
      } else if (this.state.language === "jap") {
        return (
          <div>
            <Japanese />
            <div class="dropdown">
              <button class="dropbtn">言語</button>
              <div class="dropdown-content">
                <button
                  onClick={() => {
                    this.setState({ language: "en" });
                  }}
                >
                  English
                </button>
                <button
                  onClick={() => {
                    this.setState({ language: "es" });
                  }}
                >
                  Español
                </button>
              </div>
            </div>
          </div>
        );
      } else if (this.state.language === "es") {
        return (
          <div>
            <Spanish />
            <div class="dropdown">
              <button class="dropbtn">Idiomas</button>
              <div class="dropdown-content">
                <button
                  onClick={() => {
                    this.setState({ language: "en" });
                  }}
                >
                  English
                </button>
                <button
                  onClick={() => {
                    this.setState({ language: "jap" });
                  }}
                >
                  日本語
                </button>
              </div>
            </div>
          </div>
        );
      }
   
  }
}
export default Home;