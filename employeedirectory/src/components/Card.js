import React from "react";

function Card (props) {
    return (
        <table className="table">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">DOB</th>-
    </tr>
  </thead>
  <tbody>
    <tr>
    <td><img src={props.picture}></img></td>
    <td>{props.firstName} {props.lastName}</td>
    <td >{props.phone}</td>
    <td >{props.email}</td>
    <td>{props.dob}</td>
    </tr>
  </tbody>
</table>
    )
}

export default Card;