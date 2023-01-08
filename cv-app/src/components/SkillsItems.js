import React from "react";


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
    </div>
  );
};

export default SkillsItems;
