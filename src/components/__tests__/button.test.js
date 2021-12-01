import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Button } from "..";

describe("Button Smoke Test", () => {
  it("renders button component", () => {
    render(<Button name="Test" />);
    const buttonText = screen.getByText(/test/i);
    expect(buttonText).toBeInTheDocument();
  });
  it("matches snapshot", () => {
    const tree = renderer.create(<Button className="button" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
