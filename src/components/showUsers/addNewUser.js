import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import axios from "axios";
import React, { useState } from "react";

export default function AddNewUser() {
  const [userData, setuserData] = useState({
    name: "",
    age: "",
    alias: "",
  });
  const onClicksubmit = () => {
    console.log("onClicksubmit", userData);
    axios
      .post("http://127.0.0.1:8000/heroes/", userData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onValueChange = (fieldName, event) => {
    switch (fieldName) {
      case "name":
        setuserData({ ...userData, name: event.target.value });
        break;
      case "age":
        setuserData({ ...userData, age: event.target.value });
        break;
      case "alias":
        setuserData({ ...userData, alias: event.target.value });
        break;
      default:
        break;
    }
    console.log(userData);
  };
  return (
    <div>
      <h1> Add New User </h1>

      <TextField
        label="Name"
        value={userData.name}
        onChange={(event) => onValueChange("name", event)}
      />
      <TextField
        label="Age"
        value={userData.age}
        onChange={(event) => onValueChange("age", event)}
      />
      <TextField
        label="Alies"
        value={userData.alies}
        onChange={(event) => onValueChange("alias", event)}
      />
      <Button type="button" onClick={() => onClicksubmit()} color="primary">
        Save User
      </Button>
    </div>
  );
}
