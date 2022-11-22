import { render, fireEvent } from "@testing-library/react";
import { resolve } from "path";
import { Search } from "../../components/search/search";
import movieAPI from "../../services/movieAPI";

describe("search.tsx", () => {
  it("should render search component", () => {
    const { container } = render(<Search />);
    expect(container).toBeInTheDocument();
  });
  it("should fire button click", () => {
    const { getByText } = render(<Search />);
    const handleClick = jest
      .spyOn(movieAPI, "fetchMovieByTitle")
      .mockImplementation((title: string) => Promise.resolve());
    fireEvent.click(getByText("Search"));
    expect(handleClick).toBeCalledTimes(1);
  });
});
