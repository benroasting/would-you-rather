import React, { useState } from "react";
import "./App.css";
import Search from "./Components/SearchBar";
import QuestionsFeed from "./Components/QuestionsFeed";
import ButtonFilter from "./Components/ButtonFilter";
import data from "./data";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [checkCategory, setCheckCategory] = useState([]);

  const filteredQuestions = data.filter((data) => {
    return (
      data.category.tag.toLowerCase().includes(searchInput.toLowerCase()) ||
      data.question1.toLowerCase().includes(searchInput.toLowerCase()) ||
      data.question2.toLowerCase().includes(searchInput.toLowerCase())
    );
  });

  const showFilteredCategories = data.filter((data, filters) => {
    return data.category.tag === filters;
  });

  const handleFilters = (filters, category) => {
    const checkboxFilters = { ...checkCategory };
    checkboxFilters[category] = filters;

    showFilteredCategories(checkboxFilters);
    setCheckCategory(checkboxFilters);
  };

  return (
    <div className="App">
      <h1>Would You Rather ...</h1>
      <Search onChange={setSearchInput} searchText={searchInput} />
      <ButtonFilter
        handleFilters={(filters) => handleFilters(filters, "categories")}
      />
      <QuestionsFeed filteredQuestions={filteredQuestions} />
    </div>
  );
}

export default App;
