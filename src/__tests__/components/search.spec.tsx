import { render, fireEvent } from "@testing-library/react";
import { Search } from "../../components/search/search";
import movieAPI from "../../services/movieAPI";
import { BrowserRouter as Router } from "react-router-dom";
describe("search.tsx", () => {
  it("should render search component", () => {
    const { container } = render(
      <Router>
        <Search />
      </Router>
    );
    expect(container).toBeInTheDocument();
  });
  it("should fire button click", () => {
    const { getByText } = render(
      <Router>
        <Search />
      </Router>
    );
    const handleClick = jest
      .spyOn(movieAPI, "fetchMovieByTitle")
      .mockImplementation((title: string) => Promise.resolve());
    fireEvent.click(getByText("Search"));
    expect(handleClick).toBeCalledTimes(1);
  });
  it("should fire onChange Input", () => {
    const { getByPlaceholderText } = render(
      <Router>
        <Search />
      </Router>
    );
    const input = getByPlaceholderText("Search") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "Narnia" } });
    expect(input.value).toBe("Narnia");
  });
});
