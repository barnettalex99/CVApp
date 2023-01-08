import React, { Component } from 'react'
import EducationBuilder from './components/EducationBuilder';
import ExperienceBuilder from './components/ExperienceBuilder';
import PersonalInfoBuilder from './components/PersonalInfoBuilder';
import SkillsBuilder from './components/SkillsBuilder';
import './App.css';

class App extends Component {
    constructor() {
      super();
    }


    render() {

      return (
          <div className="App">
            <div className="content">
              <h1 className="app-title">CV Builder</h1>
              <h2 className="personal-info-directions">Enter Your Personal Information:</h2>
              <PersonalInfoBuilder />
              <h2 className="education-info-directions">Enter Your Education Information:</h2>
              <EducationBuilder />
              <h2>Enter Your Experience Information:</h2>
              <ExperienceBuilder />
              <h2>Enter Your Skills:</h2>
              <SkillsBuilder />
              <h1>CV</h1>
              <h2>Education:</h2>
              <h2>Experience:</h2>
              <h2>Skills:</h2>
            </div>
          </div>
      )
    }
}

export default App;
