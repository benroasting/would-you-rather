import React from "react";
import categories from "../categories";

export default function ButtonFilter(props) {
  const isChecked = (value) => props.checked.includes(value);

  const handleSearchToggle = (value) => {
    if (isChecked(value)) {
      props.onRemove(value);
    } else {
      props.onAdd(value);
    }
  };

  const checkBoxList = () =>
    categories.map((category) => (
      <div className="eachCheckbox">
        <input
          type="checkbox"
          checked={props.checked.indexOf(category.id) === -1 ? false : true}
          onChange={() => handleSearchToggle(category.id)}
        />
        <span>{category.category}</span>
      </div>
    ));

  return <div className="checkbox-container">{checkBoxList()}</div>;
}
