import React from "react";
import {
  FaFacebook,
  FaFacebookMessenger,
  FaTwitterSquare,
} from "react-icons/fa";
import { FaSkype } from "react-icons/fa6";
import { Nav } from "react-bootstrap";

function Footer() {
  return (
    <div>
      <div className="container-fluid bg-dark text-white mt-5">
        <div className="row py-5">
          <div className=" gap-5 d-flex justify-content-center ">
            <FaFacebook style={{ width: "30px", height: "30px" }} />
            <FaFacebookMessenger style={{ width: "30px", height: "30px" }} />
            <FaSkype style={{ width: "30px", height: "30px" }} />
            <FaTwitterSquare style={{ width: "30px", height: "30px" }} />
          </div>

          <ul className="nav gap-5 justify-content-center py-5 fw-bold">
            <li>
              <a href="#about" className="text-white text-decoration-none">
                About
              </a>
            </li>
            <li>
              <a href="#experience" className="text-white text-decoration-none">
                experience
              </a>
            </li>
            <li>
              <a href="#project" className="text-white text-decoration-none">
                project
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white text-decoration-none">
                contact
              </a>
            </li>
            
          </ul>
          <hr className="mx-auto" style={{width:'600px'}}/>
           <p className="text-center">Copyright@ 2023:Designed by Saif ullah Bangash</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
