import React from "react";
import { render, fireEvent, getByAltText } from "@testing-library/react";
import Header from "../views/Header";

test("render", () => {
  const { container, getByText, getByAltText } = render(<Header />);
  const homeLink = getByText("Gallery");
  const image = getByAltText(/profile image/i);

  fireEvent.click(homeLink);
  expect(homeLink.href).toBe("http://localhost/");
  expect(homeLink.title).toBe("Home");

  expect(image.title).toBe("Profile Image");

  expect(container).toMatchSnapshot();
});
