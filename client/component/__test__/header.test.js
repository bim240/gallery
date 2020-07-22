import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Header from "../views/Header";

test("render", () => {
  const { container, getByText } = render(<Header />);
  const homeLink = getByText("Gallery");

  fireEvent.click(homeLink);
  expect(homeLink.href).toBe("http://localhost/");
  expect(homeLink.title).toBe("Home");

  expect(container).toMatchSnapshot();
});
