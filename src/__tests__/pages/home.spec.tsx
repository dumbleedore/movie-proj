import { Home } from "../../pages/home/home";
import { render } from "@testing-library/react";
describe("home.tsx", () => {
  it("should render Home.tsx", () => {
    const { container } = render(<Home />);
    expect(container).toBeInTheDocument();
  });
});
