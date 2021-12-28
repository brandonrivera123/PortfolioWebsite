import {
  render,
  screen,
  // , cleanup
} from "@testing-library/react";
// import renderer from "react-test-renderer";
import { Projects } from "..";
// import { Provider } from "react-redux";

// import store from "../../../store";

// afterEach(() => {
//     cleanup();
//   });

describe("Smoke Tests", () => {
  it("renders home page", () => {
    render(<Projects />);
  });
  it("checks if text appears", () => {
    render(<Projects />);
    const linkElement = screen.getByText(/Coming Soon/i);
    expect(linkElement).toBeInTheDocument();
  });
  it.todo("Blank Todo");
});
