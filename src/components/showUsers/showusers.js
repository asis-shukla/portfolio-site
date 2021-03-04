import React from "react";
import axios from "axios";

import "./showusers.css";
import AddNewUser from "./addNewUser";

import { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
export function ShowUsers() {
  const [users, setusers] = useState([]);
  const [user, setUser] = useState({});
  const [showAddUserForm, setshowAddUserForm] = useState(false);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/heroes/")
      .then((response) => {
        console.log(response);
        setusers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const showUserDetails = (url) => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const allUsers = users.map((user) => {
    return (
      <div key={user.url}>
        <p> {user.name} </p>
        <button onClick={() => showUserDetails(user.url)}>Show Details</button>
        <p> {user.url} </p>
        <p> {user.age} </p>
        <p> {user.alies} </p>
        <hr />
      </div>
    );
  });
  const showUser = () => {
    console.log("showUser called");
    return (
      <div>
        <p> {user.name} </p>
        <p> {user.age} </p>
        <p> {user.alies} </p>
      </div>
    );
  };

  return (
    <div className="main">
        <Button onClick={() => setshowAddUserForm(!showAddUserForm)}> Add New User </Button>
      {showAddUserForm ? <AddNewUser /> : null}

      <div className="left-pane">
        <h1> Show Users </h1>
        {allUsers}
      </div>
      <div className="right-pane">
        <h1> User Details </h1>
        {user ? showUser() : null}
      </div>
    </div>
  );
}
