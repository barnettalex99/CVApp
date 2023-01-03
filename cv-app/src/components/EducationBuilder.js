import React, { Component } from "react";

class EducationBuilder extends Component {
    constructor() {
        super();
    }
  render() {
    return ( 
    <div>
        <form>
            <input type="text" placeholder="School"></input>
            <input type="text" placeholder="Degree"></input>
            <input type="text" placeholder="Start Date"></input>
            <input type="text" placeholder="End Date"></input>
            <button type="submit">Add</button>
        </form>
    </div>
    );
    }
}

export default EducationBuilder;