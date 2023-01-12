import React from "react";
import uniqid from "uniqid";
import ReactDOM from "react-dom";

const ExperienceFinal = (props) => {
  let items = [];
  for (let i=0; i< props.companies.length; i++){
    const experienceDiv = 
    (<div className="experienceDiv" key={uniqid()}>
        <div className="company" key={uniqid()}>{props.companies[i]} </div>
        <div className="title" key={uniqid()}>{props.titles[i]} </div>
        <div className="start" key={uniqid()}>{props.starts[i]}</div>
        <div className="end" key={uniqid()}>{props.ends[i]} </div>
        <div className="description" key={uniqid()}>{props.descriptions[i]} </div>
    </div>);
    items.push(experienceDiv);
  }
    return ReactDOM.createPortal(
      <div className="all-experience">{items}</div>,
      document.getElementById('experience-portal')
    );
  };


export default ExperienceFinal;