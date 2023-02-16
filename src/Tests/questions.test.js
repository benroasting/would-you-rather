import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Question from "../Components/Questions";

describe("Question", () => {
  it("works", () => {
    render(
      <Question
        color={"#000000"}
        tag={"weird"}
        header={"Would You Rather"}
        question1={"this"}
        question2={"that"}
      />
    );
    expect(screen.getByTestId("header")).toHaveTextContent("Would You Rather");
  });
});
