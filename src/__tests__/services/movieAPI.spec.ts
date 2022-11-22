import axios from "axios";
import movieAPI from "../../services/movieAPI";
jest.mock("axios");
jest.mock("../../services/movieAPI", () => {
  return {
    fetchMovie: () => {
      return {
        data: {
          Title: "Game of Thrones",
          Year: "2011–2019",
          Rated: "TV-MA",
          Released: "17 Apr 2011",
          Runtime: "57 min",
          Genre: "Action, Adventure, Drama",
        },
      };
    },
  };
});

describe("movieAPI.ts", () => {
  const movie = {
    Title: "Game of Thrones",
    Year: "2011–2019",
    Rated: "TV-MA",
    Released: "17 Apr 2011",
    Runtime: "57 min",
    Genre: "Action, Adventure, Drama",
  };
  it("fetch movie API", async () => {
    axios.get = jest.fn().mockResolvedValue(movie);
    const { data } = await movieAPI.fetchMovie("Game of Thrones");
    expect(data).toEqual(movie);
  });
});
