import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="mb-3">
          <span className="text-danger">About</span> Me
        </h2>
        <div className="row">
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-10">
                    <h4 className="card-title mb-3">UI/UX Designer</h4>
                    <p className="card-text">UI/UX Designer</p>
                  </div>
                  <div className="col-2">
                    <i className="ti-crown"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">{/* ... other cards ... */}</div>
          <div className="col-lg-4">{/* ... other cards ... */}</div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card">
              <Image
                src="/imgs/avatar-2.jpg"
                alt="Omar Bradai"
                width={300}
                height={300}
                className="card-img"
              />
              <div className="card-body">
                <h4 className="card-title">Omar Bradai</h4>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <h3 className="mt-3">I am a UI/UX Designer.</h3>
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos,
              cupiditate ducimus? Sed perferendis necessitatibus...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
