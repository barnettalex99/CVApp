import React from "react";


const SkillsItems = (props) => {
  const { skills } = props;

  return (
    <div className="all-skills">
      {skills.map((skill) => {
        return ( <div key={skill.id}>
            <p>{skill.text}</p>
            </div> );
      })}
    </div>
  );
};

export default SkillsItems;
