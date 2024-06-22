import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header Component", () => {
  test("H1 should render correctly", () => {
    render(<Header />);
    const headerOneElement = screen.getByRole(
      "heading",
      { name: "MacBook Air" },
      { level: 1 }
    );
    expect(headerOneElement).toBeInTheDocument();
    expect(headerOneElement).toHaveClass("fw-bold");
  });
});
