const utils = {
  doesMovieNotExists: (data: any): boolean => {
    return data?.Response == "False";
  },
};
export default utils;
