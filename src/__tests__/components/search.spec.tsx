import {
  render,
  fireEvent,
  RenderResult,
  waitFor,
  cleanup,
} from "@testing-library/react";
import { Search } from "../../components/search/search";
import { BrowserRouter as Router } from "react-router-dom";
import movieAPI from "../../services/movieAPI";
import { debug } from "console";
describe("search.tsx", () => {
  let container: RenderResult<
    typeof import("@testing-library/dom/types/queries"),
    HTMLElement,
    HTMLElement
  >;
  beforeEach(() => {
    container = render(
      <Router>
        <Search />
      </Router>
    );
  });
  afterEach(() => {
    cleanup();
  });
  it("should render spinner", async () => {
    const button = container.getByText("Search");
    await fireEvent.click(button);
    const spinner = container.getByTestId("spinner");
    await waitFor(() => {
      expect(spinner).toBeInTheDocument();
    });
  });
  it("should change input", () => {
    const input = container.getByPlaceholderText("Search") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "Game of Thrones" } });
    expect(input.value).toBe("Game of Thrones");
  });
});
