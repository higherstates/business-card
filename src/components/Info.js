import React from "react";
import MyPhoto from "../images/profile.jpg"

function Info() {
    return (
        <div className="info">
            <div className="info--img">
                <img src={MyPhoto} alt="Julie" />
            </div>
            <div className="info--text">
                <h1 className="info--text_name">Julie Lai</h1>
                <p className="info--text_title">Frontend Developer</p>
                <a href="https://julie-lai.com" className="info--text_website">julie-lai.com</a>
            </div>
        </div>
    )
}

export default Info