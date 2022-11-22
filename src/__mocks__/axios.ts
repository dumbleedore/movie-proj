export default {
  get: jest.fn().mockResolvedValue({
    data: {
      Title: "Game of Thrones",
      Year: "2011–2019",
      Rated: "TV-MA",
      Released: "17 Apr 2011",
      Runtime: "57 min",
      Genre: "Action, Adventure, Drama",
      Director: "N/A",
    },
  }),
};
