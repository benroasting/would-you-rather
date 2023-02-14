import React, { useState } from "react";
import "./App.css";
import Search from "./Components/SearchBar";
import QuestionsFeed from "./Components/QuestionsFeed";
import ButtonFilter from "./Components/ButtonFilter";
import data from "./data";
import categories from "./categories";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [checkCategory, setCheckCategory] = useState([]);

  const filteredQuestions = data.filter((card) => {
    const isQuestionMatch =
      card.question1.toLowerCase().includes(searchInput.toLowerCase()) ||
      card.question2.toLowerCase().includes(searchInput.toLowerCase());

    const isCategoryMatch =
      checkCategory.length === 0 ||
      categories
        .filter((c) => checkCategory.includes(c.id))
        .some((c) => c.category === card.category.tag);

    return isQuestionMatch && isCategoryMatch;
  });

  const onAddCategory = (category) => {
    checkCategory.push(category);
    setCheckCategory([...checkCategory]);
  };

  const onRemoveCategory = (category) => {
    setCheckCategory(checkCategory.filter((c) => c !== category));
  };

  return (
    <div className="App">
      <h1>Would You Rather ...</h1>
      <Search onChange={setSearchInput} searchText={searchInput} />
      <ButtonFilter
        onChange={setCheckCategory}
        checked={checkCategory}
        onAdd={onAddCategory}
        onRemove={onRemoveCategory}
      />
      <QuestionsFeed filteredQuestions={filteredQuestions} />
    </div>
  );
}

export default App;
