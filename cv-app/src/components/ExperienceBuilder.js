import React, { Component } from "react";
import uniqid from "uniqid";
import ExperienceItems from "./ExperienceItems";


class ExperienceBuilder extends Component {
    constructor() {
        super();

        this.state ={
            company: {
              text: '',
              id: uniqid(),
            },
            companies: [],
            title: {
                text: '',
                id: uniqid(),
              },
            titles: [],
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
            description: {
                text: '',
                id: uniqid(),
              },
            descriptions: [],

          };
          this.deleteIndex = this.deleteIndex.bind(this);
    }

    handleCompany = (e) => {
        this.setState({
          company: {
            text: e.target.value,
            id: this.state.company.id,
          }
        });
    };

    handleTitle = (e) => {
        this.setState({
          title: {
            text: e.target.value,
            id: this.state.title.id,
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

    handleDesc = (e) => {
        this.setState({
          description : {
            text: e.target.value,
            id: this.state.description.id,
          }
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
          companies: this.state.companies.concat(this.state.company.text),
          company: { text:'', id: uniqid() },
          titles: this.state.titles.concat(this.state.title.text),
          title: { text: '', id: uniqid() },
          starts: this.state.starts.concat(this.state.start.text),
          start: { text: '', id: uniqid() },
          ends: this.state.ends.concat(this.state.end.text),
          end: { text: '', id: uniqid() },
          descriptions: this.state.descriptions.concat(this.state.description.text),
          description: { text: '', id: uniqid() },

        });
      };

      deleteIndex = (passedCompany, passedTitle, passedStart, passedEnd) => {
        const resultCompanies = this.state.companies.filter(item => item !== passedCompany );
        const resultTitles = this.state.titles.filter(item => item !== passedTitle);
        const resultStarts = this.state.starts.filter(item => item !== passedStart );
        const resultEnds = this.state.ends.filter(item => item !== passedEnd );
        const resultDescriptions = this.state.descriptions.filter(item => item !== passedEnd );
        this.setState({
          companies: resultCompanies,
          titles: resultTitles,
          starts: resultStarts,
          ends: resultEnds,
          descriptions: resultDescriptions
        });
        }



  render() {
    const {company, companies, title, titles, start, starts, end, ends, description, descriptions} = this.state;
    return ( 
    <div>
        <form onSubmit={this.onSubmit}>
            <input type="text" placeholder="Company/Organization" onChange={this.handleCompany} value={company.text}></input>
            <input type="text" placeholder="Title" onChange={this.handleTitle} value={title.text}></input>
            <input type="text" placeholder="Start Date" onChange={this.handleStart} value={start.text}></input>
            <input type="text" placeholder="End Date" onChange={this.handleEnd} value={end.text}></input>
            <input type="text" placeholder="Description" onChange={this.handleDesc} value={description.text}></input>
            <button type="submit">Add</button>
        </form>
        <ExperienceItems companies={companies} titles={titles} starts={starts} ends={ends} descriptions={descriptions} deleteIndex={this.deleteIndex}/>
    </div>
    );
    }
}

export default ExperienceBuilder;