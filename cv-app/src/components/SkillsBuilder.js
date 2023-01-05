import React, { Component } from "react";
import uniqid from "uniqid";
import SkillsItems from "./SkillsItems";

class SkillsBuilder extends Component {
    constructor() {
        super();

        this.state ={
            skill: {
              text: '',
              id: uniqid(),
            },
            skills: [],
          };
    }
    handleChange = (e) => {
        this.setState({
          skill : {
            text: e.target.value,
            id: this.state.skill.id,
          }
        });
      };
      
    onSubmitSkill = (e) => {
      e.preventDefault();
      this.setState({
        skills: this.state.skills.concat(this.state.skill),
        skill: { text: '', id: uniqid() },
      });
    };

  render() {
    const { skill, skills } = this.state;
    return ( 
    <div>
        <form onSubmit={this.onSubmitSkill}>
            <input type="text" placeholder="Add Skill Here" onChange={this.handleChange} value={skill.text}></input>
            <button type="submit">Add</button>
        </form>
        <SkillsItems skills={skills} />
    </div>
    );
    }
}

export default SkillsBuilder;