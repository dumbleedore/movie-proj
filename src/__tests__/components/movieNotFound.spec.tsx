import { render, RenderResult } from "@testing-library/react";
import { MovieNotFound } from "../../components/movieNotFound/movieNotFound";
describe("MovieNotFound.tsx", () => {
  let container: RenderResult<
    typeof import("@testing-library/dom/types/queries"),
    HTMLElement,
    HTMLElement
  >;
  beforeEach(() => {
    container = render(<MovieNotFound />);
  });
  it("renders movieNotFound.tsx", async () => {
    expect(await container.findByText("Movie Not Found")).toBeInTheDocument();
  });
  it("should render svg", async () => {
    expect(await container.findByTestId("error-icon")).toBeInTheDocument();
  });
});
