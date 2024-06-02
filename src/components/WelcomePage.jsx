import React, { useState } from "react";
import "./WelcomePage.css";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  return (
    <div className="welcome">
      <div className="card__profile">
        <div className="text__left">
          <Marquee direction="left" speed={90}>
            <div className={`card ${hover ? "dark-gradient" : ""}`}>
              <p>{hover ? ".CREATIVE":".RELIABLE"}</p>
            </div>
          </Marquee>
        </div>
        <div className="section__info">
          <div className="info__user">
            <p>Hi, I'm Gerco</p>
          </div>
          <div
            className="card__profile__img"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src="https://github.com/gxrco.png" alt="profile" />
          </div>
          <div className="info__user">
            <p>{hover ? "Frontend Dev" : "Backend Dev"}</p>
          </div>
        </div>
        <div className="text__right">
          <Marquee direction="right" speed={90}>
            <div className={`card ${hover ? "dark-gradient" : ""}`}>
              <p>{hover ? ".DYNAMIC" : ".EFFICIENT"}</p>
            </div>
          </Marquee>
        </div>
        <Link to="/about">
          <div className="message">
            <p className="message__text">Know more about me →</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
