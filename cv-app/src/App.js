import React, { Component } from 'react'
import EducationBuilder from './components/EducationBuilder';
import ExperienceBuilder from './components/ExperienceBuilder';
import PersonalInfoBuilder from './components/PersonalInfoBuilder';
import SkillsBuilder from './components/SkillsBuilder';

class App extends Component {
    constructor() {
      super();
    }


    render() {
      return (
          <div className="App">
            <h1>CV Builder</h1>
            <div className="builder">
              <div className ="personal-info-form">
                <h2>Enter Your Personal Information:</h2>
                <PersonalInfoBuilder />
              </div>
              <div className ="education-info-form">
                <h2>Enter Your Education Information:</h2>
                <EducationBuilder />
              </div>
              <div className ="experience-info-form">
                <h2>Enter Your Experience Information:</h2>
                <ExperienceBuilder />
              </div>
              <div className ="skills-form">
                <h2>Enter Your Skills:</h2>
                <SkillsBuilder />
              </div>
            </div>
          </div>
      )
    }
}

export default App;
