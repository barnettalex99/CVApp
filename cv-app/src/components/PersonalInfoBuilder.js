import React, { Component } from "react";
import uniqid from "uniqid";
import PersonalInfoItems from "./PersonalInfoItems";


class PersonalInfoBuilder extends Component {
    constructor() {
        super();

        this.state ={
            name: {
              text: '',
              id: uniqid(),
            },
            names: [],
            email: {
                text: '',
                id: uniqid(),
              },
            emails: [],
            phoneNum: {
                text: '',
                id: uniqid(),
              },
            phoneNums: [],
            allInfo: [this.name, this.email, this.phoneNum],
          };
    }

    handleName = (e) => {
        this.setState({
          name : {
            text: e.target.value,
            id: this.state.name.id,
          }
        });
    };

    handleEmail = (e) => {
        this.setState({
          email : {
            text: e.target.value,
            id: this.state.email.id,
          }
        });
    };

    handlePhoneNum = (e) => {
        this.setState({
          phoneNum : {
            text: e.target.value,
            id: this.state.phoneNum.id,
          }
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
          names: this.state.names.concat(this.state.name),
          name: {text: this.state.name.text, id: uniqid() },
          emails: this.state.emails.concat(this.state.email),
          email: {text: this.state.email.text, id: uniqid() },
          phoneNums: this.state.phoneNums.concat(this.state.phoneNum),
          phoneNum: {text: this.state.phoneNum.text, id: uniqid() },
          allInfo: [this.state.name.text, this.state.email.text, this.state.phoneNum.text],
        });
      };

    
  render() {
    const { name, names, email, emails, phoneNum, phoneNums, allInfo } = this.state;
    return ( 
    <div>
        <form onSubmit={this.onSubmit}>
            <input type="text" placeholder="Full Name" onChange={this.handleName} value={name.text}></input>
            <input type="text" placeholder="Email" onChange={this.handleEmail} value={email.text}></input>
            <input type="text" placeholder="Phone Number" onChange={this.handlePhoneNum} value={phoneNum.text}></input>
            <button type="submit">Update</button>
        </form>
        <PersonalInfoItems allInfo = {allInfo} />
    </div>
    );
    }
}

export default PersonalInfoBuilder;