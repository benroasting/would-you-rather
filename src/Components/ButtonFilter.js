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

  // const handleSearchToggle = (value) => {
  //   const currentIndex = props.checked.indexOf(value);
  //   const newCheck = [...props.checked];

  //   if (currentIndex === -1) {
  //     newCheck.push(value);
  //   } else {
  //     newCheck.splice(currentIndex, 1);
  //   }

  //   props.onChange(newCheck);
  // };

  const checkBoxList = () =>
    categories.map((category) => (
      <div>
        <input
          type="checkbox"
          checked={props.checked.indexOf(category.id) === -1 ? false : true}
          onChange={() => handleSearchToggle(category.id)}
        />
        <span>{category.category}</span>
      </div>
    ));

  return <div>{checkBoxList()}</div>;
}
