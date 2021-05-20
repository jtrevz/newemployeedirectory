import React, { Component } from "react";
import "../styles/Search.css";
import Card from "./Card";
import API from "../utils/API"


class SearchEmployee extends Component {
    state = {
        results: []
    };

    componentDidMount() {
        this.initialEmployees();
    }

    initialEmployees = () => {
        API.search()
       .then(res => this.setState({ results: res }))
       .then(console.log(this.state.results))
       .catch(err => console.error(err));
    }

    render() {
        return(
        <div>
            <form className="form">
            <input
            value={this.state.lasttName}
            name="search"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Search by Name"
            /> 
            <button onClick={this.handleFormSubmit}>Search</button>
            </form>
            <p>{this.state.data}</p>
            {/* {this.state.results.map (item =>
                <Card
                    firstName = {item.name}
                    lasttName = {item.name[2]}
                />
                )} */}
        </div> 
        )
    }
}

export default SearchEmployee;