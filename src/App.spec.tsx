import { render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

test("renders the correct content", () => {
  // Render the component
  render(<App />);

  // Use queries to find elements, and assert their content
  expect(screen.getByText("This is the app")).toBeInTheDocument();
});