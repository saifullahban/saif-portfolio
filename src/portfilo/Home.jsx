import React from 'react';

function Home() {
  return (
    <div>
            <div className="container" id="home">
        <div className="row img1">
          <div className="col-md-3 offset-md-3">
            <div className="card border-0 ">
              <img
                src="asset/saif3.jpg"
                className="w-100 ms-md-auto m-auto rounded-circle"
                alt="not found"
              />
            </div>
          </div>
          <div className="col-md-3 text-center mt-5 ">
            <h6>Hello ! in</h6>
            <h3>SAIF-ULLAH BANGASH</h3>
            <h4>Frontend Developer</h4>
            <div className="btn">
              <button className="btn btn-outline-dark rounded-pill">
                Download Cv
              </button>
            </div>

            <div className="btn ">
              <button className="btn btn-dark rounded-pill ">
                Contact Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
