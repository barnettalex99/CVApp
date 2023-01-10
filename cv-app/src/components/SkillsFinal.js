import React from "react";
import ReactDOM from "react-dom";

const SkillsFinal = (props) => {
    const { skills } = props;
    
    return ReactDOM.createPortal(
        <div className="final-skills">
          {skills.map((skill) => {
            return ( <div key={skill.id}>
                <p>{skill.text}</p>
                </div> );
          })}
        </div>,
        document.getElementById('skills-portal')
      );

}

export default SkillsFinal;