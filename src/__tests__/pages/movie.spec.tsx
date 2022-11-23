import { render } from "@testing-library/react";
import { Movie } from "../../pages/movie/movie";
import { BrowserRouter as Router } from "react-router-dom";
describe("movie.tsx", () => {
  it("should render component movie.tsx", () => {
    const { container } = render(
      <Router>
        <Movie />
      </Router>
    );
    expect(container).toBeInTheDocument();
  });
});
