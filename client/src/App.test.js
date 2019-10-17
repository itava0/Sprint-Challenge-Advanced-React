import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import Navbar from "./components/Navbar";

test("renders without crashing", () => {
  render(<App />);
});

test("renders without crashing", () => {
  render(<Navbar />);
});

test("Tigers header is found", () => {
  const { getByText } = render(<Navbar />);

  getByText(/Women's World Cup players/i);
});
