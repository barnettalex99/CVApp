import React from "react";
import ReactDOM from "react-dom";

const PersonalInfoFinal = (props) => {
  const { allInfo } = props;
  return ReactDOM.createPortal(
    <div className="all-personal">
      <div className="name">
        <p>Name: {allInfo[0]}</p>
      </div>
      <div className="email">
        <p>Email: {allInfo[1]}</p>
      </div>
      <div className="phone-number">
        <p>Phone Number: {allInfo[2]}</p>
      </div>
    </div>,
    document.getElementById('personal-info-portal')
  );
};

export default PersonalInfoFinal;