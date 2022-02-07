import React from "react";
import { Link } from "react-router-dom";

import "../../App.css";

export default function LandingPage() {
  return (
    <div className="fluid-container">
      <div className="row">
        <div className="col-md-12 col-lg-7">
          <div id="bgimage"></div>
        </div>
        <div className="col-md-12 col-lg-5">
          <h1 className="main-title text-center">
            <b>Happening now</b>
          </h1>
          <p className="main-para text-center">join us today</p>
          <div className="buttons text-center">
            <div>
              <Link to="/register">
                <button className="btn btn-light" id="reg_btn">
                  <span>
                    <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" class="logo1"></img>
                    <t>Sign up with Google</t>
                  </span>
                </button>
                <button className="btn btn-light" id="reg_btn">
                  <span>
                    <img src="https://www.transparentpng.com/thumb/apple-logo/d9RxbG-apple-logo-free-png.png" class="logo2"></img>
                    <t>Sign up with Apple</t>
                  </span>
                </button>
                <button className="primary-button" id="reg_btn">
                  <span>Sign up email </span>
                </button>
              </Link>
            </div>
            <div>
              <p id="loginid">Already have an account?</p>
              <Link to="/login">
                <button className="primary-button">
                  <span>Log in</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row" id="footer">
        <div>
          <h4>All rights reserved</h4>
        </div>
      </div>
    </div>
  );
}

// const HeaderStyle = {
//     width: "100%",
//     height: "100vh",
//     background: `url(${BackgroundImage})`,
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover"
// }
