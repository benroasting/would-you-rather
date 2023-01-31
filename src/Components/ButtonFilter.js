import React from "react";

export default function ButtonFilter({ onChange, radioFilter }) {
  const filterHandler = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="radio-button-container">
      <ul>
        <li>
          <input
            type="checkbox"
            id="thoughtful"
            checked={radioFilter === "thoughtful"}
            value="thoughtful"
          />
          <label htmlFor="thoughtful">thoughtful</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="weird"
            checked={radioFilter === "weird"}
            value="weird"
          />
          <label htmlFor="weird">weird</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="awkward"
            checked={radioFilter === "awkward"}
            value="awkward"
          />
          <label htmlFor="awkward">awkward</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="random"
            checked={radioFilter === "random"}
            value="random"
          />
          <label htmlFor="random">random</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="pain"
            checked={radioFilter === "gross"}
            value="gross"
          />
          <label htmlFor="gross">gross</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="pain"
            checked={radioFilter === "pain"}
            value="pain"
          />
          <label htmlFor="pain">pain</label>
        </li>
      </ul>
    </div>
  );
}
