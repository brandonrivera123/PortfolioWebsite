import {
  render,
  // , screen
} from "@testing-library/react";
import App from "../App";
import { DarkModeState } from "../styles/theme/ThemeHandler";

test("App renders", () => {
  render(
    <DarkModeState>
      <App />
    </DarkModeState>
  );
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
