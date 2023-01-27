import React, { useState } from "react";
import "./App.css";
import Search from "./Components/SearchBar";
import QuestionsFeed from "./Components/QuestionsFeed";
import data from "./data";

function App() {
  const [searchInput, setSearchInput] = useState("");

  const filteredQuestions = data.filter((data) => {
    return (
      data.category.tag.toLowerCase().includes(searchInput.toLowerCase()) ||
      data.question1.toLowerCase().includes(searchInput.toLowerCase()) ||
      data.question2.toLowerCase().includes(searchInput.toLowerCase())
    );
  });

  return (
    <div className="App">
      <h1>Would You Rather ...</h1>
      <Search onChange={setSearchInput} searchText={searchInput} />
      <QuestionsFeed filteredQuestions={filteredQuestions} />
    </div>
  );
}

export default App;
