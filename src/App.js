import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import { Container } from "react-bootstrap";
function App() {
  return (
    <Container className="container">
      <Navbar />
      <h1>
        Hey!, I am Ashish Shukla.
        <br />
        Welcome to my site.
      </h1>
      <br />
    </Container>
  );
}

export default App;
