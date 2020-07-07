import React, { Component } from "react";
import { Container } from "react-bootstrap";
import ReactTypingEffect from "react-typing-effect";
import cover from "../../img/intro-bg.jpg";
import "./Introduction.css";

const image_style = {
  backgroundImage: `url(${cover})`,
  height: "100vh",
};

class Introduction extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        id="home"
        className="intro route bg-image overlay"
        style={image_style}
      >
        <div className="overlay-itro"></div>
        <div className="intro-content display-table">
          <div className="table-cell">
            <Container>
              <h1 className="intro-title mb-4">I am Shreyaa Sridhar</h1>
              <ReactTypingEffect
                className="intro-subtitle"
                text={[
                  "Full-Stack Web Developer",
                  "Master in CS USC",
                  "Python Programmer",
                  "VR Enthusiast",
                  "Singer"
                ]}
                speed={80}
                eraseDelay={800}
              />
            </Container>
          </div>
        </div>
      </div>
    );
  }
}
export default Introduction;
