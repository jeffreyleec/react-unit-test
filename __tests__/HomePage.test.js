import Home from "@/app/page";
const { render, screen } = require("@testing-library/react");

describe("Home Page - Rendering", () => {
  it("should have Home Page text", () => {
    render(<Home />);
    expect(screen.getByText("Home Page")).toBeInTheDocument();
  });

  it("should have button with text click me", () => {
    render(<Home />);
    expect(screen.getByRole("button", { name: "click me" }));
  });
});
