import React,  { useEffect, useState } from "react";
import uniqid from "uniqid";


const EducationItems = (props) => {
  let items = [];
  for (let i=0; i< props.schools.length; i++) {
    const experienceDiv =
    (<div className="educationDiv" key={uniqid()} id={i}>
        <div className="company" key={uniqid()}>{props.schools[i]} </div>
        <div className="title" key={uniqid()}>{props.degrees[i]} </div>
        <div className="start" key={uniqid()}>{props.starts[i]}</div>
        <div className="end" key={uniqid()}>{props.ends[i]} </div>
        <button type="button" onClick={() => props.deleteIndex(props.schools[i], props.degrees[i], props.starts[i], props.ends[i])}>Delete</button>
    </div>);
    items.push(experienceDiv);
  }
    return (
        <div className="all-education">{items}</div>
    );
  };



export default EducationItems;