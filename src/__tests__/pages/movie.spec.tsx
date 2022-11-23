import { render } from "@testing-library/react";
import { Movie } from "../../pages/movie/movie";
import { BrowserRouter as Router } from "react-router-dom";
jest.mock("react-router-dom", () => {
  return {
    useLocation: {
      state: {
        Title: "teste",
      },
    },
  };
});
describe("movie.tsx", () => {
  it("render movie component", () => {});
});
