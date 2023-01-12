import React, { useState } from "react";
import QuestionsFeed from "./QuestionsFeed";
import questionsData from "../data";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");

  const filteredQuestions = questionsData?.filter((data) => {
    return (
      data.category.tag.toLowerCase().includes(searchInput.toLowerCase()) ||
      data.question1.toLowerCase().includes(searchInput.toLowerCase()) ||
      data.question2.toLowerCase().includes(searchInput.toLowerCase())
    );
  });

  const searchHandler = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  return (
    <div>
      <input
        type="search"
        placeholder="Search Here"
        onChange={searchHandler}
        value={searchInput}
      />
      <QuestionsFeed filteredQuestions={filteredQuestions} />
    </div>
  );
};

export default Search;
