import { render, fireEvent } from "@testing-library/react";
import { Search } from "../../components/search/search";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import movieAPI from "../../services/movieAPI";
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => jest.fn(),
}));
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
    const logSpy = jest
      .spyOn(movieAPI, "fetchMovieByTitle")
      .mockResolvedValue(() => Promise.resolve());
    const search = getByText("Search");
    fireEvent.click(search);
    expect(logSpy).toHaveBeenCalledTimes(1);
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
