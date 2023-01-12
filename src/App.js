import React from "react";
import "./App.css";
import Search from "./Components/SearchBar";
import data from "./data";

function App() {
  return (
    <div className="App">
      <h1>Would You Rather ...</h1>
      <Search questionsData={data} />
    </div>
  );
}

export default App;
