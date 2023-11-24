import React from "react";
import "./About.css";

function About() {
  return (
    <div>


      <div className="container py-5" id="about">
        <div className="row py-5 mt-5 gap-4 fw-bold">
          <h4 className="text-center  mt-5">About Me</h4>
          <div className="col-md-4">
            <div className="card border-0 ">
              <img src="asset/saif2.jpg" alt="" className="card-pic" />
            </div>
          </div>
          <div className="col">
            <div className="row  py-5 fw-bold">
              <div className="col-md-6 py-5 ">
                <div className="card img-card ">
                  <img src="asset/education.png" className="w-25  " alt="" />
                  <p>2+ years</p>
                  <p>Frotend Developer</p>
                </div>
              </div>

              <div className="col-md-6 py-5">
                <div className="card img-card">
                  <img src="asset/education.png" className="w-25 " alt="" />
                  <p>2+ years</p>
                  <p>Backend Developer</p>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos labore iusto quos eum non facilis consequatur quisquam quibusdam debitis molestias! Eos labore iusto quos eum non facilis consequatur quisquam quibusdam debitis molestias! Eos labore iusto quos eum non facilis consequatur quisquam quibusdam debitis molestias!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
