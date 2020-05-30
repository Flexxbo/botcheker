/******************************************
 *  Author : Flexxbo
 *  Created On : Fri May 29 2020
 *  File : captchacomponent.js
 *******************************************/

/*===Put imports here===*/
import React from "react";
import "./captchacomponent2.css";
import Capimg from "./Capimg";

/*===Start code here===*/

export default function Captchacomponent2() {
  return (
    <div className="App Appstart">
      <header className="App-header">
        <h3>Step 1/5</h3>
        <div className="outsidebox">
          <div className="captchalabel">
            <p>
              Select all squares with <b>traffic lights</b>
            </p>
          </div>
          <div className="captcha">
            <div className="column">
              <Capimg />
              <Capimg />
              <Capimg />
              <Capimg />
            </div>
            <div className="column">
              <Capimg />
              <Capimg />
              <Capimg />
              <Capimg />
            </div>
            <div className="column">
              <Capimg />
              <Capimg />
              <Capimg />
              <Capimg />
            </div>
            <div className="column">
              <Capimg />
              <Capimg />
              <Capimg />
              <Capimg />
            </div>

            <div className="captchafooter">
              <div className="icons">
                <img
                  className="captchicons"
                  src={"images/logo192.png"}
                  alt="Logo"
                />
                <img
                  className="captchicons"
                  src={"images/logo192.png"}
                  alt="Logo"
                />
                <img
                  className="captchicons"
                  src={"images/logo192.png"}
                  alt="Logo"
                />
              </div>
              <a href="/Step3">
                <button className="captchabutton">Verify</button>
              </a>
            </div>
          </div>
        </div>
        <img
          className="progressbar"
          src={"images/ProgressBar.png"}
          alt="Logo"
        />
      </header>
    </div>
  );
}
