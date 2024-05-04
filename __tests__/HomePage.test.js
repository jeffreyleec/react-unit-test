import Home from "@/app/page";
const { render, screen } = require("@testing-library/react");

describe("Home Page - Rendering", () => {
  it("should have Home Page text", () => {
    render(<Home />);
    screen.getByText("Home Page");
  });
});
