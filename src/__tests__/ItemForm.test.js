// ItemForm.test.js
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ItemForm from "../components/ItemForm";

// Mock the uuid function to return a known ID
jest.mock("uuid", () => ({
  v4: () => "known-id",
}));

test("calls the onItemFormSubmit callback prop when the form is submitted", () => {
  const onItemFormSubmit = jest.fn();

  const { getByText, getByTestId } = render(
    <ItemForm onItemFormSubmit={onItemFormSubmit} />
  );

  const nameInput = getByTestId("name-input");
  const categorySelect = getByTestId("category-select");
  const submitButton = getByText(/Add to List/);

  fireEvent.change(nameInput, {
    target: { value: "Ice Cream" },
  });

  fireEvent.change(categorySelect, {
    target: { value: "Dessert" },
  });

  fireEvent.click(submitButton);

  expect(onItemFormSubmit).toHaveBeenCalled();
  expect(onItemFormSubmit).toHaveBeenCalledWith(expect.any(Object));
});



test("clears the input fields after the form is submitted", () => {
  const onItemFormSubmit = jest.fn();

  const { getByText, getByTestId } = render(
    <ItemForm onItemFormSubmit={onItemFormSubmit} />
  );

  fireEvent.change(getByTestId("name-input"), {
    target: { value: "Ice Cream" },
  });

  fireEvent.change(getByTestId("category-select"), {
    target: { value: "Dessert" },
  });

  fireEvent.submit(getByText(/Add to List/));

  expect(getByTestId("name-input").value).toBe("");
  expect(getByTestId("category-select").value).toBe("");
});
