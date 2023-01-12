import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillPhone } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import FotoProfile from "../assets/profile-picture.jpg";
import "../styles/Header.css";

const Header = (props) => {
  return (
    <div className="Header">
      <nav>
        <h2>Portfolio</h2>
        <div style={{display:"flex",alignItems:"center", gap:"15px"}}>
          <button onClick={props.dark}>
            <BsFillMoonStarsFill size={30}/>
          </button>
          <h2>Resume</h2>
        </div>
      </nav>

      <div className="Resume">
        <h1>Marcos Gonçalves</h1>
        <h2>Web Developer</h2>
        <p>
          I'm a Web Developer passionated for technology and everything which
          surrounds it. I've been developing by myself since 2020 and in my free
          time i like to deal with Unreal Engening 5 as a hobby.
        </p>
      </div>

      <div className="Contact">
        <ul>
          <li>
            <a target="_blank" href="https://github.com/GonMarcos">
              <AiFillGithub size={70} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/marcos-gon%C3%A7alves-45685012a/"
            >
              <AiFillLinkedin size={70} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://api.whatsapp.com/send/?phone=%2B5521964746251&text&type=phone_number&app_absent=0"
            >
              <AiFillPhone size={70} />
            </a>
          </li>
        </ul>
        <img src={FotoProfile} alt="" />
      </div>
    </div>
  );
};

export default Header;
