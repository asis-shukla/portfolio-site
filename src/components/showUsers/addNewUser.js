import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React, { useState } from "react";

export default function AddNewUser() {
  const [userData, setuserData] = useState({});
  const onClicksubmit = () => {
    // Do something
  };
  return (
    <div>
      <h1> Add New User </h1>

      <TextField label="Name" />
      <TextField label="Age" />
      <TextField label="Alies" />
      <Button type="button" onClick={() => onClicksubmit()} color="primary">
        sdasjdhasj
      </Button>
    </div>
  );
}
