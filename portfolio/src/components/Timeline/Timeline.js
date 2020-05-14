import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import USC from "../../img/USC.jpg";
import Amrita from "../../img/Amrita.jpg";
import Pdf from "../../ShreyaaSridhar.pdf";
import Button from "react-bootstrap/Button";

function Timeline() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100 op-6" src={USC} alt="First slide" />
          <Carousel.Caption>
            <h3>Master's in Computer Science </h3>
            <p>
              Viterbi School of Engineering, University of Southern California
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 op-6" src={Amrita} alt="Second slide" />

          <Carousel.Caption>
            <h3>Bachelor's in Computer Science</h3>
            <p>School of Engineering, Amrita Vishwa Vidyapeetham</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          "padding-top": "25px",
        }}
        class="ButtonContainer"
      >
        <div
          style={{
            "padding-top": "7px",
          }}
        >
          Download Resume here: &nbsp;
        </div>
        <tab />
        <Button variant="outline-info" href={Pdf}>
          Resume
        </Button>{" "}
      </div>
      <br />
      <br />
    </div>
  );
}
export default Timeline;
