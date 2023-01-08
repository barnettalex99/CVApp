import React from "react";
import uniqid from "uniqid";

const ExperienceItems = (props) => {
  let items = [];
  for (let i=0; i< props.companies.length; i++){
    const experienceDiv = 
    (<div className="experienceDiv" key={uniqid()}>
        <div className="company" key={uniqid()}>{props.companies[i]} </div>
        <div className="title" key={uniqid()}>{props.titles[i]} </div>
        <div className="start" key={uniqid()}>{props.starts[i]}</div>
        <div className="end" key={uniqid()}>{props.ends[i]} </div>
        <div className="description" key={uniqid()}>{props.descriptions[i]} </div>
        <button type="button" onClick={() => props.deleteIndex(props.companies[i], props.titles[i], props.starts[i], props.ends[i], props.descriptions[i])}>Delete</button>
    </div>);
    items.push(experienceDiv);
  }
    return (
      <div className="all-experience">{items}</div>
    );
  };


export default ExperienceItems;