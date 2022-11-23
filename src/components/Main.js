import React from "react";
import mail from "../images/mail.png";
import linkedIn from "../images/linked-in.png";

export default function Main() {
  return (
    <div className="main--container">
      <h3 className="main--h3 main--content">Andrew Smith</h3>
      <h4 className="main--h4 main--content">Frontend Devloper</h4>
      <h4 className="main--h4-2 main--content">Website - Link</h4>

      <div className="btn--class">
        <button className="main-btn btn-mail">
          <img src={mail} className="btn--logo" alt="2" /> Mail
        </button>
        <button className="main-btn btn-linkedIn">
          <img src={linkedIn} className="btn--logo" alt="2" /> LinkedIn
        </button>
      </div>
      <div className="main--about">
        <h4 className="main--h">About</h4>
        <p>
          I'm a frontend Devloper with a particular intrest in making things
          simple and automating daily task. I try to keep with the security and
          best practices in consistency. Always looking to learn new things.
        </p>

        <h4 className="main--h">Interests</h4>
        <p>
          Foodie. Music Scholar. Reader. Internet Fanatic. Bacon Buff. Pop
          Culture Ninja. Tech Geek. Wanderer. Coffee Craver.
        </p>
      </div>
    </div>
  );
}
