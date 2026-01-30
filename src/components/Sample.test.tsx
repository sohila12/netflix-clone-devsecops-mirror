import { render, screen } from "@testing-library/react";
import Sample from "./Sample";

describe("Sample component", () => {
  it("renders heading", () => {
    render(<Sample />);
    expect(screen.getByText("Netflix Clone")).toBeInTheDocument();
  });
});
