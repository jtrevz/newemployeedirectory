import React, { Component } from "react";
import "../styles/Search.css";
import Card from "./Card";
import API from "../utils/API"

const url = "https://randomuser.me/api/?inc=name,email,dob,phone,picture&results=20"

class SearchEmployee extends Component {
    state = {
        results: []
    };

    componentDidMount() {
        this.initialEmployees(url);
    }

    initialEmployees = () => {
        API.search()
       .then(res => { 
        console.log(res);
        this.setState({ 
          results : res.data.results.map((e) => ({
            firstName: e.name.first,
            lastName: e.name.last,
            email: e.email,
            phone: e.phone,
            dob: e.dob.date,
            picture: e.picture.medium
          }))  
        })
    })
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
            {this.state.results.map (item =>
                <Card
                    firstName = {item.firstName}
                    lastName = {item.lastName}
                    picture = {item.picture}
                    email = {item.email}
                    phone = {item.phone}
                    key = {item.key}
                    dob = {item.dob}
                />
                )}
        </div> 
        )
    }
}

export default SearchEmployee;