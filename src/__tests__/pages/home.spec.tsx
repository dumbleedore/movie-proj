import { Home } from "../../pages/home/home";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
describe("home.tsx", () => {
  it("should render Home.tsx", () => {
    const { container } = render(
      <Router>
        <Home />
      </Router>
    );
    expect(container).toBeInTheDocument();
  });
});
