import React from "react";

function Project() {
  return (
    <div>
      <div className="container py-5" id="project">
        <div className="text-center py-5 fw-bold">
          <p>Browser My Recent</p>
          <h3>Projects</h3>
        </div>
        <div className="row gap-4 justify-content-center ">
          <div className="col-md-3  border border-4 rounded-4 ">
            <div className="card border-0   mx-md-0 mx-5">
              <img src="asset/project-1.png" className="images-card mx-md-0 mx-5" alt="" />
              <h3 className="text-center mt-4 ">Project one</h3>
              <div className="btn gap-2 d-flex flex-lg-row  flex-column mb-3 ">
                <button className="btn btn-outline-dark rounded-pill ">
                  Github
                </button>
                <button className="btn btn-outline-dark rounded-pill ">
                  linkdin
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-3 border border-4 rounded-4">
          <div className="card border-0 px-md-0  px-5">
              <img src="asset/project-2.png" className="images-card  mx-md-0 mx-5" alt="" />
              <h3 className="text-center mt-4">Project one</h3>
              <div className="btn gap-2 d-flex flex-lg-row flex-column mb-3 ">
                <button className="btn btn-outline-dark rounded-pill px-4">
                  Github
                </button>
                <button className="btn btn-outline-dark rounded-pill px-4">
                  linkdin
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-3 border border-4 rounded-4">
          <div className="card border-0  px-md-0  px-5">
              <img src="asset/project-3.png" className="images-card  mx-md-0 mx-5" alt="" />
              <h3 className="text-center mt-4">Project one</h3>
              <div className="btn gap-2 d-flex flex-lg-row flex-column  mb-3 ">
                <button className="btn btn-outline-dark rounded-pill px-4">
                  Github
                </button>
                <button className="btn btn-outline-dark rounded-pill px-4">
                  linkdin
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
