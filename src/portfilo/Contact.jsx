import React from "react";

function Contact() {
  return (
    <div>
      <div className="container" id="contact">
        <div className="text-center mt-5 fw-bold">
          <p>Get in Touch</p>
          <h3>Contact Me</h3>
        </div>
        <div className="row">
          <div className="col-md-4  rounded offset-md-4">
            <div className="d-flex flex-lg-row  flex-column  gap-2 pt-4 px-md-4 ">
              <img src="asset/email.png" className="img-pic" alt="" />
              <p>Saifbangash480@gmail.com</p>

              <img src="asset/email.png" className="img-pic" alt="" />
              <p>Linkdin</p>
            </div>
            <hr border='dark' className="fs-5 " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
