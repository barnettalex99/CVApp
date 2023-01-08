import React, { Component } from "react";
import uniqid from "uniqid";
import EducationItems from "./EducationItems";


class EducationBuilder extends Component {
    constructor() {
        super();

        this.state ={
            school: {
              text: '',
              id: uniqid(),
            },
            schools: [],
            degree: {
                text: '',
                id: uniqid(),
              },
            degrees: [],
            start: {
                text: '',
                id: uniqid(),
              },
            starts: [],
            end: {
                text: '',
                id: uniqid(),
              },
            ends: [],
          };
          this.deleteIndex = this.deleteIndex.bind(this);
    }

    handleSchool = (e) => {
        this.setState({
          school: {
            text: e.target.value,
            id: this.state.school.id,
          }
        });
    };

    handleDegree = (e) => {
        this.setState({
          degree: {
            text: e.target.value,
            id: this.state.degree.id,
          }
        });
    };

    handleStart = (e) => {
        this.setState({
          start : {
            text: e.target.value,
            id: this.state.start.id,
          }
        });
    };

    handleEnd = (e) => {
        this.setState({
          end : {
            text: e.target.value,
            id: this.state.end.id,
          }
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
          schools: this.state.schools.concat(this.state.school.text),
          school: { text:'', id: uniqid() },
          degrees: this.state.degrees.concat(this.state.degree.text),
          degree: { text: '', id: uniqid() },
          starts: this.state.starts.concat(this.state.start.text),
          start: { text: '', id: uniqid() },
          ends: this.state.ends.concat(this.state.end.text),
          end: { text: '', id: uniqid() },
        });
      };


  deleteIndex = (passedSchool, passedDegree, passedStart, passedEnd) => {
    const resultSchools = this.state.schools.filter(item => item !== passedSchool );
    const resultDegrees = this.state.degrees.filter(item => item !== passedDegree );
    const resultStarts = this.state.starts.filter(item => item !== passedStart );
    const resultEnds = this.state.ends.filter(item => item !== passedEnd );
    this.setState({
      schools: resultSchools,
      degrees: resultDegrees,
      starts: resultStarts,
      ends: resultEnds
    });
    }

  render() {
    const {school, schools, degree, degrees, start, starts, end, ends} = this.state;
    return ( 
    <div className="education-form">
        <form onSubmit={this.onSubmit}>
            <input type="text" placeholder="School" onChange={this.handleSchool} value={school.text}></input>
            <input type="text" placeholder="Degree" onChange={this.handleDegree} value={degree.text}></input>
            <input type="text" placeholder="Start Date" onChange={this.handleStart} value={start.text}></input>
            <input type="text" placeholder="End Date" onChange={this.handleEnd} value={end.text}></input>
            <button type="submit">Add</button>
        </form>
        <EducationItems schools={schools} degrees={degrees} starts={starts} ends={ends} deleteIndex={this.deleteIndex}/>
    </div>
    );
    }
}

export default EducationBuilder;