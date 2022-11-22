import { cleanup } from "@testing-library/react";
import movieAPI from "../../services/movieAPI";
afterEach(cleanup);
describe("movieAPI.ts", () => {
  it("fetchs the data", async () => {
    const movie = {
      Title: "Game of Thrones",
      Year: "2011–2019",
      Rated: "TV-MA",
      Released: "17 Apr 2011",
      Runtime: "57 min",
      Genre: "Action, Adventure, Drama",
      Director: "N/A",
    };
    const data = await movieAPI.fetchMovieByTitle("Game of Thrones");

    // ASSERTS
    expect(data).toBeTruthy();
    expect(data).toEqual(movie);
  });
});
