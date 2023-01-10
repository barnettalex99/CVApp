import React from "react";
import SkillsFinal from "./SkillsFinal";


const SkillsItems = (props) => {
  const { skills } = props;

  return (
    <div className="all-skills">
      {skills.map((skill) => {
        return ( <div key={skill.id}>
            <p>{skill.text}</p>
            <button type="button" onClick={() => props.deleteSkill(skill.id)}>Delete</button>
            </div> );
      })}
      <SkillsFinal skills={skills} />
    </div>
  );
};

export default SkillsItems;
