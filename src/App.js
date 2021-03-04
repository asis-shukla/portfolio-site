import React from "react";
import "./App.css";
import Body from "./components/body/body";
import Header from "./components/header/header";
import { ShowUsers } from "./components/showUsers/showusers";
function App() {
  return (
    <div>
      <Header />
      {/* <Body /> */}
      <ShowUsers/>
    </div>
  );
}

export default App;
