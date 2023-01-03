import React, { Component } from "react";

class PersonalInfoBuilder extends Component {
    constructor() {
        super();
    }
  render() {
    return ( 
    <div>
        <form>
            <input type="text" placeholder="Full Name"></input>
            <input type="text" placeholder="Email"></input>
            <input type="text" placeholder="Phone Number"></input>
            <button type="submit">Update</button>
        </form>
    </div>
    );
    }
}

export default PersonalInfoBuilder;