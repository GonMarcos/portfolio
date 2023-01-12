import React from "react";
import { DiReact, DiNodejsSmall, DiPython } from "react-icons/di";
import { SiKeras, SiJavascript, SiTensorflow } from "react-icons/si";
import "../styles/Skills.css";

const Skills = (props) => {
  return (
    <div className="Stack">
      <h2>My Stack</h2>

      <div className="Cards">
        <div className="Card">
          <DiReact size={70} />
          <p>ReactJs</p>
        </div>
        <div className="Card">
          <SiJavascript size={70} />
          <p>JavaScript</p>
        </div>
        <div className="Card">
          <DiNodejsSmall size={70} />
          <p>NodeJs</p>
        </div>
        <div className="Card">
          <SiKeras size={70} />
          <p>Keras</p>
        </div>
        <div className="Card">
          <DiPython size={70} />
          <p>Python</p>
        </div>
        <div className="Card">
          <SiTensorflow size={70} />
          <p>TensorFlow</p>
        </div>
      </div>

      <h2>What To Learn Next</h2>

      <div className="Cards">
        <div className="Card">
          <DiReact size={70} />
          <p>JavaScript</p>
        </div>
        <div className="Card">
          <SiJavascript size={70} />
          <p>JavaScript</p>
        </div>
        <div className="Card">
          <DiNodejsSmall size={70} />
          <p>JavaScript</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
