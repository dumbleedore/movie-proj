import { render, fireEvent } from "@testing-library/react";
import { Search } from "../../components/search/search";
describe("search.tsx", () => {
  it("should render search component", () => {
    const { container } = render(<Search />);
    expect(container).toBeInTheDocument();
  });
});
