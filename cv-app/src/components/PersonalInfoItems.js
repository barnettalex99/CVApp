import React from "react";
import PersonalInfoFinal from "./PersonalInfoFinal";

const PersonalInfoItems = (props) => {
  const { allInfo } = props;
  return (
    <div className="all-personal">
      <div className="name">
        <p>{allInfo[0]}</p>
      </div>
      <div className="email">
        <p>{allInfo[1]}</p>
      </div>
      <div className="phone-number">
        <p>{allInfo[2]}</p>
      </div>
      <PersonalInfoFinal allInfo={allInfo}/>
    </div>
  );
};

export default PersonalInfoItems;