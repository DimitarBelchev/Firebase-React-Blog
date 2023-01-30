/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, fireEvent,cleanup } from "@testing-library/react";
import Header from "./Header";

afterEach(()=>{
    cleanup()
})

describe("Header component", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(container).toBeTruthy();
  });

  it("renders Login link when no user is logged in", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const loginLink = getByText("Login");
    expect(loginLink).toBeTruthy();
  });

  it("renders Logout link when a user is logged in", () => {
    const user = {
      uid: "1",
      displayName: "User 1"
    };
    const { getByText } = render(
      <MemoryRouter>
        <Header user={user} />
      </MemoryRouter>
    );
    const logoutLink = getByText("Logout");
    expect(logoutLink).toBeTruthy();
  });

  it("calls handleLogout function when Logout link is clicked", () => {
    const user = {
      uid: "1",
      displayName: "User 1"
    };
    const handleLogout = jest.fn();
    const { getByText } = render(
      <MemoryRouter>
        <Header user={user} handleLogout={handleLogout} />
      </MemoryRouter>
    );
    const logoutLink = getByText("Logout");
    fireEvent.click(logoutLink);
    expect(handleLogout).toHaveBeenCalled();
  });

  it("highlights the active navigation link", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Header active="home" />
      </MemoryRouter>
    );
    const homeLink = getByText("Home");
    expect(homeLink).toHaveClass("active");
  });

});