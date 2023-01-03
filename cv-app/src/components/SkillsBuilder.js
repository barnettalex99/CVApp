import React, { Component } from "react";

class SkillsBuilder extends Component {
    constructor() {
        super();
    }
  render() {
    return ( 
    <div>
        <form>
            <input type="text" placeholder="Add Skill Here"></input>
            <button type="submit">Add</button>
        </form>
    </div>
    );
    }
}

export default SkillsBuilder;