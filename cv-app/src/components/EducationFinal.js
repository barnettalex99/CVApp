import React from "react";
import ReactDOM from "react-dom";
import uniqid from "uniqid";


const EducationFinal = (props) => {
  let items = [];
  for (let i=0; i< props.schools.length; i++) {
    const experienceDiv =
    (<div className="educationDiv" key={uniqid()} id={i}>
        <div className="company" key={uniqid()}>{props.schools[i]} </div>
        <div className="title" key={uniqid()}>{props.degrees[i]} </div>
        <div className="start" key={uniqid()}>{props.starts[i]}</div>
        <div className="end" key={uniqid()}>{props.ends[i]} </div>
    </div>);
    items.push(experienceDiv);
  }
    return ReactDOM.createPortal(
        <div className="education-final">{items}</div>,
        document.getElementById('education-portal')
    );
  };



export default EducationFinal;