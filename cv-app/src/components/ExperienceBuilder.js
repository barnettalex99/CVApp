import React, { Component } from "react";

class ExperienceBuilder extends Component {
    constructor() {
        super();
    }
  render() {
    return ( 
    <div>
        <form>
            <input type="text" placeholder="Company/Organization"></input>
            <input type="text" placeholder="Title"></input>
            <input type="text" placeholder="Start Date"></input>
            <input type="text" placeholder="End Date"></input>
            <input type="text" placeholder="Description"></input>
            <button type="submit">Add</button>
        </form>
    </div>
    );
    }
}

export default ExperienceBuilder;