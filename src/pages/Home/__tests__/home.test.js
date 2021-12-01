import {
  render,
  screen,
  // , cleanup
} from "@testing-library/react";
// import renderer from "react-test-renderer";
import { Home } from "..";
// import { Provider } from "react-redux";

// import store from "../../../store";

// afterEach(() => {
//     cleanup();
//   });

test("renders Home page", () => {
  render(<Home />);
  const linkElement = screen.getByText(/contact info/i);
  expect(linkElement).toBeInTheDocument();
});
