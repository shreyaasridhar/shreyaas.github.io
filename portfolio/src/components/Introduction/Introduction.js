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
                  "Student @ USC",
                  "Web Developer",
                  "Frontend Developer",
                  "Python Programmer",
                  "VR Enthusiast",
                  "Singer",
                  "Upcoming Flutist",
                ]}
                speed={80}
                eraseDelay={800}
              />
            </Container>
          </div>
        </div>
        <div className="social">
          <a
            href="https://github.com/naaficodes"
            target="https://www.linkedin.com/in/shreyaa-sridhar/"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://Instagram.com/iam_naafi"
            target="https://www.linkedin.com/in/shreyaa-sridhar/"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/abdul.w.naafi"
            target="https://www.linkedin.com/in/shreyaa-sridhar/"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://Linkedin.com/in/naafi"
            target="https://www.linkedin.com/in/shreyaa-sridhar/"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://medium.com/@iam_naafi"
            target="https://www.linkedin.com/in/shreyaa-sridhar/"
          >
            <i className="fab fa-medium-m"></i>
          </a>
        </div>
      </div>
    );
  }
}
export default Introduction;
