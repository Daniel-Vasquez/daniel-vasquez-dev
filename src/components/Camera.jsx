import React from "react";
import personalImage from "../images/daniel.png";
import { Link } from "react-router-dom";
import "./styles/Camera.css"

const Camera = () => {
  const handleButtonClicked = () => {
    const generalContainerToggle = document.getElementById(
      "generalContainerToggle"
    );
    generalContainerToggle.classList.toggle("open");
  }

  return (
    <div id="generalContainerToggle" className="">
      <div id="cameraContainer">
        <div className="strip"></div>
        <div className="lens"></div>
        <div className="led"></div>
        <div
          id="btnToggle"
          onClick={() => handleButtonClicked()}
          className="btnCamera"
        ></div>
      </div>
      <div id="cameraScreen">
        <div className="cameraMirror">
          <div className="containerCard">
            <div className="contentCard">
              <img className="cameraMirror-img" src={personalImage} />
            </div>
            <div className="cameraFlap"></div>
          </div>
        </div>
        <center>
          <Link
            className="lnk"
            to="https://www.linkedin.com/in/daniel-vasquez-nepomuceno/"
            target="_black"
            title="Visitar"
          >
            Linkedin
          </Link>
        </center>
      </div>
    </div>
  );
};

export default Camera;
