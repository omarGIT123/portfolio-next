"use client"; // This is a Client Component because it will have interactive elements (the 3D model).

import React from "react";

// You would create a separate component for your 3D robot
// import RobotCanvas from './RobotCanvas';

const Hero = () => {
  return (
    <header className="header" id="home">
      <div className="container">
        <div className="infos">
          <h6 className="subtitle">hello,I am</h6>
          <h6 className="title">Omar Bradai</h6>
          <p>UI/UX Designer</p>

          <div className="buttons pt-3">
            <button className="btn btn-primary rounded">HIRE ME</button>
            {/* Update the path to your resume in the public folder */}
            <a
              href="/resume/omar-bradai-resume.pdf"
              className="btn btn-dark rounded"
              download
            >
              DOWNLOAD CV
            </a>
          </div>

          <div className="socials mt-4">
            {/* Replace javascript:void(0) with your actual social media links */}
            <a className="social-item" href="https://facebook.com">
              <i className="ti-facebook"></i>
            </a>
            <a className="social-item" href="https://google.com">
              <i className="ti-google"></i>
            </a>
            <a className="social-item" href="https://github.com">
              <i className="ti-github"></i>
            </a>
            <a className="social-item" href="https://twitter.com">
              <i className="ti-twitter"></i>
            </a>
          </div>
        </div>
        <div className="img-holder">
          {/* The canvas for the 3D robot will be handled here.
            You would typically have a dedicated component that uses @react-three/fiber 
            to render the scene. For now, we can leave a placeholder.
          */}
          {/* <RobotCanvas /> */}
          <div
            id="robot-placeholder"
            style={{ width: "100%", height: "400px", backgroundColor: "#eee" }}
          ></div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
