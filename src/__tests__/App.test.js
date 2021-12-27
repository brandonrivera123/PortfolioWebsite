import {
  render,
  // , screen
} from "@testing-library/react";
import App from "../App";
import { DarkModeState } from "../styles/theme/ThemeHandler";

window.scrollTo = jest.fn();

afterAll(() => {
  jest.clearAllMocks();
});

test("App renders", () => {
  render(
    <DarkModeState>
      <App />
    </DarkModeState>
  );
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
