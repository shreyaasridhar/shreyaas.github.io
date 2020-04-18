import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import USC from "../../img/USC.jpg";
import Amrita from "../../img/Amrita.jpg";

function Timeline() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
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
  );
}
export default Timeline;
