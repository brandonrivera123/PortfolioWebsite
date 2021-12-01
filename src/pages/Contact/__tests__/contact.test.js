import {
  render,
  screen,
  // , cleanup
} from "@testing-library/react";
// import renderer from "react-test-renderer";
import { Contact } from "..";
// import { Provider } from "react-redux";

// import store from "../../../store";

// afterEach(() => {
//     cleanup();
//   });

describe("Smoke Tests", () => {
  it("renders home page", () => {
    render(<Contact />);
  });
  it("checks if text appears", () => {
    render(<Contact />);
    const linkElement = screen.getByText(/test/i);
    expect(linkElement).toBeInTheDocument();
  });
  it.todo("See");
});
