import React, { useState } from "react";
import categories from "../categories";

export default function ButtonFilter(props) {
  const [checkBoxInput, setcheckBoxInput] = useState([]);

  const handleSearchToggle = (value) => {
    const currentIndex = checkBoxInput.indexOf(value);
    const newCheck = [...checkBoxInput];

    if (currentIndex === -1) {
      newCheck.push(value);
    } else {
      newCheck.splice(currentIndex, 1);
    }

    setcheckBoxInput(newCheck);
    props.handleFilters(newCheck);
  };

  const checkBoxList = () =>
    categories.map((category, index) => (
      <div>
        <input
          type="checkbox"
          checked={checkBoxInput.indexOf(category.id) === -1 ? false : true}
          onChange={() => handleSearchToggle(category.id)}
        />
        <span>{category.category}</span>
      </div>
    ));

  return <div>{checkBoxList()}</div>;
}
